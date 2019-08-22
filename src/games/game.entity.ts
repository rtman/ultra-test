import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Publisher } from '../publishers/publisher.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  publisher: number

  @Column('simple-array')
  tags: string[];

  @Column()
  releaseDate: Date;
}
