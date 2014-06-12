moment = require 'moment'

getTime = ()->
	moment().format 'h:mm:ss a'

module.exports = getTime

