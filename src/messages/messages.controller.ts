import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
    try {
      console.log('Controller: Received message:', createMessageDto);
      const result = await this.messagesService.create(createMessageDto);
      console.log('Controller: Message saved:', result);
      return result;
    } catch (error) {
      console.error('Controller error:', error);
      throw error;
    }
  }

  @Get()
  async findAll() {
    return this.messagesService.findAll();
  }
}
