import React, { useState } from 'react';
import EyeIcon from '../../assets/svg/eye.svg';
import CommentIcon from '../../assets/svg/comment.svg';
import EmptyHeartIcon from '../../assets/svg/empty-heart.svg';
import OptionIcon from '../../assets/svg/option.svg';
import ShareIcon from '../../assets/svg/share.svg';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface IBlogItemProps {
  id: number;
  image: any;
  created_at: string;
  author: string;
  title: string;
  description: string;
  view: number;
  comment: number;
  like: number;
}

export default function BlogItem({
  id,
  image,
  created_at,
  author,
  title,
  description,
  view,
  comment,
  like,
}: IBlogItemProps) {
  const [showShareBtn, setShowShareBtn] = useState<boolean>(false);
  return (
    <div className="flex flex-col text-gray2">
      <Link to={`/sprout/care/${id}`}>
        <img src={image} alt="blog-image" className="aspect[2/1] cursor-pointer rounded" />
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs my-6">
          <span>{moment(created_at).format('ll')}</span>
          <div className="bg-gray2 w-0.5 h-0.5 rounded-full mx-3"></div>
          <span>BlackValentine</span>
        </div>
        <div className="relative">
          <img
            src={OptionIcon}
            alt="option"
            className="cursor-pointer"
            onClick={() => setShowShareBtn(!showShareBtn)}
          />
          <div
            className={`${
              showShareBtn ? 'visible' : 'invisible'
            } absolute right-6 top-6 flex items-center gap-2 py-4 pl-6 pr-28 whitespace-nowrap bg-black text-white cursor-pointer`}
          >
            <img src={ShareIcon} alt="share" />
            <span>Share Post</span>
          </div>
        </div>
      </div>
      <Link to={`/sprout/care/${id}`}>
        <h6 className="text-3xl font-forum hover:text-orange cursor-pointer line-clamp-1">{title}</h6>
      </Link>
      <p className="mt-4 mb-6 line-clamp-3">{description}</p>
      <div className="flex items-center justify-between text-xs border-t border-solid border-gray2 pt-3">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <img src={EyeIcon} alt="view" />
            <span>{view}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={CommentIcon} alt="comment" />
            <span>{comment}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span>{like}</span>
          <img src={EmptyHeartIcon} alt="like" />
        </div>
      </div>
    </div>
  );
}
