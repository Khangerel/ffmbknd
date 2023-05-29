from rest_framework import serializers
from django_filters import rest_framework as filters
from . import models

class categoryFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.category
        fields = ['lang_id']

class postFilter(filters.FilterSet):
    lang_id = filters.NumberFilter(field_name='lang_id')

    class Meta:
        model = models.post
        fields = ['lang_id']

class categorySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.category
        fields = [
            "last_updated",
            "created",
            "name",
            "slug",
            "lang_id",
        ]
class tagsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.tags
        fields = [
            "slug",
            "name",
            "last_updated",
            "created",
            "lang_id",
        ]

class postSerializer(serializers.ModelSerializer):
    tags = tagsSerializer(many=True, read_only=True)
    categories = categorySerializer(many=True, read_only=True)
    
    class Meta:
        model = models.post
        fields = [
            "created",
            "image_thumbnail",
            "image_banner",
            "last_updated",
            "is_featured",
            "content",
            "title",
            "categories",
            "lang_id",
            "tags",
            "description",
            "id"
        ]


