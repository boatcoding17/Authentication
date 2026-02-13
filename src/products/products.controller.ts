import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Roles } from '../decorators/roles.decorator';
import { AccessTokenGuard } from '../guards/access-token.guard';
import { RolesGuard } from '../guards/roles.guard';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Post()
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles('admin')
  create(@Body() body: any) {
    return this.productsService.create(body);
  }
}
