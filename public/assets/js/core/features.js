function showAlert(id) {
  const btn = document.getElementById(id);
  if(btn.innerText === "BLOCK"){
	  if (confirm("Are you sure : BLOCK Floor ? ")) {
	    alert("FLOOR BLOCKED");
	    nameChange(id);
	  } else {
	    alert("NO CHANGES DONE");
	  }
	}
  else{
  	if (confirm("Are you sure : ENABLE Floor ? ")) {
	    alert("FLOOR ENABLED");
	    nameChange(id);
	  } else {
	    alert("NO CHANGES DONE");
	  }
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
