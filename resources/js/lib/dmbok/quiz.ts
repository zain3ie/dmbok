import { allocateByWeight } from './exam';
import { knowledgeAreas } from './knowledge-areas';
import { dataManagementOverviewId } from './overview';
import type { KnowledgeArea, QuizQuestion } from './types';

export const curatedQuestions: QuizQuestion[] = [
    {
        id: 'gen-1',
        areaId: 'data-management',
        question: 'Which Knowledge Area is at the center of the DAMA Wheel?',
        options: [
            'Data Quality',
            'Data Governance',
            'Metadata Management',
            'Data Architecture',
        ],
        answerIndex: 1,
        translation: {
            question: 'Knowledge Area apa yang berada di pusat DAMA Wheel?',
        },
        explanation:
            'Data Governance berada di pusat karena memberi arah dan pengawasan bagi seluruh fungsi data management lainnya.',
    },
    {
        id: 'gen-2',
        areaId: 'data-management',
        question:
            'How many Knowledge Areas are in the DAMA Wheel (including Data Governance)?',
        options: ['8', '10', '11', '14'],
        answerIndex: 2,
        translation: {
            question:
                'Berapa jumlah Knowledge Area pada DAMA Wheel (termasuk Data Governance)?',
        },
        explanation:
            'DAMA Wheel berisi 11 knowledge area: Data Governance di pusat dan 10 area di sekelilingnya.',
    },
    {
        id: 'gen-3',
        areaId: 'data-management',
        question:
            'Which factor is at the center of the Environmental Factors Hexagon?',
        options: [
            'Tools',
            'Organization & Culture',
            'Goals & Principles',
            'Deliverables',
        ],
        answerIndex: 2,
        translation: {
            question:
                'Faktor apa yang berada di pusat Environmental Factors Hexagon?',
        },
        explanation:
            'Goals & Principles berada di pusat dan memandu faktor lain: peran, budaya, aktivitas, deliverable, teknik, dan tools.',
    },
    {
        id: 'gen-4',
        areaId: 'data-management',
        question:
            'In a context diagram, the code (O) before an activity stands for:',
        options: ['Optional', 'Operational', 'Organizational', 'Output'],
        answerIndex: 1,
        translation: {
            question:
                'Pada context diagram, kode (O) di depan sebuah aktivitas berarti…',
        },
        explanation:
            'Aktivitas dikelompokkan menjadi Planning (P), Development (D), Operational (O), dan Control (C).',
    },
    {
        id: 'gen-5',
        areaId: 'data-management',
        question:
            'Which stage is NOT part of the data lifecycle according to the DMBOK?',
        options: ['Enhance', 'Dispose', 'Monetize', 'Store / Maintain'],
        answerIndex: 2,
        translation: {
            question:
                'Tahap mana yang BUKAN bagian dari data lifecycle menurut DMBOK?',
        },
        explanation:
            'Lifecycle DMBOK: Plan, Design & Enable, Create/Obtain, Store/Maintain, Use, Enhance, Dispose.',
    },
    {
        id: 'gen-6',
        areaId: 'data-management',
        question:
            'The DMBOK principle "It takes Metadata to manage data" belongs to which group of principles?',
        options: [
            'Data is valuable',
            'Data management requirements are business requirements',
            'Data management depends on diverse skills',
            'Data management is lifecycle management',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Prinsip DMBOK "It takes Metadata to manage data" termasuk dalam kelompok prinsip…',
            options: [
                'Data itu bernilai',
                'Kebutuhan data management adalah business requirements',
                'Data management bergantung pada beragam keahlian',
                'Data management adalah lifecycle management',
            ],
        },
        explanation:
            'Kelompok "Data management requirements are business requirements" mencakup kualitas data, metadata, perencanaan, dan kebutuhan DM yang mendorong keputusan TI.',
    },
    {
        id: 'gen-7',
        areaId: 'data-management',
        question:
            'According to Chapter 1 of the DMBOK, the primary driver for data management is to:',
        options: [
            'Satisfy IT audits',
            'Enable an organization to get value from its data assets',
            'Reduce storage costs',
            'Implement the latest database technology',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Menurut Bab 1 DMBOK, pendorong utama (primary driver) data management adalah…',
            options: [
                'Memenuhi audit TI',
                'Memungkinkan organisasi memperoleh nilai dari data asset miliknya',
                'Mengurangi biaya storage',
                'Menerapkan teknologi database terbaru',
            ],
        },
        explanation:
            'DMBOK menyatakan pendorong utamanya adalah memungkinkan organisasi mendapatkan nilai dari aset data, sama seperti aset keuangan dan fisik.',
    },
    {
        id: 'gen-8',
        areaId: 'data-management',
        question:
            'In the DMBOK Pyramid (Aiken), when does Data Governance become necessary?',
        options: [
            'Phase 1, when purchasing applications',
            'Phase 2, when data quality problems emerge',
            'Phase 3, when disciplined practices for quality, Metadata, and architecture are required',
            'Phase 4, when leveraging advanced analytics',
        ],
        answerIndex: 2,
        translation: {
            question:
                'Pada DMBOK Pyramid (Aiken), kapan Data Governance dibutuhkan?',
            options: [
                'Fase 1, saat membeli aplikasi',
                'Fase 2, saat muncul masalah data quality',
                'Fase 3, saat dibutuhkan praktik disiplin untuk quality, Metadata, dan architecture',
                'Fase 4, saat memanfaatkan advanced analytics',
            ],
        },
        explanation:
            'Fase 3: praktik yang disiplin untuk Data Quality, Metadata, dan Data Architecture membutuhkan Data Governance.',
    },
    {
        id: 'gen-9',
        areaId: 'data-management',
        question:
            'The model that aligns Business Strategy, IT Strategy, Organization & Process, and Information Systems is the:',
        options: [
            'Amsterdam Information Model',
            'Zachman Framework',
            'Strategic Alignment Model',
            'DMBOK Pyramid',
        ],
        answerIndex: 2,
        translation: {
            question:
                'Model yang menyelaraskan Business Strategy, IT Strategy, Organization & Process, dan Information Systems adalah…',
        },
        explanation:
            'Strategic Alignment Model (Henderson & Venkatraman) memiliki empat domain tersebut, dengan data dan informasi sebagai penghubung.',
    },
    {
        id: 'gen-10',
        areaId: 'data-management',
        question:
            'The framework structured as a 3×3 matrix (Business, Information, Technology × Strategy, Structure, Operations) is the:',
        options: [
            'Amsterdam Information Model',
            'Strategic Alignment Model',
            'Environmental Factors Hexagon',
            'Zachman Framework',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Framework berbentuk matriks 3×3 (Business, Information, Technology × Strategy, Structure, Operations) adalah…',
        },
        explanation:
            'Amsterdam Information Model menambahkan kolom "Information" di tengah, di antara bisnis dan teknologi.',
    },
    {
        id: 'gen-11',
        areaId: 'data-management',
        question:
            'Which data management strategy deliverable contains the vision, business case, goals, guiding principles, and measures of success?',
        options: [
            'Data Management Charter',
            'Data Management Scope Statement',
            'Implementation Roadmap',
            'Business Glossary',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Deliverable data management strategy yang berisi vision, business case, goals, guiding principles, dan measures of success adalah…',
        },
        explanation:
            'Data Management Charter memuat visi, business case, tujuan, prinsip, ukuran keberhasilan, faktor kritis, risiko, dan model operasi.',
    },
    {
        id: 'gen-12',
        areaId: 'data-management',
        question:
            'Why does the DMBOK describe the DIKW pyramid as an oversimplification?',
        options: [
            'Because wisdom cannot be measured',
            'Because data does not "just exist": it has to be created, and creating it itself requires knowledge',
            'Because information is more important than data',
            'Because DIKW applies only to Big Data',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Mengapa DMBOK menyebut DIKW pyramid sebagai penyederhanaan berlebihan?',
            options: [
                'Karena wisdom tidak bisa diukur',
                'Karena data tidak "ada begitu saja": data harus diciptakan, dan proses itu sendiri butuh knowledge',
                'Karena information lebih penting daripada data',
                'Karena DIKW hanya berlaku untuk Big Data',
            ],
        },
        explanation:
            'DMBOK menekankan bahwa membuat data membutuhkan pengetahuan, sehingga hubungan data → informasi → pengetahuan tidak sesederhana piramida satu arah.',
    },
    {
        id: 'dg-1',
        areaId: 'data-governance',
        question:
            'The DMBOK compares the relationship between Data Governance and data management to the relationship between:',
        options: [
            'An architect and a builder',
            'Auditing and accounting',
            'A server and a client',
            'A manager and an employee',
        ],
        answerIndex: 1,
        translation: {
            question:
                'DMBOK menganalogikan hubungan Data Governance dengan data management seperti hubungan…',
            options: [
                'Arsitek dengan tukang bangunan',
                'Audit dengan akuntansi',
                'Server dengan client',
                'Manajer dengan karyawan',
            ],
        },
        explanation:
            'DG memastikan data dikelola dengan benar (seperti auditor), sementara DM menjalankan pengelolaan data (seperti akuntan). Pemisahan tugas ini penting.',
    },
    {
        id: 'dg-2',
        areaId: 'data-governance',
        question:
            'A Data Governance operating model in which a central body sets standards while business units execute governance within their own domains is called:',
        options: ['Centralized', 'Replicated', 'Federated', 'Decentralized'],
        answerIndex: 2,
        translation: {
            question:
                'Data Governance operating model di mana badan pusat menetapkan standar sementara unit bisnis menjalankan governance di domainnya sendiri disebut…',
        },
        explanation:
            'Federated menggabungkan koordinasi terpusat dengan pelaksanaan oleh unit bisnis/divisi.',
    },
    {
        id: 'dg-3',
        areaId: 'data-governance',
        question:
            'Which Data Governance deliverable contains agreed-upon business terms and their definitions?',
        options: [
            'Data dictionary',
            'Business glossary',
            'Data model',
            'Technical data catalog',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Deliverable Data Governance yang berisi business term yang disepakati beserta definisinya adalah…',
        },
        explanation:
            'Business glossary adalah alat utama DG untuk membangun pemahaman bersama atas istilah bisnis.',
    },
    {
        id: 'da-1',
        areaId: 'data-architecture',
        question:
            'The enterprise architecture framework structured as a 6×6 matrix (What, How, Where, Who, When, Why) is:',
        options: ['TOGAF', 'Zachman Framework', 'COBIT', 'ITIL'],
        answerIndex: 1,
        translation: {
            question:
                'Enterprise architecture framework berbentuk matriks 6×6 (What, How, Where, Who, When, Why) adalah…',
        },
        explanation:
            'Zachman Framework adalah ontologi 6 interogatif × 6 perspektif yang sering dirujuk DMBOK.',
    },
    {
        id: 'dm-1',
        areaId: 'data-modeling',
        question:
            'A data model that contains tables, columns, data types, and indexes for a specific DBMS is a:',
        options: [
            'Conceptual model',
            'Logical model',
            'Physical model',
            'Canonical model',
        ],
        answerIndex: 2,
        translation: {
            question:
                'Data model yang berisi table, column, data type, dan index untuk DBMS tertentu adalah…',
        },
        explanation:
            'Model fisik bergantung pada teknologi. Model logis independen dari teknologi, dan model konseptual berada di tingkat konsep bisnis.',
    },
    {
        id: 'dm-2',
        areaId: 'data-modeling',
        question:
            'Data Vault and Anchor Modeling are which type of modeling scheme?',
        options: ['Dimensional', 'Time-based', 'Object-oriented', 'Fact-based'],
        answerIndex: 1,
        translation: {
            question:
                'Data Vault dan Anchor Modeling termasuk modeling scheme jenis…',
        },
        explanation:
            'Data Vault dan Anchor Modeling adalah pendekatan time-based yang dirancang untuk menyimpan riwayat dan fleksibel terhadap perubahan.',
    },
    {
        id: 'ds-1',
        areaId: 'data-storage',
        question:
            'According to the CAP Theorem, a distributed system can guarantee only:',
        options: [
            'All three properties at once',
            'Two of the three properties',
            'One of the three properties',
            'It depends on the DBMS',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Menurut CAP Theorem, distributed system hanya bisa menjamin…',
            options: [
                'Ketiga properti sekaligus',
                'Dua dari tiga properti',
                'Satu dari tiga properti',
                'Tergantung DBMS',
            ],
        },
        explanation:
            'Hanya dua dari Consistency, Availability, dan Partition tolerance yang dapat dijamin bersamaan.',
    },
    {
        id: 'ds-2',
        areaId: 'data-storage',
        question:
            'The target for "how much data may be lost" in the event of a disaster is called the:',
        options: ['RTO', 'RPO', 'SLA', 'MTBF'],
        answerIndex: 1,
        translation: {
            question:
                'Target "berapa banyak data yang boleh hilang" saat bencana disebut…',
        },
        explanation:
            'RPO (Recovery Point Objective) = toleransi kehilangan data. RTO = toleransi lamanya downtime.',
    },
    {
        id: 'sec-1',
        areaId: 'data-security',
        question:
            'The principle of granting users only the minimum access rights they need is called:',
        options: [
            'Need to share',
            'Least privilege',
            'Defense in depth',
            'Zero knowledge',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Prinsip memberi pengguna hanya hak akses minimum yang dibutuhkan disebut…',
        },
        explanation:
            'Least privilege mengurangi risiko penyalahgunaan dengan membatasi hak akses seminimal mungkin.',
    },
    {
        id: 'sec-2',
        areaId: 'data-security',
        question: 'The "4 A\'s" of Data Security are:',
        options: [
            'Access, Audit, Authentication, Authorization',
            'Accuracy, Availability, Access, Audit',
            'Architecture, Access, Analysis, Audit',
            'Authentication, Analytics, Archive, Access',
        ],
        answerIndex: 0,
        translation: {
            question: 'Yang termasuk "4A" dalam Data Security adalah…',
        },
        explanation:
            'Access, Audit, Authentication, dan Authorization, ditambah Entitlement.',
    },
    {
        id: 'dii-1',
        areaId: 'data-integration',
        question:
            'The interaction model in which the sender does not need to know who the receivers are is:',
        options: [
            'Point-to-point',
            'Hub-and-spoke',
            'Publish–subscribe',
            'Batch file transfer',
        ],
        answerIndex: 2,
        translation: {
            question:
                'Interaction model di mana pengirim tidak perlu tahu siapa penerimanya adalah…',
        },
        explanation:
            'Pada publish–subscribe, publisher mengirim ke topik dan subscriber mengambil data yang diminatinya.',
    },
    {
        id: 'dii-2',
        areaId: 'data-integration',
        question:
            'The technique for moving only the changes (deltas) from a source is called:',
        options: [
            'Full refresh',
            'Change Data Capture',
            'Data virtualization',
            'Snapshot',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Teknik untuk hanya memindahkan perubahan (delta) dari source disebut…',
        },
        explanation:
            'CDC mendeteksi insert/update/delete di sumber sehingga integrasi lebih efisien.',
    },
    {
        id: 'dcm-1',
        areaId: 'document-content',
        question:
            'A document that serves as evidence of a transaction and is subject to retention requirements is called:',
        options: ['Content', 'Record', 'Metadata', 'Taxonomy'],
        answerIndex: 1,
        translation: {
            question:
                'Dokumen yang menjadi bukti suatu transaksi dan tunduk pada retention requirements disebut…',
        },
        explanation:
            'Record adalah bukti aktivitas atau transaksi yang wajib disimpan sesuai retention schedule.',
    },
    {
        id: 'dcm-2',
        areaId: 'document-content',
        question: 'In records management, GARP stands for:',
        options: [
            'Generally Accepted Recordkeeping Principles',
            'Global Archive Retention Policy',
            'General Access & Retrieval Protocol',
            'Governance, Audit, Retention, Privacy',
        ],
        answerIndex: 0,
        translation: {
            question: 'GARP dalam records management adalah singkatan dari…',
        },
        explanation:
            'GARP dari ARMA: Accountability, Integrity, Protection, Compliance, Availability, Retention, Disposition, Transparency.',
    },
    {
        id: 'rmd-1',
        areaId: 'reference-master',
        question:
            'Which of the following is an example of REFERENCE data (rather than Master Data)?',
        options: [
            'Customer list',
            'ISO 4217 currency code list',
            'Supplier data',
            'Employee data',
        ],
        answerIndex: 1,
        translation: {
            question: 'Manakah contoh REFERENCE data (bukan Master Data)?',
            options: [
                'Daftar pelanggan',
                'Daftar kode mata uang ISO 4217',
                'Data pemasok',
                'Data karyawan',
            ],
        },
        explanation:
            'Reference data mengklasifikasi data lain (kode mata uang, negara, satuan). Pelanggan, pemasok, dan karyawan adalah master data.',
    },
    {
        id: 'rmd-2',
        areaId: 'reference-master',
        question:
            'The MDM hub style that stores only an index/pointers to the data held in source systems is:',
        options: ['Transaction hub', 'Consolidated', 'Registry', 'Coexistence'],
        answerIndex: 2,
        translation: {
            question:
                'MDM hub style yang hanya menyimpan index/pointer ke data di source system adalah…',
        },
        explanation:
            'Registry menyimpan indeks dan cross-reference, sedangkan data aslinya tetap di sistem sumber.',
    },
    {
        id: 'dw-1',
        areaId: 'dw-bi',
        question:
            'Which data warehousing approach is based on star schemas and conformed dimensions?',
        options: ['Inmon', 'Kimball', 'Data Vault', 'Lambda'],
        answerIndex: 1,
        translation: {
            question:
                'Pendekatan data warehousing yang berbasis star schema dan conformed dimensions adalah…',
        },
        explanation:
            'Kimball (Dimensional Bus Architecture) memakai star schema dan conformed dimensions. Inmon memakai DW terpusat ternormalisasi.',
    },
    {
        id: 'dw-2',
        areaId: 'dw-bi',
        question: 'Which SCD type preserves history by adding a new row?',
        options: ['Type 0', 'Type 1', 'Type 2', 'Type 3'],
        answerIndex: 2,
        translation: {
            question:
                'SCD type berapa yang menyimpan history dengan menambah row baru?',
        },
        explanation:
            'Type 2 menambah baris baru untuk tiap perubahan. Type 1 menimpa nilai lama, dan Type 3 menyimpan nilai lama di kolom terpisah.',
    },
    {
        id: 'md-1',
        areaId: 'metadata',
        question:
            'ETL job execution logs and counts of rows processed are which type of Metadata?',
        options: ['Business', 'Technical', 'Operational', 'Reference'],
        answerIndex: 2,
        translation: {
            question:
                'Log eksekusi ETL job dan jumlah row yang diproses termasuk Metadata jenis…',
        },
        explanation:
            'Operational metadata menggambarkan pemrosesan dan akses data. Technical metadata berisi struktur (tabel, kolom).',
    },
    {
        id: 'md-2',
        areaId: 'metadata',
        question:
            'To determine which reports would be affected if a column were changed, you would perform:',
        options: [
            'Data profiling',
            'Impact analysis using lineage',
            'Data masking',
            'Record matching',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Untuk mengetahui report mana yang terdampak jika sebuah column diubah, kita melakukan…',
            options: [
                'Data profiling',
                'Impact analysis memakai lineage',
                'Data masking',
                'Record matching',
            ],
        },
        explanation:
            'Data lineage memungkinkan impact analysis: menelusuri ke hilir siapa saja yang memakai suatu elemen data.',
    },
    {
        id: 'dq-1',
        areaId: 'data-quality',
        question:
            'A single supplier is recorded three times in a system. Which data quality dimension is violated?',
        options: ['Timeliness', 'Uniqueness', 'Validity', 'Accuracy'],
        answerIndex: 1,
        translation: {
            question:
                'Satu supplier tercatat tiga kali di sistem. Data quality dimension yang dilanggar adalah…',
        },
        explanation:
            'Uniqueness: tidak boleh ada entitas yang tercatat lebih dari sekali.',
    },
    {
        id: 'dq-2',
        areaId: 'data-quality',
        question:
            'The continuous improvement cycle that the DMBOK uses for Data Quality is:',
        options: ['DMAIC', 'PDCA', 'SDLC', 'CRISP-DM'],
        answerIndex: 1,
        translation: {
            question:
                'Siklus continuous improvement yang dipakai DMBOK untuk Data Quality adalah…',
        },
        explanation: 'DMBOK memakai siklus Shewhart/Deming: Plan-Do-Check-Act.',
    },
    {
        id: 'dq-3',
        areaId: 'data-quality',
        question:
            'The country code "IDN" is recorded as "Indon", although the standard is ISO 3166. Which dimension is violated?',
        options: ['Validity', 'Completeness', 'Timeliness', 'Integrity'],
        answerIndex: 0,
        translation: {
            question:
                'Kode negara "IDN" ditulis "Indon" padahal standarnya ISO 3166. Dimension yang dilanggar adalah…',
        },
        explanation:
            'Validity: nilai harus sesuai domain, format, dan aturan yang ditetapkan.',
    },
    {
        id: 'dq-4',
        areaId: 'data-quality',
        question:
            'Which data quality dimension was explicitly added in the DMBOK2 Revised edition?',
        options: ['Currency', 'Accessibility', 'Relevance', 'Usability'],
        answerIndex: 0,
        translation: {
            question:
                'Data quality dimension yang ditambahkan secara eksplisit pada edisi DMBOK2 Revised adalah…',
        },
        explanation:
            'DMBOK2 revised menambahkan Currency (kemutakhiran data terhadap dunia nyata) sebagai dimensi Data Quality.',
    },
    {
        id: 'bd-1',
        areaId: 'big-data',
        question: 'The three classic "V\'s" of Big Data are:',
        options: [
            'Volume, Velocity, Variety',
            'Value, Vision, Validity',
            'Volume, Value, Visualization',
            'Velocity, Veracity, Version',
        ],
        answerIndex: 0,
        translation: {
            question: 'Tiga "V" klasik dari Big Data adalah…',
        },
        explanation:
            'Volume, Velocity, Variety. DMBOK juga menyebut Viscosity, Volatility, dan Veracity.',
    },
    {
        id: 'bd-2',
        areaId: 'big-data',
        question:
            'A data lake without adequate governance and Metadata is at risk of becoming a:',
        options: ['Data mart', 'Data swamp', 'Data vault', 'Data mesh'],
        answerIndex: 1,
        translation: {
            question:
                'Data lake tanpa governance dan Metadata yang memadai berisiko menjadi…',
        },
        explanation:
            'Tanpa metadata dan governance, data lake sulit dipahami dan dipercaya, sehingga menjadi "data swamp".',
    },
    {
        id: 'eth-1',
        areaId: 'data-ethics',
        question: 'The three Belmont principles adapted for data ethics are:',
        options: [
            'Respect for Persons, Beneficence, Justice',
            'Transparency, Accountability, Fairness',
            'Privacy, Security, Integrity',
            'Consent, Purpose, Minimization',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Tiga prinsip Belmont yang diadaptasi untuk data ethics adalah…',
        },
        explanation:
            'Belmont Report: Respect for Persons, Beneficence, dan Justice.',
    },
    {
        id: 'mat-1',
        areaId: 'maturity',
        question:
            'In the DMBOK maturity model, the level at which standardized processes are applied across the organization is:',
        options: [
            'Level 2 Repeatable',
            'Level 3 Defined',
            'Level 4 Managed',
            'Level 5 Optimized',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pada DMBOK maturity model, level di mana proses terstandar diterapkan di seluruh organisasi adalah…',
        },
        explanation:
            'Level 3 Defined: proses terstandar diterapkan secara luas. Level 4 menambah pengukuran kuantitatif, dan Level 5 fokus pada optimasi.',
    },
    {
        id: 'dg-4',
        areaId: 'data-governance',
        question:
            'Which role is responsible for the day-to-day management of data definitions, quality, and usage within its business domain?',
        options: [
            'Database Administrator',
            'Business Data Steward',
            'Chief Information Officer',
            'Data Architect',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Role yang bertanggung jawab atas pengelolaan sehari-hari data definition, data quality, dan penggunaan data dalam business domain-nya adalah…',
        },
        explanation:
            'Business Data Steward adalah ahli bisnis yang akuntabel atas subset data di domainnya: definisi, kualitas, dan penggunaannya.',
    },
    {
        id: 'dg-5',
        areaId: 'data-governance',
        question:
            'What is the recommended first step when defining Data Governance for an organization?',
        options: [
            'Purchase data governance tools',
            'Perform a readiness assessment',
            'Write all data policies at once',
            'Build a data warehouse',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Langkah awal yang direkomendasikan saat mendefinisikan Data Governance untuk organisasi adalah…',
            options: [
                'Membeli data governance tools',
                'Melakukan readiness assessment',
                'Menulis seluruh data policy sekaligus',
                'Membangun data warehouse',
            ],
        },
        explanation:
            'Readiness assessment menilai kesiapan organisasi (maturity, kapasitas berubah, kolaborasi, keselarasan bisnis) sebelum program DG dirancang.',
    },
    {
        id: 'dg-6',
        areaId: 'data-governance',
        question:
            'The highest Data Governance body, made up of senior executives and serving as the primary authority for data decisions, is the:',
        options: [
            'Data Governance Steering Committee',
            'Data Stewardship Team',
            'Local Data Governance Committee',
            'Data Governance Office',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Data Governance body tertinggi yang beranggotakan eksekutif senior dan menjadi otoritas utama untuk keputusan data adalah…',
        },
        explanation:
            'Steering Committee adalah otoritas tertinggi DG. Data Governance Office mengoordinasikan aktivitas sehari-hari, dan Stewardship Team bekerja di tingkat domain.',
    },
    {
        id: 'dg-7',
        areaId: 'data-governance',
        question:
            'The Data Governance operating model in which a single governance organization oversees all business units is:',
        options: ['Centralized', 'Replicated', 'Federated', 'Self-organized'],
        answerIndex: 0,
        translation: {
            question:
                'Data Governance operating model di mana satu governance organization mengawasi seluruh unit bisnis adalah…',
        },
        explanation:
            'Centralized: satu organisasi DG mengawasi semua area. Replicated: tiap unit bisnis punya model DG sendiri yang serupa. Federated: koordinasi pusat dengan pelaksanaan oleh unit.',
    },
    {
        id: 'dm-3',
        areaId: 'data-modeling',
        question:
            'In a data model, the cardinality of a relationship describes:',
        options: [
            'The data type of an attribute',
            'How many instances of one entity can participate in a relationship with instances of another entity',
            'The order of columns in a table',
            'The number of attributes in an entity',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Cardinality pada relationship dalam data model menyatakan…',
            options: [
                'Data type sebuah attribute',
                'Berapa instance dari satu entity yang dapat berpartisipasi dalam relationship dengan instance entity lain',
                'Urutan column dalam table',
                'Jumlah attribute dalam sebuah entity',
            ],
        },
        explanation:
            'Kardinalitas (mis. satu-ke-banyak) menyatakan jumlah kemunculan entitas yang dapat terlibat dalam relasi.',
    },
    {
        id: 'dm-4',
        areaId: 'data-modeling',
        question:
            'Which normal form eliminates partial dependencies (every non-key attribute must depend on the entire primary key)?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        answerIndex: 1,
        translation: {
            question:
                'Normal form yang menghilangkan partial dependency (setiap non-key attribute harus bergantung pada seluruh primary key) adalah…',
        },
        explanation:
            '2NF menghilangkan partial dependency. 3NF menghilangkan transitive dependency (atribut non-key bergantung pada atribut non-key lain).',
    },
    {
        id: 'dm-5',
        areaId: 'data-modeling',
        question:
            'In data modeling, Information Engineering (IE) notation is also known as:',
        options: ['Chen', "Crow's foot", 'UML', 'Barker'],
        answerIndex: 1,
        translation: {
            question:
                'Notasi Information Engineering (IE) dalam data modeling juga dikenal sebagai notasi…',
        },
        explanation:
            'IE memakai simbol "kaki gagak" (crow\'s foot) untuk menunjukkan sisi "banyak" pada relasi.',
    },
    {
        id: 'dm-6',
        areaId: 'data-modeling',
        question:
            'In a dimensional model, the table that stores the numeric measurements of a business process is called a:',
        options: [
            'Dimension table',
            'Fact table',
            'Bridge table',
            'Lookup table',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pada dimensional model, table yang menyimpan measurement numerik dari suatu business process disebut…',
        },
        explanation:
            'Fact table berisi ukuran (measures) seperti jumlah dan nilai. Dimension table memberi konteks (siapa, apa, kapan, di mana).',
    },
    {
        id: 'dm-7',
        areaId: 'data-modeling',
        question:
            'A key that uniquely identifies an entity and is chosen from among several candidate keys is called a:',
        options: [
            'Foreign key',
            'Alternate key',
            'Primary key',
            'Composite key',
        ],
        answerIndex: 2,
        translation: {
            question:
                'Key yang secara unik mengidentifikasi entity dan dipilih dari beberapa candidate key disebut…',
        },
        explanation:
            'Primary key dipilih dari candidate key. Candidate key lain yang tidak dipilih menjadi alternate key.',
    },
    {
        id: 'md-3',
        areaId: 'metadata',
        question:
            'Table names, column data types, and database constraints are examples of which type of Metadata?',
        options: ['Business', 'Technical', 'Operational', 'Descriptive'],
        answerIndex: 1,
        translation: {
            question:
                'Table name, column data type, dan database constraint termasuk Metadata jenis…',
        },
        explanation:
            'Technical metadata menggambarkan struktur dan detail teknis: tabel, kolom, tipe, indeks, constraint.',
    },
    {
        id: 'md-4',
        areaId: 'metadata',
        question:
            'Business term definitions, business rules, and data owners are examples of which type of Metadata?',
        options: ['Business', 'Technical', 'Operational', 'Structural'],
        answerIndex: 0,
        translation: {
            question:
                'Business term definition, business rule, dan data owner termasuk Metadata jenis…',
        },
        explanation:
            'Business metadata berfokus pada isi dan kondisi data: definisi, aturan, kualitas, pemilik.',
    },
    {
        id: 'md-5',
        areaId: 'metadata',
        question:
            'A Metadata architecture in which a single repository holds copies of Metadata from multiple sources is called:',
        options: ['Centralized', 'Distributed', 'Bi-directional', 'Federated'],
        answerIndex: 0,
        translation: {
            question:
                'Metadata architecture di mana satu repository menyimpan salinan Metadata dari berbagai source disebut…',
        },
        explanation:
            'Centralized: repositori pusat dengan salinan metadata yang diperbarui berkala. Kelebihannya cepat dan konsisten, tetapi butuh proses sinkronisasi.',
    },
    {
        id: 'md-6',
        areaId: 'metadata',
        question:
            'Which Metadata architecture retrieves Metadata directly from the sources in real time, without a persistent repository?',
        options: ['Centralized', 'Distributed', 'Hybrid', 'Replicated'],
        answerIndex: 1,
        translation: {
            question:
                'Metadata architecture yang mengambil Metadata langsung dari source secara real time tanpa persistent repository adalah…',
        },
        explanation:
            'Distributed: metadata selalu mutakhir karena dibaca dari sumber, tetapi bergantung pada ketersediaan sistem sumber.',
    },
    {
        id: 'dq-5',
        areaId: 'data-quality',
        question:
            'Techniques such as the "5 Whys" or fishbone diagrams, used to find the underlying cause of data issues, are known as:',
        options: [
            'Data profiling',
            'Root cause analysis',
            'Data cleansing',
            'Data enrichment',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Teknik seperti "5 Whys" atau fishbone diagram untuk menemukan penyebab mendasar dari data issue disebut…',
        },
        explanation:
            'Root cause analysis menelusuri penyebab mendasar agar perbaikan mencegah masalah berulang, bukan hanya membersihkan gejalanya.',
    },
    {
        id: 'dq-6',
        areaId: 'data-quality',
        question:
            'A transaction that references a customer ID that does not exist in the customer table violates which data quality dimension?',
        options: ['Integrity', 'Timeliness', 'Uniqueness', 'Reasonability'],
        answerIndex: 0,
        translation: {
            question:
                'Transaksi yang merujuk ke customer ID yang tidak ada di customer table melanggar data quality dimension…',
        },
        explanation:
            'Integrity (referential integrity): relasi antar data harus konsisten, tanpa record "yatim".',
    },
    {
        id: 'dq-7',
        areaId: 'data-quality',
        question:
            'Statistical analysis of data content (patterns, nulls, unique values, distributions) as an initial step in a quality assessment is called:',
        options: [
            'Data profiling',
            'Data masking',
            'Data lineage',
            'Data virtualization',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Analisis statistik atas isi data (pattern, null, unique value, distribution) sebagai langkah awal quality assessment disebut…',
        },
        explanation:
            'Data profiling memberi gambaran kondisi data aktual sebagai dasar asesmen dan penetapan aturan kualitas.',
    },
    {
        id: 'dq-8',
        areaId: 'data-quality',
        question:
            'Which data quality approach is the most cost-effective in the long term?',
        options: [
            'Cleansing data in the data warehouse',
            'Preventing errors at the point where data is created',
            'Periodic manual correction',
            'Purchasing third-party data',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pendekatan data quality yang paling hemat biaya dalam jangka panjang adalah…',
            options: [
                'Melakukan data cleansing di data warehouse',
                'Mencegah kesalahan di titik data dibuat',
                'Koreksi manual berkala',
                'Membeli third-party data',
            ],
        },
        explanation:
            'Pencegahan di sumber (validasi input, pelatihan, kontrol proses) lebih murah daripada memperbaiki data di hilir.',
    },
    {
        id: 'dq-9',
        areaId: 'data-quality',
        question:
            'Inventory data is available only once a week, but decisions are made daily. Which data quality dimension is at issue?',
        options: ['Validity', 'Timeliness', 'Uniqueness', 'Integrity'],
        answerIndex: 1,
        translation: {
            question:
                'Data stok baru tersedia seminggu sekali padahal keputusan dibuat harian. Data quality dimension yang bermasalah adalah…',
        },
        explanation:
            'Timeliness: data harus tersedia saat dibutuhkan untuk keputusan.',
    },
    {
        id: 'rmd-3',
        areaId: 'reference-master',
        question:
            'The rules that determine which attribute values are retained when multiple records are merged into one are called:',
        options: [
            'Match rules',
            'Survivorship rules',
            'Business rules',
            'Validation rules',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Rules yang menentukan attribute value mana yang dipertahankan saat beberapa record di-merge menjadi satu disebut…',
        },
        explanation:
            'Survivorship menentukan nilai "pemenang" (mis. dari sumber paling tepercaya atau paling baru) untuk golden record.',
    },
    {
        id: 'rmd-4',
        areaId: 'reference-master',
        question:
            'Matching records based on a similarity score across several attributes is called:',
        options: [
            'Deterministic matching',
            'Probabilistic matching',
            'Exact matching',
            'Key matching',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Record matching berdasarkan similarity score dari beberapa attribute disebut…',
        },
        explanation:
            'Probabilistic matching memberi skor kemiripan. Deterministic matching memakai aturan pasti (mis. ID sama).',
    },
    {
        id: 'rmd-5',
        areaId: 'reference-master',
        question:
            'Which MDM hub style makes the hub the system of record, with applications reading from and writing directly to the hub?',
        options: ['Registry', 'Transaction hub', 'Consolidated', 'Virtual'],
        answerIndex: 1,
        translation: {
            question:
                'MDM hub style di mana hub menjadi system of record dan aplikasi membaca dari serta menulis langsung ke hub adalah…',
        },
        explanation:
            'Transaction hub menjadi satu-satunya tempat data master dibuat dan diubah.',
    },
    {
        id: 'rmd-6',
        areaId: 'reference-master',
        question: 'Which of the following is an example of MASTER data?',
        options: [
            'Order status codes',
            'Units of measure',
            'Product list',
            'ISO 3166 country codes',
        ],
        answerIndex: 2,
        translation: {
            question: 'Manakah contoh MASTER data?',
            options: [
                'Kode status pesanan',
                'Satuan ukur',
                'Daftar produk',
                'Kode negara ISO 3166',
            ],
        },
        explanation:
            'Produk adalah entitas bisnis inti (master data). Kode status, satuan ukur, dan kode negara adalah reference data.',
    },
    {
        id: 'dw-3',
        areaId: 'dw-bi',
        question:
            'Inmon defines a data warehouse as a subject-oriented, integrated, ___, and non-volatile collection of data.',
        options: ['Time-variant', 'Normalized', 'Real-time', 'Distributed'],
        answerIndex: 0,
        translation: {
            question:
                'Inmon mendefinisikan data warehouse sebagai kumpulan data yang subject-oriented, integrated, ___, dan non-volatile.',
        },
        explanation:
            'Definisi klasik Inmon: subject-oriented, integrated, time-variant, dan non-volatile untuk mendukung keputusan manajemen.',
    },
    {
        id: 'dw-4',
        areaId: 'dw-bi',
        question:
            'A dimension that is defined identically and shared by multiple fact tables is called a:',
        options: [
            'Junk dimension',
            'Conformed dimension',
            'Degenerate dimension',
            'Role-playing dimension',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Dimension yang didefinisikan identik dan dipakai bersama oleh beberapa fact table disebut…',
        },
        explanation:
            'Conformed dimension memungkinkan analisis lintas data mart secara konsisten (inti Kimball bus architecture).',
    },
    {
        id: 'dw-5',
        areaId: 'dw-bi',
        question:
            'Which OLAP operation moves from summarized data to a lower, more detailed level?',
        options: ['Roll-up', 'Drill-down', 'Pivot', 'Slice'],
        answerIndex: 1,
        translation: {
            question:
                'Operasi OLAP untuk berpindah dari summarized data ke level yang lebih rendah dan lebih detail adalah…',
        },
        explanation:
            'Drill-down menurunkan tingkat agregasi (mis. tahun → bulan). Roll-up sebaliknya.',
    },
    {
        id: 'dw-6',
        areaId: 'dw-bi',
        question:
            'An integrated store of current operational data that generally does not retain long history is a(n):',
        options: [
            'Data mart',
            'Operational Data Store (ODS)',
            'Data lake',
            'Staging area',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Penyimpanan terintegrasi untuk operational data terkini yang umumnya tidak menyimpan history panjang adalah…',
        },
        explanation:
            'ODS mendukung kebutuhan operasional dengan data terintegrasi yang terkini dan volatil.',
    },
    {
        id: 'da-2',
        areaId: 'data-architecture',
        question:
            'In the Zachman Framework, the "What" interrogative column relates to:',
        options: [
            'Data / inventory',
            'Process',
            'Location / network',
            'Time / schedule',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Dalam Zachman Framework, interrogative column "What" berkaitan dengan…',
        },
        explanation:
            'What = data/inventory, How = proses, Where = lokasi, Who = orang, When = waktu, Why = motivasi.',
    },
    {
        id: 'da-3',
        areaId: 'data-architecture',
        question:
            'An Enterprise Data Model is typically structured in layers from:',
        options: [
            'Physical → logical → conceptual',
            'Subject area → conceptual → logical',
            'Table → column → index',
            'Source → staging → mart',
        ],
        answerIndex: 1,
        translation: {
            question: 'Enterprise Data Model umumnya disusun berlapis dari…',
        },
        explanation:
            'EDM dimulai dari subject area model, lalu model konseptual dan logis tingkat enterprise.',
    },
    {
        id: 'ds-3',
        areaId: 'data-storage',
        question:
            'Which ACID property guarantees that a committed transaction remains stored even if the system crashes?',
        options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
        answerIndex: 3,
        translation: {
            question:
                'ACID property yang menjamin transaksi yang sudah di-commit tetap tersimpan meskipun sistem crash adalah…',
        },
        explanation:
            'Durability: setelah commit, perubahan bersifat permanen dan bertahan dari kegagalan sistem.',
    },
    {
        id: 'ds-4',
        areaId: 'data-storage',
        question:
            'The DBA who focuses on backup, recovery, and performance of the production environment is the:',
        options: [
            'Application DBA',
            'Production DBA',
            'Procedural DBA',
            'Development DBA',
        ],
        answerIndex: 1,
        translation: {
            question:
                'DBA yang berfokus pada backup, recovery, dan performance production environment adalah…',
        },
        explanation:
            'Production DBA bertanggung jawab atas operasi database produksi: backup/recovery, performa, dan ketersediaan.',
    },
    {
        id: 'sec-3',
        areaId: 'data-security',
        question:
            'In the DMBOK example confidentiality classification scheme, the level that anyone (including the public) may access is:',
        options: [
            'Internal Use Only',
            'General Audience',
            'Confidential',
            'Restricted Confidential',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pada contoh confidentiality classification scheme DMBOK, level yang boleh diakses siapa pun (termasuk publik) adalah…',
        },
        explanation:
            'General Audience = tersedia untuk siapa pun, termasuk publik.',
    },
    {
        id: 'sec-4',
        areaId: 'data-security',
        question:
            'Permanently obscuring sensitive data in a copy used for a test environment is called:',
        options: [
            'Dynamic data masking',
            'Persistent data masking',
            'Encryption in transit',
            'Tokenization in flight',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Menyamarkan data sensitif secara permanen pada salinan untuk test environment disebut…',
        },
        explanation:
            'Persistent (static) masking mengubah data secara permanen di salinan. Dynamic masking menyamarkan saat data ditampilkan tanpa mengubah sumber.',
    },
    {
        id: 'dii-3',
        areaId: 'data-integration',
        question:
            'In a point-to-point interaction model, the number of interfaces tends to:',
        options: [
            'Remain the same regardless of the number of systems',
            'Grow very rapidly as the number of systems increases',
            'Decrease as the number of systems increases',
            'Always equal the number of systems',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pada point-to-point interaction model, jumlah interface cenderung…',
            options: [
                'Tetap sama berapa pun jumlah sistem',
                'Bertambah sangat cepat seiring bertambahnya sistem',
                'Berkurang seiring bertambahnya sistem',
                'Selalu sama dengan jumlah sistem',
            ],
        },
        explanation:
            'Setiap pasangan sistem bisa butuh interface sendiri, sehingga kompleksitas meledak. Hub-and-spoke mengurangi hal ini.',
    },
    {
        id: 'dii-4',
        areaId: 'data-integration',
        question: 'In an ELT approach, data transformation takes place:',
        options: [
            'In the source system before extraction',
            'On a separate ETL server before loading',
            'In the target system after the data is loaded',
            'Not at all',
        ],
        answerIndex: 2,
        translation: {
            question: 'Pada pendekatan ELT, data transformation dilakukan…',
            options: [
                'Di source system sebelum extraction',
                'Di ETL server terpisah sebelum loading',
                'Di target system setelah data di-load',
                'Tidak dilakukan sama sekali',
            ],
        },
        explanation:
            'ELT memuat data mentah terlebih dahulu ke target (mis. data lake/cloud DW), lalu transformasi memanfaatkan daya komputasi target.',
    },
    {
        id: 'dcm-3',
        areaId: 'document-content',
        question:
            'Which reference model is commonly used for the e-discovery process?',
        options: ['EDRM', 'GARP', 'CMMI', 'TOGAF'],
        answerIndex: 0,
        translation: {
            question:
                'Reference model yang umum dipakai untuk proses e-discovery adalah…',
        },
        explanation:
            'Electronic Discovery Reference Model (EDRM) memetakan tahapan e-discovery dari identifikasi hingga presentasi.',
    },
    {
        id: 'dcm-4',
        areaId: 'document-content',
        question:
            "Records that are critical to the continuity of an organization's operations after a disaster are called:",
        options: [
            'Vital records',
            'Archival records',
            'Transitory records',
            'Reference records',
        ],
        answerIndex: 0,
        translation: {
            question:
                'Records yang kritis bagi kelangsungan operasi organisasi setelah bencana disebut…',
        },
        explanation:
            'Vital records harus diidentifikasi dan dilindungi khusus sebagai bagian dari rencana kelangsungan bisnis.',
    },
    {
        id: 'eth-2',
        areaId: 'data-ethics',
        question:
            'Which statement BEST describes the relationship between ethics and law in data handling?',
        options: [
            'If it is legal, it must be ethical',
            'Something can be legal but unethical',
            'Ethics applies only to personal data',
            'Data ethics is governed entirely by regulation',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pernyataan yang paling tepat tentang hubungan etika dan hukum dalam penanganan data adalah…',
            options: [
                'Jika legal, pasti etis',
                'Sesuatu bisa legal tetapi tidak etis',
                'Etika hanya berlaku untuk personal data',
                'Data ethics diatur sepenuhnya oleh regulasi',
            ],
        },
        explanation:
            'Hukum adalah batas minimum. Organisasi perlu menilai dampak penggunaan data terhadap individu dan masyarakat.',
    },
    {
        id: 'bd-3',
        areaId: 'big-data',
        question:
            'The approach in which a structure is applied to data only when it is read or analyzed is called:',
        options: [
            'Schema-on-write',
            'Schema-on-read',
            'Star schema',
            'Snowflake schema',
        ],
        answerIndex: 1,
        translation: {
            question:
                'Pendekatan di mana struktur data baru diterapkan saat data dibaca/dianalisis disebut…',
        },
        explanation:
            'Schema-on-read umum di data lake. DW tradisional memakai schema-on-write.',
    },
];

