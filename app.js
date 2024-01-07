

// let palindrome = document.getElementById("input")
// let flag = true;


// const len = palindrome.length;

// for (let i = 0; i <  len / 2; i++) {
//     if (palindrome[i] !== palindrome[len - i - 1]) {
//         flag = false;
//         break;
//     }
// }
// if (flag) {
//     console.log(`${(palindrome)}: word is  a palindrome`)
// }
// else {
//     console.log(`${(palindrome)}:word is not a palindrome`)
// }




const input = document.querySelector('#input')
const checkBtn  =document.querySelector('button')
const inText= document.querySelector('#inText')

let filterInput;

checkBtn.addEventListener('click', ()=>{
    let reverseInput = filterInput.split("").reverse("").join("");
    inText.style.display = "block"
    if(filterInput != reverseInput){
      return  inText.innerHTML = `No ,<span> ' ${input.value}' <span/> isn't a palindrome`;
    }
    else{
        inText.innerHTML = `Yes ,<span> ' ${input.value}' <span/> is a palindrome`;
    }
})

input.addEventListener("keyup",()=>{
     filterInput =input.value.replace(/[^A-Z0-9]/ig,"");
    if(filterInput){
       return checkBtn.classList.add('active')
    }
    checkBtn.classList.remove('active')    

})