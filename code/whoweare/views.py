from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms


class mainListView(generic.ListView):
    model = models.main
    form_class = forms.mainForm


class mainCreateView(generic.CreateView):
    model = models.main
    form_class = forms.mainForm


class mainDetailView(generic.DetailView):
    model = models.main
    form_class = forms.mainForm


class mainUpdateView(generic.UpdateView):
    model = models.main
    form_class = forms.mainForm
    pk_url_kwarg = "pk"


class mainDeleteView(generic.DeleteView):
    model = models.main
    success_url = reverse_lazy("whoweare_main_list")


class timelineListView(generic.ListView):
    model = models.timeline
    form_class = forms.timelineForm


class timelineCreateView(generic.CreateView):
    model = models.timeline
    form_class = forms.timelineForm


class timelineDetailView(generic.DetailView):
    model = models.timeline
    form_class = forms.timelineForm


class timelineUpdateView(generic.UpdateView):
    model = models.timeline
    form_class = forms.timelineForm
    pk_url_kwarg = "pk"


class timelineDeleteView(generic.DeleteView):
    model = models.timeline
    success_url = reverse_lazy("whoweare_timeline_list")
