const tabs=document.querySelectorAll(".categories button");
const rightArrow=document.querySelector(".categories .right-arrow svg");
const leftArrow=document.querySelector(".categories .left-arrow svg");

const tabsList=document.querySelector(".categories section");
const leftArrowContainer=document.querySelector(".categories .left-arrow");
const rightArrowContainer=document.querySelector(".categories .right-arrow");

const removeAllActiveClasses = () => {
  tabs.forEach((tab) =>{
    tab.classList.remove("active");
  });
};

const manageIcons = () => {
  if(tabsList.scrollLeft>=20){
    leftArrowContainer.classList.add("active");
  }
    else{
      leftArrowContainer.classList.remove("active");
    }
    let maxScrollValue=tabsList.scrollWidth - tabsList.clientWidth - 20;
    console.log("scroll width: ", tabsList.scrollWidth);
    console.log("client width: ", tabsList.clientWidth);

    if(tabsList.scrollLeft >= maxScrollValue){
      rightArrowContainer.classList.remove("active");
    }else{
      rightArrowContainer.classList.add("active");
    }
};

tabs.forEach((tab) =>{
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft +=200;
  manageIcons();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -=200;
  manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);