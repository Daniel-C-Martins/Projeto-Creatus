import { HttpException, HttpStatus } from "@nestjs/common";

export const customError = (message: string, status: HttpStatus) => {
  throw new HttpException(message, status);
};