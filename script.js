let age = window.prompt("Enter your age: ");
console.log(`you entered age is: ` + age);
if(age>=18){
    document.getElementById("p").textContent = "nakey em  radu ra puka pooee w3schools lo nerchuko";
     window.alert("Access granted.");
     console.log("You are allowed!")
}
else{
    console.log("you are not eligible to enter this site.");
    window.alert("under age, access restricted.");
}