<template>
  <div>
      <top-headers></top-headers>
      <div class="mx-auto w-4/5">
        <div class="grid grid-cols-2 gap-6 mt-10">
          <router-link to="/digital-bahasa" ><button class="w-full py-12 px-5 font-bold text-center bg-white">Inkubasi Digital Bahasa</button></router-link>
          <router-link to="/jawara-center" ><button class="w-full py-12 px-5 font-bold text-center bg-white">Sistem Jawara Center</button></router-link>
          <router-link to="/student-exchange" ><button class="w-full py-12 px-5 font-bold text-center bg-white">Sistem Student Exchange</button></router-link>
          <router-link to="/job-training" ><button class="w-full py-12 px-5 font-bold text-center bg-white">Sistem On The Job Training</button></router-link>
        </div>
      </div>
  </div>
</template>

<script>
import TopHeaders from '../components/TopHeaders.vue'
export default {
  components:{
    TopHeaders
  }
}
</script>

<style>

</style>