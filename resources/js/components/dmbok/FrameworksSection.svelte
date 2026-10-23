<script lang="ts">
    import EnvironmentalHexagon from '@/components/dmbok/EnvironmentalHexagon.svelte';
    import {
        activityTypes,
        lifecycleStages,
        maturityLevels,
        principleGroups,
        qualityDimensions,
    } from '@/lib/dmbok/frameworks';
    import type { ActivityType } from '@/lib/dmbok/types';
    import { cn } from '@/lib/utils';

    let selectedStageIndex = $state(0);
    let selectedMaturityLevel = $state(2);
    let flippedDimensions = $state<string[]>([]);

    const selectedStage = $derived(lifecycleStages[selectedStageIndex]);
    const selectedMaturity = $derived(maturityLevels[selectedMaturityLevel]);

    function toggleDimension(name: string): void {
        flippedDimensions = flippedDimensions.includes(name)
            ? flippedDimensions.filter((flipped) => flipped !== name)
            : [...flippedDimensions, name];
    }

    const cardClass =
        'rounded-lg bg-white shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]';
</script>

{#snippet sectionHeading(title: string, subtitle: string)}
    <div>
        <h2 class="text-xl font-semibold tracking-tight">{title}</h2>
        <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">{subtitle}</p>
    </div>
{/snippet}

<div class="flex flex-col gap-14">
    <section class="flex flex-col gap-5">
        {@render sectionHeading(
            'Environmental Factors Hexagon',
            'Tujuh faktor yang membentuk setiap knowledge area. Klik setiap segmen.',
        )}
        <EnvironmentalHexagon />
    </section>

    <section class="flex flex-col gap-5">
        {@render sectionHeading(
            'Data Lifecycle',
            'Siklus hidup data menurut DMBOK. Klik tahap untuk melihat penjelasannya.',
        )}
        <ol class="flex flex-wrap items-center gap-2">
            {#each lifecycleStages as stage, stageIndex (stage.name)}
                <li class="flex items-center gap-2">
                    <button
                        type="button"
                        onclick={() => (selectedStageIndex = stageIndex)}
                        aria-pressed={selectedStageIndex === stageIndex}
                        class={cn(
                            'rounded-full border px-3.5 py-1.5 text-sm font-medium transition',
                            selectedStageIndex === stageIndex
                                ? 'border-[#1b1b18] bg-[#1b1b18] text-white dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A]'
                                : 'border-[#d6d6d1] hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]',
                        )}
                    >
                        <span class="mr-1 tabular-nums opacity-60"
                            >{stageIndex + 1}</span
                        >
                        {stage.name}
                    </button>
                    {#if stageIndex < lifecycleStages.length - 1}
                        <span
                            class="text-[#706f6c] dark:text-[#A1A09A]"
                            aria-hidden="true">→</span
                        >
                    {/if}
                </li>
            {/each}
        </ol>
        <div class={cn(cardClass, 'p-5')} aria-live="polite">
            <p class="font-semibold">
                {selectedStage.name}
                <span class="font-normal text-[#706f6c] dark:text-[#A1A09A]"
                    >· {selectedStage.nameId}</span
                >
            </p>
            <p class="mt-1 text-sm">{selectedStage.description}</p>
        </div>
        <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
            Catatan: metadata dan kualitas data perlu dikelola di setiap tahap,
            bukan hanya di tahap tertentu.
        </p>
    </section>

    <section class="flex flex-col gap-5">
        {@render sectionHeading(
            'Prinsip Data Management',
            'Prinsip-prinsip DMBOK2 yang mendasari seluruh knowledge area.',
        )}
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {#each principleGroups as group (group.title)}
                <div class={cn(cardClass, 'p-5')}>
                    <h3 class="mb-2 font-semibold">{group.title}</h3>
                    <ul class="flex flex-col gap-1.5 text-sm">
                        {#each group.items as item (item)}
                            <li class="flex gap-2">
                                <span
                                    class="mt-2 size-1.5 shrink-0 rounded-full bg-[#f53003]"
                                ></span>
                                {item}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-5">
        {@render sectionHeading(
            'Jenis Aktivitas (P · D · O · C)',
            'Setiap aktivitas di context diagram diberi label salah satu jenis ini.',
        )}
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {#each Object.entries(activityTypes) as [code, type] (code)}
                <div class={cn(cardClass, 'p-5')}>
                    <span
                        class={cn(
                            'inline-block rounded px-2 py-0.5 text-sm font-semibold',
                            activityTypes[code as ActivityType].className,
                        )}>({code}) {type.label}</span
                    >
                    <p class="mt-2 text-sm">{type.description}</p>
                </div>
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-5">
        {@render sectionHeading(
            'Dimensi Kualitas Data',
            'Klik kartu untuk melihat contoh. Currency ditambahkan pada DMBOK2R.',
        )}
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {#each qualityDimensions as dimension (dimension.name)}
                {@const isFlipped = flippedDimensions.includes(dimension.name)}
                <button
                    type="button"
                    onclick={() => toggleDimension(dimension.name)}
                    aria-pressed={isFlipped}
                    class={cn(
                        cardClass,
                        'flex min-h-32 flex-col gap-1 p-5 text-left transition hover:-translate-y-0.5',
                        isFlipped &&
                            'bg-[#fff2f2] dark:bg-[#1D0002] dark:shadow-[inset_0px_0px_0px_1px_#4B0600]',
                    )}
                >
                    <span class="font-semibold">
                        {dimension.name}
                        <span
                            class="font-normal text-[#706f6c] dark:text-[#A1A09A]"
                            >· {dimension.nameId}</span
                        >
                    </span>
                    {#if isFlipped}
                        <span class="text-sm"
                            ><span class="font-medium">Contoh:</span>
                            {dimension.example}</span
                        >
                    {:else}
                        <span class="text-sm">{dimension.description}</span>
                    {/if}
                </button>
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-5">
        {@render sectionHeading(
            'Level Maturity Data Management',
            'Skala level 0–5 yang dipakai di Data Management Maturity Assessment (Bab 15).',
        )}
        <div class="flex h-48 items-end gap-2" role="group" aria-label="Level maturity">
            {#each maturityLevels as maturity (maturity.level)}
                <button
                    type="button"
                    onclick={() => (selectedMaturityLevel = maturity.level)}
                    aria-pressed={selectedMaturityLevel === maturity.level}
                    aria-label="Level {maturity.level}: {maturity.name}"
                    class={cn(
                        'flex flex-1 flex-col items-center justify-end rounded-t-md pb-2 text-sm font-semibold text-white transition',
                        selectedMaturityLevel === maturity.level
                            ? 'bg-[#f53003] dark:bg-[#FF4433]'
                            : 'bg-[#1b1b18]/70 hover:bg-[#1b1b18] dark:bg-[#3E3E3A] dark:hover:bg-[#5a5a55]',
                    )}
                    style:height="{18 + maturity.level * 16}%"
                >
                    {maturity.level}
                </button>
            {/each}
        </div>
        <div class={cn(cardClass, 'p-5')} aria-live="polite">
            <p class="font-semibold">
                Level {selectedMaturity.level} · {selectedMaturity.name}
                <span class="font-normal text-[#706f6c] dark:text-[#A1A09A]"
                    >({selectedMaturity.nameId})</span
                >
            </p>
            <p class="mt-1 text-sm">{selectedMaturity.description}</p>
        </div>
    </section>
</div>
