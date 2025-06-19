document.addEventListener("DOMContentLoaded", function () {
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error("React or ReactDOM is not loaded. Cannot render SpotlightCard components.");
    return;
  }

  if (typeof SpotlightCard === 'undefined') {
    console.error("SpotlightCard component is not defined. Cannot render.");
    return;
  }

  console.log("Rendering SpotlightCard components manually.");

  // Find all elements with the tag name 'SpotlightCard'
  const spotlightCardElements = document.querySelectorAll('SpotlightCard');
  
  spotlightCardElements.forEach((element, index) => {
    // Extract attributes
    const className = element.getAttribute('className') || '';
    const spotlightColor = element.getAttribute('spotlightColor') || 'rgba(255, 255, 255, 0.25)';

    // Get the inner HTML as children
    const children = element.innerHTML;

    // Create a wrapper div to render the React component into
    const wrapper = document.createElement('div');
    wrapper.id = `spotlight-card-wrapper-${index}`;
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    // Render the React component into the wrapper without removing the original element
    const reactElement = React.createElement(
      SpotlightCard,
      { className, spotlightColor },
      React.createElement('div', { dangerouslySetInnerHTML: { __html: children } })
    );

    ReactDOM.render(reactElement, wrapper);
    console.log(`Rendered SpotlightCard ${index + 1} of ${spotlightCardElements.length}`);
  });
});
