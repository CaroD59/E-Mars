import React from 'react';
import NextPageCss from './NextPageCss';
import MessageGallery from '../MessageGallery/index';
import Message from '../Message/index';
import EssaiApi from '../EssaiApi/EssaiApi';

function NextPage() {
  return (
    <NextPageCss>
      <MessageGallery />
      <Message />
      <EssaiApi />
    </NextPageCss>
  );
}
export default NextPage;
