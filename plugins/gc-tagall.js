let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*LA REVENTA DE ESTE BOT ESTA PROHIBIDA, PARA ADQUIRIRLO COMUNICARSE A :
Wa.me/+56954390663* ${pesan}`
let teks = `*THANK U NEXT LOS INVOCA BOTS*\n\nβ ${oi}\n\nβ *π΄ππΈπππ΄ππ°π:*\n`
for (let mem of participants) {
teks += `πΌ @${mem.id.split('@')[0]}\n`}
teks += `*β*ThankUNext\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
