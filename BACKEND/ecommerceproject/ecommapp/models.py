from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Productos(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    nombreproducto=models.CharField(max_length=150)
    imagen=models.ImageField(null=True,blank=True)
    marcaproducto=models.CharField(max_length=100,null=True,blank=True)
    cagoriaproducto=models.CharField(max_length=100,null=True,blank=True)
    informacionproducto=models.TextField(null=True,blank=True)
    calificacion=models.DecimalField(max_digits=5, decimal_places=2,null=True,blank=True)
    numeroReseñas=models.IntegerField (null=True,blank=True,default=0)
    precio=models.DecimalField(max_digits=7, decimal_places=2,null=True,blank=True)
    cantidadenstock=models.IntegerField(null=True,blank=True,default=0)
    fechadecreacion=models.DateTimeField(auto_now_add=False)
    _id=models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.nombreproducto
