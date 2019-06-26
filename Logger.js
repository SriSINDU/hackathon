/**
 * @class A console logger
 */
class Logger {
	/**
	 * Log text to the console
	 * @param  {string} text The text you want to log
	 * @param  {string} level The log level. Defaults to 'info'
	 */
	logMessage(text, level = 'info'){
		console.log(`${level}: ${text}`)
	}
}

export default Logger