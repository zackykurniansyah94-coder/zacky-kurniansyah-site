import Head from 'next/head'
import Link from 'next/link'
import DarkToggle from './DarkToggle'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    // reveal animation
    const els = document.querySelectorAll('.reveal');
    setTimeout(() => {
      els.forEach(e => e.classList.add('show'));
    }, 100);
  }, []);
  return (
    <>
      <Head>
        <title>Zacky Kurniansyah — Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <header className="header" style={{marginBottom: '1rem'}}>
          <img src="/avatar.jpg" alt="avatar" className="avatar"/>
          <div>
            <h1 style={{margin:0}}>ZACKY KURNIANSYAH</h1>
            <p style={{margin:0}}>IT Testing • System Analysis • Application Support</p>
            <div style={{marginTop:8}}>
              <a href="mailto:Zackykurniansyah09@gmail.com">Email</a> • <a href="https://linkedin.com/in/Zackykurniansyah-8378a5155/" target="_blank">LinkedIn</a>
            </div>
          </div>
          <div style={{marginLeft:'auto'}}><DarkToggle /></div>
        </header>
        <section className="reveal">{children}</section>
        <footer style={{textAlign:'center', marginTop:40, color:'var(--muted)'}}>© 2025 Zacky Kurniansyah</footer>
      </main>
    </>
  )
}
