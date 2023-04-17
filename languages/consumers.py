from channels.consumer import SyncConsumer


class languagesConsumer(SyncConsumer):

    def app1_message(self, message):
        # do something with message
        pass