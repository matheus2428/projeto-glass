function mudaImg(foto){
    var img = document.getElementById("icone")
    img.src = foto
}
function calcTotal(){
    var qtd =  Number(document.getElementById('qnt').value)
    total = qtd * 1500
    document.getElementById('tot').value = total
}