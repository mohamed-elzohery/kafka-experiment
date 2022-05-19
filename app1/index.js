const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka-service:9092'],
})

(async () => {
  const producer = kafka.producer()

await producer.connect()
await producer.send({
  topic: 'test',
  messages: [
    { value: 'Hello KafkaJS user!' },
  ],
})
  await producer.disconnect()
})()