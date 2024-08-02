
//@ts-nocheck Using A-frame
import { Head } from "$fresh/runtime.ts";
export default function VR() {

  return (
    <>
      <Head>
        <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
      </Head>

      <a-scene>
        <a-sky color="#008080"></a-sky>
        <a-plane
          src="/xbox_logo.png"
          position="6 0 -10" rotation="0 -90 0" width="4" height="4" transparent="true">
        </a-plane>
        <a-plane
          src=""
          position="-6 0 -10" rotation="0 90 0" width="4" height="4" text="value: Hello, A-Frame!; color: #BBB" >
        </a-plane>
        <a-entity position="4 5 -10" rotation="0 0 0" scale="10 10 10" text="value: Stuff I like; "></a-entity>
      </a-scene>
    </>
  );
}


