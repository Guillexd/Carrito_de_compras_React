import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore";

const db = ()=> getFirestore()

const coleccion = 'coleccion-firebase';

export function getListaTotal() {
    const data = collection(db(), coleccion)
    return getDocs(data)
}

export function getProducto(id) {
    const data = doc(db(), coleccion, id)
    return getDoc(data)
}

export function getListaFiltrada(condition) {
    const data = query(collection(db(), coleccion), where(condition[0],condition[1],condition[2]))
    return getDocs(data)
}

export function addOrder(order) {
    const data = collection(db(), "orders")
    return addDoc(data, order)
}

// export function updateStock(){
//     const orderDoc=doc(db(), coleccion, id)
//     updateDoc(orderDoc, {stock: ()})
// }