from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Productos

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Productos
        fields='__all__'
