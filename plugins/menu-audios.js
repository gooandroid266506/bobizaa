import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/d7ae77d1178f9de50825c.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
╭━─━━━≪『﷽』≫━━━─━╮

✦━─━⌠  قــائمــة 📜 الاوامر  ⌡━─━✦

⌯اذكار الصباح 
↫ يجيبلك اذكار الصباح 

⌯ اذكار المساء 
↫ يجيبلك اذكار المساء

⌯.صوت1 
↫يجيبلك قران بدون مايك ( 1 : 7 ) اصوات

⌯.صوت-انمي١ 
↫ يجيبلك اصوات انمي ( 1 : 7 ) اصوات

⌯.تطقيم 
↫ يجيبلك صور ولاد وبنات للتطقيم 

⌯.لكرتون 
↫يحول صورك لكرتون مع تحويل الوجه لاستيكر 

⌯.لانمي
↫تحويل صورك لانمي بالذكاء الاصطناعي

⌯.تحدث 
↫ التحدث او استخدام الشات جي بي تي 

⌯.تليجراف
↫رفع الصور والفديوهات الى تليجراف

⌯.فريبيك
↫ الحصول علي الصور من موقع فري بيك 

⌯.الحب 
↫ يقيس لك نسبه حب صديقتك ف الجروب

⌯.سؤال 
↫ اسئلة عشوائيه للتسلية مع الاصدقاء 

⌯.لو 
↫ لعبه لو خيروك للتسلية مع الاصدقاء 

⌯.توب
↫يجيبلك افضل عشره ف الجروب

⌯.المشرفين 
↫يجيبلك قايمة المشرفين 

⌯.الجروب 
↫ يجيبلك معلومات الجروب كامله

⌯.مخفي
↫منشن وهمي

⌯.منشن
↫يمنشن جماعي لكل الاعضاء 

⌯.الاشباح 
↫يجيبلك الاعضاء الى مابتتفاعلش 

⌯.لينك
↫يجيبلك لينك الجروب

⌯.رستر
↫يرستر او يعمل اعاده تعين للينك الجروب

⌯.رفع
↫رفع عضو لمشرف

⌯.خفض
↫خفض مشرف لعضو

⌯.بحث
↫البحث فجوجل

⌯.صوره
↫الحصول علي صوره من جوجل 

⌯.الخصوصيه
↫يوضح لك السياسه والخصوصيه التي وضعها المطور

⌯.تصميم 
↫الحصول علي تصميم من البوت 

⌯.اقتباس 
↫الحصول علي اقتباسات انجليزيه مع ذكر المؤلف

⌯.المطور
↫يجلب لك ارقام المطور 

✦━─━─   اوامر المطور  ─━─━✦

⌯.بريم
↫ يمكن للمطور فقط اعطاء صلاحيات لاستخدام البوت 

⌯.حظر 
↫حظر الشات للبوت 

⌯.الغاء-الحظر 
↫الغاء حظر الشات للبوت 

⌯.المحظورين 
↫يجيبلك الارقام والشاتات المحظوره

⌯.المميزين 
↫الاشخاص البريميوم

⌯.البلوكات 
↫الاشخاص الي واخدين بلوك من البوت 

⌯.بان 
↫حظر شخص من استخدام البوت

⌯.بلوك
↫تخلي البوت يعمل لشخص بلوك

⌯.رفع-البلوك
↫ البوت يشيل البلوك

⌯.انضم
↫البوت ينضم لجروبات عن طريق الرابط

⌯.اخرج
↫البوت يخرج من الجروبات 

✦━━━─━─༺༻─━─━━━✦

⌯.كود
↫البوت يصنع باركود 

⌯.قط
↫صور لقطط عشوائيه

⌯.دمج
↫دمج الايموجي وتكوين استيكر 

⌯.ملاك
↫الحصول علي ملصق  بالكلمات

⌯.ملصق
↫تحويل الصوره لملصق - استيكر

⌯.لصوره
↫تحويل الملصق لصوره

⌯.لفديو
↫تحويل الملصق المتحرك لفديو 

⌯.سرقه
↫سرقه الملصق وتخليه بحقوقك

⌯.انطق
↫تحويل النص الى كلام 

⌯.زخرفه
↫زخرفه الكلمات للاسف الانجليزي بس 

⌯.ايه 
↫ ايه الكرسي 

⌯.لوغو
↫لصناعه لوجوهات باحترافيه 

✦━━━─━─༺༻─━─━━━✦
 يمنع منعا باتا سب البوت ومن يخالف هذا يرجي طرده من الجروب 
                                  َبـــــــ شادوــــــوت
✦━━━─━─༺༻─━─━━━✦
`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『👑┇Shadow┇🤖┇Bot┇👑』',
body: null,
thumbnail: img,
sourceUrl: `https://telegra.ph/file/d7ae77d1178f9de50825c.jpg`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
}}
handler.command = /^(اوامر|الاوامر|الأوامر|أوامر)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
