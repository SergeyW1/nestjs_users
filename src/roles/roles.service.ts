import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";

export class RolesService {

    constructor(@InjectModel(Role) private roleModel: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleModel.create(dto);
        return role;
    }

    async getAllRoles() {
        const roles = await this.roleModel.findAll();
        return roles;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleModel.findOne({
            where: {value}
        });
        return role;
    }

    async deleteRole(id: string) {
        await this.roleModel.destroy({where: {id}});
    }
}
