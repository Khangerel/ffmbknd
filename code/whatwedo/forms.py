from django import forms
from languages.models import language
from languages.models import language
from languages.models import language
from languages.models import language
from . import models


class howwedoForm(forms.ModelForm):
    class Meta:
        model = models.howwedo
        fields = [
            "icon",
            "description",
            "title",
            "color",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(howwedoForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class mil4eduForm(forms.ModelForm):
    class Meta:
        model = models.mil4edu
        fields = [
            "image",
            "name",
            "content",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(mil4eduForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class cardForm(forms.ModelForm):
    class Meta:
        model = models.card
        fields = [
            "title",
            "color",
            "description",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(cardForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()



class wtdForm(forms.ModelForm):
    class Meta:
        model = models.wtd
        fields = [
            "image",
            "content",
            "name",
            "teachers",
            "attendees",
            "lang_id",
        ]

    def __init__(self, *args, **kwargs):
        super(wtdForm, self).__init__(*args, **kwargs)
        self.fields["lang_id"].queryset = language.objects.all()

