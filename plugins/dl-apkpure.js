/*let handler = async (m, { conn, text, args }) => { 
   try {
      if (!text) {
         return conn.reply(m.chat, `🌱 Ejemplo de uso: apkpure WhatsApp`, m);
      }
      m.react('🕒');
      if (text.includes('https://apkpure.net/')) {
         try {
            let base = args[0].split("/")[4];
            const file = `https://d.apkpure.com/b/APK/${base}?version=latest`;
            let info = await getInfo(file);
            let { name, sizeB, sizeMB } = info;
            if (sizeB > 200 * 1024 * 1024) {
               return conn.reply(m.chat, `La aplicación es demasiado grande para ser descargada por usuarios no premium. Hazte premium para descargar aplicaciones de hasta 500MB.\n\nPeso de la apk: ${sizeMB}`, m);
            }
            if (sizeB > 500 * 1024 * 1024) {
               return conn.reply(m.chat, 'La aplicación supera el límite de 500MB para usuarios premium.', m);
            }

            let cap = `
◜ ApkPure - Download ◞

≡ 🌴 \`Nombre :\` ${name}
≡ 🌿 \`Package :\` ${base}
≡ 🌾 \`Peso :\` ${sizeMB}

≡ 🌷 \`Link :\` ${args[0]}
`;
m.reply(cap)
            await conn.sendFile(m.chat, file, `${name}`, '', m, null, {
               asDocument: true, mimetype: "application/vnd.android.package-archive"
            });
            m.react('☑️');
         } catch (err) {
            return conn.reply(m.chat, 'Error al obtener la información de la app.\n\n' + err, m);
         }
      } else {
      m.react("⌚")
         let res = await search(text);
         let cap = `◜ ApkPure - Search ◞\n\n`;         
         cap += res.map(v => `
≡ 🔍 \`Nombre :\` ${v.name}
≡ 🍂 \`Rating :\` ${v.rating}
≡ ✍️ \`Desarrollador :\` ${v.developer}
≡ ⛓️ \`Link :\` ${v.link}`).join("\n\n");
         m.reply(cap)
         m.react("☑️");
      }
   } catch (err) {
      return conn.reply(m.chat, 'Error en la ejecución.\n\n' + err, m);
   }
};

handler.help = ["apkpure"];
handler.command = ["apkpure", "apkpuredl"];
handler.tags = ["download"];
export default handler;

async function search(text) {
    let base = `https://apkpure.net/search?q=${encodeURIComponent(text)}`;

    try {
        let res = await fetch(base, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        let html = await res.text();
        let $ = cheerio.load(html);
        let results = [];

        $('.apk-list .apk-item').each((_, el) => {
            let app = {};
            app.name = $(el).find('.title').text().trim();
            app.link = "https://apkpure.net" + $(el).attr('href');
            app.icon = $(el).find('.icon img').attr('data-original') || $(el).find('.icon img').attr('src');
            app.developer = $(el).find('.dev').text().trim();
            app.rating = $(el).find('.stars').text().trim();
            app.download = app.link.replace('/com.', '/download/com.');

            if (app.name) results.push(app);
        });

        return results;
    } catch (err) {
        console.error(err);
        return [];
    }
}

async function getInfo(url) {
    try {
        const res = await fetch(url);
        const cd = res.headers.get('content-disposition');
        const name = cd && cd.match(/filename="(.+)"/)[1];
        const sizeB = parseInt(res.headers.get('content-length'), 10);
        const sizeMB = (sizeB / (1024 * 1024)).toFixed(2) + ' MB';
        return { name, sizeB, sizeMB };
    } catch (err) {
        return { error: err.message };
    }
}*/


let lastResults = {};

