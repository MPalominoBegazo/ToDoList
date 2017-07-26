var arrDatos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];

listar();
function Tareas(title){
    this.userId =1;
   // this.id = undefined;
    this.title = title;
    this.completed = false;
}

var buttonAdd = document.getElementById("buttonAdd");
buttonAdd.onclick = function (){
    var activity = document.getElementById("addActivity").value;
    var tasks = new Tareas(activity);
    arrDatos.push(tasks);
  //  console.log(arrDatos);
   limpiar();
   listar();
   return false;
    
}

function listar(){
    for(var i in arrDatos){
        datos = arrDatos[i];
        var resul = document.getElementById("resultado");
        resul.innerHTML +=' <p><input type="checkbox" id="'+i+'"><label for="'+i+'" editable>'+datos.title+'</label></p>';
    }
}

function limpiar(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("addActivity").value="";
}
/*<input type="checkbox" id="filled-in-box" checked="checked" />
      <label for="filled-in-box">Filled in</label> */