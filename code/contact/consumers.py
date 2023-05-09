from channels.consumer import SyncConsumer


class contactConsumer(SyncConsumer):

    def app1_message(self, message):
        # do something with message
        pass