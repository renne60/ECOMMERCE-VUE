
import { createStore } from 'vuex';
import { getFromLocalStorage, setToLocalStorange } from '../utils/utlis';
import constante from '../utils/constante'

// -----ESTO ES POR LO DE LOS PRODUCTOS PAA NO SE TE VAYA A OLVIDAR!-------

// export  const getproducts = async() => {
//     // 
//     const userinfo = await fetch("https://blooming-stream-18181.herokuapp.com/api/productos", {
//             headers: {
//                 // con se autentifica el token
//                 "content-type": "application/json",
//             },
//         });
//        const infouser = await userinfo.json();
//        console.log(infouser)
// }
const savecarrito= async()=>{
  const token = getFromLocalStorage("token");
  console.log(token)
  try{
    const response = await fetch("https://blooming-stream-18181.herokuapp.com/api/carritos",{
      method: "POST",
      headers:{        
        "Authorization": `Bearer ${token}`,
      },
    }); 
    const { jwt } = await response.json();
    setToLocalStorange("token", jwt);
  }catch(e){
    console.error(Error)
  }

}
 const set = ()=>{
  return getFromLocalStorage('carrito')
 }
 console.log(set())

 const Fav = ()=>{
  return getFromLocalStorage('favorito')
 }
 console.log(Fav())
export default createStore({
  state: {
    productos: [],
    carrito: set()? set() : {},
    favorito: Fav()? Fav() : {},
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    },
    setFavorito(state, payload) {
      state.favorito[payload.id] = { ...payload }
      setToLocalStorange('favorito', state.favorito)
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = { ...payload }
      setToLocalStorange('carrito',state.carrito)
      const save =  savecarrito();
      console.log(save)
    },
    setVaciar(state) {
      state.carrito = {}
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
      setToLocalStorange('carrito',state.carrito)
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
      setToLocalStorange('carrito',state.carrito)
    }

  },
  actions: {
    async fetchData({commit}, extra) {
      try {
        let Route = `${constante.ApiRouter}productos?populate[0]=image`
        if(extra){
          Route += extra
        }
        //consumimos api 
        const res = await fetch(Route, {
          headers: {
              // con se autentifica el token
              "content-type": "application/json",
          },
      }); 
        const productos = await res.json()
        // console.log(productos)
        commit('setProductos', productos)
      } catch (error) {
        console.log(error)
      }
    },
    agregarCarrito({ commit, state }, producto) {
      // eslint-disable-next-line no-prototype-builtins
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.carrito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setCarrito', producto)
    },
    agregarFavorito({ commit, state }, producto) {
      // eslint-disable-next-line no-prototype-builtins
      state.carrito.hasOwnProperty(producto.id)
        ? producto.cantidad = state.favorito[producto.id].cantidad + 1
        : producto.cantidad = 1
      commit('setFavorito', producto)
    }
  },
  getters: {
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    }
  }
})
