import { capitalizeFirstLetter } from '../utils/util'
export default class SortType {
  order: 'time_up' | 'time_down' | 'close_up' | 'close_down'
  sortString: string

  setSortString() {
    const strArr = this.order.split('_')
    this.sortString = capitalizeFirstLetter(strArr[0]) + '(' + capitalizeFirstLetter(strArr[1]) + ')'
  }
}