function shuffle<T>(items: T[]): T[] {
    const copy = [...items];

    for (let index = copy.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }

    return copy;
}

function pickDistractors(area: KnowledgeArea, count: number): string[] {
    return shuffle(knowledgeAreas.filter((other) => other.id !== area.id))
        .slice(0, count)
        .map((other) => other.name);
}

function buildAreaQuestion(
    area: KnowledgeArea,
    id: string,
    question: string,
    translatedQuestion: string,
    explanation: string,
): QuizQuestion {
    const options = shuffle([area.name, ...pickDistractors(area, 3)]);

    return {
        id,
        areaId: area.id,
        question,
        options,
        answerIndex: options.indexOf(area.name),
        translation: { question: translatedQuestion },
        explanation,
    };
}

/** An Indonesian phrase from the area content and its English wording. */
type Phrase = { text: string; textEn: string };

/**
 * Phrases that belong to exactly one knowledge area, so a "which area is
 * this?" question never has two correct answers.
 */
function uniquePhrases(
    area: KnowledgeArea,
    pick: (candidate: KnowledgeArea) => Phrase[],
): Phrase[] {
    return pick(area).filter(
        (phrase) =>
            !knowledgeAreas.some(
                (other) =>
                    other.id !== area.id &&
                    pick(other).some(
                        (otherPhrase) =>
                            otherPhrase.text === phrase.text ||
                            otherPhrase.textEn === phrase.textEn,
                    ),
            ),
    );
}

