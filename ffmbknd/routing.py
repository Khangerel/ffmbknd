from django.conf.urls import url

from channels.routing import ChannelNameRouter, ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from ffmbknd.consumers import ffmbknd_WebSocketConsumer

# Consumer Imports
from whoweare.consumers import whoweareConsumer
from infos.consumers import infosConsumer
from whatwedo.consumers import whatwedoConsumer
from posts.consumers import postsConsumer
from languages.consumers import languagesConsumer
from users.consumers import usersConsumer
from contact.consumers import contactConsumer


application = ProtocolTypeRouter({

    # WebSocket handler
    "websocket": AuthMiddlewareStack(
        URLRouter([
            url(r"^ws/$", ffmbknd_WebSocketConsumer.as_asgi()),
        ])
    ),
    "channel": ChannelNameRouter({
        "whoweare": whoweareConsumer,    "infos": infosConsumer,    "whatwedo": whatwedoConsumer,    "posts": postsConsumer,    "languages": languagesConsumer,    "users": usersConsumer,    "contact": contactConsumer,
    })
})
