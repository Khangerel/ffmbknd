from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("User", api.UserViewSet)

urlpatterns = (
    path("api/v1/", include(router.urls)),
    path("users/User/", views.UserListView.as_view(), name="users_User_list"),
    path("users/User/create/", views.UserCreateView.as_view(), name="users_User_create"),
    path("users/User/detail/<int:pk>/", views.UserDetailView.as_view(), name="users_User_detail"),
    path("users/User/update/<int:pk>/", views.UserUpdateView.as_view(), name="users_User_update"),
    path("users/User/delete/<int:pk>/", views.UserDeleteView.as_view(), name="users_User_delete"),

)
