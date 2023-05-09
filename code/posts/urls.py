from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("category", api.categoryViewSet)
router.register("post", api.postViewSet)

urlpatterns = (
    path("api/v1/", include(router.urls)),
    path("posts/category/", views.categoryListView.as_view(), name="posts_category_list"),
    path("posts/category/create/", views.categoryCreateView.as_view(), name="posts_category_create"),
    path("posts/category/detail/<slug:slug>/", views.categoryDetailView.as_view(), name="posts_category_detail"),
    path("posts/category/update/<slug:slug>/", views.categoryUpdateView.as_view(), name="posts_category_update"),
    path("posts/category/delete/<slug:slug>/", views.categoryDeleteView.as_view(), name="posts_category_delete"),
    path("posts/post/", views.postListView.as_view(), name="posts_post_list"),
    path("posts/post/create/", views.postCreateView.as_view(), name="posts_post_create"),
    path("posts/post/detail/<int:pk>/", views.postDetailView.as_view(), name="posts_post_detail"),
    path("posts/post/update/<int:pk>/", views.postUpdateView.as_view(), name="posts_post_update"),
    path("posts/post/delete/<int:pk>/", views.postDeleteView.as_view(), name="posts_post_delete"),

)
