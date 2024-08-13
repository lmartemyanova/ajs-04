import { calculateTotal } from '../calculate'


test("basic test", () => {
    const result = 4;
    expect(result).toBe(4);
});


test("calculateTotal sum", () => {
    const list = [
        {
            id: 456,
            name: "Study Python",
            count: 3,
            price: 2300
        },
        {
            id: 36,
            name: "JavaScript",
            count: 2,
            price: 1500
        }
    ];
    const result = calculateTotal(list);
    expect(result).toBe(9900);
});

test("calculateTotal sum with Discount", () => {
    const list = [
        {
            id: 456,
            name: "Study Python",
            count: 3,
            price: 2333
        },
        {
            id: 36,
            name: "JavaScript",
            count: 2,
            price: 1500
        }
    ];
    const result = calculateTotal(list, true);
    expect(result).toBeCloseTo(8759.12);
});