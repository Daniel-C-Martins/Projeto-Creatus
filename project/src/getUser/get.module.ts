import { Module } from "@nestjs/common";
import { GetController } from "./get.controller";
import { GetService } from "./get.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
  imports: [PrismaModule],
  controllers: [GetController],
  providers: [GetService],
  exports: [GetService],
})
export class GetModule { }