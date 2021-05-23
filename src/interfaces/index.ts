export interface Experience {
  src: string
  title: string
  company: string
  type: string
  date: string
  description: string
  stacks: Stack[]
}

interface Stack {
  src: string
  name: string
}