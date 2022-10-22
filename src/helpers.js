
const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

const remove = (items, item) => {
  for (let i=0; i<items.length; i++) {
    if (items[i] == item) {
      return (items.splice(i, 1)[0]);
    } else {
      i++;
    }

  }
}

export {choice, remove};
