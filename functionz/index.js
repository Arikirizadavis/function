
function validateCrediations(email, password){
    const validemail ="arkirizadavis@gmail.com";
    const validpassword =2200705793;
    if(email===validemail && password===validpassword){
        console.log(`login SucceSful`);
    }else {
        console.log(`incorrect password`);
    }
}
    validateCrediations("arkirizadavis@gmail.com",2200705793)