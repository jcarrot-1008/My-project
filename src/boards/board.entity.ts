import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BoardStatus } from './board_status.enum';

export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
