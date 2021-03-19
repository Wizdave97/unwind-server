const fs = require('fs')
const path = require('path')
const { PrismaClient } = require('../src/prisma/src/generated/client')

const prisma = new PrismaClient()
const arrayFields = ['hashtags']
const order = ['users.csv', 'challenges.csv', 'posts.csv']
const models = ['user', 'challenge', 'post']
function main (i) {
    if(i === order.length) return
    const seed = fs.createReadStream(path.resolve(__dirname, order[i]), { flags: 'r', encoding: 'utf-8' })
    let seedData = ''
    seed.on('data', (chunk) => {
        seedData+=chunk
    })

    seed.on('end', async () => {
        const seedDataArray = seedData.split('\r\n')

        const keys = seedDataArray.shift().split(',').map(key => key.trim())
        
        const data = seedDataArray.filter(data => data.trim()).map((data) => {
            const dataSplit = data.split(',')
            const row = {}
            let count = 0
            for(let key of keys) {
                if(Number(dataSplit[count])) {
                    row[key] = parseInt(dataSplit[count++])
                    continue
                }
                if(dataSplit[count] === '') {
                    row[key] = null
                    count++
                    continue
                }
                row[key] = arrayFields.includes(key) ? dataSplit[count++].split(' ').filter(val => Boolean(val)) : dataSplit[count++]
            }
            return Object.fromEntries(Object.entries(row))
        })
        await Promise.all(data.map(({ userId, challengeId, cruiseId, ...rest}) => {
            return prisma[models[i]].create({
                data: {
                    ...rest,
                    ...(userId && { user: { connect: { uid: userId }}})
                }
            })
        }))
        
        console.log(`Seeded ${models[i]} successfully`)
        setTimeout(() => main(i + 1), 1000)
    })
}

main(0)