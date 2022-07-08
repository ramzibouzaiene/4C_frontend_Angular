function addNewSKILL(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enlist your skills");

    let SKILLSOb = document.getElementById("SKILLS");
    let SKILLSAddBtnOb = document.getElementById("skillsAddbBtn");

    SKILLSOb.insertBefore(newNode, SKILLSAddBtnOb);
}

function addNewCF(){

    var fieldName = prompt("Field Name:");
    document.getElementById("customField").innerHTML = fieldName;
    // document.getElementById("custitle1").innerHTML = fieldName;

    const button = document.getElementById("custom");
    button.disabled = true;
    // button.disabled = false;

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cusfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute('id','cus1Details');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Details");

    let CSOb = document.getElementById("CF");
    let cusAddBtnOb = document.getElementById("cusAddbBtn");

    CSOb.insertBefore(newNode, cusAddBtnOb);

    // Adding custom section in template
    document.getElementById("customT1").classList.add('active');
}

function addNewWE(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Work Experience");

    let WEOb = document.getElementById("WE");
    let weAddBtnOb = document.getElementById("weAddbBtn");

    WEOb.insertBefore(newNode, weAddBtnOb);
}

function addNewAQ(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Educational Qualification");

    let AQOb = document.getElementById("AQ");
    let aqAddBtnOb = document.getElementById("aqAddbBtn");

    AQOb.insertBefore(newNode, aqAddBtnOb);
}

function addNewCER(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cerfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter Your Certifications");

    let CEROb = document.getElementById("CER");
    let cerAddBtnOb = document.getElementById("cerAddbBtn");

    CEROb.insertBefore(newNode, cerAddBtnOb);
}

function addNewCF2(){

    var fieldName2 = prompt("Field Name:");
    document.getElementById("customField2").innerHTML = fieldName2;
    // document.getElementById("custitle2").innerHTML = fieldName2;

    const button = document.getElementById("custom2");
    button.disabled = true;
    // button.disabled = false;

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cusfield2');
    newNode.classList.add('mt-2');
    newNode.setAttribute('id','cus2Details');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Your Details");

    let CSOb = document.getElementById("CF2");
    let cusAddBtnOb = document.getElementById("cusAddbBtn2");

    CSOb.insertBefore(newNode, cusAddBtnOb);

    // Adding custom section in template
    document.getElementById("customT2").classList.add('active');
}

// generating resume

function generateResume(){

    // Name Field
    let nameField = document.getElementById('nameField').value;
    let nameT = document.getElementById('nameT');
    let nameT2 = document.getElementById('nameT2');
    nameT.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    // Contact Field
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

     // Email Field
     document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

      // Address Field
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

     // Important Links Field
     document.getElementById('linkedT').href = document.getElementById('linkedField').value;
     document.getElementById('gitT').href = document.getElementById('gitField').value;

      // Skills Field
    let skillss = document.getElementsByClassName('skillfield');
    let strskills = "";

    for(let e of skillss)
    {
        strskills = strskills + `<p> ${e.value} </p>`;
    }

    document.getElementById('skillsT').innerHTML = strskills;

    //  Custom Field 1
    // document.getElementById('cusT1').innerHTML = document.getElementById('cus1Details').value;

    //  Custom Field 2
    // document.getElementById('cusT2').innerHTML = document.getElementById('cus2Details').value;

     // Summary Field
    document.getElementById('summaryT').innerHTML = document.getElementById('summaryfield').value;

    // Work Experience Field
    let wes = document.getElementsByClassName('wefield');
    let strwe = "";

    for(let e of wes)
    {
        strwe = strwe + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML = strwe;

    // Academic Qualifications Field
    let aqs = document.getElementsByClassName('aqfield');
    let straq = "";

    for(let e of aqs)
    {
        straq = straq + `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = straq;

    // Certifications Field
    let cers = document.getElementsByClassName('cerfield');
    let strcer = "";

    for(let e of cers)
    {
        strcer = strcer + `<li> ${e.value} </li>`;
    }

    document.getElementById('cerT').innerHTML = strcer;

    // Image Field
    let file = document.getElementById("imgfield").files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function (){
        document.getElementById("imgT").src = reader.result;
    }

    // Toggle Form and template
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

}

// Download resume

window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const template = this.document.getElementById("download-template");

        var opt = {
            margin:       0.5,
            filename:     'resumeGenerator.pdf',
            image:        { type: 'jpeg', quality: 1 },
            // html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

        html2pdf().from(template).set(opt).save();
    })
}