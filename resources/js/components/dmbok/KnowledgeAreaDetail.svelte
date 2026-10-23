<script lang="ts">
    import ExamWeightBadge from '@/components/dmbok/ExamWeightBadge.svelte';
    import { activityTypes } from '@/lib/dmbok/frameworks';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import type { ActivityGroup, KnowledgeArea } from '@/lib/dmbok/types';
    import { cn } from '@/lib/utils';

    let {
        area,
        onstartquiz,
    }: {
        area: KnowledgeArea;
        onstartquiz: (areaId: string) => void;
    } = $props();

    let isPracticeMode = $state(false);
    let revealedCells = $state<string[]>([]);
    let showEnglishDefinition = $state(false);
    let showInfographic = $state(false);

    let previousAreaId = '';

    $effect.pre(() => {
        if (area.id !== previousAreaId) {
            previousAreaId = area.id;
            revealedCells = [];
            showInfographic = false;
            showEnglishDefinition = false;
        }
    });

    const isLearned = $derived(progress.isAreaLearned(area.id));

    function isHidden(cellId: string): boolean {
        return isPracticeMode && !revealedCells.includes(cellId);
    }

    function reveal(cellId: string): void {
        revealedCells = [...revealedCells, cellId];
    }

    function togglePracticeMode(): void {
        isPracticeMode = !isPracticeMode;
        revealedCells = [];
    }
</script>

