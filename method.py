# Daftar rules atau aturan diagnosis
rules = [
    {
        "if": set([
            "Nyeri Dada",
            "Sesak Napas",
            "Lemas",
            "Keringat Dingin"
        ]),
        "then": "Jantung Koroner"
    },
    {
        "if": set([
            "Nyeri Dada",
            "Sesak Napas",
            "Kaki Bengkak",
            "Lemas",
            "Jantung Berdenyut Kencang",
            "Batuk Batuk"
        ]),
        "then": "Gagal Jantung"
    },
    {
        "if": set([
            "Nyeri Dada",
            "Sesak Napas",
            "Lelah dengan Aktifitas Ringan",
            "Detak Jantung tidak Teratur",
            "Pusing/Pingsan Mendadak",
            "Jantung Berdenyut Kencang"
        ]),
        "then": "Aritmia"
    },
    {
        "if": set([
            "Nyeri Dada",
            "Sesak Napas",
            "Detak Jantung tidak Teratur",
            "Jantung Berdenyut Kencang",
            "Pusing/Pingsan Mendadak"
        ]),
        "then": "Kardiomiopati"
    }
]

# Fungsi untuk memberikan diagnosis berdasarkan input gejala
def diagnose(input_gejala):
    # Jika tidak ada gejala yang dipilih
    if not input_gejala:
        return "Tidak ada gejala yang dipilih. Silakan pilih gejala untuk mendapatkan diagnosis."
    
    input_set = set(input_gejala)  # Konversi gejala yang dipilih menjadi set
    
    # Debug info
    print("Input gejala untuk diagnosis:", input_gejala)
    print("Input set:", input_set)
    
    # Periksa apakah ada rule yang cocok dengan gejala yang dipilih
    matching_diagnoses = []
    
    for i, rule in enumerate(rules):
        # Debug info
        print(f"Rule {i+1}: {rule['then']}")
        print(f"Rule symptoms: {rule['if']}")
        
        # Hitung berapa banyak gejala dari rule yang cocok dengan input
        matching_symptoms = rule["if"].intersection(input_set)
        print(f"Matching symptoms: {matching_symptoms}")
        
        # Hitung jumlah total gejala yang ada dalam rule
        rule_symptoms_count = len(rule["if"])
        
        # Hitung jumlah gejala yang cocok
        matching_count = len(matching_symptoms)
        
        # Hitung persentase kecocokan (syarat: rule memiliki gejala)
        if rule_symptoms_count > 0:
            match_percentage = (matching_count / rule_symptoms_count) * 100
            print(f"Match percentage: {match_percentage:.1f}%")
            
            # Tambahkan ke daftar diagnosis jika kecocokan cukup tinggi (>=60%)
            # Dan setidaknya ada 2 gejala yang cocok
            if match_percentage >= 60 and matching_count >= 2:
                matching_diagnoses.append({
                    "diagnosis": rule["then"],
                    "percentage": match_percentage,
                    "matching_count": matching_count,
                    "rule_count": rule_symptoms_count
                })
    
    # Urutkan berdasarkan:
    # 1. Persentase kecocokan (tinggi ke rendah)
    # 2. Jika persentase sama, jumlah gejala yang cocok (tinggi ke rendah)
    matching_diagnoses.sort(key=lambda x: (x["percentage"], x["matching_count"]), reverse=True)
    
    print("Matching diagnoses:", matching_diagnoses)
    
    if matching_diagnoses:
        top_match = matching_diagnoses[0]
        result = f"Kemungkinan diagnosis: {top_match['diagnosis']} "
        result += f"(Kecocokan: {top_match['percentage']:.1f}%, "
        result += f"{top_match['matching_count']} dari {top_match['rule_count']} gejala)"
        
        # Tambahkan diagnosa lain jika ada
        if len(matching_diagnoses) > 1:
            result += "\n\nDiagnosis alternatif yang mungkin:\n"
            for i, diagnosis in enumerate(matching_diagnoses[1:3]):  # Tampilkan maks 2 alternatif
                result += f"{i+1}. {diagnosis['diagnosis']} "
                result += f"(Kecocokan: {diagnosis['percentage']:.1f}%, "
                result += f"{diagnosis['matching_count']} dari {diagnosis['rule_count']} gejala)\n"
        
        result += "\n\nCatatan: Hasil ini hanya prediksi awal. Konsultasikan dengan dokter untuk diagnosis yang akurat."
        
        return result
    else:
        return "Tidak dapat menentukan diagnosis spesifik dari gejala yang dipilih. Silakan konsultasikan dengan dokter."