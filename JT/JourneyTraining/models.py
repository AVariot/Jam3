from django.db import models
from django.contrib.auth.models import AbstractUser

class DC(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Butterfly(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Curl(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Marteau(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Dips(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Tirage_pouli(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Traction(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Tirage_horizontal(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Squat(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Fente(models.Model):
    series = models.BigIntegerField()
    rep = models.BigIntegerField()
    repos = models.BigIntegerField()
    poids = models.FloatField()

class Course(models.Model):
    minu = models.BigIntegerField()
    km = models.FloatField()


class Exo(models.Model):
    dc = models.ForeignKey(DC, on_delete=models.CASCADE)
    butterfly = models.ForeignKey(Butterfly, on_delete=models.CASCADE)
    curl = models.ForeignKey(Curl, on_delete=models.CASCADE)
    marteau = models.ForeignKey(Marteau, on_delete=models.CASCADE)
    dips = models.ForeignKey(Dips, on_delete=models.CASCADE)
    tirage_pouli = models.ForeignKey(Tirage_pouli, on_delete=models.CASCADE)
    traction = models.ForeignKey(Traction, on_delete=models.CASCADE)
    tirage_horizontal = models.ForeignKey(Tirage_horizontal, on_delete=models.CASCADE)
    squat = models.ForeignKey(Squat, on_delete=models.CASCADE)
    fente = models.ForeignKey(Fente, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class UserModel(AbstractUser):
    poids = models.FloatField()
    taille = models.FloatField(help_text="En cm")
    exo = models.ForeignKey(Exo, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.username} avec une taille de {self.taille} cm et un poids de {self.poids} kg."
