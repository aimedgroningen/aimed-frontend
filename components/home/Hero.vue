<template>
  <!-- Hero blob -->
  <div
    class="mask absolute right-0 -z-10 hidden h-[120%] w-[200%] items-center justify-end bg-primary max-[1350px]:-mr-[calc(950px-50vw)] md:flex"
  >
    <img
      src="/img/hero_doctor.svg"
      class="h-[60 %] mr-[calc(950px-50vw)] mt-[5%] min-[1350px]:mr-[20vw]"
      alt="Illustration of a doctor."
    />
  </div>

  <!-- Hero content -->
  <main
    class="flex h-screen flex-col items-center justify-center gap-5 px-10 md:w-[50%] md:items-start"
  >
    <h1
      class="text max-w-xl text-center font-display text-4xl font-bold md:text-left"
    >
      Bringing Artificial Intelligence and Medicine together.
    </h1>
    <p class="max-w-xl text-center font-body text-lg md:text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <NuxtLink
      to="https://docs.google.com/forms/d/e/1FAIpQLSfDSZDTvi1tVvczvI88B_terCy0iBb_p2fwutHK5-_sC8lPvg/viewform"
      target="_blank"
      class="button text-lg"
      >BECOME A MEMBER</NuxtLink
    >
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
