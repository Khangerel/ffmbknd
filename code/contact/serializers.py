from rest_framework import serializers
from django_filters import rest_framework as filters
from . import models

class infoFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.info
        fields = ['lang_id']

class infoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.info
        fields = [
            "last_updated",
            "title",
            "created",
            "helper",
            "phone",
            "email",
            "address",
            "lang_id",
        ]

class attendeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.attendee
        fields = [
            "is_partnership_opportunity",
            "message",
            "last_name",
            "is_generail_inquiry",
            "phone",
            "created",
            "first_name",
            "is_training",
            "last_updated",
            "email",
        ]
