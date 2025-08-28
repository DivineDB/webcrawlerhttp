const { crawlPage } = require("./crawl.js");

function main() {
	if (process.argv.length < 3) {
		console.log("No Website Provided");
		process.exit(1);
	}
	if (process.argv.length > 3) {
		console.log("Please Enter Only One Website");
		process.exit(1);
	}
	const baseURL = process.argv[2];

	console.log(`Starting Web Crawl On ${baseURL}`);
	crawlPage(baseURL);
}

main();
