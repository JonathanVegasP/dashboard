<script setup lang="ts">
import AppButton from '@/components/button/AppButton.vue'
import AppCard from '@/components/card/AppCard.vue'
import TextField from '@/components/fields/TextField.vue'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const user = useUserStore()
const router = useRouter()
const email = ref('')
const password = ref('')

const onLogin = () => {
  user.login({ email: email.value, password: password.value })
  router.replace('/')
}
</script>

<template>
  <section class="flex grow main-center cross-center padding-1">
    <AppCard class="grow max-width-360 padding-2">
      <h3 class="margin-bottom-1">Entrar</h3>
      <form class="pv-1">
        <TextField v-model="email" class="margin-bottom-1" label="E-mail"></TextField>
        <TextField v-model="password" class="margin-bottom-1" label="Senha"></TextField>
      </form>
      <footer class="flex main-end cross-center">
        <AppButton @click.stop="onLogin">Entrar</AppButton>
      </footer>
    </AppCard>
  </section>
</template>
