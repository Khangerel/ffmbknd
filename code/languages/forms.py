from django import forms
from . import models


class languageForm(forms.ModelForm):
    class Meta:
        model = models.language
        fields = [
            "name",
        ]
