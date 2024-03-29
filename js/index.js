const emojiList = [
    {
        category: "Recent",
        categoryJpn: "最近使った絵文字",
        emoji:[]
    },
    {
        category: "Uncategorized",
        categoryJpn: "その他",
        emoji:[
            "(*`･ω･)ゞ",
            "(๑•́ ₃ •̀๑)", 
            "(☉д☉)",
            "(ŏ_ŏ)",
            "٩(ŏ﹏ŏ、)۶",
            "(ㆆᴗㆆ)",
            "(｡・ω・｡)",
            "( ～'ω')～",
            "(͡° ͜ʖ ͡°)	",
            "(・ε・)",
            "(๑ŏ ω ŏ๑)",
            "(. ⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠. )",
            "(┛`д´)┛ ",
            "ლ(ﾟдﾟლ)",
            "ᕦ(ò_ó)ᕤ ",
            "◝(⁰▿⁰)◜",
            "(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤",
            "٩(・﹏・)۶",
            "(◉‿⁠◉)",
            "(ㄏ￣▽￣)ㄏ",
            "ㄟ(￣▽￣ㄟ)",
            "(≧∀≦)",
            "_(:3」z)_"
        ]
    },
    {
        category: "Sad",
        categoryJpn: "泣く",
        emoji:[
            "(இдஇ)",
            "｡°(´∩ω∩`)°｡",
            "｡°(っ°´o`°ｃ)°｡",
            "｡°(´ฅωฅ`)°｡",
            "๐·°(৹˃ᗝ˂৹)°·๐",
            "(υ´•̥ ﻌ •̥`υ)",
            "｡°(ᐡ•̥ᴥ•̥ᐡ)°｡",
             "(´ •̥  ̫ •̥ ` )",
            "(´•ω•̥`)",
            "( ´•̥×•̥` )",
            "(๑o̴̶̷̥᷅﹏o̴̶̷̥᷅๑)",
            "(๑-﹏-๑)",
            "( ´•̥̥̥ω•̥̥̥` )",
            "๐·°(৹˃̵﹏˂̵৹)°·๐",
            "˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚",
            "( ´•௰•`)",
            "｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡",
            "ﾟﾟ\(´O`/)°゜ﾟ",
            "(´•̥ ω •̥` )",
        ]
    },
    {
        category: "Shock",
        categoryJpn: "驚く",
        emoji:[
            "Σ(•̀ω•́ﾉ)ﾉ",
            "Σ( ´･ω･`)",
            "=͟͟͞͞(•̀ω•́ ‧̣̥̇)",
            "Σ(`･ω･Ⅲ)",
            "Σ( °o°)",
            "Σ(ʘωʘﾉ)ﾉ",
        ]
    },
    {
    category: "Happy",
    categoryJpn: "嬉しい",
    emoji:[
        "(*´꒳`*)",
        "( ⁎ᵕᴗᵕ⁎ )",
        "(⁎˃ᴗ˂⁎)",
        "*ଘ(੭*ˊᵕˋ)੭*",
        "(*ฅ́˘ฅ̀*)♡",
        "٩꒰｡•◡•｡꒱۶",
        "(*´˘`*)♡",
        "°˖✧◝(*ﾟ▽ﾟ*)◜✧˖°",
        "（●＞ω＜●）",
        "(♡ >ω< ♡)",
    ]
},
{
    category: "Fun",
    categoryJpn: "楽しい",
    emoji:[
        "٩(ˊᗜˋ*)و",
        "(((o(♡´▽`♡)o)))",
        "(੭ु ›ω‹ )੭ु⁾⁾♡",
        "\(*ˊᗜˋ*)/",
        "((ヽ(๑╹◡╹๑)ﾉ))♬",
        "(´｡✪ω✪｡｀)",
        "♡（*>∀<*）♡",
        "(⋈◍＞◡＜◍)。✧♡",
        "((o(*ˊ▽ˋ*)o))",
        "+。:.ﾟ٩(๑＞◡＜๑)۶:.｡+ﾟ",
        "(๑>ᴗ<๑)",
    ]
},
{
    category: "Shy",
    categoryJpn: "照れる",
    emoji:[
        "(´>///<｀)",
        "(灬ºωº灬)♡",
        "(*//艸//)♡",
        "(*∩ω∩)",
        "(〃’∇’〃)ゝ",
        "(*´ｪ`*)",
        "(*ﾉωﾉ)",
        "(*/□＼*)♡",
        "(///△///）",
        "( ●≧艸≦) ",
    ]
},
{
    category: "Shock",
    categoryJpn: "びっくり",
    emoji:[
        "ฅ(º ﾛ º ฅ)",
        "(⑅ ॣ•͈૦•͈ ॣ)꒳ᵒ꒳ᵎᵎᵎ",
        "(๑°⌓°๑)",
        "Σ(,,ºΔº,,*)",
        "Σ(・艸・○)",
        "(*ﾟﾛﾟ)!!",
        "∑(｀・д・´ﾉ)ﾉ",
        "(๑º ﾛ º๑)♡!!",
        "(✱°⌂°✱)",
        "(; ꒪ㅿ꒪)",
    ]
},
{
    category: "Angry",
    categoryJpn: "怒っている",
    emoji:[
        "\\٩(๑`ȏ´๑)۶//",
        "(｡･ˇ_ˇ･｡)",
        "( ✧Д✧) ",
        "ฅ(๑*д*๑)ฅ!!",
        "(ง `ω´)ง",
        "٩(◦`꒳´◦)۶",
        "(｀･д･´)",
        "(｡•ˇ‸ˇ•｡)",
        "(๑≖ˇд≖)",
        "(-`ェ´-＃)",
    ]
},
   
]

