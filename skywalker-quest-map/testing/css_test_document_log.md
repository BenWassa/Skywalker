# CSS Test Document Changelog

This log records updates made to `css_test_document.html` and related styles for testing purposes.

## 2025-06-18
- Initial sync of test environment with active guide files.
- Copied `skywalker_quest_map_guide.html` to `css_test_document.html`.
- Copied `skywalker_quest_guide.css` to `css_test_styles.css`.
- Updated CSS link inside the test document to reference `css_test_styles.css`.

## 2025-06-19
- Attempted to fix the star-border effect for the professor's voice section to appear only around the border of the box.
- Initially adjusted the effect to use a linear gradient moving along the top and bottom edges.
- Encountered difficulties in setting up the star-border effect neatly, leading to its removal from the CSS.
- Removed React collapsible component styles from `css_test_styles.css`.
- Noted the possibility of revisiting the star-border effect implementation in the future.
- Removed star-border effect elements (`border-gradient-bottom` and `border-gradient-top`) from `css_test_document.html`.
- Removed React collapsible component elements and scripts from `css_test_document.html`.
- Removed star-border animation styles from `css_test_styles.css`.
- Removed `inner-content` class div elements from `css_test_document.html` to eliminate the extra box around professor's voice sections.
- Removed `inner-content` class styles from `css_test_styles.css`.
- Updated Tiered Questions styling in `css_test_styles.css` to reduce backgrounds by setting background to transparent and border to 0px for better stylization.
- Added SpotlightCard React component to replace the layout for Tiered Questions with interactive spotlight effects in `css_test_document.html`.
- Created `SpotlightCard.js` and `SpotlightCard.css` to implement the new component.
- Replaced collapsible sections with static `question-level` divs and `h3` headings in `css_test_document.html`.
- Removed leftover collapsible JavaScript handlers from `css_test_document.html`.
- Removed unused collapsible styles from `css_test_styles.css`.
- Added `.question-level` styles to `css_test_styles.css` for consistent spacing.


## 2025-06-20
- Fixed SpotlightCard initialization by loading `init_react.js` and
  `render_spotlight_cards.js` as regular scripts instead of Babel sources.
- Cleaned up duplicate `ReactDOM.render` calls in `render_spotlight_cards.js`.
- Simplified `css_test_document.html` by removing the obsolete collapsible script comment.

