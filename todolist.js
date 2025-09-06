const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const toggleBtn = document.getElementById('toggleBackgroundBtn');

toggleBtn.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = ''; // resets to original
  } else {
    document.body.style.backgroundColor = 'black';
  }
});

function addTask(){
    if (inputbox.value === ''){
        alert("You must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span)

    }
    inputbox.value="";
     saveData();
}
listContainer.addEventListener("click",function(e){
 if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
     saveData();
 }
 else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
     saveData();
 }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showtask();
