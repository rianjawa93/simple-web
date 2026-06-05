# Simple Web

Halaman web statis sederhana dan modern, siap di-deploy ke GitHub Pages.

## Fitur

- Desain modern dan responsif
- Dark mode / light mode
- Tanpa dependency — HTML, CSS, dan JavaScript murni
- Siap untuk GitHub Pages

## Cara Menjalankan

Buka `index.html` langsung di browser, atau gunakan live server:

```bash
# Dengan Python
python -m http.server 8000

# Dengan Node.js (npx)
npx serve .
```

Lalu buka `http://localhost:8000`

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misalnya `simple-web`)
2. Push kode ini ke repository:

```bash
git init
git add .
git commit -m "Initial commit: simple web landing page"
git branch -M main
git remote add origin https://github.com/rianjawa93/simple-web.git
git push -u origin main
```

3. Di GitHub, buka **Settings → Pages**
4. Pilih branch `main` dan folder `/ (root)`
5. Simpan — situs akan live di `https://rianjawa93.github.io/simple-web/`

## Struktur

```
simple-web/
├── index.html    # Halaman utama
├── styles.css    # Styling
├── script.js     # Interaktivitas
└── README.md     # Dokumentasi
```

## Lisensi

MIT
