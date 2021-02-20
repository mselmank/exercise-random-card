window.onload = () => {

    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    let figure = ['&spades;','&clubs;','&hearts;','&diams;'];
    let randomCardNumber = Math.floor(Math.random() * numbers.length);
    let randomFigureNumber = Math.floor(Math.random() * figure.length);
    let chooseFigure = figure[randomFigureNumber];

        // retornamos la clase el número y la figura.
        getFigure = (figure) => {
            switch (figure) {
    
                case '&diams;':
                    return "figure-diamons";
                    break;
                case '&spades;':
                    return "figure-spades";
                    break;
                case '&hearts;':
                    return "figure-hearts";
                    break;
                case '&clubs;':
                    return "figure-clubs";
                    break;
    
            }
    
        }


    // utilizamos los elementos del DOM para agregar el contenido.
    document.getElementById('contentCard').innerHTML = numbers[randomCardNumber];
    document.getElementById('topFigure').innerHTML = figure [randomFigureNumber];
    document.getElementById('bottomFigure').innerHTML = figure [randomFigureNumber];
    document.getElementById('theCard').classList.add("card");
    document.getElementById('theCard').classList.add(getFigure(chooseFigure));

    if(randomFigureNumber=='&hearts;'||randomFigureNumber=='&diams;'){
        document.getElementById('topFigure').style.color = "#ff0000";
        document.getElementById('bottomFigure').style.color = "#ff0000";
    }












}