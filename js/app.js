var challenges = [{
	dailyChallenge: 'Take a shower in under 5 minutes',
	rating: 1,
	benefits: 'Save 6,000 gallons of water per year!',
},{
	dailyChallenge: 'Use public transportation instead of driving today',
	rating: 2,
	benefits: 'Create only a fraction of the pollution generated from driving also save roughly $9,000 annually ',
},{
	dailyChallenge: 'Plant a tree!',
	rating: 3,
	benefits: 'To make up for the loss of trees over the past decade, 130 million hectares (or 1.3 million square kilometers), an area as large as Peru, would have to be reforested. Accomplishing that would mean planting about 14 billion trees every year for 10 years in a row, the equivalent of every person on Earth planting and caring for at least two seedlings annually.',
},{
	dailyChallenge: 'Buy only local produce',
	rating: 1,
	benefits: '',
},{
	dailyChallenge: 'Use reusable shopping bags today',
	rating: 1,
	benefits: 'Do you part in reducing the average of 22,000 plastic bags used by each person in their lifetime ',
},{
	dailyChallenge: 'Carpool',
	rating: 2,
	benefits: 'Thanks for doing your part in not contribiting to the 60 billion dollar loss of gas and time caused by solo commuters',
},{
	dailyChallenge: 'Unplug all idle kitchen appliances',
	rating: 1,
	benefits: '',
},{
	dailyChallenge: 'Laundry day... Air dry your clothes!',
	rating: 2,
	benefits: '',
},{
	dailyChallenge: 'Go to optoutprescreen.com to stop receiving pre-approved credit card offers and sign up on catalogchoice.org to reduce the amount of unsolicited catalogs sent to you.',
	rating: 2,
	benefits: '',
},{
	dailyChallenge: 'Donate old tech/cellphones',
	rating: 1,
	benefits: '',
},{
	dailyChallenge: 'Carry a water bottle with you',
	rating: 1,
	benefits: '',
},{
	dailyChallenge: 'Pick up 3 pieces of trash today',
	rating: 1,
	benefits: 'Ten million people. That’s 30 million pieces of trash per day.  What if each person only picked that piece of trash every other day?  That is 30 million people each picking up 182.5 pieces of trash per year, that’s almost 5.5 billion pieces of trash picked up.  That is pretty powerful, billions of pieces of trash less going into our waterways and oceans.',
}];

function randomChallenge(things){
	var chall = {};
	chall.challenges = getRandomElement(challenges);
	return chall;
}

