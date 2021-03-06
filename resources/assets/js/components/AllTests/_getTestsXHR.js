"use strict";

import http from '../../helpers/AxiosRequest';

function _getTestsXHR() {
  return new Promise((resolve, reject) => {
    http("GET", "/api/tests")
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _getTestsXHR;