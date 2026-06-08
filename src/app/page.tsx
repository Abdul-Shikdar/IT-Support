/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Home() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abdul's Tech Solutions — Computer Repair Willenhall & West Midlands</title>
<meta name="description" content="Friendly, honest computer repair and IT support in Willenhall and the West Midlands. Call or WhatsApp Abdul: 07356 287590. No fix, no fee.">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#ffffff;
  --surface:#f7f8fc;
  --surface2:#eef1f8;
  --border:#e2e6f0;
  --border2:#c8cfe0;
  --text:#0f1623;
  --muted:#5a6478;
  --accent:#1d4ed8;
  --accent-light:#2563eb;
  --accent-pale:#eff4ff;
  --accent-glow:rgba(29,78,216,0.18);
  --green:#059669;
  --green-bg:#f0fdf7;
  --green-border:#a7f3d0;
  --yellow:#d97706;
  --yellow-bg:#fffbeb;
  --wa:#25d366;
  --wa-dark:#128c4e;
  --shadow:0 1px 3px rgba(15,22,35,0.08),0 4px 16px rgba(15,22,35,0.06);
  --shadow-md:0 4px 12px rgba(15,22,35,0.1),0 12px 40px rgba(15,22,35,0.08);
}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);font-size:16px;line-height:1.7;overflow-x:hidden}

/* ─── NAV ─── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;justify-content:space-between;align-items:center;padding:1rem 3rem;background:rgba(255,255,255,0.95);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);box-shadow:0 1px 8px rgba(15,22,35,0.06)}
.nav-brand{font-family:'Syne',sans-serif;font-weight:800;font-size:1.05rem;color:var(--text);text-decoration:none;letter-spacing:-0.02em}
.nav-brand span{color:var(--accent-light)}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.875rem;color:var(--muted);text-decoration:none;font-weight:500;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:var(--accent-light)}
.nav-cta{display:flex;align-items:center;gap:.75rem}
.btn-primary{background:var(--accent-light);color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:.875rem;font-weight:600;padding:.6rem 1.3rem;border-radius:8px;text-decoration:none;transition:transform .15s,box-shadow .15s;white-space:nowrap}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 4px 16px var(--accent-glow)}
.btn-ghost{background:transparent;border:1.5px solid var(--border2);color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:.875rem;font-weight:500;padding:.55rem 1.1rem;border-radius:8px;text-decoration:none;transition:border-color .2s,background .2s;white-space:nowrap}
.btn-ghost:hover{border-color:var(--accent-light);background:var(--accent-pale)}
.mobile-menu-btn{display:none;background:none;border:1.5px solid var(--border2);color:var(--text);font-size:1.1rem;padding:.4rem .65rem;border-radius:6px;cursor:pointer}
.mobile-menu{display:none;position:fixed;top:65px;left:0;right:0;z-index:199;background:#fff;border-bottom:1px solid var(--border);box-shadow:var(--shadow-md);flex-direction:column;padding:1rem 1.5rem 1.5rem}
.mobile-menu.open{display:flex}
.mobile-menu a{font-size:1rem;color:var(--muted);text-decoration:none;padding:.75rem 0;border-bottom:1px solid var(--border);font-weight:500;transition:color .2s}
.mobile-menu a:last-child{border-bottom:none}
.mobile-menu a:hover{color:var(--accent-light)}
.mobile-menu .mm-call{color:var(--accent-light);font-weight:600;border-bottom:1px solid var(--border)}
.mobile-menu .mm-wa{color:var(--wa-dark);font-weight:600}

/* ─── PAGES ─── */
.page{display:none}
.page.active{display:block}

/* ─── HERO ─── */
.hero{min-height:100vh;display:flex;align-items:center;padding:8rem 3rem 5rem;background:var(--bg);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;right:0;width:55%;height:100%;background:var(--accent-pale);clip-path:polygon(12% 0,100% 0,100% 100%,0 100%);z-index:0}
.hero-inner{max-width:1200px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative;z-index:1}
.hero-left{}
.hero-eyebrow{display:inline-flex;align-items:center;gap:.5rem;background:var(--green-bg);border:1px solid var(--green-border);color:var(--green);font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:99px;margin-bottom:1.5rem}
.hero-eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green);flex-shrink:0;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-family:'Syne',sans-serif;font-size:clamp(2.4rem,4.5vw,3.8rem);font-weight:800;line-height:1.08;letter-spacing:-.03em;color:var(--text);margin-bottom:1.25rem}
.hero h1 .blue{color:var(--accent-light)}
.hero-sub{font-size:1.05rem;color:var(--muted);max-width:480px;margin-bottom:2rem;font-weight:400;line-height:1.8}
.hero-ctas{display:flex;gap:.85rem;flex-wrap:wrap;margin-bottom:2.5rem}
.cta-main{display:inline-flex;align-items:center;gap:.6rem;background:var(--accent-light);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none;transition:transform .2s,box-shadow .2s}
.cta-main:hover{transform:translateY(-2px);box-shadow:0 8px 28px var(--accent-glow)}
.cta-wa{display:inline-flex;align-items:center;gap:.6rem;background:var(--wa);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none;transition:transform .2s,box-shadow .2s}
.cta-wa:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(37,211,102,.3)}
.cta-outline{display:inline-flex;align-items:center;gap:.6rem;background:transparent;border:2px solid var(--border2);color:var(--text);font-weight:600;font-size:.95rem;padding:.85rem 1.75rem;border-radius:10px;text-decoration:none;transition:border-color .2s,background .2s}
.cta-outline:hover{border-color:var(--accent-light);background:var(--accent-pale)}
.hero-trust{display:flex;flex-wrap:wrap;gap:1rem}
.trust-pill{display:flex;align-items:center;gap:.4rem;font-size:.82rem;color:var(--muted);font-weight:500}
.trust-pill span{color:var(--text)}

/* ─── HERO RIGHT / AVATAR ─── */
.hero-right{display:flex;flex-direction:column;align-items:center;gap:1.5rem}
.avatar-wrap{position:relative;width:320px;height:320px}
.avatar-bg-circle{position:absolute;inset:0;border-radius:50%;background:white;box-shadow:var(--shadow-md)}
.avatar-svg{width:100%;height:100%;border-radius:50%;overflow:hidden;object-fit:cover}
.speech-bubble{position:absolute;top:-20px;right:-30px;background:#fff;border:1.5px solid var(--border);border-radius:16px 16px 16px 4px;padding:.75rem 1rem;box-shadow:var(--shadow);max-width:180px}
.speech-bubble p{font-size:.8rem;color:var(--text);font-weight:500;line-height:1.4}
.speech-bubble::after{content:'';position:absolute;bottom:-10px;left:16px;width:16px;height:10px;background:#fff;clip-path:polygon(0 0,100% 0,50% 100%)}
.hero-quick-contact{width:100%;max-width:320px;background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.25rem;box-shadow:var(--shadow)}
.hqc-title{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:.85rem}
.hqc-row{display:flex;align-items:center;gap:.75rem;padding:.6rem 0;border-bottom:1px solid var(--border)}
.hqc-row:last-child{border-bottom:none;padding-bottom:0}
.hqc-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
.hqc-label{font-size:.7rem;color:var(--muted)}
.hqc-val{font-size:.9rem;font-weight:600;color:var(--text);text-decoration:none}
.hqc-val:hover{color:var(--accent-light)}

/* ─── SERVICE PAGES (home repair / business) ─── */
.service-page-hero{padding:7rem 3rem 4rem;background:var(--surface);border-bottom:1px solid var(--border)}
.service-page-inner{max-width:1100px;margin:0 auto}
.back-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--muted);font-size:.875rem;font-weight:500;text-decoration:none;margin-bottom:1.5rem;transition:color .2s}
.back-btn:hover{color:var(--accent-light)}
.page-badge{display:inline-flex;align-items:center;gap:.5rem;font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .9rem;border-radius:99px;margin-bottom:1rem}
.page-badge.home-badge{background:var(--accent-pale);color:var(--accent-light);border:1px solid #bfdbfe}
.page-badge.biz-badge{background:var(--yellow-bg);color:var(--yellow);border:1px solid #fde68a}
.page-hero-title{font-family:'Syne',sans-serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:800;letter-spacing:-.03em;margin-bottom:.75rem}
.page-hero-sub{font-size:1.05rem;color:var(--muted);max-width:560px;margin-bottom:2rem}
.page-ctas{display:flex;gap:.85rem;flex-wrap:wrap}

/* ─── SERVICE DETAIL GRID ─── */
.service-detail{padding:5rem 3rem;background:var(--bg)}
.sd-inner{max-width:1100px;margin:0 auto}
.sd-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.25rem;margin-top:2.5rem}
.sd-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:var(--shadow);transition:box-shadow .2s,transform .2s,border-color .2s}
.sd-card:hover{box-shadow:var(--shadow-md);transform:translateY(-2px);border-color:var(--accent-light)}
.sd-card-icon{font-size:1.8rem;margin-bottom:.85rem;display:block}
.sd-card-title{font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;margin-bottom:.5rem;color:var(--text)}
.sd-card-desc{font-size:.875rem;color:var(--muted);line-height:1.65}
.sd-card-list{list-style:none;margin-top:.85rem;display:flex;flex-direction:column;gap:.4rem}
.sd-card-list li{font-size:.85rem;color:var(--text);display:flex;align-items:flex-start;gap:.5rem}
.sd-card-list li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
.pricing-note{margin-top:3rem;background:var(--accent-pale);border:1.5px solid #bfdbfe;border-radius:14px;padding:1.5rem 2rem;display:flex;align-items:flex-start;gap:1rem}
.pricing-note-icon{font-size:1.5rem;flex-shrink:0}
.pricing-note-text h4{font-weight:600;font-size:1rem;margin-bottom:.35rem;color:var(--accent-light)}
.pricing-note-text p{font-size:.875rem;color:var(--muted)}

/* ─── ABOUT STRIP ─── */
.about-strip{background:var(--text);color:#fff;padding:5rem 3rem}
.about-strip-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:auto 1fr;gap:4rem;align-items:center}
.about-avatar-small{width:140px;height:140px;border-radius:20px;overflow:hidden;flex-shrink:0;border:3px solid rgba(255,255,255,.15)}
.about-avatar-small svg{width:100%;height:100%}
.about-text h2{font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;margin-bottom:.75rem;letter-spacing:-.02em}
.about-text p{font-size:.95rem;color:rgba(255,255,255,.7);max-width:600px;line-height:1.75}
.about-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.25rem}
.about-chip{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.85);font-size:.78rem;font-weight:500;padding:.3rem .75rem;border-radius:99px}

