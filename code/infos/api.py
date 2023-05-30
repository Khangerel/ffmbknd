from rest_framework import viewsets, permissions

from . import serializers
from . import models


class partnerViewSet(viewsets.ModelViewSet):
    """ViewSet for the partner class"""

    queryset = models.partner.objects.order_by("sequence").all()
    serializer_class = serializers.partnerSerializer
    # permission_classes = [permissions.IsAuthenticated]


class landingViewSet(viewsets.ModelViewSet):
    """ViewSet for the landing class"""

    queryset = models.landing.objects.all()
    serializer_class = serializers.landingSerializer
    # permission_classes = [permissions.IsAuthenticated]
