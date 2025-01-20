
let showList = document.querySelector('.showList i')
let navOpen = document.querySelector('.navList')

showList.addEventListener('click',() => {
    navOpen.classList.toggle('navListActive')
    showList.classList.toggle('fa-xmark')
})

let selectOpp = () => {
    navOpen.classList.remove('navListActive')
    showList.classList.remove('fa-xmark')
}

window.onscroll = ()=>{
    navOpen.classList.remove('navListActive')
    showList.classList.remove('fa-xmark')
}

let clickStatus = document.querySelector('.status')
let viewStatus = document.querySelector('#viewStatus')
let hideStatus = document.querySelector('#viewStatus h2 i')

    clickStatus.addEventListener('click', ()=>{
        viewStatus.classList.add('viewStatusActive')
    })

    hideStatus.addEventListener('click', ()=>{
        viewStatus.classList.remove('viewStatusActive')
    })

    let div = document.createElement('div')
    let userName = document.getElementById('userName')
    let userEmail = document.getElementById('userEmail')
    let userNumber = document.getElementById('userName')
    let apptDate = document.getElementById('apptDate')
    let apptTime = document.getElementById('apptTime')

    // if(userName&userEmail&userNumber&apptDate&apptDate)
function addAppt() {
    div.setAttribute('class','appointmentStatus')
    div.innerHTML = ` <img src="./images/doctor-1.png" alt="">

                <figcaption>
                    <h4>${userName.value}</h4>
                    <p>
                        <span>
                            <i class="fa-brands fa-mailchimp"></i>
                            ${userEmail.value}
                        </span>
                        <span>
                            <i class="fa-solid fa-square-phone"></i>
                            ${userNumber.value}
                        </span>
                    </p>
                    <p>
                        <span>
                            <i class="fa-regular fa-calendar-days"></i>
                            ${apptDate.value}
                        </span>
                        <span>
                            <i class="fa-regular fa-clock"></i>
                            ${apptTime.value}
                        </span>
                    </p>
                </figcaption>

                <span class="cancel" onclick="cancelAppt(event)">
                    Cancel
                </span>`
    
    viewStatus.appendChild(div)

    userName.value = ''
    userEmail.value = ''
    userNumber.value = ''
    apptDate.value = ''
    apptTime.value = ''

}
    
function cancelAppt (event) {
    event.target.parentElement.remove()
    // console.log(event.target.parentElement.remove())
}
