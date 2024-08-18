export const fallback = <T extends (...args: any) => any>(action?: T) => {
  return {
    or: <F extends (...args: any) => any>(fallback?: F) => ({
      context: null,
      bind(context: any) {
        this.context = context
        return this
      },
      then(...args: Parameters<T>) {
        if (action) {
          action.call(this.context, ...args)
          return {
            else: () => {}
          }
        }
        return this
      },
      else(...args: Parameters<F>) {
        if (fallback) {
          fallback.call(this.context, ...args)
        }
      }
    })
  }
}
