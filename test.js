const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 212112
    }
}
 
if (bobsCar.info.mileage === 0) {console.log('Bob owns Subaru Impreza and it is brand new!');
} if (bobsCar.info.mileage >= 1 && bobsCar.info.mileage < 1000 ) {
    console.log('Bob owns Subaru Impreza and it is almost new!');
} else if (bobsCar.info.mileage > 1000) {
    console.log('Bob owns Subaru Impreza and it is old!');
} 