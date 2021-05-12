import React from 'react';
import NextPageCss from './NextPageCss';
import MessageGallery from '../MessageGallery/index';
import EssaiApi from '../EssaiApi/EssaiApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function NextPage() {
  return (
    <NextPageCss>
      <Header />
      <MessageGallery />
      <EssaiApi />
      <Footer />
    </NextPageCss>
  );
}
export default NextPage;
