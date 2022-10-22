<template>
  <section
    class="grid w-screen -translate-y-24 gap-10 px-10 font-body md:grid-cols-2"
  >
    <div class="rounded-3xl border py-10 px-10 shadow-lg shadow-neutral-500">
      <h1 class="font-display font-bold">Who are we?</h1>
      <br />
      <p>
        AIMED is a multidisciplinary and growing team, with bachelor and master
        students studying Medicine, Biomedical Engineering, Artificial
        Intelligence, and business. This interfaculty association welcomes
        students from any study, interested in the application of Artificial
        Intelligence and Data Science in the Medical Field.
      </p>
    </div>

    <div></div>

    <div class="flex h-[30vh] w-full justify-center">
      <nuxt-img
        src="/img/blob_doctor.svg"
        alt="Illustration of a doctor"
      ></nuxt-img>
    </div>

    <div
      class="flex flex-col justify-between rounded-3xl border py-10 px-10 shadow-lg shadow-neutral-500"
    >
      <h1 class="font-display font-bold">What do we organize?</h1>
      <br />
      <p>
        Our team organizes a range of activities with aims to bring awareness,
        education, and training opportunities around the topics of AI and
        Medicine.
      </p>
      <div class="mt-7 grid grid-cols-2 gap-2">
        <div class="button !bg-primary hover:!bg-accent">Knowledge sharing</div>
        <div class="button">Hackathons</div>
        <div class="button">Webinars</div>
        <div class="button !bg-primary hover:!bg-accent">
          Machine learning course
        </div>
      </div>
    </div>

    <div
      class="shadow- rounded-3xl border py-10 px-10 shadow-lg shadow-neutral-500"
    >
      <h1 class="font-display font-bold">
        I am not very experienced with AI. Can I still become a member?
      </h1>
      <br />
      <p>
        No prior experience is needed. Applications are open for those at any
        skill level, and are motivated to contribute and learn in the process.
      </p>
    </div>

    <div class="flex h-[30vh] w-full justify-center">
      <nuxt-img
        src="/img/img_sharing.svg"
        alt="Illustration of two people talking about AI"
      ></nuxt-img>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
