// Discord bot implements
const discord = require("discord.js");
const client = new discord.Client();
const prefix = "&";

client.on("ready", message => {
  client.user.setPresence({ game: { name: "シェフィ" } });
  client.user.setActivity("&help", { type: "PLAYING" });
  console.log("bot is ready!");
});

client.on("message", message => {
  if (message.mentions.users.has("758310206576525332")) {
    message.reply("しぇ...、ふ...");
    return;
  }
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);

//pingcheck
client.on("message", msg => {
  if (msg.content === "&ping") {
    msg.channel
      .send(` Ping を確認しています...`)
      .then(pingcheck =>
        pingcheck.edit(
          `botの速度|${pingcheck.createdTimestamp - msg.createdTimestamp} ms`
        )
      );
    msg.delete({ time: 1000 });
  }
});

//help表示機能
client.on("message", msg => {
  if (msg.content === prefix + "help") {
    msg.channel.send(
      "```&help でシェフィBOTでできるコマンドの一覧を表示できます\n" +
        "-----コマンド一覧-----\n" +
        "&hello シェフィから💩か❤どちらかが飛んできます　※確率設定なし" +
        "△&talk シェフィがランダムでメッセージを送信します\n" +
        "&omikuji おみくじ機能 ※確率設定なし\n" +
        "&data 投票システム　※空白は半角である必要がある\n" +
        "&dice 6面ダイスが振れる機能\n" +
        "&d100 100面ダイスが振れる機能\n" +
        "&d300 300面ダイスが振れる機能　※ガチャ予想用\n" +
        "&say ;sayの後ろに半角で空白をあけてメッセージを入れるとシェフィが代理で喋ってくれる\n" +
        "&sayf このコマンドと一緒に画像を添付するとシェフィが代理で画像だけを添付してくれる\n" +
        "→※URLには非対応\n" +
        "&gacha 10連ガチャ機能　確率設定+限定キャラ(季節、フェス限)なし```"
    );
    msg.delete({ time: 1000 });
  }
});

//投票システム
client.on("message", async message => {
  if (!message.content.startsWith(prefix)) return;
  const [command, ...args] = message.content.slice(prefix.length).split(" ");
  if (command === "data") {
    const [title, ...choices] = args;
    if (!title) return message.channel.send("タイトルを指定してください");
    const emojis = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣"];
    if (choices.length < 2 || choices.length > emojis.length)
      return message.channel.send(
        `選択肢は2から${emojis.length}つを指定してください。空白は半角で開けてください`
      );
    const data = await message.channel.send({
      embed: {
        title: title,
        description: choices.map((c, i) => `${emojis[i]} ${c}`).join("\n"),
        timestamp: new Date(),
        color: 12482815,
        footer: {
          text: "投票イベント | ;data"
        }
      }
    });
    emojis.slice(0, choices.length).forEach(emoji => data.react(emoji));
    message.delete({ time: 1000 });
  }
});

//中級レベルの埋め込みを利用した、おみくじシステム
client.on("message", msg => {
  if (msg.content.startsWith("&omikuji")) {
    const messages = [
      "**姫吉**",
      "**大吉**",
      "**中吉**",
      "**小吉**",
      "**吉**",
      "**末吉**",
      "**凶**",
      "**大凶**"
    ];

    const colors = [
      "```赤```",
      "```橙色```",
      "```ピンク```",
      "```黄色```",
      "```青```",
      "```藍色```",
      "```紺色```",
      "```緑```",
      "```黄緑```",
      "```白```",
      "```灰色```",
      "```黒```",
      "```茶色```",
      "```水色```"
    ];
    const random = array => array[Math.floor(Math.random() * array.length)];
    msg.channel.send({
      embed: {
        author: {
          name: "シェフィbot",
          icon_url: client.user.avatarURL({ format: "png" })
        },
        title: "おみくじ",
        description: msg.author.username + "さんの運勢は...",
        color: 12482815,
        timestamp: new Date(),
        footer: {
          text: "イベント"
        },
        thumbnail: {
          url: msg.author.avatarURL({ format: "png" })
        },
        fields: [
          {
            name: "運勢:rabbit:",
            value: random(messages),
            inline: true
          },
          {
            name: "ラッキーカラー:white_check_mark:",
            value: random(colors),
            inline: true
          }
        ]
      }
    });
  }
});

//talkでシェフィとお話する機能
client.on("message", message => {
  if (message.content.startsWith("&talk")) {
    const messages = [
      "わーい！おにいちゃんとお話できるの～:rabbit:？",
      "毎日がハロウィンならいいのに...だってだって！そしたらミミ、おにいちゃんとず～っといっしょに遊べるもん！",
      "おにいちゃんっ、はやくはやく～♪ミミと遊ぼ～！",
      "おにいちゃんみてみて～！ミミね～おはな🌸のかんむりつくったんだよ～！",
      "ミミがお花のかんむり作ったらおにいちゃんにつけてあげるね♪",
      "🥕るんたった～！るんたった～！🥕",
      "ミミもプチグリフォンさんもおにいちゃんのことだ～いすき♪",
      "おにいちゃんと一緒にいられてうれしいな～♪"
    ];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(messages));
  }
});

