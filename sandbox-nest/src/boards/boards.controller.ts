import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { type Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}
  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardService.createBoard(title, description);
  }
}