/* ─── HOW IT WORKS ─── */
.how{padding:5rem 3rem;background:var(--surface)}
.how-inner{max-width:1100px;margin:0 auto}
.how-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:2.5rem;position:relative}
.how-step{text-align:center;padding:1.5rem}
.step-num{width:48px;height:48px;border-radius:50%;background:var(--accent-pale);border:2px solid var(--accent-light);color:var(--accent-light);font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem}
.step-title{font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;margin-bottom:.5rem}
.step-desc{font-size:.875rem;color:var(--muted);line-height:1.6}

/* ─── AREAS ─── */
.areas{padding:3rem 3rem;background:#fff;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.areas-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
.areas-label{font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.areas-tags{display:flex;flex-wrap:wrap;gap:.5rem}
.area-tag{background:var(--surface);border:1.5px solid var(--border);color:var(--text);font-size:.8rem;font-weight:500;padding:.3rem .8rem;border-radius:99px;transition:border-color .2s,background .2s}
.area-tag:hover{border-color:var(--accent-light);background:var(--accent-pale)}

/* ─── REVIEWS ─── */
.reviews{padding:5rem 3rem;background:var(--surface)}
.reviews-inner{max-width:1100px;margin:0 auto}
.bark-bar{display:flex;align-items:center;gap:0;background:#fff;border:1.5px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:2.5rem;box-shadow:var(--shadow);flex-wrap:wrap}
.bark-stat{flex:1;min-width:100px;padding:1.1rem 1rem;text-align:center;border-right:1px solid var(--border)}
.bark-stat:last-of-type{border-right:none}
.bsn{display:block;font-family:'Syne',sans-serif;font-weight:800;font-size:1.3rem;color:var(--yellow)}
.bsl{display:block;font-size:.7rem;color:var(--muted);letter-spacing:.03em;margin-top:.1rem}
.bark-link-btn{display:flex;align-items:center;justify-content:center;padding:1rem 1.5rem;background:var(--accent-light);color:#fff;text-decoration:none;font-weight:600;font-size:.85rem;white-space:nowrap;transition:background .2s}
.bark-link-btn:hover{background:#1d4ed8}
.reviews-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1.25rem}
.review-card{background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;box-shadow:var(--shadow);transition:box-shadow .2s,border-color .2s}
.review-card:hover{box-shadow:var(--shadow-md);border-color:var(--border2)}
.review-stars{color:var(--yellow);font-size:.9rem;margin-bottom:.6rem}
.review-title{font-weight:600;font-size:.95rem;margin-bottom:.5rem;color:var(--text)}
.review-body{font-size:.875rem;color:var(--muted);line-height:1.65;margin-bottom:.75rem}
.review-author{font-size:.78rem;color:var(--accent-light);font-weight:600}

/* ─── FAQ ─── */
.faq{padding:5rem 3rem;background:#fff}
.faq-inner{max-width:780px;margin:0 auto}
.section-label{font-size:.7rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--accent-light);margin-bottom:.6rem}
.section-heading{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3vw,2.5rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:.6rem;color:var(--text)}
.section-sub{font-size:1rem;color:var(--muted);margin-bottom:2.5rem;font-weight:400}
.faq-list{display:flex;flex-direction:column;gap:0;border:1.5px solid var(--border);border-radius:14px;overflow:hidden}
.faq-item{background:#fff;border-bottom:1px solid var(--border)}
.faq-item:last-child{border-bottom:none}
.faq-q{width:100%;background:none;border:none;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:.95rem;font-weight:600;text-align:left;padding:1.2rem 1.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
.faq-q:hover{background:var(--surface)}
.faq-q .arr{font-size:.75rem;color:var(--muted);transition:transform .3s;flex-shrink:0}
.faq-q.open .arr{transform:rotate(180deg)}
.faq-a{font-size:.875rem;color:var(--muted);line-height:1.75;max-height:0;overflow:hidden;transition:max-height .35s ease,padding .2s}
.faq-a.open{max-height:300px;padding:0 1.5rem 1.2rem}

/* ─── CONTACT ─── */
.contact{padding:5rem 3rem;background:var(--surface)}
.contact-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem}
.contact-left{}
.contact-ways{display:flex;flex-direction:column;gap:.75rem;margin-top:1.5rem}
.cw-row{display:flex;align-items:center;gap:.9rem;background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:1rem 1.25rem;text-decoration:none;transition:border-color .2s,box-shadow .2s;box-shadow:var(--shadow)}
.cw-row:hover{border-color:var(--accent-light);box-shadow:var(--shadow-md)}
.cw-icon{width:40px;height:40px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.cw-lbl{font-size:.72rem;color:var(--muted);font-weight:500}
.cw-val{font-weight:600;color:var(--text);font-size:.95rem}
.form-card{background:#fff;border:1.5px solid var(--border);border-radius:18px;padding:2rem;box-shadow:var(--shadow)}
.form-card h3{font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;margin-bottom:.25rem;color:var(--text)}
.form-card p{font-size:.85rem;color:var(--muted);margin-bottom:1.5rem}
.field{margin-bottom:1rem}
.field label{display:block;font-size:.75rem;font-weight:600;color:var(--muted);letter-spacing:.05em;text-transform:uppercase;margin-bottom:.4rem}
.field input,.field textarea,.field select{width:100%;background:var(--surface);border:1.5px solid var(--border);border-radius:9px;padding:.7rem 1rem;color:var(--text);font-family:'Plus Jakarta Sans',sans-serif;font-size:.9rem;outline:none;transition:border-color .2s,box-shadow .2s}
.field input:focus,.field textarea:focus,.field select:focus{border-color:var(--accent-light);box-shadow:0 0 0 3px rgba(37,99,235,.12);background:#fff}
.field textarea{resize:vertical;min-height:100px;line-height:1.6}
.submit-btn{width:100%;background:var(--accent-light);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem;border:none;border-radius:9px;cursor:pointer;transition:transform .15s,box-shadow .15s}
.submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px var(--accent-glow)}
.form-success{display:none;text-align:center;padding:2rem}
.form-success .tick{font-size:2.5rem;margin-bottom:1rem}
.form-success h4{font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;margin-bottom:.5rem}
.form-success p{font-size:.875rem;color:var(--muted)}

/* ─── MAP ─── */
.map-section{padding:0;background:#fff}
.map-section iframe{display:block;width:100%;height:400px;border:none;filter:grayscale(20%)}

/* ─── FOOTER ─── */
footer{background:var(--text);color:rgba(255,255,255,.7);padding:3rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem}
.footer-brand{font-family:'Syne',sans-serif;font-weight:800;font-size:1rem;color:#fff}
.footer-brand span{color:#60a5fa}
.footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
.footer-links a{font-size:.85rem;color:rgba(255,255,255,.6);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:#fff}
.footer-right{font-size:.85rem}
.footer-right a{color:#60a5fa;text-decoration:none}

/* ─── WHATSAPP FLOAT ─── */
.wa-float{position:fixed;bottom:1.75rem;right:1.75rem;z-index:300;background:var(--wa);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;padding:.85rem 1.4rem;border-radius:99px;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.4);display:flex;align-items:center;gap:.5rem;animation:slideUp .5s ease .4s both;transition:transform .2s,box-shadow .2s}
.wa-float:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(37,211,102,.5)}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.wa-icon{font-size:1.2rem}

/* ─── MOBILE ─── */
@media(max-width:900px){
  nav{padding:.9rem 1.25rem}
  .nav-links,.btn-ghost{display:none}
  .mobile-menu-btn{display:block}
  .hero{padding:6rem 1.25rem 4rem}
  .hero::before{display:none}
  .hero-inner{grid-template-columns:1fr;gap:2.5rem}
  .hero-right{display:none}
  .about-strip-inner{grid-template-columns:1fr;gap:2rem}
  .about-avatar-small{width:100px;height:100px}
  .service-page-hero{padding:6rem 1.25rem 3rem}
  .service-detail,.how,.areas,.reviews,.faq,.contact,.about-strip{padding:4rem 1.25rem}
  .contact-inner{grid-template-columns:1fr;gap:2.5rem}
  .how-steps{grid-template-columns:1fr 1fr}
  footer{padding:2rem 1.25rem;flex-direction:column;text-align:center}
  .bark-bar{flex-wrap:wrap}
  .bark-stat{min-width:50%;border-bottom:1px solid var(--border)}
  .wa-float{bottom:1rem;right:1rem;font-size:.82rem;padding:.7rem 1.1rem}
}
</style>
</head>
<body>

<!-- WHATSAPP FLOAT -->
<a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20found%20you%20online%20and%20need%20some%20help%20with%20my%20computer." class="wa-float" target="_blank" rel="noopener">
  <span class="wa-icon">💬</span> WhatsApp Me
</a>

<!-- NAV -->
<nav>
  <a href="#" class="nav-brand" onclick="showPage('main')">Abdul's <span>Tech Solutions</span></a>
  <ul class="nav-links">
    <li><a href="#" onclick="showPage('main');scrollTo(0,0)">Home</a></li>
    <li><a href="#" onclick="showPage('home-repair')">Home Repair</a></li>
    <li><a href="#" onclick="showPage('business')">Business IT</a></li>
    <li><a href="#" onclick="showPage('teaching')">Teaching</a></li>
    <li><a href="#" onclick="showPage('consulting')">Consulting</a></li>
    <li><a href="#reviews-section">Reviews</a></li>
    <li><a href="#contact-section">Contact</a></li>
  </ul>
  <div class="nav-cta">
    <a href="tel:07356287590" class="btn-ghost">📞 07356 287590</a>
    <a href="#contact-section" class="btn-primary" onclick="showPage('main')">Get Help Now</a>
    <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobile-menu">
  <a href="#" onclick="showPage('main');closeMenu()">🏠 Home</a>
  <a href="#" onclick="showPage('home-repair');closeMenu()">🖥️ Home Computer Repair</a>
  <a href="#" onclick="showPage('business');closeMenu()">🏢 Business IT Support</a>
  <a href="#" onclick="showPage('teaching');closeMenu()">👨‍🏫 Teaching &amp; Digital Skills</a>
  <a href="#" onclick="showPage('consulting');closeMenu()">💡 IT Consulting</a>
  <a href="#reviews-section" onclick="closeMenu()">⭐ Reviews</a>
  <a href="#contact-section" onclick="closeMenu()">✉️ Contact</a>
  <a href="tel:07356287590" class="mm-call">📞 Call: 07356 287590</a>
  <a href="sms:07356287590" class="mm-wa">💬 Text: 07356 287590</a>
  <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="color:#059669;font-weight:600">💬 WhatsApp Me</a>
</div>

<!-- ═══════════════════════════════════ MAIN PAGE ═══════════════════════════════════ -->
<div id="page-main" class="page active">

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-left">
      <div class="hero-eyebrow">Available in Willenhall &amp; West Midlands</div>
      <h1>Your <span class="blue">Friendly</span><br>Local Tech Guy</h1>
      <p class="hero-sub">I'm Abdul — I fix computers, sort out Wi-Fi, repair screens and keep your business running. No jargon, no hidden fees. I come to you.</p>
      <div class="hero-ctas">
        <a href="tel:07356287590" class="cta-main">📞 Call: 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20some%20help%20with%20my%20computer." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-outline">Send a Message →</a>
      </div>
      <div class="hero-trust">
        <div class="trust-pill">✅ <span>No fix, no fee</span></div>
        <div class="trust-pill">🏠 <span>I come to you</span></div>
        <div class="trust-pill">⭐ <span>5.0 on Bark (12 reviews)</span></div>
        <div class="trust-pill">🔒 <span>Enhanced DBS checked</span></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="avatar-wrap">
        <div class="avatar-bg-circle"></div>
        <svg viewBox="0 0 320 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;border-radius:50%;display:block;overflow:hidden">
          <rect width="320" height="340" fill="#e8f4f0"/>
          <rect x="60" y="240" width="200" height="100" rx="10" fill="#6dbfb0"/>
          <rect x="88" y="234" width="144" height="20" rx="6" fill="#5aada0"/>
          <polygon points="140,238 160,260 180,238 175,228 160,252 145,228" fill="#7dcec0"/>
          <line x1="160" y1="262" x2="160" y2="340" stroke="#5aada0" stroke-width="2"/>
          <circle cx="160" cy="272" r="4" fill="#fff" opacity="0.8"/>
          <circle cx="160" cy="286" r="4" fill="#fff" opacity="0.8"/>
          <circle cx="160" cy="300" r="4" fill="#fff" opacity="0.8"/>
          <rect x="170" y="272" width="28" height="22" rx="3" fill="#4d9d90" opacity="0.7"/>
          <rect x="130" y="222" width="60" height="20" rx="6" fill="#8b5e3c"/>
          <ellipse cx="160" cy="170" rx="68" ry="74" fill="#8b5e3c"/>
          <path d="M94 188 Q96 218 116 232 Q136 244 160 248 Q184 244 204 232 Q224 218 226 188 Q218 204 200 218 Q182 228 160 232 Q138 228 120 218 Q102 204 94 188Z" fill="#2a1505" opacity="0.88"/>
          <path d="M144 210 Q153 218 160 216 Q167 218 176 210" stroke="#2a1505" stroke-width="3" fill="none" stroke-linecap="round"/>
          <ellipse cx="160" cy="105" rx="68" ry="38" fill="#1a0800"/>
          <ellipse cx="93" cy="138" rx="15" ry="32" fill="#1a0800"/>
          <ellipse cx="227" cy="138" rx="15" ry="32" fill="#1a0800"/>
          <ellipse cx="160" cy="128" rx="66" ry="16" fill="#1a0800"/>
          <ellipse cx="91" cy="172" rx="12" ry="18" fill="#7a5230"/>
          <ellipse cx="229" cy="172" rx="12" ry="18" fill="#7a5230"/>
          <ellipse cx="91" cy="172" rx="7" ry="11" fill="#8b5e3c"/>
          <ellipse cx="229" cy="172" rx="7" ry="11" fill="#8b5e3c"/>
          <ellipse cx="141" cy="162" rx="13" ry="12" fill="#fff"/>
          <ellipse cx="179" cy="162" rx="13" ry="12" fill="#fff"/>
          <ellipse cx="141" cy="163" rx="8" ry="8" fill="#1a0800"/>
          <ellipse cx="179" cy="163" rx="8" ry="8" fill="#1a0800"/>
          <circle cx="144" cy="159" r="3" fill="#fff"/>
          <circle cx="182" cy="159" r="3" fill="#fff"/>
          <circle cx="141" cy="162" r="18" fill="none" stroke="#1e1e1e" stroke-width="3"/>
          <circle cx="179" cy="162" r="18" fill="none" stroke="#1e1e1e" stroke-width="3"/>
          <path d="M159 162 Q160 158 161 162" stroke="#1e1e1e" stroke-width="2.5" fill="none"/>
          <line x1="123" y1="157" x2="92" y2="152" stroke="#1e1e1e" stroke-width="2" stroke-linecap="round"/>
          <line x1="197" y1="157" x2="228" y2="152" stroke="#1e1e1e" stroke-width="2" stroke-linecap="round"/>
          <path d="M126 144 Q141 136 156 143" stroke="#1a0800" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M164 143 Q179 136 194 144" stroke="#1a0800" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M146 188 Q160 198 174 188" stroke="#6b3a1f" stroke-width="3" fill="none" stroke-linecap="round"/>
          <rect x="62" y="272" width="130" height="78" rx="8" fill="#1e293b"/>
          <rect x="66" y="276" width="122" height="68" rx="5" fill="#0f172a"/>
          <rect x="70" y="280" width="114" height="61" rx="3" fill="#0a0f1a"/>
          <rect x="76" y="286" width="44" height="5" rx="2" fill="#3b82f6" opacity="0.9"/>
          <rect x="76" y="294" width="34" height="3" rx="2" fill="#60a5fa" opacity="0.55"/>
          <rect x="76" y="300" width="40" height="3" rx="2" fill="#60a5fa" opacity="0.4"/>
          <rect x="76" y="306" width="28" height="3" rx="2" fill="#60a5fa" opacity="0.3"/>
          <rect x="126" y="285" width="52" height="50" rx="4" fill="#1d4ed8" opacity="0.75"/>
          <text x="152" y="315" text-anchor="middle" font-size="22" fill="#4ade80">✓</text>
          <circle cx="248" cy="88" r="28" fill="#fff" stroke="#e2e6f0" stroke-width="2"/>
          <text x="248" y="97" text-anchor="middle" font-size="22">🔧</text>
        </svg>
        <div class="speech-bubble">
          <p>Hi! I'm Abdul 👋 How can I help with your tech today?</p>
        </div>
      </div>
      <div class="hero-quick-contact">
        <div class="hqc-title">Get in touch right now</div>
        <div class="hqc-row">
          <div class="hqc-icon" style="background:#eff4ff">📞</div>
          <div>
            <div class="hqc-lbl">Call me</div>
            <a href="tel:07356287590" class="hqc-val">07356 287590</a>
          </div>
        </div>
        <div class="hqc-row">
          <div class="hqc-icon" style="background:#f0fdf7">💬</div>
          <div>
            <div class="hqc-lbl">WhatsApp</div>
            <a href="https://wa.me/447356287590" class="hqc-val" target="_blank" rel="noopener" style="color:#059669">Message me</a>
          </div>
        </div>
        <div class="hqc-row">
          <div class="hqc-icon" style="background:#fffbeb">📍</div>
          <div>
            <div class="hqc-lbl">Based in</div>
            <span class="hqc-val" style="font-size:.85rem">Willenhall, West Midlands</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES OVERVIEW -->
<section style="padding:5rem 3rem;background:#fff">
  <div style="max-width:1100px;margin:0 auto">
    <div class="section-label">What I can help with</div>
    <h2 class="section-heading">Pick what you need help with</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:2rem">

      <div onclick="showPage('home-repair')" style="cursor:pointer;background:var(--accent-pale);border:2px solid #bfdbfe;border-radius:20px;padding:2.5rem;transition:box-shadow .2s,transform .2s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(29,78,216,.12)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
        <div style="font-size:2.5rem;margin-bottom:1rem">🏠</div>
        <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;margin-bottom:.6rem;color:var(--text)">Home Computer Repair</h3>
        <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:1.25rem">Laptop broken? Slow PC? Virus trouble? I come to your home, fix the problem and explain everything in plain English.</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Screen replacements</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Virus &amp; malware removal</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Speed-up &amp; tune-up</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Wi-Fi &amp; printer setup</li>
        </ul>
        <span style="display:inline-flex;align-items:center;gap:.4rem;background:var(--accent-light);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:.875rem;padding:.6rem 1.3rem;border-radius:8px">See Home Services →</span>
      </div>

      <div onclick="showPage('business')" style="cursor:pointer;background:var(--yellow-bg);border:2px solid #fde68a;border-radius:20px;padding:2.5rem;transition:box-shadow .2s,transform .2s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(217,119,6,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
        <div style="font-size:2.5rem;margin-bottom:1rem">🏢</div>
        <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;margin-bottom:.6rem;color:var(--text)">Small Business IT Support</h3>
        <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:1.25rem">Keep your business running smoothly. I handle networks, Microsoft 365, backups and on-site support — without the big agency fees.</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Network &amp; security setup</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Microsoft 365 &amp; Intune</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Remote &amp; on-site support</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Automated backups</li>
        </ul>
        <span style="display:inline-flex;align-items:center;gap:.4rem;background:var(--yellow);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:.875rem;padding:.6rem 1.3rem;border-radius:8px">See Business Services →</span>
      </div>

      <div onclick="showPage('teaching')" style="cursor:pointer;background:#f0fdf7;border:2px solid #a7f3d0;border-radius:20px;padding:2.5rem;transition:box-shadow .2s,transform .2s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(5,150,105,.12)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
        <div style="font-size:2.5rem;margin-bottom:1rem">👨‍🏫</div>
        <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;margin-bottom:.6rem;color:var(--text)">Teaching & Digital Skills</h3>
        <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:1.25rem">Patient, friendly one-to-one lessons for elderly people, children or anyone who wants to feel more confident with technology.</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Computer basics for seniors</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Safe internet for children</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Email, video calls &amp; more</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ No jargon, go at your pace</li>
        </ul>
        <span style="display:inline-flex;align-items:center;gap:.4rem;background:#059669;color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:.875rem;padding:.6rem 1.3rem;border-radius:8px">See Teaching Services →</span>
      </div>

      <div onclick="showPage('consulting')" style="cursor:pointer;background:#fdf4ff;border:2px solid #e9d5ff;border-radius:20px;padding:2.5rem;transition:box-shadow .2s,transform .2s" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(124,58,237,.1)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
        <div style="font-size:2.5rem;margin-bottom:1rem">💡</div>
        <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;margin-bottom:.6rem;color:var(--text)">IT Consulting</h3>
        <p style="font-size:.9rem;color:var(--muted);line-height:1.7;margin-bottom:1.25rem">Not sure what tech you need, or want a second opinion before spending money? I'll give you honest, unbiased advice with no sales pressure.</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.5rem">
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Tech buying advice</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ IT strategy for small businesses</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Security audits &amp; reviews</li>
          <li style="font-size:.875rem;color:var(--text);display:flex;gap:.5rem">✓ Project planning &amp; setup</li>
        </ul>
        <span style="display:inline-flex;align-items:center;gap:.4rem;background:#7c3aed;color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:.875rem;padding:.6rem 1.3rem;border-radius:8px">See Consulting →</span>
      </div>
  </div>
</section>

<!-- ABOUT STRIP -->
<div class="about-strip">
  <div class="about-strip-inner">
    <div class="about-avatar-small">
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="70" cy="70" r="70" fill="#4a9e92"/>
        <!-- shirt teal -->
        <ellipse cx="70" cy="128" rx="52" ry="38" fill="#6dbfb0"/>
        <rect x="42" y="98" width="56" height="45" rx="3" fill="#6dbfb0"/>
        <line x1="70" y1="103" x2="70" y2="140" stroke="#5aada0" stroke-width="1.5"/>
        <circle cx="70" cy="108" r="2.5" fill="#fff" opacity="0.85"/>
        <circle cx="70" cy="117" r="2.5" fill="#fff" opacity="0.85"/>
        <!-- collar -->
        <polygon points="62,100 70,113 78,100 76,95 70,108 64,95" fill="#7dcec0" opacity="0.95"/>
        <!-- neck -->
        <rect x="64" y="86" width="12" height="18" rx="5" fill="#8b5e3c"/>
        <!-- head -->
        <ellipse cx="70" cy="68" rx="28" ry="30" fill="#8b5e3c"/>
        <!-- hair -->
        <ellipse cx="70" cy="44" rx="28" ry="14" fill="#1a0800"/>
        <ellipse cx="43" cy="58" rx="7" ry="14" fill="#1a0800"/>
        <ellipse cx="97" cy="58" rx="7" ry="14" fill="#1a0800"/>
        <!-- beard -->
        <path d="M43 75 Q45 90 58 97 Q70 102 82 97 Q95 90 97 75 Q92 83 82 90 Q70 95 58 90 Q48 83 43 75Z" fill="#2a1505" opacity="0.85"/>
        <!-- ears -->
        <ellipse cx="42" cy="70" rx="6" ry="8" fill="#7a5230"/>
        <ellipse cx="98" cy="70" rx="6" ry="8" fill="#7a5230"/>
        <!-- eyes -->
        <ellipse cx="61" cy="65" rx="6" ry="5.5" fill="#fff"/>
        <ellipse cx="79" cy="65" rx="6" ry="5.5" fill="#fff"/>
        <ellipse cx="61" cy="65.5" rx="3.5" ry="3.5" fill="#2a1505"/>
        <ellipse cx="79" cy="65.5" rx="3.5" ry="3.5" fill="#2a1505"/>
        <circle cx="62.5" cy="64" r="1.2" fill="#fff"/>
        <circle cx="80.5" cy="64" r="1.2" fill="#fff"/>
        <!-- glasses round frames -->
        <circle cx="61" cy="65" r="9" fill="none" stroke="#2d2d2d" stroke-width="1.8"/>
        <circle cx="79" cy="65" r="9" fill="none" stroke="#2d2d2d" stroke-width="1.8"/>
        <path d="M70 65 Q70.5 63.5 71 65" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
        <line x1="52" y1="62" x2="43" y2="60" stroke="#2d2d2d" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="88" y1="62" x2="97" y2="60" stroke="#2d2d2d" stroke-width="1.5" stroke-linecap="round"/>
        <!-- eyebrows -->
        <path d="M52 56 Q61 52 70 56" stroke="#1a0800" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M70 56 Q79 52 88 56" stroke="#1a0800" stroke-width="2" fill="none" stroke-linecap="round"/>
        <!-- smile -->
        <path d="M62 81 Q70 87 78 81" stroke="#6b3a1f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="about-text">
      <h2>Hi, I'm Abdul 👋</h2>
      <p>I started Abdul's Tech Solutions because I wanted to offer the kind of IT support I'd want myself — honest, affordable, and actually explained in plain English. No corporate nonsense, no call centres. Just me, turning up on time and sorting your tech out properly.</p>
      <p style="margin-top:.75rem">I'm based in Willenhall and cover the whole West Midlands. I hold a Level 4 in Network Engineering, Microsoft Azure and 365 certifications, and I'm fully DBS checked — so you can trust me in your home or office.</p>
      <div class="about-chips">
        <span class="about-chip">5+ Years Experience</span>
        <span class="about-chip">500+ Repairs</span>
        <span class="about-chip">Enhanced DBS</span>
        <span class="about-chip">Level 4 Network Engineering</span>
        <span class="about-chip">Microsoft Azure Certified</span>
        <span class="about-chip">ITIL Foundation v4</span>
        <span class="about-chip">Full UK Driving Licence</span>
      </div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<section class="how">
  <div class="how-inner">
    <div class="section-label">Simple process</div>
    <h2 class="section-heading">How it works</h2>
    <p class="section-sub">Getting help is easy — no forms to fill in, no waiting on hold.</p>
    <div class="how-steps">
      <div class="how-step">
        <div class="step-num">1</div>
        <div class="step-title">Call, text or WhatsApp</div>
        <div class="step-desc">Get in touch however suits you. I'll ask a few quick questions to understand the problem.</div>
      </div>
      <div class="how-step">
        <div class="step-num">2</div>
        <div class="step-title">I give you a quote</div>
        <div class="step-desc">You'll get a clear, honest price before I do anything. No surprises, no hidden charges.</div>
      </div>
      <div class="how-step">
        <div class="step-num">3</div>
        <div class="step-title">I come to you</div>
        <div class="step-desc">I travel to your home or business across Willenhall and the West Midlands, usually within 24–48 hours.</div>
      </div>
      <div class="how-step">
        <div class="step-num">4</div>
        <div class="step-title">Problem solved ✓</div>
        <div class="step-desc">I fix it, explain what I did, and only charge if the job's done. Simple as that.</div>
      </div>
    </div>
  </div>
</section>

<!-- AREAS -->
<div class="areas">
  <div class="areas-inner">
    <span class="areas-label">📍 Areas covered</span>
    <div class="areas-tags">
      <span class="area-tag">Willenhall</span>
      <span class="area-tag">Walsall</span>
      <span class="area-tag">Birmingham</span>
      <span class="area-tag">Wolverhampton</span>
      <span class="area-tag">West Bromwich</span>
      <span class="area-tag">Dudley</span>
      <span class="area-tag">Solihull</span>
      <span class="area-tag">Coventry</span>
      <span class="area-tag">Sutton Coldfield</span>
      <span class="area-tag">Smethwick</span>
      <span class="area-tag">Erdington</span>
      <span class="area-tag">Darlaston</span>
      <span class="area-tag">+ surrounding areas</span>
    </div>
  </div>
</div>

<!-- REVIEWS -->
<section class="reviews" id="reviews-section">
  <div class="reviews-inner">
    <div class="section-label">What clients say</div>
    <h2 class="section-heading">12 Five-Star Reviews on Bark ⭐</h2>
    <p class="section-sub">Every review is verified — all from real clients via Bark.com.</p>
    <div class="bark-bar">
      <div class="bark-stat"><span class="bsn">5.0 ★</span><span class="bsl">Rating</span></div>
      <div class="bark-stat"><span class="bsn">12</span><span class="bsl">Reviews</span></div>
      <div class="bark-stat"><span class="bsn">23</span><span class="bsl">Hires on Bark</span></div>
      <div class="bark-stat"><span class="bsn">6 min</span><span class="bsl">Response time</span></div>
      <a href="https://www.bark.com/en/gb/b/abduls-tech-solutions/qJOR6v/" target="_blank" rel="noopener" class="bark-link-btn">View Bark Profile →</a>
    </div>
    <div class="reviews-grid">
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Above and beyond"</div><p class="review-body">Had issues with my desktop. Abdul got it running again, then found me a new machine and set the whole lot up. I was amazed. Will be using him again 100%.</p><div class="review-author">— Andy Millar, April 2026</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Drove 40 min at midnight to deliver my laptop"</div><p class="review-body">Screen smashed Tuesday evening — repaired and back to me by Thursday night, dropped off at midnight. The screen looks as good as new.</p><div class="review-author">— Louis Marsland, October 2025</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Saved me a fair amount of money"</div><p class="review-body">Repaired my son's Dell quickly, kept me updated, and offered advice that saved me money. Would recommend and use again without hesitation.</p><div class="review-author">— Mr Imtyaz Jumani, August 2025</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Sent photos once the job was done"</div><p class="review-body">Told the price, given a parts estimate, kept informed every step, sent pictures when complete. Would recommend to anyone.</p><div class="review-author">— Jude Rodney, August 2025</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Keeps you informed throughout"</div><p class="review-body">Fixed my screen and everything else my laptop needed. Keeps you updated at every stage and gives top recommendations. Will recommend to friends and family.</p><div class="review-author">— Abdullahi, March 2026</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Exceptional work ethics"</div><p class="review-body">Great guy — exceptional work ethics and very decent charges. Got my two laptops fixed and always responsive. Highly recommended.</p><div class="review-author">— Joy, March 2026</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Set up and secured everything — 10/10"</div><p class="review-body">Set up and secured my PC and laptop at a great price. I recommend him for any tech work. 10/10.</p><div class="review-author">— Ken Vincent, March 2026</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Sorted my printer and router"</div><p class="review-body">Managed to solve a complicated problem involving my printer and router. I can print important documents again. Thank you Abdul.</p><div class="review-author">— Mel Taylor, May 2026</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Very knowledgeable and helpful"</div><p class="review-body">Abdul is very knowledgeable and helpful. I recommend his services.</p><div class="review-author">— Roland Browne, May 2026</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Charging problem resolved quickly"</div><p class="review-body">Had a laptop charging problem — all resolved now. Very friendly and efficient service.</p><div class="review-author">— Stuart Spruce, November 2025</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Brilliant service"</div><p class="review-body">Brilliant service and efficient delivery. Couldn't ask for more from a local tech specialist.</p><div class="review-author">— Royston Wharton, August 2025</div></div>
      <div class="review-card"><div class="review-stars">★★★★★</div><div class="review-title">"Exactly what I sought"</div><p class="review-body">Needed qualified service and succeeded without reservation — exactly what I sought. Professional and reliable.</p><div class="review-author">— R. F. Lewis, May 2026</div></div>
    </div>
    <div style="text-align:center;margin-top:2rem">
      <a href="tel:07356287590" class="cta-main" style="display:inline-flex">📞 Call to Book: 07356 287590</a>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="faq-inner">
    <div class="section-label">Common questions</div>
    <h2 class="section-heading">Got a question?</h2>
    <p class="section-sub">Or just call me — 07356 287590.</p>
    <div class="faq-list">
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Why is my computer running so slowly? <span class="arr">▼</span></button><div class="faq-a">Usually caused by a nearly full hard drive, too many programmes starting up automatically, or an aging hard drive beginning to fail. In most cases a tune-up sorts it. Replacing an old hard drive with an SSD is one of the best upgrades — it can restore near-new speed for a very reasonable cost.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Is it worth repairing my laptop or should I buy a new one? <span class="arr">▼</span></button><div class="faq-a">If the repair costs less than 50% of a comparable new machine, repair is almost always better value. A slow or non-charging laptop often just needs an SSD or a new battery. I'll always give you an honest assessment before charging anything.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Do you offer a no fix, no fee guarantee? <span class="arr">▼</span></button><div class="faq-a">Yes — if I can't fix your problem, you don't pay. No diagnostic charge, no call-out fee for failed repairs.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Do you come to my home or do I need to drop off my device? <span class="arr">▼</span></button><div class="faq-a">I come to you. Home visits across Willenhall and the West Midlands, usually booked within 24–48 hours. Same-day available for urgent situations.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Can you recover deleted or lost files? <span class="arr">▼</span></button><div class="faq-a">In many cases, yes. Data recovery is possible for accidentally deleted files, failed hard drives, and systems that won't boot. I always attempt recovery before any repair that could overwrite data.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Do you need a contract for business IT support? <span class="arr">▼</span></button><div class="faq-a">No long-term contracts. Repairs are priced per job. For businesses wanting ongoing support, I offer flexible month-to-month arrangements with no lock-in.</div></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact-section">
  <div class="contact-inner">
    <div class="contact-left">
      <div class="section-label">Get in touch</div>
      <h2 class="section-heading">Call, Text, WhatsApp<br>or Fill in the Form</h2>
      <p class="section-sub">The quickest way is to call or WhatsApp me directly — I reply fast. Based in Willenhall, serving the whole West Midlands.</p>
      <div class="contact-ways">
        <a href="tel:07356287590" class="cw-row">
          <div class="cw-icon" style="background:#eff4ff">📞</div>
          <div><div class="cw-lbl">Call me — quickest option</div><div class="cw-val">07356 287590</div></div>
        </a>
        <a href="sms:07356287590" class="cw-row">
          <div class="cw-icon" style="background:#f0fdf7">💬</div>
          <div><div class="cw-lbl">Text me</div><div class="cw-val">07356 287590</div></div>
        </a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20some%20help%20with%20my%20computer." target="_blank" rel="noopener" class="cw-row">
          <div class="cw-icon" style="background:#f0fdf7">💚</div>
          <div><div class="cw-lbl">WhatsApp me</div><div class="cw-val" style="color:#059669">Message on WhatsApp</div></div>
        </a>
        <a href="mailto:abdulshikdarit@gmail.com" class="cw-row">
          <div class="cw-icon" style="background:#fffbeb">📧</div>
          <div><div class="cw-lbl">Email</div><div class="cw-val">abdulshikdarit@gmail.com</div></div>
        </a>
        <div class="cw-row" style="cursor:default">
          <div class="cw-icon" style="background:#fef2f2">📍</div>
          <div><div class="cw-lbl">Based in</div><div class="cw-val">Willenhall, West Midlands</div></div>
        </div>
      </div>
    </div>
    <div class="form-card">
      <h3>Send a message</h3>
      <p>Fill in your details and I'll call or text you back — usually within a few hours.</p>
      <div id="contact-form">
        <div class="field"><label>Your Name</label><input type="text" id="f-name" placeholder="e.g. John Smith"></div>
        <div class="field"><label>Phone Number</label><input type="tel" id="f-phone" placeholder="e.g. 07700 900000"></div>
        <div class="field"><label>Email Address</label><input type="email" id="f-email" placeholder="you@example.com"></div>
        <div class="field"><label>What do you need help with?</label>
          <select id="f-type">
            <option value="">— Select a service —</option>
            <option>Slow computer / tune-up</option>
            <option>Virus or malware removal</option>
            <option>Screen replacement</option>
            <option>Hardware repair (battery, keyboard etc.)</option>
            <option>Wi-Fi / networking setup</option>
            <option>Data recovery</option>
            <option>Printer or peripheral setup</option>
            <option>Business IT support</option>
            <option>Microsoft 365 / email setup</option>
            <option>Something else</option>
          </select>
        </div>
        <div class="field"><label>Brief description</label><textarea id="f-message" placeholder="Tell me a bit about the problem..."></textarea></div>
        <button class="submit-btn" onclick="submitForm()">Send Message →</button>
      </div>
      <div class="form-success" id="form-success">
        <div class="tick">✅</div>
        <h4>Message sent!</h4>
        <p>Thanks — I'll get back to you shortly. For urgent help call or WhatsApp <strong>07356 287590</strong>.</p>
      </div>
    </div>
  </div>
</section>

<!-- MAP -->
<div class="map-section">
  <iframe
    src="https://maps.google.com/maps?q=Willenhall,+West+Midlands,+UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
    allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    title="Abdul's Tech Solutions — Willenhall, West Midlands">
  </iframe>
</div>

</div><!-- end page-main -->

<!-- ══════════════════════════════ HOME REPAIR PAGE ══════════════════════════════ -->
<div id="page-home-repair" class="page">
  <div class="service-page-hero">
    <div class="service-page-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="page-badge home-badge">🏠 Home Computer Repair</div>
      <h1 class="page-hero-title">Computer Repair<br>at Your Home</h1>
      <p class="page-hero-sub">I come to you anywhere in Willenhall and the West Midlands. Fast, friendly repairs explained in plain English — no jargon, no surprise charges.</p>
      <div class="page-ctas">
        <a href="tel:07356287590" class="cta-main">📞 Call: 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20help%20with%20a%20home%20computer%20repair." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-outline" onclick="showPage('main')">Send a Message</a>
      </div>
    </div>
  </div>
  <section class="service-detail">
    <div class="sd-inner">
      <div class="section-label">What I fix</div>
      <h2 class="section-heading">Home IT Services</h2>
      <div class="sd-grid">
        <div class="sd-card">
          <span class="sd-card-icon">💻</span>
          <div class="sd-card-title">Screen Replacement</div>
          <p class="sd-card-desc">Cracked, flickering or completely black screen? I replace screens on most laptop brands — usually same week.</p>
          <ul class="sd-card-list">
            <li>Lenovo, HP, Dell, Acer, Asus</li>
            <li>Fast turnaround</li>
            <li>Quality parts used</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🐛</span>
          <div class="sd-card-title">Virus &amp; Malware Removal</div>
          <p class="sd-card-desc">Is your computer acting strange, showing pop-ups or running very slowly? I'll clean it out properly and protect it going forward.</p>
          <ul class="sd-card-list">
            <li>Full malware scan and removal</li>
            <li>Antivirus setup</li>
            <li>Security hardening advice</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">⚡</span>
          <div class="sd-card-title">Speed-Up &amp; Tune-Up</div>
          <p class="sd-card-desc">A slow computer doesn't mean a new one. I'll find what's causing it and fix it — often an SSD upgrade makes it feel brand new.</p>
          <ul class="sd-card-list">
            <li>SSD upgrades</li>
            <li>Startup programme cleanup</li>
            <li>RAM upgrades if needed</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">📶</span>
          <div class="sd-card-title">Wi-Fi &amp; Internet Setup</div>
          <p class="sd-card-desc">Can't connect? Slow in certain rooms? Printer won't find the network? I'll sort it all out.</p>
          <ul class="sd-card-list">
            <li>Router setup and optimisation</li>
            <li>Wi-Fi dead zone fixes</li>
            <li>Printer and device setup</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">💾</span>
          <div class="sd-card-title">Data Recovery &amp; Backup</div>
          <p class="sd-card-desc">Lost files, deleted photos or a hard drive that's failed? I'll attempt to recover what I can and set up proper backups so it doesn't happen again.</p>
          <ul class="sd-card-list">
            <li>File and photo recovery</li>
            <li>Failed hard drive recovery</li>
            <li>Cloud and local backup setup</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🖨️</span>
          <div class="sd-card-title">Printer &amp; Peripheral Setup</div>
          <p class="sd-card-desc">Getting printers, scanners, webcams and other devices talking to your computer can be a headache. I'll get it all connected and working.</p>
          <ul class="sd-card-list">
            <li>Wireless and USB printers</li>
            <li>Scanners and webcams</li>
            <li>Driver installation</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🔋</span>
          <div class="sd-card-title">Battery &amp; Charging Repairs</div>
          <p class="sd-card-desc">Laptop won't charge or dies in an hour? A battery replacement is often a quick, affordable fix that gives your laptop years more life.</p>
          <ul class="sd-card-list">
            <li>Battery replacement</li>
            <li>Charging port repair</li>
            <li>Power adapter check</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🪟</span>
          <div class="sd-card-title">Windows Install &amp; Upgrades</div>
          <p class="sd-card-desc">Fresh Windows install to clear out years of clutter, or help upgrading to Windows 11 — I'll make sure everything's set up cleanly.</p>
          <ul class="sd-card-list">
            <li>Clean Windows reinstall</li>
            <li>Windows 10 / 11 upgrades</li>
            <li>All drivers and software setup</li>
          </ul>
        </div>
      </div>
      <div class="pricing-note">
        <div class="pricing-note-icon">💡</div>
        <div class="pricing-note-text">
          <h4>No fix, no fee — always</h4>
          <p>I give you a clear quote before starting any work. If I can't fix it, you don't pay a penny. Most home repairs start from £40. Call me on <strong><a href="tel:07356287590" style="color:var(--accent-light)">07356 287590</a></strong> for a quick chat about your problem.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="areas">
    <div class="areas-inner">
      <span class="areas-label">📍 I come to you in</span>
      <div class="areas-tags">
        <span class="area-tag">Willenhall</span><span class="area-tag">Walsall</span><span class="area-tag">Birmingham</span><span class="area-tag">Wolverhampton</span><span class="area-tag">West Bromwich</span><span class="area-tag">Dudley</span><span class="area-tag">Solihull</span><span class="area-tag">Sutton Coldfield</span><span class="area-tag">Darlaston</span><span class="area-tag">+ more</span>
      </div>
    </div>
  </div>
  <section style="padding:3rem;background:var(--accent-light);text-align:center">
    <h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.8rem;color:#fff;margin-bottom:.75rem">Ready to get your computer fixed?</h2>
    <p style="color:rgba(255,255,255,.85);font-size:1rem;margin-bottom:1.5rem">Call, text or WhatsApp me — I reply fast and most jobs are booked within 24–48 hours.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="tel:07356287590" style="display:inline-flex;align-items:center;gap:.6rem;background:#fff;color:var(--accent-light);font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.6rem;background:var(--wa);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">💬 WhatsApp</a>
    </div>
  </section>
</div><!-- end page-home-repair -->

<!-- ══════════════════════════════ BUSINESS IT PAGE ══════════════════════════════ -->
<div id="page-business" class="page">
  <div class="service-page-hero">
    <div class="service-page-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="page-badge biz-badge">🏢 Small Business IT Support</div>
      <h1 class="page-hero-title">IT Support for<br>Small Businesses</h1>
      <p class="page-hero-sub">Keep your business running without the big agency costs. I handle your IT — networks, Microsoft 365, Intune, backups and more — so you can focus on what you do best.</p>
      <div class="page-ctas">
        <a href="tel:07356287590" class="cta-main">📞 Call: 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20business%20IT%20support." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-outline" onclick="showPage('main')">Send a Message</a>
      </div>
    </div>
  </div>
  <section class="service-detail">
    <div class="sd-inner">
      <div class="section-label">What I offer</div>
      <h2 class="section-heading">Business IT Services</h2>
      <div class="sd-grid">
        <div class="sd-card">
          <span class="sd-card-icon">🌐</span>
          <div class="sd-card-title">Network Setup &amp; Security</div>
          <p class="sd-card-desc">Secure, reliable Wi-Fi and cabling for your office. I design and install networks that work properly and keep your data safe.</p>
          <ul class="sd-card-list">
            <li>Business Wi-Fi setup</li>
            <li>Firewall configuration</li>
            <li>VLAN and network segmentation</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">☁️</span>
          <div class="sd-card-title">Microsoft 365 &amp; Email</div>
          <p class="sd-card-desc">Set up and manage Microsoft 365 for your team — email, Teams, SharePoint and OneDrive — all configured properly from day one.</p>
          <ul class="sd-card-list">
            <li>365 setup and migration</li>
            <li>Teams and SharePoint</li>
            <li>Email domain configuration</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">📱</span>
          <div class="sd-card-title">Microsoft Intune &amp; MDM</div>
          <p class="sd-card-desc">Manage all your company devices from one place. Enrol laptops, phones and tablets, push policies and keep everything secure.</p>
          <ul class="sd-card-list">
            <li>Device enrolment and policy</li>
            <li>App deployment</li>
            <li>iOS and Windows management</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🎧</span>
          <div class="sd-card-title">Remote &amp; On-Site Support</div>
          <p class="sd-card-desc">Something broken? I'm on hand for remote fixes via AnyDesk or Teams, and I come on-site across Willenhall and the West Midlands.</p>
          <ul class="sd-card-list">
            <li>Remote support via AnyDesk / Teams</li>
            <li>On-site visits</li>
            <li>Fast response times</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🔒</span>
          <div class="sd-card-title">Backup &amp; Data Protection</div>
          <p class="sd-card-desc">Ransomware and hardware failures happen. I set up automated offsite backups so your data is always safe and recoverable.</p>
          <ul class="sd-card-list">
            <li>Automated cloud backups</li>
            <li>Backup testing and verification</li>
            <li>Disaster recovery planning</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">⚙️</span>
          <div class="sd-card-title">PowerShell &amp; Automation</div>
          <p class="sd-card-desc">Save time on repetitive IT tasks with custom PowerShell scripts for reporting, user management and system maintenance.</p>
          <ul class="sd-card-list">
            <li>Custom automation scripts</li>
            <li>User account management</li>
            <li>Scheduled reporting</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🖥️</span>
          <div class="sd-card-title">Server &amp; Workstation Support</div>
          <p class="sd-card-desc">Windows Server setup, maintenance and troubleshooting. Keep your workstations updated and running reliably.</p>
          <ul class="sd-card-list">
            <li>Windows Server setup</li>
            <li>Patch management</li>
            <li>Hardware repair and upgrade</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🛡️</span>
          <div class="sd-card-title">Cybersecurity</div>
          <p class="sd-card-desc">Protect your business from phishing, ransomware and data breaches with layered security that goes beyond basic antivirus.</p>
          <ul class="sd-card-list">
            <li>Endpoint protection</li>
            <li>DNS filtering</li>
            <li>Staff phishing awareness</li>
          </ul>
        </div>
      </div>
      <div class="pricing-note" style="background:var(--yellow-bg);border-color:#fde68a">
        <div class="pricing-note-icon">💼</div>
        <div class="pricing-note-text">
          <h4 style="color:var(--yellow)">No long-term contracts</h4>
          <p>All work is priced per job or on a flexible monthly basis — no lock-in. Call me on <strong><a href="tel:07356287590" style="color:var(--yellow)">07356 287590</a></strong> for a free chat about your business needs.</p>
        </div>
      </div>
    </div>
  </section>
  <section style="padding:3rem;background:var(--text);text-align:center">
    <h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.8rem;color:#fff;margin-bottom:.75rem">Let's talk about your business IT</h2>
    <p style="color:rgba(255,255,255,.75);font-size:1rem;margin-bottom:1.5rem">Call or WhatsApp me for a free, no-obligation chat.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="tel:07356287590" style="display:inline-flex;align-items:center;gap:.6rem;background:#fff;color:var(--text);font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.6rem;background:var(--wa);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">💬 WhatsApp</a>
    </div>
  </section>
</div><!-- end page-business -->

<!-- ══════════════════════ TEACHING PAGE ══════════════════════ -->
<div id="page-teaching" class="page">
  <div class="service-page-hero" style="background:linear-gradient(135deg,#f0fdf7 0%,#ecfdf5 100%)">
    <div class="service-page-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="page-badge" style="background:#dcfce7;color:#166534;border:1px solid #a7f3d0">👨‍🏫 Teaching &amp; Digital Skills</div>
      <h1 class="page-hero-title">Learn Tech at <br>Your Own Pace</h1>
      <p class="page-hero-sub">Patient, friendly one-to-one lessons at your home across Willenhall and the West Midlands. Whether you're 7 or 77, I'll help you feel confident and safe online — with zero jargon.</p>
      <div class="page-ctas">
        <a href="tel:07356287590" class="cta-main">📞 Call: 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I'm%20interested%20in%20IT%20lessons." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-outline" onclick="showPage('main')">Send a Message</a>
      </div>
    </div>
  </div>

  <!-- WHO IS IT FOR -->
  <section style="padding:4rem 3rem;background:#fff">
    <div style="max-width:1100px;margin:0 auto">
      <div class="section-label">Who is this for?</div>
      <h2 class="section-heading">Everyone deserves to feel confident with tech</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:2rem">

        <div style="background:#eff4ff;border:2px solid #bfdbfe;border-radius:18px;padding:2rem">
          <div style="font-size:2.2rem;margin-bottom:1rem">👴👵</div>
          <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;margin-bottom:.6rem;color:#0f1623">For Elderly People</h3>
          <p style="font-size:.9rem;color:#5a6478;line-height:1.7;margin-bottom:1rem">Want to video call your family, shop online safely or just stop feeling confused by your phone or laptop? I'll sit with you, go at your pace, and never make you feel silly for asking.</p>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem">
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Video calls (FaceTime, WhatsApp, Zoom)</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Online shopping safely</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Email and photos</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Spotting scams &amp; staying safe</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Using smartphones &amp; tablets</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ NHS &amp; government websites</li>
          </ul>
        </div>

        <div style="background:#f0fdf7;border:2px solid #a7f3d0;border-radius:18px;padding:2rem">
          <div style="font-size:2.2rem;margin-bottom:1rem">👦👧</div>
          <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;margin-bottom:.6rem;color:#0f1623">For Children &amp; Young People</h3>
          <p style="font-size:.9rem;color:#5a6478;line-height:1.7;margin-bottom:1rem">Help your child learn to use computers confidently and safely — from homework help to understanding how the internet works and staying safe online.</p>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem">
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Computer basics &amp; typing skills</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Internet safety &amp; privacy</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Word, PowerPoint &amp; school tools</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Avoiding online dangers</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Coding &amp; tech interest sessions</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Parental controls setup</li>
          </ul>
        </div>

        <div style="background:#fdf4ff;border:2px solid #e9d5ff;border-radius:18px;padding:2rem">
          <div style="font-size:2.2rem;margin-bottom:1rem">🙋</div>
          <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;margin-bottom:.6rem;color:#0f1623">For Anyone Who Wants to Learn</h3>
          <p style="font-size:.9rem;color:#5a6478;line-height:1.7;margin-bottom:1rem">Changed jobs and need to learn new software? Want to understand your new laptop? Never too late — I'll help you get there without the stress.</p>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:.4rem">
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Microsoft Office basics</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Google Workspace / Drive</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Setting up a new device</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ Password safety &amp; accounts</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ One-off or regular sessions</li>
            <li style="font-size:.875rem;color:#0f1623;display:flex;gap:.5rem">✓ At home, your pace</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- HOW LESSONS WORK -->
  <section style="padding:4rem 3rem;background:var(--surface)">
    <div style="max-width:900px;margin:0 auto">
      <div class="section-label">How it works</div>
      <h2 class="section-heading">Simple, relaxed lessons at your home</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-top:2rem">
        <div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.06)">
          <div style="width:48px;height:48px;border-radius:50%;background:#eff4ff;border:2px solid #bfdbfe;color:#2563eb;font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">1</div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;margin-bottom:.4rem">Tell me what you want to learn</div>
          <div style="font-size:.85rem;color:#5a6478">Call, text or WhatsApp — I'll ask a few questions to understand your level and goals.</div>
        </div>
        <div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.06)">
          <div style="width:48px;height:48px;border-radius:50%;background:#eff4ff;border:2px solid #bfdbfe;color:#2563eb;font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">2</div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;margin-bottom:.4rem">I come to your home</div>
          <div style="font-size:.85rem;color:#5a6478">I bring everything needed. Lessons happen at your kitchen table, in your living room — wherever you're comfortable.</div>
        </div>
        <div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.06)">
          <div style="width:48px;height:48px;border-radius:50%;background:#eff4ff;border:2px solid #bfdbfe;color:#2563eb;font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">3</div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;margin-bottom:.4rem">Learn at your own pace</div>
          <div style="font-size:.85rem;color:#5a6478">No rush, no silly questions. I explain everything simply and clearly — we go as fast or as slow as you need.</div>
        </div>
        <div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.06)">
          <div style="width:48px;height:48px;border-radius:50%;background:#eff4ff;border:2px solid #bfdbfe;color:#2563eb;font-family:'Syne',sans-serif;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">4</div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;margin-bottom:.4rem">Practice notes &amp; follow-up</div>
          <div style="font-size:.85rem;color:#5a6478">I leave simple written notes so you can practise after. And you can text me if you get stuck between sessions.</div>
        </div>
      </div>
    </div>
  </section>

  <section style="padding:3rem;background:#059669;text-align:center">
    <h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.8rem;color:#fff;margin-bottom:.75rem">Ready to get started?</h2>
    <p style="color:rgba(255,255,255,.85);font-size:1rem;margin-bottom:1.5rem">Perfect for elderly relatives, children or anyone wanting to build their confidence with tech. Call me for a friendly chat.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="tel:07356287590" style="display:inline-flex;align-items:center;gap:.6rem;background:#fff;color:#059669;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.6rem;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.5);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">💬 WhatsApp Me</a>
    </div>
  </section>
</div>

<!-- ══════════════════════ CONSULTING PAGE ══════════════════════ -->
<div id="page-consulting" class="page">
  <div class="service-page-hero" style="background:linear-gradient(135deg,#fdf4ff 0%,#f5f3ff 100%)">
    <div class="service-page-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="page-badge" style="background:#f3e8ff;color:#6b21a8;border:1px solid #e9d5ff">💡 IT Consulting</div>
      <h1 class="page-hero-title">Honest IT Advice<br>You Can Trust</h1>
      <p class="page-hero-sub">Not sure what technology you need? Want a second opinion before spending money? I give clear, unbiased advice with no sales agenda — just straight talking from someone who knows their stuff.</p>
      <div class="page-ctas">
        <a href="tel:07356287590" class="cta-main">📞 Call: 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20some%20IT%20consulting%20advice." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-outline" onclick="showPage('main')">Send a Message</a>
      </div>
    </div>
  </div>

  <section class="service-detail">
    <div class="sd-inner">
      <div class="section-label">What I offer</div>
      <h2 class="section-heading">Consulting Services</h2>
      <div class="sd-grid">
        <div class="sd-card">
          <span class="sd-card-icon">🛒</span>
          <div class="sd-card-title">Tech Buying Advice</div>
          <p class="sd-card-desc">Thinking of buying a new laptop, phone, printer or piece of software? I'll tell you exactly what to get for your budget — and what to avoid.</p>
          <ul class="sd-card-list">
            <li>Laptops, PCs &amp; tablets</li>
            <li>Phones &amp; accessories</li>
            <li>Software &amp; subscriptions</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🗺️</span>
          <div class="sd-card-title">IT Strategy for Small Businesses</div>
          <p class="sd-card-desc">Planning to grow your business? I'll help you build a simple, affordable IT setup that scales with you — without overcomplicating things.</p>
          <ul class="sd-card-list">
            <li>Cloud vs on-site advice</li>
            <li>Software stack recommendations</li>
            <li>Cost-saving opportunities</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🔍</span>
          <div class="sd-card-title">Security Audits</div>
          <p class="sd-card-desc">Is your home or business actually secure? I'll review your setup and give you a clear, honest report on any gaps — with practical steps to fix them.</p>
          <ul class="sd-card-list">
            <li>Password &amp; account review</li>
            <li>Network security check</li>
            <li>Backup verification</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🚀</span>
          <div class="sd-card-title">New Tech Project Planning</div>
          <p class="sd-card-desc">Starting a new business, setting up an office, or moving to the cloud? I'll plan it properly from the start so you don't waste money fixing mistakes later.</p>
          <ul class="sd-card-list">
            <li>New office setup planning</li>
            <li>Cloud migration advice</li>
            <li>Tech onboarding for new staff</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">🧾</span>
          <div class="sd-card-title">Second Opinion on IT Quotes</div>
          <p class="sd-card-desc">Been given a quote from another IT company and not sure if it's fair? I'll review it and give you my honest take — no charge for a quick chat.</p>
          <ul class="sd-card-list">
            <li>Quote reviews</li>
            <li>Scope of work checks</li>
            <li>Value for money assessment</li>
          </ul>
        </div>
        <div class="sd-card">
          <span class="sd-card-icon">📋</span>
          <div class="sd-card-title">IT Health Check</div>
          <p class="sd-card-desc">A full review of your current IT setup — hardware, software, security, backups and internet. You get a clear written report with my recommendations.</p>
          <ul class="sd-card-list">
            <li>Full system review</li>
            <li>Written findings report</li>
            <li>Prioritised action plan</li>
          </ul>
        </div>
      </div>
      <div class="pricing-note" style="background:#fdf4ff;border-color:#e9d5ff">
        <div class="pricing-note-icon">💡</div>
        <div class="pricing-note-text">
          <h4 style="color:#7c3aed">Free initial chat — always</h4>
          <p>I'll always have a quick phone or WhatsApp conversation at no charge to understand what you need. Consulting sessions are then charged fairly by the hour. Call me on <strong><a href="tel:07356287590" style="color:#7c3aed">07356 287590</a></strong> to get started.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="padding:3rem;background:#7c3aed;text-align:center">
    <h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.8rem;color:#fff;margin-bottom:.75rem">Not sure where to start?</h2>
    <p style="color:rgba(255,255,255,.85);font-size:1rem;margin-bottom:1.5rem">Just give me a call or WhatsApp — the first chat is always free and I'm happy to point you in the right direction.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <a href="tel:07356287590" style="display:inline-flex;align-items:center;gap:.6rem;background:#fff;color:#7c3aed;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.6rem;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.4);color:#fff;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;padding:.9rem 2rem;border-radius:10px;text-decoration:none">💬 WhatsApp Me</a>
    </div>
  </section>
</div>
<footer>
  <div class="footer-brand">Abdul's <span>Tech Solutions</span></div>
  <div class="footer-links">
    <a href="#" onclick="showPage('main')">Home</a>
    <a href="#" onclick="showPage('home-repair')">Home Repair</a>
    <a href="#" onclick="showPage('business')">Business IT</a>
    <a href="#" onclick="showPage('teaching')">Teaching</a>
    <a href="#" onclick="showPage('consulting')">Consulting</a>
    <a href="#reviews-section" onclick="showPage('main')">Reviews</a>
    <a href="#contact-section" onclick="showPage('main')">Contact</a>
  </div>
  <div class="footer-right">Willenhall, West Midlands · <a href="tel:07356287590">07356 287590</a> · © 2025 Abdul's Tech Solutions</div>
</footer>

<script>
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a=>a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q=>q.classList.remove('open'));
  if(!isOpen){ans.classList.add('open');btn.classList.add('open')}
}
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const type = document.getElementById('f-type').value;
  const msg = document.getElementById('f-message').value.trim();
  if(!name){alert('Please enter your name.');return}
  if(!phone && !email){alert('Please enter a phone number or email so I can get back to you.');return}
  const subject = encodeURIComponent("Website Enquiry: "+(type||"IT Support"));
  const body = encodeURIComponent("Name: "+name+"\\nPhone: "+(phone||"Not provided")+"\\nEmail: "+(email||"Not provided")+"\\nService: "+(type||"Not specified")+"\\n\\nMessage:\\n"+(msg||"No details provided."));
  window.location.href = "mailto:abdulshikdarit@gmail.com?subject="+subject+"&body="+body;
  document.getElementById('contact-form').style.display='none';
  document.getElementById('form-success').style.display='block';
}
</script>
</body>
</html>
`;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ margin: 0, padding: 0 }}
    />
  );
}
