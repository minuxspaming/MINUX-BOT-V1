let handler = async (m, { conn }) => {
  let caption = `

*BOT MINUX Bot* is a created by *minux rida* Instagram: 📸 instagram.com/minux_rida`
  
  await conn.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/5mxmik.jpg' },
    gifPlayback: true,
    caption,
    footer: '`MINUX Ai - 2026`',
    buttons: [{ buttonId: '.menu all', buttonText: { displayText: 'All Menu | جميع الأوامر' }, type: 1 }],
    headerType: 1,
    viewOnce: true
  }, { quoted: m })

  await conn.sendMessage(m.chat, {
    audio: { url: 'https://files.catbox.moe/5490j1.opus' },
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: m })
}

handler.help = ['list']
handler.command = ['list']
handler.tags =['infobot']
handler.limit = true 
export default handler
