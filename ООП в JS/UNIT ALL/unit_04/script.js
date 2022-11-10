let list = new List(["one", "two", "three", "four"]);
document.body.appendChild(list.render());

let list2 = new List2(["one", "two", "three", "four"], "hidden");
document.body.appendChild(list2.render());

let list3 = new List3(
  ["one", "two", "three", "four"],
  ["text-center", "bold", "text-red"]
);
document.body.appendChild(list3.render());
