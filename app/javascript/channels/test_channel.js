import { createConsumer } from "@rails/actioncable"

let consumer = createConsumer()

consumer.connection.open()

consumer.subscriptions.create('TestChannel', {
  connected () {
    this.send({ message: 'Client is live' })
  },

  received (data) {
    console.log(data)
  }
})