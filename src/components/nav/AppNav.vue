<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import AppNavHeader from './AppNavHeader.vue'
import AppNavSection from './AppNavSection.vue'
import AppNavSectionItem from './AppNavSectionItem.vue'
import { computed, shallowRef } from 'vue'
import { useClickOutside } from '@/core/use/useClickOutside'
import { useUserStore } from '@/stores/user'
const store = useAppStore()
const isExpanded = computed(() => ({
  'min-width-240': store.menuExpanded,
  'max-width-240': store.menuExpanded
}))
const el = shallowRef<HTMLElement>()
const user = useUserStore()
useClickOutside({
  el,
  onClick() {
    store.isTablet && store.toggleMenuWithValue(false)
  }
})
</script>

<template>
  <nav
    v-if="user.isLoggedIn"
    ref="el"
    class="overflow-auto background-secondary color-secondary height-100 min-width-0 max-width-0 transition-02"
    :class="isExpanded"
    aria-label="Menu de Navegação"
  >
    <div v-once>
      <AppNavHeader title="Olá, Jonathan" sub-title="jonathan.v.peixoto@gmail.com"></AppNavHeader>
      <AppNavSection title="Conta">
        <AppNavSectionItem title="Gerenciar Conta"></AppNavSectionItem>
        <AppNavSectionItem title="Sair"></AppNavSectionItem>
      </AppNavSection>
      <AppNavSection title="Usuários">
        <AppNavSectionItem title="Cadastrar Usuário"></AppNavSectionItem>
        <AppNavSectionItem title="Gerenciar usuários"></AppNavSectionItem>
        <AppNavSectionItem title="Cadastrar Regras"></AppNavSectionItem>
        <AppNavSectionItem title="Gerenciar Regras"></AppNavSectionItem>
      </AppNavSection>
      <AppNavSection title="Produto">
        <AppNavSectionItem title="Cadastrar Produto"></AppNavSectionItem>
        <AppNavSectionItem title="Gerenciar Produtos"></AppNavSectionItem>
        <AppNavSectionItem title="Cadastrar Categoria"></AppNavSectionItem>
        <AppNavSectionItem title="Gerenciar Categorias"></AppNavSectionItem>
      </AppNavSection>
      <AppNavSection title="Informações de Contato">
        <AppNavSectionItem title="Cadastrar Endereço"></AppNavSectionItem>
        <AppNavSectionItem title="Gerenciar Informações de Contato"></AppNavSectionItem>
      </AppNavSection>
    </div>
  </nav>
</template>
