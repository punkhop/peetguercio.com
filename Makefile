deploy:
	s3cmd sync ./public/ s3://fresh.peetguercio.com/

serve:
	cd public && python -m SimpleHTTPServer 4000
