import MenuItemCard from './MenuItemCard'
import type { MenuItem } from '@/lib/types'

const ACCENT_STYLES: Record<string, string> = {
  tiramisu: 'border-l-[#C04742] bg-rose-50/40',
  espresso: 'border-l-[#5C4033] bg-stone-50/50',
  specialty: 'border-l-[#6B7280] bg-stone-50/40',
  cold: 'border-l-[#2E5090] bg-sky-50/30',
  extras: 'border-l-[#6B7B5C] bg-stone-50/50',
}

interface MenuCategoryProps {
  title: string
  items: MenuItem[]
  accent?: keyof typeof ACCENT_STYLES
}

export default function MenuCategory({ title, items, accent = 'tiramisu' }: MenuCategoryProps) {
  const style = ACCENT_STYLES[accent] ?? ACCENT_STYLES.tiramisu
  return (
    <section className={`mb-10 sm:mb-12 pl-4 border-l-4 rounded-r-md ${style} py-3 pr-3 -mx-1 sm:mx-0 sm:pl-5`}>
      <h2 className="text-[11px] font-semibold text-gray-700 uppercase tracking-widest mb-4">
        {title}
      </h2>
      <ul className="space-y-0">
        {items.map(item => (
          <MenuItemCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  )
}
