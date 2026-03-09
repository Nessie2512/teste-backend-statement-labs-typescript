import {describe, expect, it} from 'vitest';
import PlateNumber from './plateNumber.ts'; './plateNumber.ts';

describe('Testing PlateNumber', () => {

    it('should create a valid plate number', () => {
        const plateNumber = PlateNumber.create('LDA-12-67-RJ');
        expect(plateNumber.value).toBe('LDA-12-67-RJ');
    });

    it('should format the plate number correctly', () => {
        const plateNumber = PlateNumber.create('ABC1211CD');
        expect(plateNumber.value).toBe('ABC-12-11-CD');
    });

    it('should throw an error for invalid plate number length', () => {
        expect(() => PlateNumber.create('INVALID')).toThrow('Invalid plate number length');
    });

    it('should validate plate number format', () => {
        const plateNumber = PlateNumber.create('XYZ-99-88-AB');
        expect(plateNumber.isValue('XYZ-99-88-AB')).toBe(true);
        expect(plateNumber.isValue('INVALID')).toBe(false);
    }); 

    it("should format the plate number correctly with different input formats", () => {
        const plateNumber1 = PlateNumber.create('abc1234cd');
        expect(plateNumber1.value).toBe('ABC-12-34-CD');
    });

    it("should throw an error for plate numbers with invalid characters", () => {
        expect(() => PlateNumber.create('ABC-12-34-!@')).toThrow('Invalid plate number length');
    });
 
  
});