const candidates = [
  {id:"nishikido",name:"錦戸亮",group:"NEWS / 関ジャニ∞",aliases:["にしきど","りょう"]},
  {id:"yamashita",name:"山下智久",group:"NEWS",aliases:["やました","ともひさ"]},
  {id:"masuda",name:"増田貴久",group:"NEWS",aliases:["ますだ","たかひさ"]},
  {id:"koyama",name:"小山慶一郎",group:"NEWS",aliases:["こやま"]},
  {id:"kato",name:"加藤シゲアキ",group:"NEWS",aliases:["かとう","しげあき"]},
  {id:"okura",name:"大倉忠義",group:"関ジャニ∞ / SUPER EIGHT",aliases:["おおくら","ただよし"]},
  {id:"yokoyama",name:"横山裕",group:"関ジャニ∞ / SUPER EIGHT",aliases:["よこやま","ゆう"]},
  {id:"kamenashi",name:"亀梨和也",group:"KAT-TUN",aliases:["かめなし","かずや"]},
  {id:"jin",name:"赤西仁",group:"KAT-TUN",aliases:["あかにし","じん"]},
  {id:"yuto",name:"中島裕翔",group:"Hey! Say! JUMP",aliases:["なかじま","ゆうと"]},
  {id:"yamada",name:"山田涼介",group:"Hey! Say! JUMP",aliases:["やまだ","りょうすけ"]},
  {id:"takaki",name:"髙木雄也",group:"Hey! Say! JUMP",aliases:["たかき","ゆうや"]},
  {id:"shigeoka",name:"重岡大毅",group:"WEST.",aliases:["しげおか","だいき"]},
  {id:"hamada",name:"濵田崇裕",group:"WEST.",aliases:["はまだ","たかひろ"]},
  {id:"fujii",name:"藤井流星",group:"WEST.",aliases:["ふじい","りゅうせい"]},
  {id:"kento",name:"中島健人",group:"timelesz / Sexy Zone",aliases:["なかじま","けんと"]},
  {id:"kikuchi",name:"菊池風磨",group:"timelesz / Sexy Zone",aliases:["きくち","ふうま"]},
  {id:"hirano",name:"平野紫耀",group:"King & Prince",aliases:["ひらの","しょう"]},
  {id:"nagase",name:"永瀬廉",group:"King & Prince",aliases:["ながせ","れん"]},
  {id:"meguro",name:"目黒蓮",group:"Snow Man",aliases:["めぐろ","れん"]},
  {id:"matsumura",name:"松村北斗",group:"SixTONES",aliases:["まつむら","ほくと"]},
  {id:"matsuda",name:"松田元太",group:"Travis Japan",aliases:["まつだ","げんた"]},
  {id:"michieda",name:"道枝駿佑",group:"なにわ男子",aliases:["みちえだ","しゅんすけ"]},
  {id:"suezawa",name:"末澤誠也",group:"Aぇ! group",aliases:["すえざわ","せいや"]},
  {id:"masakado",name:"正門良規",group:"Aぇ! group",aliases:["まさかど","よしのり"]},
  {id:"kojima",name:"小島健",group:"Aぇ! group",aliases:["こじま","けん"]},
  {id:"sano",name:"佐野晶哉",group:"Aぇ! group",aliases:["さの","まさや"]},
  {id:"richard",name:"草間リチャード敬太",group:"Aぇ! group（元メンバー）",aliases:["リチャード","りちゃーど","くさまりちゃーど"]},
  {id:"taisei",name:"福本大晴",group:"Aぇ! group（元メンバー）",aliases:["ふくもと","たいせい"]},
  {id:"jr-sample-1",name:"ジュニア候補①",group:"ジュニア",aliases:["じゅにあ"]},
  {id:"jr-sample-2",name:"ジュニア候補②",group:"ジュニア",aliases:["じゅにあ"]}
];

let selected = [];
let currentFilter = "すべて";
let draggedId = null;

const $ = s => document.querySelector(s);
const screens = [...document.querySelectorAll(".screen")];

