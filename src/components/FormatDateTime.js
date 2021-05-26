// Formats military time to standard //
const formatHour = (hour, min) => {
    if (hour >= 13) {
        var newHour = hour - 12
        return (`${newHour}:${min} PM`)
    } else {
        if (hour === '00') {
            hour = 1
        }
        return (`${hour}:${min} AM`)
    }
}

const FormatDateTime = (dateTime) => {
    // Formats Date //
    var date_time = dateTime.split("T") // Raw Date and Time //
    var dateUnformat = date_time[0] // Removes T //
    var dates = dateUnformat.split('-') // Split Date //
    var year = dates[0]
    var month = dates[1]
    var day = dates[2]

    // Formats Time //
    var time = date_time[1] // Raw Time //
    var noZ = time.split('Z')
    var zLess = noZ[0] // Removes Z //
    var timeUnformat = zLess.split(':')
    var hourTime = timeUnformat[0]
    var hour = parseInt(hourTime) - 5 // Sets to Eastern Time Zone //
    if (hour < 0) {
        hour = hour + 24
    }
    var min = timeUnformat[1]
    // var sec = timeUnformat[2]

    return (`${month}-${day}-${year} | ${formatHour(hour, min)} EST`)
}

export default FormatDateTime;
