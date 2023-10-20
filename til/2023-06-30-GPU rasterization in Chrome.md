---
tags: [chrome]
---

In case of weird text rendering issues in Chrome looking like this:

![Text issue](2023-06-30-GPU-rasterization-in-Chrome.webp)

chanche `chrome://flags/#enable-gpu-rasterization` from `Default` to `Disabled`.

(It's actually happening very rarely for me, so I put back the setting to `Default`.)
