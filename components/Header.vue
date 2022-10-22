<template>
  <header
    class="absolute mt-7 flex w-screen flex-col justify-between px-7 font-display text-lg font-medium text-white md:flex-row"
  >
    <nuxt-img src="/img/logo.svg" alt="AiMED Logo" class="h-20" />
    <nav class="hidden flex-row items-center gap-10 md:flex">
      <nuxt-link to="/">About</nuxt-link>
      <nuxt-link to="/">Contact</nuxt-link>
      <nuxt-link to="/" class="button-outline"> BECOME A MEMBER </nuxt-link>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
