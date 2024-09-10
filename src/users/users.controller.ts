import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';



@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}
  
    @Get()// GET /users?role=value
    findAll(@Query('role') role: 'INTERN' |'ENGINEER'| 'ADMIN'){
        return this.usersService.findAll(role)
    }

    @Get(':id')//get /users/:id
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.usersService.findOne(id)
    }
    
     @Post()// post /users
     create(@Body(ValidationPipe)createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto)
     }
     @Patch(':id')//patch /users/:id
    update(@Param('id',ParseIntPipe) id:number, @Body(ValidationPipe)updateUserDto:UpdateUserDto){
        return this.usersService.update(id, updateUserDto)
    }
    @Delete(':id')//Delete /users/:id
    Delete(@Param('id', ParseIntPipe) id:number){
        return this.usersService.delete(id)
    }

}
