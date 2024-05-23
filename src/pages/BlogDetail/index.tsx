import React, { useEffect, useState } from 'react';
import './index.scss';
import Avatar from '../../assets/svg/account.svg';
import EmptyHeart from '../../assets/svg/empty-heart.svg';
import { useParams } from 'react-router-dom';
import { getBlogById } from 'config/axios/blogApi';
import moment from 'moment';

export default function BlogDetail() {
  const [blogDetail, getBlogDetail] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await getBlogById(+id);
        getBlogDetail(response);
      }
    })();
  }, []);

  return (
    <div className="blog-content max-w-4xl mx-auto mt-16 px-20 py-10 border border-white border-solid bg-transparent">
      <div className="flex items-center gap-2 text-sm mb-4">
        <div className="flex items-center gap-2">
          <img src={Avatar} alt="avatar" className="w-6 h-6 !mb-0" />
          <span>Black Valentine</span>
        </div>
        <span className="h-1 w-1 rounded-full bg-white"></span>
        <span>{moment(blogDetail?.created_at).format('ll')}</span>
      </div>
      <h1>{blogDetail?.title}</h1>
      <p>{blogDetail?.subTitle}</p>
      <img src={blogDetail?.thumbnail} alt="blog" />
      <div dangerouslySetInnerHTML={{ __html: `${blogDetail?.content}` }}></div>
      <div className="flex items-center justify-between border-t border-solid border-secondary mt-10 pt-4 text-xs">
        <div className="flex items-center gap-4">
          <span>{blogDetail?.views} views</span>
        </div>
        <img src={EmptyHeart} alt="heart" className="!mb-0" />
      </div>
    </div>
  );
}
