from django.contrib import admin
from django import forms

from . import models


class infoAdminForm(forms.ModelForm):

    class Meta:
        model = models.info
        fields = "__all__"


class infoAdmin(admin.ModelAdmin):
    form = infoAdminForm
    list_display = [
        "title",
        "helper",
        "phone",
        "email",
        "address",
        "last_updated",
        "created",
    ]
    readonly_fields = [
        "last_updated",
        "created",
    ]


class attendeeAdminForm(forms.ModelForm):

    class Meta:
        model = models.attendee
        fields = "__all__"


class attendeeAdmin(admin.ModelAdmin):
    form = attendeeAdminForm
    list_display = [
        "first_name",
        "last_name",
        "email",
        "message",
        "phone",
        "is_generail_inquiry",
        "is_training",
        "is_partnership_opportunity",
        "created",
        "last_updated",
    ]
    readonly_fields = [
        "is_partnership_opportunity",
        "message",
        "last_name",
        "is_generail_inquiry",
        "phone",
        "created",
        "first_name",
        "is_training",
        "last_updated",
        "email",
    ]


admin.site.register(models.info, infoAdmin)
admin.site.register(models.attendee, attendeeAdmin)
