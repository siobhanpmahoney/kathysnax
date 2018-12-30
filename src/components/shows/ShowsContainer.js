import React from 'react'
import ShowList from './ShowList'
import {fetchTourDates} from '../../services'

class ShowsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shows: []
    }
  }

  componentDidMount() {
              // date: `${new Date(e.start.datetime).toLocaleString("en-us", { month: "short" })} ${new Date(e.start.datetime).getDay()} ${new Date(e.start.datetime).getYear()}`,
              // dateDisplay: `${new Date(e.start.datetime).toLocaleString("en-us", { month: "short" })} ${e.start.date.split("-")[2]} ${e.start.date.split("-")[0]}`,
              // dateSort: Date.parse(new Date(e.start.datetime)),
              // nonFormattedDate: e.start,
              // time: new Date(e.start.datetime).getHours.toString() + new Date(e.start.datetime).getMinutes() == 0 ? "" : ``,
    fetchTourDates()
    // .then(res => console.log(res.resultsPage.results.event))
    .then(res => this.setState({
      shows: res.resultsPage.results.event.map((e) => {
        let dt = this.getDateTime(e.start.datetime, e.start.time)
         return {
          id: e.id,
          displayName: e.displayName,
          venue_name: e.venue.displayName,
          venue_uri: e.venue.uri,
          venue_address: e.location.city,
          metro_area: e.venue.metroArea.displayName,
          dateDisplay: dt.dateDisplay,
          day: dt.day,
          timeDisplay: dt.timeDisplay,
          dateSort: dt.dateSort

        }
      })
    })
  )
}

getDateTime = (dt, t) => { // date = full datetime, time = time
  let datetime = new Date(dt)
  let raw = {}
  // day, month, date, year, hours, minutes, ampm, dateDisplay, dateSort
  raw["day"] = datetime.toLocaleString("en-us", { weekday: "short" })
  raw["month"] = datetime.toLocaleString("en-us", { month: "short" })
  raw["date"] = datetime.getDate()
  raw["year"] = datetime.getFullYear()

  raw["time"] = t.split(":").map((val) => {
    if (val > 0) {
      return parseInt(val)
    } else {
      return 0
    }
  })

  // raw["hours"] = datetime.getHours()
  // raw["minutes"] = datetime.getMinutes()
  raw["ampm"] = raw["time"][0] > 11 ? "pm" : "am"

  let dtHash = {
    day: datetime.toLocaleString("en-us", { weekday: "short" }),
    dateDisplay: `${raw.month} ${raw.date}`,
    timeDisplay:  `${raw.time[0] > 12 ? (raw.time[0] - 12).toString() : raw.time[0].toString()}` + `${raw.time[1] == 0 ? "" : `:${raw.time[1].toString()}`}` + raw.ampm,
    // timeDisplay:  `${raw.hours > 12 ? (raw.hours - 12).toString() : raw.hours.toString()}` + `${raw.minutes == 0 ? "" : `:${raw.minutes.toString()}`}` + raw.ampm,
    dateSort: Date.parse(datetime),
  }

  return dtHash




}


render() {
  if (this.state.shows.length == 0) {
    return <div>Loading...</div>
  } else {

  return (
    <div className="show-container">
      <ShowList shows={this.state.shows} />
    </div>
  )
}
}
}

export default ShowsContainer
