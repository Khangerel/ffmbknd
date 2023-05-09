from channels.consumer import SyncConsumer


class whatwedoConsumer(SyncConsumer):

    def app1_message(self, message):
        # do something with message
        pass