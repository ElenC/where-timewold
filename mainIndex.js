const mostrarCont = new XMLHttpRequest()

mostrarCont.open('GET','https://worldtimeapi.org/api/timezone')

mostrarCont.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let obj = JSON.parse(this.responseText)
        

        for(let k = 1; k<=12; k++){
            let ob = Math.floor(Math.random() * obj.length)
            let timecont = obj[ob]
            contadorCaptura(k, timecont)
        }

    }
}
mostrarCont.send()

function contadorCaptura(k, timecont) {
    const mostrarCont2 = new XMLHttpRequest();
    mostrarCont2.open("GET", "https://worldtimeapi.org/api/timezone/" + timecont);
    mostrarCont2.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {

        const obj2 = JSON.parse(this.responseText);
  
        let timezone = obj2.timezone;
        let offset = obj2.utc_offset;
  
        document.getElementById(k).innerHTML += `
              <div id="${k}">
              <p>${timezone}</p>
              <p id='data${k}'></p>
              <p id='houraz${k}'></p>
              <p>${offset}</p>
              </div>`;

        relogio(obj2.datetime, k)    
      }
      
    }
  
    mostrarCont2.send();
  }
 
  function relogio(datetime, k) {
    
    let year = datetime.substring(0, 4);
    let month = datetime.substring(5, 7);
    let day  = datetime.substring(8, 10);

    let hour = datetime.substring(11, 13);
    let minutes = datetime.substring(14, 16);
    let seconds = datetime.substring(17, 19);

    let date = new Date(year, (month - 1), day, hour, minutes, seconds);
    setInterval( function(){
    date.setSeconds(date.getSeconds() + 1);
     
     
    let hr = document.getElementById(`houraz${k}`) 
    let dt = document.getElementById(`data${k}`) 

    hr.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    dt.innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    } , 1000)
  }

