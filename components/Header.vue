<template>
  <header
    class="mt-7 flex w-screen flex-col justify-between px-7 font-display text-lg font-medium text-white md:flex-row"
  >
    <nuxt-img src="/img/logo.svg" alt="AiMED Logo" class="h-20" />
    <nav class="hidden flex-row items-center gap-10 md:flex">
      <nuxt-link to="/">About</nuxt-link>
      <nuxt-link to="/">Contact</nuxt-link>
      <nuxt-link
        to="/"
        class="border-5 border-3 border- rounded-full border-2 py-2 px-6 font-bold uppercase"
      >
        BECOME A MEMBER
      </nuxt-link>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
