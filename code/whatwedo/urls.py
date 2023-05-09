from django.urls import path, include
from rest_framework import routers

from . import api
from . import views


router = routers.DefaultRouter()
router.register("howwedo", api.howwedoViewSet)
router.register("mil4edu", api.mil4eduViewSet)
router.register("card", api.cardViewSet)
router.register("wtd", api.wtdViewSet)

urlpatterns = (
    path("api/v1/", include(router.urls)),
    path("whatwedo/howwedo/", views.howwedoListView.as_view(), name="whatwedo_howwedo_list"),
    path("whatwedo/howwedo/create/", views.howwedoCreateView.as_view(), name="whatwedo_howwedo_create"),
    path("whatwedo/howwedo/detail/<int:pk>/", views.howwedoDetailView.as_view(), name="whatwedo_howwedo_detail"),
    path("whatwedo/howwedo/update/<int:pk>/", views.howwedoUpdateView.as_view(), name="whatwedo_howwedo_update"),
    path("whatwedo/howwedo/delete/<int:pk>/", views.howwedoDeleteView.as_view(), name="whatwedo_howwedo_delete"),
    path("whatwedo/mil4edu/", views.mil4eduListView.as_view(), name="whatwedo_mil4edu_list"),
    path("whatwedo/mil4edu/create/", views.mil4eduCreateView.as_view(), name="whatwedo_mil4edu_create"),
    path("whatwedo/mil4edu/detail/<int:pk>/", views.mil4eduDetailView.as_view(), name="whatwedo_mil4edu_detail"),
    path("whatwedo/mil4edu/update/<int:pk>/", views.mil4eduUpdateView.as_view(), name="whatwedo_mil4edu_update"),
    path("whatwedo/mil4edu/delete/<int:pk>/", views.mil4eduDeleteView.as_view(), name="whatwedo_mil4edu_delete"),
    path("whatwedo/card/", views.cardListView.as_view(), name="whatwedo_card_list"),
    path("whatwedo/card/create/", views.cardCreateView.as_view(), name="whatwedo_card_create"),
    path("whatwedo/card/detail/<int:pk>/", views.cardDetailView.as_view(), name="whatwedo_card_detail"),
    path("whatwedo/card/update/<int:pk>/", views.cardUpdateView.as_view(), name="whatwedo_card_update"),
    path("whatwedo/card/delete/<int:pk>/", views.cardDeleteView.as_view(), name="whatwedo_card_delete"),
    path("whatwedo/wtd/", views.wtdListView.as_view(), name="whatwedo_wtd_list"),
    path("whatwedo/wtd/create/", views.wtdCreateView.as_view(), name="whatwedo_wtd_create"),
    path("whatwedo/wtd/detail/<int:pk>/", views.wtdDetailView.as_view(), name="whatwedo_wtd_detail"),
    path("whatwedo/wtd/update/<int:pk>/", views.wtdUpdateView.as_view(), name="whatwedo_wtd_update"),
    path("whatwedo/wtd/delete/<int:pk>/", views.wtdDeleteView.as_view(), name="whatwedo_wtd_delete"),

)
