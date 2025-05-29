import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

// request의 라우팅 경로
@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'this is users';
  }
  /* @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `user id is ${params.id}`;
  } */
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `fineOne 2 ${id}`;
  }
}
