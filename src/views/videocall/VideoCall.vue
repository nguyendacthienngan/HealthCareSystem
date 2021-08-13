<template>
  <div>
    <!-- Test -->
  </div>
</template>

<script>
export default {
  mounted() {
    // const callObject = window.DailyIframe.createCallObject();
    // callObject.on('participant-updated', (event) => {
    //     const p = event.participant;
    //     myCustomMediaStreamTracksHandler(p.user_id, p.videoTrack, p.audioTrack);
    // });
    // callObject.join({ url: 'https://ehealthcaresystem.daily.co/Test' });

    var callFrame = window.DailyIframe.createFrame({
        showLeaveButton: true,
        iframeStyle: {
            position: 'fixed',
            width: '100%',
            height: '100%'
        }
    });
    // var callFrame = window.DailyIframe.createFrame();
    callFrame.join({ url: "https://ehealthcaresystem.daily.co/Test" });
  },
};
</script>
