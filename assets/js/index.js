
// get today's data and set in the date widget
const today = new Date(2018, 9, 5)
console.log(today)
document.querySelector("#startdate").value = today.toISOString().substr(0, 10)

monthDays = getCalanderDays(today)
console.log(monthDays)

dateWidget = document.getElementById("startdate")

// get file input
const inputFile = document.getElementById("listfile")
// console.log(inputFile)

function generate_cal() {
  const form = document.getElementById("my_form")
  // form.submit().preventDefault()

  const date = document.getElementById("startdate").value
  if (!date) {
    alert('please select date')
  }

  const file = document.getElementById("listfile").files[0]
  if (!file) {
    alert('please upload a menu list')
    return False
  }
  else {
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")

    reader.onload = function (event) {
      text = event.target.result
      items = readCSV(text)
      console.log(items)
    }
    reader.onerror = function () {
      alert('error')
      return False
    }
  }
}

function readCSV(fileText) {
  const lines = fileText.split(/\r\n|\n/)  // split at new lines

  // document.getElementById("my1").innerHTML = lines
  let items = []
  for (let i=0; i<lines.length; i++) {
    if (lines[i].length > 0) {
      items_row = lines[i].split(",")
      for (j=0; j<items_row.length; j++) {
        if (items_row[j].length > 0) {
          items.push(items_row[j])
        }
      }
    }
  }
  return items
}

function getTodaysData(today) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  console.log(days[today.getDay()])
  console.log(months[today.getMonth()])
}

function getCalanderDays(today) {
  const month = today.getMonth()
  const year = today.getFullYear()

  const firstDate = new Date(year, month, 1)
  const lastDate = new Date(year, month+1, 0)

  let weeks=[]
  const numDays= lastDate.getDate();
   
  let start=1;
  let end=7-firstDate.getDay();
  while(start<=numDays) {
    weeks.push({start:start,end:end});
    start = end + 1;
    end = end + 7;
    if(end>numDays) {
      end=numDays;
    }   
  }
  let weekDays = []
  for (i=0; i<weeks.length; i++) {
    startDay = weeks[i].start
    endDay = weeks[i].end

    let currentWeek = []
    while (startDay <= endDay) {
      currentWeek.push(startDay)
      startDay += 1
    }
    weekDays.push(currentWeek)
  }

  if (weekDays[0].length < 7) {
    const daysRequired = weekDays[0].length - 7
    const prevMonthDays = new Date(year, month, 0).getDate()
    for (j=prevMonthDays; weekDays[0].length<7; j--) {
      weekDays[0].unshift(j)
    }
  }

  if (weekDays[weekDays.length-1].length < 7) {
    for (j=1; weekDays[weekDays.length-1].length<7; j++) {
      weekDays[weekDays.length-1].push(j)
    }
  }
  return weekDays
}

