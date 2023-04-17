from rest_framework import viewsets, permissions

from . import serializers
from . import models


class howwedoViewSet(viewsets.ModelViewSet):
    """ViewSet for the howwedo class"""

    queryset = models.howwedo.objects.all()
    serializer_class = serializers.howwedoSerializer
    permission_classes = [permissions.IsAuthenticated]


class mil4eduViewSet(viewsets.ModelViewSet):
    """ViewSet for the mil4edu class"""

    queryset = models.mil4edu.objects.all()
    serializer_class = serializers.mil4eduSerializer
    permission_classes = [permissions.IsAuthenticated]


class cardViewSet(viewsets.ModelViewSet):
    """ViewSet for the card class"""

    queryset = models.card.objects.all()
    serializer_class = serializers.cardSerializer
    permission_classes = [permissions.IsAuthenticated]


class wtdViewSet(viewsets.ModelViewSet):
    """ViewSet for the wtd class"""

    queryset = models.wtd.objects.all()
    serializer_class = serializers.wtdSerializer
    permission_classes = [permissions.IsAuthenticated]
