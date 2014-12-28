deploy:
	s3cmd sync ./public/ s3://fresh.peetguercio.com/ --add-header=max-age:1

serve:
	cd public && ruby -run -ehttpd . -p4000
