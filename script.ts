// Get refrences to the form and display area

const form= document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement=document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission

form.addEventListener('submit' , (event:Event)=>{
event.preventDefault(); // prevent page reload

// Collect input values
const name=(document.getElementById('name') as HTMLInputElement).value
const email=(document.getElementById('email') as HTMLInputElement).value
const phone=(document.getElementById('Phone') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const experience=(document.getElementById('experience') as HTMLInputElement).value
const skills=(document.getElementById('skills') as HTMLInputElement).value


// Generate a resume content dynamically

const resumeHTML=`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name} </p>
<p><b>E-mail:</b>${email} </p>
<p><b>Phone:</b>${phone} </p>


<h3>Education</h2>
<p>${education}</p>

<h3>Experience</h2>
<p>${experience}</p>

<h3>Skills</h2>
<p>${skills}</p>
`;

// Display the generted resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML
}else{
    console.error('The resume display element is missing.')
}



})