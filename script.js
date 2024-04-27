let count = 1

document.getElementById("add-count").onclick = function(){
    count += 1
    document.getElementById("count-num").innerHTML = count
}
document.getElementById("sub-count").onclick  = function(){
    if( count <= 1){
        document.getElementById("count-num").innerHTML = count
    }
    else{
        count -= 1
        document.getElementById("count-num").innerHTML = count
    }
}