/* ===== poster palette ===== */
:root{
  --green-900:#0A3D25;
  --green-800:#0E4A2C;
  --green-700:#14603A;
  --yellow:#F6D682;
  --yellow-2:#F0C55F;
  --amber:#E79A33;
  --orange:#D4711F;
  --orange-deep:#B85A13;
  --pink:#E8548C;
  --cream:#FBF4E2;
  --tomato:#D8352B;
  --tomato-2:#A8231C;

  --bg:var(--cream);
  --ink:var(--green-900);
  --ink-soft:#3E6B54;
  --rule:rgba(10,61,37,.18);
  --fov-core:#FDF7E6;
  --fov-edge:#D8C27C;

  --f-display:"Baloo 2","Trebuchet MS",sans-serif;
  --f-body:"Nunito","Segoe UI",sans-serif;
}
@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --bg:var(--green-800); --ink:var(--cream); --ink-soft:#BFE0CD; --rule:rgba(251,244,226,.22);
    --fov-core:#123A28; --fov-edge:#061C13;
  }
}
:root[data-theme="dark"]{
  --bg:var(--green-800); --ink:var(--cream); --ink-soft:#BFE0CD; --rule:rgba(251,244,226,.22);
  --fov-core:#123A28; --fov-edge:#061C13;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;background:var(--bg);color:var(--ink);
  font-family:var(--f-body);font-size:17px;line-height:1.6;overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *{animation-duration:.001ms!important;transition-duration:.001ms!important}
}
h1,h2,h3{font-family:var(--f-display);font-weight:800;line-height:1.02;margin:0;letter-spacing:.01em}
p{margin:0 0 .9em}
:focus-visible{outline:3px solid var(--pink);outline-offset:3px;border-radius:6px}
.wrap{width:min(1120px,92vw);margin:0 auto}

/* ===== stroked headings (no shadow, outlined text instead) ===== */
.stroke-lg,.stroke-md,.stroke-sm{
  color:var(--yellow);
  -webkit-text-stroke:3px var(--orange-deep);
  paint-order:stroke fill;
}
.stroke-md{-webkit-text-stroke-width:2.4px}
.stroke-sm{-webkit-text-stroke-width:2px}

/* ===== nav ===== */
.bar{position:sticky;top:0;z-index:50;background:var(--bg);border-bottom:2px solid var(--rule)}
.bar .wrap{display:flex;align-items:center;gap:14px;height:60px}
.logo{font-family:var(--f-display);font-weight:800;font-size:20px;color:var(--ink)}
.bar nav{margin-left:auto;display:flex;gap:2px;flex-wrap:wrap}
.bar nav a{
  text-decoration:none;color:var(--ink-soft);font-weight:700;font-size:14px;
  padding:7px 12px;border-radius:999px
}
.bar nav a:hover{color:var(--ink);background:rgba(232,84,140,.16)}
.swap{
  font:inherit;font-weight:700;font-size:14px;cursor:pointer;color:var(--ink);
  background:transparent;border:2px solid var(--rule);border-radius:999px;padding:6px 14px;
  white-space:nowrap
}
.swap:hover{border-color:var(--pink);color:var(--pink)}
@media(max-width:780px){.bar nav a{padding:6px 8px;font-size:13px}.logo{font-size:17px}}

/* ===== hero ===== */
.hero{position:relative;padding:clamp(40px,7vw,72px) 0 20px;overflow:hidden}
.blob{position:absolute;width:280px;height:280px;border-radius:50%;
  background:var(--amber);top:-140px;left:-90px;opacity:.9}
.doodle{position:absolute;stroke:var(--yellow);stroke-width:11;fill:none;
  stroke-linecap:round;stroke-linejoin:round;pointer-events:none}
.d1{top:2px;left:220px;width:190px;opacity:.95}
.d2{top:34px;right:2%;width:220px}
@media(max-width:900px){.doodle{display:none}.blob{width:180px;height:180px;top:-100px;left:-70px}}

.hero .wrap{position:relative;z-index:2}
.eyebrow{font-size:clamp(20px,3.6vw,30px);margin-left:4px}
.title{
  font-size:clamp(46px,10vw,96px);line-height:.9;
  margin:2px 0 22px;letter-spacing:.005em;text-transform:uppercase
}

