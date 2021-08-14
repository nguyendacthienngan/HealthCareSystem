<template>
  <div>
      <TheHeader/>
  </div>
</template>

<script>
import TheHeader from '../../containers/TheHeader'

export default {
  components: {
    TheHeader,
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
