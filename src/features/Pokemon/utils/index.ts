// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(cb: T, ms: number) {
  let timer: number | null = null

  return function (...args: Parameters<T>): void {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      cb(...args)
    }, ms)
  }
}
