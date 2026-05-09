function About() {
  return (
<>
 <div className="sec about-sec" id="about-section">
  <div className="stag">Who I am</div>
  <div className="stitle">About me</div>
  <div className="ssub">A developer who cares about every pixel and every millisecond</div>
  <div className="about-grid">
    <div className="about-text">
      <p>I'm a passionate Front-End Developer with over 2 years of hands-on experience building responsive, user-friendly web interfaces. My work spans from crafting React components to building full sites on WordPress, Webflow, and Shopify.</p>
      <p>Currently working as a Jr. Software Engineer at <strong>BitCot Technology</strong>, I build React-based applications, create reusable component libraries, and ensure every product is optimized and enjoyable to use.</p>
      <p>I constantly explore new tools — whether that's a new React pattern, a Tailwind workflow, or a Shopify customization — to keep delivering modern, high-performing solutions.</p>
    </div>
    <div className="hcards">
      <div className="hc"><div className="hc-icon">⚛️</div><h4>React & JavaScript</h4><p>Building dynamic, component-driven UIs with React and Redux for scalable frontend architectures.</p></div>
      <div className="hc"><div className="hc-icon">🎨</div><h4>UI Design & Integration</h4><p>Translating designs into pixel-perfect, responsive interfaces with Bootstrap, Material UI, and Tailwind.</p></div>
      <div className="hc"><div className="hc-icon">🛒</div><h4>CMS & E-commerce</h4><p>Developing WordPress, Webflow, and Shopify sites with Elementor and custom theme work.</p></div>
    </div>
  </div>
</div>
</>
  )
}

export default About;