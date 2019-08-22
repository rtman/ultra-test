import { Controller, Get } from '@nestjs/common';
import { Publisher } from '../publisher.entity';
import { PublishersService } from './publishers.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('publishers')
export class PublishersController {
  constructor(private publishersService: PublishersService) {}
  @Get()
  index(): Promise<Publisher[]> {
    return this.publishersService.findAll();
  }
  @Post('create')
  async create(@Body() publisherData: Publisher): Promise<any> {
    return this.publishersService.create(publisherData);
  }

  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() publisherData: Publisher,
  ): Promise<any> {
    publisherData.id = Number(id);
    return this.publishersService.update(publisherData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.publishersService.delete(id);
  }
}
