(this.webpackJsonpaakanksha=this.webpackJsonpaakanksha||[]).push([[0],{139:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},294:function(e,t,a){},295:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(17),s=a.n(c),i=(a(139),a(10)),l=a(11),o=a(13),d=a(14),h=a(24),j=a(121),u=new(a.n(j).a)("pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec",!0),m=a(28),b=a(1),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleUpdateCartQty=r.handleUpdateCartQty.bind(Object(h.a)(r)),r.handleRemoveFromCart=r.handleRemoveFromCart.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"handleUpdateCartQty",value:function(e,t){this.props.onUpdateCartQty(e,t)}},{key:"handleRemoveFromCart",value:function(e){this.props.onRemoveFromCart(e)}},{key:"render",value:function(){var e=this,t=this.props.item;return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsx)("img",{className:"cart-item__image",src:t.media.source,alt:t.name}),Object(b.jsxs)("div",{className:"cart-item__details",children:[Object(b.jsx)("h4",{className:"cart-item__details-name",children:t.name}),Object(b.jsxs)("div",{className:"cart-item__details-qty",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return e.handleUpdateCartQty(t.id,t.quantity-1)},title:"Decrease quantity",children:"-"}),Object(b.jsx)("p",{children:t.quantity}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.handleUpdateCartQty(t.id,t.quantity+1)},title:"Increase quantity",children:"+"})]}),Object(b.jsx)("div",{className:"cart-item__details-price",children:t.line_total.formatted_with_symbol})]}),Object(b.jsx)("button",{type:"button",className:"cart-item__remove",onClick:function(){return e.handleRemoveFromCart(t.id)},children:"Remove"})]})}}]),a}(r.Component),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleEmptyCart=r.handleEmptyCart.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"handleEmptyCart",value:function(){this.props.onEmptyCart()}},{key:"renderEmptyCart",value:function(){if(!(this.props.cart.total_unique_items>0))return Object(b.jsxs)("p",{className:"cart__none",children:["You have no items in your shopping cart, ",Object(b.jsx)(m.b,{to:"/",className:"add-some",children:"start adding some!"})]})}},{key:"renderCart",value:function(){var e=this,t=this.props.cart;if(0!==t.total_unique_items)return Object(b.jsxs)(b.Fragment,{children:[t.line_items.map((function(t){return Object(b.jsx)(p,{item:t,className:"cart__inner",onUpdateCartQty:e.props.onUpdateCartQty,onRemoveFromCart:e.props.onRemoveFromCart},t.id)})),Object(b.jsxs)("div",{className:"cart__total",children:[Object(b.jsx)("p",{className:"cart__total-title",children:"Subtotal:"}),Object(b.jsx)("p",{className:"cart__total-price",children:t.subtotal.formatted_with_symbol})]}),Object(b.jsxs)("div",{className:"cart__footer",children:[Object(b.jsx)("button",{className:"cart__btn-empty",onClick:this.handleEmptyCart,children:"Empty cart"}),Object(b.jsx)("button",{className:"cart__btn-checkout",children:"Checkout"})]})]})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsxs)("h4",{className:"cart__heading",children:[Object(b.jsx)(m.b,{to:"/",children:Object(b.jsx)("i",{className:"fa fa-arrow-left"})}),"Your Shopping Cart"]}),this.renderEmptyCart(),this.renderCart()]})})}}]),a}(r.Component),x=a(122),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleAddToCart=r.handleAddToCart.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"handleAddToCart",value:function(){this.props.onAddToCart(this.props.product.id,1)}},{key:"render",value:function(){var e=this.props.product,t=Object(x.stripHtml)(e.description).result;return Object(b.jsxs)("div",{className:"product__card",children:[Object(b.jsx)("img",{className:"product__image",src:e.media.source,alt:e.name}),Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("h4",{className:"product__name",children:e.name}),Object(b.jsx)("p",{className:"product__description p",children:t}),Object(b.jsxs)("div",{className:"product__details",children:[Object(b.jsx)("p",{className:"product__price",children:e.price.formatted_with_symbol}),Object(b.jsx)("button",{name:"Add to cart",className:"product__btn",onClick:this.handleAddToCart,children:Object(b.jsx)("i",{className:"fa fa-2x fa-cart-plus"})})]})]})]})}}]),a}(r.Component),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.products;return Object(b.jsx)("div",{className:"products",children:t.map((function(t){return Object(b.jsx)(f,{product:t,onAddToCart:e.props.onAddToCart},t.id)}))})}}]),a}(r.Component),C=a(328),g=a(334),y=(a(190),a(191),a(192),a(193),a(332)),w=a(325),N=a(326),_=a(327);function k(){for(var e=[],t=0;t<5;t++)e.push(Object(b.jsx)(C.a,{children:Object(b.jsx)("img",{class:"swiper-slide-image",src:"https://picsum.photos/id/".concat(t,"/200/300")})},t));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g.a,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:e})})}y.a.use([w.a,N.a,_.a]);a(194);var q=function(e){var t=e.cart;return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)(m.b,{to:"/",children:"Welcome"})}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)(m.b,{to:"/login",class:"login-link",children:"Login"}),Object(b.jsxs)(m.b,{to:"/cart",children:[Object(b.jsx)("i",{className:"fa fa-2x fa-shopping-cart"}),null!==t?Object(b.jsx)("span",{class:"span",children:t.total_items}):""]})]})]})},B=(a(195),function(){return Object(b.jsx)("footer",{class:"footer",children:Object(b.jsx)("div",{class:"footer-container",children:Object(b.jsxs)("div",{class:"footer-row",children:[Object(b.jsxs)("div",{class:"footer-col",children:[Object(b.jsx)("h4",{children:"company"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"about us"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"our services"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"privacy policy"})})]})]}),Object(b.jsxs)("div",{class:"footer-col",children:[Object(b.jsx)("h4",{children:"get help"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"FAQ"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"shipping"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"order status"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"payment options"})})]})]}),Object(b.jsxs)("div",{class:"footer-col",children:[Object(b.jsx)("h4",{children:"online shop"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"watch"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"bag"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"shoes"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#",children:"dress"})})]})]}),Object(b.jsxs)("div",{class:"footer-col",children:[Object(b.jsx)("h4",{children:"follow us"}),Object(b.jsxs)("div",{class:"footer-social-links",children:[Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{class:"fa fa-facebook-f"})}),Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{class:"fa fa-twitter"})}),Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{class:"fa fa-instagram"})}),Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("i",{class:"fa fa-linkedin"})})]})]})]})})})}),T=function(e){var t=e.cart,a=e.products,r=e.onAddToCart,n=e.loading;return Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{cart:t}),Object(b.jsx)(k,{}),n?Object(b.jsx)("p",{class:"loading",children:"Loading..."}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v,{products:a,onAddToCart:r})}),Object(b.jsx)(B,{})]})},S=a(19),E=a(70),F=a(26),P=a(335),A=a(333),U=F.a({email:F.c().email("Enter a valid email").required("Email is required"),password:F.c().min(6,"Enter at least 6 characters").required("Password is required")}),Q=function(){var e=Object(E.a)({initialValues:{email:"",password:""},validationSchema:U,onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"form-body",children:Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{className:"img-input",children:Object(b.jsx)("img",{src:"https://www.iconpacks.net/icons/2/free-user-login-icon-3057-thumb.png",alt:"login-image"})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)("h2",{children:"Login Form"})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,variant:"outlined",name:"email",label:"Email",value:e.values.email,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,variant:"outlined",name:"password",label:"Password",type:"password",value:e.values.password,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(P.a,{color:"primary",variant:"contained",type:"submit",children:"Submit"})}),Object(b.jsxs)("div",{className:"input",children:["Don't have an account?"," ",Object(b.jsx)(m.b,{to:"/signup",className:"signup-link",children:"Sign Up"})]})]})}),Object(b.jsx)(B,{})]})},R=F.a({firstname:F.c().required("Enter First Name"),lastname:F.c().required("Enter Last Name"),email:F.c().email("Enter a valid email").required("Email is required"),password:F.c().min(6,"Enter at least 6 characters").required("Password is required"),confirmPassword:F.c().oneOf([F.b("password"),""],"Password match failed").required("Confirm Password Required"),address:F.c().required("Address is required"),phone:F.c().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("Phone number required!")}),W=function(){var e=Object(E.a)({initialValues:{firstname:"",lastname:"",email:"",password:"",confirmPassword:"",address:"",phone:""},validationSchema:R,onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"form-body",children:Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{className:"img-input",children:Object(b.jsx)("img",{src:"https://www.iconpacks.net/icons/2/free-user-signup-icon-3058-thumb.png",alt:"signup-image"})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)("h2",{children:"SignUp Form"})}),Object(b.jsxs)("div",{className:"name-input",children:[Object(b.jsx)(A.a,{required:!0,className:"first-name",variant:"outlined",name:"firstname",label:"First Name",value:e.values.firstname,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.firstname&&Boolean(e.errors.firstname),helperText:e.touched.firstname&&e.errors.firstname}),Object(b.jsx)(A.a,{required:!0,className:"last-name",variant:"outlined",name:"lastname",label:"Last Name",value:e.values.lastname,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.lastname&&Boolean(e.errors.lastname),helperText:e.touched.lastname&&e.errors.lastname})]}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,variant:"outlined",name:"email",label:"Email",value:e.values.email,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.email&&Boolean(e.errors.email),helperText:e.touched.email&&e.errors.email})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,variant:"outlined",name:"password",label:"Password",type:"password",value:e.values.password,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.password&&Boolean(e.errors.password),helperText:e.touched.password&&e.errors.password})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,variant:"outlined",name:"confirmPassword",label:"Confirm Password",type:"password",value:e.values.confirmPassword,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.confirmPassword&&Boolean(e.errors.confirmPassword),helperText:e.touched.confirmPassword&&e.errors.confirmPassword})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,multiline:!0,rows:1,rowsMax:4,variant:"outlined",name:"address",label:"Address",value:e.values.address,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.address&&Boolean(e.errors.address),helperText:e.touched.address&&e.errors.address})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(A.a,{required:!0,fullWidth:!0,variant:"outlined",name:"phone",label:"Phone number",value:e.values.phone,onBlur:e.handleBlur,onChange:e.handleChange,error:e.touched.phone&&Boolean(e.errors.phone),helperText:e.touched.phone&&e.errors.phone})}),Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(P.a,{color:"primary",variant:"contained",type:"submit",children:"Submit"})}),Object(b.jsxs)("div",{className:"input",children:["Already have an account?"," ",Object(b.jsx)(m.b,{to:"/login",className:"signup-link",children:"Log In"})]})]})}),Object(b.jsx)(B,{})]})},L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={products:[],loading:!0,cart:{}},r.handleAddToCart=r.handleAddToCart.bind(Object(h.a)(r)),r.handleUpdateCartQty=r.handleUpdateCartQty.bind(Object(h.a)(r)),r.handleRemoveFromCart=r.handleRemoveFromCart.bind(Object(h.a)(r)),r.handleEmptyCart=r.handleEmptyCart.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchProducts(),this.fetchCart()}},{key:"fetchProducts",value:function(){var e=this;u.products.list().then((function(t){e.setState({products:t.data,loading:!1})})).catch((function(e){console.log("There was an error fetching the products",e)}))}},{key:"fetchCart",value:function(){var e=this;u.cart.retrieve().then((function(t){e.setState({cart:t})})).catch((function(e){console.error("There was an error fetching the cart",e)}))}},{key:"handleAddToCart",value:function(e,t){var a=this;u.cart.add(e,t).then((function(e){a.setState({cart:e.cart})})).catch((function(e){console.error("There was an error adding the item to the cart",e)}))}},{key:"handleUpdateCartQty",value:function(e,t){var a=this;u.cart.update(e,{quantity:t}).then((function(e){a.setState({cart:e.cart})})).catch((function(e){console.log("There was an error updating the cart items",e)}))}},{key:"handleRemoveFromCart",value:function(e){var t=this;u.cart.remove(e).then((function(e){t.setState({cart:e.cart})})).catch((function(e){console.error("There was an error removing the item from the cart",e)}))}},{key:"handleEmptyCart",value:function(){var e=this;u.cart.empty().then((function(t){e.setState({cart:t.cart})})).catch((function(e){console.error("There was an error emptying the cart",e)}))}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.loading,r=e.cart;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(S.c,{children:[Object(b.jsx)(S.a,{exact:!0,path:"/",children:Object(b.jsx)(T,{cart:r,products:t,onAddToCart:this.handleAddToCart,loading:a})}),Object(b.jsx)(S.a,{exact:!0,path:"/cart",children:Object(b.jsx)(O,{cart:r,onUpdateCartQty:this.handleUpdateCartQty,onRemoveFromCart:this.handleRemoveFromCart,onEmptyCart:this.handleEmptyCart})}),Object(b.jsx)(S.a,{exact:!0,path:"/login",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(S.a,{exact:!0,path:"/signup",children:Object(b.jsx)(W,{})})]})})})}}]),a}(r.Component),I=(a(294),a(295),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(L,{})}}]),a}(r.Component));a(296);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[297,1,2]]]);
//# sourceMappingURL=main.dd9cfd8a.chunk.js.map