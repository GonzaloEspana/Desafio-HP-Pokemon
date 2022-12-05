from django.db import models
class Pokemon(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    # Los pokémones de primera generación pueden tener máximo dos tipos
    #    https://pokemon.fandom.com/es/wiki/Primera_generaci%C3%B3n
    type1 = models.CharField(max_length=20)
    type2 = models.CharField(max_length=20, null=True, blank=True)
    height = models.FloatField()
    weight = models.FloatField()
    image_url = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.id} - {self.name} - {self.type1} - {self.type2} - {self.height} - {self.weight}"
