var boneco =
document.getElementById("boneco");
var block =
document.getElementById("block");
function jump(){
    if(boneco.classList !="animate"){
    boneco.classList.add("animate");
    }
    setTimeout(() => {
        boneco.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(() => {
    var bonecotop =
    parseInt(window.getComputedStyle(boneco).getPropertyValue("top"));
    var blockleft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<30 && blockleft>0 && bonecotop>=200){
        block.style.animation="none";
        block.style.display="none";
        alert("voce perdeu");
    }
}, 10);