import json
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from backend.helpers import InputErrorMessage, JSONResponse
from .models import Product, ProductSerializer


# Create your views here.
class ProductList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return JSONResponse(serializer.data)

    def post(self, request):
        """
        希望的输入：(UTF-8 coded)
            {
                "products": {
                    "name": shoes,
                    "price": 324.10
                },
            }
        """
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return InputErrorMessage("Invalid JSON body")
        if "name" not in data:
            return InputErrorMessage("Product name not provide.")
        if Product.objects.filter(name=data["name"]).exists():
            return InputErrorMessage("Product name is used.")
        if "price" not in data:
            return InputErrorMessage("Product price not provide.")
        products = Product.objects.create(name=data["name"], price=data["price"])
        products.save()
        return JSONResponse({
            "code": 200,
            "message": "Success!",
        })