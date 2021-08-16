let floor_no;
function showAlert(id) {
  const btn = document.getElementById(id);
  if(btn.innerText === "BLOCK"){
    if (confirm("Are you sure : BLOCK Floor ? ")) {
      alert("FLOOR BLOCKED");
      nameChange(id);
      passValue(id);
    } else {
      alert("NO CHANGES DONE");
    }
  }
  else{
    if (confirm("Are you sure : ENABLE Floor ? ")) {
      alert("FLOOR ENABLED");
      nameChange(id);
      passNull();
    } else {
      alert("NO CHANGES DONE");
    }
  }
    
} 

const passNull = () => {
  localStorage.setItem("floor_no", "false");
}

const passValue = (id) => {
  console.log(id);
  if(id === "undefined"){
    localStorage.setItem("floor_no", "false");
    console.log(localStorage.getItem("floor_no"));
  }

  else if(id === "btn1"){
    localStorage.setItem("floor_no", "1");
    console.log(localStorage.getItem("floor_no"));
  }

  else if(id === "btn2"){
    localStorage.setItem("floor_no", "2");
    console.log(localStorage.getItem("floor_no"));
  }

  else if(id === "btn3"){
    localStorage.setItem("floor_no", "3");
    console.log(localStorage.getItem("floor_no"));
  }

  else if(id === "btn4"){
    localStorage.setItem("floor_no", "4");
    console.log(localStorage.getItem("floor_no"));
  }

  else if(id === "btn5"){
    localStorage.setItem("floor_no", "5");
    console.log(localStorage.getItem("floor_no"));
  }
}

const colorChangeRG = (id) => {
    $(`#${id}`).removeClass("btn btn-danger"); //$("#btn")
    $(`#${id}`).addClass("btn btn-success");       
};

const colorChangeGR = (id) => {
    $(`#${id}`).removeClass("btn btn-success");  
    $(`#${id}`).addClass("btn btn-danger");     
};



const nameChange =  (id) => {
  const btn = document.getElementById(id);
    if(btn.innerText === "BLOCK"){
        btn.innerText = "ENABLE";
        colorChangeRG(id);
    }else{
        btn.innerText= "BLOCK";
        colorChangeGR(id);
    }
};
