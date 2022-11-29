<template>
  <div
    :class="`${theme === 'dark' ? 'dark' : ''}`"
    class="test h-screen w-screen flex flex-col gap-10 items-center justify-center"
  >
    <ThemeSwitcher />
    <MDEditor />
  </div>
</template>

<script lang="ts" setup>
import { ITheme } from './utils/theme'

AppSetup()

const theme = useState<ITheme>('theme.current')

useHead({
  title: 'My App',
  meta: [
    {
      name: 'description',
      content: 'My App',
    },
  ],
})
</script>

<style>
.test {
  background-color: aqua;
}

.test.dark {
  background-color: black;
}
</style>
