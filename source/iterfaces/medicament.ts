import { Document } from 'mongoose';

export default interface IMedicament extends Document {
    nom_comercial: string;
    nom_chimique: string;
    date_expiration: Date;
    quantite: number;
}
