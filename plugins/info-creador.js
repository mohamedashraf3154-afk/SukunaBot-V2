import { proto } from '@whiskeysockets/baileys';
import PhoneNumber from 'awesome-phonenumber';

const handler = async (m, { conn }) => {
  const name = '𝙎𝙝𝙖𝙙𝙤𝙬 - 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 👑';
  const numCreador = '51998118690';
  const empresa = 'Sukuna Bot Inc.';
  const about = '🤖 Desarrollador de Sukuna Ultra - MD';
  const correo = 'blackoficial2025@gmail.com';
  const web = 'https://gituhb.com/Yuji-XDev';
  const direccion = 'Tokyo, Japón 🇯🇵';
  const fotoPerfil = 'https://files.catbox.moe/c5ahjl.jpg';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa}
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:${correo}
URL:${web}
NOTE:${about}
ADR:;;${direccion};;;;
X-ABADR:ES
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim();

  const contactMessage = {
    displayName: name,
    vcard
  };

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: name,
      contacts: [contactMessage]
    },
    contextInfo: {
      externalAdReply: {
        title: '👤 Contacto del Creador',
        body: 'Toca aquí para guardar el contacto o hablar con él',
        mediaType: 1,
        thumbnailUrl: fotoPerfil,
        renderLargerThumbnail: true,
        sourceUrl: web
      }
    }
  }, { quoted: m });
};

handler.command = ['creador', 'creator', 'owner'];
export default handler;