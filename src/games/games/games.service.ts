import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from '../game.entity';
import { Publisher } from '../../publishers/publisher.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { PublishersService } from '../../publishers/publishers/publishers.service'

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    private publishersService: PublishersService
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

  async getPublisher(gameId): Promise<Publisher> {
    const gameData = await this.gameRepository.findOneOrFail(gameId);
    const publisherId = gameData.publisher
    return await this.publishersService.find(publisherId)
  }
}
