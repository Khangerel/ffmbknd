from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("language", api.languageViewSet)

urlpatterns = (
    path("api/v1/", include(router.urls)),
    path("languages/language/", views.languageListView.as_view(), name="languages_language_list"),
    path("languages/language/create/", views.languageCreateView.as_view(), name="languages_language_create"),
    path("languages/language/detail/<int:pk>/", views.languageDetailView.as_view(), name="languages_language_detail"),
    path("languages/language/update/<int:pk>/", views.languageUpdateView.as_view(), name="languages_language_update"),
    path("languages/language/delete/<int:pk>/", views.languageDeleteView.as_view(), name="languages_language_delete"),

)
