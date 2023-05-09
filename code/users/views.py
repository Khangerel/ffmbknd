from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms

class UserListView(generic.ListView):
    model = models.CustomUser()
    form_class = forms.CustomUserForm


class UserCreateView(generic.CreateView):
    model = models.CustomUser()
    form_class = forms.CustomUserForm


class UserDetailView(generic.DetailView):
    model = models.CustomUser()
    form_class = forms.CustomUserForm


class UserUpdateView(generic.UpdateView):
    model = models.CustomUser()
    form_class = forms.CustomUserForm
    pk_url_kwarg = "pk"


class UserDeleteView(generic.DeleteView):
    model = models.CustomUser()
    success_url = reverse_lazy("users_User_list")
