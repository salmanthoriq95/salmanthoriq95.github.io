export function initializeSmoothDetails() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  document
    .querySelectorAll<HTMLDetailsElement>("details[data-smooth-details]")
    .forEach((details) => {
      const summary = details.querySelector<HTMLElement>("summary");

      if (!summary || details.dataset.motionReady === "true") return;
      details.dataset.motionReady = "true";

      let animation: Animation | undefined;

      summary.addEventListener("click", (event) => {
        event.preventDefault();

        if (animation) {
          animation.commitStyles();
          animation.cancel();
        }

        if (reduceMotion.matches) {
          details.open = !details.open;
          return;
        }

        const startHeight = `${details.getBoundingClientRect().height}px`;
        const isClosing = details.open;

        if (isClosing) {
          details.dataset.closing = "true";
        } else {
          details.open = true;
          delete details.dataset.closing;
        }

        const endHeight = isClosing
          ? `${summary.getBoundingClientRect().height}px`
          : `${details.scrollHeight}px`;

        details.style.overflow = "hidden";
        animation = details.animate(
          { height: [startHeight, endHeight] },
          {
            duration: 360,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          },
        );

        animation.addEventListener(
          "finish",
          () => {
            details.open = !isClosing;
            delete details.dataset.closing;
            details.style.removeProperty("overflow");
            details.style.removeProperty("height");
            animation = undefined;
          },
          { once: true },
        );
      });
    });
}
