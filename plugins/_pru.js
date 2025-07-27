const handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let userData = global.db.data.users[userId] || {};

    await m.react('📬');


    const title = `╭━━━〔 *⛩ MENÚ PRINCIPAL ⛩* 〕━━⬣\n│✨ Hola @${userId.split('@')[0]}, aquí está tu menú:\n╰━━━━━━━━━━━━━━━━⬣`;

    const buttonsQuick = [
      { buttonId: `${usedPrefix}owner`, buttonText: { displayText: '👑 Owner' }, type: 1 },
      { buttonId: `${usedPrefix}infobot`, buttonText: { displayText: '🌐 InfoBot' }, type: 1 },
      { buttonId: `${usedPrefix}estado`, buttonText: { displayText: '📊 Estado' }, type: 1 },
    ];


    const sections = [
      {
        title: '🌟 Menús disponibles',
        rows: [
          { title: "🎵 Audios", rowId: `${usedPrefix}audios`, description: "Efectos de sonido divertidos" },
          { title: "📚 Menú completo", rowId: `${usedPrefix}menu2`, description: "Lista completa de comandos" },
          { title: "🛠️ Herramientas", rowId: `${usedPrefix}tools`, description: "Convertidores, generadores, etc." },
        ],
      },
      {
        title: "💎 Premium y otros",
        rows: [
          { title: "🧩 Premium", rowId: `${usedPrefix}menuprem`, description: "Comandos premium" },
          { title: "📥 Descargas", rowId: `${usedPrefix}descargas`, description: "YouTube, TikTok, Facebook..." },
        ],
      },
    ];

    const thumbnail = 'https://i.imgur.com/BzZ1eXr.jpg';

    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: title,
      mentions: [userId],
      footer: 'Sukuna Bot MD ✨',
      buttons: buttonsQuick,
      title: '📁 Menú interactivo',
      sections,
      buttonText: '📂 Ver secciones',
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.reply(m.chat, `❌ *Ocurrió un error:* ${e.message}`, m);
  }
};

handler.command = ['menup'];
export default handler;