const os = require('node:os')
const fs = require('node:fs')
const path = require('node:path')

const systemPlataformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function getSystemInfo() {
    const system = systemPlataformMap[os.platform()]
    const arch = os.arch()
    const cpu = os.cpus()[0].model

    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60

    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60

    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)
    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    const ramTotal = os.totalmem() / 1024 / 1024 / 1024
    const ramUsed = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024
    const ramUsedPercent = Math.round((ramUsed / ramTotal) * 100)

    return { system, arch, cpu, uptime, ramUsed, ramTotal, ramUsedPercent }
}

function printLog({ system, arch, cpu, uptime, ramUsed, ramTotal, ramUsedPercent }) {
    console.clear()
    console.log('Detalhes do sistema')
    console.log(`Sistema operacional: ${system}`)
    console.log(`Arquitetura do sistema: ${arch}`)
    console.log(`Modelo do processador: ${cpu}`)
    console.log(`Tempo de atividade do sistema: ${uptime}`)
    console.log(`Uso de memória RAM: ${ramUsed.toFixed(3)}GB / ${ramTotal.toFixed(3)}GB (${ramUsedPercent}%)`)
}

function saveLog({ system, arch, cpu, uptime, ramUsed, ramTotal, ramUsedPercent }) {
    const logContent = `DETALHES DO SISTEMA | Sistema operacional: ${system} | Arquitetura do sistema: ${arch} | Modelo do processador: ${cpu} | Tempo de atividade do sistema: ${uptime} | Uso de memória RAM: ${ramUsed.toFixed(3)}GB / ${ramTotal.toFixed(3)}GB (${ramUsedPercent}%)\n----\n`

    const logDir = path.join('/', 'log')

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir)
    }

    const logFilePath = path.join(logDir, 'log.txt')
    fs.appendFileSync(logFilePath, logContent)
}

setInterval(() => {
    const systemInfo = getSystemInfo()
    printLog(systemInfo)
    saveLog(systemInfo)
}, 1000)