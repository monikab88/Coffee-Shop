export const select = {
  templateOf: {
    products: '#template-products',
  },
  containerOf: {
    products: '#products-list',
    pages: '#pages',
  },
  nav: {
    links: '.nav-navigation a',
  }
};
  
export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};
export const classNames = {
  active: 'active',
};
  
export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};