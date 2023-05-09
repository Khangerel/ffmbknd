from django.views import generic
from django.urls import reverse_lazy
from . import models
from . import forms


class categoryListView(generic.ListView):
    model = models.category
    form_class = forms.categoryForm


class categoryCreateView(generic.CreateView):
    model = models.category
    form_class = forms.categoryForm


class categoryDetailView(generic.DetailView):
    model = models.category
    form_class = forms.categoryForm
    slug_url_kwarg = "slug"


class categoryUpdateView(generic.UpdateView):
    model = models.category
    form_class = forms.categoryForm
    slug_url_kwarg = "slug"


class categoryDeleteView(generic.DeleteView):
    model = models.category
    success_url = reverse_lazy("posts_category_list")


class postListView(generic.ListView):
    model = models.post
    form_class = forms.postForm


class postCreateView(generic.CreateView):
    model = models.post
    form_class = forms.postForm


class postDetailView(generic.DetailView):
    model = models.post
    form_class = forms.postForm


class postUpdateView(generic.UpdateView):
    model = models.post
    form_class = forms.postForm
    pk_url_kwarg = "pk"


class postDeleteView(generic.DeleteView):
    model = models.post
    success_url = reverse_lazy("posts_post_list")
