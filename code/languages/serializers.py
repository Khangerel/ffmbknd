from rest_framework import serializers
from django_filters import rest_framework as filters
from . import models

class privacyFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.privacy_policy
        fields = ['lang_id']

class languageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.language
        fields = [
            "created",
            "name",
            "short_name",
            "id",
            "logo",
        ]

class privacy_policySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.privacy_policy
        fields = [
            "created",
            "last_updated",
            "body",
            "lang_id",
        ]
