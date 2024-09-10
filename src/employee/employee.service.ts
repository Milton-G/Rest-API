import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabseService } from 'src/databse/databse.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly databseService:DatabseService){}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databseService.employee.create({
      data:createEmployeeDto
    }) 
  }

  async findAll(role?: "INTERN" |"ENGINEER" |"ADMIN") {
   if (role) return this.databseService.employee.findMany({
    where:{
      role,
    }
   })
    return this.databseService.employee.findMany()
  }

  async findOne(id: number) {
    return this.databseService.employee.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databseService.employee.update({
      where:{
        id,
      },
      data:updateEmployeeDto,
    })
  }

  async remove(id: number) {
    return this.databseService.employee.delete({
      where: {
        id,
      }
    })
  }
  
}
