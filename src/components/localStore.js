let store = [
  {
    id: 1,
    title: 'Aromat some',
    countBuy: 10,
    countSell: 0,
    priceBuy: 100,
    priceSell: 120
  },
  {
    id: 2,
    title: 'Aromat some2',
    countBuy: 8,
    countSell: 0,
    priceBuy: 110,
    priceSell: 130
  },
]

export const getData = () => {
  return store;
}

export const addNewItem = (item) => {
  store = [...store, {...item[0], id: store.length+1}]
}