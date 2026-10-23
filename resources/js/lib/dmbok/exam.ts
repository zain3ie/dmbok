/**
 * Topic weighting of the CDMP Data Management Fundamentals exam (100
 * questions), as published by exam-preparation sources. DAMA does not
 * publish an official public table, so these should be confirmed against
 * DAMA's current candidate materials. Chapters without a weight are not
 * listed as a separate exam topic.
 */
export const cdmpExamWeights: Record<string, number> = {
    'data-management': 2,
    'data-ethics': 2,
    'data-governance': 11,
    'data-architecture': 6,
    'data-modeling': 11,
    'data-storage': 6,
    'data-security': 6,
    'data-integration': 6,
    'document-content': 6,
    'reference-master': 10,
    'dw-bi': 10,
    metadata: 11,
    'data-quality': 11,
    'big-data': 2,
};

export const cdmpExamFacts = {
    questionCount: 100,
    durationMinutes: 90,
    eslExtraMinutes: 20,
    openBook:
        'Open book, tetapi hanya PDF digital DAMA-DMBOK2 yang boleh dibuka. Buku fisik, catatan, dan mesin pencari tidak diizinkan.',
    levels: [
        {
            name: 'Associate',
            requirement:
                'Lulus Data Management Fundamentals dengan skor ≥ 60%.',
        },
        {
            name: 'Practitioner',
            requirement:
                'Lulus Fundamentals + dua ujian Specialist dengan skor ≥ 70%.',
        },
        {
            name: 'Master',
            requirement:
                'Lulus Fundamentals + dua ujian Specialist dengan skor ≥ 80%, minimal 10 tahun pengalaman, dan review CV.',
        },
    ],
    sources: [
        {
            label: 'DAMA: CDMP Certification Levels',
            url: 'https://dama.org/certification/cdmp-certification-levels/',
        },
        {
            label: 'Open Exam Prep: CDMP Exam Details',
            url: 'https://open-exam-prep.com/study-guides/cdmp/exam-overview-dmbok/cdmp-exam-details',
        },
        {
            label: 'Techopedia: CDMP',
            url: 'https://www.techopedia.com/definition/34729/cdmp-certified-data-management-professional',
        },
    ],
};

/**
 * Knowledge areas that also have a CDMP Specialist exam, per DAMA.
 */
export const specialistExamAreaIds = [
    'data-modeling',
    'metadata',
    'data-quality',
    'data-governance',
    'dw-bi',
    'reference-master',
    'data-integration',
];

export function examWeight(areaId: string): number | undefined {
    return cdmpExamWeights[areaId];
}

/** 90 minutes for 100 questions, applied pro rata to shorter simulations. */
export const examSecondsPerQuestion = 54;

export type AreaStats = Record<string, { correct: number; total: number }>;

export type ExamLevel = {
    label: string;
    description: string;
    isPassing: boolean;
};

export function predictLevel(score: number): ExamLevel {
    if (score >= 80) {
        return {
            label: 'Setara Master',
            description:
                'Skor Fundamentals ≥ 80%. Untuk gelar Master tetap dibutuhkan dua ujian Specialist ≥ 80% dan pengalaman 10 tahun.',
            isPassing: true,
        };
    }

    if (score >= 70) {
        return {
            label: 'Setara Practitioner',
            description:
                'Skor Fundamentals ≥ 70%. Untuk gelar Practitioner tetap dibutuhkan dua ujian Specialist ≥ 70%.',
            isPassing: true,
        };
    }

    if (score >= 60) {
        return {
            label: 'Setara Associate',
            description: 'Skor ≥ 60% cukup untuk sertifikasi CDMP Associate.',
            isPassing: true,
        };
    }

    return {
        label: 'Belum lulus',
        description:
            'Skor di bawah 60%. Fokus pada area berbobot tinggi yang akurasinya masih rendah.',
        isPassing: false,
    };
}

/**
 * Splits a question count across exam topics proportionally to their
 * weights (largest remainder method), so totals always match the size.
 */
export function allocateByWeight(size: number): Record<string, number> {
    const entries = Object.entries(cdmpExamWeights);
    const totalWeight = entries.reduce(
        (total, [, weight]) => total + weight,
        0,
    );
    const exact = entries.map(([areaId, weight]) => ({
        areaId,
        exact: (size * weight) / totalWeight,
    }));
    const allocation = Object.fromEntries(
        exact.map(({ areaId, exact: value }) => [areaId, Math.floor(value)]),
    );
    let remaining =
        size -
        Object.values(allocation).reduce((total, count) => total + count, 0);

    for (const { areaId } of [...exact].sort(
        (first, second) =>
            (second.exact % 1) - (first.exact % 1) ||
            cdmpExamWeights[second.areaId] - cdmpExamWeights[first.areaId],
    )) {
        if (remaining === 0) {
            break;
        }

        allocation[areaId] += 1;
        remaining -= 1;
    }

    return allocation;
}

export type TopicReadiness = {
    areaId: string;
    weight: number;
    accuracy: number | null;
    answered: number;
    priority: number;
};

/**
 * Estimates the exam score by weighting per-topic accuracy with the exam
 * weights, and ranks topics by how many exam points are still at stake.
 */
export function estimateReadiness(stats: AreaStats) {
    const topics: TopicReadiness[] = Object.entries(cdmpExamWeights).map(
        ([areaId, weight]) => {
            const topicStats = stats[areaId];
            const accuracy =
                topicStats && topicStats.total > 0
                    ? topicStats.correct / topicStats.total
                    : null;

            return {
                areaId,
                weight,
                accuracy,
                answered: topicStats?.total ?? 0,
                priority: weight * (1 - (accuracy ?? 0)),
            };
        },
    );

    const attempted = topics.filter((topic) => topic.accuracy !== null);
    const coverage = attempted.reduce(
        (total, topic) => total + topic.weight,
        0,
    );
    const estimatedScore =
        coverage > 0
            ? Math.round(
                  (attempted.reduce(
                      (total, topic) => total + topic.weight * topic.accuracy!,
                      0,
                  ) /
                      coverage) *
                      100,
              )
            : null;

    return {
        estimatedScore,
        coverage,
        answered: topics.reduce((total, topic) => total + topic.answered, 0),
        priorities: [...topics].sort(
            (first, second) => second.priority - first.priority,
        ),
    };
}
