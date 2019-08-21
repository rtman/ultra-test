import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;

  // @ManyToOne(publisher => Publisher, publisher => publisher)
  // publisher: Publisher;

  @Column('simple-array')
  tags: string[];

  @Column()
  releaseDate: Date;
}
