const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const sgMail = require('@sendgrid/mail')

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    server.post('/send', (req, res) => {
      const { from, name, content } = req.body
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
          to: process.env.SENDGRID_RECEIVE_EMAIL,
          from,
          subject: `Contact form submitted by ${name}`,
          text: content,
          html: content
        }
        sgMail.send(msg)
        return res.status(200).send('Success')
      } catch (error) {
        return res.status(500).send(`Error: Sendgrid - ${error}`)
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
