from rest_framework import serializers
from django_filters import rest_framework as filters
from . import models

class howwedoFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.howwedo
        fields = ['lang_id']

class cardFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.card
        fields = ['lang_id']

class projectFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.project
        fields = ['lang_id']

class howwedoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.howwedo
        fields = [
            "icon",
            "last_updated",
            "created",
            "title",
            "color",
            "description",
            "lang_id",
        ]

class cardSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.card
        fields = [
            "description",
            "created",
            "title",
            "color",
            "last_updated",
            "lang_id",
        ]

class projectSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.project
        fields = [
            "description",
            "created",
            "last_updated",
            "title",
            "image",
            "impact",
            "color",
            "issue",
            "method",
            "lang_id",
        ]
