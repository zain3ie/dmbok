<script lang="ts">
    import CdmpExamGuide from '@/components/dmbok/CdmpExamGuide.svelte';
    import ExamReadiness from '@/components/dmbok/ExamReadiness.svelte';
    import ExamSimulation from '@/components/dmbok/ExamSimulation.svelte';
    import TranslateToggle from '@/components/dmbok/TranslateToggle.svelte';
    import { estimateReadiness, examSecondsPerQuestion } from '@/lib/dmbok/exam';
    import {
        topicChapter,
        topicChapterLabel,
        topicColor,
        topicName,
    } from '@/lib/dmbok/overview';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import { allTopicIds, buildPracticeQuiz } from '@/lib/dmbok/quiz';
    import type { QuizQuestion } from '@/lib/dmbok/types';
    import { cn } from '@/lib/utils';

    let {
        initialAreaId = 'all',
        onselectarea,
    }: {
        initialAreaId?: string;
        onselectarea: (areaId: string) => void;
    } = $props();

    type Answer = { question: QuizQuestion; chosenIndex: number };
    type Mode = 'practice' | 'exam';

    let mode = $state<Mode>('practice');
    let areaId = $state('all');
    let questionCount = $state(10);
    let examSize = $state(50);
    let questions = $state<QuizQuestion[]>([]);
    let currentIndex = $state(0);
    let chosenIndex = $state<number | null>(null);
    let showTranslation = $state(false);
    let answers = $state<Answer[]>([]);
    let phase = $state<'setup' | 'playing' | 'finished' | 'exam'>('setup');

    $effect.pre(() => {
        areaId = initialAreaId;
    });

    const priorityTopicIds = $derived(
        estimateReadiness(progress.areaStats)
            .priorities.slice(0, 3)
            .map((topic) => topic.areaId),
    );
    const topicIdsByChapter = [...allTopicIds].sort(
        (first, second) =>
            (topicChapter(first) ?? Infinity) - (topicChapter(second) ?? Infinity),
    );
    const currentQuestion = $derived(questions[currentIndex]);
    const correctCount = $derived(
        answers.filter(
            (answer) => answer.chosenIndex === answer.question.answerIndex,
        ).length,
    );
    const percentage = $derived(
        answers.length ? Math.round((correctCount / answers.length) * 100) : 0,
    );
    const wrongAnswers = $derived(
        answers.filter(
            (answer) => answer.chosenIndex !== answer.question.answerIndex,
        ),
    );
    const bestScore = $derived(progress.bestScores[areaId]);

    function scopeTopicIds(scope: string): string[] {
        if (scope === 'all') {
            return allTopicIds;
        }

        if (scope === 'priority') {
            return priorityTopicIds;
        }

        return [scope];
    }

    function startQuiz(): void {
        questions = buildPracticeQuiz(scopeTopicIds(areaId), questionCount);
        currentIndex = 0;
        chosenIndex = null;
        showTranslation = false;
        answers = [];
        phase = 'playing';
    }

    function practiceTopic(topicId: string): void {
        mode = 'practice';
        areaId = topicId;
        questionCount = 10;
        startQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function choose(optionIndex: number): void {
        if (chosenIndex !== null) {
            return;
        }

        chosenIndex = optionIndex;
        answers = [
            ...answers,
            { question: currentQuestion, chosenIndex: optionIndex },
        ];
        progress.recordAnswer(
            currentQuestion.areaId,
            optionIndex === currentQuestion.answerIndex,
        );
    }

    function next(): void {
        if (currentIndex + 1 >= questions.length) {
            progress.recordScore(areaId, percentage);
            phase = 'finished';

            return;
        }

        currentIndex += 1;
        chosenIndex = null;
        showTranslation = false;
    }

    function optionClass(optionIndex: number): string {
        if (chosenIndex === null) {
            return 'border-[#d6d6d1] hover:border-[#1b1b18] hover:bg-[#f7f7f4] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC] dark:hover:bg-[#1a1a18]';
        }

        if (optionIndex === currentQuestion.answerIndex) {
            return 'border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200';
        }

        if (optionIndex === chosenIndex) {
            return 'border-rose-600 bg-rose-50 text-rose-900 dark:bg-rose-500/10 dark:text-rose-200';
        }

        return 'border-[#e3e3e0] opacity-60 dark:border-[#3E3E3A]';
    }

    function scoreMessage(score: number): string {
        if (score >= 80) {
            return 'Luar biasa! Coba simulasi CDMP penuh untuk menguji kesiapanmu. 🏆';
        }

        if (score >= 60) {
            return 'Sudah di atas ambang lulus Associate (60%). Perkuat area yang masih salah.';
        }

        return 'Masih di bawah ambang lulus 60%. Pelajari lagi context diagram area terkait, lalu ulangi.';
    }

    function examMinutes(size: number): number {
        return Math.round((size * examSecondsPerQuestion) / 60);
    }

    const modes: { id: Mode; icon: string; title: string; description: string }[] =
        [
            {
                id: 'practice',
                icon: '📝',
                title: 'Latihan per topik',
                description:
                    'Pilih bab, jawab, dan langsung lihat pembahasannya.',
            },
            {
                id: 'exam',
                icon: '⏱️',
                title: 'Simulasi ujian CDMP',
                description:
                    'Soal proporsional sesuai bobot ujian, berwaktu, pembahasan di akhir.',
            },
        ];

    const cardClass =
        'rounded-xl bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]';
    const primaryButtonClass =
        'rounded-md border border-[#1b1b18] bg-[#1b1b18] px-5 py-2 text-sm font-medium text-white transition hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white';
    const choiceClass = (isSelected: boolean): string =>
        cn(
            'flex-1 rounded-md border px-3 py-2 font-medium transition',
            isSelected
                ? 'border-[#f53003] bg-[#fff2f2] text-[#c42700] dark:bg-[#1D0002] dark:text-[#FF4433]'
                : 'border-[#d6d6d1] hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]',
        );
</script>

<div class="mx-auto flex max-w-2xl flex-col gap-5">
    {#if phase === 'setup'}
        <div class={cn(cardClass, 'flex flex-col gap-5')}>
            <div>
                <h2 class="text-xl font-semibold">Persiapan sertifikasi CDMP</h2>
                <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                    Latihan untuk ujian Data Management Fundamentals. Sebagian
                    soal dibuat acak dari materi, jadi setiap percobaan berbeda.
                </p>
            </div>

            <div class="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label="Mode">
                {#each modes as option (option.id)}
                    <button
                        type="button"
                        role="radio"
                        aria-checked={mode === option.id}
                        onclick={() => (mode = option.id)}
                        class={cn(
                            'flex flex-col gap-1 rounded-lg border p-4 text-left transition',
                            mode === option.id
                                ? 'border-[#f53003] bg-[#fff2f2] dark:border-[#FF4433] dark:bg-[#1D0002]'
                                : 'border-[#d6d6d1] hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]',
                        )}
                    >
                        <span class="font-semibold">{option.icon} {option.title}</span>
                        <span class="text-xs text-[#706f6c] dark:text-[#A1A09A]"
                            >{option.description}</span
                        >
                    </button>
                {/each}
            </div>

            {#if mode === 'practice'}
                <label class="flex flex-col gap-1.5 text-sm">
                    <span class="font-medium">Cakupan</span>
                    <select
                        bind:value={areaId}
                        class="rounded-md border border-[#d6d6d1] bg-white px-3 py-2 dark:border-[#3E3E3A] dark:bg-[#161615]"
                    >
                        <option value="priority"
                            >🎯 Area prioritas: {priorityTopicIds
                                .map(topicName)
                                .join(', ')}</option
                        >
                        <option value="all">Semua bab</option>
                        {#each topicIdsByChapter as topicId (topicId)}
                            <option value={topicId}
                                >{topicChapterLabel(topicId)}</option
                            >
                        {/each}
                    </select>
                </label>
                <fieldset class="flex flex-col gap-1.5 text-sm">
                    <legend class="mb-1.5 font-medium">Jumlah soal</legend>
                    <div class="flex gap-2">
                        {#each [5, 10, 20] as count (count)}
                            <button
                                type="button"
                                onclick={() => (questionCount = count)}
                                aria-pressed={questionCount === count}
                                class={choiceClass(questionCount === count)}
                                >{count}</button
                            >
                        {/each}
                    </div>
                    <span class="text-xs text-[#706f6c] dark:text-[#A1A09A]"
                        >Untuk satu bab, jumlah soal mungkin lebih sedikit sesuai
                        bank soal yang tersedia.</span
                    >
                </fieldset>
            {:else}
                <fieldset class="flex flex-col gap-1.5 text-sm">
                    <legend class="mb-1.5 font-medium">Panjang simulasi</legend>
                    <div class="flex gap-2">
                        {#each [25, 50, 100] as size (size)}
                            <button
                                type="button"
                                onclick={() => (examSize = size)}
                                aria-pressed={examSize === size}
                                class={choiceClass(examSize === size)}
                            >
                                {size} soal
                                <span class="block text-xs font-normal opacity-80"
                                    >{examMinutes(size)} menit</span
                                >
                            </button>
                        {/each}
                    </div>
                    <span class="text-xs text-[#706f6c] dark:text-[#A1A09A]"
                        >100 soal / 90 menit = ujian penuh. Jumlah soal per bab
                        mengikuti bobot ujian, dan waktu habis = otomatis
                        dikumpulkan.</span
                    >
                </fieldset>
            {/if}

            <p
                class="rounded-lg bg-[#f7f7f4] px-4 py-3 text-sm dark:bg-[#1a1a18]"
            >
                🇬🇧 Soal dan pilihan jawaban berbahasa Inggris, sama seperti
                ujian CDMP. Tekan
                <span class="font-medium">Terjemahkan</span> bila perlu;
                pembahasan tetap dalam bahasa Indonesia.
            </p>

            {#if mode === 'practice' && bestScore !== undefined}
                <p class="text-sm">
                    Skor terbaikmu di cakupan ini:
                    <span class="font-semibold">{bestScore}%</span>
                </p>
            {:else if mode === 'exam' && progress.bestScores['exam-simulation'] !== undefined}
                <p class="text-sm">
                    Skor simulasi terbaikmu:
                    <span class="font-semibold"
                        >{progress.bestScores['exam-simulation']}%</span
                    >
                </p>
            {/if}
            <button
                type="button"
                onclick={() => (mode === 'practice' ? startQuiz() : (phase = 'exam'))}
                class={primaryButtonClass}
            >
                {mode === 'practice' ? 'Mulai latihan' : 'Mulai simulasi'}
            </button>
        </div>
        <ExamReadiness onpractice={practiceTopic} onstudy={onselectarea} />
        <CdmpExamGuide {onselectarea} />
    {:else if phase === 'exam'}
        <ExamSimulation
            size={examSize}
            onexit={() => (phase = 'setup')}
            onpractice={practiceTopic}
        />
    {:else if phase === 'playing' && currentQuestion}
        <div class="flex items-center gap-3 text-sm">
            <span class="font-medium tabular-nums"
                >Soal {currentIndex + 1}/{questions.length}</span
            >
            <div
                class="h-2 flex-1 overflow-hidden rounded-full bg-[#e3e3e0] dark:bg-[#3E3E3A]"
            >
                <div
                    class="h-full rounded-full bg-[#f53003] transition-all"
                    style:width="{(answers.length / questions.length) * 100}%"
                ></div>
            </div>
            <span class="text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
                >✓ {correctCount}</span
            >
        </div>

        <div class={cn(cardClass, 'flex flex-col gap-4')}>
            <div class="flex items-center justify-between gap-3">
                <span
                    class="rounded-full px-2.5 py-1 text-xs font-semibold text-white"
                    style:background-color={topicColor(currentQuestion.areaId)}
                    >{topicName(currentQuestion.areaId)}</span
                >
                <TranslateToggle bind:showTranslation />
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
            <div class="flex flex-col gap-2">
                {#each currentQuestion.options as option, optionIndex (optionIndex)}
                    {@const translatedOption =
                        currentQuestion.translation.options?.[optionIndex]}
                    <button
                        type="button"
                        onclick={() => choose(optionIndex)}
                        disabled={chosenIndex !== null}
                        class={cn(
                            'flex items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition disabled:cursor-default',
                            optionClass(optionIndex),
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

            {#if chosenIndex !== null}
                {@const isCorrect = chosenIndex === currentQuestion.answerIndex}
                <div
                    class={cn(
                        'rounded-lg px-4 py-3 text-sm',
                        isCorrect
                            ? 'bg-emerald-50 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200'
                            : 'bg-rose-50 text-rose-900 dark:bg-rose-500/10 dark:text-rose-200',
                    )}
                    aria-live="polite"
                >
                    <p class="font-semibold">
                        {isCorrect ? '✓ Benar!' : '✗ Kurang tepat'}
                    </p>
                    <p>{currentQuestion.explanation}</p>
                </div>
                <button
                    type="button"
                    onclick={next}
                    class={cn(primaryButtonClass, 'self-end')}
                >
                    {currentIndex + 1 >= questions.length
                        ? 'Lihat hasil'
                        : 'Soal berikutnya →'}
                </button>
            {/if}
        </div>
    {:else if phase === 'finished'}
        <div class={cn(cardClass, 'flex flex-col items-center gap-2 text-center')}>
            <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">Skor kamu</p>
            <p class="text-5xl font-semibold tabular-nums">{percentage}%</p>
            <p class="text-sm">
                {correctCount} dari {answers.length} jawaban benar
            </p>
            <p class="mt-2 font-medium">{scoreMessage(percentage)}</p>
            <div class="mt-4 flex flex-wrap justify-center gap-2">
                <button
                    type="button"
                    onclick={startQuiz}
                    class={primaryButtonClass}>Ulangi dengan soal baru</button
                >
                <button
                    type="button"
                    onclick={() => (phase = 'setup')}
                    class="rounded-md border border-[#d6d6d1] px-5 py-2 text-sm font-medium transition hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]"
                    >Ganti cakupan</button
                >
            </div>
        </div>

        {#if wrongAnswers.length > 0}
            <section class="flex flex-col gap-3">
                <h3 class="font-semibold">Pembahasan jawaban yang salah</h3>
                {#each wrongAnswers as answer (answer.question.id)}
                    <div class={cn(cardClass, 'flex flex-col gap-2 p-5 text-sm')}>
                        <p class="font-medium whitespace-pre-line">
                            {answer.question.question}
                        </p>
                        <p
                            class="text-xs whitespace-pre-line text-[#706f6c] italic dark:text-[#A1A09A]"
                        >
                            {answer.question.translation.question}
                        </p>
                        <p class="text-rose-700 dark:text-rose-300">
                            Jawabanmu: {answer.question.options[
                                answer.chosenIndex
                            ]}
                        </p>
                        <p class="text-emerald-700 dark:text-emerald-300">
                            Jawaban benar: {answer.question.options[
                                answer.question.answerIndex
                            ]}
                        </p>
                        <p class="text-[#706f6c] dark:text-[#A1A09A]">
                            {answer.question.explanation}
                        </p>
                    </div>
                {/each}
            </section>
        {/if}
    {/if}
</div>
