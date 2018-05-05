var tasks = function() {
  let tasks = [];
  for (let i = 0; i < 10; i++) {
    tasks.push({
      title: "title" + (i + 1),
      content: "content" + (i + 1),
      completed: true,
      createAt: new Date().toString()
    });
  }
}();

console.log(tasks);

let tasks = [];
var task = function() {
  for (let i = 0; i < 10; i++) {
    tasks.push({
      title: "title" + (i + 1),
      content: "content" + (i + 1),
      completed: true,
      createAt: new Date().toString()
    });
  }
}();

console.log(tasks);