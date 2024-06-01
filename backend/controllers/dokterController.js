// controllers/dokterController.js

const db = require("../database/connection");

exports.login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM dokter WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }
    if (results.length > 0) {
      const dokter = results[0];
      res.status(200).json({ message: "Login successful", dokter });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
};

exports.register = (req, res) => {
  const {
    nama,
    no_hp,
    alamat_praktek,
    email,
    password,
    gender,
    usia,
    lulusan,
    spesialis,
    biaya,
    pengalaman,
  } = req.body;
  const query =
    "INSERT INTO dokter (nama, no_hp, alamat, email, password, gender, usia, lulusan, spesialis, biaya, pengalaman) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [
      nama,
      no_hp,
      alamat_praktek,
      email,
      password,
      gender,
      usia,
      lulusan,
      spesialis,
      biaya,
      pengalaman,
    ],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }
      res.status(200).json({ message: "Dokter registration successful" });
    }
  );
};
