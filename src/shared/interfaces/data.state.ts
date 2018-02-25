import Data from '../pojos/data'
import SortType from '../pojos/sorttype'

export default interface DataState {
  data: Data[]
  sortType: SortType
}