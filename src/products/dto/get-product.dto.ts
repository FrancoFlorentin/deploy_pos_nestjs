import { IsNumberString, IsOptional } from "class-validator";

export class GetProductsQueryDTO {
  @IsOptional()
  @IsNumberString({}, {message: 'La categoría debe ser un número'})
  category_id?: number

  @IsOptional()
  @IsNumberString({}, {message: 'La cantidad debe ser un número'})
  take: number

  @IsOptional()
  @IsNumberString({}, {message: 'El offset debe ser un número'})
  skip: number
}