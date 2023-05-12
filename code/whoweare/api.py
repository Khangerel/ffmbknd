from rest_framework import viewsets, permissions
from django_filters.rest_framework import DjangoFilterBackend
from . import serializers
from . import models


class mainViewSet(viewsets.ModelViewSet):
    """ViewSet for the main class"""

    queryset = models.main.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.mainFilter
    serializer_class = serializers.mainSerializer
    # permission_classes = [permissions.IsAuthenticated]


class timelineViewSet(viewsets.ModelViewSet):
    """ViewSet for the timeline class"""

    queryset = models.timeline.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.timelineFilter
    serializer_class = serializers.timelineSerializer
    # permission_classes = [permissions.IsAuthenticated]
