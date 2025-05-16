from flask import Flask, render_template, request, redirect, url_for, session
import method  # Import file method.py yang berisi fungsi diagnose

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Digunakan untuk enkripsi session
app.config['SESSION_TYPE'] = 'filesystem'  # Menyimpan session di filesystem

# Daftar gejala
gejala_list = [
    "Nyeri Dada", "Sesak Napas", "Lemas", "Keringat Dingin", "Kaki Bengkak",
    "Jantung Berdenyut Kencang", "Batuk Batuk", "Lelah dengan Aktifitas Ringan",
    "Detak Jantung tidak Teratur", "Pusing/Pingsan Mendadak"
]

@app.route('/about')
def about():
    return render_template('aboutus.html') 

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/diagnosis', methods=['GET', 'POST'])
def diagnosis():
    # Tentukan jumlah gejala yang ditampilkan per halaman
    gejala_per_page = 3
    
    # Inisialisasi session gejala jika belum ada
    if 'gejala' not in session:
        session['gejala'] = []
    
    # Debug: print session gejala
    print("Session gejala:", session.get('gejala', []))
    
    # Reset gejala saat memulai diagnosa baru (dengan metode GET tanpa parameter page)
    if request.method == 'GET' and 'page' not in request.args:
        session['gejala'] = []
        session.modified = True
    
    # Ambil halaman saat ini dari parameter query, default ke halaman 1
    page = request.args.get('page', 1, type=int)
    
    # Hitung index gejala yang akan ditampilkan pada halaman saat ini
    start = (page - 1) * gejala_per_page
    end = start + gejala_per_page
    current_gejala = gejala_list[start:end]
    
    # Menyimpan gejala yang dipilih di session
    if request.method == 'POST':
        # Update gejala yang dipilih pada halaman saat ini
        for gejala in current_gejala:
            if request.form.get(gejala) == 'on':
                if gejala not in session['gejala']:
                    session['gejala'].append(gejala)
            else:
                # Hapus gejala dari session jika unchecked
                if gejala in session['gejala']:
                    session['gejala'].remove(gejala)
        
        # Simpan perubahan di session
        session.modified = True
        
        # Cek action dari tombol yang ditekan
        action = request.form.get('action')
        
        # Jika tombol Diagnosa ditekan, arahkan ke hasil
        if action == 'diagnose':
            return redirect(url_for('hasil'))
        
        # Jika tombol Next ditekan, pindah ke halaman berikutnya
        elif action == 'next':
            return redirect(url_for('diagnosis', page=page + 1))
            
        # Jika tombol Previous ditekan, kembali ke halaman sebelumnya
        elif action == 'previous':
            return redirect(url_for('diagnosis', page=page - 1))
    
    # Hitung total halaman
    total_pages = (len(gejala_list) // gejala_per_page) + (1 if len(gejala_list) % gejala_per_page != 0 else 0)
    
    return render_template('diagnosa.html', 
                          gejala_list=current_gejala, 
                          page=page, 
                          total_pages=total_pages,
                          session=session)  # Pass session to template

@app.route('/hasil')
def hasil():
    if 'gejala' not in session or len(session['gejala']) == 0:
        return redirect(url_for('diagnosis'))  # Jika tidak ada gejala yang dipilih, kembali ke halaman pertama
    
    # Debug: print session gejala sebelum diagnosa
    print("Gejala untuk diagnosa:", session['gejala']) 
    
    # Proses hasil diagnosis berdasarkan gejala yang dipilih
    hasil = method.diagnose(session['gejala'])
    
    # Tampilkan hasil diagnosa
    return render_template('hasil_diagnosa.html', hasil=hasil)

if __name__ == '__main__':
    app.run(debug=True)