from django.urls import path
from api import views

# urls posibles de acceso a la API
urlpatterns = [
    # Retorna todos los pokemones de la tabla
    path('api/getAllPokemons/', views.getAllPokemons.as_view()),
    # Genera los pokemones en caso de que no existan
    path('api/generate_pokemons/', views.GeneratePokemons.as_view()),
    # Retorna los tipo planta (grass)
    path('api/getTypeGrass/', views.getTypeGrass.as_view()),
    # Retorna los que pesan más de 30 y menos de 80 kilos
    path('api/getByWeight/', views.getByWeight.as_view()),
    # Retorna los son tipo volador (flying) y miden más de 10 centímetros
    path('api/getTypeFlying/', views.getTypeFlying.as_view()),
    # Retorna todos los pokemones pero con su nombre invertido
    path('api/getReverseName/', views.getReverseName.as_view()),
    # Borra la tabla de pokemones
    path('api/delete/', views.dropTablePokemon.as_view()),
    
]
