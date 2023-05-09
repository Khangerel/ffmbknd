import pytest
import test_helpers

from django.urls import reverse


pytestmark = [pytest.mark.django_db]


def tests_howwedo_list_view(client):
    instance1 = test_helpers.create_whatwedo_howwedo()
    instance2 = test_helpers.create_whatwedo_howwedo()
    url = reverse("whatwedo_howwedo_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_howwedo_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("whatwedo_howwedo_create")
    data = {
        "icon": "anImage",
        "description": "text",
        "title": "text",
        "color": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_howwedo_detail_view(client):
    instance = test_helpers.create_whatwedo_howwedo()
    url = reverse("whatwedo_howwedo_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_howwedo_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_whatwedo_howwedo()
    url = reverse("whatwedo_howwedo_update", args=[instance.pk, ])
    data = {
        "icon": "anImage",
        "description": "text",
        "title": "text",
        "color": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_mil4edu_list_view(client):
    instance1 = test_helpers.create_whatwedo_mil4edu()
    instance2 = test_helpers.create_whatwedo_mil4edu()
    url = reverse("whatwedo_mil4edu_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_mil4edu_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("whatwedo_mil4edu_create")
    data = {
        "image": "anImage",
        "name": "text",
        "content": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_mil4edu_detail_view(client):
    instance = test_helpers.create_whatwedo_mil4edu()
    url = reverse("whatwedo_mil4edu_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_mil4edu_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_whatwedo_mil4edu()
    url = reverse("whatwedo_mil4edu_update", args=[instance.pk, ])
    data = {
        "image": "anImage",
        "name": "text",
        "content": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_card_list_view(client):
    instance1 = test_helpers.create_whatwedo_card()
    instance2 = test_helpers.create_whatwedo_card()
    url = reverse("whatwedo_card_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_card_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("whatwedo_card_create")
    data = {
        "title": "text",
        "color": "text",
        "description": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_card_detail_view(client):
    instance = test_helpers.create_whatwedo_card()
    url = reverse("whatwedo_card_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_card_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_whatwedo_card()
    url = reverse("whatwedo_card_update", args=[instance.pk, ])
    data = {
        "title": "text",
        "color": "text",
        "description": "text",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_wtd_list_view(client):
    instance1 = test_helpers.create_whatwedo_wtd()
    instance2 = test_helpers.create_whatwedo_wtd()
    url = reverse("whatwedo_wtd_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_wtd_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("whatwedo_wtd_create")
    data = {
        "image": "anImage",
        "content": "text",
        "name": "text",
        "teachers": 1,
        "attendees": 1,
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_wtd_detail_view(client):
    instance = test_helpers.create_whatwedo_wtd()
    url = reverse("whatwedo_wtd_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_wtd_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_whatwedo_wtd()
    url = reverse("whatwedo_wtd_update", args=[instance.pk, ])
    data = {
        "image": "anImage",
        "content": "text",
        "name": "text",
        "teachers": 1,
        "attendees": 1,
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302
