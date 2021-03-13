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

function emptyRequestHandler(request, response) {
  const isEmpty = !Object.values(request.body).some(
    (value) => value !== null && value !== ""
  );

  if (isEmpty) {
    response.status(400).json({ message: "Not all fields have been set" });
  }
}

module.exports = {
  queryHandler: queryHandler,
};
