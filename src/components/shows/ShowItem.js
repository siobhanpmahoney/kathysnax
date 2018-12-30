import React from 'react'

class ShowItem extends React.Component {
//   dateDisplay: "Jan 23"
// dateSort: 1548291600000
// day: "Wed"
// displayName: "Joshua Powell & The Great Train Robbery, Kathy Snax, and Bedbug at O'Brien's Pub (January 23, 2019)"
// id: 36246899
// metro_area: "Boston / Cambridge"
// timeDisplay: "8pm"
// venue_address: "Allston, MA, US"
// venue_name: "O'Brien's Pub"
// venue_uri: "http://www.songkick.com/venues/57468-obriens-pub?utm_source=47792&utm_medium=partner"
  render() {
    console.log(this.props.show)
    return (
      <div className='show-item'>
        <div className='show-datetime'>
        </div>

        <div className='show-event-title'>
        </div>

        <div className='show-venue-details'>
        </div>
      </div>
    )
  }
}

export default ShowItem
