import { useEffect, useRef, useState } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

// The original site renders these blocks as live Rive canvases driven by
// /images/home/rubie-home-animations.riv. The clone captured a single frame of each
// as a PNG still, so the artwork was right but frozen; this restores the real animation.
// `still` stays as the pre-paint placeholder and as the reduced-motion fallback.

// useRive has to be called unconditionally, so the canvas lives in its own component
// that is only mounted once the block is near the viewport — Rive decodes a 280KB file
// and runs a render loop, so mounting all three up front is wasteful.
function Canvas({ artboard, width, height }) {
  const { RiveComponent } = useRive({
    src: "/images/home/rubie-home-animations.riv",
    artboard,
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  });
  return <RiveComponent style={{ width: "100%", height: "100%" }} aria-hidden="true" />;
}

export default function Riv({ artboard, still, width, height, className }) {
  const wrap = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The original's canvas is fluid: it fills its column and keeps the artboard's aspect
  // ratio, so at 390px it scales down rather than forcing the column wider. Pinning the
  // captured pixel size here instead made this block 237px too tall on mobile.
  // max-width keeps it from scaling *past* the captured size on wide viewports.
  const style = {
    verticalAlign: "top",
    width: "100%",
    maxWidth: `${width}px`,
    aspectRatio: `${width} / ${height}`,
  };

  return (
    <div ref={wrap} className={className} style={style}>
      {visible
        ? <Canvas artboard={artboard} width={width} height={height} />
        : <img src={still} alt="" style={{ ...style, maxWidth: "100%" }} aria-hidden="true" width={width} height={height} />}
    </div>
  );
}
