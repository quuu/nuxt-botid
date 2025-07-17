<script setup>
const postData = () => {
  fetch("/api/post-data", {
    method: "POST",
    body: JSON.stringify({ message: "Hello, world!" }),
  });
};
</script>
<template>
  <div>
    <div>Testing</div>
    <button @click="postData">Post Data</button>
  </div>
</template>
