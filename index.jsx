import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="card" style={{marginBottom:20}}>
        <h2>Ringkasan Profesional</h2>
        <p>Profesional di bidang Sistem Informasi, berpengalaman sebagai Testing Engineer (QA) dan Application Support. Menguasai API Testing, pengujian aplikasi, analisis sistem, dan dukungan aplikasi kritis.</p>
      </div>

      <div className="card" style={{marginBottom:20}}>
        <h2>Keahlian & Tools</h2>
        <ul>
          <li>API Testing (Postman) • QA Testing</li>
          <li>Confluence, Jira • Power BI</li>
        </ul>
      </div>

      <div className="card">
        <h2>Blog</h2>
        <ul>
          {posts.map(p => (
            <li key={p.slug}><Link href={`/posts/${p.slug.replace(/^[0-9-]+-/,'')}`}><a>{p.meta.title} — <small style={{color:'var(--muted)'}}>{p.meta.date}</small></a></Link></li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const { getAllPosts } = require('../lib/posts');
  const posts = getAllPosts();
  return { props: { posts } }
}
