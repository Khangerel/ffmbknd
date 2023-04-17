import pytest
import test_helpers

from django.urls import reverse


pytestmark = [pytest.mark.django_db]


def tests_partner_list_view(client):
    instance1 = test_helpers.create_infos_partner()
    instance2 = test_helpers.create_infos_partner()
    url = reverse("infos_partner_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_partner_create_view(client):
    url = reverse("infos_partner_create")
    data = {
        "name": "text",
        "logo": "anImage",
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_partner_detail_view(client):
    instance = test_helpers.create_infos_partner()
    url = reverse("infos_partner_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_partner_update_view(client):
    instance = test_helpers.create_infos_partner()
    url = reverse("infos_partner_update", args=[instance.pk, ])
    data = {
        "name": "text",
        "logo": "anImage",
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_landing_list_view(client):
    instance1 = test_helpers.create_infos_landing()
    instance2 = test_helpers.create_infos_landing()
    url = reverse("infos_landing_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_landing_create_view(client):
    url = reverse("infos_landing_create")
    data = {
        "trainings": 1,
        "image_swipe2": "anImage",
        "image_swipe3": "anImage",
        "citizens": 1,
        "image_background": "anImage",
        "image_swipe1": "anImage",
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_landing_detail_view(client):
    instance = test_helpers.create_infos_landing()
    url = reverse("infos_landing_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_landing_update_view(client):
    instance = test_helpers.create_infos_landing()
    url = reverse("infos_landing_update", args=[instance.pk, ])
    data = {
        "trainings": 1,
        "image_swipe2": "anImage",
        "image_swipe3": "anImage",
        "citizens": 1,
        "image_background": "anImage",
        "image_swipe1": "anImage",
    }
    response = client.post(url, data)
    assert response.status_code == 302
