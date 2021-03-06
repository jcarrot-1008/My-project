import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { BoardStatus } from './board_status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @Column({ nullable: true })
  date: Date;

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
