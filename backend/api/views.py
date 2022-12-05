import base64
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
import requests
# import json
from .models import Pokemon

class GeneratePokemons(APIView):
    def get(self, request, format=None):

        response = {}
        # Obtener los primeros 50 pokémones
        for i in range(1, 51):
            # Verifica si el pokemon existe en la base de datos
            if Pokemon.objects.filter(id=i).exists():
                print(f"Pokemon id {i} already exists")
                reponsePokemon = {}
                reponsePokemon["message"] = "Pokemon ya existe"
                response[str(i)] = reponsePokemon
                if i == 50:
                    # Si ya existen los 50 pokémones, se retorna un 1 indicando que ya estan creados
                    response["Table full"] = 1
                    return Response(response)
                continue

            # Obtener los datos de cada pokémon
            r = requests.get(f"https://pokeapi.co/api/v2/pokemon/{i}")
            r_status = r.status_code
            # si la respuesta es exitosa se continua
            if r_status == 200:
                # convertir a json
                pokemon = r.json()
                pokemon = Pokemon(
                    id=pokemon['id'],
                    name=pokemon['name'],
                    type1=pokemon['types'][0]['type']['name'],
                    type2=pokemon['types'][1]['type']['name'] if len(pokemon['types']) > 1 else None,
                    height=pokemon['height']/10,
                    weight=pokemon['weight']/10,
                    image_url=pokemon['sprites']['front_default'],
                    # image='uploads/'+str(i)+'.png'                    
                )
                pokemon.save()
                reponsePokemon = {}
                reponsePokemon['name'] = pokemon.name
                reponsePokemon['status'] = 200
                reponsePokemon['message'] = 'success'
                response[str(i)] = reponsePokemon
                print(f'Guardado a {pokemon.name} ')
            else:
                reponsePokemon = {}
                reponsePokemon['status'] = r.status_code
                reponsePokemon['message'] = 'success'
                response[str(i)] = reponsePokemon
        return Response(response)

# Retorna todos los pokemones en la base de datos
class getAllPokemons(APIView):
    def get(self, request, format=None):
        response = {}
        pokemons = Pokemon.objects.all()
        for pokemon in pokemons:
            response[pokemon.id] = {
                'id': pokemon.id,
                'name': pokemon.name,
                'type1': pokemon.type1,
                'type2': pokemon.type2,
                'height': pokemon.height,
                'weight': pokemon.weight,
                'image_url': pokemon.image_url,
            }
        return Response(response)
# Retorna todos los pokemones que pesen entre 30 y 80
class getByWeight(APIView):
    def get(self, request, format=None):
        response = {}
        # Si el pokemon pesa entre 30 y 80 lo retorna
        pokemons = Pokemon.objects.filter(weight__gte=30, weight__lte=80)
        for pokemon in pokemons:
            response[pokemon.id] = {
                'id': pokemon.id,
                'name': pokemon.name,
                'type1': pokemon.type1,
                'type2': pokemon.type2,
                'height': pokemon.height,
                'weight': pokemon.weight,
                'image_url': pokemon.image_url,
            }
        return Response(response)

# Retorna todos los pokemones de tipo grass (planta)
class getTypeGrass(APIView):
    def get(self, request, format=None):
        response = {}
        # if type1 or type2 of pokemon is grass return all pokemon in the db
        for pokemon in Pokemon.objects.all():
            if (pokemon.type1 == 'grass' or pokemon.type2 == 'grass'):
                response[pokemon.id] = {
                'id': pokemon.id,
                'name': pokemon.name,
                'type1': pokemon.type1,
                'type2': pokemon.type2,
                'height': pokemon.height,
                'weight': pokemon.weight,
                'image_url': pokemon.image_url,
                }
        return Response(response)

# Retorna los pokemonos tipo flying (volador) y más altos a 10
class getTypeFlying(APIView):
    def get(self, request, format=None):
        response = {}
        # if type1 or type2 of pokemon is flying and height is greater than 10 return all pokemon in the db
        for pokemon in Pokemon.objects.all():
            if (pokemon.type1 == 'flying' or pokemon.type2 == 'flying') and pokemon.height*100 > 10:
                response[pokemon.id] = {
                'id': pokemon.id,
                'name': pokemon.name,
                'type1': pokemon.type1,
                'type2': pokemon.type2,
                'height': pokemon.height,
                'weight': pokemon.weight,
                'image_url': pokemon.image_url,
                }
        return Response(response)

# Retorna todos los polemones pero con el nombre al revés
class getReverseName(APIView):
    def get(self, request, format=None):
        response = {}
        pokemons = Pokemon.objects.all()
        for pokemon in pokemons:
            response[pokemon.id] = {
                'id': pokemon.id,
                # invierte el nombre del pokemon
                'name': pokemon.name[::-1],
                'type1': pokemon.type1,
                'type2': pokemon.type2,
                'height': pokemon.height,
                'weight': pokemon.weight,
                'image_url': pokemon.image_url,
            }
        return Response(response)

# Eliminar todos los pokémones de la base de datos
class dropTablePokemon(APIView):
    def get(self, request, format=None):
        if Pokemon.objects.all().exists():
            Pokemon.objects.all().delete()
            response = {}
            response['message'] = 'success'
            return Response(response)
        else:
            response = {}
            response['message'] = 'table is empty'
            return Response(response)
    