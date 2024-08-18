
export const useAsyncInterval = () => {
  const asyncIntervals: Array<boolean> = []
  const runAsyncInterval = async (callback: Function, delay: number, intervalIndex: number) => {
    await callback()
    if (asyncIntervals[intervalIndex]) {
      setTimeout(() => runAsyncInterval(callback, delay, intervalIndex), delay)
    }
  }
  const setAsyncInterval = (callback: Function, delay: number) => {
    if (callback && typeof callback === "function") {
      const intervalIndex = asyncIntervals.length
      asyncIntervals.push(true)
      runAsyncInterval(callback, delay, intervalIndex)
      return intervalIndex
    } else {
      throw new Error('Callback must be a function')
    }
  }
  const clearAsyncInterval = (intervalIndex: number) => {
    if (asyncIntervals[intervalIndex]) {
      asyncIntervals[intervalIndex] = false
    }
  }
  return { setAsyncInterval, clearAsyncInterval }
}