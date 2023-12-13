import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response as Res } from 'express';
import { Roles } from '../../core/auth/decorator/role.decorator';
import { GetListParamsDto } from '../../core/common/dto/get-list-params.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles(['ADMIN'])
  @Get()
  findAll(@Query() params: GetListParamsDto, @Response() response: Res) {
    const items = this.usersService.findAll();

    console.log('params', params);

    const range = JSON.parse(params.range as string);
    const from = range[0];
    const to = range[1];

    const data = items.filter(
      (value, index, arr) => from <= index && index <= to
    );

    console.log('data', data);

    return response
      .set({
        'Access-Control-Expose-Headers': 'Content-Range',
        'Content-Range': '' + items.length,
      })
      .json(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
