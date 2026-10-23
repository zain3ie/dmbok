import type { KnowledgeArea } from './types';

const infographicBase = 'https://edge.growthzonecms.com/sites/2326/2025/04';

/**
 * Knowledge areas from DAMA-DMBOK2R. Content is summarized and paraphrased
 * in Indonesian for learning purposes; the official context diagrams are
 * linked (unaltered) from dama.org under CC BY-ND 4.0.
 */
export const knowledgeAreas: KnowledgeArea[] = [
    {
        id: 'data-governance',
        chapter: 3,
        name: 'Data Governance',
        nameId: 'Tata Kelola Data',
        shortLabel: ['Data', 'Governance'],
        color: '#334155',
        inWheel: true,
        infographic: `${infographicBase}/x-3.png`,
        summary:
            'Pusat DAMA Wheel: memberi arah, wewenang, dan pengawasan atas seluruh knowledge area lain.',
        definition:
            'Pelaksanaan wewenang, kontrol, dan pengambilan keputusan bersama (perencanaan, pemantauan, dan penegakan) atas pengelolaan aset data.',
        definitionEn:
            'The exercise of authority, control, and shared decision-making (planning, monitoring, and enforcement) over the management of data assets.',
        goals: [
            'Memungkinkan organisasi mengelola data sebagai aset.',
            'Mendefinisikan, menyetujui, mengomunikasikan, dan menerapkan prinsip, kebijakan, prosedur, metrik, tools, dan tanggung jawab pengelolaan data.',
            'Memantau dan mengarahkan kepatuhan kebijakan, penggunaan data, dan aktivitas pengelolaan data.',
        ],
        goalsEn: [
            'Enable an organization to manage its data as an asset.',
            'Define, approve, communicate, and implement principles, policies, procedures, metrics, tools, and responsibilities for data management.',
            'Monitor and guide policy compliance, data usage, and management activities.',
        ],
        businessDrivers: [
            'Kepatuhan regulasi (mis. pelindungan data pribadi, pelaporan)',
            'Mengurangi risiko dan biaya akibat data yang buruk',
            'Meningkatkan nilai data untuk analitik dan pengambilan keputusan',
            'Menyelaraskan pengelolaan data lintas unit bisnis',
        ],
        inputs: [
            'Strategi & tujuan bisnis',
            'Strategi & tujuan TI',
            'Strategi data & data management',
            'Kebijakan & standar organisasi',
            'Asesmen budaya bisnis',
            'Asesmen maturity data',
            'Praktik TI',
            'Persyaratan regulasi',
        ],
        activities: [
            {
                title: 'Definisikan Data Governance untuk organisasi',
                titleEn: 'Define Data Governance for the Organization',
                type: 'P',
                items: [
                    'Kembangkan strategi Data Governance',
                    'Lakukan readiness assessment',
                    'Lakukan discovery & penyelarasan bisnis',
                    'Kembangkan titik sentuh organisasi (touchpoints)',
                ],
            },
            {
                title: 'Susun strategi Data Governance',
                titleEn: 'Develop Data Governance Strategy',
                type: 'P',
                items: [
                    'Definisikan operating framework DG',
                    'Kembangkan tujuan, prinsip, dan kebijakan',
                    'Danai (underwrite) proyek data management',
                    'Libatkan change management',
                    'Kelola isu data (issue management)',
                    'Asesmen kebutuhan kepatuhan regulasi',
                ],
            },
            {
                title: 'Implementasikan Data Governance',
                titleEn: 'Implement Data Governance',
                type: 'O',
                items: [
                    'Sponsori standar & prosedur data',
                    'Kembangkan business glossary',
                    'Koordinasi dengan kelompok arsitektur',
                    'Sponsori valuasi aset data',
                ],
            },
            {
                title: 'Tanamkan (embed) Data Governance',
                titleEn: 'Embed Data Governance',
                type: 'C',
                items: [
                    'Pantau kepatuhan & efektivitas',
                    'Ukur dan komunikasikan nilai',
                    'Jadikan bagian dari operasi sehari-hari',
                ],
            },
        ],
        deliverables: [
            'Strategi Data Governance',
            'Strategi data',
            'Roadmap bisnis / DG',
            'Prinsip data, kebijakan & proses DG',
            'Operating framework',
            'Business glossary',
            'Scorecard DG',
            'Rencana komunikasi',
            'Nilai data yang terukur',
        ],
        deliverablesEn: [
            'Data Governance Strategy',
            'Data Strategy',
            'Business / Data Governance Strategy Roadmap',
            'Data Principles, Data Governance Policies, Processes',
            'Operating Framework',
            'Business Glossary',
            'Data Governance Scorecard',
            'Communications Plan',
            'Recognized Data Value',
        ],
        suppliers: [
            'Eksekutif bisnis',
            'Data Steward',
            'Data Owner',
            'Subject Matter Expert',
            'Asesor maturity',
            'Regulator',
            'Enterprise Architect',
        ],
        participants: [
            'Steering Committee',
            'CIO',
            'CDO / Chief Data Steward',
            'Executive, Coordinating & Business Data Steward',
            'Data Governance Council',
            'Tim kepatuhan',
            'Change Manager',
            'PMO & Audit',
        ],
        consumers: [
            'Badan Data Governance',
            'Project Manager',
            'Tim kepatuhan',
            'Komunitas & tim DM',
            'Manajemen bisnis',
            'Kelompok arsitektur',
            'Organisasi mitra',
        ],
        techniques: [
            'Pesan yang ringkas (concise messaging)',
            'Daftar kontak',
            'Logo / identitas program',
        ],
        tools: [
            'Website / portal DG',
            'Business glossary',
            'Workflow tools',
            'Document management tools',
            'Scorecard Data Governance',
        ],
        metrics: [
            'Kepatuhan terhadap regulasi & kebijakan internal',
            'Nilai (value) yang dihasilkan',
            'Efektivitas',
            'Keberlanjutan (sustainability)',
        ],
        keyConcepts: [
            {
                term: 'Data Stewardship',
                termEn: 'Data Stewardship',
                description:
                    'Akuntabilitas dan tanggung jawab atas data dan proses agar aset data dikendalikan dan digunakan secara efektif. Steward bisa formal (jabatan) maupun informal.',
            },
            {
                term: 'Operating model',
                termEn: 'Operating Model',
                description:
                    'Struktur organisasi DG: centralized (terpusat), replicated/distributed, atau federated. Pilihannya bergantung pada budaya dan struktur organisasi.',
            },
            {
                term: 'DG ≠ Data Management',
                termEn: 'DG ≠ Data Management',
                description:
                    'DG memastikan data dikelola dengan benar (pengawasan), sedangkan Data Management mengelola data untuk mencapai tujuan. Analogi DMBOK: DG bagi DM seperti audit bagi akuntansi.',
            },
            {
                term: 'Kebijakan, standar, prosedur',
                termEn: 'Policies, Standards, Procedures',
                description:
                    'Kebijakan menjawab "apa" dan "mengapa" (wajib). Standar adalah aturan yang dapat diuji. Prosedur adalah langkah "bagaimana".',
            },
            {
                term: 'Business Glossary',
                termEn: 'Business Glossary',
                description:
                    'Daftar istilah bisnis yang disepakati beserta definisi, pemilik, dan relasinya. Ini fondasi pemahaman bersama atas data.',
            },
        ],
        example:
            'Perusahaan membentuk Data Governance Council yang diketuai CDO. Council menetapkan bahwa setiap data master pelanggan wajib punya Data Owner di unit bisnis, menyepakati definisi "Pelanggan Aktif" di business glossary, dan meninjau skor kualitas data setiap kuartal.',
    },
    {
        id: 'data-architecture',
        chapter: 4,
        name: 'Data Architecture',
        nameId: 'Arsitektur Data',
        shortLabel: ['Data', 'Architecture'],
        color: '#1d4ed8',
        inWheel: true,
        infographic: `${infographicBase}/x-13.png`,
        summary:
            'Cetak biru (blueprint) kebutuhan data enterprise yang menyelaraskan investasi data dengan strategi bisnis.',
        definition:
            'Mengidentifikasi kebutuhan data enterprise (apa pun strukturnya), lalu merancang dan memelihara blueprint induk untuk memenuhinya. Blueprint ini memandu integrasi data, mengendalikan aset data, dan menyelaraskan investasi data dengan strategi bisnis.',
        definitionEn:
            'Identifying the data needs of the enterprise (regardless of structure), and designing and maintaining the master blueprints to meet those needs.',
        goals: [
            'Mengidentifikasi kebutuhan penyimpanan dan pemrosesan data.',
            'Merancang struktur dan rencana untuk memenuhi kebutuhan data saat ini dan jangka panjang.',
            'Menyelaraskan strategi data dengan strategi bisnis dan menyiapkan organisasi menghadapi perubahan.',
        ],
        goalsEn: [
            'Identify data storage and processing requirements.',
            'Design structures and plans to meet the current and long-term data requirements of the enterprise.',
            'Align data strategy with business strategy and strategically prepare the organization for change.',
        ],
        businessDrivers: [
            'Menjembatani strategi bisnis dan eksekusi teknis',
            'Mengurangi redundansi & kompleksitas sistem',
            'Mempercepat delivery proyek dengan desain yang konsisten',
        ],
        inputs: [
            'Arsitektur enterprise',
            'Arsitektur bisnis',
            'Standar & tujuan TI',
            'Strategi data',
            'Rencana proyek',
        ],
        activities: [
            {
                title: 'Bangun praktik Data Architecture',
                titleEn: 'Establish Data Architecture Practice',
                type: 'P',
                items: [
                    'Evaluasi spesifikasi arsitektur data yang ada',
                    'Kembangkan roadmap',
                    'Kelola kebutuhan enterprise di dalam proyek',
                ],
            },
            {
                title: 'Integrasikan dengan Enterprise Architecture',
                titleEn: 'Integrate with Enterprise Architecture',
                type: 'O',
                items: [
                    'Selaraskan dengan arsitektur bisnis, aplikasi, dan teknologi',
                    'Tinjau desain proyek terhadap standar arsitektur',
                ],
            },
        ],
        deliverables: [
            'Desain arsitektur data (Enterprise Data Model, data flow)',
            'Persyaratan implementasi',
            'Roadmap arsitektur',
            'Standar & prinsip arsitektur data',
            'Data value chain',
        ],
        deliverablesEn: [
            'Data Architecture Design (Enterprise Data Model, Data Flows)',
            'Implementation Requirements',
            'Architecture Roadmap',
            'Data Architecture Standards and Principles',
            'Data Value Chain',
        ],
        suppliers: [
            'Enterprise Architect',
            'Data Steward',
            'Subject Matter Expert',
            'Data Analyst',
        ],
        participants: [
            'Enterprise Data Architect',
            'Data Modeler',
            'Business Architect',
            'Solution Architect',
            'Project Architect',
        ],
        consumers: [
            'Database Administrator',
            'Software Developer',
            'Project Manager',
            'Tim dukungan & operasi',
        ],
        techniques: [
            'Lifecycle projection',
            'Kejelasan diagram (diagramming clarity)',
            'Value chain analysis',
            'Matriks CRUD data vs proses',
        ],
        tools: [
            'Tools pemodelan data',
            'Software manajemen aset',
            'Aplikasi desain grafis / diagram',
        ],
        metrics: [
            'Tingkat kepatuhan terhadap standar arsitektur',
            'Tren implementasi',
            'Nilai bisnis dari arsitektur data',
        ],
        keyConcepts: [
            {
                term: 'Enterprise Data Model (EDM)',
                termEn: 'Enterprise Data Model (EDM)',
                description:
                    'Model data holistik tingkat enterprise yang independen dari implementasi. Isinya entitas inti, definisi, dan relasinya, biasanya berlapis: subject area → konseptual → logis.',
            },
            {
                term: 'Data Flow Design',
                termEn: 'Data Flow Design',
                description:
                    'Mendokumentasikan alur data antar sistem, proses bisnis, dan lokasi, sering dalam bentuk matriks atau diagram lineage tingkat tinggi.',
            },
            {
                term: 'Zachman Framework',
                termEn: 'Zachman Framework',
                description:
                    'Ontologi 6×6 (What, How, Where, Who, When, Why × perspektif Executive hingga Operasional) yang banyak dijadikan acuan arsitektur enterprise.',
            },
            {
                term: 'Artefak vs aktivitas',
                termEn: 'Artifacts vs. Activities',
                description:
                    'Arsitektur bisa berarti artefak (spesifikasi atau blueprint) atau aktivitas (proses merancang, memelihara, dan menegakkan blueprint tersebut).',
            },
        ],
        example:
            'Tim arsitek membuat Enterprise Data Model yang mendefinisikan entitas Aset, Lokasi, Work Order, dan Material. Mereka lalu memetakan sistem mana yang menjadi sumber kebenaran untuk tiap entitas sebelum proyek ERP baru dimulai.',
    },
    {
        id: 'data-modeling',
        chapter: 5,
        name: 'Data Modeling & Design',
        nameId: 'Pemodelan & Desain Data',
        shortLabel: ['Data Modeling', '& Design'],
        color: '#0e7490',
        inWheel: true,
        infographic: `${infographicBase}/x-10.png`,
        summary:
            'Menemukan, menganalisis, dan merepresentasikan kebutuhan data dalam bentuk model data yang presisi.',
        definition:
            'Proses menemukan, menganalisis, dan menentukan cakupan kebutuhan data, lalu merepresentasikan dan mengomunikasikannya dalam bentuk presisi yang disebut model data.',
        definitionEn:
            'The process of discovering, analyzing, and scoping data requirements, and then representing and communicating these data requirements in a precise form called the data model.',
        goals: [
            'Mengonfirmasi dan mendokumentasikan pemahaman atas berbagai perspektif data.',
            'Menghasilkan aplikasi yang lebih selaras dengan kebutuhan bisnis saat ini dan masa depan.',
            'Menjadi fondasi inisiatif seperti MDM dan Data Governance.',
        ],
        goalsEn: [
            'Confirm and document understanding of different perspectives on data.',
            'Produce applications that more closely align with current and future business requirements.',
            'Create a foundation for broad-scoped initiatives such as Master Data Management and Data Governance.',
        ],
        businessDrivers: [
            'Menyediakan kosakata umum tentang data',
            'Menangkap pengetahuan eksplisit tentang data & sistem',
            'Menjadi alat komunikasi utama dalam proyek',
        ],
        inputs: [
            'Arsitektur data yang ada',
            'Kebutuhan bisnis',
            'Standar data',
            'Model data yang ada (sumber)',
        ],
        activities: [
            {
                title: 'Rencanakan pemodelan data',
                titleEn: 'Plan for Data Modeling',
                type: 'P',
                items: ['Tetapkan standar, praktik, dan tools pemodelan'],
            },
            {
                title: 'Bangun model data',
                titleEn: 'Build the Data Model',
                type: 'D',
                items: ['Model konseptual', 'Model logis', 'Model fisik'],
            },
            {
                title: 'Tinjau model data',
                titleEn: 'Review the Data Models',
                type: 'C',
                items: [
                    'Validasi bersama pengguna bisnis & teknis',
                    'Gunakan scorecard kualitas model',
                ],
            },
            {
                title: 'Kelola model data',
                titleEn: 'Maintain the Data Models',
                type: 'O',
                items: [
                    'Version control model',
                    'Pemeliharaan model seiring perubahan',
                ],
            },
        ],
        deliverables: [
            'Model data konseptual, logis, dan fisik',
            'DDL (Data Definition Language)',
            'Metadata / data dictionary',
            'Dokumentasi lineage',
        ],
        deliverablesEn: [
            'Conceptual, Logical, and Physical Data Models',
            'DDL (Data Definition Language)',
            'Metadata / Data Dictionary',
            'Lineage Documentation',
        ],
        suppliers: [
            'Business Professional',
            'Business Analyst',
            'Data Architect',
            'Database Administrator',
            'Software Developer',
        ],
        participants: [
            'Data Modeler',
            'Data Architect',
            'Business Analyst',
            'Database Administrator',
            'Developer',
        ],
        consumers: [
            'Business Analyst',
            'Database Administrator',
            'Software Developer',
            'Data Steward',
            'Data Quality Analyst',
        ],
        techniques: [
            'Konvensi penamaan',
            'Desain database (normalisasi / denormalisasi)',
            'Pemilihan skema (relasional, dimensional, dll.)',
        ],
        tools: [
            'Tools pemodelan data',
            'Tools lineage',
            'Data profiling tools',
            'Metadata repository',
            'Model pattern',
        ],
        metrics: [
            'Data Model Scorecard (kualitas model)',
            'Kelengkapan & kebenaran definisi',
            'Kepatuhan standar penamaan',
        ],
        keyConcepts: [
            {
                term: 'Konseptual → Logis → Fisik',
                termEn: 'Conceptual → Logical → Physical',
                description:
                    'Konseptual: konsep bisnis & relasi tingkat tinggi. Logis: atribut dan relasi detail, independen dari teknologi. Fisik: tabel, kolom, tipe data, dan indeks untuk teknologi tertentu.',
            },
            {
                term: 'Skema pemodelan',
                termEn: 'Data Modeling Schemes',
                description:
                    'Relasional, dimensional, object-oriented (UML), fact-based, time-based (Data Vault, Anchor), dan NoSQL (dokumen, kolom, graf, key-value).',
            },
            {
                term: 'Normalisasi',
                termEn: 'Normalization',
                description:
                    'Penerapan aturan (1NF, 2NF, 3NF, BCNF, dst.) untuk mengurangi redundansi. Denormalisasi kadang dilakukan demi performa baca.',
            },
            {
                term: 'Komponen model',
                termEn: 'Data Model Components',
                description:
                    'Entitas, relasi (dengan kardinalitas & arity), atribut, dan domain (himpunan nilai yang diizinkan).',
            },
            {
                term: 'Kunci (keys)',
                termEn: 'Keys',
                description:
                    'Candidate, primary, alternate, surrogate, dan foreign key menentukan identitas dan relasi antar entitas.',
            },
        ],
        example:
            'Sebelum membangun aplikasi inspeksi peralatan, data modeler membuat model konseptual (Peralatan, Inspeksi, Temuan). Model itu diturunkan ke model logis lengkap dengan atribut dan kardinalitas, lalu ke model fisik berupa tabel dan indeks di database.',
    },
    {
        id: 'data-storage',
        chapter: 6,
        name: 'Data Storage & Operations',
        nameId: 'Penyimpanan & Operasi Data',
        shortLabel: ['Data Storage', '& Operations'],
        color: '#0f766e',
        inWheel: true,
        infographic: `${infographicBase}/x-11.png`,
        summary:
            'Desain, implementasi, dan dukungan data yang tersimpan, termasuk database, backup, dan performa.',
        definition:
            'Desain, implementasi, dan dukungan terhadap data yang disimpan untuk memaksimalkan nilainya.',
        definitionEn:
            'The design, implementation, and support of stored data to maximize its value.',
        goals: [
            'Mengelola ketersediaan data sepanjang siklus hidupnya.',
            'Menjamin integritas aset data.',
            'Mengelola performa transaksi data.',
        ],
        goalsEn: [
            'Manage the availability of data throughout the data lifecycle.',
            'Ensure the integrity of data assets.',
            'Manage the performance of data transactions.',
        ],
        businessDrivers: [
            'Kelangsungan bisnis (business continuity)',
            'Ketersediaan & performa sistem kritis',
        ],
        inputs: [
            'Arsitektur data',
            'Kebutuhan data',
            'Model data',
            'Service Level Agreement (SLA)',
        ],
        activities: [
            {
                title: 'Kelola teknologi database',
                titleEn: 'Manage Database Technology',
                type: 'O',
                items: [
                    'Pahami karakteristik teknologi database',
                    'Evaluasi teknologi database',
                    'Kelola & pantau teknologi database',
                ],
            },
            {
                title: 'Kelola database',
                titleEn: 'Manage Databases',
                type: 'D',
                items: [
                    'Pahami kebutuhan (SLA, volume, akses)',
                    'Rencanakan business continuity (backup & recovery)',
                    'Kembangkan instance database',
                    'Kelola performa database',
                    'Kelola test data set',
                    'Kelola migrasi data',
                ],
            },
        ],
        deliverables: [
            'Kriteria evaluasi teknologi database',
            'Lingkungan database (dev, test, prod)',
            'Data yang dimigrasikan / direplikasi',
            'Rencana business continuity',
            'SLA performa database',
        ],
        deliverablesEn: [
            'Database Technology Evaluation Criteria',
            'Database Environments (Dev, Test, Prod)',
            'Migrated / Replicated Data',
            'Business Continuity Plans',
            'Database Performance SLAs',
        ],
        suppliers: [
            'Data Architect',
            'Data Modeler',
            'Software Developer',
            'Application Tester',
        ],
        participants: ['Database Administrator', 'Data Architect'],
        consumers: [
            'Data Modeler',
            'Software Developer',
            'Application Tester',
            'Infrastructure Operations',
        ],
        techniques: [
            'Lingkungan dev/test/prod terpisah',
            'Standar penamaan objek fisik',
            'Script untuk semua perubahan (change-as-code)',
        ],
        tools: [
            'Tools pemodelan data',
            'Tools pemantauan database',
            'Tools manajemen database',
            'Tools dukungan developer',
        ],
        metrics: [
            'Metrik penyimpanan (kapasitas, pertumbuhan)',
            'Metrik performa (waktu respons, throughput)',
            'Metrik operasional (backup sukses, downtime)',
            'Metrik layanan (pencapaian SLA)',
        ],
        keyConcepts: [
            {
                term: 'ACID vs BASE',
                termEn: 'ACID vs BASE',
                description:
                    'ACID (Atomicity, Consistency, Isolation, Durability) menjamin konsistensi transaksi. BASE (Basically Available, Soft state, Eventual consistency) umum di sistem terdistribusi/NoSQL.',
            },
            {
                term: 'CAP Theorem',
                termEn: 'CAP Theorem',
                description:
                    'Sistem terdistribusi hanya dapat menjamin dua dari tiga hal: Consistency, Availability, Partition tolerance.',
            },
            {
                term: 'Peran DBA',
                termEn: 'DBA Roles',
                description:
                    'Production DBA (operasional, backup, performa), Application DBA (dukungan aplikasi tertentu), dan Procedural/Development DBA (stored procedure, desain).',
            },
            {
                term: 'Business continuity',
                termEn: 'Business Continuity',
                description:
                    'Rencana backup & recovery dengan target RPO (Recovery Point Objective) dan RTO (Recovery Time Objective).',
            },
            {
                term: 'Arsitektur database',
                termEn: 'Database Architecture',
                description:
                    'Centralized, distributed/federated, virtualisasi, dan cloud.',
            },
        ],
        example:
            'DBA menyiapkan replikasi database ke server cadangan, menetapkan backup dengan RPO 1 jam, dan memantau query lambat agar dashboard operasional tetap responsif.',
    },
    {
        id: 'data-security',
        chapter: 7,
        name: 'Data Security',
        nameId: 'Keamanan Data',
        shortLabel: ['Data', 'Security'],
        color: '#15803d',
        inWheel: true,
        infographic: `${infographicBase}/x-2.png`,
        summary:
            'Menjamin privasi, kerahasiaan, dan akses yang tepat melalui autentikasi, otorisasi, dan audit.',
        definition:
            'Definisi, perencanaan, pengembangan, dan pelaksanaan kebijakan serta prosedur keamanan untuk menyediakan autentikasi, otorisasi, akses, dan audit yang tepat atas aset data dan informasi.',
        definitionEn:
            'Definition, planning, development, and execution of security policies and procedures to provide proper authentication, authorization, access, and auditing of data and information assets.',
        goals: [
            'Memungkinkan akses yang tepat dan mencegah akses yang tidak tepat ke aset data.',
            'Memahami dan mematuhi regulasi & kebijakan privasi, perlindungan, dan kerahasiaan.',
            'Memastikan kebutuhan privasi dan kerahasiaan seluruh stakeholder ditegakkan dan diaudit.',
        ],
        goalsEn: [
            'Enable appropriate, and prevent inappropriate, access to data assets.',
            'Understand and comply with all relevant regulations and policies for privacy, protection, and confidentiality.',
            'Ensure that the privacy and confidentiality needs of all stakeholders are enforced and audited.',
        ],
        businessDrivers: [
            'Mengurangi risiko (kebocoran, denda, reputasi)',
            'Pertumbuhan bisnis (kepercayaan pelanggan & mitra)',
            'Keamanan sebagai aset: data diklasifikasikan dan dilindungi sesuai nilainya',
        ],
        inputs: [
            'Strategi & tujuan bisnis',
            'Aturan & proses bisnis',
            'Kebutuhan kepatuhan regulasi',
            'Arsitektur enterprise',
            'Taksonomi klasifikasi data',
        ],
        activities: [
            {
                title: 'Identifikasi kebutuhan keamanan data',
                titleEn: 'Identify Data Security Requirements',
                type: 'P',
                items: ['Kebutuhan bisnis', 'Kebutuhan regulasi'],
            },
            {
                title: 'Definisikan kebijakan keamanan data',
                titleEn: 'Define Data Security Policy',
                type: 'C',
                items: [],
            },
            {
                title: 'Definisikan standar keamanan data',
                titleEn: 'Define Data Security Standards',
                type: 'D',
                items: [
                    'Tingkat kerahasiaan',
                    'Kategori regulasi',
                    'Peran keamanan (security roles)',
                    'Risiko keamanan',
                ],
            },
            {
                title: 'Asesmen risiko keamanan saat ini',
                titleEn: 'Assess Current Security Risks',
                type: 'P',
                items: [],
            },
            {
                title: 'Implementasikan kontrol & prosedur',
                titleEn: 'Implement Controls and Procedures',
                type: 'O',
                items: [],
            },
        ],
        deliverables: [
            'Arsitektur keamanan data',
            'Kebijakan keamanan data',
            'Standar privasi & kerahasiaan',
            'Kontrol akses keamanan',
            'Matriks akses berbasis peran',
            'Log & laporan audit',
        ],
        deliverablesEn: [
            'Data Security Architecture',
            'Data Security Policies',
            'Data Privacy and Confidentiality Standards',
            'Data Security Access Controls',
            'Role-Based Access Matrix',
            'Audit Logs and Reports',
        ],
        suppliers: [
            'IT Steering Committee',
            'Enterprise Architect',
            'Pemerintah / regulator',
        ],
        participants: [
            'Data Steward',
            'Tim Information Security',
            'Internal Auditor',
            'Process Analyst',
        ],
        consumers: ['Pengguna bisnis', 'Auditor regulasi'],
        techniques: [
            'Matriks CRUD',
            'Penerapan patch keamanan segera',
            'Atribut keamanan di metadata',
            'Kebutuhan keamanan dalam requirement proyek',
            'Enkripsi & data masking',
        ],
        tools: [
            'Antivirus',
            'HTTPS / TLS',
            'Identity management',
            'Intrusion detection & prevention',
            'Firewall',
            'Metadata tracking',
        ],
        metrics: [
            'Implementasi keamanan (mis. % sistem ter-patch)',
            'Kesadaran keamanan (pelatihan)',
            'Insiden & eksposur data',
            'Kepatuhan regulasi',
        ],
        keyConcepts: [
            {
                term: '4A + Entitlement',
                termEn: "4 A's + Entitlement",
                description:
                    'Access, Audit, Authentication, Authorization, ditambah Entitlement, yaitu total hak akses yang dimiliki seorang pengguna.',
            },
            {
                term: 'Klasifikasi kerahasiaan',
                termEn: 'Confidentiality Classification',
                description:
                    'Contoh tingkat: General Audience (publik), Internal Use Only, Confidential, Restricted Confidential, Registered Confidential.',
            },
            {
                term: 'Kategori regulasi',
                termEn: 'Regulatory Categories',
                description:
                    'Mis. PII, data kesehatan, data finansial, data kartu pembayaran (PCI-DSS), dan data pribadi (GDPR, UU PDP).',
            },
            {
                term: 'Least privilege',
                termEn: 'Least Privilege',
                description:
                    'Pengguna hanya mendapat hak minimum yang dibutuhkan, dan hak dikelola lewat role/grup, bukan per individu.',
            },
            {
                term: 'Data masking',
                termEn: 'Data Masking',
                description:
                    'Persistent (statis) atau dinamis. Dipakai untuk lingkungan non-produksi atau pengguna yang tidak perlu melihat nilai asli.',
            },
        ],
        example:
            'Data gaji karyawan diklasifikasikan Confidential. Hanya role HR-Payroll yang dapat membacanya, salinan ke lingkungan testing di-masking, dan setiap akses dicatat di log audit.',
    },
    {
        id: 'data-integration',
        chapter: 8,
        name: 'Data Integration & Interoperability',
        nameId: 'Integrasi & Interoperabilitas Data',
        shortLabel: ['Data Integration', '& Interoperability'],
        color: '#4d7c0f',
        inWheel: true,
        infographic: `${infographicBase}/x.png`,
        summary:
            'Perpindahan dan konsolidasi data di dalam dan antar aplikasi serta organisasi (ETL, API, streaming).',
        definition:
            'Mengelola perpindahan dan konsolidasi data di dalam dan antar aplikasi serta organisasi.',
        definitionEn:
            'Managing the movement and consolidation of data within and between applications and organizations.',
        goals: [
            'Menyediakan data secara aman dan sesuai regulasi, dalam format dan waktu yang dibutuhkan.',
            'Menurunkan biaya & kompleksitas dengan model dan interface bersama.',
            'Mengidentifikasi event penting dan memicu alert/aksi otomatis.',
            'Mendukung BI, analitik, MDM, dan efisiensi operasional.',
        ],
        goalsEn: [
            'Provide data securely, with regulatory compliance, in the format and timeframe needed.',
            'Lower the cost and complexity of managing solutions by developing shared models and interfaces.',
            'Identify meaningful events and automatically trigger alerts and actions.',
            'Support Business Intelligence, analytics, Master Data Management, and operational efficiency efforts.',
        ],
        businessDrivers: [
            'Mengelola kompleksitas & biaya integrasi',
            'Kebutuhan data lintas aplikasi dan organisasi',
            'Migrasi & konsolidasi sistem',
        ],
        inputs: [
            'Strategi & kebutuhan bisnis',
            'Standar & kebijakan data',
            'Arsitektur enterprise & data',
            'Kebutuhan kualitas data',
            'Model data sumber & target',
        ],
        activities: [
            {
                title: 'Rencanakan & analisis',
                titleEn: 'Plan and Analyze',
                type: 'P',
                items: [
                    'Definisikan kebutuhan integrasi & lifecycle data',
                    'Lakukan data discovery',
                    'Dokumentasikan data lineage',
                    'Profil data',
                    'Kumpulkan business rules',
                ],
            },
            {
                title: 'Rancang solusi integrasi',
                titleEn: 'Design Data Integration Solutions',
                type: 'D',
                items: [
                    'Rancang arsitektur integrasi',
                    'Modelkan data hub, interface, pesan, dan layanan',
                    'Petakan sumber ke target (source-to-target mapping)',
                    'Rancang orkestrasi data',
                ],
            },
            {
                title: 'Kembangkan solusi integrasi',
                titleEn: 'Develop Data Integration Solutions',
                type: 'D',
                items: [
                    'Kembangkan layanan & aliran data',
                    'Kembangkan pendekatan migrasi',
                    'Kembangkan pendekatan publikasi',
                    'Kembangkan alur complex event processing',
                    'Pelihara metadata DII',
                ],
            },
            {
                title: 'Implementasikan & pantau',
                titleEn: 'Implement and Monitor',
                type: 'O',
                items: [],
            },
        ],
        deliverables: [
            'Arsitektur integrasi data',
            'Spesifikasi source-to-target mapping',
            'Alur ETL / ELT / streaming',
            'Layanan & API data',
            'Rencana migrasi',
            'Data lineage',
        ],
        deliverablesEn: [
            'Data Integration Architecture',
            'Source-to-Target Mapping Specifications',
            'ETL / ELT / Streaming Data Flows',
            'Data Services and APIs',
            'Migration Plan',
            'Data Lineage',
        ],
        suppliers: [
            'Data Producer',
            'IT Steering Committee',
            'Eksekutif & manajer',
            'Subject Matter Expert',
        ],
        participants: [
            'Data Architect',
            'Business & Data Analyst',
            'Data Modeler',
            'Data Steward',
            'ETL / Service / Interface Developer',
            'Project & Program Manager',
        ],
        consumers: [
            'Information Consumer',
            'Knowledge Worker',
            'Manajer & eksekutif',
        ],
        techniques: [
            'Hub-and-spoke',
            'Publish–subscribe',
            'Point-to-point',
            'Batch vs real-time / streaming',
            'Change Data Capture',
        ],
        tools: [
            'Data transformation engine (ETL/ELT)',
            'Data virtualization server',
            'Enterprise Service Bus (ESB)',
            'Business rules engine',
            'Data profiling tool',
            'Metadata repository',
        ],
        metrics: [
            'Ketersediaan data (data availability)',
            'Volume & kecepatan data',
            'Biaya & kompleksitas solusi (waktu develop, jumlah interface)',
        ],
        keyConcepts: [
            {
                term: 'ETL vs ELT',
                termEn: 'ETL vs ELT',
                description:
                    'ETL: Extract, Transform, lalu Load. ELT: Load dulu ke target (mis. data lake atau cloud DW), lalu transformasi dilakukan di sana.',
            },
            {
                term: 'Latency',
                termEn: 'Latency',
                description:
                    'Batch, micro-batch, near-real-time/event-driven, dan real-time synchronous. Pilih sesuai kebutuhan bisnis.',
            },
            {
                term: 'Change Data Capture (CDC)',
                termEn: 'Change Data Capture (CDC)',
                description:
                    'Menangkap perubahan di sumber sehingga hanya delta yang dipindahkan.',
            },
            {
                term: 'Interaction models',
                termEn: 'Interaction Models',
                description:
                    'Point-to-point (jumlah interface cepat membengkak), Hub-and-spoke (lewat pusat, interface berkurang), Publish–subscribe (pengirim tidak perlu tahu penerimanya).',
            },
            {
                term: 'Canonical Data Model',
                termEn: 'Canonical Data Model',
                description:
                    'Format pesan bersama yang dipakai semua sistem sehingga tiap sistem cukup memetakan datanya ke satu model.',
            },
        ],
        example:
            'Data sensor dikirim lewat message broker (publish–subscribe), sedangkan data work order dari ERP ditarik malam hari via ETL batch ke data warehouse dengan source-to-target mapping yang terdokumentasi.',
    },
    {
        id: 'document-content',
        chapter: 9,
        name: 'Document & Content Management',
        nameId: 'Manajemen Dokumen & Konten',
        shortLabel: ['Document &', 'Content Mgmt'],
        color: '#a16207',
        inWheel: true,
        infographic: `${infographicBase}/x-5.png`,
        summary:
            'Mengelola siklus hidup data tidak terstruktur: dokumen, rekaman (records), dan konten dalam media apa pun.',
        definition:
            'Aktivitas perencanaan, implementasi, dan kontrol untuk mengelola siklus hidup data dan informasi dalam bentuk atau media apa pun, terutama data tidak terstruktur.',
        definitionEn:
            'Planning, implementation, and control activities for lifecycle management of data and information found in any form or medium.',
        goals: [
            'Mematuhi kewajiban hukum dan ekspektasi pelanggan terkait manajemen rekaman (records).',
            'Menjamin penyimpanan, pengambilan, dan penggunaan dokumen & konten yang efektif dan efisien.',
            'Menjamin integrasi antara konten terstruktur dan tidak terstruktur.',
        ],
        goalsEn: [
            'Comply with legal obligations and customer expectations regarding records management.',
            'Ensure effective and efficient storage, retrieval, and use of documents and content.',
            'Ensure integration capabilities between structured and unstructured content.',
        ],
        businessDrivers: [
            'Kepatuhan regulasi & kesiapan litigasi (e-discovery)',
            'Efisiensi dalam menemukan dan memakai kembali informasi',
        ],
        inputs: [
            'Strategi & tujuan bisnis',
            'Kebijakan hukum & retensi',
            'Kebijakan TI',
            'Kebutuhan e-discovery',
            'Konten & dokumen yang ada',
        ],
        activities: [
            {
                title: 'Rencanakan manajemen siklus hidup',
                titleEn: 'Plan for Lifecycle Management',
                type: 'P',
                items: [
                    'Rencanakan manajemen rekaman',
                    'Kembangkan strategi konten',
                ],
            },
            {
                title: 'Buat kebijakan penanganan konten',
                titleEn: 'Create Content Handling Policies',
                type: 'C',
                items: [
                    'Kebijakan media sosial',
                    'Kebijakan akses perangkat',
                    'Tangani permintaan legal discovery',
                ],
            },
            {
                title: 'Definisikan arsitektur informasi',
                titleEn: 'Define Information Architecture',
                type: 'D',
                items: [],
            },
            {
                title: 'Kelola siklus hidup',
                titleEn: 'Manage the Lifecycle',
                type: 'O',
                items: [
                    'Tangkap (capture) rekaman & konten',
                    'Kelola versi & kontrol',
                    'Backup & recovery',
                    'Kelola retensi & disposisi',
                    'Audit dokumen / rekaman',
                ],
            },
            {
                title: 'Publikasikan & sampaikan konten',
                titleEn: 'Publish and Deliver Content',
                type: 'O',
                items: [],
            },
        ],
        deliverables: [
            'Strategi manajemen konten & rekaman',
            'Kebijakan & prosedur',
            'Repositori konten',
            'Rekaman yang dikelola dalam berbagai format',
            'Jejak audit (audit trail)',
        ],
        deliverablesEn: [
            'Content and Records Management Strategy',
            'Policies and Procedures',
            'Content Repository',
            'Managed Records in Many Media Formats',
            'Audit Trail',
        ],
        suppliers: ['Karyawan', 'Pihak eksternal'],
        participants: [
            'Records Manager',
            'Content Manager',
            'Web Master',
            'Information Architect',
        ],
        consumers: [
            'Pengguna bisnis',
            'Tim TI',
            'Pemerintah / regulator',
            'Auditor',
            'Pelanggan eksternal',
        ],
        techniques: [
            'Kebijakan media sosial',
            'Kebijakan akses perangkat',
            'Kesiapan e-discovery',
            'Taksonomi & controlled vocabulary',
            'Retention schedule',
        ],
        tools: [
            'Enterprise Content Management (ECM)',
            'Collaboration tools',
            'Controlled vocabulary & metadata tools',
            'Format markup & pertukaran standar (XML, JSON)',
            'Teknologi e-discovery',
        ],
        metrics: [
            'Kepatuhan retensi & disposisi',
            'ROI sistem ECM',
            'KPI penggunaan',
            'Hasil audit rekaman',
        ],
        keyConcepts: [
            {
                term: 'Record vs Document vs Content',
                termEn: 'Record vs Document vs Content',
                description:
                    'Dokumen adalah objek informasi (elektronik/kertas). Record adalah dokumen yang menjadi bukti aktivitas/transaksi dan punya kewajiban retensi. Content adalah isi informasi dalam wadah apa pun.',
            },
            {
                term: 'GARP',
                termEn: 'GARP',
                description:
                    'Generally Accepted Recordkeeping Principles (ARMA): Accountability, Integrity, Protection, Compliance, Availability, Retention, Disposition, Transparency.',
            },
            {
                term: 'Taksonomi & ontologi',
                termEn: 'Taxonomies and Ontologies',
                description:
                    'Kosakata terkontrol untuk klasifikasi: flat, faceted, hierarchical, network. Ontologi menambahkan relasi semantik.',
            },
            {
                term: 'E-discovery',
                termEn: 'E-discovery',
                description:
                    'Kemampuan menemukan dan menyerahkan informasi elektronik untuk keperluan hukum (model EDRM).',
            },
            {
                term: 'Vital records',
                termEn: 'Vital Records',
                description:
                    'Rekaman yang kritis bagi kelangsungan operasi organisasi setelah bencana.',
            },
        ],
        example:
            'SOP, gambar teknik, dan sertifikat kalibrasi disimpan di ECM dengan kontrol versi dan metadata nomor tag peralatan. Dokumen yang melewati masa retensi didisposisi sesuai retention schedule.',
    },
    {
        id: 'reference-master',
        chapter: 10,
        name: 'Reference & Master Data',
        nameId: 'Data Referensi & Master',
        shortLabel: ['Reference &', 'Master Data'],
        color: '#c2410c',
        inWheel: true,
        infographic: `${infographicBase}/x-4.png`,
        summary:
            'Mengelola data bersama (pelanggan, produk, aset, kode) agar konsisten dan menjadi "golden record".',
        definition:
            'Mengelola data yang dipakai bersama untuk mencapai tujuan organisasi, mengurangi risiko redundansi data, menjamin kualitas yang lebih tinggi, dan menurunkan biaya integrasi data.',
        definitionEn:
            'Managing shared data to meet organizational goals, reduce risks associated with data redundancy, ensure higher quality, and reduce the costs of data integration.',
        goals: [
            'Memungkinkan berbagi aset informasi lintas domain bisnis dan aplikasi.',
            'Menyediakan sumber otoritatif untuk data master & referensi yang terekonsiliasi dan berkualitas.',
            'Menurunkan biaya & kompleksitas lewat standar, model data umum, dan pola integrasi.',
        ],
        goalsEn: [
            'Enable sharing of information assets across business domains and applications within an organization.',
            'Provide an authoritative source of reconciled and quality-assessed master and reference data.',
            'Lower cost and complexity through use of standards, common data models, and integration patterns.',
        ],
        businessDrivers: [
            'Memenuhi kebutuhan data lintas organisasi',
            'Mengelola kualitas data',
            'Mengelola biaya integrasi data',
            'Mengurangi risiko',
        ],
        inputs: [
            'Kebutuhan bisnis',
            'Kebutuhan data lintas fungsi',
            'Model data',
            'Kebijakan & standar data',
            'Data dari sistem sumber',
        ],
        activities: [
            {
                title: 'Definisikan pendorong & kebutuhan',
                titleEn: 'Identify Drivers and Requirements',
                type: 'P',
                items: [
                    'Pendorong & kebutuhan MDM',
                    'Pendorong & kebutuhan reference data',
                ],
            },
            {
                title: 'Evaluasi sumber & rancang pendekatan',
                titleEn:
                    'Evaluate Data Sources and Define the Architectural Approach',
                type: 'D',
                items: [
                    'Evaluasi & asesmen sumber data',
                    'Definisikan pendekatan arsitektur',
                    'Modelkan data master & reference data set',
                ],
            },
            {
                title: 'Definisikan proses stewardship & pemeliharaan',
                titleEn: 'Define Stewardship and Maintenance Processes',
                type: 'P',
                items: [],
            },
            {
                title: 'Tetapkan kebijakan governance untuk menegakkan penggunaan',
                titleEn: 'Establish Governance Policies to Enforce Use',
                type: 'C',
                items: [],
            },
        ],
        deliverables: [
            'Kebutuhan MDM & reference data',
            'Model data master',
            'Golden record / data master terekonsiliasi',
            'Reference data set (kode) yang dikelola',
            'Aturan match & survivorship',
            'Proses stewardship',
        ],
        deliverablesEn: [
            'Master and Reference Data Requirements',
            'Master Data Models',
            'Golden Record / Reconciled Master Data',
            'Managed Reference Data Sets (Codes)',
            'Match and Survivorship Rules',
            'Stewardship Processes',
        ],
        suppliers: [
            'Data Steward',
            'Subject Matter Expert',
            'Data Architect',
            'Data Analyst',
            'Data Governance Council',
            'Penyedia standar eksternal',
        ],
        participants: [
            'Data Steward',
            'Subject Matter Expert',
            'Data Architect & Modeler',
            'Database Administrator',
            'Data Analyst',
            'Developer',
        ],
        consumers: [
            'Pengguna aplikasi',
            'Pengguna BI & reporting',
            'Arsitek & developer aplikasi/integrasi',
            'Mitra & pelanggan',
        ],
        techniques: [
            'Data sharing hub architecture',
            'Record matching (deterministik & probabilistik)',
            'Identity resolution',
            'Survivorship rules',
            'Standar eksternal (mis. ISO 3166, ISO 4217)',
        ],
        tools: [
            'Aplikasi MDM',
            'Aplikasi manajemen reference data',
            'Data modeling tools',
            'Data profiling & quality tools',
            'Metadata repository',
        ],
        metrics: [
            'Kualitas & kepatuhan data master',
            'Tingkat aktivitas perubahan',
            'Biaya ingest & konsumsi data',
            'Ketersediaan layanan',
        ],
        keyConcepts: [
            {
                term: 'Reference data',
                termEn: 'Reference Data',
                description:
                    'Data untuk mengkarakterisasi atau mengklasifikasi data lain (kode negara, satuan ukur, status). Umumnya kecil, jarang berubah, dan berbentuk daftar kode–deskripsi, taksonomi, atau ontologi.',
            },
            {
                term: 'Master data',
                termEn: 'Master Data',
                description:
                    'Data tentang entitas bisnis inti (pelanggan, produk, pemasok, aset, lokasi, karyawan) yang memberi konteks pada transaksi bisnis.',
            },
            {
                term: 'Golden record',
                termEn: 'Golden Record',
                description:
                    'Versi terbaik, terekonsiliasi, dan dipercaya dari sebuah entitas master, hasil dari match, merge, dan survivorship.',
            },
            {
                term: 'Arsitektur hub MDM',
                termEn: 'MDM Hub Architecture',
                description:
                    'Registry (indeks ke sumber), Transaction Hub (hub menjadi system of record), Consolidated (salinan gabungan, umumnya read-only), serta varian hybrid/coexistence.',
            },
            {
                term: 'Match & merge',
                termEn: 'Match and Merge',
                description:
                    'Deterministik (aturan pasti) vs probabilistik (skor kemiripan). Hasilnya bisa auto-merge, review manual oleh steward, atau ditolak.',
            },
        ],
        example:
            'Satu pemasok tercatat 3 kali di ERP dengan ejaan berbeda. Proses MDM mencocokkan NPWP dan alamat, menggabungkannya menjadi satu golden record, lalu mendistribusikan ID tunggal ke sistem procurement dan finance.',
    },
    {
        id: 'dw-bi',
        chapter: 11,
        name: 'Data Warehousing & Business Intelligence',
        nameId: 'Data Warehouse & Business Intelligence',
        shortLabel: ['Data Warehousing', '& BI'],
        color: '#b91c1c',
        inWheel: true,
        infographic: `${infographicBase}/x-6.png`,
        summary:
            'Menyediakan data terintegrasi untuk pelaporan, kueri, dan analisis pendukung keputusan.',
        definition:
            'Proses perencanaan, implementasi, dan kontrol untuk menyediakan data pendukung keputusan serta mendukung knowledge worker dalam pelaporan, kueri, dan analisis.',
        definitionEn:
            'Planning, implementation, and control processes to provide decision support data and support knowledge workers engaged in reporting, query and analysis.',
        goals: [
            'Membangun dan memelihara lingkungan & proses teknis dan bisnis untuk menyediakan data terintegrasi bagi fungsi operasional, kepatuhan, dan BI.',
            'Mendukung analisis bisnis dan pengambilan keputusan yang efektif oleh knowledge worker.',
        ],
        goalsEn: [
            'Build and maintain the technical environment and technical and business processes needed to deliver integrated data in support of operational functions, compliance requirements, and business intelligence activities.',
            'Support and enable effective business analysis and decision-making by knowledge workers.',
        ],
        businessDrivers: [
            'Dukungan operasional',
            'Kepatuhan regulasi',
            'Aktivitas Business Intelligence (insight)',
        ],
        inputs: [
            'Strategi bisnis & TI',
            'Arsitektur enterprise & data',
            'Kebutuhan bisnis',
            'Data sumber (operasional)',
            'Standar & kebijakan data',
        ],
        activities: [
            {
                title: 'Pahami kebutuhan',
                titleEn: 'Understand Requirements',
                type: 'P',
                items: [],
            },
            {
                title: 'Definisikan & pelihara arsitektur DW/BI',
                titleEn: 'Define and Maintain the DW/BI Architecture',
                type: 'D',
                items: [],
            },
            {
                title: 'Kembangkan data warehouse & data mart',
                titleEn: 'Develop the Data Warehouse and Data Marts',
                type: 'D',
                items: [],
            },
            {
                title: 'Isi (populate) data warehouse',
                titleEn: 'Populate the Data Warehouse',
                type: 'D',
                items: [],
            },
            {
                title: 'Implementasikan portofolio BI',
                titleEn: 'Implement the Business Intelligence Portfolio',
                type: 'D',
                items: [],
            },
            {
                title: 'Pelihara produk data',
                titleEn: 'Maintain Data Products',
                type: 'O',
                items: [
                    'Release management',
                    'Kelola siklus pengembangan produk data',
                    'Pantau & tuning proses load',
                    'Pantau & tuning aktivitas dan performa BI',
                ],
            },
        ],
        deliverables: [
            'Arsitektur DW/BI',
            'Data warehouse & data mart',
            'Produk data (laporan, dashboard, cube)',
            'Aturan bisnis & transformasi terdokumentasi',
            'Hasil bisnis & umpan balik',
            'Metadata & lineage',
        ],
        deliverablesEn: [
            'DW/BI Architecture',
            'Data Warehouses and Data Marts',
            'Data Products (Reports, Dashboards, Cubes)',
            'Documented Business and Transformation Rules',
            'Business Outcomes and Feedback',
            'Metadata and Lineage',
        ],
        suppliers: [
            'Eksekutif & manajer',
            'Subject Matter Expert',
            'Data Producer',
            'Data Governance Body',
            'Information Consumer',
        ],
        participants: [
            'BI Program Manager',
            'SME & BI Analyst',
            'Data Architect & Modeler',
            'ETL Developer',
            'Data Steward',
            'DM Executive & profesional',
        ],
        consumers: [
            'Knowledge Worker',
            'Manajer & eksekutif',
            'Pengguna eksternal (pelanggan, regulator)',
            'Data Scientist',
            'Sistem internal',
        ],
        techniques: [
            'Prototipe untuk menggali kebutuhan',
            'Self-service BI',
            'Data audit yang dapat diakses',
            'Bus matrix (Kimball)',
            'Slowly Changing Dimensions',
        ],
        tools: [
            'Metadata repository',
            'Data integration tools (ETL)',
            'BI tools (reporting, OLAP, dashboard)',
            'Data warehouse appliance / cloud DW',
        ],
        metrics: [
            'Usage metrics (jumlah pengguna, kueri)',
            'Subject area coverage',
            'Waktu respons & performa',
            'Kepuasan pengguna',
        ],
        keyConcepts: [
            {
                term: 'Inmon vs Kimball',
                termEn: 'Inmon vs Kimball',
                description:
                    'Inmon (Corporate Information Factory): DW terpusat ternormalisasi lalu data mart. Kimball (Dimensional Bus Architecture): star schema dengan conformed dimensions.',
            },
            {
                term: 'Star schema',
                termEn: 'Star Schema',
                description:
                    'Tabel fakta (ukuran numerik) dikelilingi tabel dimensi (konteks: waktu, produk, lokasi).',
            },
            {
                term: 'Slowly Changing Dimension',
                termEn: 'Slowly Changing Dimension',
                description:
                    'Cara menangani perubahan atribut dimensi: Type 1 (overwrite), Type 2 (baris baru + riwayat), Type 3 (kolom nilai lama), dst.',
            },
            {
                term: 'OLAP',
                termEn: 'OLAP',
                description:
                    'Analisis multidimensi: slice, dice, drill-down/up, roll-up, pivot. Variannya ROLAP, MOLAP, dan HOLAP.',
            },
            {
                term: 'Operational Data Store (ODS)',
                termEn: 'Operational Data Store (ODS)',
                description:
                    'Penyimpanan terintegrasi untuk data operasional terkini. Umumnya volatil dan tidak menyimpan riwayat panjang.',
            },
        ],
        example:
            'Data produksi, downtime, dan biaya pemeliharaan dimuat ke star schema dengan fakta "Downtime" dan dimensi Peralatan, Waktu, dan Penyebab. Manajer lalu bisa drill-down MTBF per unit lewat dashboard.',
    },
    {
        id: 'metadata',
        chapter: 12,
        name: 'Metadata Management',
        nameId: 'Manajemen Metadata',
        shortLabel: ['Metadata', 'Management'],
        color: '#be185d',
        inWheel: true,
        infographic: `${infographicBase}/x-12.png`,
        summary:
            '"Data tentang data": istilah bisnis, struktur teknis, lineage, dan informasi operasional.',
        definition:
            'Aktivitas perencanaan, implementasi, dan kontrol untuk memungkinkan akses ke Metadata yang terintegrasi dan berkualitas tinggi.',
        definitionEn:
            'Planning, implementation, and control activities to enable access to high quality, integrated Metadata.',
        goals: [
            'Mendokumentasikan dan mengelola pengetahuan organisasi atas terminologi bisnis & teknis terkait data.',
            'Mengumpulkan dan mengintegrasikan metadata dari berbagai sumber.',
            'Menyediakan cara standar untuk mengakses metadata.',
            'Menjamin kualitas, konsistensi, kemutakhiran, dan keamanan metadata.',
        ],
        goalsEn: [
            'Document and manage organizational knowledge of data-related business and technical terminology.',
            'Collect and integrate metadata from diverse sources.',
            'Provide a standard way to access metadata.',
            'Ensure the quality, consistency, currency, and security of metadata.',
        ],
        businessDrivers: [
            'Memahami data untuk dipakai dengan benar',
            'Impact analysis sebelum perubahan',
            'Kepatuhan regulasi (lineage, definisi)',
        ],
        inputs: [
            'Kebutuhan bisnis',
            'Isu & kebutuhan metadata',
            'Standar metadata',
            'Metadata dari berbagai sumber (DB, ETL, BI, glossary)',
        ],
        activities: [
            {
                title: 'Definisikan strategi metadata',
                titleEn: 'Define Metadata Strategy',
                type: 'P',
                items: [],
            },
            {
                title: 'Pahami kebutuhan metadata',
                titleEn: 'Understand Metadata Requirements',
                type: 'P',
                items: [],
            },
            {
                title: 'Definisikan arsitektur metadata',
                titleEn: 'Define Metadata Architecture',
                type: 'P',
                items: [],
            },
            {
                title: 'Buat & pelihara metadata',
                titleEn: 'Create and Maintain Metadata',
                type: 'O',
                items: [
                    'Integrasikan metadata',
                    'Distribusikan & sampaikan metadata',
                ],
            },
            {
                title: 'Kueri, laporkan & analisis metadata',
                titleEn: 'Query, Report, and Analyze Metadata',
                type: 'O',
                items: [],
            },
        ],
        deliverables: [
            'Strategi metadata',
            'Standar metadata',
            'Arsitektur metadata',
            'Metamodel',
            'Repositori / katalog metadata terintegrasi',
            'Data lineage & impact analysis',
        ],
        deliverablesEn: [
            'Metadata Strategy',
            'Metadata Standards',
            'Metadata Architecture',
            'Metamodel',
            'Integrated Metadata Repository / Catalog',
            'Data Lineage and Impact Analysis',
        ],
        suppliers: [
            'Data Steward',
            'Data Architect',
            'Data Modeler',
            'Database Administrator',
            'Developer',
            'Business Analyst',
        ],
        participants: [
            'Metadata Specialist / Architect',
            'Data Steward',
            'Data Architect & Modeler',
            'DBA & Developer',
        ],
        consumers: [
            'Data Steward',
            'Profesional data',
            'Pengguna bisnis',
            'Analis & data scientist',
            'Auditor & regulator',
        ],
        techniques: [
            'Data lineage & impact analysis',
            'Metadata untuk ingest Big Data',
            'Standar metadata (Dublin Core, ISO/IEC 11179)',
        ],
        tools: [
            'Metadata repository / data catalog',
            'Business glossary',
            'Tools pemodelan data',
            'ETL & BI tools (sebagai sumber metadata)',
        ],
        metrics: [
            'Kelengkapan metadata repository',
            'Kualitas & kemutakhiran metadata',
            'Penggunaan repositori',
            'Keterwakilan data steward',
        ],
        keyConcepts: [
            {
                term: 'Jenis metadata',
                termEn: 'Types of Metadata',
                description:
                    'Business (definisi, aturan, pemilik), Technical (tabel, kolom, tipe, lineage teknis), dan Operational (log job, jumlah baris, waktu proses).',
            },
            {
                term: 'Data lineage',
                termEn: 'Data Lineage',
                description:
                    'Jejak asal-usul data dan transformasi yang dialaminya dari sumber hingga konsumsi. Ini dasar untuk impact analysis.',
            },
            {
                term: 'Arsitektur metadata',
                termEn: 'Metadata Architecture',
                description:
                    'Centralized, distributed, hybrid, dan bi-directional.',
            },
            {
                term: 'Data catalog',
                termEn: 'Data Catalog',
                description:
                    'Inventaris aset data yang dapat dicari, memadukan metadata teknis dan bisnis untuk data discovery.',
            },
            {
                term: '"It takes metadata to manage data"',
                termEn: '"It takes metadata to manage data"',
                description:
                    'Salah satu prinsip DMBOK: tanpa metadata, organisasi tidak dapat memahami dan mengelola datanya.',
            },
        ],
        example:
            'Saat tipe kolom "kode_unit" akan diubah, tim memakai data catalog untuk impact analysis. Ternyata kolom itu dipakai 4 job ETL dan 12 laporan BI, sehingga perubahan dijadwalkan bersama para pemilik laporan.',
    },
    {
        id: 'data-quality',
        chapter: 13,
        name: 'Data Quality',
        nameId: 'Kualitas Data',
        shortLabel: ['Data', 'Quality'],
        color: '#6d28d9',
        inWheel: true,
        infographic: `${infographicBase}/x-1.png`,
        summary:
            'Menerapkan manajemen mutu pada data agar fit for purpose: ukur, pantau, perbaiki, cegah.',
        definition:
            'Perencanaan, implementasi, dan kontrol aktivitas yang menerapkan teknik manajemen mutu pada data, agar data layak digunakan (fit for purpose) dan memenuhi kebutuhan konsumennya.',
        definitionEn:
            'The planning, implementation, and control of activities that apply quality management techniques to data, in order to assure it is fit for consumption and meet the needs of data consumers.',
        goals: [
            'Mengembangkan pendekatan terkelola agar data sesuai kebutuhan konsumen.',
            'Mendefinisikan standar, persyaratan, dan spesifikasi kontrol kualitas data.',
            'Mendefinisikan dan menerapkan proses untuk mengukur, memantau, dan melaporkan tingkat kualitas data.',
            'Mengidentifikasi dan mendorong perbaikan kualitas lewat perubahan proses dan sistem.',
        ],
        goalsEn: [
            "Develop a governed approach to make data fit for purpose based on data consumers' requirements.",
            'Define standards, requirements, and specifications for data quality controls.',
            'Define and implement processes to measure, monitor, and report on data quality levels.',
            'Identify and advocate for opportunities to improve the quality of data through process and system improvements.',
        ],
        businessDrivers: [
            'Meningkatkan nilai data & peluang memakainya',
            'Mengurangi risiko dan biaya dari data berkualitas buruk',
            'Meningkatkan efisiensi & produktivitas organisasi',
            'Melindungi reputasi organisasi',
        ],
        inputs: [
            'Kebijakan & standar data',
            'Ekspektasi kualitas data',
            'Kebutuhan bisnis',
            'Business rules',
            'Isu data',
            'Metadata',
        ],
        activities: [
            {
                title: 'Definisikan data berkualitas tinggi',
                titleEn: 'Define High Quality Data',
                type: 'P',
                items: [],
            },
            {
                title: 'Definisikan strategi kualitas data',
                titleEn: 'Define a Data Quality Strategy',
                type: 'P',
                items: [],
            },
            {
                title: 'Identifikasi data kritis & business rules',
                titleEn: 'Identify Critical Data and Business Rules',
                type: 'P',
                items: [],
            },
            {
                title: 'Lakukan asesmen kualitas data awal',
                titleEn: 'Perform an Initial Data Quality Assessment',
                type: 'P',
                items: [],
            },
            {
                title: 'Identifikasi & prioritaskan perbaikan',
                titleEn: 'Identify and Prioritize Potential Improvements',
                type: 'P',
                items: [],
            },
            {
                title: 'Definisikan target perbaikan kualitas',
                titleEn: 'Define Goals for Data Quality Improvement',
                type: 'P',
                items: [],
            },
            {
                title: 'Kembangkan & jalankan operasi kualitas data',
                titleEn: 'Develop and Deploy Data Quality Operations',
                type: 'O',
                items: [
                    'Kelola aturan kualitas data',
                    'Ukur & pantau kualitas data',
                    'Kembangkan prosedur penanganan isu data',
                    'Tetapkan SLA kualitas data',
                    'Kembangkan pelaporan kualitas data',
                ],
            },
        ],
        deliverables: [
            'Strategi & framework kualitas data',
            'Organisasi program DQ',
            'Analisis hasil data profiling',
            'Rekomendasi berbasis root cause',
            'Prosedur manajemen isu DQ',
            'SLA kualitas data',
            'Laporan / dashboard DQ',
        ],
        deliverablesEn: [
            'Data Quality Strategy and Framework',
            'Data Quality Program Organization',
            'Analyses from Data Profiling',
            'Recommendations Based on Root Cause Analysis',
            'Data Quality Issue Management Procedures',
            'Data Quality Service Level Agreements',
            'Data Quality Reports / Dashboards',
        ],
        suppliers: [
            'Manajemen bisnis',
            'Subject Matter Expert',
            'Data Architect & Modeler',
            'Spesialis teknis',
        ],
        participants: [
            'CDO',
            'Data Steward',
            'Data Owner',
            'Data Analyst',
            'Data Quality Analyst',
            'Database Administrator',
        ],
        consumers: [
            'Pengguna bisnis',
            'Data Steward',
            'Profesional data & TI',
            'Knowledge Worker',
            'Data Governance Bodies',
            'Organisasi mitra',
        ],
        techniques: [
            'Siklus Plan-Do-Check-Act (PDCA)',
            'Root cause analysis',
            'Statistical Process Control (SPC)',
            'Data profiling',
            'Aksi preventif (di titik entri)',
            'Aksi korektif (otomatis, manual terarah, manual)',
        ],
        tools: [
            'Data profiling engine & query tools',
            'Template aturan kualitas data',
            'Modul quality check & audit',
            'Metadata repository',
            'Issue tracking',
        ],
        metrics: [
            'Skor per dimensi kualitas',
            'ROI program kualitas',
            'Tren kualitas data',
            'Metrik manajemen isu (jumlah, waktu penyelesaian)',
            'Kepatuhan terhadap SLA',
        ],
        keyConcepts: [
            {
                term: 'Dimensi kualitas data',
                termEn: 'Data Quality Dimensions',
                description:
                    'Karakteristik yang bisa diukur: Accuracy, Completeness, Consistency, Integrity, Reasonability, Timeliness, Uniqueness, Validity, dan Currency (ditambahkan di DMBOK2R).',
            },
            {
                term: 'Critical Data Elements',
                termEn: 'Critical Data Elements',
                description:
                    'Fokuskan upaya pada data yang paling berdampak (regulasi, laporan keuangan, operasi kritis). Tidak semua data perlu kualitas sempurna.',
            },
            {
                term: 'PDCA (Shewhart/Deming)',
                termEn: 'PDCA (Shewhart/Deming)',
                description:
                    'Plan (asesmen & rencana), Do (profiling, analisis, perbaikan), Check (pantau terhadap target), Act (tindak lanjut & standarisasi).',
            },
            {
                term: 'Pencegahan vs koreksi',
                termEn: 'Prevention vs. Correction',
                description:
                    'Mencegah kesalahan di sumber (validasi input, pelatihan, kontrol proses) lebih murah daripada memperbaikinya di hilir.',
            },
            {
                term: 'Fitness for purpose',
                termEn: 'Fitness for Purpose',
                description:
                    'Kualitas data bersifat kontekstual: data yang "baik" adalah data yang memenuhi kebutuhan konsumennya.',
            },
        ],
        example:
            'Aturan DQ: setiap work order wajib memiliki kode kegagalan (completeness) dan tanggal selesai ≥ tanggal mulai (validity). Dashboard harian menunjukkan skor 87%. Root cause-nya ternyata form mobile yang tidak mewajibkan kolom tersebut.',
    },
    {
        id: 'data-ethics',
        chapter: 2,
        name: 'Data Handling Ethics',
        nameId: 'Etika Penanganan Data',
        shortLabel: ['Data Handling', 'Ethics'],
        color: '#475569',
        inWheel: false,
        infographic: `${infographicBase}/x-8.png`,
        summary:
            'Memperoleh, menyimpan, menggunakan, dan memusnahkan data sesuai prinsip etika, bukan sekadar patuh hukum.',
        definition:
            'Etika penanganan data berkaitan dengan cara memperoleh, menyimpan, mengelola, menggunakan, dan memusnahkan data secara selaras dengan prinsip-prinsip etika.',
        definitionEn:
            'Data handling ethics are concerned with how to procure, store, manage, use, and dispose of data in ways that are aligned with ethical principles.',
        goals: [
            'Mendefinisikan penanganan data yang etis di organisasi.',
            'Mendidik staf tentang risiko penanganan data yang tidak etis.',
            'Mengubah dan menanamkan budaya serta perilaku penanganan data yang diharapkan.',
            'Memantau regulasi, lalu mengukur dan menyesuaikan pendekatan etika organisasi.',
        ],
        goalsEn: [
            'Define ethical handling of data in the organization.',
            'Educate staff on the organizational risks of improper data handling.',
            'Change and instill the preferred culture and behaviors for handling data.',
            "Monitor the regulatory environment, and measure, monitor, and adjust the organization's approaches to data ethics.",
        ],
        businessDrivers: [
            'Kepercayaan pelanggan & masyarakat',
            'Mengurangi risiko reputasi dan hukum',
        ],
        inputs: [
            'Kebijakan & regulasi yang berlaku',
            'Prinsip & nilai organisasi',
            'Ekspektasi pelanggan & masyarakat',
            'Praktik penanganan data saat ini',
        ],
        activities: [
            {
                title: 'Tinjau praktik penanganan data',
                titleEn: 'Review Data-Handling Practices',
                type: 'P',
                items: [],
            },
            {
                title: 'Identifikasi prinsip, praktik & faktor risiko',
                titleEn: 'Identify Principles, Practices, and Risk Factors',
                type: 'P',
                items: [],
            },
            {
                title: 'Susun strategi penanganan data yang etis',
                titleEn: 'Create an Ethical Data Handling Strategy',
                type: 'P',
                items: [],
            },
            {
                title: 'Tutup gap praktik',
                titleEn: 'Address Practices Gaps',
                type: 'D',
                items: [],
            },
            {
                title: 'Komunikasikan & edukasi staf',
                titleEn: 'Communicate and Educate Staff',
                type: 'D',
                items: [],
            },
            {
                title: 'Pantau & jaga keselarasan',
                titleEn: 'Monitor and Maintain Alignment',
                type: 'C',
                items: [],
            },
        ],
        deliverables: [
            'Strategi etika penanganan data',
            'Program komunikasi & pelatihan',
            'Pernyataan etika perusahaan tentang data',
            'Kesadaran terhadap isu etika',
            'Prosedur kepatuhan',
        ],
        deliverablesEn: [
            'Ethical Data Handling Strategy',
            'Communication and Training Program',
            'Corporate Ethical Data Statements',
            'Awareness of Ethical Data Issues',
            'Compliance Procedures',
        ],
        suppliers: [
            'Eksekutif',
            'Data Steward',
            'Regulator',
            'Data Protection Officer',
        ],
        participants: [
            'Data Governance Bodies',
            'CDO / CIO',
            'Data Steward',
            'Compliance / Legal',
            'Data Scientist',
        ],
        consumers: [
            'Karyawan',
            'Eksekutif',
            'Regulator',
            'Pelanggan & masyarakat',
        ],
        techniques: [
            'Komunikasi & pelatihan',
            'Ethical risk model untuk proyek data',
            'Review independen (mis. dewan etika)',
            'Privacy by Design',
        ],
        tools: [
            'Wiki / knowledge base',
            'Tools manajemen privasi & consent',
            'Data masking & anonimisasi',
        ],
        metrics: [
            'Jumlah karyawan terlatih',
            'Insiden kepatuhan',
            'Keterlibatan eksekutif',
        ],
        keyConcepts: [
            {
                term: 'Prinsip Belmont',
                termEn: 'Belmont Principles',
                description:
                    'Respect for Persons, Beneficence, Justice: prinsip etika riset yang diterapkan pada penggunaan data.',
            },
            {
                term: 'Prinsip privasi',
                termEn: 'Privacy Principles',
                description:
                    'Fair Information Practices, prinsip GDPR (lawfulness, purpose limitation, data minimisation, accuracy, storage limitation, integrity & confidentiality, accountability), dan di Indonesia UU No. 27/2022 tentang Pelindungan Data Pribadi.',
            },
            {
                term: 'Risiko etis',
                termEn: 'Ethical Risks',
                description:
                    'Misrepresentasi data (timing, visualisasi menyesatkan), bias algoritma, re-identifikasi data anonim, dan penggunaan di luar tujuan awal.',
            },
            {
                term: 'Etis ≠ legal',
                termEn: 'Ethical ≠ Legal',
                description:
                    'Sesuatu bisa legal namun tidak etis. Organisasi perlu mempertimbangkan dampaknya pada individu dan masyarakat.',
            },
        ],
        example:
            'Tim analitik ingin memakai data lokasi ponsel karyawan untuk mengukur produktivitas. Review etika menyimpulkan tujuan itu melampaui consent awal (keselamatan kerja), sehingga hanya data agregat dan anonim yang boleh dipakai.',
    },
    {
        id: 'big-data',
        chapter: 14,
        name: 'Big Data & Data Science',
        nameId: 'Big Data & Data Science',
        shortLabel: ['Big Data &', 'Data Science'],
        color: '#4338ca',
        inWheel: false,
        infographic: `${infographicBase}/x-9.png`,
        summary:
            'Mengumpulkan dan menganalisis data beragam untuk menemukan insight atas pertanyaan yang belum diketahui.',
        definition:
            'Pengumpulan (Big Data) dan analisis (Data Science, analitik, dan visualisasi) berbagai jenis data untuk menemukan jawaban dan insight atas pertanyaan yang belum diketahui saat analisis dimulai.',
        definitionEn:
            'The collection (Big Data) and analysis (Data Science, Analytics, and Visualization) of many different types of data to find answers and insights for questions that are not known at the start of analysis.',
        goals: [
            'Menemukan hubungan antara data dan bisnis.',
            'Mendukung integrasi iteratif sumber data ke enterprise.',
            'Menemukan dan menganalisis faktor baru yang dapat memengaruhi bisnis.',
            'Mempublikasikan data lewat visualisasi secara tepat, aman, dan etis.',
        ],
        goalsEn: [
            'Discover relationships between data and the business.',
            'Support the iterative integration of data sources into the enterprise.',
            'Discover and analyze new factors that might affect the business.',
            'Publish data using visualization techniques in an appropriate, trusted, and ethical manner.',
        ],
        businessDrivers: [
            'Menemukan peluang bisnis baru',
            'Analitik prediktif & preskriptif',
        ],
        inputs: [
            'Strategi & tujuan bisnis',
            'Standar TI',
            'Sumber data internal & eksternal',
            'Pertanyaan / hipotesis bisnis',
        ],
        activities: [
            {
                title: 'Definisikan strategi Big Data & kebutuhan bisnis',
                titleEn: 'Define Big Data Strategy and Business Needs',
                type: 'P',
                items: [],
            },
            {
                title: 'Pilih sumber data',
                titleEn: 'Choose Data Sources',
                type: 'P',
                items: [],
            },
            {
                title: 'Akuisisi & ingest sumber data',
                titleEn: 'Acquire and Ingest Data Sources',
                type: 'D',
                items: [],
            },
            {
                title: 'Kembangkan hipotesis & metode',
                titleEn: 'Develop Data Hypotheses and Methods',
                type: 'D',
                items: [],
            },
            {
                title: 'Integrasikan & selaraskan data untuk analisis',
                titleEn: 'Integrate / Align Data for Analysis',
                type: 'D',
                items: [],
            },
            {
                title: 'Eksplorasi data dengan model',
                titleEn: 'Explore Data Using Models',
                type: 'D',
                items: [],
            },
            {
                title: 'Deploy & pantau',
                titleEn: 'Deploy and Monitor',
                type: 'O',
                items: [],
            },
        ],
        deliverables: [
            'Strategi & standar Big Data',
            'Sumber data terkurasi',
            'Model analitik / prediktif',
            'Visualisasi & insight',
            'Data lake / platform analitik',
        ],
        deliverablesEn: [
            'Big Data Strategy and Standards',
            'Curated Data Sources',
            'Analytical / Predictive Models',
            'Visualizations and Insights',
            'Data Lake / Analytics Platform',
        ],
        suppliers: [
            'Platform Big Data',
            'Data Scientist',
            'Penyedia data eksternal',
            'Subject Matter Expert',
        ],
        participants: [
            'Big Data Platform Architect',
            'Ingestion Architect',
            'Data SME',
            'Data Scientist',
            'Analytic Design Lead',
        ],
        consumers: ['Mitra bisnis', 'Eksekutif bisnis', 'Pengguna bisnis'],
        techniques: [
            'Data mashup',
            'Machine learning (supervised, unsupervised, reinforcement)',
            'Analisis prediktif & preskriptif',
            'Visualisasi data',
            'Sentiment analysis',
        ],
        tools: [
            'Distributed file-based solutions (mis. HDFS)',
            'Columnar compression',
            'MPP shared-nothing architecture',
            'In-database algorithms',
            'Big Data cloud solutions',
            'Bahasa komputasi statistik (R, Python)',
        ],
        metrics: [
            'Metrik penggunaan teknis',
            'Metrik loading & scanning',
            'Learning & stories (insight yang ditindaklanjuti)',
        ],
        keyConcepts: [
            {
                term: 'V dari Big Data',
                termEn: "The V's of Big Data",
                description:
                    'Volume, Velocity, Variety, sering ditambah Viscosity, Volatility, dan Veracity.',
            },
            {
                term: 'Data lake',
                termEn: 'Data Lake',
                description:
                    'Penyimpanan data mentah dalam berbagai format. Tanpa governance dan metadata, data lake bisa berubah menjadi "data swamp".',
            },
            {
                term: 'Schema-on-read',
                termEn: 'Schema-on-Read',
                description:
                    'Struktur diterapkan saat data dibaca, berbeda dengan DW tradisional yang schema-on-write.',
            },
            {
                term: 'Jenis machine learning',
                termEn: 'Types of Machine Learning',
                description:
                    'Supervised (data berlabel), Unsupervised (mencari pola tanpa label), Reinforcement (belajar dari reward).',
            },
        ],
        example:
            'Data getaran pompa (time series) di data lake digabung dengan riwayat kerusakan untuk melatih model prediksi kegagalan. Hasilnya divisualisasikan sebagai skor risiko per peralatan.',
    },
    {
        id: 'maturity',
        chapter: 15,
        name: 'Data Management Maturity Assessment',
        nameId: 'Asesmen Maturity Data Management',
        shortLabel: ['Maturity', 'Assessment'],
        color: '#7e22ce',
        inWheel: false,
        infographic: `${infographicBase}/x-7.png`,
        summary:
            'Mengukur kondisi praktik data management saat ini (level 0–5) sebagai dasar roadmap perbaikan.',
        definition:
            'Metode untuk memeringkat praktik penanganan data dalam organisasi guna menggambarkan kondisi data management saat ini dan dampaknya bagi organisasi.',
        definitionEn:
            'A method for ranking practices for handling data within an organization to characterize the current state of data management and its impact on the organization.',
        goals: [
            'Menemukan dan mengevaluasi aktivitas DM yang kritis secara menyeluruh.',
            'Mendidik stakeholder tentang konsep, prinsip, dan praktik DM.',
            'Membangun program perbaikan yang berkelanjutan dan menyeluruh.',
            'Memberi gambaran posisi organisasi dibandingkan praktik terbaik.',
        ],
        goalsEn: [
            'Comprehensively discover and evaluate critical data management activities across the organization.',
            'Educate stakeholders about the concepts, principles, and practices of data management.',
            'Establish or enhance a sustainable, enterprise-wide program for improvement.',
            'Provide a view of where the organization stands relative to best practices.',
        ],
        businessDrivers: [
            'Kepatuhan regulasi',
            'Data Governance',
            'Kesiapan organisasi untuk perbaikan proses',
            'Perubahan organisasi (merger, sistem baru)',
            'Teknologi baru',
            'Isu data management',
        ],
        inputs: [
            'Strategi & tujuan bisnis',
            'Budaya & toleransi risiko',
            'Kerangka maturity & DAMA-DMBOK',
            'Kebijakan & standar',
            'Strategi TI & EA',
            'Strategi data management',
        ],
        activities: [
            {
                title: 'Rencanakan aktivitas asesmen',
                titleEn: 'Plan Assessment Activities',
                type: 'P',
                items: [
                    'Tetapkan cakupan & pendekatan',
                    'Rencanakan komunikasi',
                ],
            },
            {
                title: 'Lakukan asesmen maturity',
                titleEn: 'Perform Maturity Assessment',
                type: 'C',
                items: [
                    'Kumpulkan informasi',
                    'Lakukan penilaian',
                    'Interpretasikan hasil',
                ],
            },
            {
                title: 'Kembangkan rekomendasi',
                titleEn: 'Develop Recommendations',
                type: 'D',
                items: [],
            },
            {
                title: 'Susun program perbaikan bertarget',
                titleEn: 'Create a Targeted Program for Improvements',
                type: 'P',
                items: [],
            },
            {
                title: 'Asesmen ulang maturity',
                titleEn: 'Re-assess Maturity',
                type: 'C',
                items: [],
            },
        ],
        deliverables: [
            'Peringkat & level maturity',
            'Baseline maturity',
            'Asesmen kesiapan (readiness)',
            'Asesmen risiko',
            'Kapabilitas staf',
            'Rekomendasi & roadmap perbaikan',
            'Ringkasan eksekutif',
        ],
        deliverablesEn: [
            'Ratings and Maturity Levels',
            'Maturity Baseline',
            'Readiness Assessment',
            'Risk Assessment',
            'Staffing Capability',
            'Recommendations and Improvement Roadmap',
            'Executive Briefings',
        ],
        suppliers: [
            'Eksekutif',
            'Data Steward',
            'DM Executive',
            'Subject Matter Expert',
            'Karyawan',
        ],
        participants: [
            'CDO / CIO',
            'DM Executive',
            'Data Governance Body',
            'Data Steward',
            'Asesor (internal / eksternal)',
        ],
        consumers: [
            'Eksekutif',
            'Audit & kepatuhan',
            'Regulator',
            'Data Governance Body',
            'Tim DM',
        ],
        techniques: [
            'Pemilihan kerangka DMM',
            'Kuesioner & wawancara',
            'DAMA-DMBOK sebagai acuan',
            'Gap analysis',
        ],
        tools: [
            'Kerangka maturity (CMMI DMM, EDM Council DCAM, IBM, Stanford, Gartner)',
            'Rencana komunikasi',
            'Tools kolaborasi',
            'Knowledge management & metadata repository',
        ],
        metrics: [
            'Penilaian maturity per area',
            'Sumber daya yang terpakai',
            'Eksposur risiko',
            'Kemajuan terhadap roadmap',
        ],
        keyConcepts: [
            {
                term: 'Level maturity',
                termEn: 'Maturity Levels',
                description:
                    'Level 0 No Capability, 1 Initial/Ad Hoc, 2 Repeatable, 3 Defined, 4 Managed, 5 Optimized.',
            },
            {
                term: 'Kriteria penilaian',
                termEn: 'Assessment Criteria',
                description:
                    'Tiap area dinilai dari aktivitas, tools, standar, serta people & resources, bukan hanya teknologinya.',
            },
            {
                term: 'Asesmen bukan tujuan akhir',
                termEn: 'Assessment Is Not the End Goal',
                description:
                    'Hasil asesmen harus diterjemahkan menjadi roadmap perbaikan bertarget, lalu diukur ulang secara berkala.',
            },
        ],
        example:
            'Asesmen awal menunjukkan Data Quality di level 1 (ad hoc) dan Metadata di level 2. Roadmap 12 bulan menargetkan keduanya naik satu level lewat program profiling rutin dan peluncuran data catalog.',
    },
];

export const wheelAreas = knowledgeAreas.filter(
    (area) => area.inWheel && area.id !== 'data-governance',
);

export const governanceArea = knowledgeAreas.find(
    (area) => area.id === 'data-governance',
)!;

export const relatedAreas = knowledgeAreas.filter((area) => !area.inWheel);

export function findArea(id: string): KnowledgeArea | undefined {
    return knowledgeAreas.find((area) => area.id === id);
}