//dice(サイコロで遊ぶ)機能
client.on("message", message => {
  if (message.content.startsWith("&dice")) {
    const messages = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣"];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(messages));
  }
});

//100面dice(サイコロで遊ぶ)機能
client.on("message", message => {
  if (message.content.startsWith("&d100")) {
    const messages = [
      "1⃣",
      "2⃣",
      "3⃣",
      "4⃣",
      "5⃣",
      "6⃣",
      "7⃣",
      "8⃣",
      "9⃣",
      "1⃣0⃣",
      "1⃣1⃣",
      "1⃣2⃣",
      "1⃣3⃣",
      "1⃣4⃣",
      "1⃣5⃣",
      "1⃣6⃣",
      "1⃣7⃣",
      "1⃣8⃣",
      "1⃣9⃣",
      "2⃣0⃣",
      "2⃣1⃣",
      "2⃣2⃣",
      "2⃣3⃣",
      "2⃣4⃣",
      "2⃣5⃣",
      "2⃣6⃣",
      "2⃣7⃣",
      "2⃣8⃣",
      "2⃣9⃣",
      "3⃣0⃣",
      "3⃣1⃣",
      "3⃣2⃣",
      "3⃣3⃣",
      "3⃣4⃣",
      "3⃣5⃣",
      "3⃣6⃣",
      "3⃣7⃣",
      "3⃣8⃣",
      "3⃣9⃣",
      "4⃣0⃣",
      "4⃣1⃣",
      "4⃣2⃣",
      "4⃣3⃣",
      "4⃣4⃣",
      "4⃣5⃣",
      "4⃣6⃣",
      "4⃣7⃣",
      "4⃣8⃣",
      "4⃣9⃣",
      "5⃣0⃣",
      "5⃣1⃣",
      "5⃣2⃣",
      "5⃣3⃣",
      "5⃣4⃣",
      "5⃣5⃣",
      "5⃣6⃣",
      "5⃣7⃣",
      "5⃣8⃣",
      "5⃣9⃣",
      "6⃣0⃣",
      "6⃣1⃣",
      "6⃣2⃣",
      "6⃣3⃣",
      "6⃣4⃣",
      "6⃣5⃣",
      "6⃣6⃣",
      "6⃣7⃣",
      "6⃣8⃣",
      "6⃣9⃣",
      "7⃣0⃣",
      "7⃣1⃣",
      "7⃣2⃣",
      "7⃣3⃣",
      "7⃣4⃣",
      "7⃣5⃣",
      "7⃣6⃣",
      "7⃣7⃣",
      "7⃣8⃣",
      "7⃣9⃣",
      "8⃣0⃣",
      "8⃣1⃣",
      "8⃣2⃣",
      "8⃣3⃣",
      "8⃣4⃣",
      "8⃣5⃣",
      "8⃣6⃣",
      "8⃣7⃣",
      "8⃣8⃣",
      "8⃣9⃣",
      "9⃣0⃣",
      "9⃣1⃣",
      "9⃣2⃣",
      "9⃣3⃣",
      "9⃣4⃣",
      "9⃣5⃣",
      "9⃣6⃣",
      "9⃣7⃣",
      "9⃣8⃣",
      "9⃣9⃣",
      "1⃣0⃣0⃣"
    ];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(messages));
  }
});

