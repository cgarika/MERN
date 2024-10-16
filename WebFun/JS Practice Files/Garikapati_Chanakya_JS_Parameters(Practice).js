function great(name) {
    function greeting(time) {
        if (name === "Count Dooku") {
            console.log("I'm coming for you, Dooku!");
        } else {
            console.log("Good Day" + " " + name + " " + time);
        }
    }

    greeting("Its Saturday 11:30PM");
}

great("Chanakya");