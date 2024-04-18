
function getLeastNumber(str,k){
    return str.split('').sort((a,b)=>a-b).splice(0,k)
}