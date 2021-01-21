import config from '../../config.js';
import auth from 'google-auth-library';
const { OAuth2Client } = auth;
const client = new OAuth2Client(config.googleClientId);
function verifyToken(tokenId) {
    return new Promise((resolve, reject) => {
        client.verifyIdToken({ idToken: tokenId, audience: config.googleClientId }, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

export { verifyToken };
