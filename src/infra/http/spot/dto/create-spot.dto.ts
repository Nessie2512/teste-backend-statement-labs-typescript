import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateSpotDto {

    @ApiProperty({example:"Vaga 02"})
    @IsString()
    @IsNotEmpty()
    spot: string;

    @ApiProperty({example:"be3fafd4-c4fa-4cc8-aecc-746ec8ffab3e"})
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    parkingId: string;
}
