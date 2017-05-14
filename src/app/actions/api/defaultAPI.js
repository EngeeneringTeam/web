import request from 'superagent';
import config from '../../config';

function get(PATH) {
  return new Promise((resolve, reject) => {
    request
      .get(`${config.SERVER_PROTOCOL}://${config.SERVER_IP}:${config.SERVER_PORT}${PATH}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          try {
            reject(res.statusCode);
          } catch (error) {
            reject();
          }
          return;
        }
        resolve(res.body);
      });
  });
}

function post(PATH, _data) {
  return new Promise((resolve, reject) => {
    request
      .post(`${config.SERVER_PROTOCOL}://${config.SERVER_IP}:${config.SERVER_PORT}${PATH}`)
      .set('Content-Type', 'application/json')
      .send(_data)
      .end((err, res) => {
        if (err) {
          try {
            reject(res.statusCode);
          } catch (error) {
            reject();
          }
          return;
        }
        resolve(res.body);
      });
  });
}

export default {get, post};
