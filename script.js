function tabuada(){
    var num = document.getElementById("numero")
    var tab = document.getElementById("seltab")
if( num.value.length == 0){
    alert("Campo em Branco")
}else{
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ``
    while(c <= 10){
        var intem = document.createElement('option')
        intem.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(intem)
        c++
    }
}
}