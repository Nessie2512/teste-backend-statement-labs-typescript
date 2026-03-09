import { describe,it,expect } from "vitest";
import { Fee } from "./Fee.ts";

describe("Testing Fee service", () => {

    it("should calculate fee amount for 5 hours stayed", () => {
        const mockTicket = {
            hoursStayed: 5,
            ischeckedOut: true
        }
        const fee = new Fee(mockTicket as any);
        expect(fee.feeAmount).toBe(1800);
    });

    it("should calculate fee amount for 8 hours stayed", () => {
        const mockTicket = {
            hoursStayed: 8,
            ischeckedOut: true
        }
        const fee = new Fee(mockTicket as any);
        expect(fee.feeAmount).toBe(2200);
    });

    it("should calculate fee amount for 0 hours stayed", () => {
            const mockTicket = {
                hoursStayed: 0,
                ischeckedOut: true
            }
            const fee = new Fee(mockTicket as any);
            expect(fee.feeAmount).toBe(0);
    });

        it("should throw error if ticket is not checked out", () => {   
            const mockTicket = {
                hoursStayed: 5,
                ischeckedOut: false
            }
            const fee = new Fee(mockTicket as any);
            expect(() => fee.feeAmount).toThrow("Ticket is not checked out yet");});

      it("should calculate fee amount for 6 hours stayed", () => {
                const mockTicket = {
                    hoursStayed: 6,
                    ischeckedOut: true
                }
                const fee = new Fee(mockTicket as any);
                expect(fee.feeAmount).toBe(1800);
     });

     it("should calculate fee amount for 7 hours stayed", () => {
        const mockTicket = {
            hoursStayed: 7,
            ischeckedOut: true
        }
        const fee = new Fee(mockTicket as any);
        expect(fee.feeAmount).toBe(2000);
     }  );

           
});