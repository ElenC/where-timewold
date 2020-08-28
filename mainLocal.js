
function city(elem){
    
    const xhr = new XMLHttpRequest()

    xhr.open('GET','https://worldtimeapi.org/api/timezone/' + elem.value)

    xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
        let xr =  JSON.parse(xhr.responseText)
        let cit = document.getElementById('cities')
        
        cit.innerHTML = ""
        for(let i=0; i<xr.length; i++){
            
        cit.innerHTML += `<option value="${xr[i].substring(elem.value.length + 1, xr[i].length)}"> 
        ${xr[i].substring(elem.value.length + 1, xr[i].length)}</option>`

            }
        }
    }
    xhr.send()
}

function ResultCity(e){
     
    const xh = new XMLHttpRequest()
    let c = document.getElementById('continent') 
    xh.open('GET','https://worldtimeapi.org/api/timezone/' + c.value + '/' + e.value)

    xh.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){
            let req = JSON.parse(this.responseText)
            let timezone1 = req.timezone
            let datTime = req.datetime.split('T')
            let hrz = datTime[1].split('.')[0]
            let dtz = datTime[0]
            let off = req.utc_offset
            
            document.getElementById('change').innerHTML += `<div id='local'><p>${timezone1}</p>
            <p>${hrz}</p><br><p>${dtz}</p><p>${off}</p>
            </div>`
        }
     
    }
    xh.send()
}


