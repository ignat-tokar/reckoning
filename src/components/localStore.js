export let store = []

const ITEMS = 'reckoning/items/23984us92904';

export const getData = () => {
  store = JSON.parse(localStorage.getItem(ITEMS)) ? JSON.parse(localStorage.getItem(ITEMS)) : store;
  return store;
}

export const addNewItem = (item) => {
  getData();
  store = [...store, {...item[0], id: Math.random().toString(36).substring(2)}]
  localStorage.setItem(ITEMS, JSON.stringify(store));
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
  localStorage.setItem(ITEMS, JSON.stringify(store));
}

export const deleteItem = (id) => {
  getData();
  let item = store.filter(obj => obj.id === id);
  store.splice(store.indexOf(item[0]), 1);
  localStorage.setItem(ITEMS, JSON.stringify(store));
}

export const getItemById = (id) => {
  let localStore = JSON.parse(localStorage.getItem(ITEMS))
  return localStore.filter(item => item.id === id)[0];
}