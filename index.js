let homeScore = document.getElementById("team1")
let guestScore = document.getElementById("team2")
let home = 0
let guest = 0

function home1(){
    home += 1
    homeScore.textContent = home
}

function home2(){
    home += 2
    homeScore.textContent = home
}

function home3(){
    home += 3
    homeScore.textContent = home
}

function guest1(){
    guest += 1
    guestScore.textContent = guest
}

function guest2(){
    guest += 2
    guestScore.textContent = guest
}

function guest3(){
    guest += 3
    guestScore.textContent = guest
}

function reset(){
    home=0
    guest=0
    homeScore.textContent = home
    guestScore.textContent = guest
}


