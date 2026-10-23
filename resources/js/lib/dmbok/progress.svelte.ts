import type { AreaStats } from './exam';

const storageKey = 'dmbok-learning-progress';

type StoredProgress = {
    learnedAreas: string[];
    knownTerms: string[];
    bestScores: Record<string, number>;
    areaStats: AreaStats;
};

function readStoredProgress(): StoredProgress {
    const empty: StoredProgress = {
        learnedAreas: [],
        knownTerms: [],
        bestScores: {},
        areaStats: {},
    };

    if (typeof window === 'undefined') {
        return empty;
    }

    try {
        const raw = window.localStorage.getItem(storageKey);

        return raw ? { ...empty, ...JSON.parse(raw) } : empty;
    } catch {
        return empty;
    }
}

class LearningProgress {
    learnedAreas = $state<string[]>([]);
    knownTerms = $state<string[]>([]);
    bestScores = $state<Record<string, number>>({});
    areaStats = $state<AreaStats>({});

    load(): void {
        const stored = readStoredProgress();

        this.learnedAreas = stored.learnedAreas;
        this.knownTerms = stored.knownTerms;
        this.bestScores = stored.bestScores;
        this.areaStats = stored.areaStats;
    }

    isAreaLearned(areaId: string): boolean {
        return this.learnedAreas.includes(areaId);
    }

    toggleArea(areaId: string): void {
        this.learnedAreas = this.isAreaLearned(areaId)
            ? this.learnedAreas.filter((id) => id !== areaId)
            : [...this.learnedAreas, areaId];
        this.persist();
    }

    isTermKnown(term: string): boolean {
        return this.knownTerms.includes(term);
    }

    toggleTerm(term: string): void {
        this.knownTerms = this.isTermKnown(term)
            ? this.knownTerms.filter((known) => known !== term)
            : [...this.knownTerms, term];
        this.persist();
    }

    recordScore(quizKey: string, percentage: number): void {
        if (percentage > (this.bestScores[quizKey] ?? -1)) {
            this.bestScores = { ...this.bestScores, [quizKey]: percentage };
            this.persist();
        }
    }

    recordAnswer(areaId: string, isCorrect: boolean): void {
        const current = this.areaStats[areaId] ?? { correct: 0, total: 0 };

        this.areaStats = {
            ...this.areaStats,
            [areaId]: {
                correct: current.correct + (isCorrect ? 1 : 0),
                total: current.total + 1,
            },
        };
        this.persist();
    }

    reset(): void {
        this.learnedAreas = [];
        this.knownTerms = [];
        this.bestScores = {};
        this.areaStats = {};
        this.persist();
    }

    private persist(): void {
        try {
            window.localStorage.setItem(
                storageKey,
                JSON.stringify({
                    learnedAreas: this.learnedAreas,
                    knownTerms: this.knownTerms,
                    bestScores: this.bestScores,
                    areaStats: this.areaStats,
                }),
            );
        } catch {
            // Storage can be unavailable (private mode); progress stays in memory.
        }
    }
}

export const progress = new LearningProgress();
