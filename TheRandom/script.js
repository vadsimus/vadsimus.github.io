var random = 2;
var Brandom = 7;

function buttonClick() {



    //    for (i = 0; i < 1; i++) {
    // console.log("i= "+ i + String.fromCharCode(2588));  
    //        console.log('\u2588');
    //    };



    document.getElementById("many1").innerHTML = "1 раз = ";
    document.getElementById("many2").innerHTML = "2 раз = ";
    document.getElementById("many3").innerHTML = "3 раз = ";
    document.getElementById("many4").innerHTML = "4 раз = ";
    document.getElementById("many5").innerHTML = "5 раз = ";
    document.getElementById("many6").innerHTML = "6 раз = ";
    document.getElementById("many7").innerHTML = "7 раз = ";
    document.getElementById("many8").innerHTML = "8 раз = ";
    document.getElementById("many9").innerHTML = "9 раз = ";
    document.getElementById("many10").innerHTML = "10 раз = ";
    document.getElementById("more").innerHTML = "больше 10 раз = ";
    //    document.getElementById("moneta").innerHTML = '';
    document.getElementById("max").innerHTML = "максимальная длина = ";
    var cnv = document.getElementById('canvas'),
        ctx = cnv.getContext('2d');


    var radios = document.getElementsByName('sel');
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) radio = i;
    };

    var radiosCnvSize = document.getElementsByName('cnvSize');

    for (i = 0; i < radiosCnvSize.length; i++) {
        if (radiosCnvSize[i].checked) var radioCnvSize = i;

    };


    switch (radioCnvSize) {
        case 0:
            xSize = 500;
            ySize = 500;
            pixel = 2;

            break;
        case 1:
            xSize = 500;
            ySize = 700;
            pixel = 2;
            break;
        case 2:
            xSize = 700;
            ySize = 700;
            pixel = 2;
            break;
        case 3:
            xSize = 1000;
            ySize = 1000;
            pixel = 2;
            break;
        case 4:
            xSize = 1000;
            ySize = 1000;
            pixel = 1;
            break;

    };

    count = (xSize / pixel) * (ySize / pixel);

    cnv.width = xSize;
    cnv.height = ySize;

    var monetaDiv;
    //    monetaDiv = document.getElementById("moneta");
    //    var count = parseInt(document.getElementById('count').value); 
    //    var count = 65000;
    var zero = 0;
    var one = 0;
    var max = 0;
    var x = 0;
    var y = 0;
    //    var pixel=2;

    var massive = new Array();
    massive = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    var prev = 2;
    var count_repeat = 1;

    for (i = 0; i <= count; i++) {

        switch (radio) {
            case 0:
                var rnd = Math.floor(Math.random() * 2);
                break;
            case 1:
                var rnd = Math.floor(secureMathRandom() * 2);
                break;
            case 2:
                var rnd = Math.floor(myRandom() * 2);

                break;
            case 3:
                var rnd = Math.floor(badRandom() * 2);

                break;
        };

        if (i == count) {
            if (prev == 0) {
                rnd = 1;
            } else {
                rnd = 0;
            };
        }

        if (i != count) {

            if (rnd == 0) {
                //                var div = document.createElement('div');
                //                div.className = 'empty';
                //                div.setAttribute('style', 'background-color: white;height: 2px;width: 2px;display: inline-block;');
                //           
                //                monetaDiv.appendChild(div);

                //  monetaDiv.append('\u0383');
                ctx.clearRect(x, y, pixel, pixel)


            } else {
                //                var div = document.createElement('div');
                //                div.className = 'empty';
                //            div.setAttribute('style', 'background-color: black;height: 2px;width: 2px;display: inline-block;');
                //              
                //                
                //                monetaDiv.appendChild(div);

                //  monetaDiv.append('\u2588');
                ctx.fillRect(x, y, pixel, pixel)


            }

            if (rnd == 0) zero++;
            else one++;
        }

        if ((rnd === 0) && i != 0) {
            if (prev === 0) {
                count_repeat++;
            } else {

                if (count_repeat > max) max = count_repeat;
                massive = addToMass(massive, count_repeat);
                count_repeat = 1;
            }
        } else {
            if ((prev === 1)) {
                count_repeat++;
            } else {
                if (count_repeat > max) max = count_repeat;
                massive = addToMass(massive, count_repeat);
                count_repeat = 1;
            }
        };

        prev = rnd;
        x = x + pixel;
        if (x >= xSize) {
            x = 0;
            y = y + pixel;
            console.log(pixel);
        };
    };









    zeroDiv = document.getElementById('zero');
    oneDiv = document.getElementById('one');
    onePDiv = document.getElementById('oneP');
    zeroPDiv = document.getElementById('zeroP');
    zeroDiv.innerHTML = zero + " раз";
    oneDiv.innerHTML = one + " раз";
    zeroPDiv.innerHTML = (Math.floor((zero / (one + zero)) * 100000) / 1000) + "%";
    onePDiv.innerHTML = (Math.floor((one / (one + zero)) * 100000) / 1000) + "%";

    many1--;
    document.getElementById("many1").append(massive[0] - 1);
    document.getElementById("many2").append(massive[1]);
    document.getElementById("many3").append(massive[2]);
    document.getElementById("many4").append(massive[3]);
    document.getElementById("many5").append(massive[4]);
    document.getElementById("many6").append(massive[5]);
    document.getElementById("many7").append(massive[6]);
    document.getElementById("many8").append(massive[7]);
    document.getElementById("many9").append(massive[8]);
    document.getElementById("many10").append(massive[9]);
    document.getElementById("more").append(massive[10]);
    document.getElementById("max").append(max);






}

function addToMass(mass, counter) {
    switch (counter) {
        case 1:
            mass[0] = mass[0] + 1;
            break;
        case 2:
            mass[1] = mass[1] + 1;
            break;
        case 3:
            mass[2] = mass[2] + 1;
            break;
        case 4:
            mass[3] = mass[3] + 1;
            break;
        case 5:
            mass[4] = mass[4] + 1;
            break;
        case 6:
            mass[5] = mass[5] + 1;
            break;
        case 7:
            mass[6] = mass[6] + 1;
            break;
        case 8:
            mass[7] = mass[7] + 1;
            break;
        case 9:
            mass[8] = mass[8] + 1;
            break;
        case 10:
            mass[9] = mass[9] + 1;
            break;
        default:
            mass[10] = mass[10] + 1;
            break;
    }
    return mass;
}

function secureMathRandom() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}

function myRandom() {
    random = (25173 * random + 13849) % 65536;

    return ((random / 10) - Math.trunc(random / 10));
}

function badRandom() {
    Brandom = (7 * Brandom + 7) % 6597;

    return ((Brandom / 10) - Math.trunc(Brandom / 10));
}
