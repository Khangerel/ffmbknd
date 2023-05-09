from rest_framework import viewsets, permissions

from . import serializers
from . import models


class languageViewSet(viewsets.ModelViewSet):
    """ViewSet for the language class"""

    queryset = models.language.objects.all()
    serializer_class = serializers.languageSerializer
    permission_classes = [permissions.IsAuthenticated]
