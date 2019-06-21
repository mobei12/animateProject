/**
 * @author jjh copy from PengJiyuan
 * @gitAddress https://github.com/PengJiyuan/particle-bg
 * @version 1.0.0
 * @description 背景粒子动画
 * @update 更新记录
 * @memo 使用说明：particleBac(element, config [Object])
 * element:容器，
 * config:粒子配置
 * 例：
 * config={
 *     color:"#fff",//粒子默认白色
 *     count:100,//粒子默认100颗
 *     radius:2,//粒子默认半径2px(现代码已改，可生成随机大小)
 *     line:true//粒子之间是否连线,默认true。
 *     distance:width / 10,//粒子间距小于多少会连线，默认是容器宽度的10%
 *     rate:width / 10000,//粒子运动的速率，默认是容器宽度的万分之一
 *     zIndex:1,//canvas的z-index默认是1
 *     resize:true,//是否监听window.resize，自动缩放粒子背景
 * }
 */

function scale(canvasList, opt) {
    var ratio = window.devicePixelRatio || 1,
        ctx = null;

    canvasList.forEach(function (canvas) {
        ctx = canvas.getContext('2d');
        canvas.style.position = opt.position;
        canvas.style.width = opt.width + 'px';
        canvas.style.height = opt.height + 'px';
        canvas.width = opt.width * ratio;
        canvas.height = opt.height * ratio;
        ctx.scale(ratio, ratio);
    });

    return canvasList;
}

var Particle = function Particle(element, config) {
    var this$1 = this;
    if (config === void 0) config = {};

    this.element = document.querySelector(element);
    this.color = config.color || '#fff';
    this.width = this.element.clientWidth;
    this.height = this.element.clientHeight;
    this.distance = config.distance || this.width / 10;
    this.radius = config.radius || 2;
    this.points = [];
    this.count = config.count || 100;
    this.zIndex = config.zIndex || 1;
    this.rate = config.rate || this.width / 10000;
    this.resize = typeof config.resize === 'boolean' ? config.resize : true;
    this.line = typeof config.line === 'boolean' ? config.line : true;
    this.appendCanvas();
    for (var i = 0; i < this.count; i++) {
        this$1.points.push(this$1.getPoint());
    }

    if (this.resize) {
        window.onresize = function () {
            this$1.width = this$1.element.clientWidth;
            this$1.height = this$1.element.clientHeight;
            this$1.distance = config.distance || this$1.width / 10;
            this$1.rate = config.rate || this$1.width / 10000;
            this$1.canvas.width = this$1.width;
            this$1.canvas.height = this$1.height;
            scale([this$1.canvas], {
                width: this$1.width,
                height: this$1.height
            });
        };
    }
};

Particle.prototype.getPoint = function getPoint() {
    var x = Math.ceil(Math.random() * this.width),
        y = Math.ceil(Math.random() * this.height),
        r = +(Math.random() * this.radius).toFixed(4),
        rateX = +(Math.random() * 2 - 1).toFixed(4),
        rateY = +(Math.random() * 2 - 1).toFixed(4);

    return {
        x: x,
        y: y,
        r: r,
        rateX: rateX,
        rateY: rateY
    };
};

Particle.prototype.appendCanvas = function appendCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    scale([this.canvas], {
        width: this.width,
        height: this.height
    });
    this.canvas.style.zIndex = this.zIndex;
    this.element.appendChild(this.canvas);
};

Particle.prototype.draw = function draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawPoints();
    if (this.line) {
        this.drawLines();
    }
    window.requestAnimationFrame(this.draw.bind(this));
};

Particle.prototype.drawPoints = function drawPoints() {
    var this$1 = this;

    this.points.forEach(function (item, i) {
        item.opacity = item.opacity || Math.random();
        if (item.state) {
            item.opacity -= 0.005
        } else {
            item.opacity += 0.005
        }
        if (item.opacity > 1) {
            item.state = true;
        } else if (item.opacity <= 0) {
            item.state = false;
        }
        this$1.ctx.beginPath();
        this$1.ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2, false);
        this$1.ctx.fillStyle = this$1.color.replace('1',item.opacity)
        this$1.ctx.fill();
        if (item.x > 0 && item.x < this$1.width && item.y > 0 && item.y < this$1.height) {
            item.x += item.rateX * this$1.rate;
            item.y += item.rateY * this$1.rate;
        } else {
            this$1.points.splice(i, 1);
            this$1.points.push(this$1.getPoint(this$1.radius));
        }
    });
};

Particle.prototype.dis = function dis(x1, y1, x2, y2) {
    var disX = Math.abs(x1 - x2),
        disY = Math.abs(y1 - y2);

    return Math.sqrt(disX * disX + disY * disY);
};

Particle.prototype.drawLines = function drawLines() {
    var this$1 = this;
    var len = this.points.length;
    /* 对圆心坐标进行两两判断 */
    for (var i = 0; i < len; i++) {
        for (var j = len - 1; j >= 0; j--) {
            var x1 = this$1.points[i].x,
                y1 = this$1.points[i].y,
                x2 = this$1.points[j].x,
                y2 = this$1.points[j].y,
                disPoint = this$1.dis(x1, y1, x2, y2);

            if (disPoint <= this$1.distance) {
                this$1.ctx.beginPath();
                this$1.ctx.moveTo(x1, y1);
                this$1.ctx.lineTo(x2, y2);
                this$1.ctx.strokeStyle = this$1.color;
                /* 两点之间距离越大，线越细，反之亦然 */
                this$1.ctx.lineWidth = 1 - disPoint / this$1.distance;
                this$1.ctx.stroke();
            }
        }
    }
};

function particleBac(element, config) {
    new Particle(element, config).draw();
}
export default particleBac