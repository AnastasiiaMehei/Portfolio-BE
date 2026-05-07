import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMessageDto: CreateMessageDto) {
    try {
      console.log('Service: Creating message with data:', createMessageDto);
      const result = await this.prisma.message.create({
        data: createMessageDto,
      });
      console.log('Service: Message created successfully:', result);
      return result;
    } catch (error) {
      console.error('Service: Error creating message:', error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.message.findMany();
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw new Error('Failed to fetch messages');
    }
  }
}
