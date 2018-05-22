//Q1
describe("Sum", function () {
    it("should return the sum of all the numbers when the numbers are all positive", function () {
        expect(positiveSum([1, 2, 3, 4])).toBe(10)
    });

    it("should not be included as part of the sum when there is a negative number", function () {
        expect(positiveSum([1, -2, 3, 4])).toBe(8)
    });

    it("should return 0 when the provided array is empty", function(){
        expect(positiveSum([])).toBe(0)
    });

    it("should return 0 when the number are all negative", function () {
        expect(positiveSum([-1, -2, -3])).toBe(0)
    });
})

//Q2
describe("isDivisible", function () {
    it("should return true when a number is divisible by both of the provided divisors", function () {
        expect(isDivisible(8, 4, 2)).toBe(true)
    });

    it("should return false when the number is smaller then both the provided divisors", function () {
        expect(isDivisible(2, 4, 6)).toBe(false)
    });

    it("should return false when the number is not divisible by only one of the provided divisors", function () {
        expect(isDivisible(8, 4, 3)).toBe(false)
    });

    it("should return false when the number is not divisible by any of the provided divisors", function () {
        expect(isDivisible(8, 5, 3)).toBe(false)
    });
})

//Q3
describe("StringGame", function () {
    it("should return itself when there is only 1 characters in the string", function () {
        expect(solution("h")).toBe("h")
    });

    it("should return the string when there are multiple characters in the string", function () {
        expect(solution("hello world")).toBe("dlrow olleh")
        expect(solution("abcdefehijk")).toBe("kjihefedcba")
    });

    it("should return empty string when there are no characters in the string", function () {
        expect(solution("")).toBe("")
    });
})

//Q4
describe("arrayGame", function () {
    it("should return an array if this is negative number", function () {
        expect(reverseSeq(-5)).toBe([])
    });

    it("should return an array if this is a string", function () {
        expect(reverseSeq('hi')).toBe([])
    });

    it("should return be array in rank from n to 1", function () {
        expect(reverseSeq(6)).toBe([6, 5, 4, 3, 2, 1 ])
    });
})
