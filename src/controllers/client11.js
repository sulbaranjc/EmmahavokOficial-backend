const ClientCtrl = {};

const Client = require("../models/client");

ClientCtrl.getClient = async (req, res) => {
  const Client = await Client.find();
  res.json(users);
};

ClientCtrl.createClient = async (req, res) => {
  const client  = req.body;
  const newClient = new Client( client );
  await newClient.save();
  res.json("Client Created");
};




ClientCtrl.deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.send("Client deleted");
};

module.exports = ClientCtrl;
