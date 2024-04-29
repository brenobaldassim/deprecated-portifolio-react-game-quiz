export const convertObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => obj[key]);
};

export const getRandomItemFromArray = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export const get4RandomItemsFromArray = (list) => {
  let items = [];
  let i = 1;
  do {
    i++;
    let item = getRandomItemFromArray(list);
    if (items.filter((i) => i.name === item.name).length > 0) i--;
    else items.push(item);
  } while (i < 5);
  return items;
};
