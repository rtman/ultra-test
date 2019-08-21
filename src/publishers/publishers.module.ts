import { Module } from '@nestjs/common';
import { PublishersService } from './publishers/publishers.service';
import { PublishersController } from './publishers/publishers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  providers: [PublishersService],
  controllers: [PublishersController],
})
export class PublishersModule {}
