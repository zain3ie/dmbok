<script lang="ts">
    import ExamWeightBadge from '@/components/dmbok/ExamWeightBadge.svelte';
    import { findArea } from '@/lib/dmbok/knowledge-areas';
    import {
        aikenPyramidPhases,
        dataManagementOverview,
        dataManagementOverviewId,
    } from '@/lib/dmbok/overview';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import { cn } from '@/lib/utils';

    let {
        onselectarea,
        onopenframeworks,
        onstartquiz,
    }: {
        onselectarea: (areaId: string) => void;
        onopenframeworks: () => void;
        onstartquiz: (areaId: string) => void;
    } = $props();

    let showEnglishDefinition = $state(false);
    let selectedPhase = $state(1);

    const overview = dataManagementOverview;
    const isLearned = $derived(
        progress.isAreaLearned(dataManagementOverviewId),
    );
    const activePhase = $derived(
        aikenPyramidPhases.find((phase) => phase.phase === selectedPhase)!,
    );
    const pyramidFromTop = [...aikenPyramidPhases].reverse();

    const cardClass =
        'rounded-lg bg-white p-4 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]';
    const headingClass =
        'mb-2 text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]';
</script>

{#snippet bulletList(items: string[])}
    <ul class="flex flex-col gap-1.5 text-sm">
        {#each items as item (item)}
            <li class="flex gap-2">
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-[#f53003]"
                ></span>
                <span>{item}</span>
            </li>
        {/each}
    </ul>
{/snippet}

<article class="flex flex-col gap-6">
    <header class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center gap-2 text-xs">
            <span
                class="rounded-full bg-[#f53003] px-2.5 py-1 font-semibold text-white dark:bg-[#FF4433]"
                >Bab {overview.chapter}</span
            >
            <span
                class="rounded-full bg-[#f1f1ee] px-2.5 py-1 font-medium text-[#706f6c] dark:bg-[#232321] dark:text-[#A1A09A]"
                >Bab pengantar: fondasi semua knowledge area</span
            >
            <ExamWeightBadge areaId={dataManagementOverviewId} />
        </div>
        <div>
            <h2 class="text-2xl font-semibold tracking-tight lg:text-3xl">
                {overview.name}
            </h2>
            <p class="text-[#706f6c] dark:text-[#A1A09A]">{overview.nameId}</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <button
                type="button"
                onclick={() => progress.toggleArea(dataManagementOverviewId)}
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
                onclick={() => onstartquiz(dataManagementOverviewId)}
                class="rounded-md border border-[#1b1b18] bg-[#1b1b18] px-3 py-1.5 text-sm font-medium text-white transition hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white"
            >
                Kuis Bab 1
            </button>
        </div>
    </header>

    <section
        class={cn(cardClass, 'border-l-4 border-l-[#f53003]')}
        aria-label="Definisi"
    >
        <div class="mb-1 flex items-center justify-between gap-2">
            <h3 class={cn(headingClass, 'mb-0')}>Definisi</h3>
            <button
                type="button"
                onclick={() => (showEnglishDefinition = !showEnglishDefinition)}
                class="text-xs font-medium text-[#f53003] underline-offset-4 hover:underline dark:text-[#FF4433]"
            >
                {showEnglishDefinition ? 'Bahasa Indonesia' : 'Lihat versi EN'}
            </button>
        </div>
        {#if showEnglishDefinition}
            <p class="italic">"{overview.definitionEn}"</p>
        {:else}
            <p>{overview.definition}</p>
        {/if}
        <p class="mt-3 text-sm text-[#706f6c] dark:text-[#A1A09A]">
            {overview.businessDriver}
        </p>
    </section>

    <section class={cardClass}>
        <h3 class={headingClass}>Goals · Tujuan data management</h3>
        {@render bulletList(overview.goals)}
    </section>

    <section class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold">Konsep penting</h3>
        <div class="flex flex-col gap-2">
            {#each overview.concepts as concept (concept.term)}
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

    <section class={cardClass}>
        <h3 class={headingClass}>Tantangan data management</h3>
        {@render bulletList(overview.challenges)}
    </section>

    <section class="flex flex-col gap-3">
        <div>
            <h3 class="text-lg font-semibold">DMBOK Pyramid (Aiken)</h3>
            <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                Urutan umum organisasi membangun kapabilitas data. Klik tiap
                fase.
            </p>
        </div>
        <div class="flex flex-col items-center gap-1.5">
            {#each pyramidFromTop as phase, layerIndex (phase.phase)}
                <button
                    type="button"
                    onclick={() => (selectedPhase = phase.phase)}
                    aria-pressed={selectedPhase === phase.phase}
                    class={cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition',
                        selectedPhase === phase.phase
                            ? 'bg-[#f53003] text-white dark:bg-[#FF4433]'
                            : 'bg-[#1b1b18]/75 text-white hover:bg-[#1b1b18] dark:bg-[#3E3E3A] dark:hover:bg-[#5a5a55]',
                    )}
                    style:width="{55 + layerIndex * 15}%"
                >
                    Fase {phase.phase}
                </button>
            {/each}
        </div>
        <div class={cardClass} aria-live="polite">
            <p class="font-semibold">
                Fase {activePhase.phase}: {activePhase.title}
            </p>
            <p class="mt-1 text-sm">{activePhase.description}</p>
            <div class="mt-3 flex flex-wrap gap-2">
                {#each activePhase.areaIds as areaId (areaId)}
                    {@const area = findArea(areaId)}
                    {#if area}
                        <button
                            type="button"
                            onclick={() => onselectarea(area.id)}
                            class="rounded-full px-2.5 py-1 text-xs font-semibold text-white transition hover:opacity-85"
                            style:background-color={area.color}
                            >{area.name} →</button
                        >
                    {/if}
                {/each}
            </div>
        </div>
    </section>

    <section class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold">Kerangka data management</h3>
        <div class="grid gap-3 md:grid-cols-2">
            {#each overview.frameworks as framework (framework.name)}
                <div class={cardClass}>
                    <p class="font-semibold">{framework.name}</p>
                    <p class="mb-1 text-xs text-[#706f6c] dark:text-[#A1A09A]">
                        {framework.source}
                    </p>
                    <p class="text-sm">{framework.description}</p>
                </div>
            {/each}
        </div>
        <button
            type="button"
            onclick={onopenframeworks}
            class="self-start text-sm font-medium text-[#f53003] underline-offset-4 hover:underline dark:text-[#FF4433]"
        >
            Lihat prinsip, data lifecycle, dan Environmental Factors Hexagon di
            tab Kerangka →
        </button>
    </section>

    <section class="flex flex-col gap-3">
        <h3 class="text-lg font-semibold">Strategi data management</h3>
        <div class="grid gap-3 md:grid-cols-[1.2fr_1fr]">
            <div class={cardClass}>
                <h4 class={headingClass}>Komponen strategi</h4>
                {@render bulletList(overview.strategyComponents)}
            </div>
            <div class={cardClass}>
                <h4 class={headingClass}>Deliverable strategi</h4>
                <dl class="flex flex-col gap-3 text-sm">
                    {#each overview.strategyDeliverables as deliverable (deliverable.name)}
                        <div>
                            <dt class="font-medium">{deliverable.name}</dt>
                            <dd class="text-[#706f6c] dark:text-[#A1A09A]">
                                {deliverable.description}
                            </dd>
                        </div>
                    {/each}
                </dl>
            </div>
        </div>
    </section>
</article>
