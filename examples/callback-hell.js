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

    function getWeather() {
        lib.getGPSLocation(function onLocationFound(coordinates) {
            const lng = parseInt(coordinates.longitude);
            const lat = parseInt(coordinates.latitude);

            lib.findCityBy(lng, lat, function onCityFound(city) {
                lib.authedWeatherService(
                    user.authToken,
                    city,
                    function onWeatherRetrieved(weather) {
                        self.weather = weather;
                        self.loading = false;
                    },
                    function onWeatherFetchError(error) {
                        logger.error(error);
                    },
                );
            }, function onCityFinderError(error) {
                logger.error(error);
            });
        },
        function onGPSError(error) {
            logger.error(error);
        });
    }

    return getWeather;
}
