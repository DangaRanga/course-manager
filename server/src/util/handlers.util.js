/**
 *
 * @param {*} err
 * @param {*} data
 * @param {function} errorHandler
 * @param {*} response
 */
function queryHandler(err, data, errorHandler, response) {
  if (err) {
    return errorHandler(err);
  } else {
    response.json(data);
  }
}

module.exports = {
  queryHandler: queryHandler,
};
