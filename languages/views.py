from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms


class languageListView(generic.ListView):
    model = models.language
    form_class = forms.languageForm


class languageCreateView(generic.CreateView):
    model = models.language
    form_class = forms.languageForm


class languageDetailView(generic.DetailView):
    model = models.language
    form_class = forms.languageForm


class languageUpdateView(generic.UpdateView):
    model = models.language
    form_class = forms.languageForm
    pk_url_kwarg = "pk"


class languageDeleteView(generic.DeleteView):
    model = models.language
    success_url = reverse_lazy("languages_language_list")
