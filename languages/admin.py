from django.contrib import admin
from django import forms

from . import models


class languageAdminForm(forms.ModelForm):

    class Meta:
        model = models.language
        fields = "__all__"


class languageAdmin(admin.ModelAdmin):
    form = languageAdminForm
    list_display = [
        "created",
        "name",
    ]
    readonly_fields = [
        "created",
        "name",
    ]


admin.site.register(models.language, languageAdmin)
