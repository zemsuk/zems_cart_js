let myData = ""
const zems_cart = (data) => {
    console.log("Zems Cart");  
    myData = data  
    var cart = localStorage.getItem('zems_cart')
    var cart = JSON.parse(cart)
    if (cart !== null){
        console.log("Not null");
        myCart();
    } else {
        localStorage.setItem("zems_cart", JSON.stringify({cart:null, total_qty:0, total:0}));
        console.log("New Cart");
    }
};

const myCart = () => {
    var cart = localStorage.getItem('zems_cart')
    var cart = JSON.parse(cart)
    if (cart.cart !== null) {
        console.log("Exist");
        // your code here
        console.log(myData.id);
        console.log(cart.cart[myData.id]);
        if(cart.cart[myData.id] !== undefined){
            console.log("update item");
            updateCart()
        } else {
            console.log("ex new");
            addToCart()
        }
    } else {
        // localStorage.setItem("zems_cart", JSON.stringify({cart:null, total_qty:0, total:0}));
        console.log("No");
        addToCart()
    }
    // localStorage.setItem("zems_cart", JSON.stringify({ price: data.price }));
}
const addToCart = () => {
    console.log("addToCart");
    let cartId = myData.id
    var curCart = JSON.parse(localStorage.getItem("zems_cart"))
    var qty = 1
    var cart_name = 'cart'
    if (curCart.cart !== null){
        curCart['cart'] = curCart.cart
    } else {
        curCart['cart'] = {}
    }
    curCart['cart'][cartId] = {name:myData.zems_item_title, qty:qty, price: myData.price }
    curCart['total_qty'] = curCart['total_qty'] + 1
    curCart['total'] = curCart['total'] + parseFloat(myData.price)
    // curCart.push(ndata)
    
    console.log(curCart);
    localStorage.setItem("zems_cart", JSON.stringify(curCart));
}
const updateCart = () => {
    console.log("====update cart=====");
    console.log(myData);
    var carts = JSON.parse(localStorage.getItem("zems_cart"))
    console.log(carts.cart[myData.id].qty);
    carts.cart[myData.id].qty = carts.cart[myData.id].qty + 1
    carts.total_qty = carts.total_qty + 1
    carts.total = carts.total + parseFloat(myData.price)
    console.log(carts.total_qty);
    console.log(carts.total);
    localStorage.setItem("zems_cart", JSON.stringify(carts));
}
const removeFromCart = (id) => {
    var carts = JSON.parse(localStorage.getItem("zems_cart"))
    console.log("remove "+id);
    var nCart = carts.cart
    delete nCart[id] 
    carts.cart = nCart
    console.log(carts);
    localStorage.setItem("zems_cart", JSON.stringify(carts));
    return this.getCart()
}

const getCart = () => {
    var cart = localStorage.getItem('zems_cart')
    cart = JSON.parse(cart)
    return cart
}


export { zems_cart, getCart, myData, removeFromCart }