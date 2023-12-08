var inputbox= document.getElementById("inputbox")
var result= document.getElementById("result")
var gusscount = document.getElementById("gusscount")
var count = 3
var randomnumber = Math.floor(Math.random()*10)+1
if(randomnumber>5){
    randomnumber = randomnumber-5
}
//event handler
function check(){
    if(inputbox.value == randomnumber){
        result.textContent = "you are correct"
    }
    else{
        count = count-1
        if(count==0){
            alert("you lost,generated random number is: "+randomnumber)
        }
        result.textContent = "you are wrong"
        gusscount.textContent = "Avaliable guss:"+count
    }
}