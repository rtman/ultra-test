import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../games/game.entity';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  siret: number;

  @Column()
  phone: string;
}
