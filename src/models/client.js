const { Schema, model } = require("mongoose");
const clientSchema = new Schema(
  {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    question: {
      type: String
    },
    Check_it: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Client", clientSchema);
