import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User,
                private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create(dto);
        const role = await this.roleService.getRoleByValue("USER");
        await user.$set('roles', [role.id]);
        return user;
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.findAll({
            order: [['id', 'ASC']],
            include: {all: true}
        });
        return users;
    }

    async getUser(id: number): Promise<User> {
        const user = await this.userModel.findOne({
            where: {
                id,
            }
        });
        return user;
    }

    async deleteUser(id: number): Promise<void> {
        await this.userModel.destroy({
            where: {
                id
            }
        });
    }
}
