const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(ctx => {
   if(ctx.update.message.from.id === env.id){
     ctx.reply(`Ao seu dispor mestre, ${ctx.update.message.from.first_name}!`)
   }else{
    ctx.reply(`Você não está cadastrado!`)
   }
    
})

bot.startPolling()