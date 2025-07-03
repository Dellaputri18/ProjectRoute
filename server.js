const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost', // Ganti dengan host MySQL kamu
  user: 'root', // Ganti dengan user MySQL kamu
  password: '', // Ganti dengan password MySQL kamu
  database: 'route', // Ganti dengan nama database kamu
});

// Connect ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Endpoint untuk register
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Pastikan data yang diperlukan ada
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Semua kolom harus diisi' });
  }

  // Query untuk memeriksa apakah email sudah terdaftar
  const checkQuery = 'SELECT * FROM akun_siswa WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error('Error executing check query:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Email sudah terdaftar' });
    }

    // Query untuk memasukkan data baru ke dalam database
    const insertQuery = 'INSERT INTO akun_siswa (nama, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [name, email, password], (err, results) => {
      if (err) {
        console.error('Error executing insert query:', err);
        return res.status(500).json({ success: false, message: 'Database error' });
      }

      // Registrasi berhasil
      res.status(201).json({ success: true, message: 'Registrasi berhasil' });
    });
  });
});


// Endpoint untuk login
app.post('/login', (req, res) => {
  const { emailOrPhone, password } = req.body;

  // Query untuk memeriksa pengguna berdasarkan email atau id_siswa
  const query =
    'SELECT * FROM akun_siswa WHERE (email = ? OR id_siswa = ?) AND password = ?';
  db.query(query, [emailOrPhone, emailOrPhone, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Database error' });
    } else if (results.length > 0) {
      // Login berhasil
      res.json({ success: true, user: results[0] });
    } else {
      // Login gagal
      res.status(401).json({ success: false, message: 'Login gagal' });
    }
  });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});