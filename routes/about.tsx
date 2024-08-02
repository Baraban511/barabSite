
import { Head } from "$fresh/runtime.ts";

export default function VR() {
  return (
    <>
      <Head>
        <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
      </Head>
      <a-scene>
        <a-box
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
          animation="property: rotate; to: 2.2; dir: alternate; dur: 2000; loop: true"></a-box>
        <a-plane
          src=""
          position="0 0 -4" rotation="0 0 0" width="4" height="4" text="value: Hello, A-Frame!; color: #BBB" material="opacity: 0.0; transparent: true">
        </a-plane>
        <a-sky color="#008080"></a-sky>

      </a-scene>
    </>
  );
}


