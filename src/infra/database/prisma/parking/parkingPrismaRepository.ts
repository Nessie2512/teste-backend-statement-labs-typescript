import IParkingRepository from "../../../../core/repository/parking.Irepository";
import {parkingProps} from "../../../../core/entities/parking";
import { DatabaseService } from "../../../database/database.service";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ParkingPrismaRepository implements IParkingRepository {

        constructor(
            private readonly databaseRepository: DatabaseService
        ) {}


    
    public async checkCapacity(id: string): Promise<any> {
        
        try {
          
           const qtd = await this.databaseRepository.spots.findMany({
            where: {
                parkingId: id
            }
           });

           return qtd?.length;

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    public async create({name,location,capacity}: parkingProps): Promise<void> {
      
          try {
          
            await this.databaseRepository.parking.create({
                data: {
                    parking: name,
                    location,
                    capacity:+capacity
                },
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
    public async findAll(): Promise<any> {
      
          try {

           return await this.databaseRepository.parking.findMany({
                include:{
                    spots: true
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
    public async findById(id: string): Promise<any> {
       
          try {

            return await this.databaseRepository.parking.findFirst({
                where:{
                    id
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
    public async checkPark(name: string): Promise<any> {
       
          try {
            
            return await this.databaseRepository.parking.findFirst({
                where:{
                    parking: name
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
    public async delete(id: string): Promise<void> {
       
          try {

            await this.databaseRepository.parking.delete({
                where:{
                    id
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    }

