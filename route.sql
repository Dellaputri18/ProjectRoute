-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Des 2024 pada 15.25
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `route`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun_siswa`
--

CREATE TABLE `akun_siswa` (
  `id_siswa` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `akun_siswa`
--

INSERT INTO `akun_siswa` (`id_siswa`, `nama`, `email`, `password`) VALUES
(1, 'Niswa Alfiyya', 'niswa@gmail.com', 'muimui123'),
(2, 'Dellar Rachmatika', 'dellar@gmail.com', '123'),
(3, 'Della Putri', 'dellap@gmail.com', 'dellap'),
(4, 'Arianti Sagita', 'arianti@gmail.com', 'gitagit'),
(5, 'Wicheriani Galuh', 'cece@gmail.com', 'cecece'),
(6, 'Arya Mahendra', 'arya.mahendra@example.com', 'pass1234'),
(7, 'Raya Salsabila', 'raya.salsabila@example.com', 'securepass'),
(8, 'Hana Putri', 'hana.putri@example.com', 'mypass789'),
(9, 'Raka Pradipta', 'raka.pradipta@example.com', 'qwerty123'),
(10, 'Ziva Anggraini', 'ziva.anggraini@example.com', 'password99'),
(11, 'Daffa Ramadhan', 'daffa.ramadhan@example.com', 'letmein01'),
(12, 'Ayu Lestari', 'ayu.lestari@example.com', 'pass5678'),
(13, 'Radit Wirawan', 'radit.wirawan@example.com', 'strongpass'),
(14, 'Vira Maharani', 'vira.maharani@example.com', 'welcome12'),
(15, 'Aldo Wiratama', 'aldo.wiratama@example.com', 'secret456'),
(16, 'Tania Safira', 'tania.safira@example.com', 'entry123'),
(17, 'Evan Saputra', 'evan.saputra@example.com', 'keycode78'),
(18, 'Nara Prasetya', 'nara.prasetya@example.com', 'p@ssw0rd'),
(19, 'Zara Rahayu', 'zara.rahayu@example.com', 'secure987'),
(20, 'Jovan Fadillah', 'jovan.fadillah@example.com', 'letmein12'),
(21, 'Nabila Syifa', 'nabila.syifa@example.com', 'openpass'),
(22, 'Rizky Setiawan', 'rizky.setiawan@example.com', 'myentry56'),
(23, 'Laila Khairunnisa', 'laila.khairunnisa@example.com', 'quickpass'),
(24, 'Farrel Permadi', 'farrel.permadi@example.com', 'mypasscode'),
(25, 'Nisa Amalia', 'nisa.amalia@example.com', 'opensesame'),
(26, 'coba', 'coba@gmail.com', '123'),
(27, 'apa', 'apa@gmail.com', '123'),
(28, 'jia', 'jia@gmail.com', '123'),
(54, 'hana', 'dul@gmail.com', 'set'),
(55, 'hana', 'dul@gmail.com', 'set');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hasil_asesmen`
--

