const _ = require("lodash")

function winstonToLogflareMapper(info) {
    const {message, level, ...metadata} = info
    const cleanedMetadata = _(metadata)
        .toPairs()
        .reject(([key, value]) => _.isSymbol(key))
        .fromPairs()
        .value()

    return {
        message,
        metadata: {...cleanedMetadata, level},
        timestamp: new Date().toISOString(),
    }
}

module.exports = {winstonToLogflareMapper}