document.addEventListener('DOMContentLoaded', () => { 

    document.getElementById("create_field_btn").addEventListener('click', ()=>{
        
        let x = document.getElementById('input_1').value
        let y = document.getElementById('input_2').value

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

}
)
