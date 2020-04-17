export interface Rect {
  height: number
  width: number
  top: number
  left: number
}

export interface OverlayItem {
  id: string
  children: React.ReactNode
  rect: {
    top: number
    left: number
    width: number
    height: number
  }
  data: any
}
