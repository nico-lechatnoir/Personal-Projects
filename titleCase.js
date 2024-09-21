String.prototype.toTitleCase = function () {
	var str = this.replace(/\b\w/g, (match) => match.toUpperCase());
    // Certain words such as initialisms or acronyms should be left uppercase
	const upper = ["Id", "Tv"];
	const reUpper = new RegExp(`\\b(${upper.join("|")})\\b`, "g");
	str = str.replace(reUpper, (match) => match.toUpperCase());

	const lower = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V.', 'Versus', 'Via', 'Vs.', 'W.', 'W/', 'With'];
	const reLower = new RegExp(`\\b(${lower.join("|")})\\b`, "g");

	if (str.search(reLower) === 0) {
        let ignore = str.match(reLower)[0];
		return ignore + str.substring(ignore.length).replace(reLower, (match) => match.toLowerCase());
	}
	return str.replace(reLower, (match) => match.toLowerCase());
};
//console.log(sent.toTitleCase())

const toTitle = (text) => {
	var str = text.replaceAll(/\b\w/g, (match) => match.toUpperCase());

    // Certain words such as initialisms or acronyms should be left uppercase
	const upper = ["Id", "Tv"];
	const reUpper = new RegExp(`\\b(${upper.join("|")})\\b`, "g");
	str = str.replace(reUpper, (match) => match.toUpperCase());

	const lower = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V.', 'Versus', 'Via', 'Vs.', 'W.', 'W/', 'With'];
	const reLower = new RegExp(`\\b(${lower.join("|")})\\b`, "g");

	if (str.search(reLower) === 0) {
        let ignore = str.match(reLower)[0];
		return ignore + str.substring(ignore.length).replace(reLower, (match) => match.toLowerCase());
	}
	return str.replace(reLower, (match) => match.toLowerCase());
};

//console.log(`"${sent}" becomes "${toTitle(sent)}"`);
