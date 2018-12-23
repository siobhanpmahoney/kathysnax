import React from 'react'
import {fetchTourDates} from '../../services'

class ShowsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    fetchTourDates()
    // .then(res => console.log(res.resultsPage.results.event))
    .then(res => this.setState({
      shows: res.resultsPage.results.event.map((e) => {
        return {
          id: e.id,
          displayName: e.displayName,
          date: `${new Date(e.start.datetime).toLocaleString("en-us", { month: "short" })} ${new Date(e.start.datetime).getDay()} ${new Date(e.start.datetime).getYear()}`,
          venue_name: e.venue.displayName,
          venue_uri: e.venue.uri,
          venue_address: e.location.city,
          metro_area: e.venue.metroArea.displayName
        }
      })
    })
  )
}


render() {
  if (this.state.shows.length > 0) {
      console.log("state.shows:", this.state.shows)
      debugger
      console.log("hi")
  }

  return (
    <div>shows</div>
  )
}
}

export default ShowsContainer
