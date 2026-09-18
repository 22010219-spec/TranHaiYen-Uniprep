(function(){
"use strict";
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var root = document.documentElement, swap = document.getElementById("swap");

/* ---- theme: Brightfield / Fluorescence ---- */
function dark(){
  var t = root.getAttribute("data-theme");
  return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function paintSwap(){ swap.textContent = dark() ? "Brightfield" : "Fluorescence"; }
try{ var s = localStorage.getItem("mode"); if(s) root.setAttribute("data-theme", s); }catch(e){}
paintSwap();
swap.addEventListener("click", function(){
  var n = dark() ? "light" : "dark";
  root.setAttribute("data-theme", n);
  try{ localStorage.setItem("mode", n); }catch(e){}
  paintSwap();
});

/* ---- editable name, defaults to Tran Hai Yen ---- */
var nf = document.getElementById("nameField");
function fit(){ nf.style.width = Math.max(6,(nf.value.length||1)+1) + "ch"; }
try{ var nm = localStorage.getItem("name"); if(nm) nf.value = nm; }catch(e){}
fit();
nf.addEventListener("input", function(){ fit(); try{ localStorage.setItem("name", nf.value); }catch(e){} });
nf.addEventListener("focus", function(){ nf.select(); });

/* ---- field of view: drifting cells, poster toned ---- */
var cv = document.getElementById("cells"), ctx = cv.getContext("2d");
var stains = ["--green-700","--amber","--pink","--orange"], cellsArr = [];
function cssVar(v){ return getComputedStyle(root).getPropertyValue(v).trim(); }
function sizeCanvas(){
  var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = Math.max(1, r.width * dpr); cv.height = Math.max(1, r.height * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);
  seed(r.width, r.height);
}
function seed(w,h){
  cellsArr = [];
  var count = w < 300 ? 14 : 22;
  for(var i=0;i<count;i++){
    cellsArr.push({
      x:Math.random()*w, y:Math.random()*h, r:6+Math.random()*24,
      vx:(Math.random()-.5)*.13, vy:(Math.random()-.5)*.13,
      c:stains[i % stains.length], a:.12+Math.random()*.20, nuc:Math.random()>.45
    });
  }
}
function draw(){
  var r = cv.getBoundingClientRect(), w = r.width, h = r.height;
  ctx.clearRect(0,0,w,h);
  for(var i=0;i<cellsArr.length;i++){
    var c = cellsArr[i], col = cssVar(c.c);
    if(!reduce){ c.x += c.vx; c.y += c.vy; }
    if(c.x < -40) c.x = w+40; if(c.x > w+40) c.x = -40;
    if(c.y < -40) c.y = h+40; if(c.y > h+40) c.y = -40;
    ctx.globalAlpha = c.a; ctx.fillStyle = col;
    ctx.beginPath(); ctx.arc(c.x,c.y,c.r,0,6.2832); ctx.fill();
    ctx.globalAlpha = Math.min(.55, c.a*2.3); ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.stroke();
    if(c.nuc){
      ctx.globalAlpha = Math.min(.5, c.a*2.1);
      ctx.beginPath(); ctx.arc(c.x+c.r*.15, c.y-c.r*.1, c.r*.3, 0, 6.2832); ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}
sizeCanvas(); window.addEventListener("resize", sizeCanvas); draw();

/* ---- focus dial ---- */
var focus = document.getElementById("focus"), read = document.getElementById("focusRead"),
    inner = document.getElementById("inner");
function applyFocus(v){
  var t = v/100;
  inner.style.setProperty("--blur", (16*(1-t)).toFixed(2) + "px");
  inner.style.setProperty("--sharp", (0.18 + 0.82*t).toFixed(3));
  read.textContent = Math.round(v) + "%";
}
focus.addEventListener("input", function(){ applyFocus(+focus.value); });
applyFocus(0);
(function autoFocus(){
  if(reduce){ focus.value = 100; applyFocus(100); return; }
  var start = null, dur = 1400;
  function step(ts){
    if(start === null) start = ts;
    var p = Math.min(1, (ts-start)/dur), e = 1-Math.pow(1-p,3);
    focus.value = e*100; applyFocus(e*100);
    if(p<1) requestAnimationFrame(step);
  }
  setTimeout(function(){ requestAnimationFrame(step); }, 300);
})();

/* ---- timeline stops ---- */
Array.prototype.forEach.call(document.querySelectorAll(".stop"), function(b){
  b.addEventListener("click", function(){
    var el = document.querySelector(b.dataset.go);
    if(el) el.scrollIntoView({behavior:"smooth", block:"start"});
  });
});

/* ---- interest windows ---- */
var items = [
 {t:"Biology", lab:"cells and systems", c:"var(--green-700)",
  l:["How the body actually works"],
  n:"The one subject I would still read with no test coming up. It is also the reason medicine is the plan and not just a phase."},
 {t:"Design", lab:"structure", c:"var(--orange)",
  l:["Layout, colour, composition"],
  n:"Basically problem solving that is also allowed to look good. It scratches the same part of my brain as biology, just with better colours."},
 {t:"Art", lab:"hand made", c:"var(--pink)",
  l:["Drawing, mostly for myself"],
  n:"This is how I think something through slowly. Also the fastest way I know to come back from a rough study block."},
 {t:"Photography", lab:"light", c:"var(--amber)",
  l:["Framing and timing"],
  n:"A camera makes you notice details you would otherwise walk right past, which turns out to be a useful habit for someone going into science."},
 {t:"Science", lab:"minus physics", c:"var(--green-700)",
  l:["Chemistry especially","Physics, less so"],
  n:"Chemistry is the other half of the medicine plan, so it gets real effort. Physics and I have an understanding that we stay out of each other's way."},
 {t:"Volleyball", lab:"on court", c:"var(--tomato)",
  l:["Fast decisions, on my feet"],
  n:"The thing that stops my whole life from being a desk and a textbook. It keeps the energetic side of me actually used."}
];
var box = document.getElementById("cards");
items.forEach(function(it){
  var b = document.createElement("button");
  b.className = "win"; b.type = "button"; b.setAttribute("aria-expanded", "false");
  b.innerHTML =
    '<div class="chrome"><i class="dot3"></i><i class="dot3"></i><i class="dot3"></i>' +
    '<span class="tick" style="background:' + it.c + '"></span><span class="label">' + it.lab + '</span></div>' +
    '<div class="in"><h3>' + it.t + '</h3><ul>' +
    it.l.map(function(x){ return "<li>" + x + "</li>"; }).join("") +
    '</ul><div class="extra"><div><p>' + it.n + '</p></div></div><div class="tapme">Open</div></div>';
  box.appendChild(b);
});
document.addEventListener("click", function(e){
  var w = e.target.closest ? e.target.closest(".win") : null;
  if(!w) return;
  var open = w.getAttribute("aria-expanded") === "true";
  w.setAttribute("aria-expanded", open ? "false" : "true");
  var tm = w.querySelector(".tapme"); if(tm) tm.textContent = open ? "Open" : "Close";
});

/* ---- strengths ---- */
var st = [
  {t:"Biology", v:95, c:"var(--green-700)", d:"no contest"},
  {t:"Art", v:88, c:"var(--pink)", d:"daily habit"},
  {t:"Design", v:85, c:"var(--orange)", d:"applied often"},
  {t:"Music", v:72, c:"var(--amber)", d:"quietly there"}
];
var bars = document.getElementById("bars");
st.forEach(function(x){
  var d = document.createElement("div");
  d.innerHTML = '<div class="bar-top"><h3>' + x.t + '</h3><em>' + x.d + '</em></div>' +
                '<div class="track"><div class="fill" data-v="' + x.v + '" style="--c:' + x.c + '"></div></div>';
  bars.appendChild(d);
});
var fills = document.querySelectorAll(".fill");
if("IntersectionObserver" in window){
  var io = new IntersectionObserver(function(en){
    en.forEach(function(e){ if(e.isIntersecting){ e.target.style.width = e.target.dataset.v + "%"; io.unobserve(e.target); } });
  }, {threshold:.4});
  Array.prototype.forEach.call(fills, function(f){ io.observe(f); });
} else {
  Array.prototype.forEach.call(fills, function(f){ f.style.width = f.dataset.v + "%"; });
}

/* ---- battery ---- */
var bt = document.getElementById("battery"), br = document.getElementById("batteryRead");
function txt(v){
  if(v<25) return ["Alone at my desk","Door shut, timer running. This is where the real studying happens, no audience needed."];
  if(v<50) return ["Small group","Comfortable working on my own but happy to bounce ideas around when someone is nearby."];
  if(v<75) return ["Where I usually sit","Ambivert, leaning outward. Good in a crowd, but I still go home to recharge and get the actual work done."];
  return ["Full ENFP mode","Court, classroom, group project, my energy goes up, not down. This is the side the test picked up on."];
}
function paintB(){ var t = txt(+bt.value); br.innerHTML = "<b>" + t[0] + "</b>" + t[1]; }
bt.addEventListener("input", paintB); paintB();

/* ---- ENFP spark animation ---- */
(function(){
  var host = document.getElementById("enfpAnim");
  if(!host) return;
  var colors = ["var(--pink)","var(--orange)","var(--green-700)","var(--amber)","var(--tomato)"];
  var n = 9;
  for(var i=0;i<n;i++){
    var a = (i/n) * Math.PI * 2, rad = 62, size = 8 + (i%3)*4;
    var sp = document.createElement("span");
    sp.className = "spark";
    sp.style.width = size + "px"; sp.style.height = size + "px";
    sp.style.left = (85 + Math.cos(a)*rad - size/2) + "px";
    sp.style.top = (85 + Math.sin(a)*rad - size/2) + "px";
    sp.style.background = colors[i % colors.length];
    sp.style.animationDelay = (i*0.18) + "s";
    host.appendChild(sp);
  }
})();

/* ---- dna rungs ---- */
var rg = document.getElementById("rungs"), NS = "http://www.w3.org/2000/svg";
for(var i=0;i<9;i++){
  var y = 10 + i*15, l = document.createElementNS(NS, "line");
  var spread = Math.abs(Math.sin(i*0.7))*14 + 3;
  l.setAttribute("x1", 30-spread); l.setAttribute("x2", 30+spread);
  l.setAttribute("y1", y); l.setAttribute("y2", y);
  l.setAttribute("class", "rung"); l.style.animationDelay = (i*0.16) + "s";
  rg.appendChild(l);
}

/* ---- tomato ticks ---- */
var tk = document.getElementById("ticks");
for(var j=0;j<60;j++){
  var a2 = (j/60)*Math.PI*2, big = j%5===0, r1 = big?48:51, r2 = 54;
  var ln = document.createElementNS(NS, "line");
  ln.setAttribute("x1", 100+Math.sin(a2)*r1); ln.setAttribute("y1", 124-Math.cos(a2)*r1);
  ln.setAttribute("x2", 100+Math.sin(a2)*r2); ln.setAttribute("y2", 124-Math.cos(a2)*r2);
  ln.setAttribute("stroke-width", big?3:1.4);
  tk.appendChild(ln);
}

/* ---- pomodoro ---- */
var FOCUS = 25*60, BREAK = 5*60, mode = "focus", left = FOCUS, run = false, tick = null, done = 0;
var ft = document.getElementById("faceTime"), fm = document.getElementById("faceMode"),
    ptr = document.getElementById("pointer"), sb = document.getElementById("startBtn"),
    rb = document.getElementById("resetBtn"), mb = document.getElementById("modeBtn"),
    ct = document.getElementById("count");
function total(){ return mode === "focus" ? FOCUS : BREAK; }
function paint(){
  var m = Math.floor(left/60), s = left%60;
  ft.textContent = m + ":" + (s<10?"0":"") + s;
  fm.textContent = mode === "focus" ? "FOCUS" : "BREAK";
  ptr.setAttribute("transform", "translate(0,18) rotate(" + (left/total())*360 + " 100 106)");
  sb.textContent = run ? "Pause" : (left === total() ? "Start" : "Resume");
  mb.textContent = mode === "focus" ? "Switch to break" : "Switch to focus";
}
function halt(){ run = false; clearInterval(tick); tick = null; }
function setMode(m){ halt(); mode = m; left = total(); paint(); }
sb.addEventListener("click", function(){
  if(run){ halt(); paint(); return; }
  run = true; paint();
  tick = setInterval(function(){
    left--;
    if(left <= 0){
      halt();
      if(mode === "focus"){
        done++;
        ct.textContent = done === 1 ? "One block down. Go take the five minutes." : done + " blocks down today. Not bad.";
        setMode("break");
      } else setMode("focus");
      return;
    }
    paint();
  }, 1000);
});
rb.addEventListener("click", function(){ setMode(mode); });
mb.addEventListener("click", function(){ setMode(mode === "focus" ? "break" : "focus"); });
paint();

/* ---- quiz ---- */
var quiz = [
  {q:"What is my strongest subject, honestly?", opts:["Physics","Biology","History","Economics"], correct:1},
  {q:"Which study method do I actually stick to?", opts:["Cramming the night before","The Pomodoro technique","Flashcards only","Studying only in class"], correct:1},
  {q:"What does my MBTI test say I am?", opts:["INTJ","ISFJ","ENFP","ESTP"], correct:2},
  {q:"Which two universities am I aiming for?", opts:["Harvard and Yale","Oxford and Cambridge","Sydney and Monash","NUS and NTU"], correct:2},
  {q:"What am I working toward long term?", opts:["Becoming a doctor","Becoming a full time photographer","Playing professional volleyball","Running a design studio"], correct:0}
];
var qi = 0, score = 0;
var qWrap = document.getElementById("quizBody");
function renderQuestion(){
  var item = quiz[qi];
  var html = '<div class="qcount">Question ' + (qi+1) + ' of ' + quiz.length + '</div>' +
             '<div class="qprompt">' + item.q + '</div>' +
             '<div class="qopts">';
  item.opts.forEach(function(opt, idx){
    html += '<button class="qopt" type="button" data-idx="' + idx + '">' + opt + '</button>';
  });
  html += '</div>';
  qWrap.innerHTML = html;
  var btns = qWrap.querySelectorAll(".qopt");
  btns.forEach(function(b){
    b.addEventListener("click", function(){
      var chosen = +b.dataset.idx;
      btns.forEach(function(o){ o.disabled = true; });
      if(chosen === item.correct){
        b.classList.add("correct"); score++;
      } else {
        b.classList.add("wrong");
        btns[item.correct].classList.add("correct");
      }
      var next = document.createElement("button");
      next.className = "btn qnext"; next.type = "button";
      next.textContent = (qi === quiz.length - 1) ? "See my score" : "Next question";
      next.addEventListener("click", function(){
        qi++;
        if(qi < quiz.length) renderQuestion(); else renderScore();
      });
      qWrap.appendChild(next);
    });
  });
}
function renderScore(){
  var line = score === quiz.length ? "Perfect score. You were paying attention."
           : score >= quiz.length/2 ? "Not bad at all."
           : "Might be time to read the page again.";
  qWrap.innerHTML =
    '<div class="qscore">' + score + ' out of ' + quiz.length + '</div>' +
    '<p>' + line + '</p>' +
    '<button class="btn qagain" id="qAgain" type="button">Try again</button>';
  document.getElementById("qAgain").addEventListener("click", function(){
    qi = 0; score = 0; renderQuestion();
  });
}
if(qWrap) renderQuestion();
})();
