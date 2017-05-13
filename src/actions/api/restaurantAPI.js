import request from 'superagent';
import config from '../../config';

function getRestaurants() {
  return new Promise((resolve, reject) => {
    request
      .get(`${config.SERVER_PROTOCOL}://${config.SERVER_IP}:${config.SERVER_PORT}/restaurants`)
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

export default {getRestaurants};
