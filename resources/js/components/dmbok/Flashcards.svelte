<script lang="ts">
    import { examWeight } from '@/lib/dmbok/exam';
    import {
        buildDeck,
        flashcardDecks,
        sortByExamPriority,
    } from '@/lib/dmbok/flashcards';
    import type { Flashcard, FlashcardDeck } from '@/lib/dmbok/flashcards';
    import { allTopicIds } from '@/lib/dmbok/quiz';
    import { topicColor, topicName } from '@/lib/dmbok/overview';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import { cn } from '@/lib/utils';

    let deck = $state<FlashcardDeck>('definitions');
    let areaFilter = $state('all');
    let hideKnown = $state(false);
    let order = $state<'priority' | 'random'>('priority');
    let shuffledCards = $state<Flashcard[]>([]);
    let currentIndex = $state(0);
    let isFlipped = $state(false);

    const deckCards = $derived(buildDeck(deck));

    const orderedCards = $derived(
        order === 'priority' ? sortByExamPriority(deckCards) : shuffledCards,
    );

    const cards = $derived(
        orderedCards.filter((card) => {
            const matchesArea =
                areaFilter === 'all' ||
                (areaFilter === 'high'
                    ? (examWeight(card.areaId) ?? 0) >= 10
                    : card.areaId === areaFilter);

            return (
                matchesArea && (!hideKnown || !progress.isTermKnown(card.id))
            );
        }),
    );

    const currentCard = $derived(
        cards[Math.min(currentIndex, cards.length - 1)],
    );

    const knownCount = $derived(
        deckCards.filter((card) => progress.isTermKnown(card.id)).length,
    );

    function resetPosition(): void {
        currentIndex = 0;
        isFlipped = false;
    }

    function selectDeck(nextDeck: FlashcardDeck): void {
        deck = nextDeck;
        order = 'priority';
        resetPosition();
    }

    function go(step: number): void {
        if (cards.length === 0) {
            return;
        }

        isFlipped = false;
        currentIndex = (currentIndex + step + cards.length) % cards.length;
    }

    function shuffleCards(): void {
        const shuffled = [...deckCards];

        for (let index = shuffled.length - 1; index > 0; index--) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [shuffled[index], shuffled[swapIndex]] = [
                shuffled[swapIndex],
                shuffled[index],
            ];
        }

        shuffledCards = shuffled;
        order = 'random';
        resetPosition();
    }

    function markKnown(): void {
        if (!currentCard) {
            return;
        }

        const wasKnown = progress.isTermKnown(currentCard.id);

        progress.toggleTerm(currentCard.id);

        if (!wasKnown && !hideKnown) {
            go(1);
        }
    }

    function handleKeydown(event: KeyboardEvent): void {
        const target = event.target as HTMLElement;

        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)) {
            return;
        }

        if (event.key === 'ArrowRight') {
            go(1);
        } else if (event.key === 'ArrowLeft') {
            go(-1);
        } else if (event.key === ' ' && target.tagName !== 'BUTTON') {
            event.preventDefault();
            isFlipped = !isFlipped;
        }
    }

    const secondaryButtonClass =
        'rounded-md border border-[#d6d6d1] px-3 py-1.5 text-sm font-medium transition hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]';
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="mx-auto flex max-w-2xl flex-col gap-5">
    <div class="flex flex-col gap-2">
        <div
            class="flex gap-1 overflow-x-auto rounded-lg bg-[#f1f1ee] p-1 dark:bg-[#232321]"
            role="tablist"
            aria-label="Dek flashcard"
        >
            {#each flashcardDecks as option (option.id)}
                <button
                    type="button"
                    role="tab"
                    aria-selected={deck === option.id}
                    onclick={() => selectDeck(option.id)}
                    class={cn(
                        'shrink-0 flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition',
                        deck === option.id
                            ? 'bg-white shadow-sm dark:bg-[#3E3E3A]'
                            : 'text-[#706f6c] hover:text-[#1b1b18] dark:text-[#A1A09A] dark:hover:text-[#EDEDEC]',
                    )}>{option.label}</button
                >
            {/each}
        </div>
        <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
            {flashcardDecks.find((option) => option.id === deck)?.description}
        </p>
    </div>

    <div class="flex flex-wrap items-center gap-3">
        <label class="flex items-center gap-2 text-sm">
            <span class="font-medium">Area</span>
            <select
                bind:value={areaFilter}
                onchange={resetPosition}
                class="max-w-56 rounded-md border border-[#d6d6d1] bg-white px-2 py-1.5 text-sm dark:border-[#3E3E3A] dark:bg-[#161615]"
            >
                <option value="all">Semua area</option>
                <option value="high">🎯 Bobot ujian tinggi (≥ 10%)</option>
                {#each allTopicIds as topicId (topicId)}
                    <option value={topicId}>{topicName(topicId)}</option>
                {/each}
            </select>
        </label>
        <label class="flex items-center gap-2 text-sm">
            <input
                type="checkbox"
                bind:checked={hideKnown}
                onchange={resetPosition}
                class="size-4 accent-[#f53003]"
            />
            Sembunyikan yang sudah hafal
        </label>
        <div class="ml-auto flex gap-2">
            {#if order === 'random'}
                <button
                    type="button"
                    onclick={() => {
                        order = 'priority';
                        resetPosition();
                    }}
                    class={secondaryButtonClass}>📊 Urut prioritas ujian</button
                >
            {/if}
            <button
                type="button"
                onclick={shuffleCards}
                class={secondaryButtonClass}>🔀 Acak</button
            >
        </div>
    </div>

    <div class="flex items-center gap-3 text-sm">
        <div
            class="h-2 flex-1 overflow-hidden rounded-full bg-[#e3e3e0] dark:bg-[#3E3E3A]"
        >
            <div
                class="h-full rounded-full bg-emerald-600 transition-all"
                style:width="{deckCards.length
                    ? (knownCount / deckCards.length) * 100
                    : 0}%"
            ></div>
        </div>
        <span class="text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
            >{knownCount}/{deckCards.length} hafal</span
        >
    </div>

    {#if currentCard}
        {@const weight = examWeight(currentCard.areaId)}
        <button
            type="button"
            onclick={() => (isFlipped = !isFlipped)}
            aria-label={isFlipped
                ? 'Tampilkan sisi depan'
                : 'Balik kartu untuk melihat jawaban'}
            class="group h-80 w-full perspective-distant"
        >
            <span
                class={cn(
                    'relative block h-full w-full transition-transform duration-500 transform-3d motion-reduce:transition-none',
                    isFlipped && 'transform-[rotateY(180deg)]',
                )}
            >
                <span
                    class="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] backface-hidden dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                >
                    <span class="flex flex-wrap justify-center gap-2 text-xs">
                        <span
                            class="rounded-full px-2.5 py-1 font-semibold text-white"
                            style:background-color={topicColor(
                                currentCard.areaId,
                            )}>{topicName(currentCard.areaId)}</span
                        >
                        <span
                            class="rounded-full bg-[#fff2f2] px-2.5 py-1 font-semibold text-[#c42700] dark:bg-[#1D0002] dark:text-[#FF4433]"
                            >{weight !== undefined
                                ? `${weight}% ujian`
                                : 'Tidak tercantum di bobot ujian'}</span
                        >
                    </span>
                    <span
                        class="text-center text-2xl font-semibold tracking-tight lg:text-3xl"
                        >{currentCard.front}</span
                    >
                    <span class="text-center text-sm">{currentCard.prompt}</span>
                    <span class="text-xs text-[#706f6c] dark:text-[#A1A09A]"
                        >Jawab dalam hati, lalu klik atau tekan spasi untuk
                        membalik</span
                    >
                </span>
                <span
                    class="absolute inset-0 flex flex-col gap-3 overflow-y-auto rounded-xl bg-[#1b1b18] p-6 text-left text-white backface-hidden transform-[rotateY(180deg)] sm:p-8 dark:bg-[#eeeeec] dark:text-[#1C1C1A]"
                >
                    <span class="text-sm font-semibold opacity-70"
                        >{currentCard.front}</span
                    >
                    {#if currentCard.back.length > 1}
                        <span class="flex flex-col gap-1.5 text-sm">
                            {#each currentCard.back as item, itemIndex (item)}
                                <span class="flex gap-2"
                                    ><span class="opacity-60 tabular-nums"
                                        >{itemIndex + 1}.</span
                                    >{item}</span
                                >
                            {/each}
                        </span>
                    {:else}
                        <span
                            class={cn(
                                'leading-relaxed',
                                currentCard.backNote ? 'text-base italic' : 'text-lg',
                            )}>{currentCard.back[0]}</span
                        >
                    {/if}
                    {#if currentCard.backNote}
                        <span class="text-sm opacity-75"
                            >🇮🇩 {currentCard.backNote}</span
                        >
                    {/if}
                </span>
            </span>
        </button>

        <div class="flex items-center justify-between gap-3">
            <button
                type="button"
                onclick={() => go(-1)}
                class={cn(secondaryButtonClass, 'px-4 py-2')}
                >← Sebelumnya</button
            >
            <span class="text-sm text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
                >{Math.min(currentIndex, cards.length - 1) + 1} / {cards.length}</span
            >
            <button
                type="button"
                onclick={() => go(1)}
                class={cn(secondaryButtonClass, 'px-4 py-2')}
                >Berikutnya →</button
            >
        </div>
        <div class="flex justify-center gap-2">
            <button
                type="button"
                onclick={() => go(1)}
                class="rounded-md border border-rose-600 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10"
            >
                ↻ Ulangi nanti
            </button>
            <button
                type="button"
                onclick={markKnown}
                class={cn(
                    'rounded-md px-4 py-2 text-sm font-medium transition',
                    progress.isTermKnown(currentCard.id)
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'border border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-500/10',
                )}
            >
                {progress.isTermKnown(currentCard.id)
                    ? '✓ Sudah hafal (batalkan)'
                    : '✓ Sudah hafal'}
            </button>
        </div>
        <p class="text-center text-xs text-[#706f6c] dark:text-[#A1A09A]">
            Kartu diurutkan dari bab berbobot ujian tertinggi. Tombol ← → di
            keyboard untuk berpindah kartu.
        </p>
    {:else}
        <div
            class="rounded-xl bg-white p-10 text-center shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
        >
            <p class="text-lg font-semibold">🎉 Semua kartu sudah hafal!</p>
            <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                Matikan "Sembunyikan yang sudah hafal" untuk mengulang.
            </p>
        </div>
    {/if}
</div>
