// const whatsapp = require('./whatsapp/whatsapp.service.js')
// const contacts = require('./contacts/contacts.service.js')
// const chat_groups = require('./chat_groups/chat_groups.service.js')
const message_servers = require('./message_servers/message_servers.service.js')
const messages = require('./messages/messages.service.js')
const webhooks = require('./webhooks/webhooks.service.js')
const broadcast = require('./broadcast/broadcast.service.js')
const kontak = require('./kontak/kontak.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // app.configure(whatsapp)
  // app.configure(contacts)
  // app.configure(chat_groups)
  app.configure(message_servers)
  app.configure(messages)
  app.configure(webhooks)
  app.configure(broadcast)
  app.configure(kontak)
}
