import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import mongoose from 'mongoose';
import Vente from '../models/vente';


const NAMESPACES = 'Vente';

//get all ventes
const getAllVentes = (req: Request, res: Response, next: NextFunction) => {
    Vente.find()
        .then((ventes) => {
            return res.status(200).json({
                ventes
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

//add vente
const addVente = (req: Request, res: Response, next: NextFunction) => {
    const vente = new Vente({
        _id: new mongoose.Types.ObjectId(),
        ref: req.body.ref,
        date: req.body.date,
        client: req.body.client,
        medicaments: req.body.medicament,
    });
    vente
        .save()
        .then((result) => {
            return res.status(201).json({
                message: 'Vente added successfully',
                createdVente: {
                    _id: result._id,
                    ref: result.ref,
                    date: result.date,
                    client: result.client,
                    medicaments: result.medicaments
                   
                }
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
}

//get one vente
const getOneVente = (req: Request, res: Response, next: NextFunction) => {
    Vente.findById(req.params.id)
        .then((vente) => {
            if (!vente) {
                return res.status(404).json({
                    message: 'Vente not found'
                });
            }
            return res.status(200).json({
                vente
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
}  

export default {
    addVente,
    getAllVentes,
    getOneVente
};

