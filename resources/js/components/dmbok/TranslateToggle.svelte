<script lang="ts">
    let { showTranslation = $bindable(false) }: { showTranslation?: boolean } =
        $props();
</script>

<button
    type="button"
    onclick={() => (showTranslation = !showTranslation)}
    aria-pressed={showTranslation}
    title={showTranslation
        ? 'Sembunyikan terjemahan bahasa Indonesia'
        : 'Tampilkan terjemahan bahasa Indonesia di bawah soal dan pilihan jawaban'}
    class="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#d6d6d1] px-2.5 py-1 text-xs font-medium transition hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]"
>
    <span aria-hidden="true">🌐</span>
    {showTranslation ? 'Sembunyikan terjemahan' : 'Terjemahkan'}
</button>
