import { describe, expect, it } from "vitest";
import Ticket from "./Ticket.ts";
import PlateNumber from "../@seed/plateNumber.ts";

describe("Testing Ticket", () => {
    it("should create a ticket with valid plate number", () => {
        const plate = PlateNumber.create("ABC-12-11-CD");
        const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
        expect(ticket.plate.value).toBe("ABC-12-11-CD");
    });

    it("should throw an error for invalid plate number",
         () => { expect(() => { Ticket.create({plateNumber: PlateNumber.create("INVALID"), spotId: "spot-001"}); })
         .toThrow("Invalid plate number length")});

         it("should print plate number", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            expect(ticket.plate.value).toBe("ABC-12-11-CD");
         });

         it("set a new valid plate number", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            ticket.plate = PlateNumber.create("XYZ-34-56-EF");
            expect(ticket.plate.value).toBe("XYZ-34-56-EF");
         });

         it("shoul throw an error when updateing to an invalid plate number", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            expect(() => { ticket.plate = PlateNumber.create("INVALID"); }).toThrow("Invalid plate number length")});

        it(" should get the spot id", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            expect(ticket.spotId).toBe("spot-001");
         });

         it("check if the ticket is checked out", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            expect(ticket.ischeckedOut).toBe(false);
         });

         it("check out the ticket", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            ticket.checkOut();
            expect(ticket.ischeckedOut).toBe(true);
            expect(ticket.checkOutTimeValue).toBeInstanceOf(Date);
         });

         it("should throw an error when checking out an already checked out ticket", () => {
            const plate = PlateNumber.create("ABC-12-11-CD");
            const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
            ticket.checkOut();
            expect(() => ticket.checkOut()).toThrow("Ticket is already checked out")});

            it("should throw an error when trying to get hours stayed for a ticket that is not checked out", () => {
                const plate = PlateNumber.create("ABC-12-11-CD");
                const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
                expect(() => ticket.hoursStayed).toThrow("Ticket is not checked out yet")});

                it("should get the hours stayed for a checked out ticket", () => {
                    const plate = PlateNumber.create("ABC-12-11-CD");
                    const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
                    ticket.checkOut();
                    expect(ticket.hoursStayed).toBe(0);
                });

                it("should get the time stayed in a human readable format", () => {
                    const plate = PlateNumber.create("ABC-12-11-CD");
                    const ticket = Ticket.create({plateNumber:plate,spotId: "spot-001",});
                    ticket.checkOut();
                    expect(ticket.timestayed).toBe("0 hours and 0 minutes");
                }); 
            });