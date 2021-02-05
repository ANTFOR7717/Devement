<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div>

          <div class="mx-auto flex items-center justify-center">

             <span class="text-lg leading-6 font-medium text-gray-600">
              Schedule Meeting
            </span>
          </div>
          <div class="text-center sm:mt-5">


            <div class="calendar-height flex justify-center">
              <div class="mb-5">
                <VueCtkDateTimePicker color="#4f46e4" :noButtonNow="true" :inline="true" :autoClose="true" v-model="date.selected" />
                <div class="flex justify-center inline-block">
                  <div class="date-time">
                    <div class="mt-4 text-2xl text-white">{{ date.selected.slice(8,10) }}</div>
                    <span class="mb-3 text-indigo-50">{{ month(parseInt(date.selected.slice(5,7))) }}</span>
                  </div>
                  <div class="date-time">
                    <div class="mt-4 text-2xl text-white">{{ date.selected.slice(11,16) }}</div>
                    <span class="mb-3 text-indigo-50">{{ date.selected.slice(17,19).toUpperCase() }}</span>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
        <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button v-on:click="$emit('submit-request')" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
            Submit Request
          </button>
          <button v-on:click="$emit('cancel')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import Datepicker from 'vuejs-datepicker';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
export default {
  name: "schedule",
  components: {
    Datepicker,
    VueCtkDateTimePicker
  },
  data: () => ({
    date: {
      current: new Date,
      selected: ''
    }
  }),
  methods: {
    month(number) {
      let currentMonth = ['January','February','March','April','May','June','July','August','September','October','November','December']
      return currentMonth[number]
    }
  }
}
</script>

<style scoped>

.calendar-height {
  height: auto
}

.date-time {
  @apply w-24 h-20 bg-indigo-500 border-indigo-500 m-1 rounded;
}


</style>
