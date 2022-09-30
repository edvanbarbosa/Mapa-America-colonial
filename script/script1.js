let bt_artigo = document.getElementById('bt-artigo')
let bt_mapa = document.getElementById('bt-mapa')

bt_artigo.addEventListener('click',openartigo)
bt_mapa.addEventListener('click',openmapa)

function openartigo(){
    bt_mapa.style.borderBottom = '3px solid transparent'
    document.querySelector('div#Mapa').style.display = 'none'
    document.querySelector('div.artigo').style.display = 'block' //verificar depois se display = 'flex'
    bt_artigo.style.fontWeight = 'bold'
    bt_mapa.style.fontWeight = 'normal'
    bt_artigo.style.borderBottom = '3px solid #f3b60d'
 
    
}
function openmapa(){
    bt_artigo.style.borderBottom = '3px solid transparent'
    document.querySelector('div#Mapa').style.display = 'flex'
    document.querySelector('div.artigo').style.display = 'none'
    bt_mapa.style.fontWeight = 'bold'
    bt_artigo.style.fontWeight = 'normal'
    bt_mapa.style.borderBottom = '3px solid #f3b60d'

}
