const db = require("../database/connection");

exports.login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length > 0) {
      const user = results[0];
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
};

exports.register = (req, res) => {
  const { nama, no_hp, email, password, gender, usia, alamat } = req.body;
  const query =
    "INSERT INTO user (nama, no_hp, email, password, gender, usia, alamat) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [nama, no_hp, email, password, gender, usia, alamat],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(200).json({ message: "Registration successful" });
    }
  );
};