const copyToClipboard = (textToCopy) => {
    if(!navigator) return;
    navigator.clipboard.writeText(textToCopy);
}

const addToLocalStorage = (emoji) => {
    const recent = localStorage.getItem("recent");
    if(!recent){
        localStorage.setItem("recent", JSON.stringify([emoji]));
    }
    const parsedRecent = JSON.parse(recent);
    parsedRecent.unshift(emoji);
    const emojiSet = new Set(parsedRecent);
    const fixedArray = [...emojiSet]
    if(fixedArray.length > 10) fixedArray.pop();
    localStorage.setItem("recent", JSON.stringify(fixedArray));
    loadLocalStorage();
    init();
}

const loadLocalStorage = (emoji) => {
    const recent = localStorage.getItem("recent");
    if(!recent) return;
    const target = emojiList.find(i => i.category === "Recent");
    console.log(target)
    if(!target) return;
    target.emoji = JSON.parse(recent);
}

// Init page
const emojiGrid = document.getElementById("emojiGrid");
loadLocalStorage();
const init = () => {
    emojiGrid.innerHTML = "";
    if(emojiGrid){
        for(let i = 0; i < emojiList.length; i++) {
            const section = document.createElement("details");
            section.open = true;
            const sectionSummary = document.createElement("summary")
            sectionSummary.innerHTML = `${emojiList[i].category}・${emojiList[i].categoryJpn}`;
            const sectionHeader = document.createElement("h3");
            const sectionContent = document.createElement("div");
            sectionContent.classList = "emojiSection";
            sectionHeader.textContent = 
            //sectionSummary.appendChild(sectionHeader);
            section.appendChild(sectionSummary);
            // Emoji
            for(let j = 0; j < emojiList[i].emoji.length; j++) {
                const container = document.createElement("button");
                container.className = "emojiContainer";
                container.textContent = emojiList[i].emoji[j];
                container.addEventListener("click", () => {
                    copyToClipboard(emojiList[i].emoji[j]);
                    addToLocalStorage(emojiList[i].emoji[j]);
                })
                sectionContent.appendChild(container);
            }
            section.appendChild(sectionContent);
            emojiGrid.appendChild(section);
        }
    }
}
init();
