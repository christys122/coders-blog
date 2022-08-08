const { Post } = require('../models');

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text: "posted by jms55",
    user_id: 2
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_text: "posted by jms55",
    user_id: 2
  },
  {
    title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_text: "posted by KirbyOne",
    user_id: 3
  },
  {
    title: "Nunc purus.",
    post_text: "posted by ndiamond71",
    user_id: 1
  },
  {
    title: "Pellentesque eget nunc.",
    post_text: "posted by KirbyOne",
    user_id: 3
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_text: "posted by ndiamond71",
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
