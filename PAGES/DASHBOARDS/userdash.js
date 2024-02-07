// const homebtn=document.querySelector("#home");
const home=document.querySelector(".body-container");

// homebtn.addEventListener("click",()=>{
//     if (home.style.display=="none") {
//         home.style.display="block";
//     }
//     else
//     {
//         home.style.display="none";
//     }
// })

document.querySelector('.list-link').addEventListener('click', () => {
    home.innerHTML = `
    <h2>WELCOME</h2>
    <p>The following is the list of discription that shows how to use menu.</p>
    <ul>
        <li class="home" id="home">Home</li>
        <ld>Allow user to view homepage.</ld>
        <li>Details</li>
        <ld>Allow user to add the information about his/herself </ld>
        <li>Apply</li>
        <ld>Enables user to start application of the job.</ld>
        <li>Feedback</li>
        <ld>Shows the results of the application</ld>
        <li>Contacts</li>
        <ld>Provides the detailed information about the contacts of the customer or the user.</ld>
        <li>New</li>
        <ld>Allow user to view the Announcements or the news concerning with jobs.</ld>
    </ul>
    `
})
document.querySelector('.list-link1').addEventListener('click', () => {
    home.innerHTML = `
    <h2>WELCOME</h2>
    <p>The following is the list of discription that shows how to use menu.</p>
    `
})