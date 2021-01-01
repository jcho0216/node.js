let list = document.querySelector('#list'),
    InputBox = document.querySelector('.input-box'),
    p_clock = document.querySelector('.p-clock'),
    h3_clock = document.querySelector('.h3-clock');

const getTime = () => {
    let time = new Date,
        date = time.getDate(),
        month = time.getMonth(),
        hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds();

        if(minute < 10){
            minute = "0" + minute;
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        
        if(second < 10){
            second = "0" + second;
        }
        
        if(month < 10){
            month = "0" + month;
        }
        if(date < 10){
            date = "0" + date;
        }

        p_clock.innerHTML = Number(month+1) + "월" + " " +  date + "일" + "\n";
        h3_clock.innerHTML = hour + "시" + " " + minute + "분" + " " + second + "초";
}

const forGetTime = () => {
    setInterval(getTime, 1000);
}

forGetTime();


const AddList = () => {
    const itemList = document.createElement('li'),
        DateValue = document.createElement('h5'),
        delBtn = document.createElement('img'),
        editBtn = document.createElement('img');

    let time = new Date;
    let hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds();
        
        if(minute < 10){
            minute = "0" + minute;
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        if(second < 10){
            second = "0" + second;
        }
        
        DateValue.innerText= hour + ":" + minute + ":" + second;
    
    delBtn.setAttribute('class', 'delBtn');
    delBtn.setAttribute('src', "https://img.icons8.com/ios/50/000000/delete--v3.png");

    editBtn.setAttribute('class', 'editBtn');
    editBtn.setAttribute('src', "https://img.icons8.com/ios/50/000000/create-new.png");

    DateValue.setAttribute('class', 'DateValue');

    delBtn.addEventListener('click', function() {
        if(confirm("정말 삭제하시겠습니까? ") == true){
            alert("삭제되었습니다~!");
        }
        else{
            return;
        }

        delBtn.parentElement.style.display="none";  
    });

    editBtn.addEventListener('click', function() { 
        console.log(this);
        let editValue = prompt("뭘로 바꿀까요", this.parentNode.firstChild.nodeValue);
        if(editValue == null){
            return;
        }
        else if(editValue !== "") {
            this.parentNode.firstChild.nodeValue = editValue; 
        }
    });

    if(InputBox.value !== "") {
        itemList.innerHTML = InputBox.value;
        list.appendChild(itemList); 
        itemList.appendChild(delBtn);
        itemList.appendChild(editBtn);
        itemList.appendChild(DateValue);
        InputBox.value = "";
    }
    else {
        alert('할 일이 없군요...');
    }

}


const enterKey = () => {
    if(window.event.keyCode == 13) {
        AddList();
    }
}




