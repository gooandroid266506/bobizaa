import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*حط النص او رقم التلفون او اي حاجه انت عاوز تحولها لباركود (Qr Code)*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '¯\\_(𝑩𝒚 : 𝑨𝒃𝒅𝒆𝒍𝒓𝒂𝒉𝒎𝒂𝒏 𝑬𝒍𝒔𝒉𝒂𝒎𝒉𝒐𝒖𝒕 - 𝑺𝒉𝒂𝒅𝒐𝒘 )_/¯', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?|كود|باركود$/i
export default handler
