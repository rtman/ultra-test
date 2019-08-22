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

  @Get(':id/publisher')
  async publisher(@Param('id') id): Promise<any> {
    return this.gamesService.getPublisher(id);
  }

  @Post('create')
  async create(@Body() gameData: Game): Promise<any> {
    return this.gamesService.create(gameData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() gameData: Game): Promise<any> {
    gameData.id = Number(id);
    return this.gamesService.update(gameData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.gamesService.delete(id);
  }

  @Get('recentSale')
  async recentSale(): Promise<any> {
    return this.gamesService.recentSale();
  }
}
