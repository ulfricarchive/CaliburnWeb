exports.news_list = function(req, res) {
	res.render('news', { 
		title: 'News',
		post: [{
			author: 'hm04',
			time_posted: 'an hour ago',
			title: 'Post title',
			content: 'Post content here test test test.'
		},
		{
			author: 'hm04',
			time_posted: 'an hour ago',
			title: 'Post title 2',
			content: 'Post 2 content here test test test.'
		}]
	});
};