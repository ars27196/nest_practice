import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo : Repository<User>){}

  create(@Body() createUserDto: CreateUserDto) {
    const createUser = this.userRepo.create({
      ...createUserDto
    });
    return this.userRepo.save(createUser);
  }

  async findAll() {
    console.log('ddd')
    let data=await this.userRepo.find();
    console.log(data)
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, {...updateUserDto});
    }

  async remove(id: number) {
    await this.userRepo.delete(id); 
    return `This action removes a #${id} user`;
  }
}
