let hint = document.querySelector(".hint");
let ans = document.querySelector(".Submit");
let hint_box = document.querySelector(".hint-box");
let message_box = document.querySelector(".message-box");
let fault_box = document.querySelector(".fault-box");
let sorry = document.querySelector(".sry");
let okay = document.querySelector(".got");
let day = document.querySelector(".date");
let love_btn = document.querySelector(".love");
let love_box = document.querySelector(".love-box")

hint.addEventListener("click", ()=>{
    fault_box.style.display="none"
    message_box.style.display="none"
    hint_box.style.display="block",okay.addEventListener("click", ()=>{
        hint_box.style.display="none"
    })
});

let correct_date = ['2','0','2','0','-','1','2','-','0','9']

ans.addEventListener("click", ()=>{

    let checkdate = day.value.split('');
    console.log(checkdate);
    let noChange = false;

        for(let i=0; i< correct_date.length; i++){
            console.log(correct_date[i])
            if (correct_date[i] == checkdate[i]) {
          
                fault_box.style.display="none"
                hint_box.style.display="none"
                message_box.style.display="block",
                love_btn.addEventListener("click", ()=>{
                    message_box.style.display="none",
                    love_box.style.display="flex";
                })

            }
            else{
                fault_box.style.display="block",
                message_box.style.display="none",
                hint_box.style.display="none";
                sorry.addEventListener("click",()=>{
                    fault_box.style.display="none";
                    
                })
            }
    }
   
  
})

