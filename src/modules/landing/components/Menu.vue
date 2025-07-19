<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const items1 = ['Apartments', 'Massage salon']
  const items2 = ['Attractions', 'About us']

  const hasScrolled = ref(false)

  const checkScroll = () => {
    hasScrolled.value = window.scrollY > 0
  }

  onMounted(() => {
    checkScroll()
    window.addEventListener('scroll', checkScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })
</script>

<style lang="scss" scoped>
  #menu-container {
    transition: 0.3s ease;
    width: 100%;
    position: fixed;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;

    padding: 25px 0px;
    z-index: 99;

    .items {
      display: flex;
      gap: 50 + px;
      align-items: center;
    }

    img {
      transition: 0.3s ease;

      height: 100px;
    }

    &.active {
      transition: 0.3s ease;

      background-color: rgba(0, 0, 0, 0.5);

      backdrop-filter: blur(5px);

      img {
        transition: 0.3s ease;

        height: 60px;
      }
    }
  }
</style>

<template></template>
