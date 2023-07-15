import {templates, select, classNames} from './settings.js';
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
    const productsContainer = document.querySelectorAll(select.containerOf.products);
    for(let productContainer of productsContainer){
      productContainer.appendChild(thisProduct.element);
    }
  }
}

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    thisApp.activatePage(thisApp.pages[0].id);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initProduct: function(){
    const thisApp = this;

    for(let productData in thisApp.data.products){
      new Product(productData, thisApp.data.products[productData]);
    }
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = dataSource;
  },

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
    thisApp.initProduct();
  },
};

app.init();