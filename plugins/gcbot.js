let handler = async (m, { conn, text, usedPrefix, command }) => {
  const sgc = ""; // Replace with your group link

  const message = {
    text: `Join the official group to get more information: *[ ${sgc} ]*`,
  };

  await conn.sendMessage(m.chat, message, { quoted: m });
};

handler.help = ["gcbot"];
handler.tags = ["tools"];
handler.command = ["gcbot"];
handler.limit = true 
export default handler;
