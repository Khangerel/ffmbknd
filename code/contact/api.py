from rest_framework import viewsets, permissions

from . import serializers
from . import models


class infoViewSet(viewsets.ModelViewSet):
    """ViewSet for the info class"""

    queryset = models.info.objects.all()
    serializer_class = serializers.infoSerializer
    permission_classes = [permissions.IsAuthenticated]


class attendeeViewSet(viewsets.ModelViewSet):
    """ViewSet for the attendee class"""

    queryset = models.attendee.objects.all()
    serializer_class = serializers.attendeeSerializer
    permission_classes = [permissions.IsAuthenticated]
