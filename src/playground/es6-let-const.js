//var name="sachin";
//console.log('NAme is',name);
const multiplier = {
    myarr: [1,2,3,4,5,6,7,8,9,10],
    multiplyby : 2,
    multiply(){
        return this.myarr.map( (myarr) => myarr*this.multiplyby );
    }
}
console.log(multiplier.multiply());