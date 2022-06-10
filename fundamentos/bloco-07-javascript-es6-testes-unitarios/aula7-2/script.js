const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   const client = order.order.delivery.deliveryPerson;
//   const person = order.name;
//   const phone = order.phoneNumber;
//   const street = order.address.street;
//   const streetNumber = order.address.number;
//   const apartment = order.address.apartment
//   console.log(`Olá ${client}, entrega para: ${person}, Telefone:${phone}, R.${street}, Nº:${streetNumber}, AP:${apartment}.`)
// };

// customerInfo(order);

const orderModifier = (order) => {
  const buyerName = order.name = 'Luiz Silva';
  const newPayment = order.order.payment = 50;
  const pizzaOrder = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  console.log(`Olá ${buyerName}, o total do seu pedido de ${pizzaOrder[0]}, ${pizzaOrder[1]} e ${drinks} é R$ ${newPayment},00.`);
}

orderModifier(order);