import { findArea } from './knowledge-areas';

export const dataManagementOverviewId = 'data-management';

/**
 * DAMA-DMBOK2 Chapter 1 (Data Management): the introductory chapter that
 * frames every knowledge area. It is not a slice of the DAMA Wheel.
 */
export const dataManagementOverview = {
    chapter: 1,
    name: 'Data Management',
    nameId: 'Pengantar Data Management',
    definition:
        'Pengembangan, pelaksanaan, dan pengawasan rencana, kebijakan, program, dan praktik yang menghasilkan, mengendalikan, melindungi, dan meningkatkan nilai aset data dan informasi sepanjang siklus hidupnya.',
    definitionEn:
        'The development, execution, and supervision of plans, policies, programs, and practices that deliver, control, protect, and enhance the value of data and information assets throughout their lifecycles.',
    businessDriver:
        'Pendorong utama data management adalah memungkinkan organisasi memperoleh nilai dari aset datanya, sama seperti pengelolaan aset keuangan dan fisik.',
    goals: [
        'Memahami dan mendukung kebutuhan informasi enterprise dan stakeholder-nya, termasuk pelanggan, karyawan, dan mitra bisnis.',
        'Menangkap, menyimpan, melindungi, dan menjamin integritas aset data.',
        'Menjamin kualitas data dan informasi.',
        'Menjamin privasi dan kerahasiaan data stakeholder.',
        'Mencegah akses, manipulasi, atau penggunaan data dan informasi yang tidak sah atau tidak tepat.',
        'Memastikan data dapat digunakan secara efektif untuk menambah nilai bagi enterprise.',
    ],
    concepts: [
        {
            term: 'Data vs informasi',
            description:
                'Data adalah representasi fakta. Informasi adalah data yang diberi konteks dan makna. DMBOK mengingatkan bahwa piramida DIKW (Data → Information → Knowledge → Wisdom) terlalu menyederhanakan: data tidak "ada begitu saja", tetapi harus diciptakan, dan membuat data pun membutuhkan pengetahuan.',
        },
        {
            term: 'Data sebagai aset organisasi',
            description:
                'Aset adalah sumber daya ekonomi yang dapat dimiliki atau dikendalikan dan menghasilkan nilai. Data memenuhi kriteria itu, tetapi sifatnya unik: tidak habis saat dipakai, mudah disalin, dan nilainya bergantung pada konteks.',
        },
        {
            term: 'Data management ≠ teknologi',
            description:
                'Teknologi hanyalah alat. Data management mencakup people, process, dan technology, serta membutuhkan keterlibatan bisnis, bukan hanya TI.',
        },
        {
            term: 'Data management adalah manajemen siklus hidup',
            description:
                'Data perlu dikelola dari perencanaan hingga pemusnahan. Metadata dan kualitas data harus dijaga di setiap tahap.',
        },
        {
            term: 'Data dan risiko',
            description:
                'Data merepresentasikan nilai sekaligus risiko: data berkualitas rendah, kebocoran, atau penyalahgunaan dapat merugikan organisasi dan individu.',
        },
    ],
    challenges: [
        'Data berbeda dari aset lain: tidak berwujud, tahan lama, dan dapat disalin tanpa batas.',
        'Valuasi data sulit, karena nilainya kontekstual dan sering bergantung pada waktu.',
        'Kualitas data harus direncanakan dan dikelola, bukan diasumsikan.',
        'Data yang lebih baik membutuhkan perencanaan (arsitektur, model, proses).',
        'Metadata dibutuhkan untuk memahami dan mengelola data.',
        'Data management bersifat lintas fungsi dan membutuhkan perspektif enterprise.',
        'Berbagai perspektif (bisnis, teknis, regulasi) harus diperhitungkan.',
        'Tiap jenis data punya siklus hidup dan kebutuhan pengelolaan yang berbeda.',
        'Kebutuhan data management adalah kebutuhan bisnis, dan harus mendorong keputusan TI.',
        'Data management yang efektif membutuhkan komitmen kepemimpinan.',
    ],
    strategyComponents: [
        'Visi yang meyakinkan (compelling vision)',
        'Ringkasan business case dengan contoh',
        'Prinsip panduan, nilai, dan perspektif manajemen',
        'Misi dan tujuan jangka panjang',
        'Ukuran keberhasilan',
        'Sasaran jangka pendek (12–24 bulan) yang SMART',
        'Peran dan organisasi beserta tanggung jawabnya',
        'Deskripsi komponen dan inisiatif program',
        'Program kerja yang diprioritaskan dan batas cakupannya',
        'Draf roadmap implementasi',
    ],
    strategyDeliverables: [
        {
            name: 'Data Management Charter',
            description:
                'Visi, business case, tujuan, prinsip, ukuran keberhasilan, faktor kritis, risiko, dan model operasi.',
        },
        {
            name: 'Data Management Scope Statement',
            description:
                'Tujuan perencanaan (3–5 tahun), peran, organisasi, dan pemimpin individu.',
        },
        {
            name: 'Data Management Implementation Roadmap',
            description:
                'Program, proyek, penugasan, dan milestone implementasi yang spesifik.',
        },
    ],
    frameworks: [
        {
            name: 'Strategic Alignment Model',
            source: 'Henderson & Venkatraman, 1999',
            description:
                'Menyelaraskan empat domain: Business Strategy, IT Strategy, Organization & Process, dan Information Systems. Data dan informasi berada di pusat, menjadi penghubung antar domain.',
        },
        {
            name: 'Amsterdam Information Model',
            source: 'Abcouwer, Maes & Truijens, 1997',
            description:
                'Matriks 3×3: kolom Business, Information, Technology × baris Strategy, Structure (organisasi), Operations. Kolom tengah (Information) menyoroti peran manajemen informasi dan data.',
        },
        {
            name: 'DAMA-DMBOK Framework',
            source: 'DAMA International',
            description:
                'Terdiri atas DAMA Wheel (knowledge area), Environmental Factors Hexagon, dan Context Diagram per knowledge area.',
        },
        {
            name: 'DMBOK Pyramid',
            source: 'Peter Aiken',
            description:
                'Menggambarkan urutan umum organisasi membangun kapabilitas data management, dari fondasi teknis hingga analitik lanjut.',
        },
        {
            name: 'DAMA Functional Area Dependencies (Evolved Wheel)',
            source: 'Sue Geuens',
            description:
                'Memperlihatkan ketergantungan antar knowledge area: governance sebagai fondasi, lalu fungsi dasar, hingga kegiatan yang memanfaatkan data (BI, analitik, big data).',
        },
    ],
};

