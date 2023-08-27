
const addform=document.querySelector('.add');
const list=document.querySelector('.todos');

addform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const x=addform.add.value.trim();

    if(x.length != 0){
        generateTemplate(x);
        addform.reset();
    }
    else{
        alert('Input not provided');
    }
});

const generateTemplate = (todo) => {
    const html = `<li class='list-group-item d-flex justify-content-between align-items-center'>
        <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
    </li>`;
    list.innerHTML += html;
}

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
