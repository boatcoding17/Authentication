// src/products/products.controller.ts 
import { Roles } from "../decorators/roles.decorator";
 

  // เพื่อความปลอดภัย เพิ่ม Guards และ Roles ของการเพิ่มสินค้า *** import มาจาก Auth Module ที่สร้างไว้ก่อนหน้า *** 

  @UseGuards(AccessTokenGuard, RolesGuard) 

  @Roles('admin')