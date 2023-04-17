import pytest
import test_helpers

from django.urls import reverse


pytestmark = [pytest.mark.django_db]


def tests_info_list_view(client):
    instance1 = test_helpers.create_contact_info()
    instance2 = test_helpers.create_contact_info()
    url = reverse("contact_info_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_info_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("contact_info_create")
    data = {
        "title": "text",
        "helper": "text",
        "phone": "text",
        "email": "user@tempurl.com",
        "address": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_info_detail_view(client):
    instance = test_helpers.create_contact_info()
    url = reverse("contact_info_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_info_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_contact_info()
    url = reverse("contact_info_update", args=[instance.pk, ])
    data = {
        "title": "text",
        "helper": "text",
        "phone": "text",
        "email": "user@tempurl.com",
        "address": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_attendee_list_view(client):
    instance1 = test_helpers.create_contact_attendee()
    instance2 = test_helpers.create_contact_attendee()
    url = reverse("contact_attendee_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_attendee_create_view(client):
    url = reverse("contact_attendee_create")
    data = {
        "is_partnership_opportunity": True,
        "message": "text",
        "last_name": "text",
        "is_generail_inquiry": True,
        "phone": "text",
        "first_name": "text",
        "is_training": True,
        "email": "user@tempurl.com",
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_attendee_detail_view(client):
    instance = test_helpers.create_contact_attendee()
    url = reverse("contact_attendee_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_attendee_update_view(client):
    instance = test_helpers.create_contact_attendee()
    url = reverse("contact_attendee_update", args=[instance.pk, ])
    data = {
        "is_partnership_opportunity": True,
        "message": "text",
        "last_name": "text",
        "is_generail_inquiry": True,
        "phone": "text",
        "first_name": "text",
        "is_training": True,
        "email": "user@tempurl.com",
    }
    response = client.post(url, data)
    assert response.status_code == 302
