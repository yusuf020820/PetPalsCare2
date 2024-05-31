const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
app.use(cors()); // Ini akan mengizinkan semua permintaan CORS
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (results.length > 0) {
      // Mengembalikan data user
      const user = results[0];
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

app.post("/register", (req, res) => {
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
});

app.post("/register-dokter", (req, res) => {
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
});

// Endpoint untuk mendapatkan data dokter
app.get("/api/dokter", (req, res) => {
  const query = "SELECT nama, spesialis, pengalaman FROM dokter";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }

    res.status(200).json({ dokter: results });
  });
});

app.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});
