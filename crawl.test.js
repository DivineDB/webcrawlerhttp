const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL remove protocol", () => {
	const input = "https://bento.me/divyanshbaghel";
	const actual = normalizeURL(input);
	const expected = "bento.me/divyanshbaghel";
	expect(actual).toEqual(expected);
});
test("normalizeURL remove trailing slash", () => {
	const input = "https://bento.me/divyanshbaghel/";
	const actual = normalizeURL(input);
	const expected = "bento.me/divyanshbaghel";
	expect(actual).toEqual(expected);
});
test("normalizeURL Capitals", () => {
	const input = "https://BENTO.me/divyanshbaghel/";
	const actual = normalizeURL(input);
	const expected = "bento.me/divyanshbaghel";
	expect(actual).toEqual(expected);
});
test("normalizeURL ", () => {
	const input = "https://BENTO.me/divyanshbaghel/";
	const actual = normalizeURL(input);
	const expected = "bento.me/divyanshbaghel";
	expect(actual).toEqual(expected);
});

