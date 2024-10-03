from ecommapp import views
from django.urls import path


urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('products/', views.getProductos, name="getproductos"),
    path('product/<str:pk>', views.getProducto, name="getproducto")
]