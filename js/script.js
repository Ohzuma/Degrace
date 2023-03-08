// navigation functions
const nav = document.querySelector('.nav')
const right = document.querySelector('.right')
const fixed = document.querySelector('.fixed')

const open = document.getElementById('open').addEventListener('click',()=>{
    nav.classList.toggle('active')
    right.classList.toggle('hide')
})
const close = document.getElementById('close').addEventListener('click',()=>{
    nav.classList.toggle('active')
    right.classList.toggle('hide')
})
const leftMenu = document.getElementById('leftMenu').addEventListener('click',()=>{
    fixed.classList.toggle('active')
})

const openMobile = document.getElementById('openMobile').addEventListener('click',()=>{
    nav.classList.toggle('active')
    right.classList.toggle('hide')
})
// const close = document.getElementById('close').addEventListener('click',()=>{
//     nav.classList.toggle('active')
//     right.classList.toggle('hide')
// })
// window.onscroll=()=>{
//     fixed.remove('active')
// }

// end navigation functions



// menu list

// const menuList = [
//     {
//         category:'responsive',
//         demo:'www.google.demo.com',
//         code:'https://www.github.com/ohzuma',
//         img:'./img/projects/home1.jpg'
//     },
//     {
//         category:'responsive',
//         demo:'www.google.demo.com',
//         code:'https://www.github.com/ohzuma',
//         img:'./img/projects/home2.jpg'
//     },  
//     {
//         category:'personal',
//         demo:'www.google.demo.com',
//         code:'https://www.github.com/ohzuma',
//         img:'./img/projects/home3.jpg'
//     },  
//     {
//         category:'personal',
//         demo:'www.google.demo.com',
//         code:'https://www.github.com/ohzuma',
//         img:'./img/projects/home4.jpg'
//     },  
//     {
//         category:'client',
//         demo:'www.google.demo.com',
//         code:'https://www.github.com/ohzuma',
//         img:'./img/projects/home5.jpg'
//     },  
//     {
//         category:'client',
//         demo:'www.google.demo.com',
//         code:'https://www.github.com/ohzuma',
//         img:'./img/projects/home1.jpg'
//     },
// ]


// const responsive = document.getElementById('responsive');
// let DivItem =  document.getElementById('#data')



// const filterArr=[]


// Func_Filter('responsive')

// responsive.addEventListener('click',()=>{ 
//     console.log(Func_Filter('client'))
// })


// filterArr.forEach((item)=>{
//     let div = document.createElement('div');
// let DivItem =  document.querySelector('#data');
//     div.innerHTML = `
//     <img src=${item.img}>

//     <p>${item.category}</p>
//     `
//     DivItem.appendChild(div)
// })




filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements,
//    and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

