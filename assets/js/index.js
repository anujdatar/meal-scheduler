
// get today's data and set in the date widget
const today = new Date()

// set date widget to today
dateWidget = document.getElementById("startdate")
dateWidget.value = today.toISOString().substr(0, 10)

function generate_cal() {
  const form = document.getElementById("my_form")
  // form.submit().preventDefault()

  const startDate = document.getElementById("startdate").value
  if (!startDate) {
    alert('please select date')
    return false
  }

  console.log(startDate)
  daysOfMonth = getCalanderDays(startDate)
  console.log(daysOfMonth)

  constructCalendar(daysOfMonth)

}

function getTodaysDayMonth(today) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const thisDay = days[today.getDay()]
  const thisMonth = months[today.getMonth()]

  return [thisDay, thisMonth]
}

function getCalanderDays(date) {
  const month = parseInt(date.substr(5, 7)) - 1
  const year = parseInt(date.substr(0, 4))

  const firstDate = new Date(year, month, 1)
  const lastDate = new Date(year, month+1, 0)

  let weeks=[]
  const daysInMonth= lastDate.getDate();
   
  let start=1;
  let end=7-firstDate.getDay();
  while(start<=daysInMonth) {
    weeks.push({start:start,end:end});
    start = end + 1;
    end = end + 7;
    if(end>daysInMonth) {
      end=daysInMonth;
    }   
  }

  let daysOfMonth = []
  for (i=0; i<weeks.length; i++) {
    startDay = weeks[i].start
    endDay = weeks[i].end

    let currentWeek = []
    while (startDay <= endDay) {
      currentWeek.push(startDay)
      startDay += 1
    }
    daysOfMonth.push(currentWeek)
  }

  // adjust first week, padded with days of previous month
  if (daysOfMonth[0].length < 7) {
    const daysInPrevMonth = new Date(year, month, 0).getDate()
    for (j=daysInPrevMonth; daysOfMonth[0].length<7; j--) {
      daysOfMonth[0].unshift(j)
    }
  }

  //adjust last week, padded with days of next month
  if (daysOfMonth[daysOfMonth.length-1].length < 7) {
    for (j=1; daysOfMonth[daysOfMonth.length-1].length<7; j++) {
      daysOfMonth[daysOfMonth.length-1].push(j)
    }
  }
  return daysOfMonth
}

function constructCalendar(month) {
  numWeeks = month.length

  calendarDiv = document.getElementById("calendar_div")
  calendarDiv.innerHTML = month
}
