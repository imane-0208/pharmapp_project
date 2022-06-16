import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";
import jwt from "jsonwebtoken";
import config from "../config/config";


const NAMESPACE = "Auth";

const extractJwt = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Token validated, user authorized.");
    let token = req.headers.authorization?.split(" ")[1];
    if (token) {
        jwt.verify(token, config.server.token.secret, (err, decoded) => {
            if (err) {
                return res.status(404).json({
                    message : err.message,
                    error : err
                });
            }
                else {
                    res.locals.jwt = decoded;
                    next();
                }
        });
    }
    else {
        return res.status(401).json({
            message : "Unauthorized"
        });
    }
}

export default extractJwt;
            


