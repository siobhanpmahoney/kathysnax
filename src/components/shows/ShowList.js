import React from 'react'
import ShowItem from './ShowItem'

const ShowList = ({shows}) => {
  return (
    <div className='show-list'>
      List
      {shows.map((s) => {
        return <ShowItem show={s} key = {s.id} />
      })}
    </div>
  )
}

export default ShowList
