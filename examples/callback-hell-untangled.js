/**
 * @callback requestCallback
 * @param {Object} coordinates
 * @param {string} coordinates.longitude
 * @param {string} coordinates.latitude
 */

const lib = {
    /**
     * @param {requestCallback} cb
     */
    getGPSLocation(cb, onErr) {},
    findCityBy() {},
    authedWeatherService() {},
};

const logger = { error() {} };

/**
 *
 * @param user
 * @param user.authToken {string}
 * @returns {getWeather}
 * @constructor
 */


function UserWeatherService(user) {
    const self = this;
    this.weather = {};
    this.loading = true;

    function onWeatherRetrieved(weather) {
        self.weather = weather;
        self.loading = false;
    }

    function onCityFound(city) {
        lib.authedWeatherService(
            user.authToken,
            city,
            onWeatherRetrieved,
            onWeatherFetchError,
        );
    }

    function onLocationFound(coordinates) {
        const lng = parseInt(coordinates.longitude);
        const lat = parseInt(coordinates.latitude);

        lib.findCityBy(lng, lat, onCityFound, onCityFinderError);
    }

    function getWeather() {
        lib.getGPSLocation(onLocationFound, onGPSError);
    }

    function onWeatherFetchError(error) {
        logger.error(error);
    }

    function onCityFinderError(error) {
        logger.error(error);
    }

    function onGPSError(error) {
        logger.error(error);
    }
    return getWeather;
}
