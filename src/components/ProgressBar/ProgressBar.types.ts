export type ProgressBarProps = {
  progress: number
  label?: string
  colors: {
    color: string
    bg: string
  }
}

export type CircularProgressBarProps = {
  progress: number
  label?: string
}
