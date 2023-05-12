from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("main", api.mainViewSet)
router.register("timeline", api.timelineViewSet)

urlpatterns = (
    path("v1/", include(router.urls)),
    path("whoweare/main/", views.mainListView.as_view(), name="whoweare_main_list"),
    path("whoweare/main/create/", views.mainCreateView.as_view(), name="whoweare_main_create"),
    path("whoweare/main/detail/<int:pk>/", views.mainDetailView.as_view(), name="whoweare_main_detail"),
    path("whoweare/main/update/<int:pk>/", views.mainUpdateView.as_view(), name="whoweare_main_update"),
    path("whoweare/main/delete/<int:pk>/", views.mainDeleteView.as_view(), name="whoweare_main_delete"),
    path("whoweare/timeline/", views.timelineListView.as_view(), name="whoweare_timeline_list"),
    path("whoweare/timeline/create/", views.timelineCreateView.as_view(), name="whoweare_timeline_create"),
    path("whoweare/timeline/detail/<int:pk>/", views.timelineDetailView.as_view(), name="whoweare_timeline_detail"),
    path("whoweare/timeline/update/<int:pk>/", views.timelineUpdateView.as_view(), name="whoweare_timeline_update"),
    path("whoweare/timeline/delete/<int:pk>/", views.timelineDeleteView.as_view(), name="whoweare_timeline_delete"),

)
