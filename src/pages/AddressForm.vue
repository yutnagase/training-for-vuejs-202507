<template>
  <div class="form-container">
    <h1>住所録登録画面</h1>

    <div class="form-row">
      <label for="lastName">姓</label>
      <input id="lastName" v-model="lastName" @input="updateFullName" type="text" />
    </div>

    <div class="form-row">
      <label for="firstName">名</label>
      <input id="firstName" v-model="firstName" @input="updateFullName" type="text" />
    </div>

    <div class="form-row">
      <label for="fullName">姓名</label>
      <input id="fullName" :value="fullName" type="text" readonly />
    </div>

    <div class="form-row">
      <label for="age">年齢</label>
      <input id="age" v-model.number="age" type="number" min="0" />
    </div>

    <div class="form-row">
      <label for="address">住所</label>
      <input id="address" v-model="address" type="text" />
    </div>

    <div class="button-row">
      <button @click="register">登録</button>
      <button @click="clearForm">クリア</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lastName = ref('')
const firstName = ref('')
const fullName = ref('')
const age = ref(null)
const address = ref('')

const updateFullName = () => {
  fullName.value = `${lastName.value} ${firstName.value}`.trim()
}

const register = () => {
  if (fullName.value) {
    alert(`登録しました\n${fullName.value}`)
  } else {
    alert('姓名が未入力です。')
  }
}

const clearForm = () => {
  if (confirm('画面入力項目をクリアします。宜しいですか？')) {
    lastName.value = ''
    firstName.value = ''
    fullName.value = ''
    age.value = null
    address.value = ''
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 20px auto;
  font-family: sans-serif;
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-row label {
  width: 80px;
  margin-right: 10px;
}

.form-row input {
  flex: 1;
  padding: 5px;
}

input[readonly] {
  background-color: #f0f0f0;
}

.button-row {
  margin-top: 20px;
}

button {
  margin-right: 10px;
  padding: 6px 12px;
}
</style>
