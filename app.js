const block=document.querySelectorAll(".container")

block.forEach((b)=>{
    b.addEventListener("click",()=>{
        
            if (b.classList.contains("active")) {
                b.classList.remove("active");
                
              } else {
                b.classList.add("active");
              }
        
    })
})
