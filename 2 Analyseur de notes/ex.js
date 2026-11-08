let students = [12, 13, 16, 10, 7]

// calculermoyenne()
function calculermoyenne() {
    let moyenne = 0
    students.forEach(student => {
        moyenne = moyenne + student;
    });
    moyenne = moyenne / students.length;
    console.log(moyenne);
}

// findMax();
function findMax() {
    let max = students[0]
    students.forEach(student => {
        if (max < student) {
            max = student
        }
    });
    console.log(max);
}

Compterlesnotes();
function Compterlesnotes() {
    let counter = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i] >= 10) {
            counter++
        }
    }
    console.log(counter)
}

// DeterminerMoyenne()
function DeterminerMoyenne() {
    let moyenne = 0;
    students.forEach(student => {
        moyenne += student
    });
    moyenne = moyenne / students.length
    console.log(moyenne);

    if (moyenne >= 10) {
        console.log("moyenne is greater than 10");
    } else {
        console.log("moyenne is less than 10");

    }
}