(function(){

//variables initiated and functions called when script tag is loaded.

  var grid, input, ducksFinal;

  ducksFinal = [];

  addSubmitFormEvent();



//***functions***


//event listener

  function addSubmitFormEvent(){
    var form;

    form = document.querySelector("form");

    form.addEventListener("submit", function(){

      input = document.querySelector("textarea").value.split('\n');
      moveDucks(input);

    });

  };


  //functions that retrieve information and parse it

  function addGrid(input){

    input = input.split(" ");
    input[0] = parseInt(input[0], 10);
    input[1] = parseInt(input[1], 10);

    grid = input;
  };

  function parseCoordinates(input){

    input = input.split(" ");
    input[0] = parseInt(input[0], 10);
    input[1] = parseInt(input[1], 10);

    return input;
  };

  function splitInstructions(input){

    input = input.split("");

    return input;
  }

//iterates over each duck

  function moveDucks(input){

    addGrid(input[0]);

    for(i = 1; i < input.length; i++){
      coor = parseCoordinates(input[i]);
      i = i + 1;
      inst = splitInstructions(input[i]);
      logic(coor, inst);
    }

    alert(ducksFinal.join("\n"));

  };

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

    });

    ducksFinal.push(coor.join(" "));

  }

  function forward(coor){

    if (coor[2] === "N"){
      coor[1] = coor[1] + 1;
    }
    else if (coor[2] === "S"){
      coor[1] = coor[1] - 1;
    }
    else if (coor[2] === "E"){
      coor[0] = coor[0] + 1;
    }
    else if (coor[2] === "W"){
      coor[0] = coor[0] - 1;
    }
    return coor;
  }


})();
