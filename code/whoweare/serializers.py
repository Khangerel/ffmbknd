from rest_framework import serializers

from . import models


class mainSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.main
        fields = [
            "image_banner",
            "last_updated",
            "created",
            "image_title",
            "image_description",
            "whoweare",
            "our_vision",
            "lang_id",
        ]

class timelineSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.timeline
        fields = [
            "title",
            "last_updated",
            "color",
            "created",
            "description",
            "lang_id",
        ]
