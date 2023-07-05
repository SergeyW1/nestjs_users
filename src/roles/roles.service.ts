import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";

export class RolesService {

    constructor(@InjectModel(Role) private roleModel: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {

    }

    async getRoleByValue(value:string) {

    }

}
