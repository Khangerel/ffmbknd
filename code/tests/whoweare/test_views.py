import pytest
import test_helpers

from django.urls import reverse


pytestmark = [pytest.mark.django_db]


def tests_main_list_view(client):
    instance1 = test_helpers.create_whoweare_main()
    instance2 = test_helpers.create_whoweare_main()
    url = reverse("whoweare_main_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_main_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("whoweare_main_create")
    data = {
        "image_banner": "anImage",
        "image_title": "text",
        "image_description": "text",
        "whoweare": "text",
        "our_vision": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_main_detail_view(client):
    instance = test_helpers.create_whoweare_main()
    url = reverse("whoweare_main_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_main_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_whoweare_main()
    url = reverse("whoweare_main_update", args=[instance.pk, ])
    data = {
        "image_banner": "anImage",
        "image_title": "text",
        "image_description": "text",
        "whoweare": "text",
        "our_vision": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_timeline_list_view(client):
    instance1 = test_helpers.create_whoweare_timeline()
    instance2 = test_helpers.create_whoweare_timeline()
    url = reverse("whoweare_timeline_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_timeline_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("whoweare_timeline_create")
    data = {
        "title": "text",
        "color": "text",
        "description": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_timeline_detail_view(client):
    instance = test_helpers.create_whoweare_timeline()
    url = reverse("whoweare_timeline_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_timeline_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_whoweare_timeline()
    url = reverse("whoweare_timeline_update", args=[instance.pk, ])
    data = {
        "title": "text",
        "color": "text",
        "description": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302
