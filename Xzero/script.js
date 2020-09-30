$(document).ready(function () {
    
    win = [
        '012',
        '345',
        '678',
        '036',
        '147',
        '258',
        '048',
        '246',
    ]
    function check_in_masks(mass){

        if (mass.length < 3){
            return false
        }
        mass = mass.join('');
        for (j in win){
            counter = 0;
            for (i in mass){        
                for (k in win[j]){
                    
                    if (win[j][k] === mass[i]){
                        counter++;
                    }
                }
                if (counter === 3){
                    return true;
                }
            }
        }
        return false
    }
    
    
    function check_for_win(){
        matrix = []
        $('#game>div').each(function () {
            matrix.push($(this).attr('data-state'))
        });
        state = {
            0:[],
            1:[],
            2:[]
        }
        for (i in matrix){
//            console.log(i)
            state[matrix[i]].push(i)
        }
        if (check_in_masks(state[1])){
            return 'X'
        } else if (check_in_masks(state[2])){
            return 'O'
        } else return false
        
    }
    action_x = true;
    
    $('#game>div').each(function () {
        $(this).attr('data-state', 0)
    });
    
    $('#game>div').click(function () {

        if ($(this).attr('data-state') == 0) {
            if (action_x){
                $(this).css("background-image", "url(https://st.depositphotos.com/1005844/2751/v/950/depositphotos_27510259-stock-illustration-grunge-x.jpg)")
                action_x = false;
                $(this).attr('data-state', 1);
                
            } else {
                $(this).css("background-image", "url(https://st.depositphotos.com/1005844/2771/i/950/depositphotos_27712141-stock-photo-painted-red-circle.jpg)")
                action_x = true;
                $(this).attr('data-state', 2);
                
            }
            result = check_for_win()
            if (result){
                if (result == 'X'){
                    alert('WIN X');
                    location.reload();
                }else if (result == 'O'){
                    alert('WIN O');
                    location.reload();
                }
            }
        }
        
        
        
        
    }
                        )
    
}
                  )
                  