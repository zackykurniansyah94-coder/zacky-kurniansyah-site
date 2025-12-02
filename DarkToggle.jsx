import { useEffect, useState } from 'react'

export default function DarkToggle(){
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);
  function toggle(){
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark');
      setDark(true);
    }
  }
  return <button onClick={toggle} style={{padding:'8px 12px', borderRadius:8}}>{dark ? 'Light' : 'Dark'}</button>
}