{#snippet hiddenCover(cellId: string, count: number)}
    <button
        type="button"
        onclick={() => reveal(cellId)}
        class="flex min-h-20 w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-[#d6d6d1] text-xs text-[#706f6c] transition hover:border-[#1b1b18] hover:text-[#1b1b18] dark:border-[#3E3E3A] dark:text-[#A1A09A] dark:hover:border-[#EDEDEC] dark:hover:text-[#EDEDEC]"
    >
        <span class="font-medium">Coba ingat {count} poin…</span>
        <span>Klik untuk membuka</span>
    </button>
{/snippet}

{#snippet listCell(cellId: string, title: string, items: string[])}
    <div
        class="rounded-lg bg-white p-4 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
    >
        <h4
            class="mb-2 text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]"
        >
            {title}
        </h4>
        {#if isHidden(cellId)}
            {@render hiddenCover(cellId, items.length)}
        {:else}
            <ul class="flex flex-col gap-1.5 text-sm">
                {#each items as item (item)}
                    <li class="flex gap-2">
                        <span
                            class="mt-2 size-1.5 shrink-0 rounded-full"
                            style:background-color={area.color}
                        ></span>
                        <span>{item}</span>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
{/snippet}

{#snippet activityList(groups: ActivityGroup[])}
    <ol class="flex flex-col gap-3 text-sm">
        {#each groups as group, groupIndex (group.title)}
            <li>
                <div class="flex items-start gap-2">
                    <span
                        class="mt-0.5 w-5 shrink-0 text-right text-xs font-semibold text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
                        >{groupIndex + 1}.</span
                    >
                    <span class="font-medium">{group.title}</span>
                    <span
                        class={cn(
                            'ml-auto shrink-0 rounded px-1.5 py-0.5 text-[11px] font-semibold',
                            activityTypes[group.type].className,
                        )}
                        title={activityTypes[group.type].label}
                        >({group.type})</span
                    >
                </div>
                {#if group.items.length > 0}
                    <ul
                        class="mt-1 ml-7 flex flex-col gap-0.5 text-[13px] text-[#706f6c] dark:text-[#A1A09A]"
                    >
                        {#each group.items as item (item)}
                            <li>– {item}</li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ol>
{/snippet}

<article class="flex flex-col gap-6">
    <header class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center gap-2 text-xs">
            <span
                class="rounded-full px-2.5 py-1 font-semibold text-white"
                style:background-color={area.color}>Bab {area.chapter}</span
            >
            {#if !area.inWheel}
                <span
                    class="rounded-full bg-[#f1f1ee] px-2.5 py-1 font-medium text-[#706f6c] dark:bg-[#232321] dark:text-[#A1A09A]"
                    >Topik terkait (di luar wheel)</span
                >
            {/if}
            <ExamWeightBadge areaId={area.id} />
        </div>
        <div>
            <h2 class="text-2xl font-semibold tracking-tight lg:text-3xl">
                {area.name}
            </h2>
            <p class="text-[#706f6c] dark:text-[#A1A09A]">{area.nameId}</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <button
                type="button"
                onclick={() => progress.toggleArea(area.id)}
                class={cn(
                    'inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition',
                    isLearned
                        ? 'border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'border-[#d6d6d1] hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]',
                )}
            >
                {isLearned ? '✓ Sudah dipelajari' : 'Tandai sudah dipelajari'}
            </button>
            <button
                type="button"
                onclick={() => onstartquiz(area.id)}
                class="rounded-md border border-[#1b1b18] bg-[#1b1b18] px-3 py-1.5 text-sm font-medium text-white transition hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white"
            >
                Kuis area ini
            </button>
        </div>
    </header>

    <section
        class="rounded-lg border-l-4 bg-white p-4 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
        style:border-left-color={area.color}
    >
        <div class="mb-1 flex items-center justify-between gap-2">
            <h3
                class="text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]"
            >
                Definisi
            </h3>
            <button
                type="button"
                onclick={() => (showEnglishDefinition = !showEnglishDefinition)}
                class="text-xs font-medium text-[#f53003] underline-offset-4 hover:underline dark:text-[#FF4433]"
            >
                {showEnglishDefinition ? 'Bahasa Indonesia' : 'Lihat versi EN'}
            </button>
        </div>
        {#if showEnglishDefinition}
            <p class="italic">"{area.definitionEn}"</p>
        {:else}
            <p>{area.definition}</p>
        {/if}
    </section>

    <section class="flex flex-col gap-3">
        <div class="flex flex-wrap items-end justify-between gap-2">
            <div>
                <h3 class="text-lg font-semibold">Context Diagram</h3>
                <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                    Disusun mengikuti struktur context diagram DMBOK2.
                </p>
            </div>
            <label
                class="inline-flex cursor-pointer items-center gap-2 text-sm font-medium"
            >
                <span>Mode latihan</span>
                <button
                    type="button"
                    role="switch"
                    aria-checked={isPracticeMode}
                    aria-label="Mode latihan"
                    onclick={togglePracticeMode}
                    class={cn(
                        'relative h-6 w-11 rounded-full transition',
                        isPracticeMode
                            ? 'bg-[#f53003]'
                            : 'bg-[#d6d6d1] dark:bg-[#3E3E3A]',
                    )}
                >
                    <span
                        class={cn(
                            'absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition',
                            isPracticeMode && 'translate-x-5',
                        )}
                    ></span>
                </button>
            </label>
        </div>
        {#if isPracticeMode}
            <p
                class="rounded-md bg-[#fff2f2] px-3 py-2 text-sm text-[#1b1b18] dark:bg-[#1D0002] dark:text-[#EDEDEC]"
            >
                Isi setiap kotak disembunyikan. Coba sebutkan poin-poinnya dari
                ingatan, lalu klik untuk mencocokkan.
            </p>
        {/if}

        {@render listCell('goals', 'Goals · Tujuan', area.goals)}

        <div class="grid gap-3 md:grid-cols-[1fr_1.4fr_1fr]">
            {@render listCell('inputs', 'Inputs', area.inputs)}
            <div
                class="rounded-lg bg-white p-4 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
            >
                <h4
                    class="mb-2 text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]"
                >
                    Activities
                </h4>
                {#if isHidden('activities')}
                    {@render hiddenCover('activities', area.activities.length)}
                {:else}
                    {@render activityList(area.activities)}
                {/if}
            </div>
            {@render listCell('deliverables', 'Deliverables', area.deliverables)}
        </div>

        <div class="grid gap-3 md:grid-cols-3">
            {@render listCell('suppliers', 'Suppliers', area.suppliers)}
            {@render listCell('participants', 'Participants', area.participants)}
            {@render listCell('consumers', 'Consumers', area.consumers)}
        </div>

        <p
            class="mt-1 text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]"
        >
            Technical drivers
        </p>
        <div class="grid gap-3 md:grid-cols-3">
            {@render listCell('techniques', 'Techniques', area.techniques)}
            {@render listCell('tools', 'Tools', area.tools)}
            {@render listCell('metrics', 'Metrics', area.metrics)}
        </div>

        {@render listCell(
            'drivers',
            'Business drivers · Pendorong bisnis',
            area.businessDrivers,
        )}
    </section>

    <section class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold">Konsep kunci</h3>
        <div class="flex flex-col gap-2">
            {#each area.keyConcepts as concept (concept.term)}
                <details
                    class="group rounded-lg bg-white shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                >
                    <summary
                        class="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-medium [&::-webkit-details-marker]:hidden"
                    >
                        {concept.term}
                        <span
                            class="text-[#706f6c] transition group-open:rotate-45 dark:text-[#A1A09A]"
                            aria-hidden="true">+</span
                        >
                    </summary>
                    <p
                        class="px-4 pb-4 text-sm text-[#3d3d3a] dark:text-[#c8c8c4]"
                    >
                        {concept.description}
                    </p>
                </details>
            {/each}
        </div>
    </section>

    <section
        class="rounded-lg bg-[#f7f7f4] p-4 dark:bg-[#1a1a18]"
        aria-labelledby="example-{area.id}"
    >
        <h3 id="example-{area.id}" class="mb-1 font-semibold">
            💡 Contoh penerapan
        </h3>
        <p class="text-sm text-[#3d3d3a] dark:text-[#c8c8c4]">
            {area.example}
        </p>
    </section>

    <section class="flex flex-col gap-3">
        <button
            type="button"
            onclick={() => (showInfographic = !showInfographic)}
            class="self-start rounded-md border border-[#d6d6d1] px-3 py-1.5 text-sm font-medium transition hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]"
        >
            {showInfographic
                ? 'Sembunyikan infografis resmi'
                : 'Lihat infografis resmi DAMA'}
        </button>
        {#if showInfographic}
            <figure class="flex flex-col gap-2">
                <a
                    href={area.infographic}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block overflow-hidden rounded-lg bg-white shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)]"
                >
                    <img
                        src={area.infographic}
                        alt="Context diagram {area.name} dari DAMA International"
                        loading="lazy"
                        class="h-auto w-full"
                    />
                </a>
                <figcaption class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                    © 2024 DAMA International. DAMA-DMBOK2R context diagram,
                    ditampilkan tanpa perubahan sesuai lisensi
                    <a
                        href="https://creativecommons.org/licenses/by-nd/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline underline-offset-2">CC BY-ND 4.0</a
                    >. Sumber:
                    <a
                        href="https://dama.org/dmbok2r-infographics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline underline-offset-2"
                        >dama.org/dmbok2r-infographics</a
                    >.
                </figcaption>
            </figure>
        {/if}
    </section>
</article>
