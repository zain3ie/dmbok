<script lang="ts">
    import {
        cdmpExamFacts,
        cdmpExamWeights,
        specialistExamAreaIds,
    } from '@/lib/dmbok/exam';
    import { findArea } from '@/lib/dmbok/knowledge-areas';
    import {
        dataManagementOverview,
        dataManagementOverviewId,
    } from '@/lib/dmbok/overview';
    import { cn } from '@/lib/utils';

    let { onselectarea }: { onselectarea: (areaId: string) => void } =
        $props();

    let hoveredId = $state<string | null>(null);

    const rows = Object.entries(cdmpExamWeights)
        .map(([areaId, weight]) => {
            const area = findArea(areaId);

            return {
                areaId,
                weight,
                name:
                    areaId === dataManagementOverviewId
                        ? `${dataManagementOverview.name} (pengantar)`
                        : (area?.name ?? areaId),
                chapter:
                    areaId === dataManagementOverviewId
                        ? dataManagementOverview.chapter
                        : (area?.chapter ?? 0),
            };
        })
        .sort((first, second) =>
            second.weight === first.weight
                ? first.chapter - second.chapter
                : second.weight - first.weight,
        );

    const scaleMax = 12;
    const topRows = rows.filter((row) => row.weight >= 10);
    const topShare = topRows.reduce((total, row) => total + row.weight, 0);
    const specialistNames = specialistExamAreaIds
        .map((areaId) => findArea(areaId)?.name)
        .filter(Boolean)
        .join(', ');

    const cardClass =
        'rounded-xl bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]';
</script>

<section class="flex flex-col gap-5" aria-labelledby="cdmp-weight-heading">
    <div class={cn(cardClass, 'flex flex-col gap-4')}>
        <div>
            <h2 id="cdmp-weight-heading" class="text-xl font-semibold">
                Bobot ujian CDMP per bab
            </h2>
            <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                Porsi soal ujian Data Management Fundamentals (100 soal). Klik
                bab untuk mempelajarinya.
            </p>
        </div>

        <p class="rounded-lg bg-[#f7f7f4] px-4 py-3 text-sm dark:bg-[#1a1a18]">
            <span class="text-2xl font-semibold tabular-nums"
                >{topShare}%</span
            >
            soal berasal dari {topRows.length} area teratas. Prioritaskan area
            ini saat belajar.
        </p>

        <ol class="flex flex-col gap-0.5" aria-label="Bobot ujian per bab">
            {#each rows as row (row.areaId)}
                {@const isHovered = hoveredId === row.areaId}
                <li>
                    <button
                        type="button"
                        onclick={() => onselectarea(row.areaId)}
                        onmouseenter={() => (hoveredId = row.areaId)}
                        onmouseleave={() => (hoveredId = null)}
                        onfocus={() => (hoveredId = row.areaId)}
                        onblur={() => (hoveredId = null)}
                        aria-label="{row.name}, Bab {row.chapter}: {row.weight}% soal ujian"
                        class={cn(
                            'grid w-full grid-cols-[minmax(0,11rem)_minmax(0,1fr)_2.75rem] items-center gap-3 rounded-md px-2 py-1.5 text-left text-sm transition sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_2.75rem]',
                            isHovered && 'bg-[#f7f7f4] dark:bg-[#1a1a18]',
                        )}
                    >
                        <span class="truncate" title={row.name}>
                            <span
                                class="mr-1 text-xs text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
                                >Bab {row.chapter}</span
                            >
                            {row.name}
                        </span>
                        <span class="relative h-3.5">
                            <span
                                class="absolute inset-y-0 left-0 rounded-r bg-[#f53003] transition-opacity dark:bg-[#FF4433]"
                                class:opacity-80={hoveredId !== null &&
                                    !isHovered}
                                style:width="{(row.weight / scaleMax) * 100}%"
                            ></span>
                            {#if isHovered}
                                <span
                                    class={cn(
                                        'pointer-events-none absolute -top-8 z-10 rounded-md bg-[#1b1b18] px-2 py-1 text-xs whitespace-nowrap text-white shadow-lg dark:bg-[#eeeeec] dark:text-[#1C1C1A]',
                                        row.weight / scaleMax > 0.5 &&
                                            '-translate-x-full',
                                    )}
                                    style:left="{(row.weight / scaleMax) * 100}%"
                                    role="tooltip"
                                >
                                    ≈{row.weight} soal dari 100
                                    {#if specialistExamAreaIds.includes(row.areaId)}
                                        · ada ujian Specialist
                                    {/if}
                                </span>
                            {/if}
                        </span>
                        <span class="text-right font-semibold tabular-nums"
                            >{row.weight}%</span
                        >
                    </button>
                </li>
            {/each}
        </ol>

        <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
            Bab 15 (Maturity Assessment), 16 (Organization & Role
            Expectations), dan 17 (Organizational Change Management) tidak
            tercantum sebagai topik tersendiri dalam bobot ini. Bobot berasal
            dari sumber persiapan ujian, bukan tabel resmi DAMA yang
            dipublikasikan, jadi konfirmasikan ke DAMA sebelum ujian.
        </p>
    </div>

    <div class={cn(cardClass, 'grid gap-5 md:grid-cols-2')}>
        <div class="flex flex-col gap-3">
            <h3 class="font-semibold">Format ujian Fundamentals</h3>
            <dl class="grid grid-cols-2 gap-3">
                <div class="rounded-lg bg-[#f7f7f4] p-3 dark:bg-[#1a1a18]">
                    <dt class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                        Jumlah soal
                    </dt>
                    <dd class="text-2xl font-semibold tabular-nums">
                        {cdmpExamFacts.questionCount}
                    </dd>
                </div>
                <div class="rounded-lg bg-[#f7f7f4] p-3 dark:bg-[#1a1a18]">
                    <dt class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                        Durasi
                    </dt>
                    <dd class="text-2xl font-semibold tabular-nums">
                        {cdmpExamFacts.durationMinutes}
                        <span class="text-sm font-normal">menit</span>
                    </dd>
                </div>
            </dl>
            <p class="text-sm">
                +{cdmpExamFacts.eslExtraMinutes} menit untuk peserta yang bahasa
                ibunya bukan bahasa Inggris (versi ESL).
            </p>
            <p class="text-sm">{cdmpExamFacts.openBook}</p>
        </div>
        <div class="flex flex-col gap-3">
            <h3 class="font-semibold">Level sertifikasi</h3>
            <ul class="flex flex-col gap-2 text-sm">
                {#each cdmpExamFacts.levels as level (level.name)}
                    <li>
                        <span class="font-medium">{level.name}:</span>
                        {level.requirement}
                    </li>
                {/each}
            </ul>
            <p class="text-sm">
                <span class="font-medium">Ujian Specialist tersedia untuk:</span
                >
                {specialistNames}.
            </p>
            <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                Sumber:
                {#each cdmpExamFacts.sources as source, sourceIndex (source.url)}
                    <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline underline-offset-2">{source.label}</a
                    >{sourceIndex < cdmpExamFacts.sources.length - 1
                        ? ', '
                        : '.'}
                {/each}
            </p>
        </div>
    </div>
</section>
