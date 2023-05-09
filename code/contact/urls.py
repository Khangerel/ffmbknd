from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("info", api.infoViewSet)
router.register("attendee", api.attendeeViewSet)

urlpatterns = (
    path("api/v1/", include(router.urls)),
    path("contact/info/", views.infoListView.as_view(), name="contact_info_list"),
    path("contact/info/create/", views.infoCreateView.as_view(), name="contact_info_create"),
    path("contact/info/detail/<int:pk>/", views.infoDetailView.as_view(), name="contact_info_detail"),
    path("contact/info/update/<int:pk>/", views.infoUpdateView.as_view(), name="contact_info_update"),
    path("contact/info/delete/<int:pk>/", views.infoDeleteView.as_view(), name="contact_info_delete"),
    path("contact/attendee/", views.attendeeListView.as_view(), name="contact_attendee_list"),
    path("contact/attendee/create/", views.attendeeCreateView.as_view(), name="contact_attendee_create"),
    path("contact/attendee/detail/<int:pk>/", views.attendeeDetailView.as_view(), name="contact_attendee_detail"),
    path("contact/attendee/update/<int:pk>/", views.attendeeUpdateView.as_view(), name="contact_attendee_update"),
    path("contact/attendee/delete/<int:pk>/", views.attendeeDeleteView.as_view(), name="contact_attendee_delete"),

)
