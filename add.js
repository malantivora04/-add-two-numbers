function add() {
   
   
    var v1 = document.getElementById("t1").value;
    var v2 = document.getElementById("t2").value;
    var result = parseInt(v1) + parseInt(v2);
   
    document.getElementById('p1').innerHTML= "Value 1 + Value 2 =" + result;
}