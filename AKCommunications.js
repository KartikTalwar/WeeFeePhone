'use strict';
var React = require('react-native');

var {
	LinkingIOS,
	IntentAndroid,
	Platform,
} = React;

var communication = {
	phonecall: function(phoneNumber, prompt) {
		if(arguments.length !== 2) {
			console.log('you must supply exactly 2 arguments');
			return;
		}

		if(!isCorrectType('String', phoneNumber)) {
			console.log('the phone number must be provided as a String value');
			return;
		}

		if(!isCorrectType('Boolean', prompt)) {
			console.log('the prompt parameter must be a Boolean');
			return;
		}

		var url;

		if(Platform.OS !== 'android') {
			url = prompt ? 'telprompt:' : 'tel:';
		}
		else {
			url = 'tel:';
		}

		url += phoneNumber;

		LaunchURL(url);
	},

	email: function(to, cc, bcc, subject, body){
		var url = 'mailto:';
		var argLength = arguments.length;

		switch(argLength) {
			case 0:
				LaunchURL(url);
				return;
			case 5:
				break;
			default:
				console.log('you must supply either 0 or 5 arguments. You supplied ' + argLength);
				return;
		}

		// we use this Boolean to keep track of when we add a new parameter to the querystring
		// it helps us know when we need to add & to separate parameters
		var valueAdded = false;

		if(isCorrectType('Array', arguments[0])) {
			var validAddresses = getValidArgumentsFromArray(arguments[0], 'String');
			
			if(validAddresses.length > 0) {
				url += validAddresses.join(',');
			}
		}

		url += '?';

		if(isCorrectType('Array', arguments[1])) {
			var validAddresses = getValidArgumentsFromArray(arguments[1], 'String');

			if(validAddresses.length > 0) {
				valueAdded = true;
				url += 'cc=' + validAddresses.join(',');
			}
		}

		if(isCorrectType('Array', arguments[2])) {
			if(valueAdded) {
				url += '&';
			}

			var validAddresses = getValidArgumentsFromArray(arguments[2], 'String');
			
			if(validAddresses.length > 0) {
				valueAdded = true;
				url += 'bcc=' + validAddresses.join(',');
			}
		}

		if(isCorrectType('String', arguments[3])) {
			if(valueAdded) {
				url += '&';
			}

			valueAdded = true;
			url += 'subject=' + arguments[3];
		}

		if(isCorrectType('String', arguments[4])) {
			if(valueAdded) {
				url += '&';
			}

			url += 'body=' + arguments[4];
		}

		url = encodeURI(url);

		LaunchURL(url);
	},

	text: function(phoneNumber) {
		if(arguments.length > 1) {
			console.log('you supplied too many arguments. You can either supply 0 or 1');
			return;
		}

		var url = 'sms:';

		if(arguments.length !== 0) {
			if(isCorrectType('String', phoneNumber)) {
				url += phoneNumber;
			} else {
				console.log('the phone number should be provided as a string. It was provided as ' 
					+ Object.prototype.toString.call(phoneNumber).slice(8, -1) 
					+ ',ignoring the value provided');
			}
		}

		LaunchURL(url);
	},
};

var LaunchURL = function(url) {
	var Linker = Platform.OS === 'android' ? IntentAndroid : LinkingIOS;
	Linker.canOpenURL(url, (supported) => {
			if (!supported) {
		    	console.log('Can\'t handle url: ' + url);
		  	} else {
		    	Linker.openURL(url);
		  	}
	});
};

var getValidArgumentsFromArray = function(array, type) {
	var validValues = [];
	array.forEach(function(value) {
		if(isCorrectType(type, value)) {
			validValues.push(value);
		}
	});

	return validValues;
};

var isCorrectType = function(expected, actual) {
	return Object.prototype.toString.call(actual).slice(8, -1) === expected;
};

module.exports = communication;