import React from 'react';
import SubText from '../subComponent/SubText';
import '../../../../style/Section1.css';

const SectionOneTexts = () => {
  return (
    <article className="sectionOneTextWrap">
      <SubText text="Challenge" />
      <SubText text="Positive" />
      <SubText text="optimistic" />
      <SubText text="adventurer" />
      <SubText text="Creative" />
      <SubText text="laughs easily" />
      <SubText text="faithful" />
      <SubText text="responsible" />
    </article>
  );
};

export default SectionOneTexts;
