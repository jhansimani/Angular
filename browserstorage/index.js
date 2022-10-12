const storebtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");
const user = {
  fullName: {
    firstName: "Jhansi",
    lastName: "Maradana",
  },
  hobbies: ["sports", "Reading Books"],
};
const user1 = {
  name: "Jhansi",
  age: "24",
};
storebtn.addEventListener("click", () => {
  console.log("this :", this);
  const userId = "u123";
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
  document.cookie = `uid=${userId}; expires='it should be date`;
  document.cookie = `user=${JSON.stringify(user1)}; max-age=2`;
});
retrieveBtn.addEventListener("click", () => {
  const retrievedItem = localStorage.getItem("uid");
  const retrievedUser = localStorage.getItem("user");
  console.log(document.cookie.split(";"));
  console.log(JSON.parse(retrievedUser));
  console.log(retrievedUser);
});
const dbRequest = indexedDB.open("storageDummy");
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });
  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({ id: "1", title: "Almonds", price: 200 });
  };
};
dbRequest.onerror = function (event) {
  console.log(event);
};
