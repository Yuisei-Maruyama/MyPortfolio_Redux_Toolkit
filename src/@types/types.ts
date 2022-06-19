export type Params = {
  id?: string
  name?: string
}

export interface Step {
  name: string
  activeStep: number
  steps: string[]
  id: string
  genre: 'FrontEnd' | 'BackEnd'
}

export interface Header {
  id: string
  label: string
  width?: number
  minWidth?: number
  manWidth?: number
  align?: 'right' | 'left'
  format?: (value: number) => string
}
