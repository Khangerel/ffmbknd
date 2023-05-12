from django.contrib import admin
from django import forms

from . import models


class howwedoAdminForm(forms.ModelForm):

    class Meta:
        model = models.howwedo
        fields = "__all__"


class howwedoAdmin(admin.ModelAdmin):
    form = howwedoAdminForm
    list_display = [
        "title",
        "color",
        "description",
        "icon",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "last_updated",
        "created",
    ]


class cardAdminForm(forms.ModelForm):

    class Meta:
        model = models.card
        fields = "__all__"


class cardAdmin(admin.ModelAdmin):
    form = cardAdminForm
    list_display = [
        "title",
        "description",
        "color",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


class projectAdminForm(forms.ModelForm):

    class Meta:
        model = models.project
        fields = "__all__"


class projectAdmin(admin.ModelAdmin):
    form = projectAdminForm
    list_display = [
        "title",
        "description",
        "image",
        "impact",
        "color",
        "issue",
        "method",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "created",
        "last_updated",
    ]


admin.site.register(models.howwedo, howwedoAdmin)
admin.site.register(models.card, cardAdmin)
admin.site.register(models.project, projectAdmin)
