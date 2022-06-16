import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import IUser from '../iterfaces/user';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (err: Error | null, token: string | null) => void): void => {
    const timestamp = new Date().getTime();
    const expirationTime = timestamp + Number(config.server.token.expireTime)* 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    logging.info(NAMESPACE, `Attempting to sign for ${user.username}.`);

    try {
        jwt.sign({
            username: user.username,
           
        },
        config.server.token.secret,
        {
            issuer: config.server.token.issuer,
            algorithm: 'HS256',
            expiresIn: expirationTimeInSeconds
        },

        (err, token) => {
            if (err) {
                callback(err, null);
            }
            else if (token) {
                callback(null, token);
            }
        });
        
} catch (err: any) {
    logging.error(NAMESPACE, err.message, err);
    callback(err, null);
}

}

export default signJWT;
