import { addShopItem } from "./../localStore";

export let shopStore = []

const SHOP_ITEMS = 'reckoning/shopitems/23984us92904';

export let summuryExpense = 0;

export const getData = () => {
  shopStore = JSON.parse(localStorage.getItem(SHOP_ITEMS)) ? JSON.parse(localStorage.getItem(SHOP_ITEMS)) : shopStore;
  summuryExpense = 0;
  shopStore.map(item => {
    summuryExpense += item.countBuy*item.priceBuy;
  })
  return shopStore;
}

export const addNewShopItem = (item) => {
  getData();
  shopStore = [...shopStore, {...item[0], id: Math.random().toString(36).substring(2)}]
  localStorage.setItem(SHOP_ITEMS, JSON.stringify(shopStore));
}

export const editItem = (newItem) => {
  getData();
  let newShopStore = shopStore.map(item => {
    if(item.id === newItem[0].id){
      return newItem[0];
    }else{
      return item;
    }
  });
  shopStore = [...newShopStore];
  localStorage.setItem(SHOP_ITEMS, JSON.stringify(shopStore));
}

export const deleteItem = (id) => {
  getData();
  let item = shopStore.filter(obj => obj.id === id);
  shopStore.splice(shopStore.indexOf(item[0]), 1);
  localStorage.setItem(SHOP_ITEMS, JSON.stringify(shopStore));
}

export const getItemById = (id) => {
  let localStore = JSON.parse(localStorage.getItem(SHOP_ITEMS))
  return localStore.filter(item => item.id === id)[0];
}

export const replaceItem = (id) => {
  let localStore = JSON.parse(localStorage.getItem(SHOP_ITEMS))
  let shopItemForReplace = localStore.filter(item => item.id === id)[0];
  getData();
  let item = shopStore.filter(obj => obj.id === id);
  shopStore.splice(shopStore.indexOf(item[0]), 1);
  localStorage.setItem(SHOP_ITEMS, JSON.stringify(shopStore));
  addShopItem(shopItemForReplace);
}