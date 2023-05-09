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
        "icon",
        "description",
        "title",
        "created",
        "last_updated",
        "color",
    ]
    readonly_fields = [
        "icon",
        "description",
        "title",
        "created",
        "last_updated",
        "color",
    ]


class mil4eduAdminForm(forms.ModelForm):

    class Meta:
        model = models.mil4edu
        fields = "__all__"


class mil4eduAdmin(admin.ModelAdmin):
    form = mil4eduAdminForm
    list_display = [
        "image",
        "name",
        "content",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "image",
        "name",
        "content",
        "created",
        "last_updated",
    ]


class cardAdminForm(forms.ModelForm):

    class Meta:
        model = models.card
        fields = "__all__"


class cardAdmin(admin.ModelAdmin):
    form = cardAdminForm
    list_display = [
        "title",
        "created",
        "color",
        "last_updated",
        "description",
    ]
    readonly_fields = [
        "title",
        "created",
        "color",
        "last_updated",
        "description",
    ]


class wtdAdminForm(forms.ModelForm):

    class Meta:
        model = models.wtd
        fields = "__all__"


class wtdAdmin(admin.ModelAdmin):
    form = wtdAdminForm
    list_display = [
        "created",
        "image",
        "content",
        "last_updated",
        "name",
        "teachers",
        "attendees",
    ]
    readonly_fields = [
        "created",
        "image",
        "content",
        "last_updated",
        "name",
        "teachers",
        "attendees",
    ]


admin.site.register(models.howwedo, howwedoAdmin)
admin.site.register(models.mil4edu, mil4eduAdmin)
admin.site.register(models.card, cardAdmin)
admin.site.register(models.wtd, wtdAdmin)
