import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  name: String,
  precio: Number,
  registerDate: { type: Date, default: Date.now },
  stock: Number,
});

const producto = mongoose.model("productos", productoSchema);

export default producto;
