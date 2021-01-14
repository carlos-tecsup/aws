const { Schema, model } = require("mongoose");

const personaSchema = Schema({
  nombre: {
    type: String,
    default: "",
  },
  apellido: {
    type: String,
    default: "",
  },
  monto: {
    type: Number,
    default: 0,
  },
  isNuevo: {
    type: Boolean,
    default: false,
  },
  estado: { type: String },
  fecha_matricula: {
    type: Date,
    default: Date.now,
  },
});
personaSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("Persona", personaSchema);
