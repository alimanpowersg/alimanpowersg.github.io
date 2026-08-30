const defaultJobs=[
 {title:"Construction Worker",type:"Full Time",location:"Singapore",desc:"General construction manpower opportunities."},
 {title:"General Worker",type:"Full Time",location:"Singapore",desc:"Operations and site support roles."},
 {title:"Cleaner",type:"Full Time",location:"Singapore",desc:"Cleaning and facilities support opportunities."},
 {title:"Driver",type:"Full Time",location:"Singapore",desc:"Driver roles subject to employer requirements."},
 {title:"Electrician",type:"Skilled",location:"Singapore",desc:"Electrical trade opportunities."},
 {title:"Warehouse & Logistics",type:"Full Time",location:"Singapore",desc:"Warehouse and logistics support roles."}
];
function getJobs(){try{return JSON.parse(localStorage.getItem("alimanpowersg_jobs"))||defaultJobs}catch(e){return defaultJobs}}
function renderJobs(){const box=document.getElementById("jobList");if(!box)return;const jobs=getJobs();box.innerHTML=jobs.map((j,i)=>`<article class="job"><h3>${esc(j.title)}</h3><p>${esc(j.type)} • ${esc(j.location)}</p><p>${esc(j.desc||"Apply to learn more.")}</p><a href="https://wa.me/6581921457?text=${encodeURIComponent("Hello Alimanpowersg, I am interested in the "+j.title+" position.")}" target="_blank">Apply via WhatsApp →</a></article>`).join("")}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
renderJobs();
document.getElementById("requestForm")?.addEventListener("submit",e=>{e.preventDefault();let d=new FormData(e.target);let text=`Hello Alimanpowersg,%0A%0ACompany: ${encodeURIComponent(d.get("company"))}%0AContact: ${encodeURIComponent(d.get("contact"))}%0APhone: ${encodeURIComponent(d.get("phone"))}%0ARole: ${encodeURIComponent(d.get("role"))}%0AWorkers: ${encodeURIComponent(d.get("qty"))}%0ANotes: ${encodeURIComponent(d.get("notes"))}`;window.open("https://wa.me/6581921457?text="+text,"_blank")});
document.querySelector(".hamb")?.addEventListener("click",()=>{let n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="78px";n.style.left="0";n.style.right="0";n.style.padding="20px";n.style.background="#fff";n.style.flexDirection="column"});

document.querySelectorAll("section:not(.hero), .service-grid article, .job").forEach(el=>el.classList.add("reveal"));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");revealObserver.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

function getProjects(){try{return JSON.parse(localStorage.getItem("alimanpowersg_projects"))||[]}catch(e){return[]}}
function renderGallery(){const box=document.getElementById("galleryList");if(!box)return;const ps=getProjects();if(!ps.length){box.innerHTML='<article class="gallery-card"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" alt="Project"><div><h3>Project photos coming soon</h3><p>Add your own project photos from the Admin Panel.</p></div></article>';return}box.innerHTML=ps.map(p=>`<article class="gallery-card"><img src="${p.image}" alt="${esc(p.title)}"><div><h3>${esc(p.title)}</h3><p>${esc(p.desc||"Project showcase")}</p></div></article>`).join("")}
renderGallery();
