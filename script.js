document.addEventListener('mousemove', (e) => { //마우스가 움직였는지 확인하는 이벤트
    const buttonBox = document.getElementById('button_box'); //버튼을 감싸고 있는 영역
    const input1 = document.getElementById('idbox');//id를 입력받는 input태그
    const input2 = document.getElementById('pwbox');//pw를 입력받는 input태그
    const allEmpty = input1.value == '' || input2.value == '';//id입력란과 pw입력란이 비었는지 확인
    if (!allEmpty) return; //입력란이 비어있지 않다면 함수종료

    const rect = buttonBox.getBoundingClientRect(); //버튼 박스의 위치
    const mouseX = e.clientX;//마우스 x값
    const mouseY = e.clientY;//마우스 y값

    if (
        mouseX >= rect.left &&mouseX <= rect.right &&
        mouseY >= rect.top &&mouseY <= rect.bottom //마우스 위치와 버튼 영역 위치관계 확인
    ) {
        moveBoxRandomly();//랜덤한 위치로 이동
    }
});
function moveBoxRandomly() {//랜덤위치로 이동시키는 함수 선언
    const container = document.getElementById('position_box');//버튼이 움직일 수 있는 영역
    const box = document.getElementById('button_box');//버튼을 감싸고 있는 영역
    const containerWidth = container.clientWidth; //버튼이 움직일 수 있는 영역의 너비
    const containerHeight = container.clientHeight;//버튼이 움직일 수 있는 영역의 높이
    const boxWidth = box.offsetWidth;//버튼을 감싼 영역의 너비
    const boxHeight = box.offsetHeight;//버튼을 감싼 영역의 높이
    const maxX = containerWidth - boxWidth;//최대 x값 구하기
    const maxY = containerHeight - boxHeight;//최대 y값 구하기
    const randomX = Math.random() * maxX; //math의 random메서드를 통해 랜덤한 x값 구하기
    const randomY = Math.random() * maxY; //math의 random메서드를 통해 랜덤한 y값 구하기
    box.style.left = `${randomX}px`;//버튼을 감싼 영역 이동시키기
    box.style.top = `${randomY}px`;//버튼을 감싼 영역 이동시키기
  }
  function login(form) {//로그인 함수
    const ids= ['guest','mino','boramae','seojunhwang'];//id저장
    const pws=['guest','mino1234!','boramae1234!','seojunhwang1234!'];//pw저장
    if (ids.indexOf(form.id.value)!=-1){//id를 저장한 배열에 입력받은 id가 있는지 확인
        if (form.pw.value == pws[ids.indexOf(form.id.value)]){//입력받은 pw가 저장된 pw와 같은지 확인
            document.getElementById('errorbox').innerHTML = '';//에러메시지 없애기
            alert('로그인 성공');//알림창 띄우기
        }else{
            document.getElementById('errorbox').innerHTML='';//에러메시지 없애기
            let p1 = document.createElement('p');
            p1.innerText = '아이디 또는 패스워드가 잘못되었습니다';
            document.getElementById('errorbox').appendChild(p1);//에러메시지 띄우기
        }
    }else{
        document.getElementById('errorbox').innerHTML='';
        let p1 = document.createElement('p');
        p1.innerText = '아이디 또는 패스워드가 잘못되었습니다';
        document.getElementById('errorbox').appendChild(p1);//에러메시지 띄우기
    }
}