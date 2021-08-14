<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://coreui.io" target="_blank">HealthCare E-System</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} The Lazy Knights.</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Credit by</span>
      <a href="https://github.com/nguyendacthienngan/HealthCareSystem">Thien Ngan and Thai Dung</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
