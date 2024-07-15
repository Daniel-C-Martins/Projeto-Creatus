import { Module } from "@nestjs/common";
import { DelController } from "./del.controller";
import { DelService } from "./del.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
  imports: [PrismaModule],
  controllers: [DelController],
  providers: [DelService],
})
export class DelModule { }