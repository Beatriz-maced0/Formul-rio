let chocolate = document.querySelector('select#Chocolate')

let res = chocolate.value





function Enviar() {    
    window.alert('Formulário enviado. Obrigado!');

    if (chocolate.value == 'Kit Kat'){
        window.alert(`O chocolate escolhido foi: Kit Kat!`)
    } else if (chocolate.value == 'Me surpreenda'){
        window.alert(`Iremos!`)
    } else if (chocolate.value == 'Snickers'){
        window.alert(`O chocolate escolhido foi: Snickers!`)
    } else {
        window.alert(`O chocolate escolhido foi: Sonho de Valsa!`)
    }

   
}