//300面dice(サイコロで遊ぶ)機能
client.on("message", message => {
  if (message.content.startsWith("&d300")) {
    const messages = [
      "1⃣",
      "2⃣",
      "3⃣",
      "4⃣",
      "5⃣",
      "6⃣",
      "7⃣",
      "8⃣",
      "9⃣",
      "1⃣0⃣",
      "1⃣1⃣",
      "1⃣2⃣",
      "1⃣3⃣",
      "1⃣4⃣",
      "1⃣5⃣",
      "1⃣6⃣",
      "1⃣7⃣",
      "1⃣8⃣",
      "1⃣9⃣",
      "2⃣0⃣",
      "2⃣1⃣",
      "2⃣2⃣",
      "2⃣3⃣",
      "2⃣4⃣",
      "2⃣5⃣",
      "2⃣6⃣",
      "2⃣7⃣",
      "2⃣8⃣",
      "2⃣9⃣",
      "3⃣0⃣",
      "3⃣1⃣",
      "3⃣2⃣",
      "3⃣3⃣",
      "3⃣4⃣",
      "3⃣5⃣",
      "3⃣6⃣",
      "3⃣7⃣",
      "3⃣8⃣",
      "3⃣9⃣",
      "4⃣0⃣",
      "4⃣1⃣",
      "4⃣2⃣",
      "4⃣3⃣",
      "4⃣4⃣",
      "4⃣5⃣",
      "4⃣6⃣",
      "4⃣7⃣",
      "4⃣8⃣",
      "4⃣9⃣",
      "5⃣0⃣",
      "5⃣1⃣",
      "5⃣2⃣",
      "5⃣3⃣",
      "5⃣4⃣",
      "5⃣5⃣",
      "5⃣6⃣",
      "5⃣7⃣",
      "5⃣8⃣",
      "5⃣9⃣",
      "6⃣0⃣",
      "6⃣1⃣",
      "6⃣2⃣",
      "6⃣3⃣",
      "6⃣4⃣",
      "6⃣5⃣",
      "6⃣6⃣",
      "6⃣7⃣",
      "6⃣8⃣",
      "6⃣9⃣",
      "7⃣0⃣",
      "7⃣1⃣",
      "7⃣2⃣",
      "7⃣3⃣",
      "7⃣4⃣",
      "7⃣5⃣",
      "7⃣6⃣",
      "7⃣7⃣",
      "7⃣8⃣",
      "7⃣9⃣",
      "8⃣0⃣",
      "8⃣1⃣",
      "8⃣2⃣",
      "8⃣3⃣",
      "8⃣4⃣",
      "8⃣5⃣",
      "8⃣6⃣",
      "8⃣7⃣",
      "8⃣8⃣",
      "8⃣9⃣",
      "9⃣0⃣",
      "9⃣1⃣",
      "9⃣2⃣",
      "9⃣3⃣",
      "9⃣4⃣",
      "9⃣5⃣",
      "9⃣6⃣",
      "9⃣7⃣",
      "9⃣8⃣",
      "9⃣9⃣",
      "1⃣0⃣0⃣",
      "1⃣0⃣1⃣",
      "1⃣0⃣2⃣",
      "1⃣0⃣3⃣",
      "1⃣0⃣4⃣",
      "1⃣0⃣5⃣",
      "1⃣0⃣6⃣",
      "1⃣0⃣7⃣",
      "1⃣0⃣8⃣",
      "1⃣0⃣9⃣",
      "1⃣1⃣0⃣",
      "1⃣1⃣1⃣",
      "1⃣1⃣2⃣",
      "1⃣1⃣3⃣",
      "1⃣1⃣4⃣",
      "1⃣1⃣5⃣",
      "1⃣1⃣6⃣",
      "1⃣1⃣7⃣",
      "1⃣1⃣8⃣",
      "1⃣1⃣9⃣",
      "1⃣2⃣0⃣",
      "1⃣2⃣1⃣",
      "1⃣2⃣2⃣",
      "1⃣2⃣3⃣",
      "1⃣2⃣4⃣",
      "1⃣2⃣5⃣",
      "1⃣2⃣6⃣",
      "1⃣2⃣7⃣",
      "1⃣2⃣8⃣",
      "1⃣2⃣9⃣",
      "1⃣3⃣0⃣",
      "1⃣3⃣1⃣",
      "1⃣3⃣2⃣",
      "1⃣3⃣3⃣",
      "1⃣3⃣4⃣",
      "1⃣3⃣5⃣",
      "1⃣3⃣6⃣",
      "1⃣3⃣7⃣",
      "1⃣3⃣8⃣",
      "1⃣3⃣9⃣",
      "1⃣4⃣0⃣",
      "1⃣4⃣1⃣",
      "1⃣4⃣2⃣",
      "1⃣4⃣3⃣",
      "1⃣4⃣4⃣",
      "1⃣4⃣5⃣",
      "1⃣4⃣6⃣",
      "1⃣4⃣7⃣",
      "1⃣4⃣8⃣",
      "1⃣4⃣9⃣",
      "1⃣5⃣0⃣",
      "1⃣5⃣1⃣",
      "1⃣5⃣2⃣",
      "1⃣5⃣3⃣",
      "1⃣5⃣4⃣",
      "1⃣5⃣5⃣",
      "1⃣5⃣6⃣",
      "1⃣5⃣7⃣",
      "1⃣5⃣8⃣",
      "1⃣5⃣9⃣",
      "1⃣6⃣0⃣",
      "1⃣6⃣1⃣",
      "1⃣6⃣2⃣",
      "1⃣6⃣3⃣",
      "1⃣6⃣4⃣",
      "1⃣6⃣5⃣",
      "1⃣6⃣6⃣",
      "1⃣6⃣7⃣",
      "1⃣6⃣8⃣",
      "1⃣6⃣9⃣",
      "1⃣7⃣0⃣",
      "1⃣7⃣1⃣",
      "1⃣7⃣2⃣",
      "1⃣7⃣3⃣",
      "1⃣7⃣4⃣",
      "1⃣7⃣5⃣",
      "1⃣7⃣6⃣",
      "1⃣7⃣7⃣",
      "1⃣7⃣8⃣",
      "1⃣7⃣9⃣",
      "1⃣8⃣0⃣",
      "1⃣8⃣1⃣",
      "1⃣8⃣2⃣",
      "1⃣8⃣3⃣",
      "1⃣8⃣4⃣",
      "1⃣8⃣5⃣",
      "1⃣8⃣6⃣",
      "1⃣8⃣7⃣",
      "1⃣8⃣8⃣",
      "1⃣8⃣9⃣",
      "1⃣9⃣0⃣",
      "1⃣9⃣1⃣",
      "1⃣9⃣2⃣",
      "1⃣9⃣3⃣",
      "1⃣9⃣4⃣",
      "1⃣9⃣5⃣",
      "1⃣9⃣6⃣",
      "1⃣9⃣7⃣",
      "1⃣9⃣8⃣",
      "1⃣9⃣9⃣",
      "2⃣0⃣0⃣",
      "2⃣0⃣1⃣",
      "2⃣0⃣2⃣",
      "2⃣0⃣3⃣",
      "2⃣0⃣4⃣",
      "2⃣0⃣5⃣",
      "2⃣0⃣6⃣",
      "2⃣0⃣7⃣",
      "2⃣0⃣8⃣",
      "2⃣0⃣9⃣",
      "2⃣1⃣0⃣",
      "2⃣1⃣1⃣",
      "2⃣1⃣2⃣",
      "2⃣1⃣3⃣",
      "2⃣1⃣4⃣",
      "2⃣1⃣5⃣",
      "2⃣1⃣6⃣",
      "2⃣1⃣7⃣",
      "2⃣1⃣8⃣",
      "2⃣1⃣9⃣",
      "2⃣2⃣0⃣",
      "2⃣2⃣1⃣",
      "2⃣2⃣2⃣",
      "2⃣2⃣3⃣",
      "2⃣2⃣4⃣",
      "2⃣2⃣5⃣",
      "2⃣2⃣6⃣",
      "2⃣2⃣7⃣",
      "2⃣2⃣8⃣",
      "2⃣2⃣9⃣",
      "2⃣3⃣0⃣",
      "2⃣3⃣1⃣",
      "2⃣3⃣2⃣",
      "2⃣3⃣3⃣",
      "2⃣3⃣4⃣",
      "2⃣3⃣5⃣",
      "2⃣3⃣6⃣",
      "2⃣3⃣7⃣",
      "2⃣3⃣8⃣",
      "2⃣3⃣9⃣",
      "2⃣4⃣0⃣",
      "2⃣4⃣1⃣",
      "2⃣4⃣2⃣",
      "2⃣4⃣3⃣",
      "2⃣4⃣4⃣",
      "2⃣4⃣5⃣",
      "2⃣4⃣6⃣",
      "2⃣4⃣7⃣",
      "2⃣4⃣8⃣",
      "2⃣4⃣9⃣",
      "2⃣5⃣0⃣",
      "2⃣5⃣1⃣",
      "2⃣5⃣2⃣",
      "2⃣5⃣3⃣",
      "2⃣5⃣4⃣",
      "2⃣5⃣5⃣",
      "2⃣5⃣6⃣",
      "2⃣5⃣7⃣",
      "2⃣5⃣8⃣",
      "2⃣5⃣9⃣",
      "2⃣6⃣0⃣",
      "2⃣6⃣1⃣",
      "2⃣6⃣2⃣",
      "2⃣6⃣3⃣",
      "2⃣6⃣4⃣",
      "2⃣6⃣5⃣",
      "2⃣6⃣6⃣",
      "2⃣6⃣7⃣",
      "2⃣6⃣8⃣",
      "2⃣6⃣9⃣",
      "2⃣7⃣0⃣",
      "2⃣7⃣1⃣",
      "2⃣7⃣2⃣",
      "2⃣7⃣3⃣",
      "2⃣7⃣4⃣",
      "2⃣7⃣5⃣",
      "2⃣7⃣6⃣",
      "2⃣7⃣7⃣",
      "2⃣7⃣8⃣",
      "2⃣7⃣9⃣",
      "2⃣8⃣0⃣",
      "2⃣8⃣1⃣",
      "2⃣8⃣2⃣",
      "2⃣8⃣3⃣",
      "2⃣8⃣4⃣",
      "2⃣8⃣5⃣",
      "2⃣8⃣6⃣",
      "2⃣8⃣7⃣",
      "2⃣8⃣8⃣",
      "2⃣8⃣9⃣",
      "2⃣9⃣0⃣",
      "2⃣9⃣1⃣",
      "2⃣9⃣2⃣",
      "2⃣9⃣3⃣",
      "2⃣9⃣4⃣",
      "2⃣9⃣5⃣",
      "2⃣9⃣6⃣",
      "2⃣9⃣7⃣",
      "2⃣9⃣8⃣",
      "2⃣9⃣9⃣",
      "3⃣0⃣0⃣"
    ];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(messages));
  }
});

