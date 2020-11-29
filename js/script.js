function gallery(image) {
    var expandImage = document.getElementById("expandedImage");
    var imageText = document.getElementById("imageText");
    expandImage.src = image.src;
    imageText.innerHTML = image.alt;
    expandImage.parentElement.style.display = "block";
}

function zoom(image) {
    image.parentElement.style.display = "none";
}

var quotes = ['U laži su kratke noge.', 'Um caruje, snag klade valja.', 'Vuk dlaku menja, ali ćud nikada.', 'Bez muke nema nauke.', 'Gvožđe se kuje dok je vruće.'];
var counter = 0;

function displayQuote() {
    if (counter >= quotes.length)
        counter = 0;
    return quotes[counter++];
}

setInterval(function () {
    document.getElementById('quote').innerText = displayQuote();
}, 10000);

var data = {
    ['pork']: {"price": "900", "text": 'The price of pork is 900 dinars.'},
    ['lamb']: {"price": "1200", "text": 'The price of lamb is 1200 dinars.'},
    ['veal']: {"price": "1500", "text": 'The price of veal is 1500 dinars.'},
    ['barbecue']: {"price": "750", "text": 'The price of barbecue is 750 dinars.'},
};

function changeType() {
    var type = document.getElementById('type').value;

    if (type == '') {
        document.getElementById('price').innerText = '';
    } else {
        document.getElementById('price').innerText = data[type].text;
    }
}

function order() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var type = document.getElementById('type').value;
    var quantity = document.getElementById('quantity').value;
    var note = document.getElementById('note').value;

    if (firstName == "") {
        document.getElementById("firstName").style.borderColor = "red";
    } else {
        document.getElementById("firstName").style.removeProperty('border');
    }

    if (lastName == "") {
        document.getElementById("lastName").style.borderColor = "red";
    } else {
        document.getElementById("lastName").style.removeProperty('border');
    }

    if (phone == "") {
        document.getElementById("phone").style.borderColor = "red";
    } else {
        document.getElementById("phone").style.removeProperty('border');
    }

    if (address == "") {
        document.getElementById("address").style.borderColor = "red";
    } else {
        document.getElementById("address").style.removeProperty('border');
    }

    if (type == "") {
        document.getElementById("type").style.borderColor = "red";
    } else {
        document.getElementById("type").style.removeProperty('border');
    }

    if (quantity.value == undefined || quantity.value == "" || parseInt(quantity.value) < 1 || parseInt(quantity.value) > 50) {
        document.getElementById("quantity").style.borderColor = "red";
    } else {
        document.getElementById("quantity").style.removeProperty('border');
    }

    if (firstName != "" && lastName != "" && phone != "" && address != "" && type != "" && parseInt(quantity) >= 1 && parseInt(quantity) < 51) {
        var text = 'You have ordered, your account is ' + (parseInt(quantity) * data[type].price) + ' dinars!';
        alert(text);
        location.reload();
    }
}

var seconds = 1;

function displayTime() {
    seconds++;
    if (seconds >= 10) {
        clearInterval(timer);
    }
    return seconds;
}

var timer = setInterval(function () {
    document.getElementById('timer').innerText = displayTime() + ' seconds';
}, 1000);


var lastNumber = 1;

function randomNumbers() {
    var numbers = [];
    while (numbers.length < 16) {
        var broj = Math.floor((Math.random() * 16) + 1);
        if (!numbers.includes(broj)) {
            numbers.push(broj);
        }
    }

    return numbers;
}

function setNumbers() {
    var numbers = randomNumbers();

    document.getElementsByTagName("td")[0].innerText = numbers[0];
    document.getElementsByTagName("td")[1].innerText = numbers[1];
    document.getElementsByTagName("td")[2].innerText = numbers[2];
    document.getElementsByTagName("td")[3].innerText = numbers[3];
    document.getElementsByTagName("td")[4].innerText = numbers[4];
    document.getElementsByTagName("td")[5].innerText = numbers[5];
    document.getElementsByTagName("td")[6].innerText = numbers[6];
    document.getElementsByTagName("td")[7].innerText = numbers[7];
    document.getElementsByTagName("td")[8].innerText = numbers[8];
    document.getElementsByTagName("td")[9].innerText = numbers[9];
    document.getElementsByTagName("td")[10].innerText = numbers[10];
    document.getElementsByTagName("td")[11].innerText = numbers[11];
    document.getElementsByTagName("td")[12].innerText = numbers[12];
    document.getElementsByTagName("td")[13].innerText = numbers[13];
    document.getElementsByTagName("td")[14].innerText = numbers[14];
    document.getElementsByTagName("td")[15].innerText = numbers[15];
}

function numbers(number) {
    if (seconds < 10) {
        var currentNumber = parseInt(number.innerText);

        if (lastNumber == currentNumber) {
            number.innerText = ':)';
            lastNumber++;
        }

        if (lastNumber == 17) {
            alert('Congratulations you won!');
        }
    } else {
        alert('Your time is up, please start the game again!');
    }
}