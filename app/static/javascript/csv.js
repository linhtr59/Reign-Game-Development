// Read csv files 
//two options either use react framework or convert to jason initially and back to array
const file = document.querySelector
("input");
file.addEventListener("change",()=>{
    const x = new FileReader();
    x.onloadend =e>{
        let data = x.result,
        console.log(data),
    }
    x.readAsText(file.files[0]);


})

