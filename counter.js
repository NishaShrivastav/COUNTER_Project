const endDate="14 March 2024 12:00 PM"

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");
function clock()
{
      const end=new Date(endDate);
      const now=new Date();
      const diff=(end-now)/1000;

      if(diff<0) return;
      // console.log(diff)
      // convert miliseconds into hours
      inputs[0].value=Math.floor(diff/3600/24);
      // convert miliseconds into days
      inputs[1].value=Math.floor((diff/3600)%24);
      // convert miliseconds into minutes
      inputs[2].value=Math.floor(diff/60)%60;
      // convert miliseconds into seconds
      inputs[3].value=Math.floor(diff)%60;


}
clock();

// for run as clock we use set intervals

setInterval( ()=> {
      clock();
},1000)

setInterval( ()=>{
      
})