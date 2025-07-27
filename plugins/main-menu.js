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

  let menuText = `
🍭 Bienvenido a 𝑺𝒖𝒌𝒖𝒏𝒂 𝑴𝑫

╭─「 👑 𝑺𝒖𝒌𝒖𝒏𝒂 𝑩𝒐𝒕 𝑴𝒆𝒏𝒖 」─⬣
│ ✦ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${name}
│ ✦ 𝗡𝗶𝘃𝗲𝗹: ${level}
│ ✦ 𝗘𝑿𝑷:  ${exp}
│ ✦ 𝗥𝗮𝗻𝗴𝗼: ${role}
│ ✦ 𝗣𝗿𝗼𝗴𝗿𝗲𝘀𝗼: [██████████]
├───────────────────⬣
│ ✦ 𝗠𝗼𝗱𝗼: 🔒 Privado
│ ✦ 𝗖𝗿𝗲𝗮𝗱𝗼𝗿: +51969214380
│ ✦ 𝗕𝗼𝘁: ${(conn.user.jid == global.conn.user.jid ? '👑 `𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋`' : '🪄 `𝐒𝐔𝐁 𝐁𝐎𝐓`')}
│ ✦ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀: ${totalCommands}
│ ✦ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀: ${totalreg}
│ ✦ 𝗧𝗶𝗲𝗺𝗽𝗼 𝗮𝗰𝘁𝗶𝘃𝗼:
│ ✦ *${uptime}*
╰─⬣͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
𝙇𝙄𝙎𝙏 - 𝘿𝙀 - 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎


  🌴 ᴄʀᴇᴀ ᴜɴ sᴜʙʙᴏᴛ ᴜᴛɪʟɪᴢᴀɴᴅᴏ
> 💥 \`#ǫʀ\` - ᴄᴏᴅɪɢᴏ ǫʀ
> 🐾 \`#ᴄᴏᴅᴇ\` - ᴄᴏᴅɪɢᴏ ᴅᴇ 8 ᴅɪɢɪᴛᴏs

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖨𝗇ẜᨣ\`*  🌾 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🌾˚ #ᴀғᴋ [ᴀʟᴀsᴀɴ]
ര ׄ 🌾˚ #ᴍᴇɴᴜ
ര ׄ 🌾˚ #ᴜᴘᴛɪᴍᴇ
ര ׄ 🌾˚ #sᴄʀɪᴘᴛ
ര ׄ 🌾˚ #sᴛᴀғғ
ര ׄ 🌾˚ #ᴄʀᴇᴀᴅᴏʀ
ര ׄ 🌾˚ #ɢʀᴜᴘᴏs
ര ׄ 🌾˚ #ᴇsᴛᴀᴅᴏ
ര ׄ 🌾˚ #ɪɴғᴏʙᴏᴛ
ര ׄ 🌾˚ #sᴜɢ
ര ׄ 🌾˚ #ᴘɪɴɢ
ര ׄ 🌾˚ #ʀᴇᴘᴏʀᴛᴀʀ *<ᴛᴇxᴛ>*
ര ׄ 🌾˚ #ʀᴇɢʟᴀs
ര ׄ 🌾˚ #sᴘᴇᴇᴅ
ര ׄ 🌾˚ #sɪsᴛᴇᴍᴀ
ര ׄ 🌾˚ #ᴜsᴜᴀʀɪᴏs
ര ׄ 🌾˚ #ᴅs
ര ׄ 🌾˚ #ғᴜɴᴄɪᴏɴᴇs
ര ׄ 🌾˚ #ᴇᴅɪᴛᴀᴜᴛᴏʀᴇsᴘᴏɴᴅᴇʀ
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`ᴍᧉɴᴜs\`*  🎄 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🎄˚ #ᴍᴇɴᴜʟɪsᴛ
ര ׄ 🎄˚ #ᴅᴇᴠ - *ᴍᴇɴᴜ ᴏᴡɴᴇʀ*
ര ׄ 🎄˚ #ᴍᴇɴᴜsᴛɪᴄᴋᴇʀ - *ᴍᴇɴᴜ sᴛɪᴄᴋᴇʀs*
ര ׄ 🎄˚ #ᴍᴇɴᴜsᴇ - *ᴍᴇɴᴜ sᴇᴀʀᴄʜ*
ര ׄ 🎄˚ #ᴍᴇɴᴜᴅʟ - *ᴍᴇɴᴜ ᴅᴇsᴄᴀʀɢᴀs*
ര ׄ 🎄˚ #ᴍᴇɴᴜʟᴏɢᴏs - *ʟᴏɢᴏs*
ര ׄ 🎄˚ #ᴍᴇɴᴜ18 - *ᴍᴇɴᴜ ʜᴏᴛ*
ര ׄ 🎄˚ #ᴍᴇɴᴜɢᴘ - *ᴍᴇɴᴜ ɢʀᴜᴘᴏ*
ര ׄ 🎄˚ #ᴍᴇɴᴜ2 - *ᴍᴇɴᴜ ᴀᴜᴅɪᴏs*
ര ׄ 🎄˚ #ᴍᴇɴᴜʀᴘɢ - *ᴍᴇɴᴜ ᴇᴄᴏɴᴏᴍɪᴀ*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`sᧉᴀᴄʜ\`*  🏮 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🏮˚ #ᴀɴɪᴍᴇɪɴғᴏ
ര ׄ 🏮˚ #ᴀɴɪᴍᴇsᴇᴀʀᴄʜ
ര ׄ 🏮˚ #ᴄᴜᴇᴠᴀɴᴀ
ര ׄ 🏮˚ #ɢɪᴛʜᴜʙsᴇᴀʀᴄʜ
ര ׄ 🏮˚ #sᴇᴀʀᴄʜʜᴇɴᴛᴀɪ
ര ׄ 🏮˚ #ɢᴏᴏɢʟᴇ *<ʙúsǫᴜᴇᴅᴀ>*
ര ׄ 🏮˚ #ɪᴍᴀɢᴇɴ *<ǫᴜᴇʀʏ>*
ര ׄ 🏮˚ #ɪɴғᴏᴀɴɪᴍᴇ
ര ׄ 🏮˚ #ɢɪᴛʜᴜʙsᴛᴀʟᴋ *<ǫᴜᴇʀʏ>*
ര ׄ 🏮˚ #sᴏᴜɴᴅᴄʟᴏᴜᴅsᴇᴀʀᴄʜ *<ᴛxᴛ>*
ര ׄ 🏮˚ #ᴘɪɴᴛᴇʀᴇsᴛ
ര ׄ 🏮˚ #ᴘᴏʀɴʜᴜʙsᴇᴀʀᴄʜ
ര ׄ 🏮˚ #sᴘᴏᴛɪғʏsᴇᴀʀᴄʜ *<ᴛᴇxᴛᴏ>*
ര ׄ 🏮˚ #ʏᴛsᴇᴀʀᴄʜ2 *<ᴛᴇxᴛ>*
ര ׄ 🏮˚ #ɴᴘᴍᴊs
ര ׄ 🏮˚ #ɢɴᴜʟᴀ
ര ׄ 🏮˚ #ᴀᴘᴋsᴇᴀʀᴄʜ
ര ׄ 🏮˚ #ᴡɪᴋɪs
ര ׄ 🏮˚ #ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ *<ᴛxᴛ>*
ര ׄ 🏮˚ #ᴛᴡᴇᴇᴛᴘᴏsᴛs
ര ׄ 🏮˚ #xɴxxs
ര ׄ 🏮˚ #xᴠsᴇᴀʀᴄʜ
ര ׄ 🏮˚ #ʏᴛs
ര ׄ 🏮˚ #ғᴅʀᴏɪᴅsᴇᴀʀᴄʜ *<ᴛéʀᴍɪɴᴏ>*
ര ׄ 🏮˚ #ʜᴀᴘᴘʏᴍᴏᴅsᴇᴀʀᴄʜ *<ʙúsǫᴜᴇᴅᴀ>*
ര ׄ 🏮˚ #ᴄɪɴᴇᴄᴀʟɪᴅᴀᴅsᴇᴀʀᴄʜ *<ʙúsǫᴜᴇᴅᴀ>*
ര ׄ 🏮˚ #ʏᴀʜᴏᴏsᴇᴀʀᴄʜ *<ʙúsǫᴜᴇᴅᴀ>*
ര ׄ 🏮˚ #ᴍᴏᴠɪᴇ *<ᴛéʀᴍɪɴᴏ>*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Subs\`*  🍰 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🍰˚ #qr
ര ׄ 🍰˚ #code
ര ׄ 🍰˚ #token
ര ׄ 🍰˚ #sockets
ര ׄ 🍰˚ #deletesesion
ര ׄ 🍰˚ #pausarai
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖣ᨣ𝗐𝗇𝗅ᨣ𝖺𝖽\`* 🌳 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🌳˚ #fb2
ര ׄ 🌳˚ #fdroid *<url>*
ര ׄ 🌳˚ #fb
ര ׄ 🌳˚ #sound
ര ׄ 🌳˚ #gitclone *<url git>*
ര ׄ 🌳˚ #gdrive
ര ׄ 🌳˚ #ig
ര ׄ 🌳˚ #mediafire *<url>*
ര ׄ 🌳˚ #mega
ര ׄ 🌳˚ #apk *<nombre>*
ര ׄ 🌳˚ #pinvid *<link>*
ര ׄ 🌳˚ #apk2 *<busqueda>*
ര ׄ 🌳˚ #npmdl
ര ׄ 🌳˚ #tt2
ര ׄ 🌳˚ #kwaidl
ര ׄ 🌳˚ #likee *<url>*
ര ׄ 🌳˚ #aplay2 • applemusic2
ര ׄ 🌳˚ #capcut *<url>*
ര ׄ 🌳˚ #play
ര ׄ 🌳˚ #play2
ര ׄ 🌳˚ #ytmp3doc
ര ׄ 🌳˚ #ytmp4doc
ര ׄ 🌳˚ #iaimg *<texto>*
ര ׄ 🌳˚ #yta
ര ׄ 🌳˚ #ytv
ര ׄ 🌳˚ #tiktokrandom
ര ׄ 🌳˚ #spotify
ര ׄ 🌳˚ #tiktokhd
ര ׄ 🌳˚ #tiktoktrends
ര ׄ 🌳˚ #snapchat *<link>*
ര ׄ 🌳˚ #terabox
ര ׄ 🌳˚ #tiktok *<url>*
ര ׄ 🌳˚ #tiktokmp3 *<url>*
ര ׄ 🌳˚ #tiktokimg *<url>*
ര ׄ 🌳˚ #twitter *<url>*
ര ׄ 🌳˚ #xvideosdl
ര ׄ 🌳˚ #xnxxdl
ര ׄ 🌳˚ #pindl
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖥𝗎𝗇\`*  🥯 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🥯˚ #gay *@tag* 
ര ׄ 🥯˚ #lesbiana *@tag* 
ര ׄ 🥯˚ #pajero *@tag* 
ര ׄ 🥯˚ #pajera *@tag* 
ര ׄ 🥯˚ #puto *@tag* 
ര ׄ 🥯˚ #puta *@tag* 
ര ׄ 🥯˚ #manco *@tag* 
ര ׄ 🥯˚ #manca *@tag* 
ര ׄ 🥯˚ #rata *@tag*
ര ׄ 🥯˚ #prostituta *@tag*
ര ׄ 🥯˚ #amigorandom
ര ׄ 🥯˚ #jalamela
ര ׄ 🥯˚ #simi
ര ׄ 🥯˚ #chiste
ര ׄ 🥯˚ #consejo
ര ׄ 🥯˚ #doxear *<mension>*
ര ׄ 🥯˚ #facto
ര ׄ 🥯˚ #reto
ര ׄ 🥯˚ #verdad
ര ׄ 🥯˚ #prostituto *<@tag>*
ര ׄ 🥯˚ #formarpareja
ര ׄ 🥯˚ #formarpareja5
ര ׄ 🥯˚ #huevo *@user*
ര ׄ 🥯˚ #chupalo *<mencion>*
ര ׄ 🥯˚ #aplauso *<mencion>*
ര ׄ 🥯˚ #marron *<mencion>*
ര ׄ 🥯˚ #suicidar
ര ׄ 🥯˚ #iqtest <mencion>*
ര ׄ 🥯˚ #meme
ര ׄ 🥯˚ #morse
ര ׄ 🥯˚ #nombreninja *<texto>*
ര ׄ 🥯˚ #paja
ര ׄ 🥯˚ #personalidad *<mencion>*
ര ׄ 🥯˚ #pregunta 
ര ׄ 🥯˚ #zodiac *2002 02 25*
ര ׄ 🥯˚ #ship 
ര ׄ 🥯˚ #sorte 
ര ׄ 🥯˚ #top *[texto]*
ര ׄ 🥯˚ #formartrio *<mencion>*
ര ׄ 🥯˚ #tt
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖥𝗋𝖺𝗌ᧉ𝗌\`* 🖍️ ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🖍️˚ #piropo
ര ׄ 🖍️˚ #frase
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖩𝗎ᧉ𝗀ᨣ𝗌\`*  🥥 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🥥˚ #ahorcado
ര ׄ 🥥˚ #delxo
ര ׄ 🥥˚ #genio *<pregunta>*
ര ׄ 🥥˚ #math *<mode>*
ര ׄ 🥥˚ #ppt *texto*
ര ׄ 🥥˚ #pvp
ര ׄ 🥥˚ #sopa
ര ׄ 🥥˚ #acertijo
ര ׄ 🥥˚ #ttt *texto*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖠𝗇ı𝗆ᧉ\`*  🍮 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🍮˚ #angry/enojado @tag
ര ׄ 🍮˚ #bath/bañarse @tag
ര ׄ 🍮˚ #bite/morder @tag
ര ׄ 🍮˚ #bleh/lengua @tag
ര ׄ 🍮˚ #blush/sonrojarse @tag
ര ׄ 🍮˚ #bored/aburrido @tag
ര ׄ 🍮˚ #nights/noches
ര ׄ 🍮˚ #dias/days
ര ׄ 🍮˚ #coffe/cafe @tag
ര ׄ 🍮˚ #cry/llorar @tag
ര ׄ 🍮˚ #cuddle/acurrucarse @tag
ര ׄ 🍮˚ #dance/bailar @tag
ര ׄ 🍮˚ #drunk/borracho @tag
ര ׄ 🍮˚ #eat/comer @tag
ര ׄ 🍮˚ #messi
ര ׄ 🍮˚ #cr7
ര ׄ 🍮˚ #facepalm/palmada @tag
ര ׄ 🍮˚ #happy/feliz @tag
ര ׄ 🍮˚ #hello/hola @tag
ര ׄ 🍮˚ #hug/abrazar @tag
ര ׄ 🍮˚ #kill/matar @tag
ര ׄ 🍮˚ #kiss2/besar2 @tag
ര ׄ 🍮˚ #kiss/besar @tag
ര ׄ 🍮˚ #laugh/reirse @tag
ര ׄ 🍮˚ #lick/lamer @tag
ര ׄ 🍮˚ #love2/enamorada @tag
ര ׄ 🍮˚ #patt/acariciar @tag
ര ׄ 🍮˚ #poke/picar @tag
ര ׄ 🍮˚ #pout/pucheros @tag
ര ׄ 🍮˚ #ppcouple
ര ׄ 🍮˚ #preg/embarazar @tag
ര ׄ 🍮˚ #punch/golpear @tag
ര ׄ 🍮˚ #run/correr @tag
ര ׄ 🍮˚ #sad/triste @tag
ര ׄ 🍮˚ #scared/asustada @tag
ര ׄ 🍮˚ #seduce/seducir @tag
ര ׄ 🍮˚ #shy/timida @tag
ര ׄ 🍮˚ #slap/bofetada @tag
ര ׄ 🍮˚ #sleep/dormir @tag
ര ׄ 🍮˚ #smoke/fumar @tag
ര ׄ 🍮˚ #think/pensando @tag
ര ׄ 🍮˚ #undress/encuerar @tag
ര ׄ 🍮˚ #waifu
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Pᧉrẜil\`*  🩸 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🩸˚ #reg
ര ׄ 🩸˚ #unreg
ര ׄ 🩸˚ #profile
ര ׄ 🩸˚ #marry *[mension / etiquetar]*
ര ׄ 🩸˚ #divorce
ര ׄ 🩸˚ #setgenre *<text>*
ര ׄ 🩸˚ #delgenre
ര ׄ 🩸˚ #setbirth *<text>*
ര ׄ 🩸˚ #delbirth
ര ׄ 🩸˚ #setdesc *<text>*
ര ׄ 🩸˚ #deldesc
┗━━━━━━━━━━━━━━━━━━━━
╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Logos\`*  🖼️ ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🖼️˚ #glitchtext
ര ׄ 🖼️˚ #narutotext
ര ׄ 🖼️˚ #dragonball
ര ׄ 🖼️˚ #neonlight
ര ׄ 🖼️˚ #pubglogo
ര ׄ 🖼️˚ #harrypotter
ര ׄ 🖼️˚ #marvel
ര ׄ 🖼️˚ #pixelglitch
ര ׄ 🖼️˚ #amongustext
ര ׄ 🖼️˚ #writetext
ര ׄ 🖼️˚ #advancedglow
ര ׄ 🖼️˚ #typographytext
ര ׄ 🖼️˚ #neonglitch
ര ׄ 🖼️˚ #flagtext
ര ׄ 🖼️˚ #flag3dtext
ര ׄ 🖼️˚ #deletingtext
ര ׄ 🖼️˚ #blackpinkstyle
ര ׄ 🖼️˚ #glowingtext
ര ׄ 🖼️˚ #underwatertext
ര ׄ 🖼️˚ #logomaker
ര ׄ 🖼️˚ #cartoonstyle
ര ׄ 🖼️˚ #papercutstyle
ര ׄ 🖼️˚ #watercolortext
ര ׄ 🖼️˚ #effectclouds
ര ׄ 🖼️˚ #blackpinklogo
ര ׄ 🖼️˚ #gradienttext
ര ׄ 🖼️˚ #summerbeach
ര ׄ 🖼️˚ #luxurygold
ര ׄ 🖼️˚ #multicoloredneon
ര ׄ 🖼️˚ #sandsummer
ര ׄ 🖼️˚ #galaxywallpaper
ര ׄ 🖼️˚ #style
ര ׄ 🖼️˚ #makingneon
ര ׄ 🖼️˚ #royaltext
ര ׄ 🖼️˚ #freecreate
ര ׄ 🖼️˚ #galaxystyle
ര ׄ 🖼️˚ #rainytext
ര ׄ 🖼️˚ #graffititext
ര ׄ 🖼️˚ #colorfulltext
ര ׄ 🖼️˚ #equalizertext
ര ׄ 🖼️˚ #angeltxt
ര ׄ 🖼️˚ #starlight
ര ׄ 🖼️˚ #steel
ര ׄ 🖼️˚ #neoncity
ര ׄ 🖼️˚ #cloudsky
ര ׄ 🖼️˚ #matrix
ര ׄ 🖼️˚ #minion
ര ׄ 🖼️˚ #papercut3d
ര ׄ 🖼️˚ #firetext
ര ׄ 🖼️˚ #icecold
ര ׄ 🖼️˚ #rainbowtext
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Stalk\`*  🌀 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🌀˚ #tiktokstalk *<usuario>*
ര ׄ 🌀˚ #kwaistalk *<usuario>*
ര ׄ 🌀˚ #telegramstalk *<nombre_usuario>*
ര ׄ 🌀˚ #youtubestalk *<nombre de usuario>*
ര ׄ 🌀˚ #instagramstalk *<usuario>*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Prᧉmιυɱ\`*  🍄 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🍄˚ #comprarpremium
ര ׄ 🍄˚ #premium
ര ׄ 🍄˚ #vip
ര ׄ 🍄˚ #spamwa <number>|<mesage>|<no of messages>
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Rpg\`*  🥧 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🥧˚ #aventura
ര ׄ 🥧˚ #baltop
ര ׄ 🥧˚ #bank / bal
ര ׄ 🥧˚ #cazar 
ര ׄ 🥧˚ #codigo *<cantida de coins>*
ര ׄ 🥧˚ #canjear *<código>*
ര ׄ 🥧˚ #cartera
ര ׄ 🥧˚ #apostar *<cantidad>*
ര ׄ 🥧˚ #cf
ര ׄ 🥧˚ #cofre
ര ׄ 🥧˚ #crimen
ര ׄ 🥧˚ #daily
ര ׄ 🥧˚ #depositar 
ര ׄ 🥧˚ #explorar
ര ׄ 🥧˚ #gremio
ര ׄ 🥧˚ #regalo
ര ׄ 🥧˚ #halloween
ര ׄ 🥧˚ #heal
ര ׄ 🥧˚ #inventario 
ര ׄ 🥧˚ #mensual
ര ׄ 🥧˚ #mazmorra
ര ׄ 🥧˚ #minar
ര ׄ 🥧˚ #navidad
ര ׄ 🥧˚ #retirar
ര ׄ 🥧˚ #robar
ര ׄ 🥧˚ #robarxp
ര ׄ 🥧˚ #ruleta *<cantidad> <color>*
ര ׄ 🥧˚ #buyall
ര ׄ 🥧˚ #buy
ര ׄ 🥧˚ #protituirse
ര ׄ 🥧˚ #work
ര ׄ 🥧˚ #pay / transfer 
ര ׄ 🥧˚ #semanal
ര ׄ 🥧˚ #levelup
ര ׄ 🥧˚ #lvl @user
ര ׄ 🥧˚ #slot *<apuesta>*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Gᴀᴄʜᴀ\`*  ☕ ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ ☕˚ #rw
ര ׄ ☕˚ #reclamar 
ര ׄ ☕˚ #harem
ര ׄ ☕˚ #waifuimage
ര ׄ ☕˚ #charinfo
ര ׄ ☕˚ #topwaifus *[pagina]*
ര ׄ ☕˚ #regalar *<nombre del personaje> @usuario*
ര ׄ ☕˚ #vote *<personaje>*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Sᴛɪᴄᴋᴇʀs\`*  👾 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 👾˚ #sticker *<img>*
ര ׄ 👾˚ #sticker *<url>*
ര ׄ 👾˚ #setmeta
ര ׄ 👾˚ #delmeta
ര ׄ 👾˚ #bratvid *<texto>*
ര ׄ 👾˚ #pfp *@user*
ര ׄ 👾˚ #qc
ര ׄ 👾˚ #toimg *(reply)*
ര ׄ 👾˚ #brat
ര ׄ 👾˚ #bratvid *<texto>*
ര ׄ 👾˚ #emojimix  *<emoji+emoji>*
ര ׄ 👾˚ #wm *<packname>|<author>*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖳ᨣᨣ𝗅𝗌\`*  🍚 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🍚˚ #letra *<texto>*
ര ׄ 🍚˚ #fake
ര ׄ 🍚˚ #hd
ര ׄ 🍚˚ #detectar
ര ׄ 🍚˚ #clima *<ciudad/país>*
ര ׄ 🍚˚ #join
ര ׄ 🍚˚ #nuevafotochannel
ര ׄ 🍚˚ #nosilenciarcanal
ര ׄ 🍚˚ #silenciarcanal
ര ׄ 🍚˚ #noseguircanal
ര ׄ 🍚˚ #seguircanal 
ര ׄ 🍚˚ #avisoschannel 
ര ׄ 🍚˚ #resiviravisos 
ര ׄ 🍚˚ #inspect 
ര ׄ 🍚˚ #inspeccionar 
ര ׄ 🍚˚ #eliminarfotochannel 
ര ׄ 🍚˚ #reactioneschannel 
ര ׄ 🍚˚ #reaccioneschannel 
ര ׄ 🍚˚ #nuevonombrecanal 
ര ׄ 🍚˚ #nuevadescchannel
ര ׄ 🍚˚ #setavatar
ര ׄ 🍚˚ #setbanner
ര ׄ 🍚˚ #seticono
ര ׄ 🍚˚ #setmoneda
ര ׄ 🍚˚ #setname nombre1/nombre2
ര ׄ 🍚˚ #cal *<ecuacion>*
ര ׄ 🍚˚ #horario
ര ׄ 🍚˚ #read
ര ׄ 🍚˚ #traducir <idoma>
ര ׄ 🍚˚ #say
ര ׄ 🍚˚ #whatmusic <audio/video>
ര ׄ 🍚˚ #paisinfo
ര ׄ 🍚˚ #ssweb
ര ׄ 🍚˚ #tamaño *<cantidad>*
ര ׄ 🍚˚ #document *<audio/video>*
ര ׄ 🍚˚ #translate
ര ׄ 🍚˚ #up
ര ׄ 🍚˚ #enhance
ര ׄ 🍚˚ #wikipedia
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖮𝗇-𝖮ẜẜ\`*  🧋 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🧋˚ #welcome
ര ׄ 🧋˚ #bienvenida
ര ׄ 🧋˚ #antiprivado
ര ׄ 🧋˚ #antiprivate
ര ׄ 🧋˚ #restrict
ര ׄ 🧋˚ #restringir
ര ׄ 🧋˚ #antibot
ര ׄ 🧋˚ #antibots
ര ׄ 🧋˚ #autoaceptar
ര ׄ 🧋˚ #aceptarauto
ര ׄ 🧋˚ #autorechazar
ര ׄ 🧋˚ #rechazarauto
ര ׄ 🧋˚ #autoresponder
ര ׄ 🧋˚ #autorespond
ര ׄ 🧋˚ #antisubbots
ര ׄ 🧋˚ #antibot2
ര ׄ 🧋˚ #modoadmin
ര ׄ 🧋˚ #soloadmin
ര ׄ 🧋˚ #reaction
ര ׄ 🧋˚ #reaccion
ര ׄ 🧋˚ #nsfw
ര ׄ 🧋˚ #modohorny
ര ׄ 🧋˚ #antispam
ര ׄ 🧋˚ #jadibotmd
ര ׄ 🧋˚ #modejadibot
ര ׄ 🧋˚ #subbots
ര ׄ 🧋˚ #detect
ര ׄ 🧋˚ #avisos
ര ׄ 🧋˚ #antilink
ര ׄ 🧋˚ #audios
ര ׄ 🧋˚ #antiver
ര ׄ 🧋˚ #antiocultar
ര ׄ 🧋˚ #antilink2
ര ׄ 🧋˚ #antiarabe
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Grupos\`*  ⚙️ ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ ⚙️˚ #admins
ര ׄ ⚙️˚ #agregar
ര ׄ ⚙️˚ #advertencia <@user>
ര ׄ ⚙️˚ #delwarn
ര ׄ ⚙️˚ #grupo abrir / cerrar
ര ׄ ⚙️˚ #group open / close
ര ׄ ⚙️˚ #delete
ര ׄ ⚙️˚ #demote <@user>
ര ׄ ⚙️˚ #promote <@user>
ര ׄ ⚙️˚ #encuesta <text|text2>
ര ׄ ⚙️˚ #kickfantasmas
ര ׄ ⚙️˚ #gpbanner
ര ׄ ⚙️˚ #gpdesc
ര ׄ ⚙️˚ #gpname
ര ׄ ⚙️˚ #hidetag
ര ׄ ⚙️˚ #infogrupo
ര ׄ ⚙️˚ #kickall
ര ׄ ⚙️˚ #kick <@user>
ര ׄ ⚙️˚ #kicknum
ര ׄ ⚙️˚ #listonline
ര ׄ ⚙️˚ #link
ര ׄ ⚙️˚ #listadv
ര ׄ ⚙️˚ #mute
ര ׄ ⚙️˚ #unmute
ര ׄ ⚙️˚ #config
ര ׄ ⚙️˚ #restablecer
ര ׄ ⚙️˚ #setbye
ര ׄ ⚙️˚ #setwelcome
ര ׄ ⚙️˚ #testwelcome
ര ׄ ⚙️˚ #setemoji <emoji>
ര ׄ ⚙️˚ #invocar *<mensaje opcional>*
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Nsfw\`*  🪼 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🪼˚ #sixnine/69 @tag
ര ׄ 🪼˚ #anal/culiar @tag
ര ׄ 🪼˚ #blowjob/mamada @tag
ര ׄ 🪼˚ #boobjob/rusa @tag
ര ׄ 🪼˚ #cum/leche @tag
ര ׄ 🪼˚ #fap/paja @tag
ര ׄ 🪼˚ #follar @tag
ര ׄ 🪼˚ #fuck/coger @tag
ര ׄ 🪼˚ #footjob/pies @tag
ര ׄ 🪼˚ #fuck2/coger2 @tag
ര ׄ 🪼˚ #grabboobs/agarrartetas @tag
ര ׄ 🪼˚ #grop/manosear @tag
ര ׄ 🪼˚ #penetrar @user
ര ׄ 🪼˚ #lickpussy/coño @tag
ര ׄ 🪼˚ #r34 <tag>
ര ׄ 🪼˚ #sexo/sex @tag
ര ׄ 🪼˚ #spank/nalgada @tag
ര ׄ 🪼˚ #suckboobs/chupartetas @tag
ര ׄ 🪼˚ #violar/perra @tag
ര ׄ 🪼˚ #lesbianas/tijeras @tag
ര ׄ 🪼˚ #pack
ര ׄ 🪼˚ #tetas
ര ׄ 🪼˚ #undress/encuerar
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`Owner\`*  🌷 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🌷˚ #addcoins *<@user>*
ര ׄ 🌷˚ #addowner / delowner
ര ׄ 🌷˚ #addprem [@user] <days>
ര ׄ 🌷˚ #añadirxp
ര ׄ 🌷˚ #copia
ര ׄ 🌷˚ #autoadmin
ര ׄ 🌷˚ #banuser *@tag <razón>*
ര ׄ 🌷˚ #banlist
ര ׄ 🌷˚ #bcgc
ര ׄ 🌷˚ #block / unblock
ര ׄ 🌷˚ #blocklist
ര ׄ 🌷˚ #chetar *@user* / *<número>*
ര ׄ 🌷˚ #cleartmp
ര ׄ 🌷˚ #creargc
ര ׄ 🌷˚ #deletefile
ര ׄ 🌷˚ #delprem <@user>
ര ׄ 🌷˚ #deschetar *@user* / *<número>*
ര ׄ 🌷˚ #dsowner
ര ׄ 🌷˚ =>
ര ׄ 🌷˚ >
ര ׄ 🌷˚ #fetch
ര ׄ 🌷˚ #getplugin
ര ׄ 🌷˚ #grouplist
ര ׄ 🌷˚ #salir
ര ׄ 🌷˚ #let
ര ׄ 🌷˚ #prefix [prefix]
ര ׄ 🌷˚ #quitarcoin *<@user>* / all
ര ׄ 🌷˚ #quitarxp *<@user>*
ര ׄ 🌷˚ #resetprefix
ര ׄ 🌷˚ #restablecerdatos
ര ׄ 🌷˚ #restart / reiniciar
ര ׄ 🌷˚ #reunion
ര ׄ 🌷˚ #savefile <ruta/nombre>
ര ׄ 🌷˚ #saveplugin
ര ׄ 🌷˚ #setcmd *<texto>*
ര ׄ 🌷˚ #delcmd
ര ׄ 🌷˚ #listcmd
ര ׄ 🌷˚ #setimage
ര ׄ 🌷˚ #setstatus <teks>
ര ׄ 🌷˚ #spam2
ര ׄ 🌷˚ #unbanuser <@tag>
ര ׄ 🌷˚ #ip <alamat ip>
ര ׄ 🌷˚ #update / fix
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖨𝗇ƚᧉ𝖨ı𝗀ᧉ𝗇𝖼ı𝖺𝗌\`*  💭 ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 💭˚ #dalle
ര ׄ 💭˚ #demo *<texto>*
ര ׄ 💭˚ #flux *<texto>*
ര ׄ 💭˚ #gemini
ര ׄ 💭˚ #ia
ര ׄ 💭˚ #llama
┗━━━━━━━━━━━━━━━━━━━━

╭───────────────◆
│ 𓂂𓏸  𐅹੭੭   *\`𝖢ᨣ𝗇𝗏ᧉ𝗋ƚᧉ𝗋𝗌\`*  🌪️ ᩚ꤬ᰨᰍ
╰───────────────◆
ര ׄ 🌪️˚ #tourl <imagen>
ര ׄ 🌪️˚ #catbox
ര ׄ 🌪️˚ #tourl3
ര ׄ 🌪️˚ #togifaud
ര ׄ 🌪️˚ #tomp3
ര ׄ 🌪️˚ #tovideo
ര ׄ 🌪️˚ #tts <lang> <teks>
ര ׄ 🌪️˚ #tts2
┗━━━━━━━━━━━━━━━━━━━━

𖤐     ${club}    𖤐`.trim();

  await conn.reply(m.chat, menuText, fkontak, fake);
  await m.react('🌳');
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'allmenú', 'allmenu', 'menucompleto'];
export default handler;

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor((ms % 3600000) / 60000);
  let s = Math.floor((ms % 60000) / 1000);
  return `${h}H ${m}M ${s}S`;
}