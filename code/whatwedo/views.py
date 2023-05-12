from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms


class howwedoListView(generic.ListView):
    model = models.howwedo
    form_class = forms.howwedoForm


class howwedoCreateView(generic.CreateView):
    model = models.howwedo
    form_class = forms.howwedoForm


class howwedoDetailView(generic.DetailView):
    model = models.howwedo
    form_class = forms.howwedoForm


class howwedoUpdateView(generic.UpdateView):
    model = models.howwedo
    form_class = forms.howwedoForm
    pk_url_kwarg = "pk"


class howwedoDeleteView(generic.DeleteView):
    model = models.howwedo
    success_url = reverse_lazy("whatwedo_howwedo_list")


class cardListView(generic.ListView):
    model = models.card
    form_class = forms.cardForm


class cardCreateView(generic.CreateView):
    model = models.card
    form_class = forms.cardForm


class cardDetailView(generic.DetailView):
    model = models.card
    form_class = forms.cardForm


class cardUpdateView(generic.UpdateView):
    model = models.card
    form_class = forms.cardForm
    pk_url_kwarg = "pk"


class cardDeleteView(generic.DeleteView):
    model = models.card
    success_url = reverse_lazy("whatwedo_card_list")


class projectListView(generic.ListView):
    model = models.project
    form_class = forms.projectForm


class projectCreateView(generic.CreateView):
    model = models.project
    form_class = forms.projectForm


class projectDetailView(generic.DetailView):
    model = models.project
    form_class = forms.projectForm


class projectUpdateView(generic.UpdateView):
    model = models.project
    form_class = forms.projectForm
    pk_url_kwarg = "pk"


class projectDeleteView(generic.DeleteView):
    model = models.project
    success_url = reverse_lazy("whatwedo_project_list")
