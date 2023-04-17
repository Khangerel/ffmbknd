from rest_framework import viewsets, permissions

from . import serializers
from . import models


class UserViewSet(viewsets.ModelViewSet):
    """ViewSet for the User class"""

    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.CustomUserSerializer
    permission_classes = [permissions.IsAuthenticated]
