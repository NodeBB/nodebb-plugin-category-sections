### This plugin has been deprecated now that this functionality exists in core

https://github.com/NodeBB/nodebb-theme-persona/commit/2b619db7466c2dd1e61f3fbd2f2e5afc56a2bd7e
https://github.com/NodeBB/nodebb-theme-lavender/commit/c1821bb2d8493b9377c2750927ead21798b0eff6

Use `isSection` in your custom theme to emulate this behavior as well.


# Category Sections for NodeBB 

This plugin allows you to organize the categories on your homepage into individual sections.


## Homepage Screenshot

![](http://i.imgur.com/fOVwEVH.png)

Tip: To make it look like this screenshot,

1. Go to the category ACP and set `# of recent replies` to 0. 
2. Under Installed Plugins -> Lavender Theme, disable Masonry (or use the Vanilla theme)
3. Go to Appearance -> Custom CSS panel and add the following code:

```
.category-item .category-box .category-info {
    min-height: 85px;
}
```

Or just theme it however you want :)

## ACP Screenshot

Drag and drop interface to create new sections and re-order the categories within.

![](http://i.imgur.com/6dMeUK4.png)
