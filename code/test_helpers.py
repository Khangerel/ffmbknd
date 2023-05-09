import random
import string

from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import Group
from django.contrib.contenttypes.models import ContentType

from whoweare import models as whoweare_models
from infos import models as infos_models
from whatwedo import models as whatwedo_models
from posts import models as posts_models
from languages import models as languages_models
from users import models as users_models
from contact import models as contact_models


def random_string(length=10):
    # Create a random string of length length
    letters = string.ascii_lowercase
    return "".join(random.choice(letters) for i in range(length))


def create_User(**kwargs):
    defaults = {
        "username": "%s_username" % random_string(5),
        "email": "%s_username@tempurl.com" % random_string(5),
    }
    defaults.update(**kwargs)
    return User.objects.create(**defaults)


def create_AbstractUser(**kwargs):
    defaults = {
        "username": "%s_username" % random_string(5),
        "email": "%s_username@tempurl.com" % random_string(5),
    }
    defaults.update(**kwargs)
    return AbstractUser.objects.create(**defaults)


def create_AbstractBaseUser(**kwargs):
    defaults = {
        "username": "%s_username" % random_string(5),
        "email": "%s_username@tempurl.com" % random_string(5),
    }
    defaults.update(**kwargs)
    return AbstractBaseUser.objects.create(**defaults)


def create_Group(**kwargs):
    defaults = {
        "name": "%s_group" % random_string(5),
    }
    defaults.update(**kwargs)
    return Group.objects.create(**defaults)


def create_ContentType(**kwargs):
    defaults = {
    }
    defaults.update(**kwargs)
    return ContentType.objects.create(**defaults)


def create_whoweare_main(**kwargs):
    defaults = {}
    defaults["image_banner"] = ""
    defaults["image_title"] = ""
    defaults["image_description"] = ""
    defaults["whoweare"] = ""
    defaults["our_vision"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return whoweare_models.main.objects.create(**defaults)
def create_whoweare_timeline(**kwargs):
    defaults = {}
    defaults["title"] = ""
    defaults["color"] = ""
    defaults["description"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return whoweare_models.timeline.objects.create(**defaults)
def create_infos_partner(**kwargs):
    defaults = {}
    defaults["name"] = ""
    defaults["logo"] = ""
    defaults.update(**kwargs)
    return infos_models.partner.objects.create(**defaults)
def create_infos_landing(**kwargs):
    defaults = {}
    defaults["trainings"] = ""
    defaults["image_swipe2"] = ""
    defaults["image_swipe3"] = ""
    defaults["citizens"] = ""
    defaults["image_background"] = ""
    defaults["image_swipe1"] = ""
    defaults.update(**kwargs)
    return infos_models.landing.objects.create(**defaults)
def create_whatwedo_howwedo(**kwargs):
    defaults = {}
    defaults["icon"] = ""
    defaults["description"] = ""
    defaults["title"] = ""
    defaults["color"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return whatwedo_models.howwedo.objects.create(**defaults)
def create_whatwedo_mil4edu(**kwargs):
    defaults = {}
    defaults["image"] = ""
    defaults["name"] = ""
    defaults["content"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return whatwedo_models.mil4edu.objects.create(**defaults)
def create_whatwedo_card(**kwargs):
    defaults = {}
    defaults["title"] = ""
    defaults["color"] = ""
    defaults["description"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return whatwedo_models.card.objects.create(**defaults)
def create_whatwedo_wtd(**kwargs):
    defaults = {}
    defaults["image"] = ""
    defaults["content"] = ""
    defaults["name"] = ""
    defaults["teachers"] = ""
    defaults["attendees"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return whatwedo_models.wtd.objects.create(**defaults)
def create_posts_category(**kwargs):
    defaults = {}
    defaults["name"] = ""
    defaults["slug"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return posts_models.category.objects.create(**defaults)
def create_posts_post(**kwargs):
    defaults = {}
    defaults["image_thumbnail"] = ""
    defaults["image_banner"] = ""
    defaults["title"] = ""
    defaults["content"] = ""
    defaults["is_featured"] = ""
    if "categories" not in kwargs:
        defaults["categories"] = create_posts_category()
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return posts_models.post.objects.create(**defaults)
def create_languages_language(**kwargs):
    defaults = {}
    defaults["name"] = ""
    defaults.update(**kwargs)
    return languages_models.language.objects.create(**defaults)
def create_contact_info(**kwargs):
    defaults = {}
    defaults["title"] = ""
    defaults["helper"] = ""
    defaults["phone"] = ""
    defaults["email"] = ""
    defaults["address"] = ""
    if "lang_id" not in kwargs:
        defaults["lang_id"] = create_languages_language()
    defaults.update(**kwargs)
    return contact_models.info.objects.create(**defaults)
def create_contact_attendee(**kwargs):
    defaults = {}
    defaults["is_partnership_opportunity"] = ""
    defaults["message"] = ""
    defaults["last_name"] = ""
    defaults["is_generail_inquiry"] = ""
    defaults["phone"] = ""
    defaults["first_name"] = ""
    defaults["is_training"] = ""
    defaults["email"] = ""
    defaults.update(**kwargs)
    return contact_models.attendee.objects.create(**defaults)
