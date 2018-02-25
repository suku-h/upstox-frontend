import Data from '../../shared/pojos/data'
import SortType from '../../shared/pojos/sorttype'

export default class DataState {
  data: Data[]
  sortType: SortType

  static getInitialState() {
    const dataState = new DataState()
    dataState.data = []

    dataState.sortType = new SortType()
    dataState.sortType.order = 'time_up'
    dataState.sortType.setSortString()

    return dataState
  }
}