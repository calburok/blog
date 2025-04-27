import React from 'react';
import Card from '../subcomponents/Card';
import '../../../../style/Section3.css';

const SectionThreeIndex = () => {
  return (
    <div className="sectionThree">
      <h2>My Favorite Projects</h2>
      <div className="cardWrapper">
        <Card
          title="NAVER"
          text="A popular Korean web portal with news, shopping, and many other services."
          tech={['React', 'Next.js', 'Node.js']}
          link="https://www.naver.com"
          code="https://github.com/naver/naver"
          pageNum="1"
        />
        <Card
          title="GitHub"
          text="A platform for hosting and reviewing code, managing projects, and building software together."
          tech={['React', 'GraphQL', 'Node.js']}
          link="https://github.com"
          code="https://github.com/github/github"
          pageNum="2"
        />
        <Card
          title="Twitter"
          text="A microblogging and social networking service where users post and interact with messages known as tweets."
          tech={['React', 'Ruby on Rails', 'AWS']}
          link="https://twitter.com"
          code="https://github.com/twitter/twitter"
          pageNum="3"
        />
      </div>
    </div>
  );
};

export default SectionThreeIndex;