CREATE TABLE `hasil_asesmen` (
  `id_asesmen` int(11) NOT NULL,
  `hasil_asesmen` int(11) NOT NULL,
  `soal_asesmen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `hasil_belajar`
--

CREATE TABLE `hasil_belajar` (
  `id_hasilBelajar` int(11) NOT NULL,
  `id_materi` int(11) NOT NULL,
  `id_asesmen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `loading_page`
--

CREATE TABLE `loading_page` (
  `id_loading` int(11) NOT NULL,
  `loadingPage` text DEFAULT NULL,
  `gambar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `loading_page`
--

INSERT INTO `loading_page` (`id_loading`, `loadingPage`, `gambar`) VALUES
(1, 'Tahukah kamu bahwa belajar tentang pohon bisa membantu kita memahami struktur yang ada di sekitar kita, seperti organisasi atau keluarga? Menurutmu, bagaimana struktur yang baik bisa membantu organisasi berjalan lebih efektif?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(2, 'Tahukah kamu bahwa terkadang belajar hal baru seperti struktur data pohon bisa terasa sulit? Apa yang biasanya kamu lakukan jika kamu merasa kesulitan memahaminya?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(3, 'Tahukah kamu bahwa setiap simpul dalam pohon memiliki peran penting, baik sebagai akar, cabang, atau daun? Menurutmu, bagaimana kita bisa belajar tentang tanggung jawab dan kerjasama dari konsep ini?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(4, 'Tahukah kamu bahwa setiap pohon dimulai dari akar yang kuat? Bagaimana menurutmu hal ini bisa mengajarkan kita tentang pentingnya pondasi yang baik dalam kehidupan, seperti pendidikan atau hubungan?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(5, 'Tahukah kamu bahwa beberapa orang lebih suka bekerja secara individu, sementara yang lain lebih suka bekerja dalam tim? Bagaimana menurutmu struktur pohon bisa menggambarkan pentingnya peran setiap individu dalam sebuah tim?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(6, 'Tahukah kamu bahwa struktur data pohon sering digunakan untuk merepresentasikan hubungan keluarga, seperti silsilah keluarga? Bagaimana cara kita menyusun pohon keluarga dengan menggunakan konsep akar, simpul, dan daun?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(7, 'Tahukah kamu bahwa dalam sebuah pohon biner, setiap simpul hanya bisa memiliki dua anak? Bisakah kamu memberi contoh situasi di dunia nyata yang bisa direpresentasikan dengan pohon biner?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(8, 'Tahukah kamu bahwa akar dari sebuah pohon adalah simpul yang tidak memiliki orang tua? Mengapa kita menyebutnya “akar” dalam konteks pohon, dan apa peran akar ini dalam struktur pohon?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(9, 'Tahukah kamu bahwa dengan menambahkan level pada sebuah pohon, jumlah simpul yang mungkin bisa bertambah secara eksponensial? Bisakah kamu menghitung jumlah maksimum simpul pada pohon biner dengan 4 level?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq'),
(10, 'Tahukah kamu bahwa struktur data pohon digunakan dalam sistem pencarian data, seperti ketika kamu mencari file di komputer? Bagaimana menurutmu, kenapa struktur ini lebih efisien dibandingkan struktur linear seperti list?', 'https://drive.google.com/uc?export=view&id=1izYfR-hgnE5rBwO2CVUWKFPv0Y_b5Ubq');

-- --------------------------------------------------------

--
-- Struktur dari tabel `materi_siswa`
--

CREATE TABLE `materi_siswa` (
  `id_materi` int(11) NOT NULL,
  `hasil_materi` int(11) NOT NULL,
  `id_siswa` int(11) DEFAULT NULL,
  `akses_count` int(11) NOT NULL,
  `id_bahan_ajar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `materi_siswa`
--

INSERT INTO `materi_siswa` (`id_materi`, `hasil_materi`, `id_siswa`, `akses_count`, `id_bahan_ajar`) VALUES
(1, 0, 51, 0, 1),
(2, 0, 51, 0, 2),
(3, 0, 51, 0, 3),
(4, 0, 51, 0, 4),
(5, 0, 52, 0, 1),
(6, 0, 52, 0, 2),
(7, 0, 52, 0, 3),
(8, 0, 52, 0, 4),
(9, 0, 53, 0, 1),
(10, 0, 53, 0, 2),
(11, 0, 53, 0, 3),
(12, 0, 53, 0, 4),
(13, 0, 54, 0, 1),
(14, 0, 54, 0, 2),
(15, 0, 54, 0, 3),
(16, 0, 54, 0, 4),
(17, 0, 55, 0, 1),
(18, 0, 55, 0, 2),
(19, 0, 55, 0, 3),
(20, 0, 55, 0, 4),
(21, 0, 56, 0, 1),
(22, 0, 56, 0, 2),
(23, 0, 56, 0, 3),
(24, 0, 56, 0, 4),
(25, 0, 57, 0, 1),
(26, 0, 57, 0, 2),
(27, 0, 57, 0, 3),
(28, 0, 57, 0, 4),
(29, 0, 58, 0, 1),
(30, 0, 58, 0, 2),
(31, 0, 58, 0, 3),
(32, 0, 58, 0, 4),
(33, 0, 59, 0, 1),
(34, 0, 59, 0, 2),
(35, 0, 59, 0, 3),
(36, 0, 59, 0, 4),
(37, 0, 60, 0, 1),
(38, 0, 60, 0, 2),
(39, 0, 60, 0, 3),
(40, 0, 60, 0, 4),
(41, 0, 61, 0, 1),
(42, 0, 61, 0, 2),
(43, 0, 61, 0, 3),
(44, 0, 61, 0, 4),
(45, 0, 62, 0, 1),
(46, 0, 62, 0, 2),
(47, 0, 62, 0, 3),
(48, 0, 62, 0, 4),
(49, 0, 63, 0, 1),
(50, 0, 63, 0, 2),
(51, 0, 63, 0, 3),
(52, 0, 63, 0, 4),
(53, 0, 64, 0, 1),
(54, 0, 64, 0, 2),
(55, 0, 64, 0, 3),
(56, 0, 64, 0, 4),
(57, 0, 65, 0, 1),
(58, 0, 65, 0, 2),
(59, 0, 65, 0, 3),
(60, 0, 65, 0, 4),
(61, 0, 66, 0, 1),
(62, 0, 66, 0, 2),
(63, 0, 66, 0, 3),
(64, 0, 66, 0, 4),
(65, 0, 67, 0, 1),
(66, 0, 67, 0, 2),
(67, 0, 67, 0, 3),
(68, 0, 67, 0, 4),
(69, 0, 68, 0, 1),
(70, 0, 68, 0, 2),
(71, 0, 68, 0, 3),
(72, 0, 68, 0, 4),
(73, 0, 69, 0, 1),
(74, 0, 69, 0, 2),
(75, 0, 69, 0, 3),
(76, 0, 69, 0, 4),
(77, 0, 70, 0, 1),
(78, 0, 70, 0, 2),
(79, 0, 70, 0, 3),
(80, 0, 70, 0, 4),
(81, 0, 71, 0, 1),
(82, 0, 71, 0, 2),
(83, 0, 71, 0, 3),
(84, 0, 71, 0, 4),
(85, 0, 72, 0, 1),
(86, 0, 72, 0, 2),
(87, 0, 72, 0, 3),
(88, 0, 72, 0, 4),
(89, 0, 73, 0, 1),
(90, 0, 73, 0, 2),
(91, 0, 73, 0, 3),
(92, 0, 73, 0, 4),
(93, 0, 74, 0, 1),
(94, 0, 74, 0, 2),
(95, 0, 74, 0, 3),
(96, 0, 74, 0, 4),
(97, 0, 75, 0, 1),
(98, 0, 75, 0, 2),
(99, 0, 75, 0, 3),
(100, 0, 75, 0, 4);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun_siswa`
--
ALTER TABLE `akun_siswa`
  ADD PRIMARY KEY (`id_siswa`);

--
-- Indeks untuk tabel `loading_page`
--
ALTER TABLE `loading_page`
  ADD PRIMARY KEY (`id_loading`);

--
-- Indeks untuk tabel `materi_siswa`
--
ALTER TABLE `materi_siswa`
  ADD PRIMARY KEY (`id_materi`),
  ADD KEY `fk_siswa_materi` (`id_siswa`),
  ADD KEY `fk_bahan_ajar` (`id_bahan_ajar`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akun_siswa`
--
ALTER TABLE `akun_siswa`
  MODIFY `id_siswa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `loading_page`
--
ALTER TABLE `loading_page`
  MODIFY `id_loading` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `materi_siswa`
--
ALTER TABLE `materi_siswa`
  MODIFY `id_materi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