function pairPhrases(texts: string[], textsEn: string[]): Phrase[] {
    return texts.map((text, index) => ({ text, textEn: textsEn[index] }));
}

/**
 * Builds "which knowledge area is this?" questions from the area content,
 * so each attempt gets fresh variations.
 */
function generatedQuestions(area: KnowledgeArea): QuizQuestion[] {
    const questions = [
        buildAreaQuestion(
            area,
            `gen-def-${area.id}`,
            `Which knowledge area does this DMBOK definition describe?\n"${area.definitionEn}"`,
            `Definisi berikut milik knowledge area apa?\n"${area.definition}"`,
            `Definisi resmi ${area.name} (Bab ${area.chapter} DMBOK2). Artinya: ${area.definition}`,
        ),
    ];

    const activity = shuffle(
        uniquePhrases(area, (candidate) =>
            candidate.activities.map((group) => ({
                text: group.title,
                textEn: group.titleEn,
            })),
        ),
    )[0];

    if (activity) {
        questions.push(
            buildAreaQuestion(
                area,
                `gen-act-${area.id}`,
                `Which knowledge area includes the activity "${activity.textEn}"?`,
                `Aktivitas "${activity.textEn}" merupakan bagian dari knowledge area…`,
                `"${activity.textEn}" adalah aktivitas pada context diagram ${area.name}.`,
            ),
        );
    }

    const deliverable = shuffle(
        uniquePhrases(area, (candidate) =>
            pairPhrases(candidate.deliverables, candidate.deliverablesEn),
        ),
    )[0];

    if (deliverable) {
        questions.push(
            buildAreaQuestion(
                area,
                `gen-del-${area.id}`,
                `Which knowledge area produces the deliverable "${deliverable.textEn}"?`,
                `Deliverable "${deliverable.textEn}" dihasilkan oleh knowledge area…`,
                `"${deliverable.textEn}" tercantum sebagai deliverable ${area.name}.`,
            ),
        );
    }

    shuffle(
        uniquePhrases(area, (candidate) =>
            candidate.keyConcepts.map((concept) => ({
                text: concept.term,
                textEn: concept.termEn,
            })),
        ),
    )
        .slice(0, 2)
        .forEach((phrase, index) => {
            const concept = area.keyConcepts.find(
                (candidate) => candidate.term === phrase.text,
            )!;

            questions.push(
                buildAreaQuestion(
                    area,
                    `gen-concept-${area.id}-${index}`,
                    `Which knowledge area primarily covers the concept "${concept.termEn}"?`,
                    `Konsep "${concept.termEn}" terutama dibahas dalam knowledge area…`,
                    `${concept.termEn} (${area.name}): ${concept.description}`,
                ),
            );
        });

    shuffle(pairPhrases(area.goals, area.goalsEn))
        .slice(0, 1)
        .forEach((goal) => {
            questions.push(
                buildAreaQuestion(
                    area,
                    `gen-goal-${area.id}`,
                    `Which knowledge area has the following goal?\n"${goal.textEn}"`,
                    `Tujuan berikut milik knowledge area apa?\n"${goal.text}"`,
                    `Ini salah satu goals ${area.name}.`,
                ),
            );
        });

    return questions;
}

