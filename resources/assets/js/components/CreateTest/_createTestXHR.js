"use strict";

import http from '../../helpers/AxiosRequest';

function _createTestXHR(data) {
  return new Promise((resolve, reject) => {
    http('POST', "/api/create-test", data)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

export default _createTestXHR;