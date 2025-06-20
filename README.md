# Skywalker Quest Map

Skywalker Quest Map is an interactive guide accompanying a podcast that explores Luke Skywalker's mythic journey. The site is built with plain HTML and CSS to present chapter summaries, reflection prompts and additional resources. Earlier prototypes included small React snippets, but these have been removed in favor of a simpler static approach.

## Repository structure

- `skywalker-quest-map/` – main site files
  - `skywalker_quest_map_guide.html` – interactive guide page
  - `skywalker_quest_guide.css` – core stylesheet
  - `alternates/` – experimental stylesheets and Markdown versions
  - `testing/` – sandbox for layout and style experiments (see `testing/testing-notes.md`)
  - image assets used in the guide
  - `.vscode/` – settings for the Live Server extension (port 5501)

## Usage

The guide is a static site. Open `skywalker-quest-map/skywalker_quest_map_guide.html` directly in your browser or run a lightweight server:

```bash
cd skywalker-quest-map
python3 -m http.server
```

Then visit `http://localhost:8000/skywalker_quest_map_guide.html` to explore the map and reflection questions.

If you prefer the VS Code **Live Server** extension, open the `skywalker-quest-map` folder and start Live Server. The included `.vscode/settings.json` configures the default port to `5501`.
