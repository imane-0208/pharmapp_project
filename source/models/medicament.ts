import mongoose, { Schema } from 'mongoose';
import IMedicament from '../iterfaces/medicament';

const MedicamentSchema: Schema = new Schema(
    {
        nom_comercial: { type: String, required: true },
        nom_chimique: { type: String, required: true },
        date_expiration: { type: Date, required: true },
        quantite: { type: Number, required: true }
        
    },
    { timestamps: true }
);

export default mongoose.model<IMedicament>('Medicament', MedicamentSchema);
