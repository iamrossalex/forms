# Forms Generator (Under construction!)

## Tasks

- [x] Font
- [ ] Popups
- [ ] Extendable nested lists
- [ ] Dependency. Watcher method to set dependency on selected element.

## Types of components

- Layouts
  - [x] Layouts
  - [x] Tabs
  - [ ] Expandable
  - [ ] Popups
  - [ ] Accordion
- Elements
  - [x] Text
  - [x] Number
  - [ ] Range
  - [ ] Thumbler
  - [ ] Dropdown
  - [ ] RadioGroup
  - [ ] CheckGroup
  - [ ] Textarea
  - [ ] HTMLEditor
  - [ ] CodeEditor
  - [ ] Image
- Buttons
  - [ ] Button
  - [ ] ButtonGroup

## Editor JS Blocks formating

```json
{
  "time": 1683528661944,
  "blocks": [
    {
      "id": "dHp0nlwoBN",
      "type": "header",
      "data": {
        "text": "Header title",
        "level": 2
      }
    },
    {
      "id": "vK8H_Vzhsx",
      "type": "paragraph",
      "data": {
        "text": "Paragraph <b>with</b> a <a href=\"https://wacdis.com\">link</a>"
      }
    },
    {
      "type" : "image",
      "data" : {
        "file": {
          "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg"
        },
        "caption" : "Roadster // tesla.com",
        "withBorder" : false,
        "withBackground" : false,
        "stretched" : true
      }
    },
    {
      "id": "2tGXtwzCYI",
      "type": "linkTool",
      "data": {
        "link": "https://www.youtube.com/watch?v=4J4dg8-kT1I",
        "meta": {}
      }
    },
    {
      "id": "_URrf-wnKA",
      "type": "raw",
      "data": {
        "html": "<div>raw html</div>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4J4dg8-kT1I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
      }
    },
    {
      "id": "fHIozhDaV3",
      "type": "list",
      "data": {
        "style": "ordered",
        "items": [
          "One",
          "two"
        ]
      }
    },
    {
      "id": "fnw8sSELHz",
      "type": "quote",
      "data": {
        "text": "Citation",
        "caption": "Author",
        "alignment": "left"
      }
    },
    {
      "id": "NOu31X-yqK",
      "type": "table",
      "data": {
        "content": [
          [
            "1",
            "2",
            "3",
            "4"
          ],
          [
            "5",
            "6",
            "7",
            "8"
          ]
        ]
      }
    }
  ],
  "version": "2.25.0"
}
```
