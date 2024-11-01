let todosArray = [];
let nextId = 1;

function getAll() {
  return todosArray;
}

function addOne(title, story) {
  if (!title || !story) {
    return false;
  }

  const newtoDo = {
    id: nextId++,
    title: title,
    story: story,
  };
  todosArray.push(newtoDo);
  return newtoDo;
}

function findById(id) {
  const numericId = Number(id);
  const todo = todosArray.find((item) => item.id === numericId);
  return todo || false;
}

function updateOneById(id, updatedData) {
  const todo = findById(id);
  if (todo) {
    if (updatedData.title) todo.title = updatedData.title;
    if (updatedData.story) todo.story = updatedData.story;
    return todo;
  }
  return false;
}

function deleteOneById(id) {
  const todo = findById(id);
  if (todo) {
    const initialLenght = todosArray.length;
    todosArray = todosArray.filter((todo) => todo.id !== Number(id));
    return todosArray.length < initialLenght;
  }
  return false;
}

if (require.main === module) {
  addOne("Dishes", "Wash the dishes");
  addOne("Laundry", "Do the laundry");

  console.log("getAll called:", getAll());
  updateOneById(1, { title: "Dishes", story: "Wash half of the dishes" });
  deleteOneById(2);
  console.log("getAll called:", getAll());
}

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
