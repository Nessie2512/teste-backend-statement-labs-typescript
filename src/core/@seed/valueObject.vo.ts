
export default interface ValueObject<T> {
    value: T;
    get valueToString(): string;
    isValue(data:any):boolean
}