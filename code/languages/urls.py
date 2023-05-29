from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("language", api.languageViewSet)
router.register("privacy_policy", api.privacy_policyViewSet)

urlpatterns = (
    path("v1/", include(router.urls)),
    path("languages/language/", views.languageListView.as_view(), name="languages_language_list"),
    path("languages/language/create/", views.languageCreateView.as_view(), name="languages_language_create"),
    path("languages/language/detail/<int:pk>/", views.languageDetailView.as_view(), name="languages_language_detail"),
    path("languages/language/update/<int:pk>/", views.languageUpdateView.as_view(), name="languages_language_update"),
    path("languages/language/delete/<int:pk>/", views.languageDeleteView.as_view(), name="languages_language_delete"),
    path("languages/privacy_policy/", views.privacy_policyListView.as_view(), name="languages_privacy_policy_list"),
    path("languages/privacy_policy/create/", views.privacy_policyCreateView.as_view(), name="languages_privacy_policy_create"),
    path("languages/privacy_policy/detail/<int:pk>/", views.privacy_policyDetailView.as_view(), name="languages_privacy_policy_detail"),
    path("languages/privacy_policy/update/<int:pk>/", views.privacy_policyUpdateView.as_view(), name="languages_privacy_policy_update"),
    path("languages/privacy_policy/delete/<int:pk>/", views.privacy_policyDeleteView.as_view(), name="languages_privacy_policy_delete"),
)
