import { randomUUID } from "node:crypto";

import type ValueObject from "./valueObject.vo.ts";

export default class Identifier implements ValueObject<string> {
    private _value: string;

    private constructor(value?: string){
        this._value = value ?? randomUUID();
    }

    public static create(value?: string){
        return new Identifier(value);
    }
      

    public get value(): string {
        return this._value;
    }

   get valueToString(): string {
       return this._value.toString();
   } 

     isValue(data: string): boolean {
          const uuidRegex =/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[4][a-fA-F0-9]{3}-[89abAB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/;
          return uuidRegex.test(data)  
    }

}