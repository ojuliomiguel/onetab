function status(req, res) {
  res.status(200).json({ chave: "Everything ok!" });
}

export default status;
