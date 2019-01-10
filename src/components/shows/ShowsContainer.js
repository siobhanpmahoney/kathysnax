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
    fetchTourDates()
    .then(res => this.setState({
      shows: res.resultsPage.results.event.map((e) => {
        let dt = this.getDateTime(e.start.datetime, e.start.time)
        let va = e.venue.metroArea.country.displayName == "US" ? e.location.city.split(", ").slice(0, e.location.city.split(", ").length-1).join(", ") : e.location.city


        return {
          id: e.id,
          event_name: e.displayName,
          event_uri: e.uri,
          venue_name: e.venue.displayName,
          venue_uri: e.venue.uri,
          venue_address: va,
          metro_area: e.venue.metroArea.displayName,

          timeDisplay: dt.timeDisplay,
          // dateDisplay: dt.dateDisplay,
          date: {day: dt.day, month: dt.monthDisplay, date: dt.dateDisplay, year: dt.yearDisplay},
          dateSortVal: dt.dateSort,



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
    oldDate: `${raw.month} ${raw.date}`,
    monthDisplay: raw.month,
    dateDisplay: raw.date,
    yearDisplay: raw.year,
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
