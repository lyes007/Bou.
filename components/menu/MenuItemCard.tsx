import type { MenuItem } from '@/lib/types'

export default function MenuItemCard({ name, description, price }: MenuItem) {
  return (
    <li className="flex items-baseline justify-between gap-4 py-2.5 px-2 -mx-2 rounded-md border-b border-gray-100 last:border-0 text-[13px] transition-colors hover:bg-gray-50">
      <div className="min-w-0">
        <span className="font-medium text-stone-800">{name}</span>
        {description && description !== '—' && (
          <span className="text-stone-500 font-normal"> · {description}</span>
        )}
      </div>
      <span className="font-semibold text-black tabular-nums shrink-0">{price}</span>
    </li>
  )
}
