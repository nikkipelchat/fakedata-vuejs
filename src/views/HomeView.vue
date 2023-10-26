<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      loading: true,
      name: 'Nikki Pelchat',
    }
  },
  methods: {
    getName() {
        return this.name
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
})
</script>

<script setup>
// import { computed } from 'vue'

// const currentAge = computed(() => {
//     var today = new Date()
//     var birthDate = new Date("1992/02/04")
//     var age = today.getFullYear() - birthDate.getFullYear()
//     var m = today.getMonth() - birthDate.getMonth()

//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--
//     }

//     return age
// })
</script>

<template>
  <section class="w-full h-20">
    <div class="z-10 flex flex-col justify-center w-full ml-10 h-20 text-center text-gray-200">
      <div class="max-w-fit">
        <p v-if="!loading" class="text-xl lg:text-2xl">
          {{ getName() }}
        </p>
        <p v-else class="text-xl lg:text-2xl">
          ...
        </p>
      </div>
    </div>

    <div class="absolute inset-0 z-0 w-full h-20">
      <div class="absolute inset-0 bg-black bg-opacity-80" />
    </div>
  </section>
</template>
