export const completer = <T>() => {
  let completer: (value: T) => void = () => {}
  let reject: (reason?: any) => void = () => {}
  const promise = new Promise<T>((resolver, r) => {
    completer = resolver
    reject = r
  })
  return {
    completer,
    reject,
    promise
  }
}
