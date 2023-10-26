<script setup>
import LayoutFooter from "@/components/LayoutFooter.vue"
import TableContentView from "./views/TableContentView.vue"
import HomeView from "./views/HomeView.vue"
import { ref, onMounted } from 'vue'

const activeLink = ref('home')

const home = ref(null)

const observer = new IntersectionObserver((entries) => {
	if(entries[0].isIntersecting === true)
		activeLink.value = entries[0].target.id
}, { threshold: [0.1] })

onMounted(() => {
  observer.observe(home.value)
})
</script>

<template>
  <div class="flex flex-col h-screen font-primary">
    <main class="flex-grow overflow-y-scroll scroll-smooth h-full">
      <div id="home" ref="home" class="w-full h-20">
        <HomeView />
      </div>

      <div id="tableContent" class="w-full h-full">
        <TableContentView />
      </div>

      <!-- Add button example -->

      <!-- Add some responsive example of some blocks -->

      <div id="footer" class="h-20">
        <LayoutFooter />
      </div>
    </main>
  </div>
</template>
