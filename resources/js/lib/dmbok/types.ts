export type ActivityType = 'P' | 'D' | 'O' | 'C';

export type ActivityGroup = {
    title: string;
    titleEn: string;
    type: ActivityType;
    items: string[];
};

export type KeyConcept = {
    term: string;
    termEn: string;
    description: string;
};

export type KnowledgeArea = {
    id: string;
    chapter: number;
    name: string;
    nameId: string;
    shortLabel: string[];
    color: string;
    inWheel: boolean;
    infographic: string;
    summary: string;
    definition: string;
    definitionEn: string;
    goals: string[];
    /** English goals, index-aligned with `goals`, used by the English quiz. */
    goalsEn: string[];
    businessDrivers: string[];
    inputs: string[];
    activities: ActivityGroup[];
    deliverables: string[];
    /** English deliverables, index-aligned with `deliverables`. */
    deliverablesEn: string[];
    suppliers: string[];
    participants: string[];
    consumers: string[];
    techniques: string[];
    tools: string[];
    metrics: string[];
    keyConcepts: KeyConcept[];
    example: string;
};

export type GlossaryTerm = {
    term: string;
    definition: string;
    areaId: string;
};

/**
 * Questions and options are in English, like the CDMP exam. The
 * Indonesian translation is shown on demand; the explanation stays in
 * Indonesian as study material.
 */
export type QuizQuestion = {
    id: string;
    areaId: string;
    question: string;
    options: string[];
    answerIndex: number;
    translation: {
        question: string;
        /** Omitted when the options read the same in both languages. */
        options?: string[];
    };
    explanation: string;
};
