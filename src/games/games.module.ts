import { Module } from '@nestjs/common';
import { GamesService } from './games/games.service';
import { GamesController } from './games/games.controller';

@Module({
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
