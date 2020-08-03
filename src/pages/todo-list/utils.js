export const localStorageSet = (list) => {
  localStorage.setItem('toDoList', JSON.stringify(list));
};

export const jsonParse = (string) => {
  try {
    const data = JSON.parse(string);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
