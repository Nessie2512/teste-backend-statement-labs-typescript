import ISpotRepository from "../../../../core/repository/spot.Irepository";
import Spot, {spotProps} from "../../../../core/entities/Spot";
import { DatabaseService } from "../../../database/database.service";
import { Injectable } from "@nestjs/common";


@Injectable()
export class SpotPrismaRepository implements ISpotRepository {

        constructor(
            private readonly databaseRepository: DatabaseService
        ) {}


    public async getSpotById(spotId: string): Promise<any> {
        
         try {

            return await this.databaseRepository.spots.findFirst({
                where:{
                    id: spotId
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    public async getAllSpots(): Promise<any[]> {
        
         try {

            return await this.databaseRepository.spots.findMany({
               include:{
                parking: true
               }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    public async getAllFreeSpots(): Promise<any> {
       
         try {

            return await this.databaseRepository.spots.findMany({
                where:{
                    status:{
                        not:"Occupied"
                    }
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }


    public async findOneFreeSpot(): Promise<any> {
        try {

            return await this.databaseRepository.spots.findFirst({
                where:{
                    status:"Free"
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
    }

    public async findOneOccupiedSpot(id: string): Promise<any> {
        
         try {

            return await this.databaseRepository.spots.findFirst({
                where:{
                    id,
                    AND:{
                        status:"Occupied"
                    }
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    public async getAllOccupiedSpots(): Promise<any> {
        
         try {

            return await this.databaseRepository.spots.findMany({
                where:{
                    status:"Occupied"
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }
        
    }
    public async updateSpot(id: string,spot: spotProps): Promise<void> {
       
         try {

             await this.databaseRepository.spots.update({
                where:{
                    id
                },
                data:{
                    spot: spot.name,
                    code: spot.code
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    public async deleteSpot(spotId: string): Promise<void> {
       
        try {

            await this.databaseRepository.spots.delete({
                where:{
                    id: spotId
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }


    }
    public async create({name,code,parkingId}: spotProps): Promise<void> {
      
          try {
          
            await this.databaseRepository.spots.create({
                data: {
                    spot: name,
                    code: code,
                    parkingId
                },
            });

        } catch (error) {

            console.log(error)

            throw new Error("Could not create parking spotsss", error);

        }

    }
    
    public async findAll(): Promise<any> {
      
          try {

           return await this.databaseRepository.spots.findMany({
                include:{
                    parking: true
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
    public async findById(id: string): Promise<any> {
       
          try {

            return await this.databaseRepository.spots.findFirst({
                where:{
                    id
                }
            });

        } catch (error) {
            throw new Error("Could not create parking spot");
        }

    }
    
    public async checkSpot(name: string): Promise<any> {
       
          try {
            
            return await this.databaseRepository.spots.findFirst({
                where:{
                    spot: name
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

