from channels.consumer import SyncConsumer


class whoweareConsumer(SyncConsumer):

    def app1_message(self, message):
        # do something with message
        pass