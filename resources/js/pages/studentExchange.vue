<template>
  <div>
      <top-headers />
      <div class="relative">
        <aside class="absolute top-0 left-0 bg-white p-5 border-t w-72 h-screen text-gray-400">
          <button @click="view = 1" class="my-3 w-full px-2 py-4 text-sm text-center bg-gray-50 rounded">Persyaratan</button>
          <button @click="view = 2" class="my-3 w-full px-2 py-4 text-sm text-center bg-gray-50 rounded">Formulir Pendaftaran</button>
          <button @click="view = 3" class="my-3 w-full px-2 py-4 text-sm text-center bg-gray-50 rounded">Inventarisir Pertukaran Pelajar</button>
        </aside>
        <section class="p-5" style="margin-left:18rem">
            <div v-if="view === 1">
                <persyaratan />
            </div>
            <div v-else-if="view === 2">
                <formulir />
            </div>
            <div v-else>
                <inventarisir />
            </div>
        </section>
      </div>
  </div>
</template>

<script>
import TopHeaders from '../components/TopHeaders.vue'
import Persyaratan from '../components/studentExchange/persyaratan.vue'
import Formulir from '../components/studentExchange/formulir.vue'
import Inventarisir from '../components/studentExchange/inventarisir.vue'
export default {
    components:{
        TopHeaders,
        Persyaratan,
        Formulir,
        Inventarisir
    },
    data(){
        return {
            view: 1
        }
    }
}
</script>

<style>

</style>