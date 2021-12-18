const careerBox = document.querySelector('#careerBox');
    const workBox = document.querySelector('#workBox');
    const connectBox = document.querySelector('#connectBox');
    const Aclown = document.querySelector('#Aclown');
    const catShelter = document.querySelector('#catShelter');
    const kakao = document.querySelector('#kakao');
    const insta = document.querySelector('#insta');
    const github = document.querySelector('#gitHub');
    const planet = document.querySelector('#planet');
    console.log(careerBox);
    console.log(workBox);
    console.log(connectBox);
    console.log(planet);
    //각 요소들이  일정 scrollY 값 이상일때 생겼다가 일정 scrollY 값이상이면 없어진다.


    window.addEventListener('scroll', () => {
        // console.log(scrollY);
        // console.log(scrollX);
        if (window.scrollY > 0) {
            careerBox.style.opacity = '0';
            Aclown.style.opacity = '0';
            Aclown.style.marginTop = '50vh';
            catShelter.style.opacity = '0';
            catShelter.style.marginTop = '100vh';
            kakao.style.marginTop = '390vh';
            insta.style.marginTop = '390vh';
            github.style.marginTop = '390vh';
            planet.style.top = '400vh';
        }
        if (window.scrollY > 400) {
            careerBox.style.opacity = '1';

        }
        if (window.scrollY > 1200) {
            careerBox.style.opacity = '0';
        }
        if (window.scrollY > 1250) {
            Aclown.style.marginTop = '0';
            Aclown.style.opacity = '1';
        }
        if (window.scrollY > 1500) {
            catShelter.style.opacity = '1';
            catShelter.style.marginTop = '50vh';
        }
        if (window.scrollY > 2000) {
            Aclown.style.opacity = '0';
            Aclown.style.marginTop = '-50vh';
        }
        if (window.scrollY > 2500) {
            catShelter.style.opacity = '0';
            catShelter.style.marginTop = '-50vh';
            planet.style.top = '360vh';
        }
        if (window.scrollY > 2600) {
            kakao.style.marginTop = '0';
            insta.style.marginTop = '0';
            github.style.marginTop = '0';
           
        }

    });

    //타이틀이 버튼을 누르면 자꾸 없어진다
    //스크롤 문제 
    //해결방법 : 버튼에 각각 이벤트를 줘서 이동하도록 변경해본다
    //버튼에 각각 이벤트를 준다

    const $start = document.querySelector('#startBtn');
    const $career = document.querySelector('#careerBtn');
    const $work = document.querySelector('#workBtn');
    const $connect = document.querySelector('#connectBtn');
    const $workLink = document.querySelector('#workImg2');
    // console.log($workLink);
   
    // console.log($start);
    // console.log($career);
    // console.log($work);
    // console.log($connect);

    //버튼을 클릭하면 해당 스크롤값으로 이동한다
    // 작업물 링크도걸어준다
    $start.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    $career.addEventListener('click', () => {
        window.scrollTo(0, 1100);
    });
    $work.addEventListener('click', () => {
        window.scrollTo(0, 1850);
    });
    $connect.addEventListener('click', () => {
        window.scrollTo(0, 2900);
    });
    $workLink.addEventListener('click', ()=>{
        window.open("https://sungsh7.github.io/Portfolio/portfolio/index.html");
    });
    


    // //스페이스 인베이더 친구가 화면 여기저기에 나타났다가 사라진다
    // //별도 나타났다가 사라진다 
    // //위의 과정이 스크롤 처음부터 끝까지 반복 된다 
    // //화면 여기저기 좌표를 배열로 받는다 
    // //작은 이미지 들이 나왔다 사라진다 or 이미지자체가 생성되었다가 없어진다



    const container = document.querySelector('#container');
    // console.log(container);
    // 윈도우 로드시 이벤트를 넣어준다
    window.addEventListener('load', () => {
        //플러스라는 콜백함수를 만들어 준다
        function plus() {
            // 생성되는 갯수는 10개정도 만들어 놓는다
            for (let i = 0; i < 10; i++) {
                const invader = document.createElement('div');
                // div가 생성되게 한다
                // console.log (invader);
                container.appendChild(invader);
                //만든 인베이더를 도큐멘트에서 보여준다
                invader.classList.add('spaceInvader');
                //생성된 인베이더에 클래스를 부여해준다
            }
        }
        setTimeout(() => {
            plus();
        }, 100); //타이머를 만들어준다
    });
    window.addEventListener('wheel', () => {
        const scroll_Y = window.scrollY;
        if (scroll_Y >= 0) {
            const $invader = document.querySelectorAll('.spaceInvader');
            // 랜덤 함수를 만든다 
            function random() {
                for (let i = 0; i < $invader.length; i++) {
                    let $width = Math.floor(Math.random() * 400);
                    // console.log($invader[i]);
                    let $height = Math.floor(Math.random() * 2000);
                    let $sizeW = Math.floor(Math.random() * 20);
                    let $sizeH = Math.floor(Math.random() * 50);
                    let $opacity = Math.floor(Math.random() * 1);
                    let $value = $sizeW * .4;
                    //인베이드 배열에 만든 랜덤 함수값을 대입 해본다 
                    // console.log($value);
                    // console.log($width);
                    $invader[i].style.top = $width + 'vh';
                    $invader[i].style.left = $height + 'px';
                    $invader[i].style.opacity = $opacity - '.2' + 'px';
                    $invader[i].style.transition = $value + .3 + 's';      
                }
            }
            invaderMove();

            function startInvaderMove() {
                invaderMove();
            };
            // console.log(random);
            // console.log(invaderMove);

            function invaderMove() {
                setInterval(() => {
                    random();
                }, 3000);
            };
        }
    });