export let store = [
  {
    id: 1,
    title: 'Aromat some',
    countBuy: 10,
    countSell: 2,
    priceBuy: 100,
    priceSell: 110
  },
  {
    id: 2,
    title: 'Aromat some2',
    countBuy: 8,
    countSell: 4,
    priceBuy: 110,
    priceSell: 150
  },
]
export let needUpdate = false;

export const getData = () => {
  let store = JSON.parse(localStorage.getItem('items'));
  return store;
}

export const addNewItem = (item) => {
  store = [...store, {...item[0], id: store.length+1}]
  localStorage.setItem('items', JSON.stringify(store));
  needUpdate = !needUpdate;
}

export const editItem = (newItem) => {
  let newStore = store.map(item => {
    if(item.id === newItem[0].id){
      return newItem[0];
    }else{
      return item;
    }
  })
  store = [...newStore];
  localStorage.setItem('items', JSON.stringify(store));
  needUpdate = !needUpdate;
}

export const getItemById = (id) => {
  return store.filter(item => item.id === id)[0];
}