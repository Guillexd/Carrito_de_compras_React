import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore";

//Función para entrar a firestore
const db = ()=> getFirestore()

//Nombre de la colección de la base de datos
const coleccion = 'coleccion-firebase';

//Función que devuelve toda la colección 'coleccion-firebase' de la base de datos
export function getListaTotal() {
    const data = collection(db(), coleccion)
    return getDocs(data)
}

//Función que devuelve el documento especificado de la colección 'coleccion-firebase' de la base de datos
export function getProducto(id) {
    const data = doc(db(), coleccion, id)
    return getDoc(data)
}

//Función que devuelve parte de la colección 'coleccion-firebase' de la base de datos
export function getListaFiltrada(condition) {
    const data = query(collection(db(), coleccion), where(condition[0],condition[1],condition[2]))
    return getDocs(data)
}

//Función que registra en una nueva colección 'orders' los productos seleccinados
export function addOrder(order) {
    const data = collection(db(), "orders")
    return addDoc(data, order)
}

//Función que actualiza el stock de cada producto de la colección 'coleccion-firebase' 
export function updateStock(id, newStock){
    const orderDoc=doc(db(), coleccion, id)
    updateDoc(orderDoc, {stock: newStock})
}