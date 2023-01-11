const fs = require('fs')
const path = require('path')

const rPath = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'data.json'
)

const readData = callback => {
	fs.readFile(rPath, (err, fileData) => {
		if (err) {
			callback([])
		} else {
			callback(JSON.parse(fileData))
		}
	})
}

module.exports = class DataModel {
	static fetchData(callback) {
		readData(callback)
	}
}
