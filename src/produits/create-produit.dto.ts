import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator'

export class CreateProduitDto {
    @IsNotEmpty()
    @IsString()
    readonly nom: string;

    @IsNotEmpty()
    @IsNumber()
    readonly prix: number;

    @IsOptional()
    @IsString()
    readonly quantite: number;
}


