let dropBtn = document.querySelector('.dropbtn');
let dropContent = document.querySelector('.dropdown-content');
dropBtn.addEventListener('click',()=>{
   if(dropContent.style.display===""){
      dropContent.style.display="block";
   } else {
      dropContent.style.display="";
   }
})