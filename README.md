# Carrito de compras

## Descripción
Este es un carrito de compras hecho en React.

## Librerías adicionales usadas
>Todo el sitio web fue maquetado con **Boostrap**, se puso el cdn directamente en `index.html`, por lo que se hará mucho uso de las clases *className* y *style* en jsx para la maquetación.

>Se usó e importó **react-router-dom** para la gestión de rutas.

>Se usó e importó **firebase/firestore** para hacer CRUD a la base de datos 'coleccion-firebase' en la plataforma firebase.

## Hooks usados
- useState
- useEffect
- useParams
- useNavigate
- createContext

## Utils
### `CartContext`
> Se crea el contexto donde se pasarán las funciones y estados para el sitio web.\
Se exporta la función 'usarContextos' para hacer el llamado y uso del contexto en cualquier parte.

> Se hace uso de useState (**carrito**, **setCarrito**) para guardar el estado de los detalles de los productos almacenados.

> Se hace uso de useState (**cantidad**, **setCantidad**) para guardar el estado de la cantidad de productos pedidos en total.

> Se hace uso de useState (**precioFinal**, **setPrecioFinal**) para guardar el estado del precio total de los productos pedidos en total.

>Se hace uso de useEffect para hacer el seguimiento de **"carrito"** y controlar el estado de **"cantidad"** y **"precioFinal"**

### `Firebase`
> Se importó varias funciones `{ getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, updateDoc }` para la manipulación de la base de datos a través de funciones.

- **getListaTotal:** Devuelve toda la colección 'coleccion-firebase' de la base de datos.
- **getProducto:** Devuelve el documento especificado de la colección 'coleccion-firebase' de la base de datos.
- **getListaFiltrada:** Devuelve parte de la colección 'coleccion-firebase' de la base de datos.
- **addOrder:** Registra en una nueva colección 'orders' los productos seleccinados.
- **updateStock** Actualiza el stock de cada producto de la colección 'coleccion-firebase' 

## Components
### `App`
Retorna la navegación (*Routes y Route*) y contextos (*useContext*) de la página.

### `NavBar`
Retorna la barra de navegación para la presentación de las páginas, te puede redirigir a la ruta */categorias/:id* y se importa el componente **CartWidget**.

### `CartWidget`
Retorna un logo y la cantidad de productos en el **"carrito"** gracias a **"cantidad"**. Además, te redirige a la ruta *carrito* al hacer click sobre el logo.

### `NotFound`
Retorna un mensaje de que la página no fue encontrada debido a que la ruta no existe.

---

### `ItemListContainer`
Retorna el titulo de la categoria seleccionada o la por defecto, y se renderiza condicionalmente, a la espera de recibir la información de la bse de datos 'coleccion-firebase' de la plataforma firebase, **ItemList**.

### `ItemList`
Retorna el contenedor de un producto e importa el componente **Item** simultánea y repetidamente.

### `Item`
Retorna el/los producto(s) con algunos de sus detalles, haciendo click en la imagen o en el boton te redigirá a una nueva ruta */item/:id*.

---

### `ItemDetailContainer`
Retorna el producto seleccionado en **Item** y se renderiza condicionalmente, a la espera de recibir la información la base de datos 'coleccion-firebase' de la plataforma firebase, **ItemDetail**.

### `ItemDetail`
Retorna el producto detallado y se importa **ItemCount**.

### `ItemCount`
Retorna los botones de control de las cantidades de producto y de agregar el producto al "carrito".

---

### `CartContainer`
Retorna el contenedor de los productos añadidos al **"carrito"**; la tabla de información de **"cantidad"**, **"precioFinal"**; un botón que te redirige a la ruta */carrito*  y se importa **Cart** simultánea y repetidamente.

### `Cart`
Retorna el/los producto(s) añadido(s) al **"carrito"** con un boton para poder eliminar el producto de "carrito".

---

### `Form`
Retorna un formulario y la tabla de información de **"cantidad"**, **"precioFinal"** junto a un botón que añadirá esa petición en forma de array de objetos a la plataforma firebase.