//say でシェフィに代理で喋らせる
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  const [command, ...args] = message.content.slice(prefix.length).split(" ");
  if (command === "say") {
    const [title, ...choices] = args;
    if (!title)
      return message.channel.send(
        "ミミに言わせたい言葉を```&say```の後ろに半角で空白をあけて指定してください"
      );
    const say = message.channel.send(title);
    message.delete({ time: 1000 });
  }
});

//sayf　でシェフィに代理でファイルを送信させる
client.on("message", message => {
  if (message.content.startsWith("&sayf"))
    if (message.attachments.size && !message.author.bot) {
      const files = message.attachments.map(attachment => attachment.url);
      message.channel.send({ files });
      message.delete({ time: 1000 });
    }
});

//10連ガチャ
client.on("message", message => {
  if (message.content.startsWith("&gacha")) {
    const rankp = [
      "<:gacha_niji:743547382561505461>ヨリ(エンジェル)",
      "<:gacha_niji:743547382561505461>アカリ(エンジェル)",
      "<:gacha_kin:744685131947704392>マツリ",
      "<:gacha_kin:744685131947704392>アカリ",
      "<:gacha_kin:744685131947704392>ミヤコ",
      "<:gacha_kin:744685131947704392>ユキ",
      "<:gacha_kin:744685131947704392>ナナカ",
      "<:gacha_kin:744685131947704392>ミサト",
      "<:gacha_kin:744685131947704392>スズナ",
      "<:gacha_kin:744685131947704392>カオリ",
      "<:gacha_kin:744685131947704392>ミミ",
      "<:gacha_kin:744685131947704392>アヤネ",
      "<:gacha_kin:744685131947704392>リン",
      "<:gacha_kin:744685131947704392>エリコ",
      "<:gacha_kin:744685131947704392>シノブ",
      "<:gacha_kin:744685131947704392>マヒル",
      "<:gacha_kin:744685131947704392>シオリ",
      "<:gacha_kin:744685131947704392>チカ",
      "<:gacha_kin:744685131947704392>クウカ",
      "<:gacha_kin:744685131947704392>タマキ",
      "<:gacha_kin:744685131947704392>ミフユ",
      "<:gacha_kin:744685131947704392>ミツキ",
      "<:gacha_kin:744685131947704392>ツムギ",
      "<:gacha_niji:743547382561505461>イノリ",
      "<:gacha_niji:743547382561505461>アンナ",
      "<:gacha_niji:743547382561505461>マホ",
      "<:gacha_niji:743547382561505461>リノ",
      "<:gacha_niji:743547382561505461>ハツネ",
      "<:gacha_niji:743547382561505461>カスミ",
      "<:gacha_niji:743547382561505461>イオ",
      "<:gacha_niji:743547382561505461>サレン",
      "<:gacha_niji:743547382561505461>ノゾミ",
      "<:gacha_niji:743547382561505461>ニノン",
      "<:gacha_niji:743547382561505461>アキノ",
      "<:gacha_niji:743547382561505461>キョウカ",
      "<:gacha_niji:743547382561505461>トモ",
      "<:gacha_niji:743547382561505461>マコト",
      "<:gacha_niji:743547382561505461>イリヤ",
      "<:gacha_niji:743547382561505461>ジュン",
      "<:gacha_niji:743547382561505461>シズル",
      "<:gacha_niji:743547382561505461>モニカ",
      "<:gacha_niji:743547382561505461>ルカ",
      "<:gacha_niji:743547382561505461>ジータ",
      "<:gacha_niji:743547382561505461>アリサ",
      "<:gacha_niji:743547382561505461>カヤ",
      "<:gacha_niji:743547382561505461>アン",
      "<:gacha_niji:743547382561505461>グレア",
      "<:gacha_niji:743547382561505461>ジュン(サマー)",
      "<:gacha_niji:743547382561505461>クウカ(オーエド)",
      "<:gacha_niji:743547382561505461>ニノン(オーエド)",
      "<:gacha_niji:743547382561505461>アオイ(編入生)",
      "<:gacha_niji:743547382561505461>クロエ",
      "<:gacha_niji:743547382561505461>チエル",
      "<:gacha_niji:743547382561505461>ユニ",
      "<:gacha_niji:743547382561505461>ミミ(ハロウィン)",
      "<:gacha_niji:743547382561505461>ルナ",
      "<:gacha_niji:743547382561505461>イリヤ(クリスマス)",
      "<:gacha_niji:743547382561505461>カスミ(マジカル)",
      "<:gacha_niji:743547382561505461>リン(レンジャー)",
      "<:gacha_niji:743547382561505461>マヒル(レンジャー)",
      "<:gacha_niji:743547382561505461>リノ(ワンダー)",
      "<:gacha_niji:743547382561505461>ナナカ(サマー)"
    ];

    const rank3 = [
      "<:gacha_kin:744685131947704392>マツリ",
      "<:gacha_kin:744685131947704392>アカリ",
      "<:gacha_kin:744685131947704392>ミヤコ",
      "<:gacha_kin:744685131947704392>ユキ",
      "<:gacha_kin:744685131947704392>ナナカ",
      "<:gacha_kin:744685131947704392>ミサト",
      "<:gacha_kin:744685131947704392>スズナ",
      "<:gacha_kin:744685131947704392>カオリ",
      "<:gacha_kin:744685131947704392>ミミ",
      "<:gacha_kin:744685131947704392>アヤネ",
      "<:gacha_kin:744685131947704392>リン",
      "<:gacha_kin:744685131947704392>エリコ",
      "<:gacha_kin:744685131947704392>シノブ",
      "<:gacha_kin:744685131947704392>マヒル",
      "<:gacha_kin:744685131947704392>シオリ",
      "<:gacha_kin:744685131947704392>チカ",
      "<:gacha_kin:744685131947704392>クウカ",
      "<:gacha_kin:744685131947704392>タマキ",
      "<:gacha_kin:744685131947704392>ミフユ",
      "<:gacha_kin:744685131947704392>ミツキ",
      "<:gacha_kin:744685131947704392>ツムギ",
      "<:gacha_gin:744685161676800111>ヒヨリ",
      "<:gacha_gin:744685161676800111>レイ",
      "<:gacha_gin:744685161676800111>ミソギ",
      "<:gacha_gin:744685161676800111>クルミ",
      "<:gacha_gin:744685161676800111>ヨリ",
      "<:gacha_gin:744685161676800111>スズメ",
      "<:gacha_gin:744685161676800111>ユカリ",
      "<:gacha_gin:744685161676800111>アオイ",
      "<:gacha_gin:744685161676800111>ミサキ",
      "<:gacha_gin:744685161676800111>リマ",
      "<:gacha_gin:744685161676800111>アユミ",
      "<:gacha_niji:743547382561505461>イノリ",
      "<:gacha_niji:743547382561505461>アンナ",
      "<:gacha_niji:743547382561505461>マホ",
      "<:gacha_niji:743547382561505461>リノ",
      "<:gacha_niji:743547382561505461>ハツネ",
      "<:gacha_niji:743547382561505461>カスミ",
      "<:gacha_niji:743547382561505461>イオ",
      "<:gacha_niji:743547382561505461>サレン",
      "<:gacha_niji:743547382561505461>ノゾミ",
      "<:gacha_niji:743547382561505461>ニノン",
      "<:gacha_niji:743547382561505461>アキノ",
      "<:gacha_niji:743547382561505461>キョウカ",
      "<:gacha_niji:743547382561505461>トモ",
      "<:gacha_niji:743547382561505461>マコト",
      "<:gacha_niji:743547382561505461>イリヤ",
      "<:gacha_niji:743547382561505461>ジュン",
      "<:gacha_niji:743547382561505461>シズル",
      "<:gacha_niji:743547382561505461>モニカ",
      "<:gacha_niji:743547382561505461>ルカ",
      "<:gacha_niji:743547382561505461>ジータ",
      "<:gacha_niji:743547382561505461>アリサ",
      "<:gacha_niji:743547382561505461>カヤ",
      "<:gacha_niji:743547382561505461>アン",
      "<:gacha_niji:743547382561505461>グレア",
      "<:gacha_niji:743547382561505461>クウカ(オーエド)",
      "<:gacha_niji:743547382561505461>ニノン(オーエド)",
      "<:gacha_niji:743547382561505461>アオイ(編入生)",
      "<:gacha_niji:743547382561505461>クロエ",
      "<:gacha_niji:743547382561505461>チエル",
      "<:gacha_niji:743547382561505461>ユニ",
      "<:gacha_niji:743547382561505461>ミミ(ハロウィン)",
      "<:gacha_niji:743547382561505461>ルナ",
      "<:gacha_niji:743547382561505461>イリヤ(クリスマス)",
      "<:gacha_niji:743547382561505461>カスミ(マジカル)",
      "<:gacha_niji:743547382561505461>リン(レンジャー)",
      "<:gacha_niji:743547382561505461>マヒル(レンジャー)",
      "<:gacha_niji:743547382561505461>リノ(ワンダー)",
      "<:gacha_niji:743547382561505461>ナナカ(サマー)",
      "<:gacha_niji:743547382561505461>ジュン(サマー)"
    ];

    const rank2 = [
      "<:gacha_kin:744685131947704392>マツリ",
      "<:gacha_kin:744685131947704392>アカリ",
      "<:gacha_kin:744685131947704392>ミヤコ",
      "<:gacha_kin:744685131947704392>ユキ",
      "<:gacha_kin:744685131947704392>ナナカ",
      "<:gacha_kin:744685131947704392>ミサト",
      "<:gacha_kin:744685131947704392>スズナ",
      "<:gacha_kin:744685131947704392>カオリ",
      "<:gacha_kin:744685131947704392>ミミ",
      "<:gacha_kin:744685131947704392>アヤネ",
      "<:gacha_kin:744685131947704392>リン",
      "<:gacha_kin:744685131947704392>エリコ",
      "<:gacha_kin:744685131947704392>シノブ",
      "<:gacha_kin:744685131947704392>マヒル",
      "<:gacha_kin:744685131947704392>シオリ",
      "<:gacha_kin:744685131947704392>チカ",
      "<:gacha_kin:744685131947704392>クウカ",
      "<:gacha_kin:744685131947704392>タマキ",
      "<:gacha_kin:744685131947704392>ミフユ",
      "<:gacha_kin:744685131947704392>ミツキ",
      "<:gacha_kin:744685131947704392>ツムギ",
      "<:gacha_gin:744685161676800111>ヒヨリ",
      "<:gacha_gin:744685161676800111>レイ",
      "<:gacha_gin:744685161676800111>ミソギ",
      "<:gacha_gin:744685161676800111>クルミ",
      "<:gacha_gin:744685161676800111>ヨリ",
      "<:gacha_gin:744685161676800111>スズメ",
      "<:gacha_gin:744685161676800111>ユカリ",
      "<:gacha_gin:744685161676800111>アオイ",
      "<:gacha_gin:744685161676800111>ミサキ",
      "<:gacha_gin:744685161676800111>リマ",
      "<:gacha_gin:744685161676800111>アユミ"
    ];

    const rank1 = [
      "<:gacha_gin:744685161676800111>ヒヨリ",
      "<:gacha_gin:744685161676800111>レイ",
      "<:gacha_gin:744685161676800111>ミソギ",
      "<:gacha_gin:744685161676800111>クルミ",
      "<:gacha_gin:744685161676800111>ヨリ",
      "<:gacha_gin:744685161676800111>スズメ",
      "<:gacha_gin:744685161676800111>ユカリ",
      "<:gacha_gin:744685161676800111>アオイ",
      "<:gacha_gin:744685161676800111>ミサキ",
      "<:gacha_gin:744685161676800111>リマ",
      "<:gacha_gin:744685161676800111>アユミ"
    ];

    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send({
      embed: {
        author: {
          name: "ミミbot",
          icon_url: client.user.avatarURL({ format: "png" })
        },
        title: "10連ガチャ",
        description: message.author.username + "さんのガチャ結果は...",
        color: 12482815,
        timestamp: new Date(),
        footer: {
          text: "10連ガチャイベント"
        },
        thumbnail: {
          url: message.author.avatarURL({ format: "png" })
        },
        fields: [
          {
            name: "結果",
            value:
              random(rank1) +
              "\n" +
              random(rank1) +
              "\n" +
              random(rank1) +
              "\n" +
              random(rank1) +
              "\n" +
              random(rank1) +
              "\n" +
              random(rank1) +
              "\n" +
              random(rank2) +
              "\n" +
              random(rank2) +
              "\n" +
              random(rank3) +
              "\n" +
              random(rankp)
          }
        ]
      }
    });
  }
});

//hello
client.on("message", async message => {
  if (message.content.startsWith("&hello")) {
    const listall = ["( っ'-')╮ =͟͟͞💩", "( っ'-')╮ =͟͟͞❤"];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(listall));
  }
});

//choise
client.on("message", message => {
  if (message.content.startsWith("&choice")) {
    const choice = message.content.split(" ");
    const random = Math.floor(Math.random() * 5+1);
    message.channel.send(choice[random]);
 } 
});