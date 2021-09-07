import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  /**
   * 账号列表业务逻辑处理
   */
  async getList(): Promise<any> {
    const qb = this.userRepository.createQueryBuilder('user');
    const data = await qb.getMany();
    return data;
  }
}