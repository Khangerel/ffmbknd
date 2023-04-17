import pytest
import test_helpers

from django.urls import reverse


pytestmark = [pytest.mark.django_db]


def tests_category_list_view(client):
    instance1 = test_helpers.create_posts_category()
    instance2 = test_helpers.create_posts_category()
    url = reverse("posts_category_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_category_create_view(client):
    lang_id = test_helpers.create_languages_language()
    url = reverse("posts_category_create")
    data = {
        "name": "text",
        "slug": "slug",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_category_detail_view(client):
    instance = test_helpers.create_posts_category()
    url = reverse("posts_category_detail", args=[instance.slug, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_category_update_view(client):
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_posts_category()
    url = reverse("posts_category_update", args=[instance.slug, ])
    data = {
        "name": "text",
        "slug": "slug",
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_post_list_view(client):
    instance1 = test_helpers.create_posts_post()
    instance2 = test_helpers.create_posts_post()
    url = reverse("posts_post_list")
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance1) in response.content.decode("utf-8")
    assert str(instance2) in response.content.decode("utf-8")


def tests_post_create_view(client):
    categories = test_helpers.create_posts_category()
    lang_id = test_helpers.create_languages_language()
    url = reverse("posts_post_create")
    data = {
        "image_thumbnail": "anImage",
        "image_banner": "anImage",
        "title": "text",
        "content": "text",
        "is_featured": True,
        "categories": categories.pk,
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302


def tests_post_detail_view(client):
    instance = test_helpers.create_posts_post()
    url = reverse("posts_post_detail", args=[instance.pk, ])
    response = client.get(url)
    assert response.status_code == 200
    assert str(instance) in response.content.decode("utf-8")


def tests_post_update_view(client):
    categories = test_helpers.create_posts_category()
    lang_id = test_helpers.create_languages_language()
    instance = test_helpers.create_posts_post()
    url = reverse("posts_post_update", args=[instance.pk, ])
    data = {
        "image_thumbnail": "anImage",
        "image_banner": "anImage",
        "title": "text",
        "content": "text",
        "is_featured": True,
        "categories": categories.pk,
        "lang_id": lang_id.pk,
    }
    response = client.post(url, data)
    assert response.status_code == 302
