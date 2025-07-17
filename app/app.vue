<script>
import { initBotId } from 'botid/client'

initBotId({
  protect: [
    {path: '/api/post-data', method: 'POST'}
  ]
})
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
