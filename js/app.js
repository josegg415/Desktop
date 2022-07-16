
const productos = [
    {
    
      id: 1,
     nombre: "Bata",
     tipo: "Bata",
     desc: "Una bata que va con vos",
     precio: 500,
     talle: "L",
     stock: 6,
      imgURL: "https://imagenes.elpais.com/resizer/qXTgEbkT2pgMUd210PjuAkk6oxw=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OYZJ4YARWNEZ3NKKGIOK3XQZPY.png"
    },
    {
      id: 2,
      nombre: "Corpiño",
      tipo: 'corpiño',
      desc: "Un Corpiño que va con vos",
      precio: 300,
      talle: "xs",
      stock: 4,
      imgURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/086/659/products/3-balconette1-3918b17ceffac8265c15444669534121-1024-1024.jpg"
    },
    {
      
      id: 3,
      nombre: "Medias",
      tipo: "medias",
      desc: "Un par que va con vos",
      precio: 100,
      talle: "M",
      stock: 5,
      imgURL: "https://lenceriamytio.com.ar/tienda/6106-home_default/200elemento.jpg"
    },
    {
   
      id: 4,
      nombre: "bombacha",
      tipo: "ropa interior",
      desc: "lo mejor para estar mas comoda ",
      precio: 500,
      talle: "M",
      stock: 12,
      imgURL: "https://www.marea.com.ar/wp-content/uploads/2021/05/bombacha-culot-less-rosa-chicle-2-scaled-scaled-1.jpg"
    },
    {
      
      id: 5,
      nombre: "Botxer",
      tipo: "ropa interior",
      desc: "lo mejor para estar mas comodo ",
      precio: 1000,
      talle: "XL",
      stock: 6,
      imgURL: "https://luxuryoutletonline.eu/11706-large_default_new/calvin-klein-boxer-3-pack.jpg"
    },
    {
      id: 6,
      nombre: "Camison",
      tipo: "camison",
      desc: "Un camison que va con vos",
      precio: 1500,
      talle: "XXL",
      stock: 5,
      imgURL: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/698/970/products/21_07_16-bonjour-lulu-eshop-ss22-d3-02071-d4a0661fee146daf1916346529038021-640-0.jpg"
    }
  ];
    
    const carrito  = []


  const contenedor = document.getElementById('contenedor-productos');
  const nuevaCompra = document.getElementById('compras');

  const renderProducts = (products , target) => {
    let acumulador = '';

    products.map(product => {
    acumulador +=`
    <div class="card m-2" style="width: 18rem;">
  <img src="${product.imgURL}" class="card-img-top" alt="${product.nombre}">
  <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.desc}</p>
    <p class="card-text">${product.talle}</p>
    <p class="card-text">${product.precio}</p>
     <button  ref="${product.id}"  class="btn btn-primary button">Comprar</button>
  </div>
</div>
    `
});
  target.innerHTML = acumulador;

   const buttons = document.querySelectorAll('.button');
   buttons.forEach(button => button.addEventListener('click', handleClick));

  }

const  handleClick = (event) => {
    const id = parseInt(+ event.target.getAttribute('ref'));
    const product = productos.find(productos => productos.id === id)

    alert('compraste ' + product.nombre + 'por $ ' +  product.precio)

      if (carrito.some(el => el.id === product.id)){
        const posicion = carrito.findIndex(el => el.id === product.id)
        carrito[posicion].stock = carrito[posicion].stock + 1;

      } else {
        carrito.push({
            id: product.id,
            nombre: product.nombre,
             precio: product.precio,
             stock: 1,
             imgURL: product.imgURL
    
        })

      }
      renderProducts(productos, nuevaCompra)
    
}
  
  renderProducts(productos, contenedor);