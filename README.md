> Open this page at [https://juliekol.github.io/pxt-levels/](https://juliekol.github.io/pxt-levels/)

## Overview

This extension adds support for multiple levels in your game. For example, in a platformer, one tilemap will display the first level. When the player beats this level, we would move to the next level that will be displayed using a different tilemap.

* Each level is designated using an integer. The first level is 1.

* For every level you support, you must add the `on start level` block. If your game has three levels, you must add three such blocks, one for each level.

* The best practice is to add the block `start level 1` in the `on start` block of your game.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/juliekol/pxt-levels** and import

## Blocks

### `on start level N`

Contains the blocks that should run when level N is started. You must add such a block for every level you support.

### `start level N`

Makes the game change the current level to N.

### `start next level`

Makes the game increase the current level by 1 and start it.

### `restart level`

Makes the game restart the current level.

## Example

<img src="https://i.imgur.com/3xsrKTr.png" width=600 />

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/juliekol/pxt-levels** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
