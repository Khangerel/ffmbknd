from rest_framework import serializers

from . import models


class howwedoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.howwedo
        fields = [
            "icon",
            "description",
            "title",
            "created",
            "last_updated",
            "color",
            "lang_id",
        ]

class mil4eduSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.mil4edu
        fields = [
            "image",
            "name",
            "content",
            "created",
            "last_updated",
            "lang_id",
        ]

class cardSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.card
        fields = [
            "title",
            "created",
            "color",
            "last_updated",
            "description",
            "lang_id",
        ]

class wtdSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.wtd
        fields = [
            "created",
            "image",
            "content",
            "last_updated",
            "name",
            "teachers",
            "attendees",
            "lang_id",
        ]
