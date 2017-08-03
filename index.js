(function(){

//variables initiated and functions called when script tag is loaded.

  var grid, input, ducksFinal;

  ducksFinal = [];

  addSubmitFormEvent();
  addButtonEvent();



//***functions***


//event listeners and  extra inputs for form

  function addSubmitFormEvent(){
    var form;

    form = document.querySelector("form");
    form.addEventListener("submit", function(event){

       addGrid(event);
       moveDucks(event);

    })

  };

  function addButtonEvent(){
    var addButton;

    addButton = document.getElementById("add");
    addButton.addEventListener("click", function(event){

      event.preventDefault();
      appendInputs();


    })
  }

  function appendInputs(){
    var array, coordinates, instructions;

    input = document.getElementById("input")
    array = input.querySelectorAll("div");
    coordinates = array[1].cloneNode("true");
    instructions = array[2].cloneNode("true");
    input.append(coordinates,instructions);

  }

  //functions that retrieve information and parse it

  function addGrid(e){

    input = e.path[0][0].value;
    input = input.split(" ");
    input[0] = parseInt(input[0], 10);
    input[1] = parseInt(input[1], 10);

    grid = input;
  }

  function parseCoordinates(e, i){

    input = e.path[0][i].value;
    input = input.split(" ");
    input[0] = parseInt(input[0], 10);
    input[1] = parseInt(input[1], 10);

    return input;
  }

  function splitInstructions(e, i){

    input = e.path[0][i].value;
    input = input.split("");

    return input;
  }

//iterates over each duck

  function moveDucks(e){
    var coor, inst, finalCoordinates, formInputs, i;

    formInputs = document.getElementsByTagName("input")

    for(i = 1; i < formInputs.length; i = i + 1){
      coor = parseCoordinates(e, i);
      i = i + 1;
      inst = splitInstructions(e, i);
      logic(coor, inst);
    }

    alert(ducksFinal);

  }

  //logic for moving individual duck

  function logic(coor, inst){
    var cardinalDirs, index, coors;

    cardinalDirs = ["N", "E", "S", "W"];


    inst.forEach(function(x){
      if(x === "S"){//right
        index = (cardinalDirs.indexOf(coor[2]) + 1 ) > 3 ? 0:(cardinalDirs.indexOf(coor[2]) + 1 );
        coor[2] = cardinalDirs[index];
      }
      else if (x === "P") {//left
        index = (cardinalDirs.indexOf(coor[2]) - 1 ) < 0 ? 3:(cardinalDirs.indexOf(coor[2]) - 1 );
        coor[2] = cardinalDirs[index];
      }
      else {
        coors = forward(coor);
        coor[0] = coors[0] > grid[0] ? grid[0]: coors[0];
        coor[1] = coors[1] > grid[1] ? grid[1]: coors[1];
      }

    })

    ducksFinal.push(coor);

  }

  function forward(coor){

    if (coor[2] === "N"){
      coor[1] = coor[1] + 1
    }
    else if (coor[2] === "S"){
      coor[1] = coor[1] - 1
    }
    else if (coor[2] === "E"){
      coor[0] = coor[0] + 1
    }
    else if (coor[2] === "W"){
      coor[0] = coor[0] - 1
    }
    return coor
  }



})();
