<template>
  <div>

      <CButton>Trở về</CButton>
      <TheSidebar/>
      <TheHeader/>
  </div>
</template>

<script>
import TheHeader from '../../containers/TheHeader'
import TheSidebar from '../../containers/TheSidebar'

export default {
  components: {
    TheHeader,
    TheSidebar
  },
  mounted() {
    var callFrame = window.DailyIframe.createFrame({
        showLeaveButton: true,
        iframeStyle: {
            position: 'fixed',
            width: '100%',
            height: '100%'
        }
    });
    callFrame.join({ url: "https://ehealthcaresystem.daily.co/Test" });
  },
};
</script>
