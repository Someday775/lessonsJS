let total = 15;
while (total > 0) {
    const amount = prompt('Enter the amount of containers:', '');
    if (total < amount) {
        alert('There are not enough containers');
        continue;
    } 
    total -= amount;
}
alert('All containers are used. Thank you!');