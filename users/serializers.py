from rest_framework import serializers

from . import models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields = [
            "email",
            "created",
            "first_name",
            "uuid",
            "last_updated",
            "is_admin",
            "last_name",
        ]
