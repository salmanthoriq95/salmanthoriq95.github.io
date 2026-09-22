export function initializeHorizontalDrag() {
  document
    .querySelectorAll<HTMLElement>("[data-horizontal-drag]")
    .forEach((scroller) => {
      if (scroller.dataset.dragReady === "true") return;
      scroller.dataset.dragReady = "true";

      let isDragging = false;
      let startX = 0;
      let startScroll = 0;

      scroller.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "touch" || event.button !== 0) return;

        isDragging = true;
        startX = event.clientX;
        startScroll = scroller.scrollLeft;
        scroller.classList.add("is-dragging");
        scroller.setPointerCapture(event.pointerId);
        event.preventDefault();
      });

      scroller.addEventListener("pointermove", (event) => {
        if (!isDragging) return;
        scroller.scrollLeft = startScroll - (event.clientX - startX);
      });

      const stopDragging = (event: PointerEvent) => {
        if (!isDragging) return;

        isDragging = false;
        scroller.classList.remove("is-dragging");
        if (scroller.hasPointerCapture(event.pointerId)) {
          scroller.releasePointerCapture(event.pointerId);
        }
      };

      scroller.addEventListener("pointerup", stopDragging);
      scroller.addEventListener("pointercancel", stopDragging);
    });
}
