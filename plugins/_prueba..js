import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let userData = global.db.data.users[userId] || {};
  let exp = userData.exp || 0;
  let coin = userData.coin || 0;
  let level = userData.level || 0;
  let role = userData.role || 'Sin Rango';

  let name = await conn.getName(userId);
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

  const canalUrl = 'https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m';

  const text = `✨ Pulsa el botón para unirte al canal oficial

╭─「 👑 Sukuna Bot 」─⬣
│ ✦ Usuario: ${name}
│ ✦ Nivel: ${level}
│ ✦ EXP: ${exp}
│ ✦ Rango: ${role}
│ ✦ Usuarios registrados: ${totalreg}
│ ✦ Comandos: ${totalCommands}
│ ✦ Uptime: ${uptime}
╰───────────────⬣`;

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Sukuna Bot MD'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
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
export default handler;

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor((ms % 3600000) / 60000);
  let s = Math.floor((ms % 60000) / 1000);
  return `${h}H ${m}M ${s}S`;
}