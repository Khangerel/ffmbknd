from rest_framework import serializers

from . import models


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
