let obj = [
 {id: '1', name: 'gorra 1', description: 'remeras', precio: '90', stock:'100', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-121-3374707c83b41fb15515911959185653-1024-1024.jpg'},   
 {id: '2', name: 'gorra 2', description: 'remeras', precio: '90', stock:'100', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-121-3374707c83b41fb15515911959185653-1024-1024.jpg'},
 {id: '3', name: 'gorra 3', description: 'remeras', precio: '90', stock:'100', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-121-3374707c83b41fb15515911959185653-1024-1024.jpg'},   
 {id: '4', name: 'gorra 4', description: 'gorras', precio: '90', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},   
 {id: '5', name: 'gorra 5', description: 'gorras', precio: '90', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},   
]

//gFetch es una variable de tipo constante que pasa a ser una promesa
//Para poder reutilizar esta constante (promesa) debo hacerle un cambio, convirtiendola en funcion () => y que pueda recibir un id y poder hacer comprobaciones
//Asi se usan las promesas en una funcion con un retorno
// Aync await es sugar sintax

export const gFetch = (id) => {
    return new Promise((resuelto, rechazado) => {
         //Acciones
        setTimeout(() => {
           resuelto(id ? obj.find( item => item.id === id) : obj)  
        }, 2000)
         //rechazada('promesa rechazada')
       
    })
        //catch
}


