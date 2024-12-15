'use server'
import amqp, { Channel, Connection } from 'amqplib';
import prisma from '@/prisma';
const RABBITMQ_URL = process.env.AMQ_URI!;
const QUEUE_NAME = 'single';

let connection: Connection | null = null;
let channel: Channel | null = null;

const getRabbitMQChannel = async (): Promise<Channel> => {
  if (channel) {
    // Reuse existing channel if available
    return channel;
  }

  if (!connection) {
    // Create connection if it doesn't exist
    connection = await amqp.connect(RABBITMQ_URL);
  }

  // Create channel
  channel = await connection.createChannel();
  
  // Ensure the queue exists
  await channel.assertQueue(QUEUE_NAME, {
    durable: true,
  });

  return channel;
};

export const sendMessageToQueue = async (message: string,userId:string): Promise<void> => {
  try {
    const channel = await getRabbitMQChannel();

    channel.sendToQueue(QUEUE_NAME, Buffer.from(message), {
      persistent: true,
    });

    console.log(`Message sent to queue: ${QUEUE_NAME}`);
    await prisma.user.update({
      data:{
        lastRequest:new Date(Date.now()).toISOString(),
      },
      where:{
        id:userId,
      }
    })
  } catch (error) {
    console.error('Error sending message to queue:', error);
    throw error;
  }
};
