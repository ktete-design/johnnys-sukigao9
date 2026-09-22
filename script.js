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
  {id:"kimura",name:"木村拓哉",group:"SMAP",aliases:['木村拓哉']},
  {id:"nakai",name:"中居正広",group:"SMAP",aliases:['中居正広']},
  {id:"inagaki",name:"稲垣吾郎",group:"SMAP",aliases:['稲垣吾郎']},
  {id:"kusanagi",name:"草彅剛",group:"SMAP",aliases:['草彅剛']},
  {id:"katori",name:"香取慎吾",group:"SMAP",aliases:['香取慎吾']},
  {id:"mori-katsu",name:"森且行",group:"SMAP",aliases:['森且行']},
  {id:"nagase",name:"長瀬智也",group:"TOKIO",aliases:['長瀬智也']},
  {id:"matsuoka",name:"松岡昌宏",group:"TOKIO",aliases:['松岡昌宏']},
  {id:"yamaguchi",name:"山口達也",group:"TOKIO",aliases:['山口達也']},
  {id:"kokubun",name:"国分太一",group:"TOKIO",aliases:['国分太一']},
  {id:"jojima",name:"城島茂",group:"TOKIO",aliases:['城島茂']},
  {id:"kojima-kei",name:"小島啓",group:"TOKIO",aliases:['小島啓']},
  {id:"domoto-koichi",name:"堂本光一",group:"KinKi Kids / DOMOTO",aliases:['堂本光一']},
  {id:"domoto-tsuyoshi",name:"堂本剛",group:"KinKi Kids / DOMOTO",aliases:['堂本剛']},
  {id:"okada",name:"岡田准一",group:"V6",aliases:['岡田准一']},
  {id:"morita",name:"森田剛",group:"V6",aliases:['森田剛']},
  {id:"miyake",name:"三宅健",group:"V6",aliases:['三宅健']},
  {id:"sakamoto",name:"坂本昌行",group:"V6",aliases:['坂本昌行']},
  {id:"nagano",name:"長野博",group:"V6",aliases:['長野博']},
  {id:"innohara",name:"井ノ原快彦",group:"V6",aliases:['井ノ原快彦', '井', 'ノ', '原快彦']},
  {id:"matsujun",name:"松本潤",group:"嵐",aliases:['松本潤']},
  {id:"ninomiya",name:"二宮和也",group:"嵐",aliases:['二宮和也']},
  {id:"sakurai",name:"櫻井翔",group:"嵐",aliases:['櫻井翔']},
  {id:"aiba",name:"相葉雅紀",group:"嵐",aliases:['相葉雅紀']},
  {id:"ohno",name:"大野智",group:"嵐",aliases:['大野智']},
  {id:"yamashita",name:"山下智久",group:"NEWS",aliases:['山下智久']},
  {id:"nishikido",name:"錦戸亮",group:"NEWS / SUPER EIGHT",aliases:['錦戸亮']},
  {id:"masuda",name:"増田貴久",group:"NEWS",aliases:['増田貴久']},
  {id:"koyama",name:"小山慶一郎",group:"NEWS",aliases:['小山慶一郎']},
  {id:"kato",name:"加藤シゲアキ",group:"NEWS",aliases:['加藤シゲアキ', '加藤', 'シゲアキ']},
  {id:"tego",name:"手越祐也",group:"NEWS",aliases:['手越祐也']},
  {id:"uchi",name:"内博貴",group:"NEWS / SUPER EIGHT",aliases:['内博貴']},
  {id:"kusano",name:"草野博紀",group:"NEWS",aliases:['草野博紀']},
  {id:"moriuchi",name:"森内貴寛",group:"NEWS",aliases:['森内貴寛']},
  {id:"okura",name:"大倉忠義",group:"SUPER EIGHT",aliases:['大倉忠義']},
  {id:"yokoyama",name:"横山裕",group:"SUPER EIGHT",aliases:['横山裕']},
  {id:"murakami",name:"村上信五",group:"SUPER EIGHT",aliases:['村上信五']},
  {id:"maruyama",name:"丸山隆平",group:"SUPER EIGHT",aliases:['丸山隆平']},
  {id:"yasuda",name:"安田章大",group:"SUPER EIGHT",aliases:['安田章大']},
  {id:"shibutani",name:"渋谷すばる",group:"SUPER EIGHT",aliases:['渋谷すばる', '渋谷', 'すばる']},
  {id:"kamenashi",name:"亀梨和也",group:"KAT-TUN",aliases:['亀梨和也']},
  {id:"jin",name:"赤西仁",group:"KAT-TUN",aliases:['赤西仁']},
  {id:"ueda",name:"上田竜也",group:"KAT-TUN",aliases:['上田竜也']},
  {id:"tanaka-koki",name:"田中聖",group:"KAT-TUN",aliases:['田中聖']},
  {id:"taguchi",name:"田口淳之介",group:"KAT-TUN",aliases:['田口淳之介']},
  {id:"nakamaru",name:"中丸雄一",group:"KAT-TUN",aliases:['中丸雄一']},
  {id:"yamada",name:"山田涼介",group:"Hey! Say! JUMP",aliases:['山田涼介']},
  {id:"chinen",name:"知念侑李",group:"Hey! Say! JUMP",aliases:['知念侑李']},
  {id:"yuto",name:"中島裕翔",group:"Hey! Say! JUMP",aliases:['中島裕翔']},
  {id:"arioka",name:"有岡大貴",group:"Hey! Say! JUMP",aliases:['有岡大貴']},
  {id:"inoo",name:"伊野尾慧",group:"Hey! Say! JUMP",aliases:['伊野尾慧']},
  {id:"yabu",name:"薮宏太",group:"Hey! Say! JUMP",aliases:['薮宏太']},
  {id:"yaotome",name:"八乙女光",group:"Hey! Say! JUMP",aliases:['八乙女光']},
  {id:"okamoto",name:"岡本圭人",group:"Hey! Say! JUMP",aliases:['岡本圭人']},
  {id:"morimoto-ryutaro",name:"森本龍太郎",group:"Hey! Say! JUMP",aliases:['森本龍太郎']},
  {id:"takaki",name:"髙木雄也",group:"Hey! Say! JUMP",aliases:['髙木雄也']},
  {id:"tamamori",name:"玉森裕太",group:"Kis-My-Ft2",aliases:['玉森裕太']},
  {id:"fujigaya",name:"藤ヶ谷太輔",group:"Kis-My-Ft2",aliases:['藤ヶ谷太輔']},
  {id:"kitayama",name:"北山宏光",group:"Kis-My-Ft2",aliases:['北山宏光']},
  {id:"miyata",name:"宮田俊哉",group:"Kis-My-Ft2",aliases:['宮田俊哉']},
  {id:"yokoo",name:"横尾渉",group:"Kis-My-Ft2",aliases:['横尾渉']},
  {id:"senga",name:"千賀健永",group:"Kis-My-Ft2",aliases:['千賀健永']},
  {id:"nikaido",name:"二階堂高嗣",group:"Kis-My-Ft2",aliases:['二階堂高嗣']},
  {id:"shori",name:"佐藤勝利",group:"timelesz / Sexy Zone",aliases:['佐藤勝利']},
  {id:"kento",name:"中島健人",group:"timelesz / Sexy Zone",aliases:['中島健人']},
  {id:"kikuchi",name:"菊池風磨",group:"timelesz / Sexy Zone",aliases:['菊池風磨']},
  {id:"matsushima",name:"松島聡",group:"timelesz / Sexy Zone",aliases:['松島聡']},
  {id:"marius",name:"マリウス葉",group:"timelesz / Sexy Zone",aliases:['マリウス葉', 'マリウス', '葉']},
  {id:"teranishi",name:"寺西拓人",group:"timelesz",aliases:['寺西拓人']},
  {id:"hara",name:"原嘉孝",group:"timelesz",aliases:['原嘉孝']},
  {id:"hashimoto-masaki",name:"橋本将生",group:"timelesz",aliases:['橋本将生']},
  {id:"inomatashuto",name:"猪俣周杜",group:"timelesz",aliases:['猪俣周杜']},
  {id:"shinozuka",name:"篠塚大輝",group:"timelesz",aliases:['篠塚大輝']},
  {id:"hirano",name:"平野紫耀",group:"King & Prince",aliases:['平野紫耀']},
  {id:"nagase",name:"永瀬廉",group:"King & Prince",aliases:['永瀬廉']},
  {id:"kishiyuta",name:"岸優太",group:"King & Prince",aliases:['岸優太']},
  {id:"jinguji",name:"神宮寺勇太",group:"King & Prince",aliases:['神宮寺勇太']},
  {id:"takahashi-kaito",name:"髙橋海人",group:"King & Prince",aliases:['髙橋海人']},
  {id:"iwahashi",name:"岩橋玄樹",group:"King & Prince",aliases:['岩橋玄樹']},
  {id:"matsumura",name:"松村北斗",group:"SixTONES",aliases:['松村北斗']},
  {id:"kyomoto",name:"京本大我",group:"SixTONES",aliases:['京本大我']},
  {id:"jesse",name:"ジェシー",group:"SixTONES",aliases:['ジェシー']},
  {id:"tanaka-juri",name:"田中樹",group:"SixTONES",aliases:['田中樹']},
  {id:"morimoto-shintaro",name:"森本慎太郎",group:"SixTONES",aliases:['森本慎太郎']},
  {id:"kochi",name:"髙地優吾",group:"SixTONES",aliases:['髙地優吾']},
  {id:"meguro",name:"目黒蓮",group:"Snow Man",aliases:['目黒蓮']},
  {id:"sakuma",name:"佐久間大介",group:"Snow Man",aliases:['佐久間大介']},
  {id:"abe",name:"阿部亮平",group:"Snow Man",aliases:['阿部亮平']},
  {id:"watanabe",name:"渡辺翔太",group:"Snow Man",aliases:['渡辺翔太']},
  {id:"raul",name:"ラウール",group:"Snow Man",aliases:['ラウール']},
  {id:"iwamoto",name:"岩本照",group:"Snow Man",aliases:['岩本照']},
  {id:"miyadate",name:"宮舘涼太",group:"Snow Man",aliases:['宮舘涼太']},
  {id:"fukazawa",name:"深澤辰哉",group:"Snow Man",aliases:['深澤辰哉']},
  {id:"mukai",name:"向井康二",group:"Snow Man",aliases:['向井康二']},
  {id:"michieda",name:"道枝駿佑",group:"なにわ男子",aliases:['道枝駿佑']},
  {id:"onishi",name:"大西流星",group:"なにわ男子",aliases:['大西流星']},
  {id:"ohashi",name:"大橋和也",group:"なにわ男子",aliases:['大橋和也']},
  {id:"nishihata",name:"西畑大吾",group:"なにわ男子",aliases:['西畑大吾']},
  {id:"takahashi-kyohei",name:"高橋恭平",group:"なにわ男子",aliases:['高橋恭平']},
  {id:"nagao",name:"長尾謙杜",group:"なにわ男子",aliases:['長尾謙杜']},
  {id:"fujiwara",name:"藤原丈一郎",group:"なにわ男子",aliases:['藤原丈一郎']},
  {id:"miyachika",name:"宮近海斗",group:"Travis Japan",aliases:['宮近海斗']},
  {id:"matsuda",name:"松田元太",group:"Travis Japan",aliases:['松田元太']},
  {id:"matsukura",name:"松倉海斗",group:"Travis Japan",aliases:['松倉海斗']},
  {id:"kawashima",name:"川島如恵留",group:"Travis Japan",aliases:['川島如恵留']},
  {id:"shimekake",name:"七五三掛龍也",group:"Travis Japan",aliases:['七五三掛龍也']},
  {id:"yoshizawa",name:"吉澤閑也",group:"Travis Japan",aliases:['吉澤閑也']},
  {id:"nakamura-kaito",name:"中村海人",group:"Travis Japan",aliases:['中村海人']},
  {id:"shigeoka",name:"重岡大毅",group:"WEST.",aliases:['重岡大毅']},
  {id:"kotaki",name:"小瀧望",group:"WEST.",aliases:['小瀧望']},
  {id:"kiriyama",name:"桐山照史",group:"WEST.",aliases:['桐山照史']},
  {id:"nakama",name:"中間淳太",group:"WEST.",aliases:['中間淳太']},
  {id:"kamiyama",name:"神山智洋",group:"WEST.",aliases:['神山智洋']},
  {id:"fujii",name:"藤井流星",group:"WEST.",aliases:['藤井流星']},
  {id:"hamada",name:"濵田崇裕",group:"WEST.",aliases:['濵田崇裕']},
  {id:"suezawa",name:"末澤誠也",group:"Aぇ! group",aliases:['末澤誠也']},
  {id:"masakado",name:"正門良規",group:"Aぇ! group",aliases:['正門良規']},
  {id:"kojima",name:"小島健",group:"Aぇ! group",aliases:['小島健']},
  {id:"sano",name:"佐野晶哉",group:"Aぇ! group",aliases:['佐野晶哉']},
  {id:"richard",name:"草間リチャード敬太",group:"Aぇ! group（元メンバー）",aliases:['草間リチャード敬太', '草間', 'リチャード', '敬太']},
  {id:"taisei",name:"福本大晴",group:"Aぇ! group（元メンバー）",aliases:['福本大晴']}
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
