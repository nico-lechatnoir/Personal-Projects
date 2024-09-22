const sent = "Hello Vs. w/ the Theme is the anThem & Bigest The Story Of All Time tv id tmu";
String.prototype.toTitleCase = function () {
	const upper = ["Id", "Tv", "Tmu", "Q&a"];
	const ignore = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Is', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V\\.', 'Versus', 'Via', 'Vs\\.', 'W\\.', 'W\/', 'With'];
	const exceptions = new RegExp(`[\\b\\s](?<upper>${upper.join("|")})|(?<lower>${ignore.join("|")})[\\b\\s]`, "g");
	return this.replace(/\b\w/g, match => match.toUpperCase()).replace(exceptions, (match, p1, p2, index, string, groups) =>
		(groups.lower) ? (index === 0) ? match : match.toLowerCase() : match.toUpperCase());
};
//console.log(`${sent}\n${sent.toTitleCase()}`);

const toTitleCase = (text) => {
	const upper = ["Id", "Tv", "Tmu", "Q&a"];
	const ignore = ['A', 'An', 'And', 'As', 'At', 'B/c', 'But', 'By', 'For', 'From', 'In', 'Is', 'Into', 'Ios', 'Ipad', 'Iphone', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'V\\.', 'Versus', 'Via', 'Vs\\.', 'W\\.', 'W\/', 'With'];
	const exceptions = new RegExp(`[\\b\\s](?<upper>${upper.join("|")})|(?<lower>${ignore.join("|")})[\\b\\s]`, "g");
	return text.replace(/\b\w/g, (match) => match.toUpperCase()).replace(exceptions, (match, p1, p2, index, string, groups) =>
		(groups.lower) ? (index === 0) ? match : match.toLowerCase() : match.toUpperCase());
}
//console.log(`"${sent}" => \n"${toTitleCase(sent)}"`);
console.log(toTitleCase(sent) === sent.toTitleCase());