/* field of view, the microscope circle */
.fov-holder{position:relative;display:grid;place-items:center}
.fov{
  position:relative;width:min(440px,84vw);aspect-ratio:1;border-radius:50%;
  background:radial-gradient(circle at 50% 42%, var(--fov-core), var(--fov-edge) 78%);
  overflow:hidden;border:7px solid var(--yellow);
  box-shadow:0 0 0 4px var(--orange-deep), 10px 12px 0 rgba(184,90,19,.55);
}
.fov canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.fov::after{
  content:"";position:absolute;inset:0;border-radius:50%;
  box-shadow:inset 0 0 70px 26px color-mix(in srgb, var(--fov-edge) 80%, transparent);
  pointer-events:none
}
.fov-inner{
  position:absolute;inset:0;display:grid;place-content:center;text-align:center;
  padding:14%;z-index:2;filter:blur(var(--blur,14px));opacity:var(--sharp,.22);
  transition:filter .12s linear, opacity .12s linear;
}
.greet{font-weight:700;color:var(--ink-soft);font-size:clamp(12px,2.2vw,14px);margin-bottom:8px;
  text-transform:uppercase;letter-spacing:.06em}
.namewrap{display:flex;align-items:baseline;justify-content:center;gap:8px;flex-wrap:wrap}
.namewrap label{font-weight:700;color:var(--ink-soft);font-size:14px}
#nameField{
  font-family:var(--f-display);font-weight:800;font-size:clamp(20px,4.4vw,32px);
  color:var(--ink);background:transparent;border:none;border-bottom:3px dashed var(--pink);
  padding:0 4px 2px;max-width:80%;width:14ch;outline:none;text-align:center
}
.roles{margin-top:12px;font-size:clamp(13px,2.4vw,15.5px);color:var(--ink-soft);font-weight:700}
.roles b{color:var(--green-700)}
:root[data-theme="dark"] .roles b{color:var(--yellow)}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]) .roles b{color:var(--yellow)} }

.dial{width:min(440px,84vw);margin:22px auto 0;display:flex;align-items:center;gap:12px}
.dial label{font-size:13px;font-weight:700;color:var(--ink-soft);white-space:nowrap}
input[type=range]{-webkit-appearance:none;appearance:none;flex:1;width:100%;height:26px;background:transparent;cursor:pointer}
input[type=range]::-webkit-slider-runnable-track{height:8px;border-radius:999px;background:var(--orange)}
input[type=range]::-moz-range-track{height:8px;border-radius:999px;background:var(--orange)}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;border-radius:50%;
  margin-top:-9px;background:var(--pink);border:4px solid var(--cream);box-shadow:0 0 0 2px var(--orange-deep)}
input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--pink);
  border:4px solid var(--cream);box-shadow:0 0 0 2px var(--orange-deep)}
.readout{font-size:13px;font-weight:700;color:var(--ink-soft);width:5.5ch;text-align:right;font-variant-numeric:tabular-nums}

.intro{max-width:52ch;margin:26px auto 0;text-align:center;color:var(--ink-soft);font-weight:600}
.intro p{margin:0 auto .5em}

/* ===== timeline strip ===== */
.strip{position:relative;padding:36px 0 10px}
.strip .line{position:absolute;left:0;right:0;top:50px;height:3px;background:var(--yellow);opacity:.75}
.stops{position:relative;display:flex;justify-content:space-between;gap:8px}
.stop{
  background:none;border:none;cursor:pointer;font:inherit;color:var(--ink);
  display:flex;flex-direction:column;align-items:center;gap:10px;flex:1;padding:0
}
.stop i{width:34px;height:34px;border-radius:50%;background:var(--yellow-2);
  border:4px solid var(--pink);display:block;transition:transform .2s}
.stop:hover i,.stop:focus-visible i{transform:scale(1.18)}
.stop b{font-family:var(--f-display);font-weight:700;font-size:14px;text-align:center;line-height:1.15}
@media(max-width:620px){.stop b{font-size:12px}.stop i{width:26px;height:26px;border-width:3px}}

/* ===== sections and window cards ===== */
section{padding:clamp(44px,6vw,78px) 0}
.sec-head{margin-bottom:26px;max-width:58ch}
.sec-head h2{font-size:clamp(28px,5vw,44px);text-transform:uppercase}
.sec-head p{color:var(--ink-soft);margin-top:14px;font-weight:600}

