const OurTask = {
    tasks: ['Wash dish', 'Clear floor', 'Cooking'],
};
const spaceTask = document.querySelector('.tasks');




//1. Из массива добавляем на страницу
function createTasks(){
    spaceTask.innerHTML = '';
OurTask.tasks.forEach((item, index) => {
spaceTask.innerHTML += `<div class="task">
<div class="box">
 <input type="checkbox" name="" id="check">
 <span class="checkmark"></span>
</div>
<p>${index+1}. ${item}
 <i class="fas fa-trash-alt"></i>
</p>
</div>`;
});
//2. Добаляем при клике на инпут зачеркнутый класс
const inputCheck = document.querySelectorAll('input[type="checkbox"]');
const textTask = document.querySelectorAll('p');
inputCheck.forEach((input,index) => {
    input.addEventListener('click', (e) => {
        if (e.target){
            textTask[index].classList.toggle('through');
        }
    });  
});

//4. Удаляем задачу

const TaskNone = document.querySelectorAll('i');
const task = document.querySelectorAll('.task');
TaskNone.forEach((item, index) => {
    item.addEventListener('click', () => {
       task[index].remove();
       OurTask.tasks.splice(index, 1);
       createTasks();
    });
});

}
createTasks();


//3. Добавляем при клике на кнопку в массив новую задачу и перемещаем это на страницу

const inputText = document.querySelector('input[type="text"]');
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault();
    if (inputText.value){
        OurTask.tasks.push(inputText.value);
        createTasks();
        inputText.value='';
    }
   
});







