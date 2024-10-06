from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .serializer import ProductosSerializer, UserSerializer, UserSerializerWithToken
from .models import Productos
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    return Response('hola a todos')


@api_view(['GET'])
def getProductos(request):
    productos = Productos.objects.all()
    serializer = ProductosSerializer(productos, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProducto(request, pk):
    producto = Productos.objects.get(_id=pk)
    serializer = ProductosSerializer(producto, many=False)
    return Response(serializer.data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfiles(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)