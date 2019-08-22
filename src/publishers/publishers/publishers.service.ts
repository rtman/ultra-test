import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from '../publisher.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(Publisher)
    private publisherRepository: Repository<Publisher>,
  ) {}

  async find(id): Promise<Publisher> {
    console.log('PUBLISHER - id', id);
    return await this.publisherRepository.findOneOrFail(id);
  }

  async findAll(): Promise<Publisher[]> {
    return await this.publisherRepository.find();
  }

  async create(publisher: Publisher): Promise<Publisher> {
    return await this.publisherRepository.save(publisher);
  }

  async update(publisher: Publisher): Promise<UpdateResult> {
    return await this.publisherRepository.update(publisher.id, publisher);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.publisherRepository.delete(id);
  }
}
