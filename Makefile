.PHONY: links

links:
	node render_links.js

upload:
	aws s3 sync --acl public-read static s3://embeddednodejs.com

dryrun:
	aws s3 sync --dryrun static s3://embeddednodejs.com

