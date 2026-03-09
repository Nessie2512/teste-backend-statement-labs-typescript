import { describe,it, expect } from "vitest";
import  Parking  from "./ParkingAgregate.ts";
import Spot from "./Spot.ts";

describe("Parking", () => {
    it("should occupy a spot", () => {
        const spot1 =  Spot.create({Code: "1"});
        const spot2 = Spot.create({Code: "2"});
        const parking = new Parking([spot1, spot2]);
        const occupiedSpot = parking.occupySpot();
        expect(occupiedSpot.isFree).toBe(false);
    });

    it("should free a spot", () => {
        const spot1 =  Spot.create({Code: "1"});
        const spot2 = Spot.create({Code: "2"});
        const parking = new Parking([spot1, spot2]);
        const occupiedSpot = parking.occupySpot();
        parking.feeSpot(occupiedSpot.Id);
        expect(occupiedSpot.isFree).toBe(true);
    });

        it("should list all free spots", () => {
            const spot1 =  Spot.create({Code: "1"});
            const spot2 = Spot.create({Code: "2"});
            const parking = new Parking([spot1, spot2]);
            parking.occupySpot();
            const freeSpots = parking.listAllfreeSpots;
            expect(freeSpots.length).toBe(1);
            expect(freeSpots[0]?.Id).toBe(spot2.Id);
        });


        it("should list all occupied spots", () => {
            const spot1 =  Spot.create({Code: "1"});
            const spot2 = Spot.create({Code: "2"});
            const parking = new Parking([spot1, spot2]);
            parking.occupySpot();
            const occupiedSpots = parking.listAllOccupiedSpots;
            expect(occupiedSpots.length).toBe(1);
            expect(occupiedSpots[0]?.Id).toBe(spot1.Id);
        });

        it("should throw an error when trying to occupy a spot and no free spots are available", () => {
            const spot1 =  Spot.create({Code: "1"});
            const spot2 = Spot.create({Code: "2"});
            const parking = new Parking([spot1, spot2]);
            parking.occupySpot();
            parking.occupySpot();
            expect(() => parking.occupySpot()).toThrow("Spot free not found");
        });

            it("should throw an error when trying to free a spot that is already free", () => {
                const spot1 =  Spot.create({Code: "1"});
                const spot2 = Spot.create({Code: "2"});
                const parking = new Parking([spot1, spot2]);
                expect(() => parking.feeSpot(spot1.Id)).toThrow("Spot is already free.");
            });

            it("should throw an error when trying to free a spot that does not exist", () => {
                const spot1 =  Spot.create({Code: "1"});
                const spot2 = Spot.create({Code: "2"});
                const parking = new Parking([spot1, spot2]);
                expect(() => parking.feeSpot("non-existent-id")).toThrow("Spot not found");
            });

});