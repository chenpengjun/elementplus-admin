import type { InjectionKey, WritableComputedRef } from 'vue'
type FilterGroupContext = {
  groupValue: WritableComputedRef<any>
  changeEvent: (...args: any) => any
  type: String
  registerItem: (...args: any) => any
}
export const filterGroupContextKey: InjectionKey<FilterGroupContext> =
  Symbol('filterGroupContextKey')
