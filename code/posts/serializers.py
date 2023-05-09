from rest_framework import serializers

from . import models


class categorySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.category
        fields = [
            "name",
            "slug",
            "last_updated",
            "created",
            "lang_id",
        ]

class postSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.post
        fields = [
            "last_updated",
            "created",
            "image_thumbnail",
            "image_banner",
            "title",
            "content",
            "is_featured",
            "categories",
            "lang_id",
        ]
