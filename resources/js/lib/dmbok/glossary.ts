import type { GlossaryTerm } from './types';

export const glossary: GlossaryTerm[] = [
    {
        term: 'Data Management',
        definition:
            'Pengembangan, pelaksanaan, dan pengawasan rencana, kebijakan, program, dan praktik yang menghasilkan, mengendalikan, melindungi, dan meningkatkan nilai aset data dan informasi sepanjang siklus hidupnya.',
        areaId: 'data-management',
    },
    {
        term: 'DAMA Wheel',
        definition:
            'Diagram DMBOK yang menempatkan Data Governance di pusat, dikelilingi 10 knowledge area lain yang setara dan saling bergantung.',
        areaId: 'data-management',
    },
    {
        term: 'Environmental Factors Hexagon',
        definition:
            'Tujuh faktor yang membentuk setiap knowledge area: Goals & Principles (pusat), Roles & Responsibilities, Organization & Culture, Activities, Deliverables, Techniques, Tools.',
        areaId: 'data-management',
    },
    {
        term: 'Context Diagram',
        definition:
            'Ringkasan satu halaman per knowledge area: definisi, tujuan, input, aktivitas, deliverable, supplier/participant/consumer, teknik, tools, dan metrik.',
        areaId: 'data-management',
    },
    {
        term: 'Data Lifecycle',
        definition:
            'Tahapan: Plan → Design & Enable → Create/Obtain → Store/Maintain → Use → Enhance → Dispose.',
        areaId: 'data-management',
    },
    {
        term: 'Data Steward',
        definition:
            'Orang yang akuntabel dan bertanggung jawab atas aset data tertentu atas nama organisasi, misalnya untuk definisi, kualitas, dan penggunaan yang benar.',
        areaId: 'data-governance',
    },
    {
        term: 'Data Owner',
        definition:
            'Pihak (biasanya manajemen bisnis) yang memiliki wewenang keputusan atas data dalam domainnya.',
        areaId: 'data-governance',
    },
    {
        term: 'Chief Data Officer (CDO)',
        definition:
            'Eksekutif yang memimpin strategi data, Data Governance, dan program data management organisasi.',
        areaId: 'data-governance',
    },
    {
        term: 'Business Glossary',
        definition:
            'Kumpulan istilah bisnis yang disepakati beserta definisi, sinonim, pemilik, dan aturan penggunaannya.',
        areaId: 'data-governance',
    },
    {
        term: 'Federated Operating Model',
        definition:
            'Model DG dengan pusat yang menetapkan standar, sementara unit bisnis menjalankan governance di domain masing-masing.',
        areaId: 'data-governance',
    },
    {
        term: 'Enterprise Data Model',
        definition:
            'Model data holistik tingkat enterprise yang independen dari implementasi, berisi entitas inti dan relasinya.',
        areaId: 'data-architecture',
    },
    {
        term: 'Zachman Framework',
        definition:
            'Ontologi arsitektur enterprise 6×6: interogatif (What, How, Where, Who, When, Why) × perspektif (Executive hingga Operations).',
        areaId: 'data-architecture',
    },
    {
        term: 'Model Konseptual',
        definition:
            'Model data tingkat tinggi berisi konsep bisnis utama dan relasinya, tanpa detail atribut teknis.',
        areaId: 'data-modeling',
    },
    {
        term: 'Model Logis',
        definition:
            'Model data detail (entitas, atribut, relasi, kunci) yang independen dari teknologi database tertentu.',
        areaId: 'data-modeling',
    },
    {
        term: 'Model Fisik',
        definition:
            'Model data yang dioptimalkan untuk teknologi tertentu: tabel, kolom, tipe data, indeks, partisi.',
        areaId: 'data-modeling',
    },
    {
        term: 'Normalisasi',
        definition:
            'Penerapan aturan bentuk normal (1NF, 2NF, 3NF, BCNF, …) untuk mengurangi redundansi dan anomali data.',
        areaId: 'data-modeling',
    },
    {
        term: 'Surrogate Key',
        definition:
            'Kunci unik buatan sistem (mis. angka berurutan) tanpa makna bisnis, dipakai sebagai primary key.',
        areaId: 'data-modeling',
    },
    {
        term: 'ACID',
        definition:
            'Atomicity, Consistency, Isolation, Durability: properti transaksi yang menjamin keandalan database.',
        areaId: 'data-storage',
    },
    {
        term: 'CAP Theorem',
        definition:
            'Sistem terdistribusi hanya dapat menjamin dua dari tiga: Consistency, Availability, Partition tolerance.',
        areaId: 'data-storage',
    },
    {
        term: 'RPO / RTO',
        definition:
            'Recovery Point Objective (berapa banyak data boleh hilang) dan Recovery Time Objective (berapa lama sistem boleh mati).',
        areaId: 'data-storage',
    },
    {
        term: 'Least Privilege',
        definition:
            'Prinsip bahwa pengguna hanya diberi hak akses minimum yang diperlukan untuk pekerjaannya.',
        areaId: 'data-security',
    },
    {
        term: 'Entitlement',
        definition:
            'Total hak akses (elemen data, perintah, fungsi) yang diberikan kepada seorang pengguna lewat satu keputusan otorisasi.',
        areaId: 'data-security',
    },
    {
        term: 'Data Masking',
        definition:
            'Teknik menyamarkan data sensitif (persistent atau dinamis) sambil mempertahankan format agar tetap bisa dipakai.',
        areaId: 'data-security',
    },
    {
        term: 'ETL',
        definition:
            'Extract, Transform, Load: memindahkan data dari sumber, mentransformasikannya, lalu memuat ke target.',
        areaId: 'data-integration',
    },
    {
        term: 'Change Data Capture',
        definition:
            'Teknik mendeteksi dan menangkap perubahan data di sumber agar hanya delta yang dipindahkan.',
        areaId: 'data-integration',
    },
    {
        term: 'Hub-and-Spoke',
        definition:
            'Model integrasi di mana semua sistem bertukar data lewat satu hub pusat, mengurangi jumlah interface point-to-point.',
        areaId: 'data-integration',
    },
    {
        term: 'Canonical Data Model',
        definition:
            'Model/format pesan bersama yang dipakai semua sistem dalam pertukaran data untuk mengurangi pemetaan.',
        areaId: 'data-integration',
    },
    {
        term: 'Record',
        definition:
            'Dokumen yang menjadi bukti aktivitas atau transaksi dan memiliki kewajiban retensi hukum/bisnis.',
        areaId: 'document-content',
    },
    {
        term: 'Retention Schedule',
        definition:
            'Jadwal yang menetapkan berapa lama setiap jenis rekaman disimpan dan kapan didisposisi.',
        areaId: 'document-content',
    },
    {
        term: 'E-discovery',
        definition:
            'Proses menemukan, mengamankan, dan menyerahkan informasi elektronik untuk keperluan hukum.',
        areaId: 'document-content',
    },
    {
        term: 'Golden Record',
        definition:
            'Versi tunggal, terekonsiliasi, dan paling dipercaya dari sebuah entitas master.',
        areaId: 'reference-master',
    },
    {
        term: 'Reference Data',
        definition:
            'Data untuk mengklasifikasi atau mengkarakterisasi data lain, seperti kode negara, mata uang, dan status.',
        areaId: 'reference-master',
    },
    {
        term: 'Survivorship',
        definition:
            'Aturan untuk menentukan nilai atribut mana yang "bertahan" ketika beberapa record digabung menjadi golden record.',
        areaId: 'reference-master',
    },
    {
        term: 'Star Schema',
        definition:
            'Desain dimensional dengan satu tabel fakta di tengah yang dikelilingi tabel-tabel dimensi.',
        areaId: 'dw-bi',
    },
    {
        term: 'Conformed Dimension',
        definition:
            'Dimensi yang didefinisikan sama dan dipakai bersama oleh banyak tabel fakta/data mart (konsep Kimball).',
        areaId: 'dw-bi',
    },
    {
        term: 'Slowly Changing Dimension Type 2',
        definition:
            'Menyimpan riwayat perubahan atribut dimensi dengan menambah baris baru (biasanya dengan tanggal efektif).',
        areaId: 'dw-bi',
    },
    {
        term: 'Data Lineage',
        definition:
            'Jejak asal data dan transformasi yang dialaminya dari sumber hingga titik konsumsi.',
        areaId: 'metadata',
    },
    {
        term: 'Operational Metadata',
        definition:
            'Metadata tentang pemrosesan dan akses data: log job, jumlah baris, waktu eksekusi, error.',
        areaId: 'metadata',
    },
    {
        term: 'Data Catalog',
        definition:
            'Inventaris aset data yang dapat dicari, memadukan metadata teknis dan bisnis untuk data discovery.',
        areaId: 'metadata',
    },
    {
        term: 'Data Profiling',
        definition:
            'Analisis statistik isi data (pola, null, nilai unik, distribusi) untuk memahami kondisi kualitas.',
        areaId: 'data-quality',
    },
    {
        term: 'Root Cause Analysis',
        definition:
            'Teknik menelusuri penyebab mendasar masalah kualitas data, bukan hanya gejalanya.',
        areaId: 'data-quality',
    },
    {
        term: 'Data Quality SLA',
        definition:
            'Kesepakatan tingkat layanan yang menetapkan ekspektasi kualitas, ambang batas, dan waktu respons terhadap isu.',
        areaId: 'data-quality',
    },
    {
        term: 'Data Lake',
        definition:
            'Lingkungan penyimpanan data mentah dalam berbagai format; tanpa governance bisa menjadi "data swamp".',
        areaId: 'big-data',
    },
    {
        term: 'Schema-on-read',
        definition:
            'Struktur data diterapkan saat dibaca/dianalisis, bukan saat data ditulis.',
        areaId: 'big-data',
    },
    {
        term: 'Privacy by Design',
        definition:
            'Pendekatan yang memasukkan perlindungan privasi sejak awal perancangan sistem dan proses.',
        areaId: 'data-ethics',
    },
    {
        term: 'Re-identification',
        definition:
            'Risiko data yang dianonimkan dapat dikaitkan kembali ke individu dengan menggabungkannya dengan data lain.',
        areaId: 'data-ethics',
    },
    {
        term: 'Capability Maturity Model',
        definition:
            'Kerangka bertingkat (level 0–5) untuk menilai seberapa matang dan terkelola suatu kapabilitas.',
        areaId: 'maturity',
    },
];
