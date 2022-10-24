<template>
  <div class="absolute flex w-screen flex-col gap-2">
    <header
      class="mt-7 flex w-screen flex-col justify-between px-7 font-display text-lg font-medium text-white md:flex-row"
    >
      <NuxtImg src="/img/logo.svg" alt="AiMED Logo" class="h-12" />
      <nav class="hidden flex-row items-center gap-10 md:flex">
        <NuxtLink to="mailto:board@aimedgroningen.com">Contact</NuxtLink>
        <NuxtLink
          to="https://docs.google.com/forms/d/e/1FAIpQLSfDSZDTvi1tVvczvI88B_terCy0iBb_p2fwutHK5-_sC8lPvg/viewform"
          target="_blank"
          class="button-outline"
        >
          BECOME A MEMBER
        </NuxtLink>
      </nav>
    </header>
    <a
      href="https://github.com/aimedgroningen/aimed-frontend/issues/new/choose"
      target="_blank"
    >
      <div
        class="font- flex w-screen justify-center bg-accent py-1 text-center font-body font-bold text-white"
      >
        Issue with the website or suggestion for a new feature? Press here!
      </div>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
