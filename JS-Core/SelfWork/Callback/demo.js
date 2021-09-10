const event = {
    name1: 'birthday',
    guestList: ['Andrew', 'a', 'b'],
    printGuestList: function () {
        this.guestList.forEach((arr) => {
            console.log(this);
        });
    },
    printGuestList1: function () {
        this.guestList.forEach((arr) => {
            console.log(this);
        });
    },
};
event.printGuestList();
event.printGuestList1();