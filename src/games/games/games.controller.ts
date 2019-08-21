import { Controller, Get } from '@nestjs/common';
import { Game } from '../game.entity';
import { GamesService } from './games.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}
  @Get()
  index(): Promise<Game[]> {
    return this.gamesService.findAll();
  }
  @Post('create')
  async create(@Body() gameData: Game): Promise<any> {
    console.log('CREATE - GameData - ', gameData);
    return this.gamesService.create(gameData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() gameData: Game): Promise<any> {
    gameData.id = Number(id);
    console.log('UPDATE - ', gameData.id, gameData);
    return this.gamesService.update(gameData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.gamesService.delete(id);
  }
}
