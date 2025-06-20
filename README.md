# Skywalker Quest Map

This repository hosts the materials for the **Skywalker Quest Map**, an interactive companion guide to the podcast exploring Luke Skywalker's mythic journey. The project combines HTML, CSS, and small React components to present chapter summaries, reflection prompts, and additional resources.

## Repository structure

- `skywalker-quest-map/` – main site files
  - `skywalker_quest_map_guide.html` – interactive guide page
  - `skywalker_quest_guide.css` – core stylesheet
  - `alternates/` – experimental stylesheets and a Markdown version of the guide
  - `testing/` – sandbox with React components and CSS experiments

## Usage

The guide is a static site. Open `skywalker-quest-map/skywalker_quest_map_guide.html` directly in your browser or run a lightweight server:

```bash
cd skywalker-quest-map
python3 -m http.server
```

Then visit `http://localhost:8000/skywalker_quest_map_guide.html` to explore the map and reflection questions.

See `skywalker-quest-map/README.md` for more details about the guide files.
