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


class mil4eduListView(generic.ListView):
    model = models.mil4edu
    form_class = forms.mil4eduForm


class mil4eduCreateView(generic.CreateView):
    model = models.mil4edu
    form_class = forms.mil4eduForm


class mil4eduDetailView(generic.DetailView):
    model = models.mil4edu
    form_class = forms.mil4eduForm


class mil4eduUpdateView(generic.UpdateView):
    model = models.mil4edu
    form_class = forms.mil4eduForm
    pk_url_kwarg = "pk"


class mil4eduDeleteView(generic.DeleteView):
    model = models.mil4edu
    success_url = reverse_lazy("whatwedo_mil4edu_list")


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


class wtdListView(generic.ListView):
    model = models.wtd
    form_class = forms.wtdForm


class wtdCreateView(generic.CreateView):
    model = models.wtd
    form_class = forms.wtdForm


class wtdDetailView(generic.DetailView):
    model = models.wtd
    form_class = forms.wtdForm


class wtdUpdateView(generic.UpdateView):
    model = models.wtd
    form_class = forms.wtdForm
    pk_url_kwarg = "pk"


class wtdDeleteView(generic.DeleteView):
    model = models.wtd
    success_url = reverse_lazy("whatwedo_wtd_list")
