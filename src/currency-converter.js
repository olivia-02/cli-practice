// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
	var num = parseFloat(process.argv[2]),
		fromCur = process.argv[3],
		toCur = process.argv[4],
		conv = 0;

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.

if(num === undefined || fromCur === undefined || toCur === undefined) {
	console.log('Empty input, please provide amount, and currencies');
	process.exit();
}

// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/

const rates = {
	CAD: {
		USD: 1.27424,
		EUR: 1.54572,
		GBP: 1.6935,
		INR: 0.0173
	},
	USD: {
		CAD: 0.78478,
		EUR: 1.21305,
		GBP: 1.32903,
		INR: 0.01357
	},
	EUR: {
		USD: 0.82464,
		GBP: 1.09599,
		CAD: 0.64696,
		INR: 0.01119
	},
	GBP: {
		USD: 0.82434,
		EUR: 0.91241,
		CAD: 0.59008,
		INR: 0.01021
	},
	INR: {
		USD: 73.6682,
		EUR: 89.3725,
		GBP: 97.93,
		CAD: 57.7929
	}
}


// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

if(fromCur !== `CAD` && fromCur !== `USD` && fromCur !== `GBP` && fromCur !== `EUR` && fromCur !== `INR`){
	console.log('Please enter valid currency (CAD, USD, EUR, GBP, INR), Recieved: ' + fromCur);
	process.exit();
} else if (toCur !== `CAD` && toCur !== `USD` && toCur !== `GBP` && toCur !== `EUR` && toCur !== `INR`){
	console.log('Please enter valid currency (CAD, USD, EUR, GBP, INR), Recieved: ' + toCur);
	process.exit();
} else if (isNaN(num)){
	console.log('Please enter a valid value. Recieved: ' + num);
	process.exit();
}
if(fromCur === toCur){
	 conv = 1;
} else {conv = rates[fromCur][toCur]}


// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.

let rate = num*conv
console.log(rate.toFixed(2))

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.
