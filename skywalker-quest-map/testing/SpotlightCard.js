(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    global.SpotlightCard = factory();
  }
})(this, function () {
  // Ensure React is available globally
  const React = window.React;
  if (!React) {
    console.error("React is not loaded. SpotlightCard component cannot be defined.");
    return null;
  }

  function SpotlightCard({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) {
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
      }
    };

    return React.createElement(
      'div',
      {
        ref: divRef,
        onMouseMove: handleMouseMove,
        className: `card-spotlight ${className}`
      },
      children
    );
  }

  return SpotlightCard;
});
