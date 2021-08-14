<template>
      <Datepicker 
        v-model="this.date"
        :lang="fr" 
      />
    <!-- <div></div> -->

</template>
<script>
  import VueDatepickerUi from 'vue-datepicker-ui';

  import 'vue-datepicker-ui/lib/vuedatepickerui.css';

  export default {
    components: {
      Datepicker: VueDatepickerUi
    },
    date: new Date()
  }
</script>
