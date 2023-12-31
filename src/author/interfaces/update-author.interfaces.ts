import { IsOptional, IsString } from "class-validator"


export class UpdateAuthorDto {
    @IsString()
    @IsOptional() 
    name: string;

    @IsString()
    @IsOptional() 
    surname: string
}