import { Binary, BrainCircuit, Crosshair, DatabaseZap, ShieldCheck } from 'lucide-react';

const systemsView = [
  {
    label: 'PEOPLE',
    title: 'ผู้นำและทุนมนุษย์',
    icon: BrainCircuit,
  },
  {
    label: 'TECHNOLOGY',
    title: 'เทคโนโลยีที่ใช้งานได้จริง',
    icon: Binary,
  },
  {
    label: 'DATA',
    title: 'ข้อมูลเพื่อการตัดสินใจ',
    icon: DatabaseZap,
  },
  {
    label: 'OPERATIONS',
    title: 'ระบบงานและการนำไปใช้',
    icon: Crosshair,
  },
  {
    label: 'OUTCOMES',
    title: 'ความมั่นคงและความพร้อม',
    icon: ShieldCheck,
  },
] as const;

export default function StrategicDomainRail() {
  return (
    <div className="border border-atlas-teal/35 bg-atlas-void/88">
      <div className="flex items-center gap-3 border-b border-atlas-teal/25 px-4 py-2 text-xs font-semibold text-atlas-teal sm:px-6">
        <span className="h-px w-8 bg-atlas-teal/70" />
        SYSTEMS VIEW
      </div>
      <div className="grid grid-cols-1 divide-y divide-subtle-border/80 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
        {systemsView.map(({ label, title, icon: Icon }) => (
          <div key={label} className="flex min-h-[88px] items-center gap-3 px-4 py-4 sm:px-5">
            <Icon className="size-5 flex-shrink-0 text-atlas-teal" aria-hidden="true" />
            <div>
              <p className="text-[0.68rem] font-bold leading-none text-strategic-gold">{label}</p>
              <p className="mt-2 text-sm leading-snug text-ink-secondary">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
