import React from 'react';
import EyeIcon from '../../assets/svg/eye.svg';
import CommentIcon from '../../assets/svg/comment.svg';
import EmptyHeartIcon from '../../assets/svg/empty-heart.svg';

interface IBlogItemProps {
  image: any;
  createdAt: string;
  author: string;
  title: string;
  description: string;
  view: number;
  comment: number;
  like: number;
}

export default function BlogItem({
  image,
  createdAt,
  author,
  title,
  description,
  view,
  comment,
  like,
}: IBlogItemProps) {
  return (
    <div className="flex flex-col text-gray2">
      <img src={image} alt="blog-image" className="aspect[2/1] cursor-pointer rounded" />
      <div className="flex items-center text-xs my-6">
        <span>{createdAt}</span>
        <div className="bg-gray2 w-0.5 h-0.5 rounded-full mx-3"></div>
        <span>{author}</span>
      </div>
      <h6 className="text-3xl font-forum hover:text-orange cursor-pointer">{title}</h6>
      <p className="mt-4 mb-6">{description}</p>
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
