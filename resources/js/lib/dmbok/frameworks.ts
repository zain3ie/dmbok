import type { ActivityType } from './types';

export const activityTypes: Record<
    ActivityType,
    { label: string; description: string; className: string }
> = {
    P: {
        label: 'Planning',
        description:
            'Menetapkan arah strategis & taktis: strategi, kebijakan, rencana.',
        className:
            'bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300',
    },
    D: {
        label: 'Development',
        description:
            'Dirancang dalam SDLC: analisis, desain, build, test, deploy.',
        className:
            'bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300',
    },
    O: {
        label: 'Operational',
        description:
            'Mendukung penggunaan, pemeliharaan, dan peningkatan sistem & proses.',
        className:
            'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300',
    },
    C: {
        label: 'Control',
        description:
            'Memastikan kualitas data dan integritas, ketersediaan, serta keamanan sistem yang mengaksesnya.',
        className:
            'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300',
    },
};

export type HexagonFactor = {
    id: string;
    name: string;
    nameId: string;
    group: 'Inti' | 'People' | 'Process' | 'Technology';
    description: string;
    question: string;
};

/**
 * DAMA Environmental Factors Hexagon: the factors that shape every
 * knowledge area, with Goals & Principles at the center.
 */
export const hexagonFactors: HexagonFactor[] = [
    {
        id: 'goals',
        name: 'Goals & Principles',
        nameId: 'Tujuan & Prinsip',
        group: 'Inti',
        description:
            'Tujuan bisnis dan teknis yang terarah untuk setiap knowledge area, beserta prinsip panduan yang memandu kinerjanya.',
        question: 'Apa yang ingin dicapai, dan prinsip apa yang menuntunnya?',
    },
    {
        id: 'roles',
        name: 'Roles & Responsibilities',
        nameId: 'Peran & Tanggung Jawab',
        group: 'People',
        description:
            'Siapa yang melakukan dan mengawasi aktivitas, serta keterampilan dan kualifikasi yang dibutuhkan.',
        question: 'Siapa melakukan apa, dan siapa yang akuntabel?',
    },
    {
        id: 'organization',
        name: 'Organization & Culture',
        nameId: 'Organisasi & Budaya',
        group: 'People',
        description:
            'Nilai, kepercayaan, dan perilaku organisasi yang memengaruhi keberhasilan, termasuk change management.',
        question: 'Apakah budaya organisasi mendukung data sebagai aset?',
    },
    {
        id: 'activities',
        name: 'Activities',
        nameId: 'Aktivitas',
        group: 'Process',
        description:
            'Aksi yang dilakukan untuk mencapai tujuan, dikelompokkan sebagai Planning, Development, Operational, dan Control.',
        question: 'Langkah apa yang harus dijalankan?',
    },
    {
        id: 'deliverables',
        name: 'Deliverables',
        nameId: 'Deliverable',
        group: 'Process',
        description:
            'Hasil nyata (artefak, data, dokumen) dari aktivitas dalam knowledge area.',
        question: 'Apa yang dihasilkan?',
    },
    {
        id: 'techniques',
        name: 'Techniques',
        nameId: 'Teknik',
        group: 'Technology',
        description:
            'Metode dan prosedur untuk menjalankan aktivitas dan menghasilkan deliverable.',
        question: 'Bagaimana cara melakukannya dengan baik?',
    },
    {
        id: 'tools',
        name: 'Tools',
        nameId: 'Tools',
        group: 'Technology',
        description:
            'Kategori teknologi pendukung (perangkat lunak) untuk setiap knowledge area.',
        question: 'Teknologi apa yang membantu?',
    },
];

export const lifecycleStages = [
    {
        name: 'Plan',
        nameId: 'Rencanakan',
        description:
            'Merencanakan kebutuhan data, arsitektur, dan cara data akan dikelola.',
    },
    {
        name: 'Design & Enable',
        nameId: 'Rancang & Siapkan',
        description:
            'Merancang struktur, model, kebijakan, dan teknologi yang memungkinkan data dikelola.',
    },
    {
        name: 'Create / Obtain',
        nameId: 'Buat / Peroleh',
        description:
            'Data dibuat dalam proses bisnis atau diperoleh dari pihak lain.',
    },
    {
        name: 'Store / Maintain',
        nameId: 'Simpan / Pelihara',
        description:
            'Data disimpan, dilindungi, dan dipelihara agar tetap tersedia dan benar.',
    },
    {
        name: 'Use',
        nameId: 'Gunakan',
        description:
            'Data dipakai untuk operasi, pelaporan, analitik, dan keputusan.',
    },
    {
        name: 'Enhance',
        nameId: 'Tingkatkan',
        description:
            'Data diperkaya, dibersihkan, atau diintegrasikan sehingga nilainya bertambah.',
    },
    {
        name: 'Dispose',
        nameId: 'Musnahkan',
        description:
            'Data diarsipkan atau dimusnahkan sesuai kebijakan retensi.',
    },
];

