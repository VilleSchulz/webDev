let pizza;
function orderPizza() {
  console.log("Ordering pizza...");
  setTimeout(()=>{pizza = "🍕";

  },200)
  
  console.log("Pizza is ready!");
}
orderPizza();
console.log("Call Qoli")
console.log(`Eat ${pizza}`); // Eat 🍕
