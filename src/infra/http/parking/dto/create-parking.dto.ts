import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateParkingDto {

    @ApiProperty({example: "Park Statement"})
    @IsNotEmpty()
    @IsString()
    name: string


    @ApiProperty({example: "Luanda, Maianga"})
    @IsNotEmpty()
    @IsString()
    location: string;


    @ApiProperty({example: 3})
    @IsNotEmpty()
    @IsNumber()
    capacity: number;
}
