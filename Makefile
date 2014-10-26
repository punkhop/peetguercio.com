deploy:
	s3cmd sync ./public/ s3://fresh.peetguercio.com/
