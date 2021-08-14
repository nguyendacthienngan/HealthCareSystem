<template>
  <div id=''>
    <CAlert show color="success">
      <h4 class="alert-heading">Nhắc nhở</h4>
      <p>
        Bạn sắp có một hẹn khám vào ngày <strong>15/9/2021</strong> với bác sĩ <strong>Chung Thái Dung</strong></p>
      <p class="mb-0">
        Hãy ấn vào <a href="#/meetings/videocall">Đây</a> nhé
      </p>
    </CAlert>
    <div class="card-header-actions p-3 ">
        <CButton type="submit" size="sm" color="primary" class="" href="#/meetings/create">
          <CIcon :content="$options.freeSet.cilPlus"/> 
          Create
        </CButton>
    </div>
    <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
    :eventSettings= 'eventSettings'>
      <e-views>
        <e-view option='Week' startHour='07:00' endHour='15:00' ></e-view>
        <e-view option='WorkWeek' startHour='10:00' endHour='18:00' ></e-view>
        <e-view option='Month' showWeekend=false></e-view>
      </e-views>
    </ejs-schedule>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { scheduleData } from './datasource.js';
  import { extend } from '@syncfusion/ej2-base';
  import { SchedulePlugin,  WorkWeek, Month, Week } from '@syncfusion/ej2-vue-schedule';
  import { freeSet } from '@coreui/icons'

  Vue.use(SchedulePlugin);
  export default {
    freeSet,
    data () {
      return {
        eventSettings: { dataSource: extend([], scheduleData, null, true) },
        selectedDate: new Date(2018, 1, 15)
      }
    },
    provide: {
      schedule: [ WorkWeek, Month, Week]
    }
  }
</script>