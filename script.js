

let portfolioData;

// LOAD JSON

fetch("portfolio.json")
.then(response => response.json())
.then(data => {

    portfolioData = data;

    loadPortfolio();

    startTyping();

    startCounters();

});

// ====================
// LOAD CONTENT
// ====================

function loadPortfolio(){

document.getElementById("logoName").innerText =
portfolioData.name;

document.getElementById("heroGrade").innerText =
portfolioData.grade + " | " +
portfolioData.school;

document.getElementById("heroAbout").innerText =
portfolioData.about;


// ABOUT

document.getElementById("aboutContent").innerHTML = `

<h3>${portfolioData.name}</h3>

<p><strong>DOB:</strong>
${portfolioData.personal.dob}</p>

<p><strong>City:</strong>
${portfolioData.personal.city}</p>

<p><strong>Career Goal:</strong>
${portfolioData.personal.careerGoal}</p>

<p>${portfolioData.about}</p>

`;


// ACADEMICS

let academicHTML = "";

portfolioData.academics.forEach(item => {

academicHTML += `

<tr>
<td>${item.subject}</td>
<td>${item.grade}</td>
</tr>

`;

});

document.getElementById("academicTable")
.innerHTML = academicHTML;


// SKILLS

let skillsHTML = "";

portfolioData.skills.forEach(skill => {

skillsHTML += `

<div class="skill">

<p>${skill.name}</p>

<div class="bar">

<div class="fill"
style="width:${skill.level}%">
</div>

</div>

</div>

`;

});

document.getElementById("skillsContainer")
.innerHTML = skillsHTML;


// TIMELINE

let timelineHTML = "";

portfolioData.timeline.forEach(item => {

timelineHTML += `

<div class="timeline-item">

${item}

</div>

`;

});

document.getElementById("timelineContainer")
.innerHTML = timelineHTML;


// PROJECTS

let projectHTML = "";

portfolioData.projects.forEach(project => {

projectHTML += `

<div class="card">

<img src="${project.image}">

<h3>${project.title}</h3>

<p>${project.description}</p>

</div>

`;

});

document.getElementById("projectContainer")
.innerHTML = projectHTML;


// CERTIFICATES

let certificateHTML = "";

portfolioData.certificates.forEach(certificate => {

certificateHTML += `

<img src="${certificate}">

`;

});

document.getElementById("certificateContainer")
.innerHTML = certificateHTML;

}


// ====================
// TYPING EFFECT
// ====================

function startTyping(){

const text =
portfolioData.name +
" | " +
portfolioData.title;

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing")
.innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,70);

}

}

typeWriter();

}


// ====================
// COUNTERS
// ====================

function startCounters(){

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const target =
+counter.getAttribute("data-target");

let count = 0;

const updateCounter = () => {

if(count < target){

count += Math.ceil(target/100);

counter.innerText = count;

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

}


// ====================
// DARK MODE
// ====================

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeToggle.innerHTML =
document.body.classList.contains("light")
? "☀️"
: "🌙";

});


// ====================
// HAMBURGER
// ====================

const hamburger =
document.querySelector(".hamburger");

const menu =
document.querySelector(".menu");

hamburger.addEventListener("click",()=>{

menu.classList.toggle("show");

});


// ====================
// FORM VALIDATION
// ====================

const form =
document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("error")
.innerHTML =
"✅ Message Sent Successfully";

});


// ====================
// FOOTER YEAR
// ====================

document.querySelector("footer p")
.innerHTML =
`© ${new Date().getFullYear()} GEMMA Student Portfolio`;