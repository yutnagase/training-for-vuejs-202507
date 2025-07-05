<template>
  <div class="index-page">
    <h1>トップページ</h1>
    <p>以下のリンクから住所録登録画面へ移動できます。</p>
    <router-link to="/address-form">
      <button>住所録登録画面へ</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
// 特にロジックは不要
</script>

<style scoped>
.index-page {
  max-width: 600px;
  margin: 20px auto;
  font-family: sans-serif;
  text-align: center;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
}
</style>
