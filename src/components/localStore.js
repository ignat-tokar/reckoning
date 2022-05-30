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

export const getData = () => {
  return store;
}

export const addNewItem = (item) => {
  store = [...store, {...item[0], id: store.length+1}]
}

export const editItem = (newItem) => {
  let newStore = store.map(item => {
    if(item.id === newItem.id){
      return newItem;
    }else{
      return item;
    }
  })
  store = [...newStore];
}

export const getItemById = (id) => {
  return store.filter(item => item.id === id)[0];
}