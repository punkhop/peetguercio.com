Peet's Amazing Website 
===============

Setup
-----
- Create a ".keys" file, in this folder (it will be git-ignored) with the following syntax, replacing the ellipsis with your creds.
```bash
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
```

AWS
---
- The "public folder gets synced via s3cmd to bucket "fresh.peetguercio.com".
- The CloudFront distribution d2imvi6cnie4z0.cloudfront.net uses that bucket as its origin. CloudFront is going to be
  faster and handle way more load, but is sometimes stale, so it's good to be able to look at both.

DNS
---
- We've CNAMED http://www.peetguercio.com to the CloudFront distribution. That's what the public will see.
- We've CNAMED http://fresh.peetguercio.com to the bucket directly. That's the **guaranteed-fresh URL for development**.

Deploy
------
- Spin up vagrant and shell into it, by going to this folder in a terminal, and then:
```bash
vagrant up
vagrant ssh
```
- And then in that vagrant shell:
```bash
make deploy
```
