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

    queryset = models.timeline.objects.all().order_by("sequence")
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.timelineFilter
    serializer_class = serializers.timelineSerializer
    # permission_classes = [permissions.IsAuthenticated]

class our_teamViewSet(viewsets.ModelViewSet):
    """ViewSet for the our_team class"""

    queryset = models.our_team.objects.all().order_by("sequence")
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.ourteamFilter
    serializer_class = serializers.our_teamSerializer
    # permission_classes = [permissions.IsAuthenticated]