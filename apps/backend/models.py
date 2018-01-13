# -*- coding: utf-8 -*-
from django.db import models
from rest_framework import serializers


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=64)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    category = models.CharField(max_length=20, default='woman')
    sale = models.BooleanField(default=False)
    article = models.CharField(max_length=20, default='shoe')
    img = models.ImageField(default='shoe1.png')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'category', 'sale', 'article', 'img')