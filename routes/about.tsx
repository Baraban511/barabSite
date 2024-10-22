
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
          src="/aorus_logo.png"
          position="-6 0 -10" rotation="0 90 0" width="4" height="4" transparent="true">
        </a-plane>
        <a-entity position="3.9 5 -10" rotation="0 0 0" scale="10 10 10" text="value: Stuff I like; "></a-entity>
        <a-entity position="3.6 5 -30" rotation="0 0 0" scale="10 10 10" text="value: In expansion !; "></a-entity>
        <a-entity gltf-model="/house.gltf" position="0 0 -20"></a-entity>
      </a-scene>
    </>
  );
}


