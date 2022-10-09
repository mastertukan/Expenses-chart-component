function currentDay() {
    const d = new Date();
    let day = d.getDay() + 7;

    console.log(day);
    let identifier = "day-" + day;

    document.getElementById(identifier).style.backgroundColor = "var(--cyan)";

}

function changeColorOnHover(index) {
    const d = new Date();
    let day = d.getDay();

    let identifier = "day-" + index;

    if (index == day) {
        document.getElementById(identifier).style.backgroundColor = "hsl(187, 49%, 80%)";
    } else {
        document.getElementById(identifier).style.backgroundColor = "hsl(9, 100%, 85%)";
    }
}

function changeColorOnBlur(index) {
    const d = new Date();
    let day = d.getDay();

    let identifier = "day-" + index;

    if (index == day) {
        document.getElementById(identifier).style.backgroundColor = "var(--cyan)";
    } else {
        document.getElementById(identifier).style.backgroundColor = "var(--soft-red)";
    }
}

function displayIncome(index) {
    let identifier = "income-info-" + index;

    document.getElementById(identifier).style.display = "flex";
}

function hideIncome(index) {
    let identifier = "income-info-" + index;

    document.getElementById(identifier).style.display = "none";
}