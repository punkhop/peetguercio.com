Peet's Amazing Website
===============

Setup
-----
Create a ".keys" file, in this folder (it will be git-ignored) with the following syntax, replacing the ellipsis with your creds.
```bash
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
```

AWS
---
- The "public folder gets synced via **s3cmd** to bucket **fresh.peetguercio.com**.
- The CloudFront distribution ***d2imvi6cnie4z0.cloudfront.net*** uses that bucket as its origin.
- In CloudFlare, we CNAME **www.peetguercio.com** to that distribution.
- If cache seems stale, check http://fresh.peetguercio.com.s3.amazonaws.com/ .

Deploy
------
```bash
make deploy
```
