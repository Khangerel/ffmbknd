import pytest
import test_helpers

from django.urls import reverse


pytestmark = [pytest.mark.django_db]


def tests_language_list_view(client):
    instance1 = test_helpers.create_languages_language()
    instance2 = test_helpers.create_languages_language()
    url = reverse("languages_language_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_language_create_view(client):
    url = reverse("languages_language_create")
    data = {
        "name": "text",
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_language_detail_view(client):
    instance = test_helpers.create_languages_language()
    url = reverse("languages_language_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_language_update_view(client):
    instance = test_helpers.create_languages_language()
    url = reverse("languages_language_update", args=[instance.pk, ])
    data = {
        "name": "text",
    }
    response = client.post(url, data)
    assert response.status_code == 302
