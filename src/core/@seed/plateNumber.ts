import type ValueObject from "./valueObject.vo.js";

export default class PlateNumber implements ValueObject<string> {
    private _value: string;
    private constructor(value: string){
        this._value = value;
    }

    public static create(value: string){
        const formattedValue = this.prototype.formatValue(value);
        if(formattedValue.length != 12) {
            throw new Error('Invalid plate number length');
        }
        return new PlateNumber(formattedValue);
    }

    get value(): string {
        return this._value;
    }

    get valueToString(): string {
        return this._value.toString();
    }

     public isValue(data: any): boolean {
        const plateNumberRegex = /^[A-Z]{3}-\d{2}-\d{2}-[A-Z]{2}$/;
        return plateNumberRegex.test(data);
     }

     private formatValue(value: string): string {
        const formattedValue = value .replace(/[^A-Z0-9]/gi, "") 
  .replace(/^([A-Z]{3})(\d{2})(\d{2})([A-Z]{2})$/i, "$1-$2-$3-$4")
  .toUpperCase()
        return formattedValue.toUpperCase();
     }
     
    }
    
