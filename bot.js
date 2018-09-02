const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = '$';
const token = 'NDg1NzIyNDU1MzQ0ODA3OTM3.Dm0r_w.qL7vL9T8UTCSty6AAm0oSrlCuow';
client.login(token)




client.on('ready', () => {
    console.log(`logged ass ${client.user.tag}, \' Guilds: ${client.guilds.size}...`);
    client.user.setActivity('BetterStore', {type: 'WATCHING'});
});






client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setAuthor(`محتوى الرساله ${args}`)
 .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('✏')
 .then(() => msg.react('✏'))
  
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
 NormalBc.on("collect", r => {
   message.channel.send(`:ballot_box_with_check: **تم أرسال البرودكاست بنجاح**`);
 var i = 0;
 message.guild.members.forEach(m => {
 let NormalRep = args.replace('[server]' ,message.guild.name).replace('[user]', m).replace('[by]', `${message.author}`)
 m.send(NormalRep).then(ms => {
       i++;
 }).catch(err => {
      i--;
 })
 })
 let nj7 = i;
 let fshl = msg.guild.members.size -  i;
 
 var results = `**Results | النتائج
  
  نجاح` + ' `' + `${nj7}` + '`' + `
  فشل` + ' `' + `${fshl}` + + '`';
  message.channel.send(results);
 })
 })
 }
 });



client.on('message', message => {

    const devs = ['449313863494664214', '228401267263668224'];

    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return;
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/BetterStore');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

  });
