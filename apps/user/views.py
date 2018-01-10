# from django.shortcuts import render
import json
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from backend.helpers import InputErrorMessage, JSONResponse
from user.permissions import IsOwnerOrReadOnly
from .models import UserSerialiser, User


# Create your views here.
class UserShow(APIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny, )

    #permission_classes = (IsOwnerOrReadOnly)

    def get(self, request, format=None):
        serializer = UserSerialiser(request.user)
        return JSONResponse(serializer.data)


class Login(APIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny, )

    def post(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return InputErrorMessage("Invalid JSON body")
        username = data.get('username')
        password = data.get('password')
        if "username" not in data:
            return InputErrorMessage("username not provide.")
        if "password" not in data:
            return InputErrorMessage("password not provide.")
        if User.objects.filter(username=data["username"]).exists():
            userResult = User.objects.filter(
                username=data["username"])
            print(userResult)
            return JSONResponse({
                
            })
            if (len(userResult) > 0):
                # 记忆已登录用户
                self.request.session['user_id'] = user.id

            else:
                return JSONResponse({
                    "code": 400,
                    "message": "Password error.",
                })
        else:
            return JSONResponse({
                "code": 400,
                "message": "Username error."
            })

class Register(APIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny, )

    def post(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError:
            return InputErrorMessage("Invalid JSON body")
        if "username" not in data:
            return InputErrorMessage("username not provide.")
        if User.objects.filter(username=data["username"]).exists():
            return InputErrorMessage("username is used.")
        if "email" not in data:
            return InputErrorMessage("email not provide.")
        if User.objects.filter(email=data["email"]).exists():
            return InputErrorMessage("email is used.")
        if "password" not in data:
            return InputErrorMessage("password not provide.")
        user = User.objects.create_user(
            username=data["username"],
            email=data["email"],
            password=data["password"])
        user.save()
        return JSONResponse({
            "code": 200,
            "message": "OK",
        })