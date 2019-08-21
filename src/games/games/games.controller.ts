import { Controller, Get } from '@nestjs/common';
import { Game } from '../game.entity';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}
  @Get()
  index(): Promise<Game[]> {
    return this.gamesService.findAll();
  }
}
