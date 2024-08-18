import type { ComputedRef } from 'vue'

export type BreakpointFunctionType = () => ComputedRef<boolean>

export type BreakpointType = {
  mobile: BreakpointFunctionType
  smallTablet: BreakpointFunctionType
  mediumTablet: BreakpointFunctionType
  smallDesktop: BreakpointFunctionType
  mediumDesktop: BreakpointFunctionType
}

export type BreakpointBooleanType = {
  [key in keyof BreakpointType]: boolean
}
