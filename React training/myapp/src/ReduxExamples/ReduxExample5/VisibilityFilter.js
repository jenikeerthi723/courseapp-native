import React from 'react'
import VisibilityFilterLink from './VisibiltyFilterLink'
import { VisibilityFilters } from './ActionTypes'

const VisibilityFilter = () => (
  <div>
    <span>Show: </span>
    <VisibilityFilterLink filter={VisibilityFilters.SHOW_ALL}>All</VisibilityFilterLink>
    <VisibilityFilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</VisibilityFilterLink>
    <VisibilityFilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</VisibilityFilterLink>
  </div>
)

export default VisibilityFilter