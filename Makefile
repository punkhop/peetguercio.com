deploy:
	echo s3cmd sync ./public/ s3://fresh.peetguercio.com/ --add-header=ETag:$(CIRCLE_SHA1)
	s3cmd sync ./public/ s3://fresh.peetguercio.com/ --add-header=ETag:$(CIRCLE_SHA1)

serve:
	cd public && ruby -run -ehttpd . -p4000
