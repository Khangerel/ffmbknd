from django import forms
from languages.models import language
from posts.models import category
from languages.models import language
from posts.models import tags
from languages.models import language
from . import models


class categoryForm(forms.ModelForm):
    class Meta:
        model = models.category
        fields = [
            "name",
            "slug",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(categoryForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class postForm(forms.ModelForm):
    class Meta:
        model = models.post
        fields = [
            "image_thumbnail",
            "image_banner",
            "is_featured",
            "content",
            "title",
            "categories",
            "lang_id",
            "tags",
            "description",
            "publish_date",
        ]

    def __init__(self, *args, **kwargs):
        super(postForm, self).__init__(*args, **kwargs)
        self.fields["categories"].queryset = category.objects.all()
        self.fields["lang_id"].queryset = language.objects.all()
        self.fields["tags"].queryset = tags.objects.all()



class tagsForm(forms.ModelForm):
    class Meta:
        model = models.tags
        fields = [
            "slug",
            "name",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(tagsForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()

