from rest_framework import viewsets, permissions

from . import serializers
from . import models


class categoryViewSet(viewsets.ModelViewSet):
    """ViewSet for the category class"""

    queryset = models.category.objects.all()
    serializer_class = serializers.categorySerializer
    permission_classes = [permissions.IsAuthenticated]


class postViewSet(viewsets.ModelViewSet):
    """ViewSet for the post class"""

    queryset = models.post.objects.all()
    serializer_class = serializers.postSerializer
    permission_classes = [permissions.IsAuthenticated]
