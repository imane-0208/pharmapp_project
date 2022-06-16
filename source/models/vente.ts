import mongoose, { Schema } from 'mongoose';
import IVente from '../iterfaces/vente';

const VenteSchema: Schema = new Schema(
    {
        ref: { type: String, required: true },
        date: { type: Date, required: true },
        montant: { type: Number, required: true },
        client: { type: String, required: false },
        medicaments: { type: Array, required: false }

    },
    { timestamps: true }
);


export default mongoose.model<IVente>('Vente', VenteSchema);
