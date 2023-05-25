from django import forms
from languages.models import language
from languages.models import language
from . import models


class howwedoForm(forms.ModelForm):
    class Meta:
        model = models.howwedo
        fields = [
            "icon",
            "title",
            "color",
            "description",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(howwedoForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class cardForm(forms.ModelForm):
    class Meta:
        model = models.card
        fields = [
            "description",
            "title",
            "color",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(cardForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class projectForm(forms.ModelForm):
    class Meta:
        model = models.project
        fields = [
            "description",
            "title",
            "image",
            "image_banner",
            "impact",
            "impact_name",
            "color",
            "issue",
            "method",
            "button_name",
            "button_state",
        ]
