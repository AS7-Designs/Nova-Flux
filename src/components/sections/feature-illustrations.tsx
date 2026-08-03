"use client";

import BellLinear from "@iconify-react/solar/bell-linear";
import BoltLinear from "@iconify-react/solar/bolt-linear";
import LetterLinear from "@iconify-react/solar/letter-linear";
import StarsLinear from "@iconify-react/solar/stars-linear";
import UserPlusLinear from "@iconify-react/solar/user-plus-linear";
import { motion } from "motion/react";
import type { ComponentProps, ComponentType } from "react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type FlowIcon = ComponentType<Omit<ComponentProps<typeof BellLinear>, "ref">>;

interface IllustrationProps {
  className?: string;
}

/** Theme chart palette — matches BorderBeam (--chart-1 … --chart-5) */
const CHART = {
  c1: "var(--chart-1)",
  c2: "var(--chart-2)",
  c3: "var(--chart-3)",
  c4: "var(--chart-4)",
  c5: "var(--chart-5)",
} as const;

/** SVG gradients aligned with hero BorderBeam pairs (1→2, 3→1) */
function ChartGradients({ prefix }: { prefix: string }) {
  return (
    <defs>
      <linearGradient id={`${prefix}-beam-primary`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={CHART.c1} />
        <stop offset="100%" stopColor={CHART.c2} />
      </linearGradient>
      <linearGradient id={`${prefix}-beam-secondary`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={CHART.c3} />
        <stop offset="100%" stopColor={CHART.c1} />
      </linearGradient>
      <linearGradient id={`${prefix}-bar`} x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor={CHART.c1} />
        <stop offset="100%" stopColor={CHART.c2} />
      </linearGradient>
      <linearGradient id={`${prefix}-area`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={CHART.c1} stopOpacity="0.14" />
        <stop offset="100%" stopColor={CHART.c1} stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

const wrapperBase = "text-foreground relative w-full overflow-hidden";

const FONT = "ui-sans-serif, system-ui, sans-serif";

const ease = [0.16, 1, 0.3, 1] as const;

/** Shared illustration rhythm */
const RADIUS = 3;
const GAP = 8;

/** Catmull-Rom → cubic Bézier smooth path through points */
function smoothPath(pts: readonly (readonly [number, number])[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/**
 * Animations play when scrolled into view. Each illustration's outer wrapper
 * drives the `hidden` → `visible` variant transition; child motion elements
 * inherit it and settle on their final populated state.
 */
const viewportOnce = { once: true, amount: 0.3 } as const;

/**
 * Loops an entrance animation by remounting the subtree on an interval. Each
 * remount replays the original `hidden` → `visible` sequence, then holds until
 * the next cycle — keeping the designed staggering intact on every pass.
 */
function useReplayKey(periodMs: number) {
  const [key, setKey] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setKey((k) => k + 1), periodMs);
    return () => clearInterval(id);
  }, [periodMs]);
  return key;
}

/* ============================================================ */
/* 1. AI Sales Dashboard                                        */
/* ============================================================ */
export function AnalyticsIllustration({ className }: IllustrationProps) {
  const bars = [
    { h: 22, label: "Apr" },
    { h: 36, label: "May" },
    { h: 20, label: "Jun" },
    { h: 46, label: "Jul" },
    { h: 32, label: "Aug" },
    { h: 100, label: "Sep", accent: true },
    { h: 42, label: "Oct" },
    { h: 54, label: "Nov" },
    { h: 30, label: "Dec" },
  ];
  const baseline = 200;
  const barW = 10;
  const barStride = 38;
  const barX0 = 32;
  const barCenter = (i: number) => barX0 + i * barStride + barW / 2;
  const chartRight = 380;

  // tooltip
  const TT_W = 52;
  const TT_H = 24;
  const TT_PAD = 6;
  const TT_GAP = GAP + 2; // bar top → tooltip bottom
  const tabW = 20;
  const tabH = 14;
  const tabGap = 4;
  const tabY = 26;
  const tabsTotalW = 3 * tabW + 2 * tabGap;
  const tabStartX = chartRight - tabsTotalW;

  const accentIndex = bars.findIndex((b) => b.accent);
  // tooltip enters just after its accent bar finishes growing
  const tooltipDelay = 0.1 + accentIndex * 0.05 + 0.55;

  // trend line through the bar tops, drawn after the bars settle
  const trendPoints = bars.map((b, i) => [barCenter(i), baseline - b.h - 6] as const);
  const trendD = smoothPath(trendPoints);
  const areaD = `${trendD} L ${trendPoints[trendPoints.length - 1][0]} ${baseline} L ${trendPoints[0][0]} ${baseline} Z`;
  const trendDelay = 0.5;
  const trendDuration = 1.3;

  const replayKey = useReplayKey(5000);

  return (
    <motion.div
      key={replayKey}
      className={cn(wrapperBase, "aspect-[16/9]", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <svg viewBox="20 22 360 202" className="absolute inset-0 h-full w-full" aria-hidden>
        <ChartGradients prefix="analytics" />
        {/* header */}
        <text x="20" y="32" fontSize="9" fontWeight="600" fill="currentColor" fillOpacity="0.85" fontFamily={FONT}>
          Pipeline Forecast
        </text>
        <text x="20" y={32 + GAP + 5} fontSize="6" fill="currentColor" fillOpacity="0.4" fontFamily={FONT}>
          Last 12 months
        </text>

        {/* filter tabs */}
        {["7D", "30D", "12M"].map((t, i) => {
          const x = tabStartX + i * (tabW + tabGap);
          const active = t === "12M";
          return (
            <g key={t}>
              <rect
                x={x}
                y={tabY}
                width={tabW}
                height={tabH}
                rx={RADIUS}
                fill={active ? "currentColor" : "none"}
                fillOpacity={active ? 0.06 : 0}
                stroke="currentColor"
                strokeOpacity={active ? 0.12 : 0.08}
                strokeWidth="1"
              />
              <text
                x={x + tabW / 2}
                y={tabY + tabH / 2 + 2}
                textAnchor="middle"
                fontSize="6"
                fontWeight="600"
                fill="currentColor"
                fillOpacity={active ? 0.85 : 0.5}
                fontFamily={FONT}
              >
                {t}
              </text>
            </g>
          );
        })}

        {/* gridlines */}
        {[100, 120, 140, 160, 180].map((y) => (
          <line
            key={y}
            x1="20"
            x2={chartRight}
            y1={y}
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.05"
            strokeDasharray="2 4"
          />
        ))}
        <line x1="20" x2={chartRight} y1={baseline} y2={baseline} stroke="currentColor" strokeOpacity="0.12" />

        {/* y axis labels */}
        {[
          { y: 104, label: "$200K" },
          { y: 124, label: "$160K" },
          { y: 144, label: "$120K" },
          { y: 164, label: "$80K" },
          { y: 184, label: "$40K" },
        ].map((g) => (
          <text
            key={g.label}
            x={chartRight}
            y={g.y}
            textAnchor="end"
            fontSize="5.5"
            fill="currentColor"
            fillOpacity="0.35"
            fontFamily={FONT}
          >
            {g.label}
          </text>
        ))}

        {/* bars (rounded top, square bottom) */}
        {bars.map((b, i) => {
          const x = barX0 + i * barStride;
          const r = 1.5;
          const buildD = (h: number) => {
            const yTop = baseline - h;
            if (h <= 0) {
              return `M ${x} ${baseline} L ${x} ${baseline} Q ${x} ${baseline} ${x + r} ${baseline} L ${x + barW - r} ${baseline} Q ${x + barW} ${baseline} ${x + barW} ${baseline} L ${x + barW} ${baseline} Z`;
            }
            return `M ${x} ${baseline} L ${x} ${yTop + r} Q ${x} ${yTop} ${x + r} ${yTop} L ${x + barW - r} ${yTop} Q ${x + barW} ${yTop} ${x + barW} ${yTop + r} L ${x + barW} ${baseline} Z`;
          };
          const d0 = buildD(0);
          const dFull = buildD(b.h);
          return (
            <motion.path
              key={b.label}
              d={d0}
              fill={b.accent ? "url(#analytics-bar)" : "currentColor"}
              fillOpacity={b.accent ? 1 : 0.1}
              variants={{ hidden: { d: d0 }, visible: { d: dFull } }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease }}
            />
          );
        })}

        {/* month labels */}
        {bars.map((b, i) => (
          <text
            key={`l-${b.label}`}
            x={barCenter(i)}
            y={baseline + GAP + 2}
            textAnchor="middle"
            fontSize="5.5"
            fill={b.accent ? CHART.c1 : "currentColor"}
            fillOpacity={b.accent ? 1 : 0.35}
            fontWeight={b.accent ? 600 : 400}
            fontFamily={FONT}
          >
            {b.label}
          </text>
        ))}

        {/* trend line + area fill drawn across the bar tops */}
        <motion.path
          d={areaD}
          fill="url(#analytics-area)"
          stroke="none"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{
            duration: 0.8,
            delay: trendDelay + trendDuration * 0.5,
            ease,
          }}
        />
        <motion.path
          d={trendD}
          fill="none"
          stroke="url(#analytics-beam-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: trendDuration, delay: trendDelay, ease }}
        />
        {/* dot tracing the trend line as it draws */}
        <motion.circle
          r="2.5"
          fill={CHART.c1}
          stroke="var(--card)"
          strokeWidth="1"
          variants={{
            hidden: { offsetDistance: "0%", opacity: 0 },
            visible: {
              offsetDistance: "100%",
              opacity: [0, 1, 1],
            },
          }}
          transition={{ duration: trendDuration, delay: trendDelay, ease }}
          style={{ offsetPath: `path('${trendD}')` }}
        />

        {/* tooltip on accent bar — equal padding, rounded */}
        {(() => {
          const i = bars.findIndex((b) => b.accent);
          const x = barCenter(i);
          const h = bars[i].h;
          const rectTop = baseline - h - TT_GAP - TT_H;
          const valueY = rectTop + TT_PAD + 5;
          const deltaY = rectTop + TT_H - TT_PAD - 1;
          return (
            <motion.g
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, delay: tooltipDelay, ease }}
            >
              <rect
                x={x - TT_W / 2}
                y={rectTop}
                width={TT_W}
                height={TT_H}
                rx={RADIUS}
                fill="currentColor"
                fillOpacity="0.95"
              />
              <text
                x={x}
                y={valueY}
                textAnchor="middle"
                fontSize="6.5"
                fontWeight="700"
                fill="var(--background)"
                fontFamily={FONT}
              >
                $204,820
              </text>
              <text
                x={x}
                y={deltaY}
                textAnchor="middle"
                fontSize="5.5"
                fontWeight="600"
                fill={CHART.c2}
                fontFamily={FONT}
              >
                ▲ 84% vs Aug
              </text>
              <path
                d={`M ${x - 3} ${rectTop + TT_H} L ${x} ${rectTop + TT_H + 3} L ${x + 3} ${rectTop + TT_H}`}
                fill="currentColor"
                fillOpacity="0.95"
              />
            </motion.g>
          );
        })()}
      </svg>
    </motion.div>
  );
}

/* ============================================================ */
/* 2. Contact Management                                        */
/* ============================================================ */
interface ContactFieldData {
  label: string;
  value: number;
  ai: boolean;
}

const CONTACT_FIELDS: ContactFieldData[] = [
  { label: "Email", value: 80, ai: false },
  { label: "Phone", value: 70, ai: false },
  { label: "Company", value: 76, ai: false },
  { label: "Industry", value: 0, ai: true },
  { label: "Headcount", value: 66, ai: false },
  { label: "Region", value: 74, ai: false },
];

/** Avatar, name, AI badge, and divider — shared by both contact layouts */
function ContactHeader({ clipId, badgeX, dividerX2 }: { clipId: string; badgeX: number; dividerX2: number }) {
  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <circle cx="34" cy="48" r="12" />
        </clipPath>
      </defs>

      {/* avatar (real image, clipped to circle) */}
      <circle cx="34" cy="48" r="12" fill="currentColor" opacity="0.08" />
      <image
        href="/images/avatars/1.webp"
        x="22"
        y="36"
        width="24"
        height="24"
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
      />

      {/* AI badge */}
      <motion.g
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
      >
        <rect x={badgeX} y="41" width="28" height="14" rx="7" fill={CHART.c5} fillOpacity="0.35" />
        <text
          x={badgeX + 14}
          y="50.5"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill={CHART.c1}
          fontFamily={FONT}
        >
          AI
        </text>
      </motion.g>

      {/* name + role */}
      <text x="54" y="46" fontSize="9" fontWeight="600" fill="currentColor" fillOpacity="0.85" fontFamily={FONT}>
        Maya Chen
      </text>
      <text x="54" y={46 + GAP + 5} fontSize="6.5" fill="currentColor" fillOpacity="0.45" fontFamily={FONT}>
        VP Sales · Basepoint
      </text>

      {/* divider */}
      <line x1="22" x2={dividerX2} y1="78" y2="78" stroke="currentColor" strokeOpacity="0.07" />
    </>
  );
}

function ContactField({
  field: f,
  labelX,
  valueX,
  y,
  rowDelay,
  aiRevealDelay,
}: {
  field: ContactFieldData;
  labelX: number;
  valueX: number;
  y: number;
  rowDelay: number;
  aiRevealDelay: number;
}) {
  return (
    <g>
      <motion.text
        x={labelX}
        y={y}
        fontSize="7"
        fontWeight="500"
        fill="currentColor"
        fontFamily={FONT}
        variants={{
          hidden: { fillOpacity: 0 },
          visible: { fillOpacity: 0.4 },
        }}
        transition={{ duration: 0.4, delay: rowDelay, ease }}
      >
        {f.label}
      </motion.text>
      {f.ai ? (
        <>
          {/* scanning placeholder — shimmers while AI enriches */}
          <motion.rect
            x={valueX}
            y={y - 9}
            width="72"
            height="12"
            rx={RADIUS}
            fill="currentColor"
            variants={{
              hidden: { fillOpacity: 0 },
              visible: { fillOpacity: [0, 0.1, 0.04, 0.1, 0] },
            }}
            transition={{
              duration: aiRevealDelay - rowDelay,
              delay: rowDelay,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            }}
          />
          <motion.g
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: aiRevealDelay,
            }}
            style={{
              transformOrigin: `${valueX + 36}px ${y - 3}px`,
            }}
          >
            <rect
              x={valueX}
              y={y - 9}
              width="72"
              height="12"
              rx={RADIUS}
              fill={CHART.c5}
              fillOpacity="0.25"
              stroke={CHART.c1}
              strokeOpacity="0.45"
            />
            <text x={valueX + 5} y={y - 0.5} fontSize="7" fontWeight="600" fill={CHART.c1} fontFamily={FONT}>
              Software (B2B)
            </text>
          </motion.g>
        </>
      ) : (
        <motion.rect
          x={valueX}
          y={y - 4}
          height="4"
          rx={RADIUS}
          fill="currentColor"
          opacity="0.55"
          variants={{
            hidden: { width: 0 },
            visible: { width: f.value },
          }}
          transition={{ duration: 0.6, delay: rowDelay + 0.1, ease }}
        />
      )}
    </g>
  );
}

