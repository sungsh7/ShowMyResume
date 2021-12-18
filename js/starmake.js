  //  const selector = document.querySelector('#container'); //document 앞에 window. < 생략한것이다 원랜 써야됨

    //  selector.addEventListener('click',()=>{

    //      console.log(this); // 선언방식(function (){})으로 찍으면 this = container 가 찍힌다 
    //     });                 //()=>{} 화살표 방식으로 콜백함수 찍으면 부모 윈도우 전체가 찍힌다.
    //                         //this 는 상위 스코프가 된다.
    //                         //this가 보이면 다 짤라내고 this가 뭘 가르치는지 확인해본다.
    let $width = 100 + 'vw';
    let $height = 400 + 'vh';
    let $MaxParticles = 100;
    let $DrawInterval = 60;
    let canvas = document.querySelector('#pixie');
    let context = canvas.getContext('2d');
    // console.log(context);
    let gradient = null;
    let pixies = new Array();



    function setDimensions(e) {
        $width = window.screen.width;
        $height = (window.screen.height * 4);
        container.style.width = 100 + 'vw';
        container.style.height = 400 + 'vh';
        canvas.width = $width;
        canvas.height = $height;
    }
    setDimensions();
    window.addEventListener('resize', setDimensions);
    // console.log(container);
    // console.log(canvas.width);
    // console.log(canvas.height);


    function Circle() {
        this.settings = {
            ttl: 8000,
            xmax: 5,
            ymax: 2,
            rmax: 10,
            rt: 1,
            xdef: 960,
            ydef: 540,
            xdrift: 4,
            ydrift: 4,
            random: true,
            blink: true
        };


        this.reset = function () {
            this.x = (this.settings.random ? $width * Math.random() : this.settings.xdef);
            this.y = (this.settings.random ? $height * Math.random() : this.settings.ydef);
            this.r = ((this.settings.rmax - 1) * Math.random()) + 1;
            this.dx = (Math.random() * this.settings.xmax) * (Math.random() < .5 ? -1 : 1);
            this.dy = (Math.random() * this.settings.ymax) * (Math.random() < .5 ? -1 : 1);
            this.hl = (this.settings.ttl / $DrawInterval) * (this.r / this.settings.rmax);
            this.rt = Math.random() * this.hl;
            this.settings.rt = Math.random() + 1;
            this.stop = Math.random() * .2 + .4;
            this.settings.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
            this.settings.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);

        }
        // console.log(this.x);
        this.fade = function () {
            this.rt += this.settings.rt;
        }
        this.draw = function () {
            if (this.settings.blink && (this.rt <= 0 || this.rt >= this.hl)) {
                this.settings.rt = this.settings.rt * -1;
            } else if (this.rt >= this.hl) {
                this.reset();
            }
            let newo = 1 - (this.rt / this.hl);
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            context.closePath();

            let cr = this.r * newo;
            gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
            gradient.addColorStop(0.0, 'rgba(255,255,255,' + newo + ')');
            gradient.addColorStop(this.stop, 'rgba(77,101,181,' + (newo * .6) + ')');
            gradient.addColorStop(1.0, 'rgba(77,101,181,0)');
            context.fillStyle = gradient;
            context.fill();
        }

        this.move = function () {
            this.x += (this.rt / this.hl) * this.dx;
            this.y += (this.rt / this.hl) * this.dy;
            if (this.x > $width || this.x < 0) this.dx *= -1;
            if (this.y > $height || this.y < 0) this.dy *= -1;
        }
        this.getX = function () {
            return this.x;
        }
        this.getY = function () {
            return this.y;
        }
    }

    for (let i = 0; i < $MaxParticles; i++) {
        pixies.push(new Circle());
        pixies[i].reset();
    }

    function draw() {
        context.clearRect(0, 0, $width, $height);
        for (let i = 0; i < pixies.length; i++) {
            pixies[i].fade();
            pixies[i].move();
            pixies[i].draw();
        }
    }
    setInterval(draw, $DrawInterval);