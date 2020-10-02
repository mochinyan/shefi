// Discord bot implements
const discord = require("discord.js");
const client = new discord.Client();
const prefix = "&";

client.on("ready", message => {
  client.user.setPresence({ game: { name: "シェフィ" } });
  client.user.setActivity("&help", { type: "PLAYING" });
  console.log("bot is ready!");
});

//messageイベント1個目
client.on("message", message => {
  if (message.mentions.users.has("758310206576525332")) {
    const shefi = [
      "\n『プログラム・エラー。コードCFF9FE』\n" +
        "『プログラム・エラー。コード6384CD』\n" +
        "『プログラム・エラー・・・・・・・・・・・・・』",
      "\n『ログ:D型検体0005bの蘇生シークエンス』",
      "\n『肉体修復措置:成功』\n" + "『記憶修復措置:失敗』",
      "\n『記憶修復措置を再度実行』\n" + "『記憶修復措置に再度失敗』",
      "\n『蘇生シークエンス凍結』\n" + "『検討』",
      "\n『統括プログラムの次回起動時に該当ログを提出』",
      "\n『対象:D型検体0005b“アガトシフナ”』\n" +
        "『提言:当該検体の廃棄を推奨』"
    ];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.reply(random(shefi));
    return;
  }
  //pingcheck
  if (message.content === "&ping") {
    message.channel
      .send(` Ping を確認しています...`)
      .then(pingcheck =>
        pingcheck.edit(
          `botの速度|${pingcheck.createdTimestamp -
            message.createdTimestamp} ms`
        )
      );
    message.delete({ time: 1000 });
  }
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);

//help表示機能
client.on("message", message => {
  if (message.content === prefix + "help") {
    message.channel.send(
      "```&help でシェフィBOTでできるコマンドの一覧を表示できます\n" +
        "---------------コマンド一覧---------------\n" +
        "\n" +
        "@シェフィ#0095 シェフィにメンションするとランダムでメッセージが返ってくるよ\n" +
        "→&talkとは内容が異なるよ\n" +
        "\n" +
        "&hello シェフィから💩か❤どちらかが飛んできます　※確率設定なし\n" +
        "\n" +
        "&talk シェフィがランダムでメッセージを送信します ※確率設定なし\n" +
        "→内容はメインストーリー内のシェフィの発言から抜粋\n" +
        "\n" +
        "&omikuji おみくじ機能 ※確率設定なし\n" +
        "\n" +
        "&data 投票システム　※空白は半角である必要がある\n" +
        "\n" +
        "&dice 6面ダイスが振れる機能\n" +
        "\n" +
        "&d100 100面ダイスが振れる機能\n" +
        "\n" +
        "&d300 300面ダイスが振れる機能　※ガチャ予想とかにつかってね\n" +
        "\n" +
        "&say &sayの後ろに半角で空白をあけてメッセージを入れるとシェフィが代理で喋ってくれるよ\n" +
        "\n" +
        "&sayf このコマンドと一緒に画像を添付するとシェフィが代理で画像だけを添付してくれるよ\n" +
        "→※URLには非対応\n" +
        "\n" +
        "&gacha 10連ガチャ機能　確率設定+限定キャラ(季節、フェス限)なし\n" +
        "\n" +
        "&choice choiceの後ろに複数の単語を半角で空白をあけて入れたらどれか選んでくれます\n" +
        "\n" +
        "&ping pingcheck BOTの速度が見れます\n" +
        "\n" +
        "\n" +
        "\n" +
        "I'm happy to join the server! Thank you!\n" +
        "If you have any questions, please contact the administrator.\n" +
        "This bot was created by Mochinyan.\n" +
        "Administrator contact information↓\n" +
        "Twitter:もちにゃん＠XnUqy  discord:もちにゃん#9208```"
    );
    message.delete({ time: 1000 });
  }
  if (message.content.startsWith("&talk")) {
    const messages = [
      "・・・・・・？",
      "しぇ・・・・・・、ふ・・・・・・",
      "・・・・・・だぁ。あぅあー",
      "きゃっきゃ♪",
      "きゃっきゃ・・・・・・♪",
      "こーろ、こーろー♪",
      "しーふー♪しーふー♪",
      "だぅー、だぅー・・・・・・♪",
      "いくーっ♪",
      "ん♪",
      "ままー！",
      "ひより、ひよりー♪",
      "ふー、ふー・・・・・・はむっ・・・・・・・ん～っ、おいちぃ・・・・・・♪",
      "んっ！",
      "だー",
      "だぁ・・・・・・ぶぅ！",
      "あーい！",
      "きゃう！",
      "んー・・・・・・？",
      "うぅー・・・・・・",
      "ゆーっ？",
      "だーうー？",
      "だぁー！うーっ！",
      "ゆいー",
      "うー？",
      "お、はぅー♪",
      "うーっ！",
      "・・・・・・しぇふぃ？",
      "だうーっ！",
      "けふっ、けふっ。",
      "ひうっ！",
      "ひぅぅっ・・・・・・！",
      "ゆぃー！",
      "ぶいー☆",
      "だぅ、うー♪",
      "うんー！",
      "ごちそーたまー！",
      "あいがとー！",
      "おいちー♪",
      "・・・・・・？・・・・・・！",
      "ぅ・・・・・・ぅぅっ！ううーっ！",
      "うー！うーっ！",
      "ぅぅぅ・・・・・・",
      "ぅうぅ～・・・・・・",
      "ころー？",
      "きゃる、つんでれー？",
      "いきたぁーい♪",
      "ぺこー！",
      "ぺこー♪",
      "まんじゅー？",
      "けどけどー♪",
      "おにーたん♪おにーたん♪",
      "おにーたーん♪わぁーい♪",
      "あそんじゃったぁー♪",
      "おにーたん、おにーたんー あれなーにー？",
      "なんだろー？",
      "まてまてー♪ぷるぷるー！",
      "まてまてー♪・・・・・・？",
      "・・・・・・ああーっ！　あぁた、はっ・・・・・・！",
      "あう～っ！",
      "あうぅぅ・・・・・・ねばねばー・・・・・・！",
      "あ～！",
      "おにーたんっ！",
      "ひゃあ～っ！？",
      "おにーたんっ♪よかたー",
      "うぅぅ・・・・・・",
      "ぅぅ～・・・・・・",
      "・・・・・・うぅぅ～・・・・・・？",
      "おかえりー！",
      "きゃる、きゃるー！？",
      "！　・・・・・・う～・・・・・・！",
      "かおす・・・・・・？",
      "・・・・・・おにーたん？",
      "・・・・・・されん、おこ・・・・・・？",
      "そうなんだぁー",
      "おてつだーい、おてつだーい♪",
      "きゅっきゅ、きゅっきゅ♪",
      "んっ・・・・・・！",
      "ぁぅっ！",
      "だめー！",
      "べーっ！",
      "まま・・・・・・！",
      "おにーたん・・・・・・！",
      "おにーたんっ・・・・・・！",
      "・・・・・・み、みん・・・・・・な・・・・・・！",
      "ぅ、ぅぅ・・・・・・！",
      "・・・・・・！おにーたん、しっかり・・・・・・！",
      "・・・・・・！？",
      "・・・・・・はぁ、はぁ・・・・・・",
      "・・・・・・・・・・・・",
      "っ！",
      "みんな、しっかり・・・・・・！",
      "スズメ、さん・・・・・・助かりました。\n" +
        "私ひとりだけじゃ、手のほどこしようがなかったから・・・・・・",
      "・・・・・・その\n" +
        "・・・・・・意識のほうは、ハッキリしたんだけど。\n" +
        "記憶はまだで・・・・・・",
      "ほんとうの名前とか、昔の自分が何をしていたのかまでは\n" +
        "・・・・・・ちゃんと思い出せないの。",
      "・・・・・・なにかしら？",
      "・・・・・・\n" + "わからない・・・・・・",
      "・・・・・・でも。\n" +
        "彼や、コッコロ・・・・・・さんに。\n" +
        "たくさんお世話になって、助けてもらったことは・・・・・・覚えてる。",
      "だから・・・・・・そのぶんの恩を返したいとは、思ってるわ。",
      "えっ？どうして、あなたが謝るの・・・・・・？",
      "疑り深くなったのは、友だちを守るためでしょう？無理もないと思うわ。",
      "むしろ・・・・・・よく信用する気になったものね。\n" +
        "身の潔白を立てるための証拠なんて、私、何もないと思うのだけど。",
      "・・・・・・わ、私こそ。\n" +
        "その・・・・・・\n" +
        "これまでさんざん助けてもらったし・・・・・・",
      "それに・・・・・・どうにかなったのは、そこで寝ている彼のおかげよ。\n" +
        "彼が力を与えてくれなかったら、勝てなかったわ。",
      "私も・・・・・・謝っておくわ、キャル。\n" +
        "ずいぶん、齧っちゃった気がするし・・・・・・",
      "・・・・・・当たり前よ。\n" +
        "ようやくまともになったのに、赤ちゃん言葉のままのほうがおかしいでしょう？",
      "・・・・・・というか。\n" + "思い出すと、我ながらもう・・・・・・",
      "もう、敵はいないから。無理しないで・・・・・・ママ。",
      "あ。ぅぅ～っ・・・・・・しょ、しょうがないでしょうっ？\n" +
        "コッコロ・・・・・・さんのこと、ずっとママって呼んでたせいで、\n" +
        "変な習慣がついちゃったっていうか・・・・・・！",
      "・・・・・・あぁ、もう・・・・・・\n" +
        "お願いだから、からかうのをやめるように言ってもらえないかしら。\n" +
        "おにーたんからも・・・・・・",
      "あああっ・・・・・・！\n" + "また口が勝手にぃっ・・・・・・！",
      "ああ、もうっ、もうっ・・・・・・\n" + "恥ずかしい～っ・・・・・・！",
      "・・・・・・・・・・・・\n" +
        "ふぅん・・・・・・\n" +
        "今のランドソルの議会制度は、こうなっているのね・・・・・・",
      "・・・・・・ありがとう\n" + "そこに置いてもらえるかしら。",
      "そうね・・・・・・\n" + "少し、情報に飢えているのかもしれないわ。",
      "ここしばらく、まともに字を読むこともままならなかったものだから。\n" +
        "こうして知識を増やせるのが、うれしいのよ。",
      "あなたも、たまには読書でもしたら？\n" +
        "読めない字は、教えてあげる・・・・・・私でよければ。",
      "ちょっと、二人とも・・・・・・静かにしてもらえないかしら？\n" +
        "本を読むのに、集中したいのだけど。",
      "も、もうっ！やめてったら・・・・・・！",
      "お、王女さま。ご機嫌麗しく・・・・・・",
      "そ、そんなことっ！\n" + "・・・・・・してない、ですよねっ・・・・・・？",
      "ねぇ、してないわよねっ・・・・・・？\n" +
        "・・・・・・はぅぅぅ・・・・・・",
      "あっ！ダメよマ・・・・・・コ、コッコロさん！寝てなきゃ！",
      "でも・・・・・・【レイジ・レギオン】への対策は、どうするの？",
      "・・・・・・ねぇ、ぺコリーヌさん。",
      "ルーセント学院・・・・・・良かったら、私も同行させてもらえないかしら。\n" +
        "まだ思い出すことのできない、\n" +
        "私の過去の手がかりがあるかもしれないから。",
      "ありがとう。\n" +
        "正直、そこまで期待しているわけじゃないけど・・・・・・ね。",
      "・・・・・・お邪魔するわ。",
      "シェフィよ。いちおう、ぺコリーヌさんの護衛ってことになってるけど・・・・・・\n" +
        "仕事がないことを祈っているわ。",
      "いいえ・・・・・・ドラゴン族、というものらしいわ。",
      "そう・・・・・・残念。\n" + "・・・・・・私も、知りたいのよね。",
      "自分で自分の歓迎会の準備をするなんて、\n" +
        "おかしな経験をさせてもらったわ。",
      "・・・・・・はい。\n" +
        "外見的な特徴の違いからは、飛行型の二足竜がワイバーン、\n" +
        "巨大な四足竜がドラゴンであると思われがちです。",
      "・・・・・・けれど。\n" +
        "分類でいうなら、それぞれの生息圏、個体数、稀少性から、\n" +
        "ドラゴンとワイバーンは類似種ではなく\n" +
        "完全に別種であるという見方が大半です。",
      "そうみたい。\n" +
        "・・・・・・自分でも、不思議な感じよ。\n" +
        "勉強した過程がないのに、答えだけ出てくるなんて。",
      "大変ってほどのことは・・・・・・\n" + "今は、生活に支障はないし。",
      "ただ・・・・・・\n" + "・・・・・・",
      "・・・・・・ふとした時\n" +
        "・・・・・・迷子みたいに、不安な気持ちになる・・・・・・\n" +
        "自分が本当は何者なのか、居るべき場所がどこなのか、わからないから・・・・・・",
      "・・・・・・この学院も、一通り散策してみたけれど。\n" +
        "記憶が戻るきっかけになりそうなことは、\n" +
        "特に無いみたいだし・・・・・・",
      "あ、ごめんなさい。\n" +
        "ご飯のときに、変な空気にしてしまって。\n" +
        "給食、いただきましょう。",
      "えっ、水泳・・・・・・ですか？\n" +
        "明日の時間割に、そんなものありませんけど・・・・・・",
      "ど・・・・・・どうして、そこまでして・・・・・・？",
      "・・・・・・ぅ・・・・・・",
      "・・・・・・水着・・・・・・\n" + "・・・・・・はぁ・・・・・・",
      "・・・・・・そうじゃないけど。",
      "・・・・・・っ、ちがうっ。",
      "びぇぇぇ～んっ！\n" + "おにーたぁ～～んっ！！",
      "うぇ～ん・・・・・・！\n" + "ぐすっ、ぐすっ・・・・・・",
      "ぐすぐす・・・・・・\n" +
        "・・・・・・きゃるとみさき、いぢめるぅ・・・・・・",
      "・・・・・・\n" + "・・・・・・",
      "・・・・・・\n" + "・・・・・・\n" + "・・・・・・・・・・・・別に。",
      "・・・・・・はぁ。\n" + "別に、怒ってないわ。\n" + "本当よ。",
      "というか・・・・・・私をからかうことで、\n" +
        "キャルがクラスのみんなと話すきっかけを持てて。\n" +
        "それで仲良くなれるなら・・・・・・まあ、いいかなって思ってたし・・・・・・",
      "・・・・・・\n" + "は、恥ずかしかったのよ・・・・・・",
      "焦ったり、慌てたりすると・・・・・・\n" +
        "このあいだまでのように、一時的な退行をしてしまうみたいで。\n" +
        "自分でも、コントロールがきかないの。",
      "・・・・・・はぅ。\n" +
        "記憶を取り戻すよりも先に、\n" +
        "まずはこっちを解決しなくちゃいけないかもしれないわね・・・・・・",
      "ええ。\n" +
        "だってこのままじゃ・・・・・・恥ずかしすぎて私、\n" +
        "死んでしまいそうなんだもの・・・・・・",
      "・・・・・・おはよう。",
      "・・・・・・そうね。\n" + "もっと、みんなと勉強したかったわ。",
      "何かおかしいわ。気を付けて・・・・・・！",
      "わかった・・・・・・！",
      ""
    ];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(messages));
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
        color: 13629950,
        footer: {
          text: "投票イベント | &data"
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
        color: 13629950,
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

//dice(サイコロで遊ぶ)機能
client.on("message", message => {
  if (message.content.startsWith("&dice")) {
    const messages = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣"];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(messages));
  }
  //100面dice
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
  //300面dice
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
        "シェフィに言わせたい言葉を```&say```の後ろに半角で空白をあけて指定してください"
      );
    const say = message.channel.send(title);
    message.delete({ time: 1000 });
  }
  //ファイル代理送信
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
          name: "シェフィbot",
          icon_url: client.user.avatarURL({ format: "png" })
        },
        title: "10連ガチャ",
        description: message.author.username + "さんのガチャ結果は...",
        color: 13629950,
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
  //hello
  if (message.content.startsWith("&hello")) {
    const listall = ["( っ'-')╮ =͟͟͞💩", "( っ'-')╮ =͟͟͞❤"];
    const random = array => array[Math.floor(Math.random() * array.length)];
    message.channel.send(random(listall));
  }
  //choice
  if (message.content.startsWith("&choice")) {
    const choice = message.content.split(" ");
    const random = Math.floor(Math.random() * (choice.length - 1) + 1);
    message.channel.send(choice[random]);
  }
});

