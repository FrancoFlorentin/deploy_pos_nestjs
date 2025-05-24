import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
  @IsNotEmpty({message: 'El nombre del producto es obligatorio'})
  @IsString({message: 'Nombre no válido'})
  name: string

  @IsNotEmpty({message: 'La imagen del producto es obligatoria'})
  image: string

  @IsNotEmpty({message: 'El precio es obligatorio'})
  @IsNumber({maxDecimalPlaces: 2}, {message: 'Precio no válido'})
  price: number

  @IsNotEmpty({message: 'La cantidad es obligatoria'})
  @IsNumber({maxDecimalPlaces: 0}, {message: 'Cantidad no válida'})
  inventory: number

  @IsNotEmpty({message: 'La categoría es obligatoria'})
  @IsInt({message: 'La categoría no es válida'})
  categoryId: number
}
