const chocolate = {
    price: 2.99,
    count: 2
};

const coffee = {
    price: 10.99,
    count: 1
};

const milk = {
    price: 1.99,
    count: 5
};

const total = chocolate.price * chocolate.count + coffee.price * coffee.count + milk.price * milk.count;
alert('Total of your order: $' + total.toFixed(2));