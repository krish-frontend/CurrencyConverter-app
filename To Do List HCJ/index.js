
///user input
function addtask(){
    const taskInput= document.getElementById("taskinput");
    const addText= taskInput.value.trim();

    if (addText==""){
        alert("Please Add Task");
        return
    }
        
    const tasklist=document.getElementById("tasklist")
    const additem=document.createElement("li")

    //text span
    
    const taskspan=document.createElement('span');
    taskspan.textContent=addText
    

    //complete btn
    const completebutton=document.createElement('button')
    completebutton.innerHTML="✔";
    completebutton.className="complete-btn";
    completebutton.onclick=()=>{
        taskspan.classList.toggle("completed")
    }

    //remove button
    const removebutton=document.createElement('button')
    removebutton.textContent='remove';
    removebutton.className='remove-btn';
    removebutton.onclick=()=>{
        tasklist.removeChild(additem);
    }

    //append everything 
    additem.appendChild(completebutton)
    additem.appendChild(taskspan)
    additem.appendChild(removebutton)

    tasklist.appendChild(additem)

    taskInput.value="";

    }