let handler = async (m, { conn, text, args }) => {
   try {
      if (!text) {
         return conn.reply(m.chat, `🌱 *Ejemplo:* apkpure WhatsApp`, m);
      }

      const isResponse = /^a\d+$/i.test(text.trim());
      if (isResponse && lastResults[m.chat]) {
         const index = parseInt(text.slice(1)) - 1;
         const res = lastResults[m.chat][index];
         if (!res) return conn.reply(m.chat, '❌ Resultado no válido.', m);

         m.react('⏳');
         let base = res.link.split("/")[4];
         const file = `https://d.apkpure.com/b/APK/${base}?version=latest`;
         let info = await getInfo(file);
         let { name, sizeB, sizeMB } = info;

         if (sizeB > 200 * 1024 * 1024) {
            return conn.reply(m.chat, `🚫 La app supera 200MB.\n💎 Hazte *Premium* para descargar hasta 500MB.\n📦 *Tamaño:* ${sizeMB}`, m);
         }
         if (sizeB > 500 * 1024 * 1024) {
            return conn.reply(m.chat, '❌ La aplicación supera el límite máximo de 500MB.', m);
         }

         let caption = `╭───〔 *📦 DESCARGA - APKPURE* 〕──⬣
│
│ 📥 *Nombre:* ${name}
│ 📦 *Package:* ${base}
│ 📏 *Tamaño:* ${sizeMB}
│ 🔗 *Link:* ${res.link}
╰────────────⬣`;

         await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
         await conn.sendFile(m.chat, file, `${name}`, '', m, null, {
            asDocument: true, mimetype: "application/vnd.android.package-archive"
         });
         m.react('✅');
         return;
      }

      if (text.includes('https://apkpure.net/')) {
         let base = args[0].split("/")[4];
         const file = `https://d.apkpure.com/b/APK/${base}?version=latest`;
         let info = await getInfo(file);
         let { name, sizeB, sizeMB } = info;

         if (sizeB > 200 * 1024 * 1024) {
            return conn.reply(m.chat, `🚫 App muy pesada (200MB+).\n📦 *Tamaño:* ${sizeMB}\n💎 Premium requerido.`, m);
         }
         if (sizeB > 500 * 1024 * 1024) {
            return conn.reply(m.chat, '❌ Supera el límite de descarga (500MB).', m);
         }

         let cap = `╭───〔 *📦 DESCARGA - APKPURE* 〕──⬣
│
│ 📥 *Nombre:* ${name}
│ 📦 *Package:* ${base}
│ 📏 *Tamaño:* ${sizeMB}
│ 🔗 *Link:* ${args[0]}
╰────────────⬣`;
         await conn.sendMessage(m.chat, { text: cap }, { quoted: m });
         await conn.sendFile(m.chat, file, `${name}`, '', m, null, {
            asDocument: true, mimetype: "application/vnd.android.package-archive"
         });
         m.react('✅');
      } else {
         m.react("🔎");
         let res = await search(text);
         if (!res.length) return conn.reply(m.chat, '❌ No se encontraron resultados.', m);

         lastResults[m.chat] = res;

         let txt = `╭─〔 *🔍 RESULTADOS APKPURE* 〕─⬣\n\n`;
         res.slice(0, 10).forEach((v, i) => {
            txt += `🌱 *a${i + 1}*\n`;
            txt += `≡ 📥 *Nombre:* ${v.name}\n`;
            txt += `≡ ✍️ *Dev:* ${v.developer}\n`;
            txt += `≡ ⭐ *Rating:* ${v.rating}\n`;
            txt += `≡ 🔗 *Link:* ${v.link}\n\n`;
         });
         txt += `╰── ✨ _Responde con_ *a1*, *a2*, *a3*... _para descargar._`;

         conn.reply(m.chat, txt.trim(), m);
         m.react("📨");
      }
   } catch (err) {
      return conn.reply(m.chat, '❌ *Error inesperado:*\n' + err.message, m);
   }
};

handler.help = ["apkpure"];
handler.command = ["apkpure", "apkpuredl"];
handler.tags = ["download"];
export default handler;

async function search(text) {
   let base = `https://apkpure.net/search?q=${encodeURIComponent(text)}`;
   try {
      let res = await fetch(base, {
         headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
         }
      });

      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      let html = await res.text();
      let $ = cheerio.load(html);
      let results = [];

      $('.apk-list .apk-item').each((_, el) => {
         let app = {};
         app.name = $(el).find('.title').text().trim();
         app.link = "https://apkpure.net" + $(el).attr('href');
         app.icon = $(el).find('.icon img').attr('data-original') || $(el).find('.icon img').attr('src');
         app.developer = $(el).find('.dev').text().trim();
         app.rating = $(el).find('.stars').text().trim();
         results.push(app);
      });

      return results;
   } catch (err) {
      console.error(err);
      return [];
   }
}

async function getInfo(url) {
   try {
      const res = await fetch(url);
      const cd = res.headers.get('content-disposition');
      const name = cd && cd.match(/filename="(.+)"/)[1];
      const sizeB = parseInt(res.headers.get('content-length'), 10);
      const sizeMB = (sizeB / (1024 * 1024)).toFixed(2) + ' MB';
      return { name, sizeB, sizeMB };
   } catch (err) {
      return { error: err.message };
   }
}