window.onload = () => {

    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    let figure = ["Diamonds", "Spades", "Hearts", "Clubs"];
    let randomCardNumber = Math.floor(Math.random() * numbers.length);
    let randomFigureNumber = Math.floor(Math.random() * figure.length);
    let chooseFigure = figure[randomFigureNumber];

    // utilizamos los elementos del DOM para agregar el contenido.
    document.getElementById('contentCard').innerHTML = numbers[randomCardNumber];
    document.getElementById('theCard').className = "";
    document.getElementById('theCard').classList.add("card");
    document.getElementById('theCard').classList.add(getFigure(chooseFigure));



    // retornamos la clase el número y la figura.
    getFigure = (figure) => {
        switch (figure) {

            case "Diamonds":
                return "figure-diamons";
                break;
            case "Spades":
                return "figure-spades";
                break;
            case "Hearts":
                return "figure-hearts";
                break;
            case "Clubs":
                return "figure-clubs";
                break;

        }

    }










}