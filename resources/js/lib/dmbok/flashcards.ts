import { examWeight } from './exam';
import { glossary } from './glossary';
import { knowledgeAreas } from './knowledge-areas';
import { dataManagementOverview, dataManagementOverviewId } from './overview';

export type FlashcardDeck = 'terms' | 'definitions' | 'goals' | 'concepts';

export type Flashcard = {
    id: string;
    areaId: string;
    front: string;
    prompt: string;
    back: string[];
    backNote?: string;
};

export const flashcardDecks: {
    id: FlashcardDeck;
    label: string;
    description: string;
}[] = [
    {
        id: 'definitions',
        label: 'Definisi resmi (EN)',
        description:
            'Definisi knowledge area dalam bahasa Inggris, sering muncul di ujian sebagai "which knowledge area is…".',
    },
    {
        id: 'goals',
        label: 'Goals',
        description: 'Tujuan tiap knowledge area dari context diagram.',
    },
    {
        id: 'concepts',
        label: 'Konsep kunci',
        description: 'Konsep penting per knowledge area.',
    },
    {
        id: 'terms',
        label: 'Istilah',
        description: 'Glosarium istilah DMBOK.',
    },
];

const topics = [
    {
        id: dataManagementOverviewId,
        name: dataManagementOverview.name,
        definition: dataManagementOverview.definition,
        definitionEn: dataManagementOverview.definitionEn,
        goals: dataManagementOverview.goals,
        keyConcepts: dataManagementOverview.concepts,
    },
    ...knowledgeAreas,
];

export function buildDeck(deck: FlashcardDeck): Flashcard[] {
    if (deck === 'terms') {
        return glossary.map((entry) => ({
            id: entry.term,
            areaId: entry.areaId,
            front: entry.term,
            prompt: 'Apa artinya?',
            back: [entry.definition],
        }));
    }

    if (deck === 'definitions') {
        return topics.map((topic) => ({
            id: `definition:${topic.id}`,
            areaId: topic.id,
            front: topic.name,
            prompt: 'Bagaimana DMBOK mendefinisikannya?',
            back: [topic.definitionEn],
            backNote: topic.definition,
        }));
    }

    if (deck === 'goals') {
        return topics.map((topic) => ({
            id: `goals:${topic.id}`,
            areaId: topic.id,
            front: topic.name,
            prompt: `Sebutkan ${topic.goals.length} tujuan (goals)-nya.`,
            back: topic.goals,
        }));
    }

    return topics.flatMap((topic) =>
        topic.keyConcepts.map((concept) => ({
            id: `concept:${topic.id}:${concept.term}`,
            areaId: topic.id,
            front: concept.term,
            prompt: `Jelaskan konsep ini (${topic.name}).`,
            back: [concept.description],
        })),
    );
}

/** Highest exam weight first; untested chapters go last. */
export function sortByExamPriority(cards: Flashcard[]): Flashcard[] {
    return [...cards].sort(
        (first, second) =>
            (examWeight(second.areaId) ?? -1) -
            (examWeight(first.areaId) ?? -1),
    );
}
