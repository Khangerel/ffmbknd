from rest_framework import viewsets, permissions

from . import serializers
from . import models


class mainViewSet(viewsets.ModelViewSet):
    """ViewSet for the main class"""

    queryset = models.main.objects.all()
    serializer_class = serializers.mainSerializer
    permission_classes = [permissions.IsAuthenticated]


class timelineViewSet(viewsets.ModelViewSet):
    """ViewSet for the timeline class"""

    queryset = models.timeline.objects.all()
    serializer_class = serializers.timelineSerializer
    permission_classes = [permissions.IsAuthenticated]
