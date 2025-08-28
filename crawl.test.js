const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL remove protocol", () => {
	const input = "https://bento.me";
	const actual = normalizeURL(input);
	const expected = "bento.me";
	expect(actual).toEqual(expected);
});
test("normalizeURL remove trailing slash", () => {
	const input = "https://bento.me/";
	const actual = normalizeURL(input);
	const expected = "bento.me";
	expect(actual).toEqual(expected);
});
test("normalizeURL Capitals", () => {
	const input = "https://BENTO.me";
	const actual = normalizeURL(input);
	const expected = "bento.me";
	expect(actual).toEqual(expected);
});
test("getURLsFromHTML Absolute", () => {
	const inputHtmlBody = `
    <html>
    <body>
    <a href = "https://bento.me/divyanshbaghel">bento.me/divyanshbaghel</a>
    </body>
    </html>
    `;
	const inputBaseURL = "https://bento.me";
	const actual = getURLsFromHTML(inputHtmlBody, inputBaseURL);
	const expected = ["https://bento.me/divyanshbaghel"];
	expect(actual).toEqual(expected);
});
test("getURLsFromHTML Relative", () => {
	const inputHtmlBody = `
    <html>
    <body>
    <a href = "/divyanshbaghel">bento.me/divyanshbaghel</a>
    </body>
    </html>
    `;
	const inputBaseURL = "https://bento.me";
	const actual = getURLsFromHTML(inputHtmlBody, inputBaseURL);
	const expected = ["https://bento.me/divyanshbaghel"];
	expect(actual).toEqual(expected);
});
test("getURLsFromHTML Multiple Links", () => {
	const inputHtmlBody = `
    <html>
    <body>
    <a href = "https://bento.me/divyanshbaghel">bento.me/divyanshbaghel</a>
    <a href = "https://bento.me/pragyajoshi">bento.me/pragyajoshi</a>
    </body>
    </html>
    `;
	const inputBaseURL = "https://bento.me";
	const actual = getURLsFromHTML(inputHtmlBody, inputBaseURL);
	const expected = ["https://bento.me/divyanshbaghel","https://bento.me/pragyajoshi"];
	expect(actual).toEqual(expected);
});
test("getURLsFromHTML Invalid", () => {
	const inputHtmlBody = `
    <html>
    <body>
    <a href = "invalid">INVALIDl</a>
    </body>
    </html>
    `;
	const inputBaseURL = "https://bento.me";
	const actual = getURLsFromHTML(inputHtmlBody, inputBaseURL);
	const expected = [];
	expect(actual).toEqual(expected);
});

