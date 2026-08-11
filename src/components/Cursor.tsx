import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });
    requestAnimationFrame(function loop() {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
        // cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      }
      requestAnimationFrame(loop);
    });
    const applyHoverState = (element: HTMLElement, rect: DOMRect) => {
      if (element.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      }
      if (element.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const attachListeners = (item: Element) => {
      const element = item as HTMLElement;
      if (element.dataset.cursorBound) return;
      element.dataset.cursorBound = "true";
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        applyHoverState(element, target.getBoundingClientRect());
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });

      // The cursor may already be resting over this element when it is
      // revealed (e.g. behind the loading screen), in which case no
      // "mouseover" ever fires. Check immediately so the disabled/icons
      // state applies without requiring a fresh mouse-enter.
      if (element.matches(":hover")) {
        applyHoverState(element, element.getBoundingClientRect());
      }
    };

    document.querySelectorAll("[data-cursor]").forEach(attachListeners);

    const observer = new MutationObserver(() => {
      document.querySelectorAll("[data-cursor]").forEach(attachListeners);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
