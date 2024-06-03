
function isFriend(){
    var yeah = document.querySelector("h5")

    var add = document.querySelector(".add")

    add.addEventListener("click", function(){
        yeah.innerHTML = "Friends <br> Congratulation now you are friend 😍!"
        yeah.style.color = "Green"
})
}



function noFriend (){
    var no = document.querySelector("h5")

    var add = document.querySelector(".rem")

    add.addEventListener("click", function(){
    no.innerHTML = "Unfriend!! <br> you are no longer her friend 🥺!"
    no.style.color = "red"
})
}




function myfriend(){
    isFriend();
    noFriend();
}

myfriend()