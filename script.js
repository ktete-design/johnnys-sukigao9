const juniorCandidates = [
  // ACEes
  {id:"ukisho",name:"浮所飛貴",group:"ACEes",aliases:["うきしょ","ひだか"]},
  {id:"nasu",name:"那須雄登",group:"ACEes",aliases:["なす","ゆうと"]},
  {id:"sakuma",name:"作間龍斗",group:"ACEes",aliases:["さくま","りゅうと"]},
  {id:"fukada",name:"深田竜生",group:"ACEes",aliases:["ふかだ","りゅうせい"]},
  {id:"sato-ryuga",name:"佐藤龍我",group:"ACEes",aliases:["さとう","りゅうが"]},
  // KEY TO LIT
  {id:"iwasaki-taisho",name:"岩﨑大昇",group:"KEY TO LIT",aliases:["いわさき","たいしょう"]},
  {id:"inoue-mizuki",name:"井上瑞稀",group:"KEY TO LIT",aliases:["いのうえ","みずき"]},
  {id:"nakamura-reia",name:"中村嶺亜",group:"KEY TO LIT",aliases:["なかむら","れいあ"]},
  {id:"igari-soya",name:"猪狩蒼弥",group:"KEY TO LIT",aliases:["いがり","そうや"]},
  {id:"sasaki-taiko",name:"佐々木大光",group:"KEY TO LIT",aliases:["ささき","たいこう"]},
  // B&ZAI
  {id:"hashimoto-ryo",name:"橋本涼",group:"B&ZAI",aliases:["はしもと","りょう"]},
  {id:"yabana-rei",name:"矢花黎",group:"B&ZAI",aliases:["やばな","れい"]},
  {id:"konno-taiki",name:"今野大輝",group:"B&ZAI",aliases:["こんの","たいき"]},
  {id:"sugeta-rinne",name:"菅田琳寧",group:"B&ZAI",aliases:["すげた","りんね"]},
  {id:"motodaka-katsuki",name:"本髙克樹",group:"B&ZAI",aliases:["もとだか","かつき"]},
  {id:"suzuki-yujin",name:"鈴木悠仁",group:"B&ZAI",aliases:["すずき","ゆうじん"]},
  {id:"kawasaki-hoshiki",name:"川﨑星輝",group:"B&ZAI",aliases:["かわさき","ほしき"]},
  {id:"inaba-michiharu",name:"稲葉通陽",group:"B&ZAI",aliases:["いなば","みちはる"]},
  // Howzit
  {id:"oriyama-nao",name:"織山尚大",group:"Howzit",aliases:["おりやま","なお"]},
  {id:"nishimura-takuya",name:"西村拓哉",group:"Howzit",aliases:["にしむら","たくや"]},
  {id:"kuroda-koki",name:"黒田光輝",group:"Howzit",aliases:["くろだ","こうき"]},
  {id:"hiyama-kosei",name:"檜山光成",group:"Howzit",aliases:["ひやま","こうせい"]},
  {id:"vasayegh-wataru",name:"ヴァサイェガ渉",group:"Howzit",aliases:["ヴァサイェガ","わたる"]},
  // AmBitious
  {id:"mayumi-takeyuki",name:"真弓孟之",group:"AmBitious",aliases:["まゆみ","たけゆき"]},
  {id:"nagaoka-leo",name:"永岡蓮王",group:"AmBitious",aliases:["ながおか","れお"]},
  {id:"oka-yuri",name:"岡佑吏",group:"AmBitious",aliases:["おか","ゆうり"]},
  {id:"yamanaka-itsuki",name:"山中一輝",group:"AmBitious",aliases:["やまなか","いつき"]},
  {id:"inoue-ichita",name:"井上一太",group:"AmBitious",aliases:["いのうえ","いちた"]},
  {id:"ura-rikuto",name:"浦陸斗",group:"AmBitious",aliases:["うら","りくと"]},
  {id:"ouchi-rion",name:"大内リオン",group:"AmBitious",aliases:["おおうち","りおん"]},
  // Boys be
  {id:"ito-atsushi",name:"伊藤篤志",group:"Boys be",aliases:["いとう","あつし"]},
  {id:"ikegawa-yukiya",name:"池川侑希弥",group:"Boys be",aliases:["いけがわ","ゆきや"]},
  {id:"sumi-shintaro",name:"角紳太郎",group:"Boys be",aliases:["すみ","しんたろう"]},
  {id:"maruoka-kosei",name:"丸岡晃聖",group:"Boys be",aliases:["まるおか","こうせい"]},
  {id:"kitamura-jintaro",name:"北村仁太郎",group:"Boys be",aliases:["きたむら","じんたろう"]},
  {id:"nakagawa-seita",name:"中川惺太",group:"Boys be",aliases:["なかがわ","せいた"]},
  {id:"kamei-kairi",name:"亀井海聖",group:"Boys be",aliases:["かめい","かいり"]},
  {id:"sakimoto-kotaro",name:"嵜本孝太朗",group:"Boys be",aliases:["さきもと","こうたろう"]},
  {id:"iwakura-tsukasa",name:"岩倉司",group:"Boys be",aliases:["いわくら","つかさ"]},
  {id:"uegaaki-kosuke",name:"上垣廣祐",group:"Boys be",aliases:["うえがき","こうすけ"]},
  {id:"senda-aoi",name:"千田藍生",group:"Boys be",aliases:["せんだ","あおい"]}
];

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
  {id:"jr-sample-2",name:"ジュニア候補②",group:"ジュニア",aliases:["じゅにあ"]}
].concat(juniorCandidates);

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
