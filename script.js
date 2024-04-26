document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.scroll');

    // Show the button after scrolling down 100vh
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight) {
            button.classList.add('active'); // Show the button
        } else {
            button.classList.remove('active'); // Hide the button
        }
    });
});




let button1 = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');
let button3 = document.querySelector('.btn3');
let button4 = document.querySelector('.btn4');
let button5 = document.querySelector('.btn5');
let button6 = document.querySelector('.btn6');
let button7 = document.querySelector('.btn7');
let button8 = document.querySelector('.btn8');
let infoDiv = document.querySelector('#info');

// Add event listeners to each button
button1.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. G. Viswanathan, Chancellor, VIT (Patron)",
        "Shri. Sankar Viswanathan, Vice-President, VIT (Co-Patron)",
        "Dr. Sekar Viswanathan, Vice-President, VIT (Co-Patron)",
        "Dr. G.V. Selvam , Vice- President, VIT (Co-Patron)",
        "Dr. V. S. Kanchana Bhaaskaran Vice-Chancellor-i/c, VIT (Co-Patron)",
        "Dr. Partha Sharathi Mallick, Pro Vice-Chancellor, VIT (Co-Patron)",
        "Dr. Jayabarathi T, Registrar, VIT (Co-Patron)"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});

button2.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. Sivanantham S., Vellore Institute of Technology, Vellore",
        "Dr. Jasmin Pemeena Priyadarisini M., Vellore Institute of Technology, Vellore"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});


button3.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. Arun M., Vellore Institute of Technology, Vellore",
        " Dr. Karthikeyan B., Vellore Institute of Technology, Vellore",
        "Dr. Sasikumar P., Vellore Institute of Technology, Vellore",
        " Dr. Sujatha R., Vellore Institute of Technology, Vellore"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});


button4.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. Sivanantham S., Vellore Institute of Technology, Vellore",
        "Dr. Jasmin Pemeena Priyadarisini M., Vellore Institute of Technology, Vellore"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});

button5.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. Arun M., Vellore Institute of Technology, Vellore",
        " Dr. Karthikeyan B., Vellore Institute of Technology, Vellore",
        "Dr. Sasikumar P., Vellore Institute of Technology, Vellore",
        " Dr. Sujatha R., Vellore Institute of Technology, Vellore"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});

button6.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. G. Viswanathan, Chancellor, VIT (Patron)",
        "Shri. Sankar Viswanathan, Vice-President, VIT (Co-Patron)",
        "Dr. Sekar Viswanathan, Vice-President, VIT (Co-Patron)",
        "Dr. G.V. Selvam , Vice- President, VIT (Co-Patron)",
        "Dr. V. S. Kanchana Bhaaskaran Vice-Chancellor-i/c, VIT (Co-Patron)",
        "Dr. Partha Sharathi Mallick, Pro Vice-Chancellor, VIT (Co-Patron)",
        "Dr. Jayabarathi T, Registrar, VIT (Co-Patron)"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});

button7.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. Arun M., Vellore Institute of Technology, Vellore",
        " Dr. Karthikeyan B., Vellore Institute of Technology, Vellore",
        "Dr. Sasikumar P., Vellore Institute of Technology, Vellore",
        " Dr. Sujatha R., Vellore Institute of Technology, Vellore"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});


button8.addEventListener('click', function () {
    let ul = document.createElement('ul');
    var data = ["Dr. Sivanantham S., Vellore Institute of Technology, Vellore",
        "Dr. Jasmin Pemeena Priyadarisini M., Vellore Institute of Technology, Vellore"]
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.textContent = data[i];
        ul.appendChild(li);
    }
    infoDiv.innerHTML = '';
    infoDiv.appendChild(ul);
});





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.a4dropbtn')) {
        var dropdowns = document.getElementsByClassName("a4dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }

        }
    }
}