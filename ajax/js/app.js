document.getElementById('button')
        .addEventListener('click', loadData)

function loadData(){
    //Crear una intancia de XMLHttpRequest
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.txt', true);

    // xhr.onreadystatechange = function(){
    //     console.log('READY STATE CHANGE',this.readyState)
    //     console.log('STATUS', this.status)
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText)
    //     }else{
    //         console.log('Ha habido un error...');
    //     }
    // }

    xhr.onprogress = function(){
        console.log('READY STATE CHANGE',this.readyState)
        console.log('Procesando la peticion...')
    }

    xhr.onload = function(){
        console.log('READY STATE CHANGE',this.readyState)
        if(this.status == 200){
            // console.log(this.responseText)
            document.getElementById('salida').innerHTML = `
            <p>${this.responseText}</p>
            `
        }
    }
    xhr.onerror = function(){
        console.log('Ha ocurrido un error...');
    }
    xhr.send()

    /* Valores de los estados de la peticion 
    0: no inicializada
    1: se ha esatablecido l aconexion con el servidor
    2: peticion recibida
    3: procesando la peticion
    4: peticion finalizada
    */

    /* Codigos de estado HTTP
    200: "ok"
    403: "Forbidden"
    404: "Not Found"
    */


}
