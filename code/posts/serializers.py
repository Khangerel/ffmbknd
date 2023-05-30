from rest_framework import serializers
from django_filters import rest_framework as filters
from . import models
import locale

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
            "id",
            "publish_date",
        ]
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        lang_id = representation.get("lang_id")
        publish_date = representation.get("publish_date")

        if lang_id and publish_date:
            if lang_id == 1:
                publish_date_formatted = publish_date.strftime("%d %B %Y") 
            elif lang_id == 2:
                publish_date_formatted = publish_date.strftime("%m сарын %d %Y") 
            else:
                publish_date_formatted = publish_date.strftime("%Y-%m-%d") 
            representation["publish_date_formatted"] = publish_date_formatted

        return representation


