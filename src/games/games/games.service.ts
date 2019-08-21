import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../game.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}
  async findAll(): Promise<Game[]> {
    return await this.gameRepository.find();
  }

  async create(game: Game): Promise<Game> {
    return await this.gameRepository.save(game);
  }

  async update(game: Game): Promise<UpdateResult> {
    return await this.gameRepository.update(game.id, game);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.gameRepository.delete(id);
  }
}
