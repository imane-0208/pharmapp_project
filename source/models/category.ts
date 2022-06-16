import mongoose, { Schema } from 'mongoose';
import ICategory from '../iterfaces/category';

const CategorySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }
        
    },
    { timestamps: true }
);

export default mongoose.model<ICategory>('Category', CategorySchema);
