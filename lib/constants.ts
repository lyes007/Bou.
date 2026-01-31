import type { MenuItem } from './types'

export const tiramisu: MenuItem[] = [
  { id: '1', name: 'Classique', description: 'Mascarpone, café, cacao', price: '13 DT', category: 'Tiramisu' },
  { id: '2', name: 'Spéculoos', description: 'Biscuit spéculoos', price: '13 DT', category: 'Tiramisu' },
  { id: '3', name: 'Fraise', description: 'Fraise fraîche', price: '13 DT', category: 'Tiramisu' },
  { id: '4', name: 'Nutella', description: 'Nutella', price: '13 DT', category: 'Tiramisu' },
  { id: '5', name: 'Pistache', description: 'Pistache', price: '15 DT', category: 'Tiramisu' },
  { id: '6', name: 'Surprise', description: 'Variation du moment', price: '15 DT', category: 'Tiramisu' },
]

export const espresso: MenuItem[] = [
  { id: '7', name: 'Espresso', description: '100% Arabica', price: '5 DT', category: 'Espresso' },
  { id: '8', name: 'Americano', description: '100% Arabica', price: '5 DT', category: 'Espresso' },
  { id: '9', name: 'Doppio', description: 'Double shot', price: '6 DT', category: 'Espresso' },
  { id: '10', name: 'Capsule', description: 'Espresso capsule', price: '7 DT', category: 'Espresso' },
]

export const specialty: MenuItem[] = [
  { id: '11', name: 'Latte Pistache', description: 'Pistache', price: '15 DT', category: 'Spécialités' },
  { id: '12', name: 'Latte Noisette', description: 'Noisette', price: '15 DT', category: 'Spécialités' },
  { id: '13', name: 'Caffè Bou de la semaine', description: 'Café du jour', price: '15 DT', category: 'Spécialités' },
  { id: '14', name: 'Caffè Bou Tiramisu', description: 'Tiramisu', price: '15 DT', category: 'Spécialités' },
  { id: '15', name: 'Caffè Bou Caramel', description: 'Caramel', price: '10 DT', category: 'Spécialités' },
  { id: '16', name: 'Latte Espagnol', description: 'Condensé, cannelle', price: '9 DT', category: 'Spécialités' },
  { id: '17', name: 'Chocolat chaud', description: 'Chocolat noir', price: '8 DT', category: 'Spécialités' },
  { id: '18', name: 'Cappuccino', description: '—', price: '7 DT', category: 'Spécialités' },
  { id: '19', name: 'Latte Macchiato', description: '—', price: '5 DT', category: 'Spécialités' },
]

export const cold: MenuItem[] = [
  { id: '20', name: 'Eau 0,5 L', description: '—', price: '2 DT', category: 'Boissons Froides' },
  { id: '21', name: 'Jus', description: 'Assortiment du jour', price: '4 DT', category: 'Boissons Froides' },
  { id: '22', name: 'Jus frais', description: 'Pressé sur place', price: '6 DT', category: 'Boissons Froides' },
  { id: '23', name: 'Soda', description: '—', price: '4 DT', category: 'Boissons Froides' },
]

export const extras: MenuItem[] = [
  { id: '24', name: 'Crème Chantilly', description: '—', price: '2 DT', category: 'Suppléments' },
  { id: '25', name: 'Guimauve', description: '—', price: '2 DT', category: 'Suppléments' },
  { id: '26', name: 'Lait d\'amande', description: '—', price: '3 DT', category: 'Suppléments' },
  { id: '27', name: 'Lait d\'avoine', description: '—', price: '3 DT', category: 'Suppléments' },
]

export const menuCategories = {
  tiramisu,
  espresso,
  specialty,
  cold,
  extras,
}
