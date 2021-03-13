/**
 *
 * @param {*} err
 * @param {*} data
 * @param {function} errorHandler
 * @param {Response} response
 */
function queryHandler(err, data, errorHandler, response) {
  if (err) {
    return errorHandler(err);
  } else {
    response.json(data);
  }
}

/**
 *
 * @param {Request} request
 * @param {Array} fields
 */
function emptyRequestHandler(request, fields) {
  for (let key in request.body) {
    if (request.body.hasOwnProperty(key)) {
      break;
    }
  }

  const hasEmptyField = fields.some((field) => {
    return field === null;
  });

  return hasEmptyField;
}

module.exports = {
  queryHandler: queryHandler,
  emptyRequestHandler: emptyRequestHandler,
};
