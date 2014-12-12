deploy:
	s3cmd sync ./public/ s3://fresh.peetguercio.com/

serve:
	cd public && ruby -run -ehttpd . -p4000
