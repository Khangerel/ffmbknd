from django.contrib import admin
from django import forms

from . import models


class UserAdminForm(forms.ModelForm):

    class Meta:
        model = models.User
        fields = "__all__"


class UserAdmin(admin.ModelAdmin):
    form = UserAdminForm
    list_display = [
        "email",
        "created",
        "first_name",
        "uuid",
        "last_updated",
        "is_admin",
        "last_name",
    ]
    readonly_fields = [
        "email",
        "created",
        "first_name",
        "uuid",
        "last_updated",
        "is_admin",
        "last_name",
    ]


admin.site.register(models.User, UserAdmin)
