from rest_framework import serializers

from . import models


class partnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.partner
        fields = [
            "name",
            "logo",
            "sequence",
            "last_updated",
            "created",
        ]

class landingSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.landing
        fields = [
            "image_swipe1",
            "last_updated",
            "image_swipe2",
            "created",
            "citizens",
            "trainings",
            "image_swipe3",
        ]
