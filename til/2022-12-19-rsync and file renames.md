---
tags: [rsync]
---

`rsync` doesn't handle file/folder renames well: if a folder containing lots of big files (a photos/videos library) is renamed in the source, then all files will be recopied again to the destination (and the existing files in the destination will be deleted).

[Unison](https://github.com/bcpierce00/unison) appears to handle file renames, but what it actually does is detecting that the file already exists in the destination, and making a copy of it in the destination (from the destination). This saves bandwidth, but is still slow and will stress hard drives for no reason.

A tool made by one single person is addressing this issue perfectly (although it only supports local directories for the moment): [`rsync-sidekick`](https://github.com/m-manu/rsync-sidekick).

Of course, read the code yourself before executing anything written by a stranger.

Also, to ensure that the tool won't mistakenly delete files it isn't supposed to, we can run it in a Docker container with readonly volumes. It will output a list of commands to rename and move stuff in the destination to reproduce the renames/moves made in the source.

- Build the container:

```bash
docker build -t rsync-sidekick .
```

- Run it:

```bash
docker run --rm \
	-v /<source-path>:/sync-src:ro \
	-v /<destination-path>:/sync-dst:ro \
	rsync-sidekick \
	/bin/bash -c "rsync-sidekick -shellscript /sync-src/ /sync-dst/ && echo && cat sync_actions_*.sh"
```
