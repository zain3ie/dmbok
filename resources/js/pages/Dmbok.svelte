<script lang="ts">
    import { onMount } from 'svelte';
    import AppHead from '@/components/AppHead.svelte';
    import DamaWheel from '@/components/dmbok/DamaWheel.svelte';
    import DataManagementOverview from '@/components/dmbok/DataManagementOverview.svelte';
    import Flashcards from '@/components/dmbok/Flashcards.svelte';
    import FrameworksSection from '@/components/dmbok/FrameworksSection.svelte';
    import KnowledgeAreaDetail from '@/components/dmbok/KnowledgeAreaDetail.svelte';
    import Quiz from '@/components/dmbok/Quiz.svelte';
    import {
        findArea,
        governanceArea,
        knowledgeAreas,
        relatedAreas,
    } from '@/lib/dmbok/knowledge-areas';
    import { examWeight } from '@/lib/dmbok/exam';
    import {
        dataManagementOverview,
        dataManagementOverviewId,
        topicColor,
    } from '@/lib/dmbok/overview';
    import { progress } from '@/lib/dmbok/progress.svelte';
    import { cn } from '@/lib/utils';

    type Tab = 'wheel' | 'frameworks' | 'flashcards' | 'quiz';

    const tabs: { id: Tab; label: string; icon: string }[] = [
        { id: 'wheel', label: 'Peta DMBOK', icon: '🎯' },
        { id: 'frameworks', label: 'Kerangka', icon: '🧩' },
        { id: 'flashcards', label: 'Flashcard', icon: '🃏' },
        { id: 'quiz', label: 'Kuis', icon: '📝' },
    ];

    let activeTab = $state<Tab>('wheel');
    let selectedAreaId = $state(dataManagementOverviewId);
    let quizAreaId = $state('all');

    const isOverviewSelected = $derived(
        selectedAreaId === dataManagementOverviewId,
    );
    const selectedArea = $derived(findArea(selectedAreaId) ?? governanceArea);
    const totalTopics = knowledgeAreas.length + 1;

    /** Chapter 1 comes first, followed by the chapters outside the wheel. */
    const relatedTopics: {
        id: string;
        name: string;
        color: string;
        description?: string;
    }[] = [
        {
            id: dataManagementOverviewId,
            name: dataManagementOverview.name,
            color: topicColor(dataManagementOverviewId),
            description:
                'Mulai di sini: definisi, tujuan, tantangan, dan kerangka DMBOK',
        },
        ...relatedAreas,
    ];
    const learnedCount = $derived(progress.learnedAreas.length);
    const learnedPercentage = $derived(
        Math.round((learnedCount / totalTopics) * 100),
    );

    onMount(() => {
        progress.load();

        const hash = window.location.hash.replace('#', '');

        if (tabs.some((tab) => tab.id === hash)) {
            activeTab = hash as Tab;
        }
    });

    function openTab(tab: Tab): void {
        activeTab = tab;
        history.replaceState(history.state, '', `#${tab}`);
    }

    function selectArea(areaId: string, alwaysScroll = false): void {
        selectedAreaId = areaId;

        if (alwaysScroll || window.matchMedia('(max-width: 1023px)').matches) {
            document
                .getElementById('area-detail')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function startAreaQuiz(areaId: string): void {
        quizAreaId = areaId;
        openTab('quiz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetProgress(): void {
        if (confirm('Hapus semua progres belajar di browser ini?')) {
            progress.reset();
        }
    }
</script>

<AppHead title="Belajar DAMA-DMBOK" />

<div
    class="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]"
>
    <header
        class="border-b border-[#e3e3e0] bg-white/80 backdrop-blur dark:border-[#3E3E3A] dark:bg-[#161615]/80"
    >
        <div
            class="mx-auto flex max-w-7xl flex-col gap-5 px-4 pt-8 pb-0 lg:px-8"
        >
            <div class="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p
                        class="text-xs font-semibold tracking-widest text-[#f53003] uppercase dark:text-[#FF4433]"
                    >
                        Data Management Body of Knowledge
                    </p>
                    <h1
                        class="text-3xl font-semibold tracking-tight lg:text-4xl"
                    >
                        Belajar DAMA-DMBOK secara interaktif
                    </h1>
                    <p class="mt-1 max-w-2xl text-[#706f6c] dark:text-[#A1A09A]">
                        Jelajahi DAMA Wheel, pelajari context diagram tiap
                        knowledge area, lalu uji pemahamanmu lewat flashcard dan
                        kuis.
                    </p>
                </div>
                <div class="flex w-full flex-col gap-1.5 sm:w-64">
                    <div class="flex justify-between text-sm">
                        <span class="font-medium">Progres belajar</span>
                        <span
                            class="text-[#706f6c] tabular-nums dark:text-[#A1A09A]"
                            >{learnedCount}/{totalTopics} topik</span
                        >
                    </div>
                    <div
                        class="h-2 overflow-hidden rounded-full bg-[#e3e3e0] dark:bg-[#3E3E3A]"
                    >
                        <div
                            class="h-full rounded-full bg-emerald-600 transition-all"
                            style:width="{learnedPercentage}%"
                        ></div>
                    </div>
                    <button
                        type="button"
                        onclick={resetProgress}
                        class="self-end text-xs text-[#706f6c] underline-offset-2 hover:underline dark:text-[#A1A09A]"
                        >Reset progres</button
                    >
                </div>
            </div>

            <nav class="-mb-px flex gap-1 overflow-x-auto" aria-label="Bagian">
                {#each tabs as tab (tab.id)}
                    <button
                        type="button"
                        onclick={() => openTab(tab.id)}
                        aria-current={activeTab === tab.id ? 'page' : undefined}
                        class={cn(
                            'shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition',
                            activeTab === tab.id
                                ? 'border-[#f53003] text-[#1b1b18] dark:border-[#FF4433] dark:text-[#EDEDEC]'
                                : 'border-transparent text-[#706f6c] hover:text-[#1b1b18] dark:text-[#A1A09A] dark:hover:text-[#EDEDEC]',
                        )}
                    >
                        <span aria-hidden="true">{tab.icon}</span>
                        {tab.label}
                    </button>
                {/each}
            </nav>
        </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-10">
        {#if activeTab === 'wheel'}
            <div
                class="grid gap-10 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)]"
            >
                <aside class="flex flex-col gap-5 lg:sticky lg:top-6 lg:self-start">
                    <DamaWheel
                        selectedId={selectedAreaId}
                        onselect={selectArea}
                    />
                    <p
                        class="text-center text-sm text-[#706f6c] dark:text-[#A1A09A]"
                    >
                        Klik irisan wheel untuk mempelajari knowledge area.
                        Tanda ✓ menunjukkan area yang sudah kamu pelajari.
                    </p>
                    <div class="flex flex-col gap-2">
                        <p
                            class="text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]"
                        >
                            Topik terkait di DMBOK2
                        </p>
                        <div class="flex flex-wrap gap-2">
                            {#each relatedTopics as topic (topic.id)}
                                {@const isSelected = selectedAreaId === topic.id}
                                {@const weight = examWeight(topic.id)}
                                <button
                                    type="button"
                                    onclick={() => selectArea(topic.id)}
                                    aria-pressed={isSelected}
                                    title={topic.description}
                                    class={cn(
                                        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition',
                                        isSelected
                                            ? 'border-transparent text-white'
                                            : 'border-[#d6d6d1] hover:border-[#1b1b18] dark:border-[#3E3E3A] dark:hover:border-[#EDEDEC]',
                                    )}
                                    style:background-color={isSelected
                                        ? topic.color
                                        : undefined}
                                >
                                    {#if progress.isAreaLearned(topic.id)}
                                        <span aria-hidden="true">✓</span>
                                    {/if}
                                    {topic.name}
                                    {#if weight !== undefined}
                                        <span
                                            class={cn(
                                                'rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums',
                                                isSelected
                                                    ? 'bg-white/20'
                                                    : 'bg-[#fff2f2] text-[#c42700] dark:bg-[#1D0002] dark:text-[#FF4433]',
                                            )}
                                            title="Perkiraan porsi soal di ujian CDMP Data Management Fundamentals"
                                            >{weight}% ujian</span
                                        >
                                    {/if}
                                </button>
                            {/each}
                        </div>
                    </div>
                </aside>

                <div id="area-detail" class="scroll-mt-4">
                    {#if isOverviewSelected}
                        <DataManagementOverview
                            onselectarea={(areaId) => selectArea(areaId, true)}
                            onopenframeworks={() => {
                                openTab('frameworks');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            onstartquiz={startAreaQuiz}
                        />
                    {:else}
                        <KnowledgeAreaDetail
                            area={selectedArea}
                            onstartquiz={startAreaQuiz}
                        />
                    {/if}
                </div>
            </div>
        {:else if activeTab === 'frameworks'}
            <FrameworksSection />
        {:else if activeTab === 'flashcards'}
            <Flashcards />
        {:else}
            <Quiz
                initialAreaId={quizAreaId}
                onselectarea={(areaId) => {
                    selectedAreaId = areaId;
                    openTab('wheel');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            />
        {/if}
    </main>

    <footer
        class="border-t border-[#e3e3e0] px-4 py-8 text-sm text-[#706f6c] dark:border-[#3E3E3A] dark:text-[#A1A09A]"
    >
        <div class="mx-auto flex max-w-7xl flex-col gap-2 lg:px-4">
            <p class="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                Referensi
            </p>
            <ul class="flex flex-col gap-1">
                <li>
                    DAMA International, <em
                        >DAMA-DMBOK: Data Management Body of Knowledge</em
                    >, 2nd ed. revised (Technics Publications, 2024).
                </li>
                <li>
                    Infografis resmi:
                    <a
                        href="https://dama.org/dmbok2r-infographics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline underline-offset-2"
                        >dama.org/dmbok2r-infographics</a
                    >
                    (© 2024 DAMA International, CC BY-ND 4.0).
                </li>
            </ul>
            <p class="text-xs">
                Materi di halaman ini adalah ringkasan dan parafrase untuk
                keperluan belajar, bukan pengganti buku DMBOK. Progres disimpan
                di browser ini saja.
            </p>
        </div>
    </footer>
</div>
