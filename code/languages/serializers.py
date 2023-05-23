from rest_framework import serializers

from . import models


class languageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.language
        fields = [
            "created",
            "name",
            "id",
        ]
