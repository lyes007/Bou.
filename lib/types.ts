export interface MenuItem {
  id: string
  name: string
  description: string
  price: number | string
  category: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
