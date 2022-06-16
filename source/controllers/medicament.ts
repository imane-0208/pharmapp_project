import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import mongoose from 'mongoose';
import Medicament from '../models/medicament';



const NAMESPACES = 'Medicament';



//get all medicaments
const getAllMedicaments = (req: Request, res: Response, next: NextFunction) => {
    Medicament.find()
        .then((medicaments) => {
            return res.status(200).json({
                medicaments
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

//add medicament
const addMedicament = (req: Request, res: Response, next: NextFunction) => {
    const medicament = new Medicament({
        _id: new mongoose.Types.ObjectId(),
        nom_comercial: req.body.nom_comercial,
        nom_chimique: req.body.nom_chimique,
        date_expiration: req.body.date_expiration,
        quantite: req.body.quantite
    });
    medicament
        .save()
        .then((result) => {
            return res.status(201).json({
                message: 'Medicament added successfully',
                createdMedicament: {
                    _id: result._id,
                    nom_comercial: result.nom_comercial,
                    nom_chimique: result.nom_chimique,
                    date_expiration: result.date_expiration,
                    quantite: result.quantite
                }
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

// get one medicament
const getOneMedicament = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    Medicament.findById(id)
        .then((medicament) => {
            if (medicament) {
                return res.status(200).json({
                    medicament
                });
            }
            return res.status(404).json({
                message: 'Medicament not found'
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

//update medicament
const updateMedicament = (req: Request, res: Response, next: NextFunction) => {
};

export default { getAllMedicaments, addMedicament, getOneMedicament, updateMedicament };

