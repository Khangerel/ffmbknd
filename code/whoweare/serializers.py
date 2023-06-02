from rest_framework import serializers
from django_filters import rest_framework as filters
from . import models

class timelineFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.timeline
        fields = ['lang_id']

class mainFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.main
        fields = ['lang_id']

class ourteamFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.our_team
        fields = ['lang_id']

class mainSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.main
        fields = [
            "image_title",
            "image_banner",
            "image_description",
            "whoweare",
            "created",
            "last_updated",
            "our_vision",
            "lang_id",
        ]

class timelineSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.timeline
        ordering = ['year']
        fields = [
            "created",
            "sub_title",
            "title",
            "image",
            "year",
            "description",
            "last_updated",
            "lang_id",
            "sequence",
        ]

class our_teamSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.our_team
        fields = [
            "created",
            "full_name",
            "image",
            "last_updated",
            "position",
            "country",
            "sequence",
            "lang_id",
            "is_advisory_board",
        ]