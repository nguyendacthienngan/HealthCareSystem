<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <div class="c-sidebar-brand-full">
        <br>
        <img 
          src="../assets/logo/Logo(1).png"
          width="150"
          height="104"
        >
      </div>
            <img 
        class="c-sidebar-brand-minimized" 
        src="../assets/logo/MinimizerIcon.png"
        width="35"
        height="28"
      >
    </CSidebarBrand>

    <CRenderFunction 
      
      flat :content-to-render="computedNav"
    />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import nav_patient from './_nav_patient'
import nav_doctor from './_nav_doctor'
import cilPencil from '../assets/logo/logo'

export default {
  pencil: cilPencil,
  name: 'TheSidebar',
  computed: {
    computedNav () {
      if (localStorage.currentUserID == '1')
        return nav.items
      else if (localStorage.currentUserID == '2')
        return nav_doctor
      return nav_patient
    },
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>
<style >
.c-sidebar-dark {
  background-color: #003049  !important;
  color: white !important;
}
.c-sidebar-nav{
  background-color:#003049  !important;
  color: white !important;
}
.c-sidebar-brand{
  background: #003049  !important;
  color: white !important;
}
.c-sidebar-minimizer{
  background: #003049  !important;
  color: white !important;
}
ul.c-sidebar-nav li a {
  color: white !important;
}
ul.c-sidebar-nav li a svg path{
  fill: white !important;
}
ul.c-sidebar-nav li {
  color: white !important;
}
ul.c-sidebar-nav li.c-show ul li a{
  background: #ff8f95 !important;
  color: white !
}
ul.c-sidebar-nav li.c-show a{
    background: #fd5d65 !important;
    color: white !important;
}
.c-sidebar-nav-item a:hover, .c-sidebar-nav-dropdown a:hover{
  background: #ff8f95 !important
}
.c-active{
  background-color: #fd5d65 !important;
}
</style>