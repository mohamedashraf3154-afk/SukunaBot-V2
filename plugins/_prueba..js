import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg;
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender;
  let userData = global.db.data.users[userId] || {};
  let { exp = 0, level = 0, role = 'Sin Rango' } = userData;
  let name = await conn.getName(userId);
  let uptime = clockString(process.uptime() * 1000);
  let totalUsers = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length;

  const canalUrl = 'https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m';
  const imagenUrl = 'https://i.imgur.com/JP52fdP.jpeg'; // cambia por la imagen que quieras

  // preparamos la imagen como header
  const media = await prepareWAMessageMedia(
    { image: { url: imagenUrl }, jpegThumbnail: null },
    { upload: conn.waUploadToServer }
  );

  const text = `✨ Pulsa un botón para acceder

╭─「 👑 Sukuna Bot 」─⬣
│ ✦ Usuario: ${name}
│ ✦ Nivel: ${level}
│ ✦ EXP: ${exp}
│ ✦ Rango: ${role}
│ ✦ Usuarios: ${totalUsers}
│ ✦ Comandos: ${totalCommands}
│ ✦ Uptime: ${uptime}
╰───────────────⬣`;

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({ text }),
          footer: proto.Message.InteractiveMessage.Footer.create({ text: 'Sukuna Bot MD' }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            imageMessage: media.imageMessage,
            title: '🌴 Sukuna Bot Oficial',
            subtitle: '⛩️ ¡Bienvenido guerrero!',
            hasMediaAttachment: true
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: 'cta_url',
                buttonParamsJson: JSON.stringify({
                  display_text: '✐ Canal Oficial',
                  url: canalUrl,
                  merchant_url: canalUrl
                })
              },
              {
                name: 'quick_reply',
                buttonParamsJson: JSON.stringify({
                  display_text: '📜 Menú',
                  id: '#menu'
                })
              },
              {
                name: 'quick_reply',
                buttonParamsJson: JSON.stringify({
                  display_text: '👤 Perfil',
                  id: '#perfil'
                })
              }
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
};

handler.help = ['menup'];
handler.tags = ['main'];
handler.command = ['menup'];

function clockString(ms) {
  const h = Math.floor(ms/3600000);
  const m = Math.floor((ms%3600000)/60000);
  const s = Math.floor((ms%60000)/1000);
  return `${h}H ${m}M ${s}S`;
}

export default handler;