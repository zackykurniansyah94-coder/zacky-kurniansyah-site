import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/posts'
import React from 'react'
import remark from 'remark'
import html from 'remark-html'

export default function Post({ post }) {
  return (
    <Layout>
      <article className="card">
        <h1>{post.meta.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths(){
  const { getAllPosts } = require('../../lib/posts');
  const posts = getAllPosts();
  const paths = posts.map(p => ({
    params: { slug: p.slug.replace(/\.md$/,'') }
  }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }){
  const { getPostBySlug } = require('../../lib/posts');
  const post = getPostBySlug(params.slug);
  const processed = await remark().use(html).process(post.content);
  post.html = processed.toString();
  return { props: { post } }
}
