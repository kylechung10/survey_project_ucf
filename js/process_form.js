//Survey JS
function validateData(){
    var input1 = false;
    var input2 = false;
    var input3 = false;
    var input4 = false;
    var input5 = false;

//First name checker

var user10 = document.getElementById("fname");
user10.addEventListener("blur", valid1);

function valid1(){
    var box1 = document.getElementById('box1');
    var check1 = box1.getElementsByTagName('span');
    //var fnameMatch = /^(([A-Z]'[A-Z])|[A-Z])[a-z]+$/;
    if(this.value.match(/^(([A-Z]'[A-Z])|[A-Z])[a-z]+$/)) {
        if(check1[0].firstChild.nodeValue == null) {
            check1[0].appendChild(document.createTextNode('Valid!'));
            input1 = true;
        } else {
            check1[0].firstChild.nodeValue = "Valid!";
            input1 = true;
        }
    } else {
        if(check1[0].firstChild.nodeValue == null) {
            check1[0].appendChild(document.createTextNode('Invalid input'));
            input1 = false;
        } else {
            check1[0].firstChild.nodeValue = "Invalid input";
            input1 = false;
        }
    }
}
//First name hints
//document.form1.fname1.onfocus = function()

user10.addEventListener("focusin", fhint);
var box1 = document.getElementById('box1');
var hint1 = box1.getElementsByTagName('span');

function fhint(){
    hint1[0].firstChild.nodeValue = "Must be only letters!";
}


//Last name checker

var user20 = document.getElementById("lname");
user20.addEventListener("blur", valid2);

function valid2(){
    var box2 = document.getElementById('box2');
    var check2 = box2.getElementsByTagName('span');
    //var fnameMatch = /^(([A-Z]'[A-Z])|[A-Z])[a-z]+$/;
    if(this.value.match(/^(([A-Z]'[A-Z])|[A-Z])[a-z]+$/)) {
        if(check2[0].firstChild.nodeValue == null) {
            check2[0].appendChild(document.createTextNode('Valid!'));
            input2 = true;
        } else {
            check2[0].firstChild.nodeValue = "Valid!";
            input2 = true;
        }
    } else {
        if(check2[0].firstChild.nodeValue == null) {
            check2[0].appendChild(document.createTextNode('Invalid input'));
            input2 = false;
        } else {
            check2[0].firstChild.nodeValue = "Invalid input";
            input2 = false;
        }
    }
}

//Last name hints
user20.addEventListener("focusin", lhint);
var box2 = document.getElementById('box2');
var hint2 = box2.getElementsByTagName('span');

function lhint(){
    hint2[0].firstChild.nodeValue = "Must be only letters!";
}

//Email checker

var user30 = document.getElementById("email");
user30.addEventListener("blur", emailvalid);

function emailvalid(){
    var box3 = document.getElementById('box3');
    var check3 = box3.getElementsByTagName('span');
    if(this.value.match(/^\w*\d*@\w*\d*.com$/)) {
        if(check3[0].firstChild.nodeValue == null) {
            check3[0].appendChild(document.createTextNode('Valid!'));
            input3 = true;
        } else {
            check3[0].firstChild.nodeValue = "Valid!";
            input3 = true;
        }
    } else {
        if(check3[0].firstChild.nodeValue == null) {
            check3[0].appendChild(document.createTextNode('Invalid E-Mail'));
            input3 = false;
        } else {
            check3[0].firstChild.nodeValue = "Invalid E-mail";
            input3 = false;
        }
    }
}

//Email hints
user30.addEventListener('focusin', emailhint);
var box3 = document.getElementById('box3');
var hint3 = box3.getElementsByTagName('span');

function emailhint(){
    hint3[0].firstChild.nodeValue = "Must be a valid E-mail!";
}


//Phone number checker

var user40 = document.getElementById("pnum");
user40.addEventListener("blur", pnumvalid);

function pnumvalid(){
    var box4 = document.getElementById('box4');
    var check4 = box4.getElementsByTagName('span');
    if(this.value.match(/^\d\d\d\-\d\d\d-\d\d\d\d$/)) {
        if(check4[0].firstChild.nodeValue == null) {
            check4[0].appendChild(document.createTextNode('Valid!'));
            input4 = true;
        } else {
            check4[0].firstChild.nodeValue = "Valid!";
            input4 = true;
        }
    } else {
        if(check4[0].firstChild.nodeValue == null) {
            check4[0].appendChild(document.createTextNode('Invalid phone number'));
            input4 = false;
        } else {
            check4[0].firstChild.nodeValue = "Invalid phone number";
            input4 = false;
        }
    }
}

//Phone number hints

user40.addEventListener("focusin", pnumhint);
var box4 = document.getElementById('box4');
var hint4 = box4.getElementsByTagName('span');

function pnumhint() {
    hint4[0].firstChild.nodeValue = "Must be XXX-XXX-XXXX!";
}

//Address Check

var user50 = document.getElementById("addy");
user50.addEventListener("blur", addyvalid);

function addyvalid(){
    var box5 = document.getElementById('box5');
    var check5 = box5.getElementsByTagName('span');
    if(this.value.match(/^((http:\/\/+[a-z.]+\/~[a-z]{2}[0-9]{6}$)|[a-z]{8}$)/)) {
        if(check5[0].firstChild.nodeValue == null) {
            check5[0].appendChild(document.createTextNode('Valid!'));
            input5 = true;
        } else {
            check5[0].firstChild.nodeValue = "Valid!";
            input5 = true;
        }
    } else {
        if(check5[0].firstChild.nodeValue == null) {
            check5[0].appendChild(document.createTextNode('Invalid student address'));
            input5 = false;
        } else {
            check5[0].firstChild.nodeValue = "Invalid student address";
            input5 = false;
        }
    }
}

//Address hints
user50.addEventListener("focusin", addyhint);
var box5 = document.getElementById('box5');
var hint5 = box5.getElementsByTagName('span');

function addyhint(){
    hint5[0].firstChild.nodeValue = "http://students.cah.ucf.edu/~STUDENT_ID";

}

} //****************/End of validateData()**********************

function processData() {

    brTag = document.createElement("br");
    var result1 = document.getElementById("results");
    //Gathering all the user data
    var fnamevalue = document.getElementById("fname").value;
    var lnamevalue = document.getElementById('lname').value;
    var emailvalue = document.getElementById('email').value;
    var pnumvalue = document.getElementById('pnum').value;
    var addyvalue = document.getElementById('addy').value;

    result1.append("First name: " + fnamevalue);
    result1.append(brTag);
    result1.append("Last name:" + lnamevalue);
    result1.append(brTag.cloneNode());
    result1.append("E-mail: " + emailvalue);
    result1.append(brTag.cloneNode());
    result1.append("Phone Number: " + pnumvalue);
    result1.append(brTag.cloneNode());
    result1.append("Student Address: " + addyvalue);
    result1.append(brTag.cloneNode());
    result1.append(brTag.cloneNode());


    
    //var image1 = document.createElement('img');
    //image1.src = 'img/mustang.jpg';
    //document.getElementById('results').append(image1);

}

function qfunction (){
    var imagesrc1;
    var chooseme;
    var answer100;
    var imglink;

    document.getElementById("results").style.display = "block";

    //run processData
    processData();

    var section1 = document.getElementsByName("section1");
    var section2 = document.getElementsByName("section2");
    if(section1[0].checked){
        if(section2[0].checked){
            //alert("this is action and classical");
            //var image1 = document.createElement('img');
            imagesrc1 = 'img/mustang.jpg';
            chooseme = "You are a 1967 Mustang GT500!";
            answer100 = "You chose Action & Classical";
            imglink = "https://students.cah.ucf.edu/~ky966185/dig3716c/assignment2/img/mustang.jpg"
            document.getElementById("submitbutton").disabled = true;
            //document.getElementById('results').append(image1);
        } else{
            //alert("this is action and rock");
            imagesrc1 = 'img/lambo.jpg';
            chooseme = "You are a Lamborghini Sesto Elemento!";
            answer100 = "You chose Action & Rock!";
            imglink = "https://students.cah.ucf.edu/~ky966185/dig3716c/assignment2/img/lambo.jpg"
            document.getElementById("submitbutton").disabled = true;
        }
    } else {
        if(section2[0].checked){
            //alert("this is scifi and classical");
            imagesrc1 = 'img/delorean.jpg';
            chooseme = "You are a Delorean!";
            answer100 = "You chose Sci-Fi & Classical";
            imglink = "https://students.cah.ucf.edu/~ky966185/dig3716c/assignment2/img/delorean.jpg"
            document.getElementById("submitbutton").disabled = true;
        } else {
            //alert("this is scifi and rock");
            imagesrc1 = 'img/cybertruck.jpg';
            chooseme = "You are a Tesla Cybertruck!";
            answer100 = "You chose Sci-Fi & Rock";
            imglink = "https://students.cah.ucf.edu/~ky966185/dig3716c/assignment2/img/cybertruck.jpg"
            document.getElementById("submitbutton").disabled = true;
        }
    }

    //Creating elements for the results page
    var image1 = document.createElement('img');
    var brTag = document.createElement('br');

    var aelem = document.createElement('a');
    var alink = document.createTextNode('Image Link');
    aelem.appendChild(alink);
    aelem.title = "Image Link";
    aelem.href = imglink;

    //setting the image src based on answer
    image1.src = imagesrc1;
    //Appending image and results
    document.getElementById('results').append(answer100);
    document.getElementById('results').append(image1);
    document.getElementById('results').append(chooseme);
    document.getElementById('results').append(brTag);
    document.getElementById('results').append(brTag.cloneNode());
    document.getElementById('results').append(aelem);
}

//Function for anonymous button to display/hide
function displayForm() {
    var anynom = document.getElementById("thecheck");
    var theForm = document.getElementById("form0");
    if (anynom.checked == true){
      theForm.style.display = "none";
    } else {
       theForm.style.display = "block";
    }
  }

//Running the form actions with the button
function runthis(){
    document.getElementById("results").style.display = "none";
    validateData();
    document.getElementById("thecheck").addEventListener("click", displayForm);
    document.getElementById("submitbutton").addEventListener("click", qfunction);
}

window.onload = runthis;