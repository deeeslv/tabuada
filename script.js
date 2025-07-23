function Tabuada(){
    num = document.querySelector('#number').value
    res = document.querySelector('div#res')

    if(num.length == 0){
        alert('[ERRO] Digite um número')
    } else {
        n = +num
        res.innerHTML = ''
        for(c = 1; c <= 10; c++){
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}