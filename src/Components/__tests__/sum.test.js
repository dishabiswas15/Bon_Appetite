import { sum } from "../sum"; //js doesnt under import so babel helps jest to understand the import
test("Check sum of 2 positive numbers", ()=>{
    expect(sum(2,5)).toBe(7);
});