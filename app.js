'use strict';
let form = document.getElementById('form');
const table = document.getElementById('table');
// consttable = document.createElement('tbody');
// table.appendChild(tbody);
// let total=0;
function Student(email, number, tuition) {
    this.email = email;
    this.number = number;
    this.tuition = tuition;
    this.name = email.split('@')[0];
    Student.all.push(this);
    localStorage.setItem('student', JSON.stringify(Student.all))
}
function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}


Student.all = [];
Student.prototype.renderHead = function () {
    const trow = document.createElement('tr');
    table.appendChild(trow);
    const th1 = document.createElement('th');
    table.appendChild(th1);
    th1.textContent = "ID"

    const th2 = document.createElement('th');
    table.appendChild(th2);
    th2.textContent = "Name"

    const th3 = document.createElement('th');
    table.appendChild(th3);
    th3.textContent = "Email"

    const th4 = document.createElement('th');
    table.appendChild(th4);
    th4.textContent = "Mobile"

    const th5 = document.createElement('th');
    table.appendChild(th5);
    th5.textContent = "Age";

    const th6 = document.createElement('th');
    table.appendChild(th6);
    th6.textContent = "Tuition"

}
Student.prototype.renderHead();
function getFromLS() {
    if (localStorage.length > 0) {
        Student.all = JSON.parse(localStorage.getItem('student'));
        Student.prototype.render();
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const number = target.number.value;
    const tuition = target.tuition.value;
    new Student(email, number, tuition);

    Student.prototype.render();

}
Student.prototype.render = function () {
    
    
    for (let i = 0; i < Student.all.length; i++) {
        const trow = document.createElement('tr');
        table.appendChild(trow);

        const td1 = document.createElement('td');
        trow.appendChild(td1);
        td1.textContent=i+1;
        
        const td2 = document.createElement('td');
        trow.appendChild(td2);
        td2.textContent=Student.all[i].name;

        const td3 = document.createElement('td');
        trow.appendChild(td3);
        td3.textContent=Student.all[i].email;

        const td4 = document.createElement('td');
        trow.appendChild(td4);
        td4.textContent=Student.all[i].number;

        const td5 = document.createElement('td');
        trow.appendChild(td5);
        td5.textContent=rand(18,24);

        const td6 = document.createElement('td');
        trow.appendChild(td6);
        td6.textContent=Student.all[i].tuition;

        // let total = total+ Student.all[i].tuition;
    }

}
// Student.prototype.renderFoot = function(){
//     const trow=document.createElement('tr');
//     table.appendChild(trow);
//     trow.textContent= "Total: "+total ;
// }
// Student.prototype.renderFoot();




form.addEventListener('submit', handleSubmit);
getFromLS();
