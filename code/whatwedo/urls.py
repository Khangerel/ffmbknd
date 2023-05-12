from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("howwedo", api.howwedoViewSet)
router.register("card", api.cardViewSet)
router.register("project", api.projectViewSet)

urlpatterns = (
    path("v1/", include(router.urls)),
    path("whatwedo/howwedo/", views.howwedoListView.as_view(), name="whatwedo_howwedo_list"),
    path("whatwedo/howwedo/create/", views.howwedoCreateView.as_view(), name="whatwedo_howwedo_create"),
    path("whatwedo/howwedo/detail/<int:pk>/", views.howwedoDetailView.as_view(), name="whatwedo_howwedo_detail"),
    path("whatwedo/howwedo/update/<int:pk>/", views.howwedoUpdateView.as_view(), name="whatwedo_howwedo_update"),
    path("whatwedo/howwedo/delete/<int:pk>/", views.howwedoDeleteView.as_view(), name="whatwedo_howwedo_delete"),
    path("whatwedo/card/", views.cardListView.as_view(), name="whatwedo_card_list"),
    path("whatwedo/card/create/", views.cardCreateView.as_view(), name="whatwedo_card_create"),
    path("whatwedo/card/detail/<int:pk>/", views.cardDetailView.as_view(), name="whatwedo_card_detail"),
    path("whatwedo/card/update/<int:pk>/", views.cardUpdateView.as_view(), name="whatwedo_card_update"),
    path("whatwedo/card/delete/<int:pk>/", views.cardDeleteView.as_view(), name="whatwedo_card_delete"),
    path("whatwedo/project/", views.projectListView.as_view(), name="whatwedo_project_list"),
    path("whatwedo/project/create/", views.projectCreateView.as_view(), name="whatwedo_project_create"),
    path("whatwedo/project/detail/<int:pk>/", views.projectDetailView.as_view(), name="whatwedo_project_detail"),
    path("whatwedo/project/update/<int:pk>/", views.projectUpdateView.as_view(), name="whatwedo_project_update"),
    path("whatwedo/project/delete/<int:pk>/", views.projectDeleteView.as_view(), name="whatwedo_project_delete"),

)
