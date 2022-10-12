const Person = {
  vote: 18,
  isVote: function (age) {
    return age >= this.vote;
  },
};
function compose(callbacks) {
  return function (arg2) {
    return callbacks.reduceRight((y, f) => {
      return f.call(this, y);
    }, arg2);
  };
}
function multiply(a) {
  return 2 * a;
}
console.log(compose([Person.isVote, multiply]).bind(Person)(10));

function hello() {
  console.log("Hello Metgod is called");
  console.log(this);
}

hello();
const PersonObj = {
  name: "Jhansi",
  foo: function hello() {
    console.log("Person foo is called");
    console.log(this);
  },
};
PersonObj.foo();

function Abc(a) {
  console.log(a);
}

Abc.call(this, 12);
