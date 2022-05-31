export let store = [
  {
    id: '1',
    title: 'Aromat some',
    countBuy: 10,
    countSell: 2,
    priceBuy: 100,
    priceSell: 110
  },
  {
    id: '2',
    title: 'Aromat some2',
    countBuy: 8,
    countSell: 4,
    priceBuy: 110,
    priceSell: 150
  },
]


export const getData = () => {
  store = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : store;
  return store;
}

export const addNewItem = (item) => {
  getData();
  store = [...store, {...item[0], id: Math.random().toString(36).substring(2)}]
  localStorage.setItem('items', JSON.stringify(store));
}

export const editItem = (newItem) => {
  getData();
  let newStore = store.map(item => {
    if(item.id === newItem[0].id){
      return newItem[0];
    }else{
      return item;
    }
  });
  store = [...newStore];
  localStorage.setItem('items', JSON.stringify(store));
}

export const deleteItem = (id) => {
  getData();
  let item = store.filter(obj => obj.id === id);
  store.splice(store.indexOf(item[0]), 1);
  localStorage.setItem('items', JSON.stringify(store));
}

export const getItemById = (id) => {
  let localStore = JSON.parse(localStorage.getItem('items'))
  return localStore.filter(item => item.id === id)[0];
}