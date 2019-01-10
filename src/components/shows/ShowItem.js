import React from 'react'

class ShowItem extends React.Component {

  onOpenTicketDetails = () => {
    window.open(this.props.show.event_uri, "_blank")
  }
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
          {this.props.show.date.month} {this.props.show.date.date} {this.props.show.date.year == new Date().getFullYear() ? "" : this.props.show.date.year}
        </div>

        <div className='show-event-title'>
          {this.props.show.event_name}
        </div>

        <div className='show-location-details'>
          <span className='show-location-city'>
            {this.props.show.venue_address} <span> </span>
          </span>

          <span className="show-venue">
             @<span> </span>{this.props.show.venue_name}
          </span>
        </div>

        <div className='show-tix-details'>
          <button onClick={this.onOpenTicketDetails}>Tix</button>
        </div>
      </div>
    )
  }
}

export default ShowItem
