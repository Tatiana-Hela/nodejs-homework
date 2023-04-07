const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const addSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Za-z ]+$/)
    .min(2)
    .max(30)
    .required()
    .messages({
      "any.required": `"name" is required`,
      "string.empty": `"name" cannot be empty`,
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": `"email" is required`,
      "string.empty": `"email" cannot be empty`,
    }),
  phone: Joi.string()
    .regex(/^\d{10}$/)
    .length(10)
    .required()
    .messages({
      "any.required": `"phone" is required`,
      "string.empty": `"phone" cannot be empty`,
    }),
  favorite: Joi.boolean(),
});

const statusSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const schemas = {
  addSchema,
  statusSchema,
};

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
