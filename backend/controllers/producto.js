import producto from "../models/producto.js";

const registerProducto = async (req, res) => {
  if (!req.body.name || !req.body.precio || !req.body.stock)
    return res.status(400).send("Incomplete data");

  const existingProducto = await producto.findOne({ name: req.body.name });
  if (existingProducto)
    return res.status(400).send("The producto already exist");

  const productoSchema = new producto({
    name: req.body.name,
    precio: req.body.precio,
    stock: req.body.stock,
  });

  const result = await productoSchema.save();
  if (!result) return res.status(400).send("Failed to register producto");
  return res.status(200).send({ result });
};

export default { registerProducto };