export function TeamCollabIllustration({ className }: IllustrationProps) {
  const fieldStartY = 96;
  const fieldStep = GAP * 2;

  // scanning shimmer runs on the empty AI field, then the value pops in
  const aiRevealDelay = 1.4;

  const replayKey = useReplayKey(5600);

  return (
    <motion.div
      key={replayKey}
      className={cn("text-foreground relative aspect-[318/108] w-full overflow-hidden lg:aspect-[8/9]", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* portrait — single column of fields (lg+) */}
      <svg
        viewBox="22 32 156 175"
        className="relative hidden h-full w-full lg:block"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        <ContactHeader clipId="maya-avatar-portrait" badgeX={150} dividerX2={178} />
        {CONTACT_FIELDS.map((f, i) => (
          <ContactField
            key={f.label}
            field={f}
            labelX={22}
            valueX={80}
            y={fieldStartY + i * fieldStep}
            rowDelay={0.15 + i * 0.09}
            aiRevealDelay={aiRevealDelay}
          />
        ))}
      </svg>

      {/* landscape — fields in two columns, for mobile where the card is full width */}
      <svg
        viewBox="22 32 318 108"
        className="relative h-full w-full lg:hidden"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        <ContactHeader clipId="maya-avatar-landscape" badgeX={310} dividerX2={338} />
        {CONTACT_FIELDS.map((f, i) => {
          const col = i < 3 ? 0 : 1;
          const row = i % 3;
          return (
            <ContactField
              key={f.label}
              field={f}
              labelX={col === 0 ? 22 : 196}
              valueX={col === 0 ? 80 : 254}
              y={fieldStartY + row * fieldStep}
              rowDelay={0.15 + i * 0.09}
              aiRevealDelay={aiRevealDelay}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

/* ============================================================ */
/* 4. Sales Pipeline Automation                                 */
/* ============================================================ */
type FlowNode = {
  x: number;
  y: number;
  label: string;
  sublabel: string;
  icon: FlowIcon;
  accent?: boolean;
};

export function SmartTaskIllustration({ className }: IllustrationProps) {
  const VBW = 600;
  const VBH = 200;
  const nodeW = 104;
  const nodeH = 28;
  // inset so node strokes and the Assign pulse ring aren't clipped at the edges
  const hInset = 6;
  const colGap = (VBW - 2 * hInset - 4 * nodeW) / 3;
  const midY = VBH / 2;
  const midNodeY = midY - nodeH / 2;

  // 4 columns with equal horizontal gaps
  const col1X = hInset;
  const col2X = col1X + nodeW + colGap;
  const col3X = col2X + nodeW + colGap;
  const col4X = col3X + nodeW + colGap;

  const vInset = GAP;
  const topY = vInset;
  const bottomY = VBH - nodeH - vInset;
  const topCenterY = topY + nodeH / 2;
  const bottomCenterY = bottomY + nodeH / 2;

  const trigger: FlowNode = {
    x: col1X,
    y: midNodeY,
    label: "New deal created",
    sublabel: "Trigger",
    icon: BoltLinear,
  };
  const condition: FlowNode = {
    x: col2X,
    y: midNodeY,
    label: "AI deal score",
    sublabel: "Condition",
    icon: StarsLinear,
  };
  const notify: FlowNode = {
    x: col3X,
    y: topY,
    label: "Notify in Slack",
    sublabel: "Action",
    icon: BellLinear,
  };
  const sequence: FlowNode = {
    x: col3X,
    y: bottomY,
    label: "Add to sequence",
    sublabel: "Action",
    icon: LetterLinear,
  };
  const assign: FlowNode = {
    x: col4X,
    y: midNodeY,
    label: "Assign to AE",
    sublabel: "Action",
    icon: UserPlusLinear,
  };

  // junction x positions (midpoints between columns) for right-angle rails
  const jx12 = col1X + nodeW + (col2X - (col1X + nodeW)) / 2; // trigger→AI
  const jx23 = col2X + nodeW + (col3X - (col2X + nodeW)) / 2; // AI→col3
  const jx34 = col3X + nodeW + (col4X - (col3X + nodeW)) / 2; // col3→assign

  // corner radius for the rounded right-angle joints
  const r = 4;

  // path segments with rounded corners
  const railAIToNotify = `M ${col2X + nodeW} ${midY} H ${jx23 - r} Q ${jx23} ${midY} ${jx23} ${midY - r} V ${topCenterY + r} Q ${jx23} ${topCenterY} ${jx23 + r} ${topCenterY} H ${col3X}`;
  const railAIToSequence = `M ${col2X + nodeW} ${midY} H ${jx23 - r} Q ${jx23} ${midY} ${jx23} ${midY + r} V ${bottomCenterY - r} Q ${jx23} ${bottomCenterY} ${jx23 + r} ${bottomCenterY} H ${col3X}`;
  const railNotifyToAssign = `M ${col3X + nodeW} ${topCenterY} H ${jx34 - r} Q ${jx34} ${topCenterY} ${jx34} ${topCenterY + r} V ${midY - r} Q ${jx34} ${midY} ${jx34 + r} ${midY} H ${col4X}`;
  const railSequenceToAssign = `M ${col3X + nodeW} ${bottomCenterY} H ${jx34 - r} Q ${jx34} ${bottomCenterY} ${jx34} ${bottomCenterY - r} V ${midY + r} Q ${jx34} ${midY} ${jx34 + r} ${midY} H ${col4X}`;
  const activeRoute = `M ${col1X + nodeW} ${midY} H ${jx23 - r} Q ${jx23} ${midY} ${jx23} ${midY - r} V ${topCenterY + r} Q ${jx23} ${topCenterY} ${jx23 + r} ${topCenterY} H ${jx34 - r} Q ${jx34} ${topCenterY} ${jx34} ${topCenterY + r} V ${midY - r} Q ${jx34} ${midY} ${jx34 + r} ${midY} H ${col4X + nodeW}`;

  // nodes cascade in, then the active route draws and lights nodes up
  // as the signal passes through them
  const nodeDelay = (col: number) => 0.05 + col * 0.12;
  const routeDelay = 0.7;
  const drawDuration = 2.6;
  const notifyDelay = routeDelay + drawDuration * 0.52;
  const assignDelay = routeDelay + drawDuration - 0.05;

  const nodeColumn = new Map<string, number>([
    [trigger.label, 0],
    [condition.label, 1],
    [notify.label, 2],
    [sequence.label, 2],
    [assign.label, 3],
  ]);

  const replayKey = useReplayKey(6400);

  return (
    <motion.div
      key={replayKey}
      className={cn(wrapperBase, "aspect-[3/1]", className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <svg
        viewBox={`0 0 ${VBW} ${VBH}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden
        shapeRendering="geometricPrecision"
      >
        <ChartGradients prefix="flow" />
        {/* dotted rails with rounded corners (under nodes) */}
        <g
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
          strokeDasharray="1 3"
          strokeLinecap="round"
          fill="none"
        >
          {/* trigger → AI (straight) */}
          <path d={`M ${col1X + nodeW} ${midY} H ${col2X}`} />
          <path d={railAIToNotify} />
          <path d={railNotifyToAssign} />
          <path d={railSequenceToAssign} />
        </g>

        {/* inactive branch rail — secondary beam tint (3→1) */}
        <path
          d={railAIToSequence}
          stroke="url(#flow-beam-secondary)"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="1 3"
          strokeLinecap="round"
          fill="none"
        />

        {/* active animated path: trigger → AI → top route (Notify) → Assign */}
        <motion.path
          d={activeRoute}
          stroke="url(#flow-beam-primary)"
          strokeOpacity="0.85"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
          transition={{ duration: drawDuration, delay: routeDelay, ease }}
        />

        {/* signal pulse traveling ahead of the drawn line */}
        <motion.circle
          r="2.5"
          fill={CHART.c1}
          variants={{
            hidden: { offsetDistance: "0%", opacity: 0 },
            visible: { offsetDistance: "100%", opacity: [0, 1, 1, 0] },
          }}
          transition={{
            duration: drawDuration,
            delay: routeDelay,
            times: [0, 0.05, 0.92, 1],
            ease,
          }}
          style={{ offsetPath: `path('${activeRoute}')` }}
        />

        {/* junction dots (Assign entry pulses when the line arrives) */}
        <g>
          <circle cx={col2X + nodeW} cy={midY} r={1.4} fill={CHART.c1} fillOpacity={0.75} />
          <circle cx={col3X} cy={topCenterY} r={1.4} fill={CHART.c3} fillOpacity={0.75} />
          <circle cx={col3X} cy={bottomCenterY} r={1.4} fill={CHART.c5} fillOpacity={0.5} />
          <circle cx={col3X + nodeW} cy={topCenterY} r={1.4} fill={CHART.c2} fillOpacity={0.65} />
          <circle cx={col3X + nodeW} cy={bottomCenterY} r={1.4} fill={CHART.c5} fillOpacity={0.35} />
          <motion.circle
            cx={col4X}
            cy={midY}
            r={1.4}
            fill={CHART.c1}
            variants={{
              hidden: { fillOpacity: 0 },
              visible: { fillOpacity: 0.85 },
            }}
            transition={{ duration: 0.4, delay: assignDelay, ease }}
          />
        </g>

        {/* nodes (opaque bg so rails go under) — cascade in by column */}
        {[trigger, condition, notify, sequence, assign].map((n) => (
          <motion.g
            key={n.label}
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.5,
              delay: nodeDelay(nodeColumn.get(n.label) ?? 0),
              ease,
            }}
          >
            <FlowNodeCard node={n} w={nodeW} h={nodeH} />
          </motion.g>
        ))}

        {/* Notify lights up as the signal passes through it */}
        <motion.g
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: [0, 1, 0.55] },
          }}
          transition={{
            duration: 1.1,
            delay: notifyDelay,
            times: [0, 0.35, 1],
            ease,
          }}
        >
          <FlowNodeCard node={{ ...notify, accent: true }} w={nodeW} h={nodeH} />
        </motion.g>

        {/* Assign accent overlay — fades in when the animated line reaches it */}
        <motion.g
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.4, delay: assignDelay, ease }}
        >
          <FlowNodeCard node={{ ...assign, accent: true }} w={nodeW} h={nodeH} />
        </motion.g>

        {/* soft pulse ring when the signal lands on Assign */}
        <motion.rect
          x={col4X - 3}
          y={midNodeY - 3}
          width={nodeW + 6}
          height={nodeH + 6}
          rx={RADIUS + 2}
          fill="none"
          stroke={CHART.c1}
          strokeWidth="1"
          variants={{
            hidden: { opacity: 0, scale: 1 },
            visible: { opacity: [0, 0.5, 0], scale: [0.98, 1.04, 1.08] },
          }}
          transition={{ duration: 0.9, delay: assignDelay, ease: "easeOut" }}
          style={{
            transformOrigin: `${col4X + nodeW / 2}px ${midY}px`,
          }}
        />
      </svg>
    </motion.div>
  );
}

function FlowNodeCard({ node, w, h }: { node: FlowNode; w: number; h: number }) {
  const { x, y, label, sublabel, icon: Icon, accent } = node;
  const iconSize = 10;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={RADIUS}
        fill="var(--background)"
        stroke={accent ? CHART.c1 : "currentColor"}
        strokeOpacity={accent ? 0.55 : 0.2}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <Icon
        x={String(x + GAP - 1)}
        y={String(y + h / 2 - iconSize / 2)}
        width={String(iconSize)}
        height={String(iconSize)}
        style={{
          color: accent ? CHART.c1 : "currentColor",
          opacity: accent ? 1 : 0.65,
        }}
      />
      <text
        x={x + GAP + iconSize + 4}
        y={y + h / 2 - 1}
        fontSize="7.5"
        fontWeight="600"
        fill="currentColor"
        fillOpacity="0.88"
        fontFamily={FONT}
      >
        {label}
      </text>
      <text
        x={x + GAP + iconSize + 4}
        y={y + h / 2 + 7.5}
        fontSize="5.5"
        fontWeight="600"
        letterSpacing="0.6"
        fill={accent ? CHART.c1 : "currentColor"}
        fillOpacity={accent ? 1 : 0.4}
        fontFamily={FONT}
      >
        {sublabel.toUpperCase()}
      </text>
    </g>
  );
}
