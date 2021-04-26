function displayProjectText(id, textToDisplay) {
    document.getElementById(id).innerHTML = textToDisplay;
}

function randomColorBetweenBlocks () {
    let elementsVert = document.getElementsByClassName('between-blocks-vert');
    for(var i=0; i<elementsVert.length;i++){
        elementsVert[i].style.backgroundColor = HSVtoRGB(0, 0, clamp(Math.random(), 0.2, 0.8));
    }

    let elementsHor = document.getElementsByClassName('between-blocks-hor');
    for(var i=0; i<elementsHor.length;i++){
        elementsHor[i].style.backgroundColor = HSVtoRGB(0, 0, clamp(Math.random(), 0.2, 0.8));
    }
}

function HSVtoRGB(h, s, v) {
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
    }
    return 'rgb(' + (r*255).toString() + ',' + (g*255).toString() + ',' + (b*255).toString() + ')';
}

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}