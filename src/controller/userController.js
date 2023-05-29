const create = (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: "error" });
    }
  
    res.json({ name, email });
  };
  
  module.exports = { create };
  