function questionsForTopic(topicId: string): QuizQuestion[] {
    const area = knowledgeAreas.find((candidate) => candidate.id === topicId);

    return [
        ...curatedQuestions.filter((question) => question.areaId === topicId),
        ...(area ? generatedQuestions(area) : []),
    ];
}

export const allTopicIds = [
    dataManagementOverviewId,
    ...knowledgeAreas.map((area) => area.id),
];

export function buildPracticeQuiz(
    topicIds: string[],
    size: number,
): QuizQuestion[] {
    const pool = topicIds.flatMap((topicId) => questionsForTopic(topicId));

    return shuffle(pool).slice(0, size);
}

/**
 * Builds a CDMP-style simulation: questions are drawn per topic in
 * proportion to the exam weights; any shortfall is topped up from the
 * remaining pool so the requested size is always met.
 */
export function buildExamSimulation(size: number): QuizQuestion[] {
    const allocation = allocateByWeight(size);
    const selected: QuizQuestion[] = [];
    const leftovers: QuizQuestion[] = [];

    for (const [topicId, count] of Object.entries(allocation)) {
        const pool = shuffle(questionsForTopic(topicId));

        selected.push(...pool.slice(0, count));
        leftovers.push(...pool.slice(count));
    }

    if (selected.length < size) {
        selected.push(...shuffle(leftovers).slice(0, size - selected.length));
    }

    return shuffle(selected);
}
