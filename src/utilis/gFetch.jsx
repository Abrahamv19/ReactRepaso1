let obj = [
 {id: '1', name: 'gorra 1', description: 'rosada 1', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},   
 {id: '2', name: 'gorra 2', description: 'rosada 2', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},
 {id: '3', name: 'gorra 3', description: 'rosada 3', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},   
 {id: '4', name: 'gorra 4', description: 'rosada 4', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},   
 {id: '5', name: 'gorra 5', description: 'rosada 5', stock:'100', img: 'https://m.media-amazon.com/images/I/71WYB9zp+JL._AC_UL320_.jpg'},   
]

//gFetch es una variable de tipo constante que pasa a ser una promesa
//Para poder reutilizar esta constante (promesa) debo hacerle un cambio, convirtiendola en funcion () => y que pueda recibir un id y poder hacer comprobaciones
//Asi se usan las promesas en una funcion con un retorno
// Aync await es sugar sintax

export const gFetch = (id) => {
    return new Promise((resuelto, rechazado) => {
         //Acciones
        setTimeout(() => {
           resuelto(obj)  
        }, 2000)
         //rechazada('promesa rechazada')
       
    })
        //catch
}


