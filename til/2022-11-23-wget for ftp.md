---
tags: [wget, ftp, cli, command]
---

Download the content of an FTP folder with `wget`:

```bash
wget --user=<username> --ask-password -r ftp://<url>
```

Although it took minutes to download 10 MB...
