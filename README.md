# Draw.io FontAwesome Library

The [free icons of the FontAwesome icon set](https://fontawesome.com/icons?m=free) (normalized and) ready for usage with [diagrams.net](https://app.diagrams.net/) or [draw.io Desktop](https://github.com/jgraph/drawio-desktop). Base size of the icons is 16pt, ideal for working with a page grid of 8pt. Latest published version is **FontAwesome 6.5.2**.

## Usage

### Load on desktop

Download & unzip the [latest release](https://github.com/webketje/drawio-font-awesome/releases/latest), open Draw.io desktop,
and in the <kbd>File</kbd> menu, choose <kbd>Open Library...</kbd>, then select the unzipped library.

<details>
  <summary>Screenshot</summary>

![How to load this library on desktop](/assets/load-desktop.png)
</details>

*If you can see the files but they look "disabled", try to rename them with the `.xml` extension via File Explorer, then reopen the <kbd>File</kbd> menu. If you can't see the files, make sure the file selection dialog shows "All Files" and not only draw.io diagrams*

### Load online

Thanks to [jsdelivr](https://jsdelivr.com) you can load this library without downloading anything directly!
From the <kbd>File</kbd> menu, choose <kbd>Open Library from</kbd>, then <kbd>URL</kbd> and load the latest version:
[https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome](https://cdn.jsdelivr.net/gh/webketje/drawio-font-awesome@online/FontAwesome).

<details>
  <summary>Screenshot</summary>

  ![How to load this library online](/assets/load-online.png)
</details>

### Colors
#### Default colors
You can load the entire library in a particular color, both from the release or online:

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

#### Changing the colors in Draw.io/ Diagrams.net

Once the icon is placed on your canvas, select it and in the <kbd>Style</kbd> tab you can alter its <kbd>Fill path</kbd>

<details>
  <summary>Screenshot</summary>

  ![How to load this library online](/assets/fill-path.png)
</details>

#### Change icon shade with fill opacity

You can change the icon shade (pale gray -> black ) after dragging it in your diagram by clicking it twice (not double-clicking).
In the right sidebar, in the <kbd>Style</kbd> tab, uncollapse the **Property/ Value** listing, and play with the **Fill opacity**.

#### Versions
You can load different font-awesome versions by replacing `@online` by `@x.x.x`. At the moment 6.5.2, 6.4.0, 6.1.1, 5.15.4, 5.14.0, 5.10.2 and 5.8.2 are available.

### Building

Initial setup:

```bash
git clone git@github.com:webketje/drawio-font-awesome.git
cd drawio-font-awesome
git submodule init
```

Release:

```bash
cd Font-Awesome
git fetch
git checkout <tag>
cd ..
node build all
git checkout -f online
mv dist/* .
git add .
git commit -m "Update FontAwesome vx.x.x"
git tag -s x.x.x -m x.x.x
git push origin --tags online
```

Then checkout master, update docs and create a GH release pointing to x.x.x