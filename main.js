let clock = ()=>{
    let date = new Date()

    let monthNum = date.getMonth()
    let day =  date.getDate()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hours <=9)hours = "0"+hours
    if(min <=9)min = "0"+min
    if(sec <=9)sec ="0"+sec

    let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октярь","Ноябрь","Декабрь"]

    let dateTime =  day +"-"+ month[monthNum]+" "+ hours+ ":"+min+":"+sec 

    let element = document.getElementById('time').innerHTML = dateTime
    console.log(dateTime)

    setTimeout(() => {
        clock()
    },1000);
}
clock()
