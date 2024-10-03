from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import ProductosSerializer
from .models import Productos

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('hola a todos')

@api_view(['GET'])
def getProductos(request):
    productos=Productos.objects.all()
    serializer=ProductosSerializer(productos,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProducto(request,pk):
    producto=Productos.objects.get(_id=pk)
    serializer=ProductosSerializer(producto,many=False)
    return Response(serializer.data)