const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'content', 'posts');

function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug))
    .sort((a,b) => new Date(b.meta.date) - new Date(a.meta.date));
  return posts;
}

module.exports = { getAllPosts, getPostBySlug };
