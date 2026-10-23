<script lang="ts">
    import { estimateReadiness, predictLevel } from '@/lib/dmbok/exam';
    import { topicName } from '@/lib/dmbok/overview';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import { cn } from '@/lib/utils';

    let {
        onpractice,
        onstudy,
    }: {
        onpractice: (areaId: string) => void;
        onstudy: (areaId: string) => void;
    } = $props();

    const readiness = $derived(estimateReadiness(progress.areaStats));
    const level = $derived(
        readiness.estimatedScore !== null
            ? predictLevel(readiness.estimatedScore)
            : null,
    );
    const topPriorities = $derived(readiness.priorities.slice(0, 3));
</script>

<section
    class="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
    aria-labelledby="readiness-heading"
>
    <div>
        <h2 id="readiness-heading" class="text-xl font-semibold">
            Kesiapan ujian CDMP
        </h2>
        <p class="text-sm text-[#706f6c] dark:text-[#A1A09A]">
            Dihitung dari semua jawaban kuismu, dibobot sesuai porsi soal tiap
            bab di ujian.
        </p>
    </div>

    {#if readiness.estimatedScore === null || level === null}
        <p class="rounded-lg bg-[#f7f7f4] px-4 py-3 text-sm dark:bg-[#1a1a18]">
            Belum ada data. Kerjakan kuis atau simulasi untuk melihat perkiraan
            skormu.
        </p>
    {:else}
        <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg bg-[#f7f7f4] p-4 dark:bg-[#1a1a18]">
                <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                    Perkiraan skor
                </p>
                <p class="text-3xl font-semibold tabular-nums">
                    {readiness.estimatedScore}%
                </p>
            </div>
            <div class="rounded-lg bg-[#f7f7f4] p-4 dark:bg-[#1a1a18]">
                <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                    Prediksi
                </p>
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
            </div>
            <div class="rounded-lg bg-[#f7f7f4] p-4 dark:bg-[#1a1a18]">
                <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                    Cakupan bobot ujian
                </p>
                <p class="text-3xl font-semibold tabular-nums">
                    {readiness.coverage}%
                </p>
                <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                    dari {readiness.answered} jawaban
                </p>
            </div>
        </div>
        {#if readiness.coverage < 100}
            <p class="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                Perkiraan hanya mencakup bab yang sudah pernah kamu kerjakan.
                Jalankan simulasi agar semua bab ikut terhitung.
            </p>
        {/if}
    {/if}

    <div class="flex flex-col gap-2">
        <h3 class="text-sm font-semibold">
            🎯 Prioritas belajar (poin ujian yang paling banyak dipertaruhkan)
        </h3>
        <ol class="flex flex-col gap-2">
            {#each topPriorities as topic, topicIndex (topic.areaId)}
                <li
                    class="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border border-[#e3e3e0] px-3 py-2 text-sm dark:border-[#3E3E3A]"
                >
                    <span class="font-semibold tabular-nums"
                        >{topicIndex + 1}.</span
                    >
                    <span class="min-w-0 flex-1">
                        <span class="font-medium">{topicName(topic.areaId)}</span>
                        <span class="block text-xs text-[#706f6c] dark:text-[#A1A09A]">
                            Bobot {topic.weight}% ·
                            {topic.accuracy === null
                                ? 'belum pernah dikerjakan'
                                : `akurasi ${Math.round(topic.accuracy * 100)}% dari ${topic.answered} soal`}
                        </span>
                    </span>
                    <span class="flex gap-2">
                        <button
                            type="button"
                            onclick={() => onstudy(topic.areaId)}
                            class="rounded-md border border-[#d6d6d1] px-2.5 py-1 text-xs font-medium transition hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]"
                            >Pelajari</button
                        >
                        <button
                            type="button"
                            onclick={() => onpractice(topic.areaId)}
                            class="rounded-md bg-[#1b1b18] px-2.5 py-1 text-xs font-medium text-white transition hover:bg-black dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white"
                            >Latih</button
                        >
                    </span>
                </li>
            {/each}
        </ol>
    </div>
</section>
