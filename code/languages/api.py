from rest_framework import viewsets, permissions
from django_filters.rest_framework import DjangoFilterBackend
from . import serializers
from . import models


class languageViewSet(viewsets.ModelViewSet):
    """ViewSet for the language class"""

    queryset = models.language.objects.all()
    serializer_class = serializers.languageSerializer
    # permission_classes = [permissions.IsAuthenticated]

class privacy_policyViewSet(viewsets.ModelViewSet):
    """ViewSet for the privacy_policy class"""

    queryset = models.privacy_policy.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = serializers.privacyFilter
    serializer_class = serializers.privacy_policySerializer
    # permission_classes = [permissions.IsAuthenticated]