
# Building a Cloud-Powered Website: A Step-by-Step Guide

In today's competitive job market, a well-crafted resume is essential, but it's no longer just about words. Employers now seek hands-on experience with modern technology, particularly cloud computing. To help you demonstrate these skills, we introduce the Cloud Resume Challenge, a practical project series. In this article, we'll guide you through the first part of the challenge, where you'll build a static website hosted on Amazon S3, optimize content delivery with CloudFront, and set up a custom domain using Route53 DNS.

## Week -00 Architecture Diagram

![aws diagram-S3 Static Website.drawio.svg](/journal/assets/aws%20diagram-S3%20Static%20Website.drawio.svg)


## Building a Cloud-Powered Static Website: A Step-by-Step Guide

### cloud resume challenge

![](https://cdn-images-1.medium.com/max/2732/1*wheQSjMHJt5jjr0HGfaJgA.png)

In today’s competitive job market, a well-crafted resume is essential, but it’s no longer just about words. Employers now seek hands-on experience with modern technology, particularly cloud computing. To help you demonstrate these skills, we introduce the Cloud Resume Challenge, a practical project series. In this article, we’ll guide you through the first part of the challenge, where you’ll build a static website hosted on Amazon S3, optimize content delivery with CloudFront, and set up a custom domain using Route53 DNS.

![AWS Static website Diagram](https://cdn-images-1.medium.com/max/2000/1*avukGyrS7GHRJCzsIuxxwQ.png)

## Step 1: Setting up an S3 Bucket

* Amazon S3 is our storage solution. Go to the Amazon S3 console.

* Click “Create Bucket.”

* Give your bucket a unique name, choose a region, and use default settings.

* Click “Create” to create your S3 bucket.

![](https://cdn-images-1.medium.com/max/3812/1*TtetQ0_fdGQZLMtUEQXehA.jpeg)

enable static website hosting

![](https://cdn-images-1.medium.com/max/3812/1*U41dVsMs4IPx6vjlYcmbxw.jpeg)

![](https://cdn-images-1.medium.com/max/3830/1*BXILGzcM9vFocGMp5laf7Q.jpeg)

### Create a policy

![](https://cdn-images-1.medium.com/max/3830/1*VhqR-_iJddeTJPqTXQ5V_g.jpeg)

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::aungkohtet-cloud-resume-challenge/*"
            }
        ]
    }

## Step 2: Uploading Your Website Files to S3

* With your S3 bucket ready, it’s time to upload your website files. You can do this by dragging and dropping files in the S3 console or by using the AWS CLI.

## Step 3: Implementing CloudFront for Faster Delivery

* CloudFront, a content delivery network (CDN), speeds up content delivery by caching it globally.

* Open the AWS Management Console and go to the CloudFront dashboard.

* Click “Create Distribution.”

* Choose your S3 bucket as the origin.

* Configure other options as needed.

* Click “Create Distribution.”

![](https://cdn-images-1.medium.com/max/3836/1*VM-b-wyJfHQxoFyGYQ6jtA.jpeg)

![](https://cdn-images-1.medium.com/max/3834/1*zC6T1hL06cA6XUq0CaxBUw.jpeg)

![](https://cdn-images-1.medium.com/max/3838/1*FqSer1x2UK9kqrJkFOQmPg.jpeg)

**Note**: Repeat these steps for both “alexiscloud.tech” and “blog.alexiscloud.tech” domain names if you have them.

## Step 4: ACM Request

![](https://cdn-images-1.medium.com/max/3840/1*G3fA2kCPLTr7K-9-qAOyRg.jpeg)

![](https://cdn-images-1.medium.com/max/3832/1*6mDo1uljn3A09TJG7p1fzA.jpeg)

![](https://cdn-images-1.medium.com/max/3782/1*Kfm95yWIUj3hSS50bBTinA.jpeg)

![](https://cdn-images-1.medium.com/max/3800/1*iTMFpyu8sBpVhzjRhYn6CA.jpeg)

![](https://cdn-images-1.medium.com/max/3836/1*Q13gRwVjKwAJ7uVoCqlPxQ.jpeg)

![](https://cdn-images-1.medium.com/max/3832/1*dBkQh1qToK5T8PC0jnCipQ.jpeg)

![](https://cdn-images-1.medium.com/max/3838/1*HIt9ePTpZfwHYfC7MQD74g.jpeg)

![](https://cdn-images-1.medium.com/max/3840/1*RQLwcDe6R0GYY5UmUXDiiQ.jpeg)

## Step 5: Configuring Route53 DNS

* Route53, Amazon’s DNS service, ensures your domain points to your website.

* Register your domain with Route53 (a Hosted Zone will be created automatically).

* Open the Route53 dashboard.

* Click on the Hosted Zone linked to your domain name.

* Add an “A” record pointing to the CloudFront Distribution domain name.

* Save your changes.

![](https://cdn-images-1.medium.com/max/3836/1*u8IxhmiCzkM-ZtJ2Zm88aw.jpeg)

![](https://cdn-images-1.medium.com/max/3838/1*woJn17CBDC6YJIutfwt43g.jpeg)

![](https://cdn-images-1.medium.com/max/3830/1*-MLPcPiNnwOo8Jd4FWFu1Q.jpeg)

![](https://cdn-images-1.medium.com/max/3810/1*HZuLQYjxTUDwulyFYoGF3A.jpeg)

![](https://cdn-images-1.medium.com/max/3836/1*vp_ki6DYUVoUQezGWfsCLw.jpeg)

![](https://cdn-images-1.medium.com/max/3826/1*xvaitgd4mVLBK-qPVWiZQQ.jpeg)

![](https://cdn-images-1.medium.com/max/3826/1*A1FPCc7qT7luOx9XOPYSpA.jpeg)

![](https://cdn-images-1.medium.com/max/3832/1*937Z94NBlZxdY7w9HMH9Vg.jpeg)

![](https://cdn-images-1.medium.com/max/3840/1*JnSE_CAuBRvxfKrtFSeGDg.jpeg)

Your static S3 website is now ready to be accessed using the domain associated with it. You can see an example website created for this challenge at [https://alexiscloud.tech](https://alexiscloud.tech) to visualize the result of your efforts.

By completing this first part of the Cloud Resume Challenge, you’ve gained the skills to build a static S3 website, enhance content delivery with CloudFront, and configure Route53 DNS for a custom domain. Your website is live and ready for visitors. Congratulations!
