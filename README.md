# peanut2butter9.github.io

Website portofolio Moh Hasbi Alfarizi: satu halaman HTML biasa, tanpa build step. Setelah repo ini di-push ke GitHub dengan nama `peanut2butter9.github.io`, GitHub Pages menayangkannya di https://peanut2butter9.github.io.

## Isi folder

| File | Fungsinya |
| --- | --- |
| `index.html` | Semua isi teks website (profil, pengalaman, proyek, dll.) |
| `assets/css/style.css` | Tampilan: warna, huruf, tata letak. Warna utama ada di `--accent` paling atas |
| `assets/img/profile.jpg` | Foto profil (tegak 4:5, 800×1000) |
| `assets/js/theme.js` | Tombol mode gelap/terang di pojok kanan atas |
| `.nojekyll` | Supaya GitHub Pages menayangkan file apa adanya |

## Cara mengubah isi

1. Buka `index.html`, cari bagian yang mau diubah. Tiap bagian diberi penanda seperti `<!-- ============ PROJECTS ============ -->`.
2. Untuk menambah proyek, salin satu blok `<article class="project"> ... </article>`, tempel di bawahnya, lalu ganti teksnya.
3. Untuk mengganti foto, timpa `assets/img/profile.jpg` dengan foto tegak (4:5) baru dengan nama yang sama.

## Melihat hasilnya di laptop

```bash
cd ~/Projects/peanut2butter9.github.io
python3 -m http.server 8000
```

Lalu buka http://localhost:8000 di browser. Tekan `Ctrl+C` di Terminal untuk berhenti.
