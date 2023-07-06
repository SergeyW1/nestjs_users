import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";

export class RolesService {

    constructor(@InjectModel(Role) private roleModel: typeof Role) {
    }

    async createRole(dto: CreateRoleDto): Promise<Role> {
        const role = await this.roleModel.create(dto);
        return role;
    }

    async getAllRoles(): Promise<Role[]> {
        const roles = await this.roleModel.findAll({
            order: [['id', 'ASC']]
        });
        return roles;
    }

    async getRoleByValue(value: string): Promise<Role> {
        const role = await this.roleModel.findOne({
            where: {value}
        });
        return role;
    }

    async deleteRole(id: number): Promise<void> {
        await this.roleModel.destroy({
            where: {
                id
            }
        });
    }
}
