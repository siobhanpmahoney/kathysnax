import {SONGKICK_API_KEY} from './keys'
import {SPOTIFY_OAUTH_TOKEN} from './keys'

export const fetchTourDates = () => {
  return fetch(`https://api.songkick.com/api/3.0/artists/9505879/calendar.json?apikey=${SONGKICK_API_KEY}`)
  .then(results => results.json())
}
