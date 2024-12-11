const user = {
    username: "mansi",
    logincount: 8,
    signedIn: true,

    getuserdetails: function(){
       // console.log(" user details from database");
    //console.log(`username:${this.username}`);
    console.log(this);
}
}
//console.log(user.username);
//console.log(user.getuserdetails());
// console.log(this);
function User(username, logincount,isloggedIn)
{
   this.username=username;
   this.logincount=logincount;
   this.isloggedIn=isloggedIn
this.greeting=function(){
    console.log(`welcome ${this.username}`);
}
   return this//newobj create 2. value pass constructor 3 this key ma add 4
}
const userone = new User("mansi",15,true)
const usertwo = new User("kaushal",90,false) 
console.log(userone.constructor);
//console.log(usertwo);
// const promiseone=new promise()
// const date =new Date()