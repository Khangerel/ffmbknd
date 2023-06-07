from django import forms
from . import models


class languageForm(forms.ModelForm):
    class Meta:
        model = models.language
        fields = [
            "name",
            "short_name",
            "logo",
        ]

class privacy_policyForm(forms.ModelForm):
    class Meta:
        model = models.privacy_policy
        fields = [
            "body",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(privacy_policyForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = models.language.objects.all()