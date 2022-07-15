import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-boar.dto';
import { BoardStatus } from './board_status.enum';
import { User } from 'src/auth/user.entity';
import * as moment from 'moment';
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description, editDate } = createBoardDto;
    const createDate = moment().format('YY-MM-DD HH:mm:ss');
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      createDate,
      editDate,
      user,
    });

    await this.save(board);
    return board;
  }
}
