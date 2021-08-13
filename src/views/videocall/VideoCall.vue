<template>
  <div>
    Test
  </div>
</template>

<script>
export default {
  mounted() {
    var callFrame = window.DailyIframe.createFrame();
    callFrame.join({ url: "https://ehealthcaresystem.daily.co/Test" });
  },
};
</script>