.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px}
.win{
  position:relative;text-align:left;font:inherit;cursor:pointer;padding:0;
  background:var(--yellow);border-radius:16px;overflow:hidden;color:var(--green-900);
  box-shadow:9px 9px 0 var(--orange-deep);
  transition:transform .18s ease, box-shadow .18s ease
}
.win:hover{transform:translate(-3px,-3px);box-shadow:12px 12px 0 var(--orange-deep)}
.win:active{transform:translate(2px,2px);box-shadow:6px 6px 0 var(--orange-deep)}
.chrome{background:var(--amber);height:38px;display:flex;align-items:center;gap:8px;padding:0 16px}
.chrome i.dot3{width:13px;height:13px;border-radius:50%;border:2.5px solid var(--orange-deep);display:block}
.chrome .tick{width:10px;height:10px;border-radius:3px;margin-left:4px}
.chrome .label{font-size:12px;font-weight:700;color:#123F29;text-transform:lowercase;margin-left:auto;opacity:.85}
.win .in{padding:20px 22px 22px}
.win h3{font-size:22px;text-transform:uppercase;margin-bottom:12px;color:var(--green-900)}
.win ul{margin:0;padding-left:20px;display:grid;gap:7px}
.win li{font-size:15.5px;font-weight:600;color:#123F29}
.extra{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease}
.win[aria-expanded="true"] .extra{grid-template-rows:1fr}
.extra>div{overflow:hidden}
.extra p{margin:14px 0 0;font-size:15px;color:#2C5240;border-top:2px dashed rgba(10,61,37,.25);padding-top:12px}
.tapme{margin-top:14px;font-family:var(--f-display);font-weight:700;font-size:14px;color:var(--orange-deep)}

/* ===== strengths ===== */
.bars{display:grid;gap:20px;max-width:720px}
.bar-top{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin-bottom:6px}
.bar-top h3{font-size:20px}
.bar-top em{font-style:normal;color:var(--ink-soft);font-size:14px;font-weight:700}
.track{height:18px;border-radius:999px;background:rgba(246,214,130,.28);border:2px solid var(--yellow);overflow:hidden}
.fill{height:100%;width:0;border-radius:999px;background:var(--c);transition:width 1.1s cubic-bezier(.2,.8,.2,1)}

/* ===== battery / personality ===== */
.duo{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
@media(max-width:820px){.duo{grid-template-columns:1fr}}
.panel{background:var(--yellow);color:var(--green-900);border-radius:16px;padding:24px;box-shadow:9px 9px 0 var(--orange-deep)}
.mbti{font-family:var(--f-display);font-weight:800;font-size:clamp(50px,10vw,78px);line-height:1;display:flex;gap:6px}
.mbti span:nth-child(1){color:var(--tomato)}
.mbti span:nth-child(2){color:var(--orange)}
.mbti span:nth-child(3){color:var(--pink)}
.mbti span:nth-child(4){color:var(--green-700)}
.chips{list-style:none;margin:16px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.chips li{border:2.5px solid var(--orange-deep);border-radius:999px;padding:4px 13px;font-size:14px;font-weight:700}
.ends{display:flex;justify-content:space-between;font-size:14px;font-weight:700;margin-bottom:4px}
.read{margin-top:14px;min-height:5.2em;font-size:15.5px;font-weight:600}
.read b{font-family:var(--f-display);font-size:20px;display:block;margin-bottom:2px}

/* ===== animated "gif" cards (ENFP energy + doctor loop) ===== */
.gifrow{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;margin-top:26px}
.gifcard{
  position:relative;background:var(--yellow);border-radius:16px;padding:22px;text-align:center;
  box-shadow:9px 9px 0 var(--orange-deep);color:var(--green-900)
}
.gif-badge{
  position:absolute;top:12px;right:12px;background:var(--tomato);color:#fff;
  font-family:var(--f-display);font-weight:800;font-size:11px;letter-spacing:.05em;
  padding:3px 9px;border-radius:6px;border:2px solid var(--tomato-2)
}
.gifcard p{margin:14px 0 0;font-weight:700;font-size:15px}
.gifcard svg,.gifcard .enfp-anim{margin:0 auto}

.wave-loop{transform-origin:76% 48%;animation:waveLoop 2.4s ease-in-out infinite}
@keyframes waveLoop{0%,100%{transform:rotate(0)}20%{transform:rotate(-16deg)}40%{transform:rotate(6deg)}60%{transform:rotate(-12deg)}}

.enfp-anim{position:relative;width:170px;height:170px}
.enfp-anim .core{
  position:absolute;inset:0;display:grid;place-content:center;
  font-family:var(--f-display);font-weight:800;font-size:26px;color:var(--tomato-2);
  border:4px solid var(--tomato-2);border-radius:50%;width:88px;height:88px;margin:auto;
  background:var(--cream)
}
.spark{position:absolute;border-radius:50%;animation:sparkFloat 1.9s ease-in-out infinite}
@keyframes sparkFloat{0%,100%{transform:translateY(0) scale(1);opacity:.55}50%{transform:translateY(-12px) scale(1.25);opacity:1}}

/* ===== tomato timer ===== */
.timer{display:grid;grid-template-columns:280px 1fr;gap:38px;align-items:center}
@media(max-width:780px){.timer{grid-template-columns:1fr;justify-items:center;text-align:left}}
.tomato{width:min(280px,72vw);height:auto;display:block}
.pointer{transform-origin:100px 106px;transition:transform .5s linear}
.face-txt{font-family:var(--f-display);font-weight:800;font-size:26px;fill:var(--tomato-2)}
.btns{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.btn{
  font-family:var(--f-display);font-weight:700;font-size:16px;cursor:pointer;
  padding:9px 24px;border-radius:999px;border:3px solid var(--orange-deep);
  background:var(--yellow);color:var(--green-900);box-shadow:4px 4px 0 var(--orange-deep);
  transition:transform .12s, box-shadow .12s
}
.btn:hover{transform:translate(-1px,-1px);box-shadow:6px 6px 0 var(--orange-deep)}
.btn:active{transform:translate(3px,3px);box-shadow:1px 1px 0 var(--orange-deep)}
.btn.go{background:var(--tomato);color:#fff;border-color:var(--tomato-2);box-shadow:4px 4px 0 var(--tomato-2)}
.btn.go:hover{box-shadow:6px 6px 0 var(--tomato-2)}
.count{color:var(--ink-soft);font-weight:700;font-size:15px}

/* ===== path ===== */
.path{list-style:none;margin:0;padding:0;counter-reset:s;display:grid;gap:18px}
.path li{counter-increment:s;position:relative;padding:20px 22px 20px 78px;
  background:var(--yellow);color:var(--green-900);border-radius:16px;box-shadow:8px 8px 0 var(--orange-deep)}
.path li::before{
  content:counter(s);position:absolute;left:20px;top:20px;width:42px;height:42px;border-radius:50%;
  display:grid;place-content:center;font-family:var(--f-display);font-weight:800;font-size:19px;
  color:var(--cream);background:var(--c,var(--pink));border:3px solid var(--orange-deep)
}
.path h3{font-size:21px;text-transform:uppercase;margin-bottom:4px}
.path p{margin:0;font-size:15.5px;font-weight:600;color:#2C5240}
.unis{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
.uni{border:3px dashed var(--orange-deep);border-radius:12px;padding:7px 15px;font-weight:700;font-size:14.5px}

.dna{display:block;margin:34px auto 0;width:52px;height:120px}
.rung{stroke:var(--green-700);stroke-width:5;stroke-linecap:round;transform-origin:center;animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}

/* ===== quiz ===== */
.quizcard{
  max-width:640px;background:var(--yellow);color:var(--green-900);border-radius:16px;
  overflow:hidden;box-shadow:9px 9px 0 var(--orange-deep)
}
.quizcard .in{padding:24px 26px 26px}
.qcount{font-weight:700;font-size:13.5px;color:#123F29;opacity:.8;margin-bottom:8px}
.qprompt{font-family:var(--f-display);font-weight:700;font-size:20px;margin-bottom:16px}
.qopts{display:grid;gap:10px}
.qopt{
  font:inherit;font-weight:700;font-size:15px;text-align:left;cursor:pointer;
  padding:11px 16px;border-radius:12px;border:2.5px solid var(--orange-deep);
  background:var(--cream);color:var(--green-900);transition:transform .12s
}
.qopt:hover{transform:translateX(3px)}
.qopt.correct{background:var(--green-700);color:#fff;border-color:var(--green-900)}
.qopt.wrong{background:var(--tomato);color:#fff;border-color:var(--tomato-2)}
.qopt[disabled]{cursor:default}
.qnext{margin-top:16px}
.qscore{font-family:var(--f-display);font-weight:800;font-size:26px;margin-bottom:8px}
.qagain{margin-top:14px}

footer{padding:56px 0 76px;border-top:3px solid var(--rule);color:var(--ink-soft)}
footer b{font-size:24px;display:block;margin-bottom:10px}
footer p{max-width:50ch;font-weight:600}
