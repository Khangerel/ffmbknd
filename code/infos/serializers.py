from rest_framework import serializers

from . import models


class partnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.partner
        fields = [
            "created",
            "last_updated",
            "name",
            "logo",
        ]

class landingSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.landing
        fields = [
            "last_updated",
            "trainings",
            "image_swipe2",
            "created",
            "image_swipe3",
            "citizens",
            "image_background",
            "image_swipe1",
        ]
