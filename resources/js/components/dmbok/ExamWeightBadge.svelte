<script lang="ts">
    import { examWeight, specialistExamAreaIds } from '@/lib/dmbok/exam';

    let { areaId }: { areaId: string } = $props();

    const weight = $derived(examWeight(areaId));
    const hasSpecialistExam = $derived(specialistExamAreaIds.includes(areaId));
</script>

{#if weight !== undefined}
    <span
        class="inline-flex items-center gap-1 rounded-full bg-[#fff2f2] px-2.5 py-1 font-semibold text-[#c42700] dark:bg-[#1D0002] dark:text-[#FF4433]"
        title="Perkiraan porsi soal di ujian CDMP Data Management Fundamentals (100 soal)"
    >
        📊 {weight}% ujian CDMP
        <span class="font-normal opacity-80">(≈{weight} dari 100 soal)</span>
    </span>
{:else}
    <span
        class="rounded-full bg-[#f1f1ee] px-2.5 py-1 font-medium text-[#706f6c] dark:bg-[#232321] dark:text-[#A1A09A]"
        title="Bab ini tidak tercantum sebagai topik tersendiri dalam bobot ujian CDMP Fundamentals"
    >
        📊 Tidak tercantum di bobot ujian CDMP
    </span>
{/if}
{#if hasSpecialistExam}
    <span
        class="rounded-full bg-[#f1f1ee] px-2.5 py-1 font-medium text-[#1b1b18] dark:bg-[#232321] dark:text-[#EDEDEC]"
        title="Area ini juga memiliki ujian CDMP Specialist tersendiri"
    >
        🎓 Ada ujian Specialist
    </span>
{/if}
