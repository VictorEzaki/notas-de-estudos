const dayjs = require("dayjs")


function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, "year")
    console.log(`Idade em anos: ${ageInYears}`)

    const nextBirthday = birthday.add((ageInYears + 1), "year")
    nextBirthday.format("DD-MM-YYYY")
    console.log(`Próxima data de aniversário: ${nextBirthday}`)

    const timeToBirthday = today.diff(birthday, "day")
    console.log(`${timeToBirthday} dias para o próximo aniversário.`)
}

birthday("2003-03-19")