export const aikenPyramidPhases = [
    {
        phase: 1,
        title: 'Membeli/membangun aplikasi dengan kapabilitas database',
        description:
            'Organisasi mulai dengan aplikasi yang punya database. Ini titik awal untuk pemodelan data, penyimpanan, dan keamanan. Agar berjalan dengan data dan lingkungannya, dibutuhkan integrasi dan interoperabilitas.',
        areaIds: [
            'data-modeling',
            'data-storage',
            'data-security',
            'data-integration',
        ],
    },
    {
        phase: 2,
        title: 'Muncul masalah kualitas data',
        description:
            'Setelah aplikasi dipakai, masalah kualitas data muncul. Data berkualitas tinggi bergantung pada Metadata yang andal dan Data Architecture yang konsisten.',
        areaIds: ['data-quality', 'metadata', 'data-architecture'],
    },
    {
        phase: 3,
        title: 'Butuh praktik yang disiplin',
        description:
            'Praktik yang disiplin untuk mengelola kualitas data, metadata, dan arsitektur membutuhkan Data Governance.',
        areaIds: ['data-governance'],
    },
    {
        phase: 4,
        title: 'Memanfaatkan data yang terkelola baik',
        description:
            'Organisasi menikmati manfaat data yang terkelola dan meningkatkan kapabilitas analitiknya.',
        areaIds: ['dw-bi', 'reference-master', 'document-content', 'big-data'],
    },
];

export function topicName(areaId: string): string {
    if (areaId === dataManagementOverviewId) {
        return dataManagementOverview.name;
    }

    return findArea(areaId)?.name ?? areaId;
}

export function topicChapter(areaId: string): number | undefined {
    if (areaId === dataManagementOverviewId) {
        return dataManagementOverview.chapter;
    }

    return findArea(areaId)?.chapter;
}

/** Topic name prefixed with its DMBOK2 chapter, e.g. "Bab 3 · Data Governance". */
export function topicChapterLabel(areaId: string): string {
    const chapter = topicChapter(areaId);

    return chapter === undefined
        ? topicName(areaId)
        : `Bab ${chapter} · ${topicName(areaId)}`;
}

export function topicColor(areaId: string): string {
    return findArea(areaId)?.color ?? '#f53003';
}
