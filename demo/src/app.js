import Vue from 'vue'
import { DateTime as LuxonDateTime } from 'luxon'
import Datetime from '../../dist/vue-datetime'
import '../../dist/vue-datetime.css'
import './app.css'

Vue.use(Datetime)

new Vue({
  el: '#app',

  data () {
    return {
      date: '2018-05-12T00:00:00.000Z',
      datetime: '2018-05-12T17:19:06.151Z',
      datetime12: '2018-05-12T17:19:06.151Z',
      datetime13: '2018-05-12T17:19:06.151Z',
      datetimeMin: '',
      datetimeEmpty: '',
      minDatetime: LuxonDateTime.local().minus({ days: 3 }).toISO(),
      maxDatetime: LuxonDateTime.local().plus({ days: 3 }).toISO(),
      datetimeTheming: LuxonDateTime.local().toISO(),
      minDatetimePlus: LuxonDateTime.local().plus({ days: 3 }).toISO(),
      maxDatetimePlus: LuxonDateTime.local().plus({ days: 7 }).toISO()
    }
  }
})

