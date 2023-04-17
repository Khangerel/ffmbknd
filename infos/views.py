from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms


class partnerListView(generic.ListView):
    model = models.partner
    form_class = forms.partnerForm


class partnerCreateView(generic.CreateView):
    model = models.partner
    form_class = forms.partnerForm


class partnerDetailView(generic.DetailView):
    model = models.partner
    form_class = forms.partnerForm


class partnerUpdateView(generic.UpdateView):
    model = models.partner
    form_class = forms.partnerForm
    pk_url_kwarg = "pk"


class partnerDeleteView(generic.DeleteView):
    model = models.partner
    success_url = reverse_lazy("infos_partner_list")


class landingListView(generic.ListView):
    model = models.landing
    form_class = forms.landingForm


class landingCreateView(generic.CreateView):
    model = models.landing
    form_class = forms.landingForm


class landingDetailView(generic.DetailView):
    model = models.landing
    form_class = forms.landingForm


class landingUpdateView(generic.UpdateView):
    model = models.landing
    form_class = forms.landingForm
    pk_url_kwarg = "pk"


class landingDeleteView(generic.DeleteView):
    model = models.landing
    success_url = reverse_lazy("infos_landing_list")
