<script lang="ts">
    import { examWeight } from '@/lib/dmbok/exam';
    import { governanceArea, wheelAreas } from '@/lib/dmbok/knowledge-areas';
    import { progress } from '@/lib/dmbok/progress.svelte';

    let {
        selectedId,
        onselect,
    }: {
        selectedId: string;
        onselect: (areaId: string) => void;
    } = $props();

    let hoveredId = $state<string | null>(null);

    const center = 260;
    const innerRadius = 98;
    const outerRadius = 246;
    const labelRadius = 174;
    const sliceAngle = 360 / wheelAreas.length;

    function polar(radius: number, angle: number): [number, number] {
        const radians = (angle * Math.PI) / 180;

        return [
            center + radius * Math.cos(radians),
            center + radius * Math.sin(radians),
        ];
    }

    const slices = wheelAreas.map((area, index) => {
        const startAngle = -90 - sliceAngle / 2 + index * sliceAngle;
        const endAngle = startAngle + sliceAngle;
        const midAngle = startAngle + sliceAngle / 2;
        const [outerStartX, outerStartY] = polar(outerRadius, startAngle);
        const [outerEndX, outerEndY] = polar(outerRadius, endAngle);
        const [innerEndX, innerEndY] = polar(innerRadius, endAngle);
        const [innerStartX, innerStartY] = polar(innerRadius, startAngle);
        const [labelX, labelY] = polar(labelRadius, midAngle);
        const [badgeX, badgeY] = polar(outerRadius - 22, midAngle);
        const radians = (midAngle * Math.PI) / 180;

        return {
            area,
            path: [
                `M ${outerStartX} ${outerStartY}`,
                `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEndX} ${outerEndY}`,
                `L ${innerEndX} ${innerEndY}`,
                `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStartX} ${innerStartY}`,
                'Z',
            ].join(' '),
            labelX,
            labelY,
            badgeX,
            badgeY,
            offsetX: Math.cos(radians) * 10,
            offsetY: Math.sin(radians) * 10,
        };
    });

    const wheelIds = [governanceArea.id, ...wheelAreas.map((area) => area.id)];

    const highlightedId = $derived(
        [hoveredId, selectedId].find(
            (id) => id !== null && wheelIds.includes(id),
        ) ?? null,
    );

    function handleKeydown(event: KeyboardEvent, areaId: string): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onselect(areaId);
        }
    }
</script>

<svg
    viewBox="0 0 520 520"
    class="h-auto w-full max-w-130 overflow-visible select-none"
    role="group"
    aria-label="DAMA Wheel: pilih knowledge area"
>
    {#each slices as slice (slice.area.id)}
        {@const isSelected = selectedId === slice.area.id}
        <g
            role="button"
            tabindex="0"
            aria-label={slice.area.name}
            aria-pressed={isSelected}
            class="cursor-pointer outline-none transition-[transform,opacity] duration-300 ease-out focus-visible:[&>path]:stroke-[#f53003]"
            style:transform={isSelected
                ? `translate(${slice.offsetX}px, ${slice.offsetY}px)`
                : 'none'}
            style:opacity={highlightedId && highlightedId !== slice.area.id
                ? 0.72
                : 1}
            onclick={() => onselect(slice.area.id)}
            onkeydown={(event) => handleKeydown(event, slice.area.id)}
            onmouseenter={() => (hoveredId = slice.area.id)}
            onmouseleave={() => (hoveredId = null)}
        >
            <path
                d={slice.path}
                fill={slice.area.color}
                class="stroke-[#FDFDFC] stroke-3 dark:stroke-[#0a0a0a]"
            />
            <text
                x={slice.labelX}
                y={slice.labelY}
                text-anchor="middle"
                class="pointer-events-none fill-white text-[12.5px] font-semibold"
            >
                {#each slice.area.shortLabel as line, lineIndex (lineIndex)}
                    <tspan
                        x={slice.labelX}
                        dy={lineIndex === 0
                            ? `${-slice.area.shortLabel.length * 0.6 + 0.35}em`
                            : '1.2em'}>{line}</tspan
                    >
                {/each}
                <tspan
                    x={slice.labelX}
                    dy="1.35em"
                    class="text-[11px] font-medium opacity-85"
                    >{examWeight(slice.area.id)}% ujian</tspan
                >
            </text>
            {#if progress.isAreaLearned(slice.area.id)}
                <g class="pointer-events-none">
                    <circle
                        cx={slice.badgeX}
                        cy={slice.badgeY}
                        r="9"
                        class="fill-white"
                    />
                    <path
                        d="M {slice.badgeX - 4} {slice.badgeY} l 3 3 l 5 -6"
                        fill="none"
                        stroke={slice.area.color}
                        stroke-width="2.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </g>
            {/if}
        </g>
    {/each}

    <g
        role="button"
        tabindex="0"
        aria-label={governanceArea.name}
        aria-pressed={selectedId === governanceArea.id}
        class="cursor-pointer outline-none focus-visible:[&>circle]:stroke-[#f53003]"
        style:opacity={highlightedId && highlightedId !== governanceArea.id
            ? 0.85
            : 1}
        onclick={() => onselect(governanceArea.id)}
        onkeydown={(event) => handleKeydown(event, governanceArea.id)}
        onmouseenter={() => (hoveredId = governanceArea.id)}
        onmouseleave={() => (hoveredId = null)}
    >
        <circle
            cx={center}
            cy={center}
            r={innerRadius - 6}
            fill={governanceArea.color}
            class="stroke-[#FDFDFC] stroke-3 dark:stroke-[#0a0a0a]"
        />
        <text
            x={center}
            y={center}
            text-anchor="middle"
            class="pointer-events-none fill-white text-[17px] font-semibold"
        >
            <tspan x={center} dy="-0.7em">Data</tspan>
            <tspan x={center} dy="1.2em">Governance</tspan>
            <tspan
                x={center}
                dy="1.5em"
                class="text-[12px] font-medium opacity-85"
                >{examWeight(governanceArea.id)}% ujian</tspan
            >
        </text>
        {#if progress.isAreaLearned(governanceArea.id)}
            <text
                x={center}
                y={center + 50}
                text-anchor="middle"
                class="pointer-events-none fill-white/80 text-[11px]"
                >✓ dipelajari</text
            >
        {/if}
    </g>
</svg>
