<template>
  <nuxt-img
    src="/img/hero_shape.svg"
    alt=""
    class="pointer-events-none absolute top-0 right-0 -z-10 hidden max-h-[110%] w-[70%] max-w-[100%] select-none object-cover md:block"
  />
  <main
    class="flex h-screen flex-col items-center justify-center gap-5 px-10 md:w-[50%] md:items-start md:px-7"
  >
    <h1
      class="text max-w-lg text-center font-display text-3xl font-bold md:text-left"
    >
      Bringing Artificial Intelligence and Medicine together.
    </h1>
    <p class="max-w-lg text-center md:text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <nuxt-link class="button text-lg">BECOME A MEMBER</nuxt-link>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
