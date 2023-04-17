from django import forms
from languages.models import language
from languages.models import language
from . import models


class mainForm(forms.ModelForm):
    class Meta:
        model = models.main
        fields = [
            "image_banner",
            "image_title",
            "image_description",
            "whoweare",
            "our_vision",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(mainForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class timelineForm(forms.ModelForm):
    class Meta:
        model = models.timeline
        fields = [
            "title",
            "color",
            "description",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(timelineForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()

