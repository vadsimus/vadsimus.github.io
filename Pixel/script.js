document.addEventListener('DOMContentLoaded', () => { 

    document.getElementById("create_field_btn").addEventListener('click', ()=>{
        document.getElementById('create_field_btn').setAttribute('disabled', true)
        let x_input = document.getElementById('input_1')
        let y_input = document.getElementById('input_2')
        x_input.setAttribute('disabled', true)
        y_input.setAttribute('disabled', true)
        let x = x_input.value
        let y = y_input.value

        let game_field = document.getElementById('game')
        
        for (let i = 0; i < Number(x); i++){
            let line = document.createElement('div')
            line.className = 'line'

            for (let i = 0; i < Number(y); i++) {
                pixel = document.createElement('div')
                pixel.addEventListener('click', (e) => {
                    e.target.classList.toggle('red')
                })
                line.appendChild(pixel)
             }

            game_field.appendChild(line)
        }   
    })

    var reset = document.getElementById("clear_btn");
    reset.addEventListener("click", function () { //Все сначала
        location.reload();
    });

}
)
