const handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    await m.react('📬');

    const nombre = userId.split('@')[0];


    const textoImg = `╭━━━〔 *⛩ MENÚ PRINCIPAL ⛩* 〕━━⬣\n│✨ Hola @${nombre}, aquí está tu menú visual:\n╰━━━━━━━━━━━━━━━━⬣`;
    const thumbnail = 'https://files.catbox.moe/mez710.jpg';

    const botones = [
      { buttonId: `${usedPrefix}owner`, buttonText: { displayText: '👑 Owner' }, type: 1 },
      { buttonId: `${usedPrefix}infobot`, buttonText: { displayText: '🌐 InfoBot' }, type: 1 },
      { buttonId: `${usedPrefix}estado`, buttonText: { displayText: '📊 Estado' }, type: 1 },
    ];

    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: textoImg,
      mentions: [userId],
      footer: 'Sukuna Bot MD ✨',
      buttons: botones
    }, { quoted: m });

 
    const textoLista = `╭━━━〔 *🧭 SECCIONES DISPONIBLES* 〕━━⬣\n│🔍 Elige una categoría del menú:\n╰━━━━━━━━━━━━━━━━⬣`;

    const secciones = [
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

    await conn.sendMessage(m.chat, {
      text: textoLista,
      mentions: [userId],
      footer: 'Sukuna Bot MD ✨',
      title: '📁 Menú interactivo',
      buttonText: '📂 Ver secciones',
      sections: secciones,
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.reply(m.chat, `❌ *Ocurrió un error:* ${e.message}`, m);
  }
};

handler.command = ['menup'];
export default handler;