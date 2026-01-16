const my_info={
    name:"Bishal Adhikari",
    address:"ktm",
    is_verifyAccount:true,
    age:60,
    passwordVerify: function(password){
        if(password==='123'){
            return "Correct !"
        }
        else{
            return "Incorrect !"
        }
    },
    emailverify:function(email){
        if(email=== 'abs@gmail.com'){
            return"Email verify"
        }
        else{
            return "please verify your email !"
        }
    },
}
    console.log(my_info.passwordVerify('222'));