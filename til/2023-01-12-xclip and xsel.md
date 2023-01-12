---
tags: [xclip, xsel]
---

`xclip` is a command line utility to get or set content in the X selection or clipboard.

It has a strange side effect when used to set things in the clipboard, it make the terminal to hang for a couple of seconds when closed, and more annoyingly it prevent Sublime Merge to terminate a command making use of it. This is probably linked to the fact that `xclip` starts a background process and leaves it running, as it is necessary for when the clipboard content is retrieved.

After tinkering with it, I wasn't able make it work better. However I discovered `xsel`, which doesn't the same things without this unwanted side effect.
