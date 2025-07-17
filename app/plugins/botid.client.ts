import { initBotId } from 'botid/client'

export default defineNuxtPlugin({
  // Enforce before other plugins
  enforce: 'pre',
  // Setup botid client
  setup () {
    console.log('botid.client')
    initBotId({
      protect: [
        { path: '/api/post-data', method: 'POST' }
      ]
    })

    // Test if proxy works
    // fetch('/api/post-data', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'John Doe'
    //   })
    // })
  }
})