import mongoose, {Model, Schema, SchemaDefinition} from 'mongoose';

const definition: SchemaDefinition = {
    name: {type: String, required: true},
    cont: {type: Number, required: true},
    typeCont: {type: String, required: true},
    flavor: {type: String, required: true},
    brand: {type: String, required: true},
    expDate: {type: Date, required: true}
}

const SodaSchema: Schema = new mongoose.Schema(definition)

export const SodaModel = mongoose.model('soda', SodaSchema);