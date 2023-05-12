from django.contrib import admin
from django import forms
from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from . import models


class categoryAdminForm(forms.ModelForm):

    class Meta:
        model = models.category
        fields = "__all__"


class categoryAdmin(admin.ModelAdmin):
    form = categoryAdminForm
    list_display = [
        "name",
        "slug",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "last_updated",
        "created",
    ]


class postAdminForm(forms.ModelForm):

    categories = forms.ModelMultipleChoiceField(
        queryset=models.category.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        required=False
    )
    tags = forms.ModelMultipleChoiceField(
        queryset=models.tags.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        required=False
    )

    content = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = models.post
        fields = "__all__"


class postAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.post.content: {'widget': CKEditorWidget}
    }
    form = postAdminForm
    list_display = [
        "title",
        "is_featured",
        "image_thumbnail",
        "image_banner",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


class tagsAdminForm(forms.ModelForm):

    class Meta:
        model = models.tags
        fields = "__all__"


class tagsAdmin(admin.ModelAdmin):
    form = tagsAdminForm
    list_display = [
        "name",
        "slug",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "last_updated",
        "created",
    ]


admin.site.register(models.category, categoryAdmin)
admin.site.register(models.post, postAdmin)
admin.site.register(models.tags, tagsAdmin)
