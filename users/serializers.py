from rest_framework import serializers

from . import models


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.CustomUser
        fields = [
            "email",
            "created",
            "first_name",
            "last_updated",
            "is_active",
            "is_staff",
            "last_name",
        ]
