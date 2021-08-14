<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
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
export default {
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
  background-color: #52b788 !important;
  color: black !important;
}
.c-sidebar-nav{
  background-color:#52b788 !important;
  color: black !important;
}
.c-sidebar-brand{
  background: #52b788 !important;
  color: black !important;
}
.c-sidebar-minimizer{
  background: #52b788 !important;
  color: black !important;
}
ul.c-sidebar-nav li a {
  color: black !important;
}
ul.c-sidebar-nav li a svg path{
  fill: black !important;
}
ul.c-sidebar-nav li {
  color: black !important;
}
ul.c-sidebar-nav li.c-show ul li a{
    background: #74c69d !important;
}
ul.c-sidebar-nav li.c-show a{
    background: #95d5b2 !important;
}
.c-sidebar-nav-item a:hover, .c-sidebar-nav-dropdown a:hover{
  background: #95d5b2 !important
}
.c-active{
  background-color: #95d5b2 !important;
}
</style>