const mongoose = require('mongoose');
const { Schema } = mongoose;


const AddressSchema = new Schema({
  street: { type: String, required: true },
  number: { type: Number, required: true },
  floor: { type: Number },
  door: { type: String },
  zip_code: { type: String, required: true },
  city: { type: String },
  country: { type: String, required: true }
});


const GraduationSchema = new Schema({
  right: { type: Number, required: true },
  left: { type: Number, required: true }
});


const GlassesSchema = new Schema({
  brand: { type: String, required: true },
  graduation: GraduationSchema,
  frame_type: { type: String, required: true },
  color_frame: { type: String, required: true },
  color_glass1: { type: String, required: true },
  color_glass2: { type: String, required: true },
  price: { type: Number, required: true },
  sale_date: { type: Date },
  employee: { type: Number }
});


const ProviderSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  address: AddressSchema
});


const ClientSchema = new Schema({
  name: { type: String, required: true },
  address: AddressSchema,
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  register_date: { type: Date, default: Date.now },
  last_shoppings: [{ type: Schema.Types.ObjectId, ref: 'Glasses' }]
});


const OpticSchema = new Schema({
  name: { type: String, required: true },
  address: AddressSchema,
  provider: { type: Schema.Types.ObjectId, ref: 'Provider' },
  client: { type: Schema.Types.ObjectId, ref: 'Client' }
});


const Glasses = mongoose.model('Glasses', GlassesSchema);
const Provider = mongoose.model('Provider', ProviderSchema);
const Client = mongoose.model('Client', ClientSchema);
const Optic = mongoose.model('Optic', OpticSchema);

module.exports = {
  Glasses,
  Provider,
  Client,
  Optic
}; 