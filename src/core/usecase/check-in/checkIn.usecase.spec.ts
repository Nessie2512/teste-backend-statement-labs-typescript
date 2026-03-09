/*import { describe,it, expect } from "vitest";
import CheckInUseCase from "../../usecase/check-in/checkIn.usecase";
import SpotinMemoryRepo from "../../../infra/database/in-memory/spot.inMemory.repo";
import TicketInMemoryRepo from "../../../infra/database/in-memory/ticket.inMemory.repo";
import PlateNumber from "../@seed/plateNumber";


describe("Testing the Checkin usecase", () => {

    let checkInUseCase: CheckInUseCase;
    let spotRepository: SpotinMemoryRepo;
    let ticketRepository: TicketInMemoryRepo;

    beforeEach(() => {
        spotRepository = new SpotinMemoryRepo();
        ticketRepository = new TicketInMemoryRepo();
        checkInUseCase = new CheckInUseCase(ticketRepository, spotRepository);
    });

    it("should create a check-in successfully", async () => {
        const result = await checkInUseCase.execute({ "ABC1234"});
        expect(result).toBeDefined();
        expect(result.ticketId).toBeDefined();
        expect(result.plateNumber).toBe("ABC1234");
    });

    it("should throw an error when no free spots available", async () => {
        await expect(checkInUseCase.execute({ plateNumber: "ABC1234" })).rejects.toThrow(
            "No free spots available"
        );
    });

    it("should save ticket in repository", async () => {

        const plate =  PlateNumber.create("DEF5678");

        const result = await checkInUseCase.execute({ plateNumber: plate});
        expect(ticketRepository.SaveTicket).toHaveBeenCalled();
        expect(result.spotId).toBeDefined();
    });

    it("should return checkedTime when creating ticket", async () => {

        
        const plate =  PlateNumber.create("DEF5678");

        const result = await checkInUseCase.execute({ plateNumber: plate });
        expect(result.checkedTime).toBeDefined();
        expect(result.checkedTime).toBeInstanceOf(Date);
    });
});
describe("Testing the Checkin usecase", ()=>{
    it("should create a check-in successfully", () => {
        //const checkInUseCase = new CheckInUseCase();
        //const result = checkInUseCase.execute({ userId: "123", timestamp: new Date() });
        //expect(result).toBeDefined();
    });

    it("should throw an error for invalid user", () => {
        //const checkInUseCase = new CheckInUseCase();
        //expect(() => checkInUseCase.execute({ userId: "", timestamp: new Date() })).toThrow();
    });
})

*/