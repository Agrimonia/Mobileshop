from django.conf.urls import url
from .views import UserShow, Login, Register

urlpatterns = [
    url(r'^$', UserShow.as_view()),
    url(r'^login/',Login.as_view()),
    url(r'^register/', Register.as_view()),
]
