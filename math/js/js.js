document.write('<div class="box"><img src="img/black.png"><div class="start-page" id="start_page">' +
    '<p class="title">趣味数学计算</p><button class="start" onclick="start()">点击开始</button>' +
    '</div><div class="game-page" id="game_page" style="display: none;">' +
    '<div class="tishi"><div class="fl"><p>计时：<span id="att3">60</span>秒</p>' +
    '<p>积分：<span id="att4">0</span></p></div><div class="fr">' +
    '<p>答对：<span id="att1">0</span>题</p><p>答错：<span id="att2">0</span>题</p>' +
    '</div></div><div class="ti-show"><span id="ti">17+12</span><span>=</span>' +
    '<input class="ti-daan" type="text" id="texts"></div>' +
    '<div class="selectBox" id="selectBox" style="display: none;">' +
    '</div><div class="okBox" id="okBox" style="display: none;">' +
    '<button class="ok" onclick="ok()">确定</button><small>（可按回车进行提交）</small>' +
    '</div></div><div class="end-page" id="end_page" style="display: none;">' +
    '<p class="title" id="tit">游戏结束</p><p></p><p></p><p>得分：<span id="att5">0</span></p>' +
    '<p></p><button id="nextBtn" style="display: none;" class="next" onclick="next()">下一关</button>' +
    '<button id="replayBtn" style="display: none;" class="next" onclick="next()">重玩</button></div></div>')

function $(i) {
    return document.getElementById(i);
}

function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var dui = 0,
    cuo = 0,
    fen = 0,
    time = 0,
    fu1 = 0,
    fu2 = 0,
    add = 0,
    pd = 29,
    level = 1;

function dati() {
    dui = 0;
    cuo = 0;
    fen = 0;
    $("att1").innerHTML = "0"
    $("att2").innerHTML = "0"
    $("att4").innerHTML = "0"
    var art = setInterval(function () {
        time--
        $("att3").innerHTML = time
        if (time <= 0) {
            if (fen >= 3) {
                if (level == 3) {
                    $("tit").innerHTML = "恭喜您，通过全部关卡！";
                    $("replayBtn").style.display = '';
                    $("nextBtn").style.display = 'none';
                    level = 1;
                } else {
                    $("tit").innerHTML = "恭喜您，通过第" + level + "关！";
                    $("nextBtn").style.display = '';
                    $("replayBtn").style.display = 'none';
                    level = level + 1;
                }
            } else {
                $("tit").innerHTML = "第" + level + "关挑战失败！";
                $("nextBtn").style.display = 'none';
                $("replayBtn").style.display = '';
            }
            $("att5").innerHTML = fen;
            $("texts").value = '';
            $('game_page').style.display = 'none';
            $('end_page').style.display = '';
            clearInterval(art)
        }
    }, 1000);
    if (level == 1) {
        level_1();
        time = 60;
        $("att3").innerHTML = "60";
        $("okBox").style.display = '';
        $("selectBox").style.display = 'none';
    } else if (level == 2) {
        level_2();
        time = 60;
        $("att3").innerHTML = "60";
        $("okBox").style.display = '';
        $("selectBox").style.display = 'none';
    } else {
        level_3();
        time = 30;
        $("att3").innerHTML = "30";
        $("okBox").style.display = 'none';
        $("selectBox").style.display = '';
    }
}

function level_1() {
    fu1 = rand(5, 100);
    fu2 = rand(5, 100);
    add = rand(0, 1)
    if (fu2 > fu1) {
        add = 0
    }
    if (add == 0) {
        pd = fu1 + fu2
    }
    if (add == 1) {
        pd = fu1 - fu2
    }
    $("ti").innerHTML = fu1 + "" + ["+", "-"][add] + "" + fu2
}

function level_2() {
    fu1 = rand(5, 50);
    fu2 = rand(5, 100);
    add = rand(0, 1);
    if (fu1 > 10) {
        fu2 = rand(5, 10);
    }
    if (fu2 > 10) {
        fu1 = rand(5, 10);
    }
    if (fu2 > fu1) {
        add = 0
    }
    if (Math.round(fu1 % fu2) != 0) {
        add = 0
    }
    if (add == 0) {
        pd = fu1 * fu2
    }
    if (add == 1) {
        if (Math.round(fu1 % fu2) != 0) {
            add = 0
            pd = fu1 * fu2
        } else {
            pd = fu1 / fu2
        }
    }
    $("ti").innerHTML = fu1 + "" + ["×", "÷"][add] + "" + fu2
}

function level_3() {
    fu1 = rand(5, 100);
    fu2 = rand(5, 100);
    add = rand(0, 3)
    switch (add) {
        case 0:
            pd = fu1 + fu2;
            break;
        case 1:
            if (fu2 > fu1) {
                add = 0
                pd = fu1 + fu2
            } else {
                pd = fu1 - fu2
            }
            break;
        case 2:
            if (fu1 > 10) {
                fu2 = rand(5, 10);
            }
            if (fu2 > 10) {
                fu1 = rand(5, 10);
            }
            pd = fu1 * fu2
            break;
        case 3:
            if (Math.round(fu1 % fu2) == 0) {
                pd = fu1 / fu2
                add = 3
            } else {
                pd = fu1 + fu2
                add = 0
            }
            break;
    }
    $("ti").innerHTML = fu1 + "" + ["+", "-", "×", "÷"][add] + "" + fu2;

    var a = rand(5, 100), b = rand(5, 100), c = rand(5, 100);
    var arr = [a, b, c, pd];
    var num = ["A.", "B.", "C.", "D."];
    var newArr = shuffle(arr);
    $("selectBox").innerHTML = "";
    for (var i = 0; i < 4; i++) {
        $("selectBox").innerHTML += '<button onclick="select(event)"><i>' + num[i] + '&nbsp;</i><span>' + newArr[i] + '</span></button>'
    }
}

function shuffle(array) {
    var tmp, current, top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

function next() {
    $('end_page').style.display = 'none';
    $('game_page').style.display = '';
    dati();
}

function ok() {
    if ($("texts").value == pd) {
        dui++;
        $("att1").innerHTML = dui;
    } else {
        cuo++;
        $("att2").innerHTML = cuo;
    }
    fen = dui - cuo;
    $("att4").innerHTML = fen;
    $("texts").value = '';
    if (level == 1) {
        level_1();
    } else if (level == 2) {
        level_2();
    } else {
        level_3();
    }
}

function select(event) {
    var val = event.target.innerHTML;
    if (val == pd) {
        dui++;
        time = time + 3;
        $("att1").innerHTML = dui;
    } else {
        cuo++;
        time = time - 1;
        $("att2").innerHTML = cuo;
    }
    fen = dui - cuo;
    $("att4").innerHTML = fen;
    $("texts").value = '';
    level_3();
}

function start() {
    $('start_page').style.display = 'none';
    $('game_page').style.display = '';
    dati();
}

document.onkeyup = function (e) {
    var code = e.charCode || e.keyCode;
    if (code == 13) {
        ok();
    }
}