import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMessageDto: CreateMessageDto) {
    try {
      return await this.prisma.message.create({
        data: createMessageDto,
      });
    } catch (error) {
      console.error('Error creating message:', error);
      throw new Error('Failed to save message');
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
