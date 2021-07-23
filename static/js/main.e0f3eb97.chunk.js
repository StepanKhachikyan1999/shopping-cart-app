(this["webpackJsonpshopping-cart-app"]=this["webpackJsonpshopping-cart-app"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(27),r=c.n(i),s=(c(40),c(33)),d=c(10),j=c(34),l={productItems:[{id:"1",name:"Coca Cola",price:450,image:"./images/cocacola1l.jpeg"},{id:"2",name:"Pepsi",price:430,image:"./images/pepsi.png"},{id:"3",name:"Sandora",price:700,image:"./images/Sandora.jpg"},{id:"4",name:"Yan",price:850,image:"./images/yan.jpg"},{id:"5",name:"Natakhtari",price:480,image:"./images/natakhtari.jpg"},{id:"6",name:"Fanta",price:450,image:"./images/fanta.jpg"},{id:"7",name:"Mirinda",price:430,image:"./images/mirinda.jpeg"},{id:"8",name:"7UP",price:420,image:"./images/7UP.jpg"},{id:"9",name:"Coca Cola Zero",price:450,image:"./images/coca-cola-zero.jpg"}]},o=c(8),m=(c(41),c(0)),u=function(e){var t=e.cartItems;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:Object(m.jsx)(o.b,{to:"/",className:"logo",children:"Shopping Cart"})})}),Object(m.jsxs)("div",{className:"header-links",children:[Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",children:"HOME"})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/Server",children:"Server"})})}),Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/cart",className:"cart",children:[Object(m.jsx)("i",{className:"fas fa-shopping-cart"}),Object(m.jsx)("span",{className:"cart-length",children:0===t.length?" ":t.length})]})})})]})]})},h=(c(48),function(e){var t=e.productItems,c=e.handleAddProduct;return Object(m.jsx)("div",{className:"products",children:t.map((function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"product-image",src:e.image,alt:e.name})}),Object(m.jsx)("div",{children:Object(m.jsx)("h3",{className:"product-name",children:e.name})}),Object(m.jsxs)("div",{className:"product-price",children:[e.price," \u058f"]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"product-add-button",onClick:function(){return c(e)},children:"\u0531\u057e\u0565\u056c\u0561\u0581\u0576\u0565\u056c \u0566\u0561\u0574\u0562\u0575\u0578\u0582\u0572"})})]})}))})}),b=(c(49),function(e){var t=e.cartItems,c=e.handleAddProduct,a=e.handleRemoveProduct,n=e.handleCartClearance,i=t.reduce((function(e,t){return e+t.quantity*t.price}),0);return Object(m.jsxs)("div",{className:"cart-items",children:[Object(m.jsx)("h2",{className:"cart-items-header",children:"\u0531\u057e\u0565\u056c\u0561\u0581\u057e\u0561\u056e \u0561\u057a\u0580\u0561\u0576\u0584\u0576\u0565\u0580"}),Object(m.jsx)("div",{className:"clear-cart",children:t.length>=1&&Object(m.jsx)("button",{className:"clear-cart-button",onClick:n,children:" \u054b\u0576\u057b\u0565\u056c \u0566\u0561\u0574\u0562\u0575\u0578\u0582\u0572\u0568"})}),0===t.length&&Object(m.jsx)("div",{className:"cart-items-empty",children:"\u0531\u057e\u0565\u056c\u0561\u0581\u057e\u0561\u056e \u0561\u057a\u0580\u0561\u0576\u0584 \u0579\u056f\u0561!"}),Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsxs)("div",{className:"cart-items-list",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"cart-items-image product-image",src:e.image,alt:e.name})}),Object(m.jsx)("div",{className:"cart-items-name",children:e.name}),Object(m.jsxs)("div",{className:"cart-items-function",children:[Object(m.jsx)("button",{className:"cart-items-add",onClick:function(){return c(e)},children:"+"}),Object(m.jsx)("button",{className:"cart-items-remove",onClick:function(){return a(e)},children:"-"})]}),Object(m.jsxs)("div",{className:"cart-items-price",children:[e.quantity," *  ",e.price,"  ",""," \u058f"]})]},e.id)}))}),Object(m.jsxs)("div",{className:"cart-items-total-price-name",children:["Total totalPrice",Object(m.jsxs)("div",{className:"cart-Items-total-price",children:[" ",i," \u058f"]})]})]})}),p=c(2),O=c(29),x=c(30),g=c(35),v=c(32),f=c(31),N=c.n(f),C=(c(68),function(e){Object(g.a)(c,e);var t=Object(v.a)(c);function c(){var e;Object(O.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={ProductsServer:[]},e}return Object(x.a)(c,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://fakestoreapi.com/products").then((function(t){e.setState({ProductsServer:t.data})}))}},{key:"render",value:function(e,t){return Object(m.jsx)("div",{className:"products",children:this.state.ProductsServer.map((function(e){return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"product-image",src:e.image,alt:e.name})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"product-name",children:e.name}),Object(m.jsxs)("div",{className:"product-price",children:[e.price," \u058f"]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"product-add-button",children:"\u0531\u057e\u0565\u056c\u0561\u0581\u0576\u0565\u056c \u0566\u0561\u0574\u0562\u0575\u0578\u0582\u0572"})})]})]},e.id)}))})}}]),c}(a.Component)),P=function(e){var t=e.productItems,c=e.cartItems,a=e.handleAddProduct,n=e.handleRemoveProduct,i=e.handleCartClearance;return Object(m.jsx)("div",{children:Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{path:"/",exact:!0,children:Object(m.jsx)(h,{productItems:t,handleAddProduct:a})}),Object(m.jsx)(p.a,{path:"/Server",exact:!0,children:Object(m.jsx)(C,{})}),Object(m.jsx)(p.a,{path:"/cart",exact:!0,children:Object(m.jsx)(b,{cartItems:c,handleAddProduct:a,handleRemoveProduct:n,handleCartClearance:i})})]})})},y=function(){var e=l.productItems,t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(u,{cartItems:n}),Object(m.jsx)(P,{productItems:e,cartItems:n,handleAddProduct:function(e){var t=n.find((function(t){return t.id===e.id}));i(t?n.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}):c})):[].concat(Object(s.a)(n),[Object(d.a)(Object(d.a)({},e),{},{quantity:1})]))},handleRemoveProduct:function(e){var t=n.find((function(t){return t.id===e.id}));1===t.quantity?i(n.filter((function(t){return t.id!==e.id}))):i(n.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity-1}):c})))},handleCartClearance:function(){i([])}})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),I()}},[[69,1,2]]]);
//# sourceMappingURL=main.e0f3eb97.chunk.js.map