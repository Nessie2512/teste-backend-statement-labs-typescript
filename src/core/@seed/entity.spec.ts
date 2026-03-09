import  { describe, expect, it }   from "vitest";
import { Entity } from "./entity.ts";
import Identifier from "./identifier.ts";


describe("Testing Entity", () => {

    it("return the same id", () => {     
    const newEntity = new Entity({ name: "Test Entity" }, "123456789");
    expect(newEntity.Id).toBe("123456789");
    })

    it("return auto generated id", () => {
        const newEntity = new Entity({ name: "Test Entity" });
        expect(newEntity.Id).toBeTruthy();})

     it("return undefined for updatedAt", () => {
        const newEntity = new Entity({ name: "Test Entity" });
        expect(newEntity.updatedAt).toBeUndefined();
     })

     it( "should return true for entityState", () => {
        const newEntity = new Entity({ name: "Test Entity" });
        expect(newEntity.entityState).toBe(true);
     })

})