export const principleGroups = [
    {
        title: 'Data itu bernilai',
        items: [
            'Data adalah aset dengan sifat unik (tidak habis dipakai, mudah disalin).',
            'Nilai data dapat dan sebaiknya dinyatakan dalam istilah ekonomi.',
        ],
    },
    {
        title: 'Kebutuhan DM adalah kebutuhan bisnis',
        items: [
            'Mengelola data berarti mengelola kualitas data.',
            'Dibutuhkan metadata untuk mengelola data.',
            'Dibutuhkan perencanaan untuk mengelola data.',
            'Kebutuhan data management harus mendorong keputusan TI.',
        ],
    },
    {
        title: 'DM bergantung pada beragam keahlian',
        items: [
            'Data management bersifat lintas fungsi.',
            'Data management membutuhkan perspektif enterprise.',
            'Data management harus memperhitungkan beragam perspektif.',
        ],
    },
    {
        title: 'DM adalah manajemen siklus hidup',
        items: [
            'Tiap jenis data punya karakteristik siklus hidup yang berbeda.',
            'Mengelola data termasuk mengelola risikonya.',
        ],
    },
    {
        title: 'Kepemimpinan',
        items: [
            'Data management yang efektif membutuhkan komitmen kepemimpinan.',
        ],
    },
];

export const qualityDimensions = [
    {
        name: 'Accuracy',
        nameId: 'Akurasi',
        description:
            'Sejauh mana data merepresentasikan entitas dunia nyata dengan benar.',
        example: 'Alamat pelanggan sesuai dengan alamat sebenarnya.',
    },
    {
        name: 'Completeness',
        nameId: 'Kelengkapan',
        description: 'Apakah semua data yang dibutuhkan tersedia.',
        example: 'Semua work order punya kode kegagalan.',
    },
    {
        name: 'Consistency',
        nameId: 'Konsistensi',
        description:
            'Nilai data sama di seluruh dataset/sistem, dan selaras antar atribut.',
        example: 'Status aset di ERP sama dengan di sistem maintenance.',
    },
    {
        name: 'Integrity',
        nameId: 'Integritas',
        description:
            'Data mematuhi aturan relasi dan referensial (tidak ada "yatim piatu").',
        example: 'Setiap transaksi merujuk ke ID pelanggan yang ada.',
    },
    {
        name: 'Reasonability',
        nameId: 'Kewajaran',
        description: 'Pola data sesuai ekspektasi yang wajar.',
        example: 'Penjualan harian tidak melonjak 100× tanpa alasan.',
    },
    {
        name: 'Timeliness',
        nameId: 'Ketepatan waktu',
        description:
            'Data tersedia saat dibutuhkan; jeda antara kejadian dan ketersediaan data.',
        example: 'Data produksi kemarin sudah tersedia pukul 07.00.',
    },
    {
        name: 'Currency',
        nameId: 'Kemutakhiran',
        description:
            'Sejauh mana data masih terkini terhadap dunia nyata yang direpresentasikannya.',
        example: 'Nomor telepon pemasok masih yang berlaku saat ini.',
    },
    {
        name: 'Uniqueness',
        nameId: 'Keunikan',
        description: 'Tidak ada entitas yang tercatat lebih dari sekali.',
        example: 'Satu pemasok hanya punya satu record master.',
    },
    {
        name: 'Validity',
        nameId: 'Validitas',
        description:
            'Nilai data sesuai domain, format, dan aturan yang ditetapkan.',
        example: 'Kode negara mengikuti ISO 3166; tanggal berformat benar.',
    },
];

export const maturityLevels = [
    {
        level: 0,
        name: 'No Capability',
        nameId: 'Tanpa kapabilitas',
        description:
            'Tidak ada praktik data management yang terorganisasi atau proses formal.',
    },
    {
        level: 1,
        name: 'Initial / Ad Hoc',
        nameId: 'Awal / Ad hoc',
        description:
            'DM bersifat ad hoc dan bergantung pada individu (heroik). Tools terbatas, governance minim.',
    },
    {
        level: 2,
        name: 'Repeatable',
        nameId: 'Dapat diulang',
        description:
            'Muncul tools dan peran yang konsisten untuk mendukung eksekusi proses, mulai ada akuntabilitas.',
    },
    {
        level: 3,
        name: 'Defined',
        nameId: 'Terdefinisi',
        description:
            'Kapabilitas data muncul: proses terstandar diterapkan di seluruh organisasi, ada kontrol dan kebijakan.',
    },
    {
        level: 4,
        name: 'Managed',
        nameId: 'Terkelola',
        description:
            'Pengetahuan institusional memungkinkan memprediksi hasil dan mengelola risiko; kinerja diukur secara kuantitatif.',
    },
    {
        level: 5,
        name: 'Optimized',
        nameId: 'Teroptimasi',
        description:
            'Praktik sangat dapat diprediksi; fokus pada perbaikan berkelanjutan dan otomasi.',
    },
];

export const contextDiagramSections = [
    {
        id: 'definition',
        label: 'Definition',
        description: 'Deskripsi singkat knowledge area.',
    },
    {
        id: 'goals',
        label: 'Goals',
        description: 'Tujuan dari knowledge area.',
    },
    {
        id: 'activities',
        label: 'Activities',
        description:
            'Aksi untuk mencapai tujuan, ditandai (P), (D), (O), atau (C).',
    },
    {
        id: 'inputs',
        label: 'Inputs',
        description: 'Hal yang dibutuhkan untuk memulai aktivitas.',
    },
    {
        id: 'deliverables',
        label: 'Deliverables',
        description: 'Keluaran dari aktivitas.',
    },
    {
        id: 'roles',
        label: 'Suppliers · Participants · Consumers',
        description:
            'Pihak yang memasok input, menjalankan aktivitas, dan memakai hasilnya.',
    },
    {
        id: 'techniques',
        label: 'Techniques',
        description: 'Metode dan prosedur untuk menjalankan aktivitas.',
    },
    {
        id: 'tools',
        label: 'Tools',
        description: 'Teknologi pendukung.',
    },
    {
        id: 'metrics',
        label: 'Metrics',
        description: 'Ukuran keberhasilan atau kemajuan.',
    },
];