function show(id){
  screens.forEach(s=>s.classList.toggle("active",s.id===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
function avatarHTML(person){
  // photos can be added later by setting person.image = "images/xxx.jpg"
  return person.image
    ? `<div class="avatar"><img src="${person.image}" alt=""></div>`
    : `<div class="avatar">${person.name.slice(0,2)}</div>`;
}
function groups(){
  return ["すべて",...new Set(candidates.map(x=>x.group))];
}
function renderFilters(){
  $("#filters").innerHTML = groups().map(g =>
    `<button class="filter ${g===currentFilter?"active":""}" data-group="${escapeHtml(g)}">${escapeHtml(g)}</button>`
  ).join("");
  document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{
    currentFilter=b.dataset.group; renderFilters(); renderCandidates();
  });
}
function matches(p,q){
  if(!q) return true;
  const hay=[p.name,p.group,...(p.aliases||[])].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}
function renderCandidates(){
  const q=$("#search").value.trim();
  const list=candidates.filter(p=>(currentFilter==="すべて"||p.group===currentFilter)&&matches(p,q));
  $("#candidateGrid").innerHTML=list.map(p=>{
    const isSelected=selected.includes(p.id);
    const unavailable=!isSelected && selected.length>=9;
    return `<button class="candidate ${isSelected?"selected":""}" data-id="${p.id}" ${unavailable?"disabled":""}>
      ${avatarHTML(p)}
      <div class="candidate-info"><div class="name">${escapeHtml(p.name)}</div><div class="group">${escapeHtml(p.group)}</div></div>
      ${isSelected?'<span class="check">✓</span>':""}
    </button>`;
  }).join("") || `<p class="note">該当する候補者がいません。</p>`;
  document.querySelectorAll(".candidate").forEach(b=>b.onclick=()=>toggleCandidate(b.dataset.id));
}
function renderSelected(){
  $("#selectedCount").textContent=selected.length;
  $("#selectedStrip").innerHTML=selected.map(id=>{
    const p=candidates.find(x=>x.id===id);
    return `<div class="selected-chip">${avatarHTML(p)}<div>${escapeHtml(p.name)}</div></div>`;
  }).join("");
  $("#toRankBtn").disabled=selected.length!==9;
  $("#toRankBtn").textContent=selected.length===9?"9人を選んで次へ":`あと${9-selected.length}人選んでね`;
}
function toggleCandidate(id){
  if(selected.includes(id)) selected=selected.filter(x=>x!==id);
  else if(selected.length<9) selected.push(id);
  renderSelected(); renderCandidates();
}
function renderRank(){
  $("#rankList").innerHTML=selected.map((id,i)=>{
    const p=candidates.find(x=>x.id===id);
    return `<li class="rank-item" draggable="true" data-id="${p.id}">
      <div class="rank-num">${i+1}</div>${avatarHTML(p)}
      <div class="candidate-info"><div class="name">${escapeHtml(p.name)}</div><div class="group">${escapeHtml(p.group)}</div></div>
      <div class="drag">☷</div>
    </li>`;
  }).join("");
  document.querySelectorAll(".rank-item").forEach(item=>{
    item.addEventListener("dragstart",()=>draggedId=item.dataset.id);
    item.addEventListener("dragover",e=>e.preventDefault());
    item.addEventListener("drop",()=>{
      const targetId=item.dataset.id;
      if(!draggedId||draggedId===targetId)return;
      const a=selected.indexOf(draggedId), b=selected.indexOf(targetId);
      selected.splice(a,1); selected.splice(b,0,draggedId); renderRank();
    });
  });
}
function renderResult(){
  $("#resultList").innerHTML=selected.map((id,i)=>{
    const p=candidates.find(x=>x.id===id);
    return `<div class="result-row">${`<div class="result-rank">${i+1}</div>`}${avatarHTML(p)}<div><div class="result-name">${escapeHtml(p.name)}</div><div class="result-group">${escapeHtml(p.group)}</div></div></div>`;
  }).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

$("#startBtn").onclick=()=>{show("select");renderFilters();renderSelected();renderCandidates();};
$("#search").addEventListener("input",renderCandidates);
$("#toRankBtn").onclick=()=>{show("rank");renderRank();};
$("#resultBtn").onclick=()=>{renderResult();show("result");};
$("#restartBtn").onclick=()=>{selected=[];currentFilter="すべて";$("#search").value="";show("select");renderFilters();renderSelected();renderCandidates();};
$("#saveBtn").onclick=async()=>{
  if(!window.html2canvas){alert("画像保存ライブラリの読み込みに失敗しました。");return;}
  const canvas=await html2canvas($("#resultCard"),{scale:2,backgroundColor:"#fff"});
  const a=document.createElement("a"); a.download="my-johnnys-sukigao9.png"; a.href=canvas.toDataURL("image/png"); a.click();
};
