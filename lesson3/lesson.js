const orderSum = prompt('Please enter your order total:', '');
const messageSum = 'Your discount is: ';
if (orderSum < 100) {
    alert('There is no discount');
} else if (orderSum < 500) {
    alert(messageSum + orderSum / 100 * 3);
} else if (orderSum < 1000) {
    alert(messageSum + orderSum / 100 * 4);
} else if (orderSum < 2000) {
    alert(messageSum + orderSum / 100 * 5);
} else {
    alert(messageSum + orderSum / 100 * 7);
}