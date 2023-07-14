import {settings, templates, select} from './settings.js';
import utils from './function.js';
import dataSource from './data.js';

class Product {
  constructor(id, data){
    const thisProduct = this;

    thisProduct.data = data;
    thisProduct.id = id;

    thisProduct.render();
  }

  render(){
    const thisProduct = this;

    const generatedHTML = templates.products(thisProduct.data);
    console.log(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelector(select.containerOf.products);
    productsContainer.appendChild(thisProduct.element);
  }
}



const app = {
  initProduct: function(){
    const thisApp = this;

    for(let productData in thisApp.data.products){
      new Product(productData, thisApp.data.products[productData]);
    }

    //const productElem = document.querySelector(select.templateOf.products);
    //thisApp.product = new Product(productElem);
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = dataSource;

    /* const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        thisApp.initProduct();
      }); */
  },



  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initProduct();
  },
};

app.init();