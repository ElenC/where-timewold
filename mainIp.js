const xhr1 = new XMLHttpRequest()

xhr1.open('GET', 'https://worldtimeapi.org/api/ip')

xhr1.onreadystatechange = function (){
    if(this.status == 200 && this.readyState == 4){

        let ip = JSON.parse(this.responseText)
        let main = document.querySelector('main')

            let cli_ip = ip.client_ip 
            let timezone = ip.timezone
            let time = ip.datetime
            
            
            main.innerHTML += `<div id="pIp" id='main'><p class="pip2"> IP Localizado</p> <p class="pip1"> <br>${cli_ip}</p>
            <p class="pip2">Continente/Estado de sua localizção</p><p class="pip"> <br>${timezone}</p>
            <p class="pip" id="houra"> </p> 
            <br><p  class="pip" id='dat'></p></div>`
        relogioIp(time)
    }
   
}
xhr1.send()

function relogioIp(datetime) {


    let year = datetime.substring(0, 4);
    let month = datetime.substring(5, 7);
    let day  = datetime.substring(8, 10);

    let hour = datetime.substring(11, 13);
    let minutes = datetime.substring(14, 16);
    let seconds = datetime.substring(17, 19);

    let date = new Date(year, (month - 1), day, hour, minutes, seconds);
    setInterval( function(){
    date.setSeconds(date.getSeconds() + 1);
     
    let hrx = document.getElementById('houra') 
    let dtx = document.getElementById('dat') 

    hrx.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    dtx.innerHTML = date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

} , 1000)
   
}