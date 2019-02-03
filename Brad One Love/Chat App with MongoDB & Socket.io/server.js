const mongo = require('mongodb').MongoClient
const client = require('socket.io').listen(4000).sockets

// Connect to MongoDB
mongo.connect('mongodb://dmytro:database123@ds121295.mlab.com:21295/chat', { useNewUrlParser: true },  (err, dbclient) => {
  if (err) throw err
  console.log('MongoDB connected')

  const db = dbclient.db('chat')

  // Connect to Socket.io
  client.on('connection', (socket) => {
    const chat = db.collection('chats')

    // Create function to send status
    const sendStatus = (s) => {
      socket.emit('status', s)
    }

    // Get chats from mongo collection
    chat.find().limit(100).sort({ _id: 1 }).toArray((err, res) => {
      if (err) throw err
      // Emit the messages
      socket.emit('output', res)
    })

    // Handle input events
    socket.on('input', (data) => {
      const { name, message } = data

      // Check for name and message
      if (!name || !message) {
        // Send error status
        sendStatus('Please enter a name and a message')
      } else {
        // Insert message
        chat.insert({ name, message }, () => {
          socket.emit('output', [data])
          sendStatus({
            message: 'Message sent',
            clear: true
          })
        })
      }
    })

    // Handle cleaar
    socket.on('clear', () => {
      // Remove all chats from the collection
      chat.remove({}, () => {
        //Emit cleared
        socket.emit('cleared')
      })
    })
  })
})