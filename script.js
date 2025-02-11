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

function addAppt(event) {
    event.preventDefault()
    var userName = document.getElementById('userName').value
    var userEmail = document.getElementById('userEmail').value
    var userNumber = document.getElementById('userNumber').value
    var apptDate = document.getElementById('apptDate').value
    var apptTime = document.getElementById('apptTime') .value

    if(userName && userEmail && userNumber && apptDate && apptTime){

        fetch('http://localhost:3500/submit',
            {
                method:"POST",
                body:JSON.stringify({
                    userName,
                    userEmail,
                    userNumber,
                    apptDate,
                    apptTime
                }),
                headers:{
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }
        ).then((response)=>{
            response.json()
            alert('Your appointment had been successfully booked !!!')
            window.location.reload()
        })
        }
}

function viewAppt(){
    fetch('http://localhost:3500/get')
        .then(res => res.json())
        .then(res => res.map(user => {

            const {_id, userName, userEmail, userNumber, apptDate, apptTime} = user
            const div = document.createElement('div')

            div.setAttribute('class','appointmentStatus')
            div.innerHTML = ` <img src="./images/doctor-1.png" alt="">
                        <figcaption>
                            <h4>${userName}</h4>
                            <p>
                                <span>
                                    <i class="fa-brands fa-mailchimp"></i> ${userEmail}
                                </span>
                                <span>
                                    <i class="fa-solid fa-square-phone"></i> ${userNumber}
                                </span>
                            </p>
                            <p>
                                <span>
                                    <i class="fa-regular fa-calendar-days"></i> ${apptDate}
                                </span>
                                <span>
                                    <i class="fa-regular fa-clock"></i> ${apptTime}
                                </span>
                            </p>
                        </figcaption>
        
                        <span class="cancel" onclick="cancelAppt('${_id}')">
                            Cancel
                        </span>`

            viewStatus.appendChild(div)

        }))
}
viewAppt()
    
function cancelAppt (id) {
    fetch(`http://localhost:3500/delete/${id}`)
    .then(res => {
        if(res.ok){
        alert('Your appointment deleted sucessfully')
        window.location.reload()
        }
    })
}


function postComment() {
    let div = document.createElement('div')
    let review = document.getElementById('review')
    let userText = document.getElementById('userText').value
    let userName = document.getElementById('userName').value
    
    div.setAttribute('id','reviewPanel')
    div.innerHTML = `<figure>
                    <img class="userProfile" src="https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=100" alt="">
                </figure>

                <aside>
                    <h3>
                        ${userName}
                    </h3>
                    <span>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                </aside>
                
                <i class="fa-solid fa-xmark" onclick="delCom(event)"></i>

                <article>
                    <p>
                        ${userText}
                    </p>
                </article>`
                review.appendChild(div)
                userText = ''
}

function delCom (event) {
    event.target.parentElement.remove()
}