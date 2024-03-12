import React, { useState } from 'react'

import DayCard from './DayCard/DayCard'
import s from './History.module.css'

import settingsIcon from '../../assets/icons/svg_pack/Black/Regular/Preference.svg'
import SorterMenu from '../../UI/SorterMenu/SorterMenu'
import sorterIcon from '../../assets/icons/svg_pack/Black/Regular/Swap.svg'

function History({users}) {
  const [showSorter, setShowSorter] = useState(false)
  const [sortMode, setSortMode] = useState('Последние')
  const [showFilters, setShowFilters] = useState(true)

  // if (!props.profile) {
  //   return <div className={s.Users}>Loading...</div>;
  // }

  const handleSetSortMode = (e) => {
    const mode = e.target.innerHTML
    setSortMode(mode)
  }
  const handleSort = () => {
    setShowSorter(!showSorter)
  }
  const handleFilter = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className={s.History}>
      <div className={s.header}>
        <h3>История встреч</h3>
      </div>
      <div className={`${s.filter}`}>
        <div className={`${s.sorter}`}>
          <div className={`${s.sortMode}`} onClick={handleSort}>
            <img src={sorterIcon} alt='filter_icon' />
            {sortMode}
          </div>
        </div>
        {showSorter && <SorterMenu handleSetSortMode={handleSetSortMode} />}

        <div onClick={handleFilter}>
          <img src={settingsIcon} alt='filter_icon' />
        </div>
      </div>

      <div className={s.history_flow}>
        <DayCard users={users} />
      </div>
    </div>
  )
}

export default History
