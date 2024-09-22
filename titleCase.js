const sent = "Hello Vs. w/ the Theme is the anThem & Bigest The Story Of All Time tv id tmu";
String.prototype.toTitleCase = function () {
    // Certain words such as initialisms or acronyms should be left uppercase
	const upper = ["Id", "Tv", "Tmu", "Q&a"];
	const reUpper = new RegExp(`\\b(${upper.join("|")})\\b`, "g");
	const lower = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V.', 'Versus', 'Via', 'Vs.', 'W.', 'W/', 'With'];
	const reLower = new RegExp(`\\b(${lower.join("|")})\\b`, "g");

	var str = this.replace(/\b\w/g, (match) => match.toUpperCase());
	return str.replace(reLower, (match, index) => (index === 0) ? match : match.toLowerCase()).replace(reUpper, match => match.toUpperCase());
};
//console.log(`this declaration:\n"${sent}" becomes "${sent.toTitleCase()}"`);

const toTitle = (text) => {
    // Certain words such as initialisms or acronyms should be left uppercase
	const upper = ["Id", "Tv", "Tmu", "Q&a"];
	const reUpper = new RegExp(`\\b${upper.join("|")}\\b`, "g");
	//Lower Case
	const lower = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V.', 'Versus', 'Via', 'Vs\.', 'W\.', 'W/', 'With'];
	const reLower = new RegExp(`\\b${lower.join("|")}\\b`, "g");

	var str = text.replace(/\b\w/g, (match) => match.toUpperCase());
	str = str.replace(reLower, (match, index) => (index === 0) ? match : match.toLowerCase());
	str = str.replace(reUpper, match => match.toUpperCase());
	return str
};

//console.log(`Simple way:\n"${sent}" becomes "${toTitle(sent)}"`);

const toTitles = (text) => {
	const upper = ["Id", "Tv", "Tmu", "Q&a"];
	const ignore = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Is', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V\\.', 'Versus', 'Via', 'Vs\\.', 'W\\.', 'W\/', 'With'];
	
	const exceptions = new RegExp(`[\\b\\s](?<upper>${upper.join("|")})|(?<lower>${ignore.join("|")})[\\b\\s]`, "g");
	text = text.replace(/\b\w/g, (match) => match.toUpperCase())
	return text.replace(exceptions, (match, p1, p2, index, string, groups) => 
		(groups.lower) ? (index === 0) ? match : match.toLowerCase(): match.toUpperCase());
}
console.log(`"${sent}" => \n"${toTitles(sent)}"`);
