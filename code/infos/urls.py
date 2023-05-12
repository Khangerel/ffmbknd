from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("partner", api.partnerViewSet)
router.register("landing", api.landingViewSet)

urlpatterns = (
    path("v1/", include(router.urls)),
    path("infos/partner/", views.partnerListView.as_view(), name="infos_partner_list"),
    path("infos/partner/create/", views.partnerCreateView.as_view(), name="infos_partner_create"),
    path("infos/partner/detail/<int:pk>/", views.partnerDetailView.as_view(), name="infos_partner_detail"),
    path("infos/partner/update/<int:pk>/", views.partnerUpdateView.as_view(), name="infos_partner_update"),
    path("infos/partner/delete/<int:pk>/", views.partnerDeleteView.as_view(), name="infos_partner_delete"),
    path("infos/landing/", views.landingListView.as_view(), name="infos_landing_list"),
    path("infos/landing/create/", views.landingCreateView.as_view(), name="infos_landing_create"),
    path("infos/landing/detail/<int:pk>/", views.landingDetailView.as_view(), name="infos_landing_detail"),
    path("infos/landing/update/<int:pk>/", views.landingUpdateView.as_view(), name="infos_landing_update"),
    path("infos/landing/delete/<int:pk>/", views.landingDeleteView.as_view(), name="infos_landing_delete"),

)
