import { Module } from '@nestjs/common';
import { GamesService } from './games/games.service';
import { GamesController } from './games/games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { PublishersModule } from '../publishers/publishers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), PublishersModule],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
