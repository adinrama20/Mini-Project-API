# Description

### Method POST
- Path login => /api/users/login
- Path register => /api/users/register
- Menambahkan buku ke aplikasi => /api/books
- Menambahkan buku ke cart => /api/cart
- Menyimpan isi cart ke database (simpan ke tabel peminjaman) => /api/borrow

### Method GET
- Menampilkan informasi user berdasarkan id => /api/users/{id}
- Mendapatkan semua data buku => /api/books
- Mencari buku berdasarkan keyword => /api/books/search?keyword={nama_keyoword_yang_dicari}
- Menampilkan cart => /api/cart/{id_user}

### Method PUT
- Melakukan edit data user berdasarkan id => /api/users/{id}

### Method DELETE
- Menghapus buku dari cart => /api/cart/{id_user}/{id_buku}
