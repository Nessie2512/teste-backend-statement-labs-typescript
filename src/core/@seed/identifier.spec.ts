import { describe, it, expect } from "vitest";
import Identifier from "./identifier.ts";

describe("Testing the identifier class", () => {
    it("should create a new identifier", () => {
        const id = Identifier.create();
        expect(id).toBeInstanceOf(Identifier);
    })

    it("should create a new identifier with a specific value", () => {
        const id = Identifier.create("123456789");
        expect(id.valueToString).toBe("123456789");
    })

    it("should get the value of the identifier", () => {
        const id = Identifier.create("123456789");
        expect(id.value).toBe("123456789");
    })

    it("should convert to string", () => {
        const id = Identifier.create("123456789");
        expect(id.valueToString).toBe("123456789");
    })
    
    it("should validate if the value is a valid UUID", () => {
        const id = Identifier.create();
        expect(id.isValue(id.value)).toBe(true);
    })

     it("should validate if the value is not a valid UUID", () => {
        const id = Identifier.create();
        expect(id.isValue("invalid-uuid")).toBe(false);
     }) 
})