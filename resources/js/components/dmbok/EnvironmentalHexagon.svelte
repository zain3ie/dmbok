<script lang="ts">
    import { hexagonFactors } from '@/lib/dmbok/frameworks';
    import type { HexagonFactor } from '@/lib/dmbok/frameworks';

    const groupColors: Record<HexagonFactor['group'], string> = {
        Inti: '#334155',
        People: '#b45309',
        Process: '#0369a1',
        Technology: '#047857',
    };

    const labelLines: Record<string, string[]> = {
        goals: ['Goals &', 'Principles'],
        roles: ['Roles &', 'Responsibilities'],
        organization: ['Organization', '& Culture'],
        activities: ['Activities'],
        deliverables: ['Deliverables'],
        techniques: ['Techniques'],
        tools: ['Tools'],
    };

    let selectedId = $state('goals');

    const center = 220;
    const outerRadius = 205;
    const innerRadius = 82;

    function vertex(radius: number, index: number): [number, number] {
        const radians = ((-90 + index * 60) * Math.PI) / 180;

        return [
            center + radius * Math.cos(radians),
            center + radius * Math.sin(radians),
        ];
    }

    function toPoints(points: [number, number][]): string {
        return points.map(([x, y]) => `${x},${y}`).join(' ');
    }

    const centerFactor = hexagonFactors[0];
    const outerFactors = hexagonFactors.slice(1);

    const segments = outerFactors.map((factor, index) => {
        const midRadians = ((-60 + index * 60) * Math.PI) / 180;
        const labelRadius = (outerRadius + innerRadius) / 2 - 4;

        return {
            factor,
            points: toPoints([
                vertex(outerRadius, index),
                vertex(outerRadius, index + 1),
                vertex(innerRadius, index + 1),
                vertex(innerRadius, index),
            ]),
            labelX: center + labelRadius * Math.cos(midRadians),
            labelY: center + labelRadius * Math.sin(midRadians),
        };
    });

    const innerPoints = toPoints(
        [0, 1, 2, 3, 4, 5].map((index) => vertex(innerRadius - 4, index)),
    );

    const selected = $derived(
        hexagonFactors.find((factor) => factor.id === selectedId)!,
    );

    function handleKeydown(event: KeyboardEvent, factorId: string): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectedId = factorId;
        }
    }
</script>

{#snippet label(lines: string[], x: number, y: number, size: number)}
    <text
        {x}
        {y}
        text-anchor="middle"
        class="pointer-events-none fill-white font-semibold"
        style:font-size="{size}px"
    >
        {#each lines as line, lineIndex (lineIndex)}
            <tspan
                {x}
                dy={lineIndex === 0
                    ? `${-(lines.length - 1) * 0.6 + 0.35}em`
                    : '1.2em'}>{line}</tspan
            >
        {/each}
    </text>
{/snippet}

<div class="grid items-center gap-6 md:grid-cols-[minmax(0,360px)_1fr]">
    <svg
        viewBox="0 0 440 440"
        class="mx-auto h-auto w-full max-w-90 select-none"
        role="group"
        aria-label="Environmental Factors Hexagon"
    >
        {#each segments as segment (segment.factor.id)}
            <g
                role="button"
                tabindex="0"
                aria-label={segment.factor.name}
                aria-pressed={selectedId === segment.factor.id}
                class="cursor-pointer outline-none"
                style:opacity={selectedId === segment.factor.id ? 1 : 0.7}
                onclick={() => (selectedId = segment.factor.id)}
                onkeydown={(event) => handleKeydown(event, segment.factor.id)}
            >
                <polygon
                    points={segment.points}
                    fill={groupColors[segment.factor.group]}
                    class="stroke-[#FDFDFC] stroke-3 transition-opacity dark:stroke-[#0a0a0a]"
                />
                {@render label(
                    labelLines[segment.factor.id],
                    segment.labelX,
                    segment.labelY,
                    13,
                )}
            </g>
        {/each}
        <g
            role="button"
            tabindex="0"
            aria-label={centerFactor.name}
            aria-pressed={selectedId === centerFactor.id}
            class="cursor-pointer outline-none"
            style:opacity={selectedId === centerFactor.id ? 1 : 0.8}
            onclick={() => (selectedId = centerFactor.id)}
            onkeydown={(event) => handleKeydown(event, centerFactor.id)}
        >
            <polygon
                points={innerPoints}
                fill={groupColors.Inti}
                class="stroke-[#FDFDFC] stroke-3 dark:stroke-[#0a0a0a]"
            />
            {@render label(labelLines.goals, center, center, 14)}
        </g>
    </svg>

    <div class="flex flex-col gap-3">
        <div class="flex flex-wrap gap-2 text-xs font-medium">
            {#each ['People', 'Process', 'Technology'] as const as group (group)}
                <span class="inline-flex items-center gap-1.5">
                    <span
                        class="size-2.5 rounded-sm"
                        style:background-color={groupColors[group]}
                    ></span>
                    {group}
                </span>
            {/each}
        </div>
        <div
            class="rounded-lg border-l-4 bg-white p-5 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
            style:border-left-color={groupColors[selected.group]}
            aria-live="polite"
        >
            <p
                class="text-xs font-semibold tracking-wide text-[#706f6c] uppercase dark:text-[#A1A09A]"
            >
                {selected.group === 'Inti' ? 'Pusat hexagon' : selected.group}
            </p>
            <h4 class="text-lg font-semibold">{selected.name}</h4>
            <p class="mb-2 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                {selected.nameId}
            </p>
            <p class="text-sm">{selected.description}</p>
            <p class="mt-3 text-sm font-medium">❓ {selected.question}</p>
        </div>
    </div>
</div>
