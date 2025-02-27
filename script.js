


// let date ={
//     month:"08",
//     minute:23,
// }


let clock = () => {
    let date = new Date();
    let month_num = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    if(hours<9)hours = "0"+hours;
    if(minutes<9)minutes = "0"+minutes;
    if(seconds<10)hours = "0"+hours;

    let month = ["Янвраь", "Фебраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    // console.log(month[month_num])

    let date_time = hours + ":" +minutes + ":" + seconds;

    // console.log(date_time)

    let element = document.getElementById('time').innerHTML = date_time
    let element2 = document.getElementsByClassName('.container').innerHTML = date_time
    // console.log(element)

    setTimeout(() => {
        clock();
    }, 1000);

    // console.log(month_num)

}

clock();