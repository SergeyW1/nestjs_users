import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {
    }

    @Post()
    createRole(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @Get()
    getAllValue() {
        return this.roleService.getAllRoles();
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }

    @Delete('/:id')
    removeRole(@Param('id') id: number) {
        this.roleService.deleteRole(id);
    }
}
