# Draw.io FontAwesome Library

The [free icons of the FontAwesome icon set](https://fontawesome.com/icons?m=free) (normalized and) ready for usage with [draw.io](https://draw.io) or [draw.io Desktop](https://github.com/jgraph/drawio-desktop). Base size of the icons is 16pt, ideal for working with a page grid of 8pt. Latest published version is **FontAwesome 5.15.4**.

## Usage

### Load on desktop

Download & unzip the [latest release](https://github.com/webketje/drawio-font-awesome/releases/latest), open Draw.io desktop,
and in the <kbd>File</kbd> menu, choose <kbd>Open Library...</kbd>, then select the unzipped library.

<details>
  <summary>Screenshot ></summary>

![How to load this library on desktop](/assets/load-desktop.png)
</details>

### Load online

Thanks to [jsdelivr](https://jsdelivr.com) you can load this library without downloading anything directly!
From the <kbd>File</kbd> menu, choose <kbd>Open Library from</kbd>, then <kbd>URL</kbd> and load the latest version:
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome).

<details>
  <summary>Screenshot ></summary>

  ![How to load this library online](/assets/load-online.png)
</details>

#### Colors
The color can unfortunately not be changed through draw.io options. But you can load the entire library in a particular color, both from the release or online:

[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - blue](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20blue)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - brown](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20brown)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - gray](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20gray)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - green](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20green)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - navy](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20navy)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - olive](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20olive)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - orange](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20orange)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - purple](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20purple)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - red](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20red)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - teal](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20teal)  
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome - white](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome%20-%20white)

#### Versions
You can load different font-awesome versions by replacing `@online` by `@x.x.x`. At the moment 5.15.4, 5.14.0, 5.10.2 and 5.8.2 are available.

### Change icon shade

You can change the icon shade (pale gray -> black ) after dragging it in your diagram by clicking it twice (not double-clicking).
In the right sidebar, in the <kbd>Style</kbd> tab, uncollapse the **Property/ Value** listing, and play with the **Fill opacity**.

### Develop & publish

1. Run `cd FontAwesome && git fetch origin && git submodule update`
2. Run `git checkout x.x.x` in the Fontawesome submodule dir (tag of the submodule you want to publish).
3. Run `node build all` from the terminal. 
4. Move `dist/` output to the root of the orphan branch `online`
