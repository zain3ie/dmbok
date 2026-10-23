<script lang="ts">
    import { onDestroy } from 'svelte';
    import {
        examSecondsPerQuestion,
        examWeight,
        predictLevel,
    } from '@/lib/dmbok/exam';
    import { topicName } from '@/lib/dmbok/overview';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import { buildExamSimulation } from '@/lib/dmbok/quiz';
    import TranslateToggle from '@/components/dmbok/TranslateToggle.svelte';
    import type { QuizQuestion } from '@/lib/dmbok/types';
    import { cn } from '@/lib/utils';

    let {
        size,
        onexit,
        onpractice,
    }: {
        size: number;
        onexit: () => void;
        onpractice: (areaId: string) => void;
    } = $props();

    const examKey = 'exam-simulation';

    let questions = $state<QuizQuestion[]>([]);
    let answers = $state<(number | null)[]>([]);
    let flagged = $state<number[]>([]);
    let currentIndex = $state(0);
    let showTranslation = $state(false);
    let remainingSeconds = $state(0);
    let totalSeconds = $state(0);
    let phase = $state<'exam' | 'result'>('exam');
    let reviewFilter = $state<'wrong' | 'all'>('wrong');
    let timer: ReturnType<typeof setInterval> | undefined;

    function start(): void {
        questions = buildExamSimulation(size);
        answers = questions.map(() => null);
        flagged = [];
        goTo(0);
        totalSeconds = questions.length * examSecondsPerQuestion;
        remainingSeconds = totalSeconds;
        phase = 'exam';

        clearInterval(timer);
        timer = setInterval(() => {
            remainingSeconds -= 1;

            if (remainingSeconds <= 0) {
                submit();
            }
        }, 1000);
    }

    start();

    onDestroy(() => clearInterval(timer));

    const currentQuestion = $derived(questions[currentIndex]);
    const answeredCount = $derived(
        answers.filter((answer) => answer !== null).length,
    );
    const correctCount = $derived(
        questions.filter(
            (question, index) => answers[index] === question.answerIndex,
        ).length,
    );
    const score = $derived(
        questions.length
            ? Math.round((correctCount / questions.length) * 100)
            : 0,
    );
    const level = $derived(predictLevel(score));

    const breakdown = $derived.by(() => {
        const byTopic = new Map<string, { correct: number; total: number }>();

        questions.forEach((question, index) => {
            const current = byTopic.get(question.areaId) ?? {
                correct: 0,
                total: 0,
            };

            byTopic.set(question.areaId, {
                correct:
                    current.correct +
                    (answers[index] === question.answerIndex ? 1 : 0),
                total: current.total + 1,
            });
        });

        return [...byTopic.entries()]
            .map(([areaId, stats]) => ({
                areaId,
                weight: examWeight(areaId) ?? 0,
                ...stats,
                accuracy: stats.correct / stats.total,
            }))
            .sort(
                (first, second) =>
                    second.weight - first.weight ||
                    first.accuracy - second.accuracy,
            );
    });

    const reviewItems = $derived(
        questions
            .map((question, index) => ({
                question,
                index,
                chosen: answers[index],
            }))
            .filter(
                (item) =>
                    reviewFilter === 'all' ||
                    item.chosen !== item.question.answerIndex,
            ),
    );

    function formatTime(seconds: number): string {
        const safeSeconds = Math.max(0, seconds);
        const minutes = Math.floor(safeSeconds / 60);

        return `${minutes}:${String(safeSeconds % 60).padStart(2, '0')}`;
    }

    function goTo(index: number): void {
        currentIndex = index;
        showTranslation = false;
    }

    function toggleFlag(index: number): void {
        flagged = flagged.includes(index)
            ? flagged.filter((flaggedIndex) => flaggedIndex !== index)
            : [...flagged, index];
    }

    function confirmSubmit(): void {
        const unanswered = questions.length - answeredCount;
        const message =
            unanswered > 0
                ? `Masih ada ${unanswered} soal belum dijawab (dihitung salah). Kumpulkan sekarang?`
                : 'Kumpulkan jawaban sekarang?';

        if (confirm(message)) {
            submit();
        }
    }

    function submit(): void {
        if (phase === 'result') {
            return;
        }

        clearInterval(timer);

        questions.forEach((question, index) => {
            if (answers[index] !== null) {
                progress.recordAnswer(
                    question.areaId,
                    answers[index] === question.answerIndex,
                );
            }
        });

        progress.recordScore(examKey, score);
        phase = 'result';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function navigatorClass(index: number): string {
        return cn(
            'flex size-9 items-center justify-center rounded-md border text-xs font-semibold tabular-nums transition',
            answers[index] !== null
                ? 'border-[#1b1b18] bg-[#1b1b18] text-white dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A]'
                : 'border-[#d6d6d1] hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]',
            flagged.includes(index) &&
                'ring-2 ring-amber-500 ring-offset-1 ring-offset-white dark:ring-offset-[#161615]',
            index === currentIndex && 'outline-2 outline-offset-2 outline-[#f53003]',
        );
    }

    const cardClass =
        'rounded-xl bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]';
    const primaryButtonClass =
        'rounded-md border border-[#1b1b18] bg-[#1b1b18] px-5 py-2 text-sm font-medium text-white transition hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white';
    const secondaryButtonClass =
        'rounded-md border border-[#d6d6d1] px-4 py-2 text-sm font-medium transition hover:border-[#1b1b18] disabled:opacity-40 dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]';
</script>

{#if phase === 'exam' && currentQuestion}
    <div class="flex flex-col gap-4">
        <div
            class="sticky top-0 z-10 -mx-4 flex flex-wrap items-center gap-3 border-b border-[#e3e3e0] bg-[#FDFDFC]/95 px-4 py-3 text-sm backdrop-blur dark:border-[#3E3E3A] dark:bg-[#0a0a0a]/95"
        >
            <span class="font-semibold">⏱️ Simulasi CDMP</span>
            <span
                class={cn(
                    'rounded-md px-2 py-1 font-semibold tabular-nums',
                    remainingSeconds <= 300
                        ? 'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300'
                        : 'bg-[#f1f1ee] dark:bg-[#232321]',
                )}
                role="timer"
                aria-label="Sisa waktu">{formatTime(remainingSeconds)}</span
            >
            <span class="text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
                >{answeredCount}/{questions.length} dijawab</span
            >
            <button
                type="button"
                onclick={confirmSubmit}
                class={cn(primaryButtonClass, 'ml-auto py-1.5')}
                >Kumpulkan</button
            >
        </div>

        <div class={cn(cardClass, 'flex flex-col gap-4')}>
            <div class="flex flex-wrap items-center gap-3">
                <span class="mr-auto text-sm font-medium tabular-nums"
                    >Soal {currentIndex + 1} dari {questions.length}</span
                >
                <TranslateToggle bind:showTranslation />
                <button
                    type="button"
                    onclick={() => toggleFlag(currentIndex)}
                    aria-pressed={flagged.includes(currentIndex)}
                    class={cn(
                        'rounded-md border px-3 py-1 text-xs font-medium transition',
                        flagged.includes(currentIndex)
                            ? 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300'
                            : 'border-[#d6d6d1] dark:border-[#3E3E3A]',
                    )}
                >
                    🚩 {flagged.includes(currentIndex)
                        ? 'Ditandai'
                        : 'Tandai untuk ditinjau'}
                </button>
            </div>
            <div class="flex flex-col gap-1">
                <p class="text-lg font-medium whitespace-pre-line">
                    {currentQuestion.question}
                </p>
                {#if showTranslation}
                    <p
                        lang="id"
                        class="text-sm whitespace-pre-line text-[#706f6c] italic dark:text-[#A1A09A]"
                    >
                        {currentQuestion.translation.question}
                    </p>
                {/if}
            </div>
            <div class="flex flex-col gap-2" role="radiogroup">
                {#each currentQuestion.options as option, optionIndex (optionIndex)}
                    {@const translatedOption =
                        currentQuestion.translation.options?.[optionIndex]}
                    {@const isChosen = answers[currentIndex] === optionIndex}
                    <button
                        type="button"
                        role="radio"
                        aria-checked={isChosen}
                        onclick={() => (answers[currentIndex] = optionIndex)}
                        class={cn(
                            'flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition',
                            isChosen
                                ? 'border-[#f53003] bg-[#fff2f2] dark:border-[#FF4433] dark:bg-[#1D0002]'
                                : 'border-[#d6d6d1] hover:border-[#1b1b18] hover:bg-[#f7f7f4] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC] dark:hover:bg-[#1a1a18]',
                        )}
                    >
                        <span
                            class="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-semibold"
                            >{String.fromCharCode(65 + optionIndex)}</span
                        >
                        <span class="flex flex-col gap-0.5 pt-0.5">
                            <span>{option}</span>
                            {#if showTranslation && translatedOption && translatedOption !== option}
                                <span lang="id" class="text-xs italic opacity-75"
                                    >{translatedOption}</span
                                >
                            {/if}
                        </span>
                    </button>
                {/each}
            </div>
            <div class="flex justify-between gap-2">
                <button
                    type="button"
                    disabled={currentIndex === 0}
                    onclick={() => goTo(currentIndex - 1)}
                    class={secondaryButtonClass}>← Sebelumnya</button
                >
                {#if currentIndex + 1 < questions.length}
                    <button
                        type="button"
                        onclick={() => goTo(currentIndex + 1)}
                        class={primaryButtonClass}>Berikutnya →</button
                    >
                {:else}
                    <button
                        type="button"
                        onclick={confirmSubmit}
                        class={primaryButtonClass}>Kumpulkan jawaban</button
                    >
                {/if}
            </div>
        </div>

        <div class={cn(cardClass, 'flex flex-col gap-3')}>
            <p class="text-sm font-medium">Navigasi soal</p>
            <div class="flex flex-wrap gap-1.5">
                {#each questions as question, index (question.id)}
                    <button
                        type="button"
                        onclick={() => goTo(index)}
                        aria-label="Soal {index + 1}{answers[index] !== null
                            ? ', dijawab'
                            : ''}{flagged.includes(index) ? ', ditandai' : ''}"
                        class={navigatorClass(index)}>{index + 1}</button
                    >
                {/each}
            </div>
            <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                Hitam = sudah dijawab · bingkai kuning = ditandai. Seperti ujian
                asli, pembahasan baru muncul setelah jawaban dikumpulkan.
            </p>
        </div>
    </div>
{:else if phase === 'result'}
    <div class="flex flex-col gap-5">
        <div class={cn(cardClass, 'flex flex-col items-center gap-2 text-center')}>
            <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                Skor simulasi ({questions.length} soal)
            </p>
            <p class="text-5xl font-semibold tabular-nums">{score}%</p>
            <p
                class={cn(
                    'text-lg font-semibold',
                    level.isPassing
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : 'text-rose-700 dark:text-rose-400',
                )}
            >
                {level.isPassing ? '✓' : '✗'}
                {level.label}
            </p>
            <p class="max-w-md text-sm">{level.description}</p>
            <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                {correctCount} benar · {questions.length - answeredCount} tidak dijawab
                · waktu terpakai {formatTime(totalSeconds - remainingSeconds)} dari
                {formatTime(totalSeconds)}
                {#if progress.bestScores[examKey] !== undefined}
                    · skor simulasi terbaik {progress.bestScores[examKey]}%
                {/if}
            </p>
            <div class="mt-3 flex flex-wrap justify-center gap-2">
                <button type="button" onclick={start} class={primaryButtonClass}
                    >Simulasi baru</button
                >
                <button
                    type="button"
                    onclick={onexit}
                    class={secondaryButtonClass}>Kembali</button
                >
            </div>
        </div>

        <section class={cn(cardClass, 'flex flex-col gap-3')}>
            <h3 class="font-semibold">Hasil per bab</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr
                            class="text-left text-xs text-[#706f6c] dark:text-[#A1A09A]"
                        >
                            <th class="py-2 pr-3 font-medium">Bab</th>
                            <th class="py-2 pr-3 font-medium">Bobot</th>
                            <th class="py-2 pr-3 font-medium">Benar</th>
                            <th class="w-1/3 py-2 pr-3 font-medium">Akurasi</th>
                            <th class="py-2 font-medium"
                                ><span class="sr-only">Aksi</span></th
                            >
                        </tr>
                    </thead>
                    <tbody>
                        {#each breakdown as row (row.areaId)}
                            <tr
                                class="border-t border-[#e3e3e0] dark:border-[#3E3E3A]"
                            >
                                <td class="py-2 pr-3">{topicName(row.areaId)}</td>
                                <td class="py-2 pr-3 tabular-nums"
                                    >{row.weight}%</td
                                >
                                <td class="py-2 pr-3 tabular-nums"
                                    >{row.correct}/{row.total}</td
                                >
                                <td class="py-2 pr-3">
                                    <span class="flex items-center gap-2">
                                        <span
                                            class="h-2 flex-1 overflow-hidden rounded-full bg-[#e3e3e0] dark:bg-[#3E3E3A]"
                                        >
                                            <span
                                                class={cn(
                                                    'block h-full rounded-full',
                                                    row.accuracy >= 0.7
                                                        ? 'bg-emerald-600'
                                                        : row.accuracy >= 0.5
                                                          ? 'bg-amber-500'
                                                          : 'bg-rose-600',
                                                )}
                                                style:width="{row.accuracy *
                                                    100}%"
                                            ></span>
                                        </span>
                                        <span class="w-10 text-right tabular-nums"
                                            >{Math.round(
                                                row.accuracy * 100,
                                            )}%</span
                                        >
                                    </span>
                                </td>
                                <td class="py-2 text-right">
                                    {#if row.accuracy < 0.7}
                                        <button
                                            type="button"
                                            onclick={() =>
                                                onpractice(row.areaId)}
                                            class="text-xs font-medium text-[#f53003] underline-offset-2 hover:underline dark:text-[#FF4433]"
                                            >Latih</button
                                        >
                                    {/if}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                Hijau ≥ 70% · kuning 50–69% · merah &lt; 50%.
            </p>
        </section>

        <section class="flex flex-col gap-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="font-semibold">Pembahasan</h3>
                <div class="flex gap-1 rounded-lg bg-[#f1f1ee] p-1 dark:bg-[#232321]">
                    {#each [{ id: 'wrong', label: 'Salah & kosong' }, { id: 'all', label: 'Semua' }] as const as filter (filter.id)}
                        <button
                            type="button"
                            aria-pressed={reviewFilter === filter.id}
                            onclick={() => (reviewFilter = filter.id)}
                            class={cn(
                                'rounded-md px-3 py-1 text-xs font-medium',
                                reviewFilter === filter.id &&
                                    'bg-white shadow-sm dark:bg-[#3E3E3A]',
                            )}>{filter.label}</button
                        >
                    {/each}
                </div>
            </div>
            {#each reviewItems as item (item.question.id)}
                {@const isCorrect = item.chosen === item.question.answerIndex}
                <div class={cn(cardClass, 'flex flex-col gap-2 p-5 text-sm')}>
                    <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                        Soal {item.index + 1} · {topicName(item.question.areaId)}
                        {#if isCorrect}
                            <span class="text-emerald-700 dark:text-emerald-400"
                                >· ✓ benar</span
                            >
                        {/if}
                    </p>
                    <p class="font-medium whitespace-pre-line">
                        {item.question.question}
                    </p>
                    <p
                        class="text-xs whitespace-pre-line text-[#706f6c] italic dark:text-[#A1A09A]"
                    >
                        {item.question.translation.question}
                    </p>
                    {#if !isCorrect}
                        <p class="text-rose-700 dark:text-rose-300">
                            Jawabanmu: {item.chosen === null
                                ? '(tidak dijawab)'
                                : item.question.options[item.chosen]}
                        </p>
                    {/if}
                    <p class="text-emerald-700 dark:text-emerald-300">
                        Jawaban benar: {item.question.options[
                            item.question.answerIndex
                        ]}
                    </p>
                    <p class="text-[#706f6c] dark:text-[#A1A09A]">
                        {item.question.explanation}
                    </p>
                </div>
            {:else}
                <p class="text-sm">🎉 Tidak ada jawaban yang salah.</p>
            {/each}
        </section>
    </div>
{/if}
