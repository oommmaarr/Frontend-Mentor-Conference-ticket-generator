const fileUpload = document.getElementById("file-upload")
const imgInfo = document.querySelector(".spanInfo img")
const spanInfo = document.querySelector(".spanInfo span")
const imgerr1 = document.querySelector(".spanerr1 img")
const spanerr1 = document.querySelector(".spanerr1 span")
const imgerr2 = document.querySelector(".spanerr2 img")
const spanerr2 = document.querySelector(".spanerr2 span")
const imgChange = document.querySelector(".imgChange")
const dragInfo = document.querySelector(".dragInfo")
const divButtons = document.querySelectorAll(".divButtons button")
var inpAvatar=false;
var inpName=false;
var inpEmail = false;
var inpGit = false
const genButton = document.querySelector(".genButton")
const inpFullName = document.querySelector(".inpFullName")
const imgerr3 = document.querySelector(".spanerr3 img")
const spanerr3 = document.querySelector(".spanerr3 span")
const imgerr4 = document.querySelector(".spanerr4 img")
const spanerr4 = document.querySelector(".spanerr4 span")
const errEmail = document.querySelector(".errEmail")
const errGit = document.querySelector(".errGit")
const imgerr5 = document.querySelector(".spanerr5 img")
const spanerr5 = document.querySelector(".spanerr5 span")
let imageURL = "";
fileUpload.addEventListener("change",()=>{
    if (fileUpload.files.length >= 1){
        const img = fileUpload.files[0];
        const imgName = img.name.toLowerCase();
        console.log(imgName) 
        imageURL = URL.createObjectURL(img);
        const imgType = img.type;
        console.log(imgType)
        console.log(`Extension is : ${img.type}`)
        if (imgName.endsWith("png")||imgName.endsWith("jpg")||imgName.endsWith("jpeg")){
            if(img.size/1024<500){
                imgChange.src = imageURL;
                imgChange.classList.remove("w-12","h-12","p-2");
                imgChange.classList.add("w-22","h-22","p-0");
                dragInfo.style.display = "none"
                divButtons.forEach(ele=>{
                    ele.classList.remove("hidden")
                })
                fileUpload.style.display = "none";
                inpAvatar = true;      
            }else{
                spanInfo.style.display="none";
                imgInfo.style.display="none";
                imgerr2.style.display="inline";
                spanerr2.style.display="inline";
            }
        }
        else{
                spanInfo.style.display="none";
                imgInfo.style.display="none";
                imgerr1.style.display="inline";
                spanerr1.style.display="inline";
        }
    }
})
divButtons[0].addEventListener("click",()=>{
    imgChange.src = "./assets/images/icon-upload.svg";
    imgChange.classList.remove("w-22","h-22");
    imgChange.classList.add("w-12","h-12","p-2");
    divButtons.forEach(ele=>{
        ele.classList.add("hidden")
    })
    dragInfo.style.display = "block"
    fileUpload.style.display = "block";
    fileUpload.value = "";

})
divButtons[1].addEventListener("click",()=>{
    fileUpload.click(); 
    imgChange.classList.add("w-22","h-22","p-2");
})

genButton.addEventListener("click",()=>{
    if(inpFullName.value.trim()===''){
        imgerr3.style.display="inline";
        spanerr3.style.display="inline";
    }else{
        imgerr3.style.display="none";
        spanerr3.style.display="none";
        inpName = true;
    }
    if(errEmail.value.trim()===''){
        imgerr4.style.display="inline";
        spanerr4.style.display="inline";
        spanerr4.innerHTML="Must Provie Email"
    }else if (!errEmail.value.includes("@")) {
        imgerr4.style.display="inline";
        spanerr4.style.display="inline";
        spanerr4.innerHTML="Email Without @ Sign";
    }else{
        imgerr4.style.display="none";
        spanerr4.style.display="none";
        inpEmail = true;
    }
    if (errGit.value.trim()===''){
        imgerr5.style.display="inline";
        spanerr5.style.display="inline";
    }else{
        imgerr5.style.display="none";
        spanerr5.style.display="none";
        inpGit = true;
    }

    if (inpAvatar&&inpName&&inpEmail&&inpGit){
        const hiddenPage = document.querySelector(".hiddenPage")
        const parent2 = document.querySelector(".parent2")
        const fullhere = document.querySelector(".fullhere")
        const emailHere = document.querySelector(".emailHere")
        const imgChange2 = document.querySelector(".imgChange2")
        const ticketh2 = document.querySelector(".ticketh2")
        const githubUser = document.querySelector(".githubUser")
        fullhere.innerHTML=inpFullName.value;
        emailHere.innerHTML = errEmail.value;
        hiddenPage.style.display="none";
        parent2.style.display="block";
        imgChange2.src = imageURL;
        ticketh2.innerHTML=inpFullName.value; 
        githubUser.innerHTML = errGit.value;
    }
})

