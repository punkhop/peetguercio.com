deploy:
	s3cmd sync ./public/ s3://fresh.peetguercio.com/ --add-header="Cache-Control:max-age=1"

serve:
	cd public && ruby -run -ehttpd . -p4000

generate-invalidation-string:
	@cd public && find . | sed 's/\.//' | pbcopy
	@echo Copied to clipboard.
