const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const progress=$("#progress"); window.addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"});
$("#menuBtn").onclick=()=>$("#nav").classList.toggle("open"); $$("#nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");$("#themeBtn").textContent=document.body.classList.contains("light")?"☀":"☾";localStorage.setItem("neaox-theme",document.body.classList.contains("light")?"light":"dark")};
if(localStorage.getItem("neaox-theme")==="light"){document.body.classList.add("light");$("#themeBtn").textContent="☀";}
const lessons={
 basics:{title:"Trading Basics",tag:"01 / START HERE",text:"Start by understanding what a market is, how charts represent price, and how a trade is planned before it is placed.",points:["Learn the difference between asset classes and market sessions.","Understand candles, timeframes, bid/ask and basic order types.","Create a simple pre-trade routine before studying strategies."]},
 technical:{title:"Technical Analysis",tag:"02 / CORE SKILL",text:"Technical analysis is a framework for studying price behaviour and market structure—not a guarantee of what happens next.",points:["Read candle bodies, wicks and basic patterns.","Mark meaningful support and resistance zones.","Study trend, range and market-structure concepts."]},
 risk:{title:"Risk Management",tag:"03 / PROTECT CAPITAL",text:"Risk management determines how much of your account is exposed when an idea is wrong.",points:["Define risk before entry instead of after a loss.","Understand position sizing and risk/reward.","Track drawdown and avoid trying to win losses back impulsively."]},
 psych:{title:"Trading Psychology",tag:"04 / MENTAL GAME",text:"A repeatable process requires discipline, patience and the ability to accept uncertainty.",points:["Use rules to reduce emotional decisions.","Accept that good setups can still lose.","Keep a journal and review decisions objectively."]}
};
$$(".learn-btn").forEach(b=>b.onclick=()=>{const d=lessons[b.closest(".course").dataset.course];$("#modalEyebrow").textContent=d.tag;$("#modalTitle").textContent=d.title;$("#modalText").textContent=d.text;$("#modalPoints").innerHTML=d.points.map(x=>`<div>${x}</div>`).join("");$("#modal").classList.add("show")});
$("#close").onclick=$("#modalDone").onclick=()=>$("#modal").classList.remove("show");$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("show")};
$("#search").addEventListener("input",e=>{const q=e.target.value.toLowerCase();$$(".resource").forEach(r=>r.style.display=r.textContent.toLowerCase().includes(q)?"flex":"none")});
