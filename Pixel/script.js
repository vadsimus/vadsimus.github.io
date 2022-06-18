document.addEventListener('DOMContentLoaded', () => { 

    let cell_count = 0
    function mouseEnter(e){

        e.target.classList.toggle('red')
        all_cells = document.getElementsByClassName('red')
        if (all_cells.length >= cell_count){
            alert('!!!!')
        }
        // }
    }




    
    document.getElementById("create_field_btn").addEventListener('click', ()=>{
        document.getElementById('create_field_btn').setAttribute('disabled', true)
        let x_input = document.getElementById('input_1')
        let y_input = document.getElementById('input_2')
        let size_input = document.getElementById('size')
        x_input.setAttribute('disabled', true)
        y_input.setAttribute('disabled', true)
        size_input.setAttribute('disabled', true)
        let x = x_input.value
        let y = y_input.value
        cell_count = Number(x) * Number(y)
        let size = size_input.value

        let game_field = document.getElementById('game')
        
        for (let i = 0; i < Number(x); i++){
            let line = document.createElement('div')
            line.className = 'line'

            for (let i = 0; i < Number(y); i++) {
                pixel = document.createElement('div')
                pixel.style.width = size + "px"
                pixel.style.height = size + "px"
                if (Math.random() < 0.3){
                    pixel.className = 'red'
                }
                // pixel.addEventListener('mousedown', (e)=>{
                //     is_mouse_down=true
                //     e.target.classList.toggle('red')
                // })
                // pixel.addEventListener('mouseup', (e)=>{
                //     is_mouse_down=false
                // })


                pixel.addEventListener('mouseenter', mouseEnter)
                line.appendChild(pixel)
             }

            game_field.appendChild(line)
        }   
    })



    document.getElementById("clear_btn").addEventListener("click", function () {
        location.reload();
    });

}
)
