import { Document } from 'mongoose';

export default interface IVente extends Document {
    ref: string;
    date: Date;
    montant: number;
    client: string;
    medicaments: Array<string>;
    

}
