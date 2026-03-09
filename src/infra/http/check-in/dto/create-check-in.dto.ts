import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateCheckInDto {

    @ApiProperty({example: "LDA-20-13-HI"})
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    plate: string;

}

export class CreateCheckOutDto {

    @ApiProperty({example: "LDA-20-13-HI"})
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    ticketId: string;

    
}