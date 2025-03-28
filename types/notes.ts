export interface Note {
  id?: number
  title: string
  content: string
  favorite: boolean
  archived?: boolean
  deletedAt?: string
  userId: number
  tags: string[]
}
