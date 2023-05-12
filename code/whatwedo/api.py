from rest_framework import viewsets, permissions
from django_filters.rest_framework import DjangoFilterBackend
from . import serializers
from . import models


class howwedoViewSet(viewsets.ModelViewSet):
    """ViewSet for the howwedo class"""

    queryset = models.howwedo.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.howwedoFilter
    serializer_class = serializers.howwedoSerializer
    # permission_classes = [permissions.IsAuthenticated]


class cardViewSet(viewsets.ModelViewSet):
    """ViewSet for the card class"""

    queryset = models.card.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.cardFilter
    serializer_class = serializers.cardSerializer
    # permission_classes = [permissions.IsAuthenticated]


class projectViewSet(viewsets.ModelViewSet):
    """ViewSet for the project class"""

    queryset = models.project.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.projectFilter
    serializer_class = serializers.projectSerializer
    # permission_classes = [permissions.IsAuthenticated]
