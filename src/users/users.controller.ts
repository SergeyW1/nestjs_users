import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Получить одного пользователя'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/:id')
    getOneUser(@Param('id') id: number) {
        return this.usersService.getUser(id);
    }

    @ApiOperation({summary: 'Удалить пользователя'})
    @ApiResponse({status: 200, type: [User]})
    @Delete('/:id')
    deleteUser(@Param('id') id: number) {
        this.usersService.deleteUser(id);
    }
}
