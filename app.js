
// creating new section with all its content and its attribute , add it to the page 
const main = document.querySelector('main');

let counter =2;
function creatsection(){
    const section = document.createElement("section");
    section.setAttribute('id', `section${counter}`);
    section.setAttribute('data-nav', `section ${counter}`);
    
    function creatdiv(){
        const div = document.createElement("div");
        div.setAttribute('class',"landing__container");
        
        function creatcontent(){
            const h2 = document.createElement("h2");
            h2.textContent = `Section ${counter}`;
            const p = document.createElement("p");
            const text = document.querySelector('section').querySelector('p').textContent;
            p.textContent =  text;
            div.appendChild(h2);
            div.appendChild(p);
        }
        section.appendChild(div);
        creatcontent();
    }
    main.appendChild(section);
    creatdiv();
    counter++;
}
creatsection();
creatsection();
creatsection();
creatsection();
creatsection();


//set active calss for the section on the veiw port
let sections = document.querySelectorAll('section');

window.onscroll = ()=>
{
 sections.forEach((active)=>{
     if(active.getBoundingClientRect().y>=-240 && active.getBoundingClientRect().y <=160)
     {
         active.classList.add('your-active-class');         
         document.querySelector("[data-navigate=\""+active.id + "\"]").classList.add('click_link');
     } else {
         active.classList.remove('your-active-class');
         document.querySelector("[data-navigate=\""+active.id + "\"]").classList.remove('click_link');
         
     }
 });
};

// create the menu bar , add each section to the menu and apply an active class when clicked
const ul = document.getElementById('navbar__list');
function addtomenu(){
    const frag = document.createDocumentFragment();
    let  index =1;
    for(const section of sections){
        const li = document.createElement('li');
        li.innerHTML = `<a href=#section${index} data-navigate=${section.id} class=menu__link>Section ${index}<a/>`;
        frag.appendChild(li);
        index++;
    }
    ul.appendChild(frag);
}
addtomenu();



//slow the navigation for the menu items to section
ul.addEventListener("click" , (section)=>{
    section.preventDefault();
    document.getElementById(`${section.target.dataset.navigate}`).scrollIntoView({behavior:"smooth"});
});