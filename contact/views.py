from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms


class infoListView(generic.ListView):
    model = models.info
    form_class = forms.infoForm


class infoCreateView(generic.CreateView):
    model = models.info
    form_class = forms.infoForm


class infoDetailView(generic.DetailView):
    model = models.info
    form_class = forms.infoForm


class infoUpdateView(generic.UpdateView):
    model = models.info
    form_class = forms.infoForm
    pk_url_kwarg = "pk"


class infoDeleteView(generic.DeleteView):
    model = models.info
    success_url = reverse_lazy("contact_info_list")


class attendeeListView(generic.ListView):
    model = models.attendee
    form_class = forms.attendeeForm


class attendeeCreateView(generic.CreateView):
    model = models.attendee
    form_class = forms.attendeeForm


class attendeeDetailView(generic.DetailView):
    model = models.attendee
    form_class = forms.attendeeForm


class attendeeUpdateView(generic.UpdateView):
    model = models.attendee
    form_class = forms.attendeeForm
    pk_url_kwarg = "pk"


class attendeeDeleteView(generic.DeleteView):
    model = models.attendee
    success_url = reverse_lazy("contact_attendee_list")
