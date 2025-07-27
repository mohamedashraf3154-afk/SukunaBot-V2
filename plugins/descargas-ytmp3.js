import fetch from 'node-fetch';
import yts from 'yt-search';

const handler = async (m, { conn, text, command }) => {
  try {
    if (!text) {
      return conn.reply(m.chat, `*⛩️ Ingresa un link de YouTub'e 🌲*`, m, rcanal);
    }

    await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });

    const search = await yts(text);
    const video = search.videos[0];

    if (!video) {
      return conn.reply(m.chat, '❌ No se encontraron resultados para tu búsqueda.', m);
    }

    const { title, timestamp, views, ago, url, author, thumbnail } = video;
    const canal = author?.name || 'Desconocido';
    const vistas = views.toLocaleString();

    const textoInfo = `⬣ *🎲  \`YOUTUBE - MP3\` 🇦🇱* ⬣\n\n`
      + `> 🌾 *𝑻𝒊𝒕𝒖𝒍𝒐:* ${title}\n`
      + `> ⏱️ *𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏:* ${timestamp}\n`
      + `> 🍰 *𝑪𝒂𝒏𝒂𝒍:* ${canal}\n`
      + `> 🌧️ *𝑽𝒊𝒔𝒕𝒂𝒔:* ${vistas}\n`
      + `> 🌳 *𝑷𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐:* ${ago}\n`
      + `> 🔗 *𝑳𝒊𝒏𝒌:* ${url}\n\n`
      + `*➭ 𝑬𝒍 𝒂𝒖𝒅𝒊𝒐 𝒔𝒆 𝒆𝒔𝒕𝒂 𝒆𝒏𝒗𝒊𝒂𝒏𝒅𝒐, 𝑬𝒔𝒑𝒆𝒓𝒆 𝒖𝒏 𝒎𝒐𝒎𝒆𝒏𝒕𝒊𝒕𝒐 𝒐𝒏𝒊𝒄𝒉𝒂𝒏~ 🌸*`;

    const thumbnailBuffer = await (await fetch(thumbnail)).buffer();

    await conn.sendMessage(m.chat, {
      image: thumbnailBuffer,
      caption: textoInfo,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363401008003732@newsletter',
          newsletterName: '=͟͟͞𝑆𝑢𝑘𝑢𝑛𝑎 𝑈𝑙𝑡𝑟𝑎 • 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 ⌺',
          serverMessageId: -1
        }
      }
    }, { quoted: m });


    const api = `https://api.stellarwa.xyz/dow/ytmp3?url=${url}&apikey=stellar-7SQpl4Ah`;
    const res = await fetch(api);
    const json = await res.json();

    if (!json || !json.data || !json.data.dl) {
      throw new Error('⚠️ No se pudo generar el enlace de descarga.');
    }

    await conn.sendMessage(m.chat, {
      audio: { url: json.data.dl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: 'YOUTUBE • MP3',
          mediaType: 1,
          thumbnail: thumbnailBuffer,
          mediaUrl: url,
          sourceUrl: url,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });

    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (e) {
    console.error('❌ Error en ytmp3:', e);
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return conn.reply(m.chat, `❌ *Error:* ${e.message}`, m);
  }
};

handler.command = ['ytmp3'];
handler.tags = ['descargas'];
handler.help = ['ytmp3 *<link>*'];

export default handler;