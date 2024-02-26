---
tags: [rsync]
---

`rsync` doesn't handle file/folder renames well: if a folder containing lots of big files (a photos/videos library) is renamed in the source, then the existing files in the destination will be deleted, and all files will be copied again to the destination.

[Unison](https://github.com/bcpierce00/unison) appears to handle file renames, but what it actually does is detecting that the files already exist in the destination, and making a copy of them in the destination, from the destination. This saves bandwidth, but is still slow and will stress hard drives for no reason.

A tool made by one single person addresses this issue perfectly: [`rsync-sidekick`](https://github.com/m-manu/rsync-sidekick)

The author mentions that the tool doesn't make any changes, but to make sure of it, we can run it in a Docker container with readonly volumes. It will output a list of commands to rename and move stuff in the destination to reproduce the renames/moves made in the source.

### Usage

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

- Retrieve the output, check it visually, replace `sync-src` and `sync-dst`, and run it.

- Run `rsync` on dry-run:

```sh
rsync -ruvin /<source-path>/ /<destination-path>/
```

- Check the output; if all is ok, run `rsync`:

```sh
rsync -ruvi /<source-path>/ /<destination-path>/
```

### Remote directories

`rsync-sidekick` only supports local directories at the moment, so to use it with a remote one, we need to mount the directory locally. Example with SSH:

```sh
mkdir ~/remote-dir
sshfs <server>:/<path-on-server> ~/remote-dir
```

Then you can use `~/remote-dir` as a local directory.

To unmount it, run:

```sh
fusermount -u ~/remote-dir
```
