const DataModel = require('../models/data')

exports.getPage = (req, res, next) => {
	DataModel.fetchData(items => {
		if (!items) {
			return res.send('No data')
		} else {
			const itemNames = Object.keys(items)
			res.render('content', { itemNames })
		}
	})
}
