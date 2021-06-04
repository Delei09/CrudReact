const lista = { usuario : [
    {nome : 'delei' , email: 'Vanderlei_@assa' , id : 1},
    {nome : 'delei' , email: 'Vanderlei_@assa' , id : 2},
]}
const listaAtualizada =  {...lista }
listaAtualizada.delete(usuario)
console.log(listaAtualizada)