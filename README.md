# Skywalker Quest Map

Skywalker Quest Map is an interactive guide accompanying a podcast that explores Luke Skywalker's mythic journey. The site combines HTML, CSS and a few small React components to present chapter summaries, reflection prompts and additional resources.

## Repository structure

- `skywalker-quest-map/` – main site files
  - `skywalker_quest_map_guide.html` – interactive guide page
  - `skywalker_quest_guide.css` – core stylesheet
  - `alternates/` – experimental stylesheets and Markdown versions
  - `testing/` – sandbox for CSS and React experiments (see `testing/testing-notes.md`)
  - image assets used in the guide

## Usage

The guide is a static site. Open `skywalker-quest-map/skywalker_quest_map_guide.html` directly in your browser or run a lightweight server:

```bash
cd skywalker-quest-map
python3 -m http.server
```

Then visit `http://localhost:8000/skywalker_quest_map_guide.html` to explore the map and reflection questions.
