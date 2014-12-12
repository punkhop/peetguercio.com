deploy:
	s3cmd sync ./public/ s3://fresh.peetguercio.com/

serve:
	cd public && ruby -rwebrick -e'WEBrick::HTTPServer.new(:Port => 4000, :DocumentRoot => Dir.pwd).start'
