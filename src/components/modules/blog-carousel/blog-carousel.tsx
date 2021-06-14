import React from 'react';
import { BlogPostCard } from '../';

const posts = [
  {
    title: 'README.md',
    date: 'Jan 1, 1970',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'README.md 2',
    date: 'Jan 1, 1970',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const BlogCarousel = () => {
  const cards = posts.map(({ title, date, content }) => (
    <BlogPostCard key={title} title={title} date={date} description={content} />
  ));

  return (
    <section>
      <div className="flex px-6 space-x-5 overflow-x-auto overscroll-contain">
        {cards}
      </div>
    </section>
  );
};
