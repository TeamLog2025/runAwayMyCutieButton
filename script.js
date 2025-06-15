document.addEventListener('DOMContentLoaded', () => {
    const buttonBox = document.getElementById('button_box');
    const idinput = document.getElementById("idbox");
    const pwinput = document.getElementById("pwbox");

    buttonBox.addEventListener('mouseenter', () => {
        const allEmpty = (idinput.value == '' || pwinput.value =='');
        if (allEmpty) {
            moveBoxRandomly();
        }
    });
});
function moveBoxRandomly() {
    const container = document.getElementById('position_box');
    const box = document.getElementById('button_box');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const maxX = containerWidth - boxWidth;
    const maxY = containerHeight - boxHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;
  }
function login(form) {
    const ids= ['guest','mino','boramae','seojunhwang'];
    const pws=['guest','mino1234!','boramae1234!','seojunhwang1234!'];
    if (ids.indexOf(form.id.value)!=-1){
        if (form.pw.value == pws[ids.indexOf(form.id.value)]){
            document.getElementById('errorbox').innerHTML = '';
            alert('로그인 성공');
        }else{
            document.getElementById('errorbox').innerHTML='';
            let p1 = document.createElement('p');
            p1.innerText = '아이디 또는 패스워드가 잘못되었습니다';
            document.getElementById('errorbox').appendChild(p1);
        }
    }else{
        document.getElementById('errorbox').innerHTML='';
        let p1 = document.createElement('p');
        p1.innerText = '아이디 또는 패스워드가 잘못되었습니다';
        document.getElementById('errorbox').appendChild(p1);
    }
}