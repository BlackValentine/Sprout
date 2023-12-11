import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

export default function SocialShare() {
  return (
    <div className="flex fixed inset-0 z-50">
      <div className="bg-black mx-auto">
        <h6>Share Post</h6>
        <FacebookShareButton
          url={'https://www.wix.com/demone2/sprout/care'}
          title={'Sprout'}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={'https://www.wix.com/demone2/sprout/care'}
          title={'Sprout'}
          className="Demo__some-network__share-button"
        >
          <XIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={'https://www.wix.com/demone2/sprout/care'}
          title={'Sprout'}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
