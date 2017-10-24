'use strict';
require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const reddit = new Snoowrap({
	userAgent: 'reddit.us.caliburn.1.0.0',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const client = new Snoostorm(reddit);

const redditStreamOpts = {
	subreddit: 'caliburnhcf',
	results: 1
};

const redditData = {};

redditData.submissions = client.SubmissionStream(redditStreamOpts);

redditData.filterPostRequirements = function(submission) {
	if (!submission.can_mod_post) {
		console.log('Poster is not MOD.');
		return;
	}

	if (submission.selftext === '') {
		console.log('Empty text post.');
		return;
	}

	if (submission.title.substring(0, 1) !== '*') {
		console.log('Post is not defined to be a news post.');
		return;
	}

	console.log(submission.title + ': ' + submission.selftext);
}

module.exports = redditData;