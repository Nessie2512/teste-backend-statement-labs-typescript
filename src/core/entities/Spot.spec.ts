import { describe, expect, it } from "vitest";
import Spot  from "./Spot.ts";

describe("Testing Spot", () => {

    it("check if the spot is free when created", () => {
        const spot = Spot.create({ Code: "A1" });
        expect(spot.isFree).toBe(true);
    });

    it("check if the spot can be occupied", () => {
        const spot = Spot.create({ Code: "A1" });
        spot.OccupySpot();
        expect(spot.isFree).toBe(false);
    });

    it("check if the spot can be freed", () => {
        const spot = Spot.create({ Code: "A1" });
        spot.OccupySpot();
        spot.FreeSpot();
        expect(spot.isFree).toBe(true);
    });

    it("check if the spot cannot be occupied when it's already occupied", () => {
        const spot = Spot.create({ Code: "A1" });
        spot.OccupySpot();
        expect(() => spot.OccupySpot()).toThrow("Spot is already occupied.");
    });

    it("check if the spot cannot be freed when it's already free", () => {
        const spot = Spot.create({ Code: "A1" });
        expect(() => spot.FreeSpot()).toThrow("Spot is already free.");
    });

    


});