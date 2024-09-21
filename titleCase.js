let sent = "the main point of the text id vs.";

String.prototype.toTitleCase = function () {
	var i, j, str, lowers, uppers;
	str = this.replace(/\b\w/g, (match) => match.toUpperCase());

	// Certain minor words should be left lowercase unless they are the first or last words in the string
	lowers = ["A", "An", "The", "And", "But", "Or", "For", "Nor", "As", "At", "By", "For", "From", "In", "Into", "Near", "Of", "On", "Onto", "To", "With"];
	for (i = 0, j = lowers.length; i < j; i++) str = str.replace(new RegExp(`\s${lowers[i]}\s`, "g"), (match) => match.toLowerCase());
	// Certain words such as initialisms or acronyms should be left uppercase
	uppers = ["Id", "Tv"];
	for (i = 0, j = uppers.length; i < j; i++) str = str.replace(new RegExp(`\b${uppers[i]}\b`, "g"), uppers[i].toUpperCase());
	return str;
};

const toTitle = (text) => {
	var str = text.replaceAll(/\b\w/g, (match) => match.toUpperCase());

    // Certain words such as initialisms or acronyms should be left uppercase
	const upper = ["Id", "Tv", "Vs"];
	const reUpper = new RegExp(`\\b(${upper.join("|")})\\b`, "g");
	str = str.replace(reUpper, (match) => match.toUpperCase());

	const lower = ["A", "An", "The", "And", "But", "Or", "For", "Nor", "As", "At", "By", "For", "From", "In", "Into", "Near", "Of", "On", "Onto", "To", "With"];
	const reLower = new RegExp(`\\b(${lower.join("|")})\\b`, "g");

	if (str.search(reLower) === 0) {
        let ignore = str.match(reLower)[0];
		return ignore + str.substring(ignore.length).replace(reLower, (match) => match.toLowerCase());
	}
	return str.replace(reLower, (match) => match.toLowerCase());
};

console.log(`"${sent}" becomes "${toTitle(sent)}"`);
