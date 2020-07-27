import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		riceflour : [
		{
			name: 'Aashirvaad Superior MP Atta Bag',
			price: 412,
			image : 'https://images-na.ssl-images-amazon.com/images/I/41blOoc5W%2BL._SX425_.jpg',
			stars: 4.1,
			totalreviews: 670,
			details: 'Make fluffy rotis on the go with this whole wheat atta',
        },
		{
			name: 'Pillsbury Chakki Fresh Atta, 10kg ',
			price: 385,
			image : 'https://m.media-amazon.com/images/I/710yT72yleL._AC_UL320_.jpg',
			stars: 4.6,
			totalreviews: 210,
			details: 'Best ROTI MAKER fluffy rotis on the go with this whole wheat atta'
        },
        {
			name: 'Nature Ragi Flour 500 Gm Organic Flour ',
			price: 59,
			image : 'https://m.media-amazon.com/images/I/81gx2ODoNeL._AC_UL320_.jpg',
			stars: 4.0,
			totalreviews: 17,
			details: 'oragnic good whole wheat atta'
        },
        {
			name: 'Daawat Dubar Basmati Rice, 5kg',
			price: 595,
			image : 'https://m.media-amazon.com/images/I/517KGu2ZiLL._AC_UL320_.jpg',
			stars: 2.5,
			totalreviews: 39,
			details: 'Best Tasting Basmati Rice'
        },
        {
			name: 'Daawat Rozana Super Basmati Rice, 5kg',
			price: 321,
			image : 'https://m.media-amazon.com/images/I/51zEA971tIL._AC_UL320_.jpg',
			stars: 3.5,
			totalreviews: 2732,
			details: 'Fresh from farm and good Tasting Basmati Rice'
        },
        {
			name: 'Fortune Special Biryani Basmati Rice, 1kg',
			price: 111,
			image : 'https://m.media-amazon.com/images/I/51BLnkqsiXL._AC_UL320_.jpg',
			stars: 1.0,
			totalreviews: 417,
			details: 'Fresh for Biryani'
        },
    ],
    cartProducts:[],
    favProducts:[],
    currentProducts :{},
    showModal : false,
    showPopupCart : false,    
    },
    
    getters: {
        getRiceflour: state => state.riceflour,
        getCartproducts: state => state.cartProducts,
        getFavproducts: state => state.favProducts,
        getCurrentproducts: state => state.currentProducts,
        getShowmodal: state => state.showModal,
        getShowpopupcart: state => state.showPopupCart,

    },

    mutations: {
        ADD_PRODUCTS : (state, products) =>{
            state.cartProducts.push(products);
        },
        REMOVE_PRODUCTS : (state, index) =>{
            state.cartProducts.splice(index,1);
        },
        CURRENT_PRODUCTS : (state, products) =>{
            state.currentProducts = products;
        },
        SHOW_MODAL : (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_FAVS : (state) => {
            state.showPopupFavs = !state.showPopupFavs;
        },
        SHOW_POPUP_CART : (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
    },
    actions : {
        addProducts : (context,products) => {
            context.commit('ADD_PRODUCTS', products);
        },
        removeProducts : (context,index) => {
            context.commit('REMOVE_PRODUCTS', index);
        },
        currentProducts : (context,products) => {
            context.commit('CURRENT_PRODUCTS', products);
        },
        showorHiddenModal : (context) => {
            context.commit('SHOW_MODAL');
        },
        showorHiddenPopupFavs : (context) => {
            context.commit('SHOW_POPUP_FAVS');
        },
        showorHiddenPopupCart : (context) => {
            context.commit('SHOW_POPUP_CART');
        },
    },
});
