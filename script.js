const defaultJobs=[
 {title:"Construction Worker",type:"Full Time",location:"Singapore",desc:"General construction manpower opportunities."},
 {title:"General Worker",type:"Full Time",location:"Singapore",desc:"Operations and site support roles."},
 {title:"Cleaner",type:"Full Time",location:"Singapore",desc:"Cleaning and facilities support opportunities."},
 {title:"Driver",type:"Full Time",location:"Singapore",desc:"Driver roles subject to employer requirements."},
 {title:"Electrician",type:"Skilled",location:"Singapore",desc:"Electrical trade opportunities."},
 {title:"Warehouse & Logistics",type:"Full Time",location:"Singapore",desc:"Warehouse and logistics support roles."}
];
function getJobs(){try{return JSON.parse(localStorage.getItem("alimanpowersg_jobs"))||defaultJobs}catch(e){return defaultJobs}}
function renderJobs(){const box=document.getElementById("jobList");if(!box)return;const jobs=getJobs();box.innerHTML=jobs.map((j,i)=>{const subject=encodeURIComponent("Job Application - "+j.title);const body=encodeURIComponent("Hello Alimanpowersg,\n\nI am interested in the "+j.title+" position. Please find my CV/details attached or let me know the next steps.\n\nThank you.");return `<article class="job"><h3>${esc(j.title)}</h3><p>${esc(j.type)} • ${esc(j.location)}</p><p>${esc(j.desc||"Apply to learn more.")}</p><div class="job-actions"><a href="https://wa.me/6585455992?text=${encodeURIComponent("Hello Alimanpowersg, I am interested in the "+j.title+" position.")}" target="_blank" rel="noopener">WA Apply →</a><a href="mailto:asknderali892@gmail.com?subject=${subject}&body=${body}">Email Apply →</a></div></article>`}).join("")}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
renderJobs();
document.getElementById("requestForm")?.addEventListener("submit",e=>{e.preventDefault();let d=new FormData(e.target);let text=`Hello Alimanpowersg,%0A%0ACompany: ${encodeURIComponent(d.get("company"))}%0AContact: ${encodeURIComponent(d.get("contact"))}%0APhone: ${encodeURIComponent(d.get("phone"))}%0ARole: ${encodeURIComponent(d.get("role"))}%0AWorkers: ${encodeURIComponent(d.get("qty"))}%0ANotes: ${encodeURIComponent(d.get("notes"))}`;window.open("https://wa.me/6585455992?text="+text,"_blank")});
document.querySelector(".hamb")?.addEventListener("click",()=>{let n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="78px";n.style.left="0";n.style.right="0";n.style.padding="20px";n.style.background="#fff";n.style.flexDirection="column"});

document.querySelectorAll("section:not(.hero), .service-grid article, .job").forEach(el=>el.classList.add("reveal"));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");revealObserver.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

function getProjects(){try{return JSON.parse(localStorage.getItem("alimanpowersg_projects"))||[]}catch(e){return[]}}
function renderGallery(){const box=document.getElementById("galleryList");if(!box)return;if(box.querySelector(".built-in-gallery")||box.querySelector(".gallery-item"))return;const ps=getProjects();if(!ps.length){box.innerHTML='<article class="gallery-card gallery-empty"><div><span class="empty-mark">✦</span><h3>Selected projects</h3><p>Explore our renovation, fit-out and building capabilities above.</p></div></article>';return}box.innerHTML=ps.map(p=>`<article class="gallery-card"><img src="${p.image}" alt="${esc(p.title)}"><div><h3>${esc(p.title)}</h3><p>${esc(p.desc||"Project showcase")}</p></div></article>`).join("")}
renderGallery();
/*newDesignReveal*/(function(){const els=document.querySelectorAll("section,.service-grid article,.expertise-grid article,.gallery-card,.numbers>div");els.forEach((el,i)=>{el.classList.add("reveal");el.style.transitionDelay=(Math.min(i%6,5)*70)+"ms"});const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});els.forEach(e=>io.observe(e))})();
// Project photo lightbox
(function(){const lb=document.getElementById('galleryLightbox'), img=document.getElementById('lightboxImg');if(!lb||!img)return;document.querySelectorAll('.gallery-image').forEach(b=>b.addEventListener('click',()=>{img.src=b.dataset.full;lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));const close=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow='';setTimeout(()=>img.src='',250)};lb.addEventListener('click',e=>{if(e.target===lb)close()});lb.querySelector('.lightbox-close').addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('open'))close()})})();
