import type { App } from 'vue'
import { BackTop } from './BackTop'
import { FilterGroup, FilterItem } from './FilterGroup'
export const setupComponents = (app: App<Element>): void => {
  app.component('BackTop', BackTop)
  app.component('FilterGroup', FilterGroup)
  app.component('FilterItem', FilterItem)
}
