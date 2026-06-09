export default function Home() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abdul's Tech Solutions — Computer Repair Willenhall & West Midlands</title>
<meta name="description" content="Friendly, honest computer repair and IT support in Willenhall and the West Midlands. Call or WhatsApp Abdul: 07356 287590. No fix, no fee.">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#ffffff;--surface:#f7f8fc;--surface2:#eef1f8;
  --border:#e2e6f0;--border2:#c8cfe0;
  --text:#111827;--muted:#6b7280;
  --accent:#2563eb;--accent-pale:#eff6ff;--accent-glow:rgba(37,99,235,0.2);
  --green:#059669;--green-bg:#f0fdf7;--green-border:#a7f3d0;
  --yellow:#d97706;--yellow-bg:#fffbeb;
  --wa:#25d366;--wa-dark:#128c4e;
  --shadow:0 1px 3px rgba(0,0,0,.07),0 4px 12px rgba(0,0,0,.05);
  --shadow-md:0 4px 16px rgba(0,0,0,.1),0 12px 32px rgba(0,0,0,.07);
  --max:1100px;
}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);font-size:15px;line-height:1.65;overflow-x:hidden}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;justify-content:space-between;align-items:center;padding:.85rem 2.5rem;background:rgba(255,255,255,0.96);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);box-shadow:0 1px 6px rgba(0,0,0,.05)}
.nav-brand{font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;color:var(--text);text-decoration:none;letter-spacing:0;white-space:nowrap}
.nav-brand span{color:var(--accent)}
.nav-links{display:flex;gap:1.75rem;list-style:none}
.nav-links a{font-size:.82rem;color:var(--muted);text-decoration:none;font-weight:500;transition:color .2s}
.nav-links a:hover{color:var(--accent)}
.nav-cta{display:flex;align-items:center;gap:.6rem}
.btn-call{background:var(--accent);color:#fff;font-size:.82rem;font-weight:600;padding:.5rem 1.1rem;border-radius:7px;text-decoration:none;white-space:nowrap;transition:transform .15s,box-shadow .15s}
.btn-call:hover{transform:translateY(-1px);box-shadow:0 4px 14px var(--accent-glow)}
.btn-ghost{background:transparent;border:1.5px solid var(--border2);color:var(--text);font-size:.82rem;font-weight:500;padding:.45rem 1rem;border-radius:7px;text-decoration:none;white-space:nowrap;transition:border-color .2s}
.btn-ghost:hover{border-color:var(--accent)}
.mob-btn{display:none;background:none;border:1.5px solid var(--border2);color:var(--text);font-size:1.1rem;padding:.35rem .6rem;border-radius:6px;cursor:pointer}
.mob-menu{display:none;position:fixed;top:62px;left:0;right:0;z-index:199;background:#fff;border-bottom:1px solid var(--border);box-shadow:var(--shadow-md);flex-direction:column;padding:.75rem 1.5rem 1.25rem}
.mob-menu.open{display:flex}
.mob-menu a{font-size:.95rem;color:var(--muted);text-decoration:none;padding:.65rem 0;border-bottom:1px solid var(--border);font-weight:500}
.mob-menu a:last-child{border-bottom:none}
.mob-menu a:hover{color:var(--accent)}
.mob-call{color:var(--accent)!important;font-weight:600!important}
.mob-wa{color:var(--wa-dark)!important;font-weight:600!important}

/* PAGE SWITCH */
.page{display:none}.page.active{display:block}

/* HERO */
.hero{min-height:100vh;display:flex;align-items:center;padding:7rem 2.5rem 4rem;background:var(--bg);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;right:0;width:52%;height:100%;background:var(--accent-pale);clip-path:polygon(10% 0,100% 0,100% 100%,0 100%);z-index:0}
.hero-inner{max-width:var(--max);margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:center;position:relative;z-index:1}
.hero-eyebrow{display:inline-flex;align-items:center;gap:.45rem;background:var(--green-bg);border:1px solid var(--green-border);color:var(--green);font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.3rem .85rem;border-radius:99px;margin-bottom:1.25rem}
.hero-eyebrow::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green);flex-shrink:0;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-family:'Nunito',sans-serif;font-size:clamp(2.2rem,4vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.01em;color:var(--text);margin-bottom:1rem}
.hero h1 .blue{color:var(--accent)}
.hero-sub{font-size:.95rem;color:var(--muted);max-width:440px;margin-bottom:1.75rem;line-height:1.7}
.hero-ctas{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.cta-main{display:inline-flex;align-items:center;gap:.5rem;background:var(--accent);color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:.95rem;padding:.8rem 1.75rem;border-radius:9px;text-decoration:none;transition:transform .2s,box-shadow .2s}
.cta-main:hover{transform:translateY(-2px);box-shadow:0 8px 24px var(--accent-glow)}
.cta-wa{display:inline-flex;align-items:center;gap:.5rem;background:var(--wa);color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:.95rem;padding:.8rem 1.75rem;border-radius:9px;text-decoration:none;transition:transform .2s}
.cta-wa:hover{transform:translateY(-2px)}
.cta-sec{display:inline-flex;align-items:center;gap:.5rem;background:transparent;border:2px solid var(--border2);color:var(--text);font-weight:600;font-size:.9rem;padding:.75rem 1.5rem;border-radius:9px;text-decoration:none;transition:border-color .2s}
.cta-sec:hover{border-color:var(--accent)}
.trust-row{display:flex;flex-wrap:wrap;gap:.85rem}
.trust-pill{display:flex;align-items:center;gap:.35rem;font-size:.78rem;color:var(--muted);font-weight:500}

/* HERO RIGHT */
.hero-right{display:flex;flex-direction:column;align-items:center;gap:1.25rem}
.avatar-wrap{position:relative;width:290px;height:290px}
.avatar-bg{position:absolute;inset:0;border-radius:50%;background:#fff;box-shadow:var(--shadow-md)}
.avatar-svg{width:100%;height:100%;border-radius:50%;overflow:hidden;display:block}
.speech{position:absolute;top:-18px;right:-28px;background:#fff;border:1.5px solid var(--border);border-radius:14px 14px 14px 4px;padding:.65rem .9rem;box-shadow:var(--shadow);max-width:168px}
.speech p{font-size:.75rem;color:var(--text);font-weight:500;line-height:1.4}
.qc-box{width:100%;max-width:290px;background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:1.1rem;box-shadow:var(--shadow)}
.qc-title{font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem}
.qc-row{display:flex;align-items:center;gap:.7rem;padding:.5rem 0;border-bottom:1px solid var(--border)}
.qc-row:last-child{border-bottom:none;padding-bottom:0}
.qc-icon{width:34px;height:34px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
.qc-lbl{font-size:.68rem;color:var(--muted)}
.qc-val{font-size:.88rem;font-weight:600;color:var(--text);text-decoration:none}
.qc-val:hover{color:var(--accent)}

/* SERVICE SLIDER */
.slider-section{padding:3.5rem 2.5rem;background:#fff;border-bottom:1px solid var(--border)}
.slider-inner{max-width:var(--max);margin:0 auto}
.slider-label{font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:.5rem}
.slider-title{font-family:'Nunito',sans-serif;font-size:clamp(1.5rem,2.5vw,2rem);font-weight:800;letter-spacing:0;margin-bottom:1.75rem}
.slider-wrap{position:relative}
.slider-track{display:flex;gap:1rem;overflow:hidden;scroll-behavior:smooth}
.slide{flex:0 0 calc(33.33% - .67rem);background:var(--surface);border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .2s}
.slide:hover{border-color:var(--accent);box-shadow:var(--shadow-md);transform:translateY(-2px)}
.slide-icon{font-size:1.8rem;margin-bottom:.75rem;display:block}
.slide-title{font-family:'Nunito',sans-serif;font-weight:700;font-size:.95rem;margin-bottom:.4rem}
.slide-desc{font-size:.82rem;color:var(--muted);line-height:1.6}
.slide-btn{display:inline-flex;align-items:center;gap:.3rem;margin-top:.85rem;font-size:.78rem;font-weight:600;color:var(--accent);text-decoration:none}
.slider-nav{display:flex;gap:.5rem;margin-top:1.25rem}
.snav-btn{width:36px;height:36px;border-radius:50%;border:1.5px solid var(--border2);background:#fff;cursor:pointer;font-size:.9rem;display:flex;align-items:center;justify-content:center;transition:border-color .2s,background .2s}
.snav-btn:hover{border-color:var(--accent);background:var(--accent-pale)}
.sdots{display:flex;align-items:center;gap:.4rem;margin-left:.5rem}
.sdot{width:7px;height:7px;border-radius:50%;background:var(--border2);transition:background .2s}
.sdot.active{background:var(--accent)}

/* STICKY CTA BANNER */
.cta-banner{background:var(--accent);padding:1.1rem 2.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}
.cta-banner p{color:#fff;font-size:.92rem;font-weight:500}
.cta-banner p strong{font-weight:700}
.cta-banner-btns{display:flex;gap:.75rem;flex-wrap:wrap}
.cta-banner-btns a{display:inline-flex;align-items:center;gap:.4rem;font-size:.85rem;font-weight:600;padding:.55rem 1.25rem;border-radius:7px;text-decoration:none;white-space:nowrap;transition:transform .15s}
.cta-banner-btns a:hover{transform:translateY(-1px)}
.cta-b-call{background:#fff;color:var(--accent)}
.cta-b-wa{background:var(--wa);color:#fff}
.cta-b-form{background:transparent;border:1.5px solid rgba(255,255,255,.5);color:#fff}

/* SERVICES OVERVIEW */
.services-overview{padding:4rem 2.5rem;background:var(--surface)}
.so-inner{max-width:var(--max);margin:0 auto}
.sec-label{font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:.4rem}
.sec-title{font-family:'Nunito',sans-serif;font-size:clamp(1.5rem,2.5vw,2rem);font-weight:800;letter-spacing:0;margin-bottom:.5rem}
.sec-sub{font-size:.9rem;color:var(--muted);margin-bottom:2rem;max-width:520px}
.so-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.1rem}
.so-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .2s}
.so-card:hover{border-color:var(--accent);box-shadow:var(--shadow-md);transform:translateY(-3px)}
.so-icon{font-size:2rem;margin-bottom:.85rem;display:block}
.so-name{font-family:'Nunito',sans-serif;font-weight:800;font-size:1.05rem;margin-bottom:.4rem}
.so-desc{font-size:.82rem;color:var(--muted);line-height:1.6;margin-bottom:1rem}
.so-list{list-style:none;display:flex;flex-direction:column;gap:.3rem;margin-bottom:1.1rem}
.so-list li{font-size:.8rem;color:var(--text);display:flex;gap:.4rem}
.so-list li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
.so-link{display:inline-flex;align-items:center;gap:.35rem;font-size:.8rem;font-weight:700;color:#fff;padding:.5rem 1.1rem;border-radius:7px;text-decoration:none}

/* ABOUT */
.about{background:var(--text);color:#fff;padding:4rem 2.5rem}
.about-inner{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:auto 1fr;gap:3rem;align-items:center}
.about-av{width:130px;height:130px;border-radius:18px;overflow:hidden;border:3px solid rgba(255,255,255,.15);flex-shrink:0}
.about-av svg{width:100%;height:100%}
.about-text h2{font-family:'Nunito',sans-serif;font-size:1.6rem;font-weight:800;margin-bottom:.65rem;letter-spacing:0}
.about-text p{font-size:.88rem;color:rgba(255,255,255,.7);max-width:560px;line-height:1.72}
.chips{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:1rem}
.chip{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.85);font-size:.75rem;font-weight:500;padding:.25rem .7rem;border-radius:99px}

/* HOW */
.how{padding:4rem 2.5rem;background:var(--surface)}
.how-inner{max-width:var(--max);margin:0 auto}
.how-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1.5rem;margin-top:2rem}
.how-step{background:#fff;border:1.5px solid var(--border);border-radius:13px;padding:1.35rem;text-align:center;box-shadow:var(--shadow)}
.step-n{width:44px;height:44px;border-radius:50%;background:var(--accent-pale);border:2px solid var(--accent);color:var(--accent);font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;display:flex;align-items:center;justify-content:center;margin:0 auto .85rem}
.step-t{font-family:'Nunito',sans-serif;font-weight:700;font-size:.9rem;margin-bottom:.35rem}
.step-d{font-size:.8rem;color:var(--muted);line-height:1.55}

/* AREAS */
.areas{padding:2rem 2.5rem;background:#fff;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.areas-inner{max-width:var(--max);margin:0 auto;display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap}
.areas-lbl{font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.areas-tags{display:flex;flex-wrap:wrap;gap:.45rem}
.area-tag{background:var(--surface);border:1.5px solid var(--border);color:var(--text);font-size:.76rem;font-weight:500;padding:.25rem .7rem;border-radius:99px;transition:border-color .2s}
.area-tag:hover{border-color:var(--accent)}

/* REVIEWS */
.reviews{padding:4rem 2.5rem;background:var(--surface)}
.rev-inner{max-width:var(--max);margin:0 auto}
.bark-bar{display:flex;background:#fff;border:1.5px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:2rem;box-shadow:var(--shadow);flex-wrap:wrap}
.bstat{flex:1;min-width:90px;padding:.9rem 1rem;text-align:center;border-right:1px solid var(--border)}
.bstat:last-of-type{border-right:none}
.bsn{display:block;font-family:'Nunito',sans-serif;font-weight:800;font-size:1.2rem;color:var(--yellow)}
.bsl{display:block;font-size:.68rem;color:var(--muted);margin-top:.1rem}
.bark-btn{display:flex;align-items:center;justify-content:center;padding:.9rem 1.25rem;background:var(--accent);color:#fff;text-decoration:none;font-weight:600;font-size:.8rem;white-space:nowrap;transition:background .2s}
.bark-btn:hover{background:#1d4ed8}
.rev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.1rem}
.rev-card{background:#fff;border:1.5px solid var(--border);border-radius:12px;padding:1.35rem;box-shadow:var(--shadow);transition:box-shadow .2s}
.rev-card:hover{box-shadow:var(--shadow-md)}
.rev-stars{color:var(--yellow);font-size:.85rem;margin-bottom:.5rem}
.rev-title{font-weight:600;font-size:.88rem;margin-bottom:.4rem}
.rev-body{font-size:.82rem;color:var(--muted);line-height:1.62;margin-bottom:.65rem}
.rev-author{font-size:.74rem;color:var(--accent);font-weight:600}

/* FAQ */
.faq{padding:4rem 2.5rem;background:#fff}
.faq-inner{max-width:720px;margin:0 auto}
.faq-list{border:1.5px solid var(--border);border-radius:12px;overflow:hidden;margin-top:2rem}
.faq-item{background:#fff;border-bottom:1px solid var(--border)}
.faq-item:last-child{border-bottom:none}
.faq-q{width:100%;background:none;border:none;color:var(--text);font-family:'Inter',sans-serif;font-size:.88rem;font-weight:600;text-align:left;padding:1.1rem 1.35rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
.faq-q:hover{background:var(--surface)}
.faq-q .arr{font-size:.7rem;color:var(--muted);transition:transform .3s;flex-shrink:0}
.faq-q.open .arr{transform:rotate(180deg)}
.faq-a{font-size:.82rem;color:var(--muted);line-height:1.72;max-height:0;overflow:hidden;transition:max-height .35s ease,padding .2s}
.faq-a.open{max-height:300px;padding:0 1.35rem 1.1rem}

/* CONTACT */
.contact{padding:4rem 2.5rem;background:var(--surface)}
.contact-inner{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:3.5rem}
.cways{display:flex;flex-direction:column;gap:.65rem;margin-top:1.25rem}
.cw{display:flex;align-items:center;gap:.8rem;background:#fff;border:1.5px solid var(--border);border-radius:11px;padding:.875rem 1.1rem;text-decoration:none;transition:border-color .2s,box-shadow .2s;box-shadow:var(--shadow)}
.cw:hover{border-color:var(--accent);box-shadow:var(--shadow-md)}
.cw-ic{width:36px;height:36px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}
.cw-lb{font-size:.68rem;color:var(--muted);font-weight:500}
.cw-vl{font-weight:600;color:var(--text);font-size:.88rem}
.form-card{background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:var(--shadow)}
.form-card h3{font-family:'Nunito',sans-serif;font-weight:800;font-size:1.1rem;margin-bottom:.25rem}
.form-card p{font-size:.8rem;color:var(--muted);margin-bottom:1.35rem}
.field{margin-bottom:.9rem}
.field label{display:block;font-size:.7rem;font-weight:600;color:var(--muted);letter-spacing:.05em;text-transform:uppercase;margin-bottom:.35rem}
.field input,.field textarea,.field select{width:100%;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;padding:.62rem .9rem;color:var(--text);font-family:'Inter',sans-serif;font-size:.85rem;outline:none;transition:border-color .2s,box-shadow .2s}
.field input:focus,.field textarea:focus,.field select:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(37,99,235,.1);background:#fff}
.field textarea{resize:vertical;min-height:90px;line-height:1.6}
.sub-btn{width:100%;background:var(--accent);color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:.95rem;padding:.85rem;border:none;border-radius:8px;cursor:pointer;transition:transform .15s,box-shadow .15s}
.sub-btn:hover{transform:translateY(-1px);box-shadow:0 6px 18px var(--accent-glow)}
.form-note{font-size:.72rem;color:var(--muted);text-align:center;margin-top:.6rem}
.form-success{display:none;text-align:center;padding:1.75rem}
.form-success .tick{font-size:2.2rem;margin-bottom:.75rem}
.form-success h4{font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;margin-bottom:.4rem}
.form-success p{font-size:.82rem;color:var(--muted)}

/* MAP */
.map-section iframe{display:block;width:100%;height:360px;border:none;filter:grayscale(15%)}

/* SERVICE PAGES */
.sp-hero{padding:6.5rem 2.5rem 3.5rem;background:var(--surface);border-bottom:1px solid var(--border)}
.sp-inner{max-width:var(--max);margin:0 auto}
.back-btn{display:inline-flex;align-items:center;gap:.4rem;color:var(--muted);font-size:.82rem;font-weight:500;text-decoration:none;margin-bottom:1.25rem;transition:color .2s}
.back-btn:hover{color:var(--accent)}
.sp-badge{display:inline-flex;align-items:center;gap:.4rem;font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.3rem .85rem;border-radius:99px;margin-bottom:.85rem}
.sp-title{font-family:'Nunito',sans-serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;letter-spacing:-.01em;margin-bottom:.65rem}
.sp-sub{font-size:.95rem;color:var(--muted);max-width:520px;margin-bottom:1.75rem}
.sp-ctas{display:flex;gap:.75rem;flex-wrap:wrap}
.sd{padding:4rem 2.5rem;background:#fff}
.sd-inner{max-width:var(--max);margin:0 auto}
.sd-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.1rem;margin-top:2rem}
.sd-card{background:var(--surface);border:1.5px solid var(--border);border-radius:14px;padding:1.5rem;box-shadow:var(--shadow);transition:box-shadow .2s,transform .2s,border-color .2s}
.sd-card:hover{box-shadow:var(--shadow-md);transform:translateY(-2px);border-color:var(--accent)}
.sd-card-icon{font-size:1.6rem;margin-bottom:.75rem;display:block}
.sd-card-title{font-family:'Nunito',sans-serif;font-weight:700;font-size:.95rem;margin-bottom:.4rem}
.sd-card-desc{font-size:.82rem;color:var(--muted);line-height:1.6}
.sd-card-list{list-style:none;margin-top:.75rem;display:flex;flex-direction:column;gap:.35rem}
.sd-card-list li{font-size:.8rem;color:var(--text);display:flex;align-items:flex-start;gap:.4rem}
.sd-card-list li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
.pnote{margin-top:2.5rem;border:1.5px solid #bfdbfe;border-radius:12px;padding:1.35rem 1.75rem;display:flex;align-items:flex-start;gap:.9rem;background:var(--accent-pale)}
.pnote-icon{font-size:1.35rem;flex-shrink:0}
.pnote-text h4{font-weight:600;font-size:.9rem;margin-bottom:.3rem;color:var(--accent)}
.pnote-text p{font-size:.82rem;color:var(--muted)}
.sp-cta-bar{padding:2.5rem;text-align:center}
.sp-cta-bar h2{font-family:'Nunito',sans-serif;font-weight:800;font-size:1.6rem;color:#fff;margin-bottom:.65rem}
.sp-cta-bar p{color:rgba(255,255,255,.85);font-size:.9rem;margin-bottom:1.35rem}
.sp-cta-bar-btns{display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap}
.sp-cta-bar-btns a{display:inline-flex;align-items:center;gap:.5rem;font-family:'Nunito',sans-serif;font-weight:700;font-size:.9rem;padding:.8rem 1.75rem;border-radius:9px;text-decoration:none;transition:transform .15s}
.sp-cta-bar-btns a:hover{transform:translateY(-1px)}

/* FOOTER */
footer{background:var(--text);color:rgba(255,255,255,.65);padding:2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.25rem}
.footer-brand{font-family:'Nunito',sans-serif;font-weight:800;font-size:.95rem;color:#fff}
.footer-brand span{color:#60a5fa}
.footer-links{display:flex;gap:1.25rem;flex-wrap:wrap}
.footer-links a{font-size:.8rem;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:#fff}
.footer-right{font-size:.8rem}
.footer-right a{color:#60a5fa;text-decoration:none}

/* WA FLOAT */
.wa-float{position:fixed;bottom:1.5rem;right:1.5rem;z-index:300;background:var(--wa);color:#fff;font-family:'Nunito',sans-serif;font-weight:700;font-size:.85rem;padding:.75rem 1.25rem;border-radius:99px;text-decoration:none;box-shadow:0 4px 18px rgba(37,211,102,.4);display:flex;align-items:center;gap:.45rem;animation:slideUp .5s ease .4s both;transition:transform .2s}
.wa-float:hover{transform:translateY(-2px)}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

/* MOBILE */
@media(max-width:860px){
  nav{padding:.8rem 1.1rem}
  .nav-links,.btn-ghost{display:none}
  .mob-btn{display:block}
  .hero{padding:5.5rem 1.25rem 3.5rem}
  .hero::before{display:none}
  .hero-inner{grid-template-columns:1fr}
  .hero-right{display:none}
  .slider-section,.services-overview,.about,.how,.areas,.reviews,.faq,.contact{padding:3rem 1.25rem}
  .contact-inner{grid-template-columns:1fr;gap:2rem}
  .about-inner{grid-template-columns:1fr;gap:1.75rem}
  .sp-hero,.sd{padding:5.5rem 1.25rem 3rem}
  .cta-banner{padding:.9rem 1.25rem}
  footer{padding:1.75rem 1.25rem;flex-direction:column;text-align:center}
  .wa-float{bottom:.9rem;right:.9rem;font-size:.78rem;padding:.65rem 1rem}
  .slide{flex:0 0 calc(85% - .5rem)}
  .bark-bar{flex-wrap:wrap}
  .bstat{min-width:50%;border-bottom:1px solid var(--border)}
}
</style>
</head>
<body>

<!-- WA FLOAT -->
<a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20help%20with%20my%20computer." class="wa-float" target="_blank" rel="noopener">💬 WhatsApp Me</a>

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
    <a href="#contact-section" class="btn-call" onclick="showPage('main')">Get Help Now</a>
    <button class="mob-btn" onclick="toggleMenu()">☰</button>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mob-menu" id="mob-menu">
  <a href="#" onclick="showPage('main');closeMenu()">🏠 Home</a>
  <a href="#" onclick="showPage('home-repair');closeMenu()">🖥️ Home Repair</a>
  <a href="#" onclick="showPage('business');closeMenu()">🏢 Business IT</a>
  <a href="#" onclick="showPage('teaching');closeMenu()">👨‍🏫 Teaching</a>
  <a href="#" onclick="showPage('consulting');closeMenu()">💡 Consulting</a>
  <a href="#reviews-section" onclick="closeMenu()">⭐ Reviews</a>
  <a href="#contact-section" onclick="closeMenu()">✉️ Contact</a>
  <a href="tel:07356287590" class="mob-call">📞 07356 287590</a>
  <a href="https://wa.me/447356287590" target="_blank" rel="noopener" class="mob-wa">💬 WhatsApp Me</a>
</div>

<!-- ════════════════ MAIN PAGE ════════════════ -->
<div id="page-main" class="page active">

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-left">
      <div class="hero-eyebrow">Available in Willenhall &amp; West Midlands</div>
      <h1>Your <span class="blue">Friendly</span><br>Local Tech Guy</h1>
      <p class="hero-sub">I'm Abdul — I fix computers, sort Wi-Fi, repair screens and support your business. No jargon, no hidden fees. I come to you.</p>
      <div class="hero-ctas">
        <a href="tel:07356287590" class="cta-main">📞 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20help." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-sec">Send a Message →</a>
      </div>
      <div class="trust-row">
        <div class="trust-pill">✅ <span>No fix, no fee</span></div>
        <div class="trust-pill">🏠 <span>I come to you</span></div>
        <div class="trust-pill">⭐ <span>5.0 Bark · 12 reviews</span></div>
        <div class="trust-pill">🔒 <span>DBS checked</span></div>
      </div>
    </div>
    <div class="hero-right">
      <div style="width:100%;max-width:340px">
        <div style="font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:.5rem">What I can help with</div>
        <div style="position:relative;overflow:hidden;border-radius:16px">
          <!-- HERO SLIDES -->
          <div id="hero-slides" style="display:flex;transition:transform .5s ease">
            <div class="hslide" style="min-width:100%;background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:var(--shadow-md)">
              <div style="font-size:2.2rem;margin-bottom:.85rem">🖥️</div>
              <div style="font-family:'Nunito',sans-serif;font-weight:800;font-size:1.15rem;margin-bottom:.5rem;color:var(--text)">Home Computer Repair</div>
              <p style="font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:1.1rem">Screen repairs, virus removal, speed-ups, Wi-Fi — I come to your home across the West Midlands.</p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:.35rem;margin-bottom:1.25rem">
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Screen &amp; hardware repair</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Virus &amp; malware removal</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Speed-up &amp; SSD upgrades</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Wi-Fi &amp; printer setup</li>
              </ul>
              <span onclick="showPage('home-repair')" style="display:inline-flex;align-items:center;gap:.4rem;background:var(--accent);color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:.82rem;padding:.55rem 1.1rem;border-radius:8px;cursor:pointer">See Home Services →</span>
            </div>
            <div class="hslide" style="min-width:100%;background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:var(--shadow-md)">
              <div style="font-size:2.2rem;margin-bottom:.85rem">🏢</div>
              <div style="font-family:'Nunito',sans-serif;font-weight:800;font-size:1.15rem;margin-bottom:.5rem;color:var(--text)">Business IT Support</div>
              <p style="font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:1.1rem">Networks, Microsoft 365, Intune and backups — keep your business running without the big agency costs.</p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:.35rem;margin-bottom:1.25rem">
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Network &amp; security setup</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Microsoft 365 &amp; Intune</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Remote &amp; on-site support</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Backups &amp; cybersecurity</li>
              </ul>
              <span onclick="showPage('business')" style="display:inline-flex;align-items:center;gap:.4rem;background:var(--yellow);color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:.82rem;padding:.55rem 1.1rem;border-radius:8px;cursor:pointer">See Business Services →</span>
            </div>
            <div class="hslide" style="min-width:100%;background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:var(--shadow-md)">
              <div style="font-size:2.2rem;margin-bottom:.85rem">👨‍🏫</div>
              <div style="font-family:'Nunito',sans-serif;font-weight:800;font-size:1.15rem;margin-bottom:.5rem;color:var(--text)">Teaching &amp; Digital Skills</div>
              <p style="font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:1.1rem">Patient one-to-one lessons for elderly people, children or anyone wanting to feel confident with tech.</p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:.35rem;margin-bottom:1.25rem">
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Computer basics for seniors</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Internet safety for children</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Email, video calls &amp; more</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Your pace, no jargon</li>
              </ul>
              <span onclick="showPage('teaching')" style="display:inline-flex;align-items:center;gap:.4rem;background:#059669;color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:.82rem;padding:.55rem 1.1rem;border-radius:8px;cursor:pointer">See Teaching →</span>
            </div>
            <div class="hslide" style="min-width:100%;background:#fff;border:1.5px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:var(--shadow-md)">
              <div style="font-size:2.2rem;margin-bottom:.85rem">💡</div>
              <div style="font-family:'Nunito',sans-serif;font-weight:800;font-size:1.15rem;margin-bottom:.5rem;color:var(--text)">IT Consulting</div>
              <p style="font-size:.85rem;color:var(--muted);line-height:1.65;margin-bottom:1.1rem">Honest buying advice, security audits and IT strategy — no sales pressure, first chat always free.</p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:.35rem;margin-bottom:1.25rem">
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Tech buying advice</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Security audits</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ IT strategy for businesses</li>
                <li style="font-size:.82rem;color:var(--text);display:flex;gap:.4rem">✓ Free initial consultation</li>
              </ul>
              <span onclick="showPage('consulting')" style="display:inline-flex;align-items:center;gap:.4rem;background:#7c3aed;color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:.82rem;padding:.55rem 1.1rem;border-radius:8px;cursor:pointer">See Consulting →</span>
            </div>
          </div>
        </div>
        <!-- SLIDE CONTROLS -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:1rem">
          <div style="display:flex;gap:.4rem" id="hero-dots">
            <div style="width:8px;height:8px;border-radius:50%;background:var(--accent);transition:background .2s"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:var(--border2);transition:background .2s"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:var(--border2);transition:background .2s"></div>
            <div style="width:8px;height:8px;border-radius:50%;background:var(--border2);transition:background .2s"></div>
          </div>
          <div style="display:flex;gap:.4rem">
            <button onclick="heroSlide(-1)" style="width:34px;height:34px;border-radius:50%;border:1.5px solid var(--border2);background:#fff;cursor:pointer;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:border-color .2s">←</button>
            <button onclick="heroSlide(1)" style="width:34px;height:34px;border-radius:50%;border:1.5px solid var(--border2);background:#fff;cursor:pointer;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:border-color .2s">→</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICE SLIDER -->
<section class="slider-section">
  <div class="slider-inner">
    <div class="slider-label">What I offer</div>
    <h2 class="slider-title">How can I help you today?</h2>
    <div class="slider-wrap">
      <div class="slider-track" id="slider-track">
        <div class="slide" onclick="showPage('home-repair')">
          <span class="slide-icon">🖥️</span>
          <div class="slide-title">Home Computer Repair</div>
          <div class="slide-desc">Screen repairs, virus removal, slow PC fix, Wi-Fi setup — I come to your home across the West Midlands.</div>
          <span class="slide-btn">See services →</span>
        </div>
        <div class="slide" onclick="showPage('business')">
          <span class="slide-icon">🏢</span>
          <div class="slide-title">Business IT Support</div>
          <div class="slide-desc">Networks, Microsoft 365, Intune, remote support and backups — keep your business running smoothly.</div>
          <span class="slide-btn">See services →</span>
        </div>
        <div class="slide" onclick="showPage('teaching')">
          <span class="slide-icon">👨‍🏫</span>
          <div class="slide-title">Teaching &amp; Digital Skills</div>
          <div class="slide-desc">Patient one-to-one lessons for elderly people, children or anyone who wants to feel confident with tech.</div>
          <span class="slide-btn">See services →</span>
        </div>
        <div class="slide" onclick="showPage('consulting')">
          <span class="slide-icon">💡</span>
          <div class="slide-title">IT Consulting</div>
          <div class="slide-desc">Honest buying advice, security audits, IT strategy and second opinions — no sales pressure, ever.</div>
          <span class="slide-btn">See services →</span>
        </div>
      </div>
      <div class="slider-nav">
        <button class="snav-btn" onclick="slideNav(-1)">←</button>
        <button class="snav-btn" onclick="slideNav(1)">→</button>
        <div class="sdots">
          <div class="sdot active" id="dot0"></div>
          <div class="sdot" id="dot1"></div>
          <div class="sdot" id="dot2"></div>
          <div class="sdot" id="dot3"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<div class="cta-banner">
  <p>🔧 <strong>Need help today?</strong> Most jobs booked within 24–48 hours. No fix, no fee — guaranteed.</p>
  <div class="cta-banner-btns">
    <a href="tel:07356287590" class="cta-b-call">📞 Call Now</a>
    <a href="https://wa.me/447356287590" class="cta-b-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
    <a href="#contact-section" class="cta-b-form">✉️ Send a Message</a>
  </div>
</div>

<!-- SERVICES OVERVIEW -->
<section class="services-overview">
  <div class="so-inner">
    <div class="sec-label">All services</div>
    <h2 class="sec-title">Pick what you need help with</h2>
    <div class="so-grid">
      <div class="so-card" onclick="showPage('home-repair')">
        <span class="so-icon">🏠</span>
        <div class="so-name">Home Computer Repair</div>
        <p class="so-desc">I come to your home and fix the problem in plain English — no jargon, no surprise charges.</p>
        <ul class="so-list">
          <li>Screen replacements</li><li>Virus &amp; malware removal</li><li>Speed-up &amp; tune-up</li><li>Wi-Fi &amp; printer setup</li>
        </ul>
        <span class="so-link" style="background:var(--accent)">See Home Services →</span>
      </div>
      <div class="so-card" onclick="showPage('business')">
        <span class="so-icon">🏢</span>
        <div class="so-name">Business IT Support</div>
        <p class="so-desc">Keep your business running without big agency costs. Flexible, no contracts.</p>
        <ul class="so-list">
          <li>Network &amp; security setup</li><li>Microsoft 365 &amp; Intune</li><li>Remote &amp; on-site support</li><li>Automated backups</li>
        </ul>
        <span class="so-link" style="background:var(--yellow)">See Business Services →</span>
      </div>
      <div class="so-card" onclick="showPage('teaching')">
        <span class="so-icon">👨‍🏫</span>
        <div class="so-name">Teaching &amp; Digital Skills</div>
        <p class="so-desc">Patient, relaxed lessons at your home for elderly people, children or anyone who wants to learn.</p>
        <ul class="so-list">
          <li>Computer basics for seniors</li><li>Safe internet for children</li><li>Email, video calls &amp; more</li><li>No jargon, go at your pace</li>
        </ul>
        <span class="so-link" style="background:#059669">See Teaching →</span>
      </div>
      <div class="so-card" onclick="showPage('consulting')">
        <span class="so-icon">💡</span>
        <div class="so-name">IT Consulting</div>
        <p class="so-desc">Honest, unbiased IT advice — buying guidance, security audits and strategy with no sales pressure.</p>
        <ul class="so-list">
          <li>Tech buying advice</li><li>Security audits</li><li>IT strategy for businesses</li><li>Free initial chat</li>
        </ul>
        <span class="so-link" style="background:#7c3aed">See Consulting →</span>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<div class="about">
  <div class="about-inner">
    <div class="about-av">
      <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
        <circle cx="65" cy="65" r="65" fill="#1e3a5f"/>
        <rect x="28" y="100" width="74" height="35" rx="8" fill="#6dbfb0"/>
        <polygon points="54,103 65,118 76,103 72,96 65,111 58,96" fill="#7dcec0" opacity="0.9"/>
        <rect x="58" y="84" width="14" height="20" rx="6" fill="#8b5e3c"/>
        <ellipse cx="65" cy="66" rx="28" ry="30" fill="#8b5e3c"/>
        <ellipse cx="65" cy="43" rx="28" ry="16" fill="#1a0800"/>
        <ellipse cx="38" cy="57" rx="7" ry="12" fill="#1a0800"/>
        <ellipse cx="92" cy="57" rx="7" ry="12" fill="#1a0800"/>
        <ellipse cx="39" cy="68" rx="5" ry="7" fill="#7a5230"/>
        <ellipse cx="91" cy="68" rx="5" ry="7" fill="#7a5230"/>
        <path d="M37 74 Q39 88 50 95 Q65 102 80 95 Q91 88 93 74 Q87 82 77 88 Q65 93 53 88 Q43 82 37 74Z" fill="#2a1505" opacity="0.85"/>
        <ellipse cx="55" cy="63" rx="6" ry="5.5" fill="#fff"/>
        <ellipse cx="75" cy="63" rx="6" ry="5.5" fill="#fff"/>
        <ellipse cx="55" cy="63.5" rx="3.5" ry="3.5" fill="#1a0800"/>
        <ellipse cx="75" cy="63.5" rx="3.5" ry="3.5" fill="#1a0800"/>
        <circle cx="55" cy="62" r="9" fill="none" stroke="#2d2d2d" stroke-width="1.8"/>
        <circle cx="75" cy="62" r="9" fill="none" stroke="#2d2d2d" stroke-width="1.8"/>
        <path d="M64 62 Q65 60 66 62" stroke="#2d2d2d" stroke-width="1.5" fill="none"/>
        <line x1="46" y1="59" x2="38" y2="57" stroke="#2d2d2d" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="84" y1="59" x2="92" y2="57" stroke="#2d2d2d" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M47 52 Q55 47 63 52" stroke="#1a0800" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M67 52 Q75 47 83 52" stroke="#1a0800" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M56 79 Q65 86 74 79" stroke="#6b3a1f" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="about-text">
      <h2>Hi, I'm Abdul 👋</h2>
      <p>I started Abdul's Tech Solutions because I wanted to offer the kind of IT support I'd want myself — honest, affordable, and explained in plain English. No call centres, no corporate nonsense. Just me, turning up on time and sorting your tech properly.</p>
      <p style="margin-top:.6rem">Based in Willenhall, covering the whole West Midlands. Level 4 Network Engineering, Microsoft Azure and 365 certified, fully DBS checked.</p>
      <div class="chips">
        <span class="chip">5+ Years Experience</span><span class="chip">500+ Repairs</span><span class="chip">Enhanced DBS</span><span class="chip">Level 4 Network Eng.</span><span class="chip">Microsoft Azure</span><span class="chip">ITIL Foundation v4</span>
      </div>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<section class="how">
  <div class="how-inner">
    <div class="sec-label">Simple process</div>
    <h2 class="sec-title">How it works</h2>
    <p class="sec-sub">Getting help is easy — no forms, no waiting on hold.</p>
    <div class="how-steps">
      <div class="how-step"><div class="step-n">1</div><div class="step-t">Call, text or WhatsApp</div><div class="step-d">Get in touch however suits you. I'll ask a few quick questions to understand the problem.</div></div>
      <div class="how-step"><div class="step-n">2</div><div class="step-t">I give you a quote</div><div class="step-d">Clear, honest price before I do anything. No surprises, no hidden charges.</div></div>
      <div class="how-step"><div class="step-n">3</div><div class="step-t">I come to you</div><div class="step-d">I travel to your home or business across Willenhall and the West Midlands, usually within 24–48 hours.</div></div>
      <div class="how-step"><div class="step-n">4</div><div class="step-t">Problem solved ✓</div><div class="step-d">I fix it, explain what I did, and only charge if the job's done.</div></div>
    </div>
  </div>
</section>

<!-- AREAS -->
<div class="areas">
  <div class="areas-inner">
    <span class="areas-lbl">📍 Areas covered</span>
    <div class="areas-tags">
      <span class="area-tag">Willenhall</span><span class="area-tag">Walsall</span><span class="area-tag">Birmingham</span><span class="area-tag">Wolverhampton</span><span class="area-tag">West Bromwich</span><span class="area-tag">Dudley</span><span class="area-tag">Solihull</span><span class="area-tag">Coventry</span><span class="area-tag">Sutton Coldfield</span><span class="area-tag">Smethwick</span><span class="area-tag">Erdington</span><span class="area-tag">Darlaston</span><span class="area-tag">+ surrounding areas</span>
    </div>
  </div>
</div>

<!-- REVIEWS -->
<section class="reviews" id="reviews-section">
  <div class="rev-inner">
    <div class="sec-label">What clients say</div>
    <h2 class="sec-title">12 Five-Star Reviews on Bark ⭐</h2>
    <p class="sec-sub">Every review is verified — all from real clients via Bark.com.</p>
    <div class="bark-bar">
      <div class="bstat"><span class="bsn">5.0 ★</span><span class="bsl">Rating</span></div>
      <div class="bstat"><span class="bsn">12</span><span class="bsl">Reviews</span></div>
      <div class="bstat"><span class="bsn">23</span><span class="bsl">Hires on Bark</span></div>
      <div class="bstat"><span class="bsn">6 min</span><span class="bsl">Response time</span></div>
      <a href="https://www.bark.com/en/gb/b/abduls-tech-solutions/qJOR6v/" target="_blank" rel="noopener" class="bark-btn">View Bark Profile →</a>
    </div>
    <div class="rev-grid">
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Above and beyond"</div><p class="rev-body">Had issues with my desktop. Abdul got it running again, found me a new machine and set it all up. Will be using him again 100%.</p><div class="rev-author">— Andy Millar, April 2026</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Drove 40 min at midnight to deliver my laptop"</div><p class="rev-body">Screen smashed Tuesday evening — repaired and back to me by Thursday night, dropped off at midnight. Looks as good as new.</p><div class="rev-author">— Louis Marsland, October 2025</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Saved me a fair amount of money"</div><p class="rev-body">Repaired my son's Dell quickly, kept me updated, and offered advice that saved me money. Would recommend without hesitation.</p><div class="rev-author">— Mr Imtyaz Jumani, August 2025</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Sent photos once the job was done"</div><p class="rev-body">Told the price, given a parts estimate, kept informed every step, sent pictures when complete. Would recommend to anyone.</p><div class="rev-author">— Jude Rodney, August 2025</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Keeps you informed throughout"</div><p class="rev-body">Fixed my screen and everything else my laptop needed. Keeps you updated and gives top recommendations. Will recommend to family.</p><div class="rev-author">— Abdullahi, March 2026</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Exceptional work ethics"</div><p class="rev-body">Exceptional work ethics and very decent charges. Got my two laptops fixed — always responsive. Highly recommended.</p><div class="rev-author">— Joy, March 2026</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Set up and secured everything — 10/10"</div><p class="rev-body">Set up and secured my PC and laptop at a great price. I recommend him for any tech work. 10/10.</p><div class="rev-author">— Ken Vincent, March 2026</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Sorted my printer and router"</div><p class="rev-body">Solved a complicated problem with my printer and router. I can print important documents again. Thank you Abdul.</p><div class="rev-author">— Mel Taylor, May 2026</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Very knowledgeable and helpful"</div><p class="rev-body">Abdul is very knowledgeable and helpful. I recommend his services without hesitation.</p><div class="rev-author">— Roland Browne, May 2026</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Charging problem resolved quickly"</div><p class="rev-body">Had a laptop charging problem — all resolved now. Very friendly and efficient service.</p><div class="rev-author">— Stuart Spruce, November 2025</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Brilliant service"</div><p class="rev-body">Brilliant service and efficient delivery. Couldn't ask for more from a local tech specialist.</p><div class="rev-author">— Royston Wharton, August 2025</div></div>
      <div class="rev-card"><div class="rev-stars">★★★★★</div><div class="rev-title">"Exactly what I sought"</div><p class="rev-body">Needed qualified service and succeeded without reservation — exactly what I sought. Professional and reliable.</p><div class="rev-author">— R. F. Lewis, May 2026</div></div>
    </div>
    <div style="text-align:center;margin-top:1.75rem">
      <a href="tel:07356287590" class="cta-main" style="display:inline-flex">📞 Call to Book: 07356 287590</a>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="faq-inner">
    <div class="sec-label">Common questions</div>
    <h2 class="sec-title">Got a question?</h2>
    <p class="sec-sub" style="margin-bottom:0">Or just call me — 07356 287590.</p>
    <div class="faq-list">
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Why is my computer running so slowly?<span class="arr">▼</span></button><div class="faq-a">Usually caused by a nearly full hard drive, too many startup programmes, or an aging drive. A tune-up often sorts it — replacing the hard drive with an SSD can make it feel brand new for a very reasonable cost.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Is it worth repairing or should I buy a new one?<span class="arr">▼</span></button><div class="faq-a">If the repair costs less than 50% of a comparable new machine, repair is almost always better value. Slow or non-charging laptops often just need an SSD or battery. I'll always give you an honest answer before charging anything.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Do you offer a no fix, no fee guarantee?<span class="arr">▼</span></button><div class="faq-a">Yes — if I can't fix your problem, you don't pay. No diagnostic charge, no call-out fee for failed repairs.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Do you come to my home?<span class="arr">▼</span></button><div class="faq-a">Yes — I come to you. Home visits across Willenhall and the West Midlands, usually booked within 24–48 hours. Same-day available for urgent situations.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Can you recover deleted or lost files?<span class="arr">▼</span></button><div class="faq-a">In many cases, yes. Data recovery is possible for accidentally deleted files, failed drives and systems that won't boot. I always attempt recovery before any repair that could overwrite data.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="toggleFaq(this)">Do you need a contract for business support?<span class="arr">▼</span></button><div class="faq-a">No contracts. Repairs are priced per job. For ongoing business support I offer flexible month-to-month arrangements — no lock-in.</div></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact" id="contact-section">
  <div class="contact-inner">
    <div>
      <div class="sec-label">Get in touch</div>
      <h2 class="sec-title">Call, Text, WhatsApp<br>or Fill in the Form</h2>
      <p class="sec-sub">Quickest is to call or WhatsApp — I reply fast. Based in Willenhall, serving all of the West Midlands.</p>
      <div class="cways">
        <a href="tel:07356287590" class="cw"><div class="cw-ic" style="background:#eff6ff">📞</div><div><div class="cw-lb">Call me — quickest option</div><div class="cw-vl">07356 287590</div></div></a>
        <a href="sms:07356287590" class="cw"><div class="cw-ic" style="background:#f0fdf7">💬</div><div><div class="cw-lb">Text me</div><div class="cw-vl">07356 287590</div></div></a>
        <a href="https://wa.me/447356287590" target="_blank" rel="noopener" class="cw"><div class="cw-ic" style="background:#f0fdf7">💚</div><div><div class="cw-lb">WhatsApp me</div><div class="cw-vl" style="color:#059669">Message on WhatsApp</div></div></a>
        <a href="mailto:abdulshikdarit@gmail.com" class="cw"><div class="cw-ic" style="background:#fffbeb">📧</div><div><div class="cw-lb">Email</div><div class="cw-vl">abdulshikdarit@gmail.com</div></div></a>
        <div class="cw" style="cursor:default"><div class="cw-ic" style="background:#fef2f2">📍</div><div><div class="cw-lb">Based in</div><div class="cw-vl">Willenhall, West Midlands</div></div></div>
      </div>
    </div>
    <div class="form-card">
      <h3>Send a message</h3>
      <p>I'll reply by call or text — usually within a few hours.</p>
      <div id="contact-form">
        <form action="https://formspree.io/f/mwvjbzrg" method="POST" onsubmit="handleForm(event)">
          <div class="field"><label>Your Name *</label><input type="text" name="name" placeholder="e.g. John Smith" required></div>
          <div class="field"><label>Phone Number</label><input type="tel" name="phone" placeholder="e.g. 07700 900000"></div>
          <div class="field"><label>Email Address</label><input type="email" name="email" placeholder="you@example.com"></div>
          <div class="field"><label>What do you need help with?</label>
            <select name="service">
              <option value="">— Select a service —</option>
              <option>Slow computer / tune-up</option>
              <option>Virus or malware removal</option>
              <option>Screen replacement</option>
              <option>Hardware repair</option>
              <option>Wi-Fi / networking setup</option>
              <option>Data recovery</option>
              <option>Business IT support</option>
              <option>Teaching / digital skills</option>
              <option>IT Consulting</option>
              <option>Something else</option>
            </select>
          </div>
          <div class="field"><label>Brief description</label><textarea name="message" placeholder="Tell me a bit about the problem..."></textarea></div>
          <input type="hidden" name="_subject" value="New enquiry from Abdul's Tech Solutions website">
          <input type="hidden" name="_replyto" value="abdulshikdarit@gmail.com">
          <button type="submit" class="sub-btn">Send Message →</button>
          <p class="form-note">📧 Your message goes directly to Abdul's email inbox</p>
        </form>
      </div>
      <div class="form-success" id="form-success">
        <div class="tick">✅</div>
        <h4>Message sent!</h4>
        <p>Thanks — I'll get back to you shortly. For urgent help call <strong>07356 287590</strong>.</p>
      </div>
    </div>
  </div>
</section>

<!-- MAP -->
<div class="map-section">
  <iframe src="https://maps.google.com/maps?q=Willenhall,+West+Midlands,+UK&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Abdul's Tech Solutions — Willenhall"></iframe>
</div>

</div><!-- end page-main -->

<!-- ════════ HOME REPAIR PAGE ════════ -->
<div id="page-home-repair" class="page">
  <div class="sp-hero">
    <div class="sp-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="sp-badge" style="background:#eff6ff;color:var(--accent);border:1px solid #bfdbfe">🏠 Home Computer Repair</div>
      <h1 class="sp-title">Computer Repair<br>at Your Home</h1>
      <p class="sp-sub">I come to you anywhere in Willenhall and the West Midlands. Fast, friendly repairs in plain English — no jargon, no surprise charges.</p>
      <div class="sp-ctas">
        <a href="tel:07356287590" class="cta-main">📞 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20help%20with%20a%20home%20repair." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-sec" onclick="showPage('main')">Send a Message</a>
      </div>
    </div>
  </div>
  <section class="sd">
    <div class="sd-inner">
      <div class="sec-label">What I fix</div><h2 class="sec-title">Home IT Services</h2>
      <div class="sd-grid">
        <div class="sd-card"><span class="sd-card-icon">💻</span><div class="sd-card-title">Screen Replacement</div><p class="sd-card-desc">Cracked or black screen? I replace screens on most brands — usually same week.</p><ul class="sd-card-list"><li>Lenovo, HP, Dell, Acer, Asus</li><li>Fast turnaround</li><li>Quality parts</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🐛</span><div class="sd-card-title">Virus &amp; Malware Removal</div><p class="sd-card-desc">Pop-ups, slow machine, strange behaviour? I'll clean it out and protect it going forward.</p><ul class="sd-card-list"><li>Full scan and removal</li><li>Antivirus setup</li><li>Security hardening</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">⚡</span><div class="sd-card-title">Speed-Up &amp; Tune-Up</div><p class="sd-card-desc">A slow computer doesn't mean a new one. SSD upgrades can make it feel brand new.</p><ul class="sd-card-list"><li>SSD upgrades</li><li>Startup cleanup</li><li>RAM upgrades if needed</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">📶</span><div class="sd-card-title">Wi-Fi &amp; Internet Setup</div><p class="sd-card-desc">Can't connect? Dead zones? Printer won't find the network? I'll sort it all.</p><ul class="sd-card-list"><li>Router setup</li><li>Wi-Fi dead zone fix</li><li>Printer &amp; device setup</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">💾</span><div class="sd-card-title">Data Recovery &amp; Backup</div><p class="sd-card-desc">Lost files or failed hard drive? I'll attempt recovery and set up proper backups.</p><ul class="sd-card-list"><li>File and photo recovery</li><li>Failed drive recovery</li><li>Cloud backup setup</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🔋</span><div class="sd-card-title">Battery &amp; Charging Repairs</div><p class="sd-card-desc">Won't charge or dies fast? A battery replacement gives your laptop years more life.</p><ul class="sd-card-list"><li>Battery replacement</li><li>Charging port repair</li><li>Power adapter check</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🖨️</span><div class="sd-card-title">Printer &amp; Peripheral Setup</div><p class="sd-card-desc">Getting printers, scanners and webcams talking to your computer — all sorted.</p><ul class="sd-card-list"><li>Wireless and USB printers</li><li>Scanners and webcams</li><li>Driver installation</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🪟</span><div class="sd-card-title">Windows Install &amp; Upgrades</div><p class="sd-card-desc">Fresh install to clear years of clutter, or a clean upgrade to Windows 11.</p><ul class="sd-card-list"><li>Clean reinstall</li><li>Windows 10 / 11 upgrades</li><li>All drivers set up</li></ul></div>
      </div>
      <div class="pnote"><div class="pnote-icon">💡</div><div class="pnote-text"><h4>No fix, no fee — always</h4><p>Clear quote before I start. If I can't fix it, you don't pay. Most home repairs from £40. Call <strong><a href="tel:07356287590" style="color:var(--accent)">07356 287590</a></strong> for a quick chat.</p></div></div>
    </div>
  </section>
  <div class="sp-cta-bar" style="background:var(--accent)">
    <h2>Ready to get your computer fixed?</h2>
    <p>Most jobs booked within 24–48 hours across Willenhall and the West Midlands.</p>
    <div class="sp-cta-bar-btns">
      <a href="tel:07356287590" style="background:#fff;color:var(--accent)">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="background:var(--wa);color:#fff">💬 WhatsApp</a>
    </div>
  </div>
</div>

<!-- ════════ BUSINESS IT PAGE ════════ -->
<div id="page-business" class="page">
  <div class="sp-hero">
    <div class="sp-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="sp-badge" style="background:var(--yellow-bg);color:var(--yellow);border:1px solid #fde68a">🏢 Business IT Support</div>
      <h1 class="sp-title">IT Support for<br>Small Businesses</h1>
      <p class="sp-sub">Keep your business running without big agency costs. Networks, Microsoft 365, Intune, backups and more — flexible, no contracts.</p>
      <div class="sp-ctas">
        <a href="tel:07356287590" class="cta-main">📞 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20business%20IT%20support." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        <a href="#contact-section" class="cta-sec" onclick="showPage('main')">Send a Message</a>
      </div>
    </div>
  </div>
  <section class="sd">
    <div class="sd-inner">
      <div class="sec-label">What I offer</div><h2 class="sec-title">Business IT Services</h2>
      <div class="sd-grid">
        <div class="sd-card"><span class="sd-card-icon">🌐</span><div class="sd-card-title">Network Setup &amp; Security</div><p class="sd-card-desc">Secure, reliable Wi-Fi and cabling for your office. Networks that work and stay safe.</p><ul class="sd-card-list"><li>Business Wi-Fi setup</li><li>Firewall configuration</li><li>VLAN segmentation</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">☁️</span><div class="sd-card-title">Microsoft 365 &amp; Email</div><p class="sd-card-desc">Set up and manage 365 — email, Teams, SharePoint and OneDrive configured properly.</p><ul class="sd-card-list"><li>365 setup and migration</li><li>Teams and SharePoint</li><li>Email domain config</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">📱</span><div class="sd-card-title">Microsoft Intune &amp; MDM</div><p class="sd-card-desc">Manage all company devices from one place — policies, apps, compliance.</p><ul class="sd-card-list"><li>Device enrolment</li><li>App deployment</li><li>iOS and Windows</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🎧</span><div class="sd-card-title">Remote &amp; On-Site Support</div><p class="sd-card-desc">Remote fixes via AnyDesk or Teams, and on-site visits across the West Midlands.</p><ul class="sd-card-list"><li>Remote support</li><li>On-site visits</li><li>Fast response</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🔒</span><div class="sd-card-title">Backup &amp; Data Protection</div><p class="sd-card-desc">Automated offsite backups so your data is always safe and recoverable.</p><ul class="sd-card-list"><li>Cloud backups</li><li>Backup testing</li><li>Disaster recovery</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">⚙️</span><div class="sd-card-title">PowerShell &amp; Automation</div><p class="sd-card-desc">Save time on repetitive IT tasks with custom scripts for reporting and management.</p><ul class="sd-card-list"><li>Custom scripts</li><li>User management</li><li>Scheduled reporting</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🖥️</span><div class="sd-card-title">Server &amp; Workstation Support</div><p class="sd-card-desc">Windows Server setup, maintenance and workstation management.</p><ul class="sd-card-list"><li>Windows Server setup</li><li>Patch management</li><li>Hardware repair</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🛡️</span><div class="sd-card-title">Cybersecurity</div><p class="sd-card-desc">Protect your business from phishing, ransomware and data breaches.</p><ul class="sd-card-list"><li>Endpoint protection</li><li>DNS filtering</li><li>Staff awareness</li></ul></div>
      </div>
      <div class="pnote" style="background:var(--yellow-bg);border-color:#fde68a"><div class="pnote-icon">💼</div><div class="pnote-text"><h4 style="color:var(--yellow)">No long-term contracts</h4><p>Priced per job or flexible monthly — no lock-in. Call <strong><a href="tel:07356287590" style="color:var(--yellow)">07356 287590</a></strong> for a free chat.</p></div></div>
    </div>
  </section>
  <div class="sp-cta-bar" style="background:var(--text)">
    <h2>Let's talk about your business IT</h2>
    <p>Free, no-obligation chat to understand your needs.</p>
    <div class="sp-cta-bar-btns">
      <a href="tel:07356287590" style="background:#fff;color:var(--text)">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="background:var(--wa);color:#fff">💬 WhatsApp</a>
    </div>
  </div>
</div>

<!-- ════════ TEACHING PAGE ════════ -->
<div id="page-teaching" class="page">
  <div class="sp-hero" style="background:linear-gradient(135deg,#f0fdf7,#ecfdf5)">
    <div class="sp-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="sp-badge" style="background:#dcfce7;color:#166534;border:1px solid #a7f3d0">👨‍🏫 Teaching &amp; Digital Skills</div>
      <h1 class="sp-title">Learn Tech at<br>Your Own Pace</h1>
      <p class="sp-sub">Patient, friendly one-to-one lessons at your home. Whether you're 7 or 77 — I'll help you feel confident and safe with technology, with zero jargon.</p>
      <div class="sp-ctas">
        <a href="tel:07356287590" class="cta-main">📞 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I'm%20interested%20in%20IT%20lessons." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </div>
  </div>
  <section class="sd">
    <div class="sd-inner">
      <div class="sec-label">Who is this for?</div><h2 class="sec-title">Everyone deserves to feel confident with tech</h2>
      <div class="sd-grid" style="margin-top:2rem">
        <div class="sd-card" style="border-color:#bfdbfe;background:#eff6ff"><span class="sd-card-icon">👴👵</span><div class="sd-card-title">For Elderly People</div><p class="sd-card-desc">Video calls, online shopping, emails and phones — explained simply, at your pace, at your kitchen table.</p><ul class="sd-card-list"><li>Video calls (WhatsApp, Zoom, FaceTime)</li><li>Online shopping safely</li><li>Email and photos</li><li>Spotting scams online</li><li>Smartphones &amp; tablets</li><li>NHS &amp; government websites</li></ul></div>
        <div class="sd-card" style="border-color:#a7f3d0;background:#f0fdf7"><span class="sd-card-icon">👦👧</span><div class="sd-card-title">For Children &amp; Young People</div><p class="sd-card-desc">Learn to use computers confidently and safely — from homework help to internet safety.</p><ul class="sd-card-list"><li>Computer basics &amp; typing</li><li>Internet safety &amp; privacy</li><li>Word, PowerPoint &amp; school tools</li><li>Avoiding online dangers</li><li>Coding intro sessions</li><li>Parental controls setup</li></ul></div>
        <div class="sd-card" style="border-color:#e9d5ff;background:#fdf4ff"><span class="sd-card-icon">🙋</span><div class="sd-card-title">For Anyone Who Wants to Learn</div><p class="sd-card-desc">New laptop? Changed jobs? Need to learn new software? Never too late — I'll get you there.</p><ul class="sd-card-list"><li>Microsoft Office basics</li><li>Google Workspace / Drive</li><li>Setting up a new device</li><li>Password safety</li><li>One-off or regular sessions</li><li>At your home, your pace</li></ul></div>
      </div>
    </div>
  </section>
  <div class="sp-cta-bar" style="background:#059669">
    <h2>Ready to get started?</h2>
    <p>Perfect for elderly relatives, children or anyone wanting more confidence with tech.</p>
    <div class="sp-cta-bar-btns">
      <a href="tel:07356287590" style="background:#fff;color:#059669">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.4);color:#fff">💬 WhatsApp Me</a>
    </div>
  </div>
</div>

<!-- ════════ CONSULTING PAGE ════════ -->
<div id="page-consulting" class="page">
  <div class="sp-hero" style="background:linear-gradient(135deg,#fdf4ff,#f5f3ff)">
    <div class="sp-inner">
      <a href="#" class="back-btn" onclick="showPage('main')">← Back to Home</a>
      <div class="sp-badge" style="background:#f3e8ff;color:#6b21a8;border:1px solid #e9d5ff">💡 IT Consulting</div>
      <h1 class="sp-title">Honest IT Advice<br>You Can Trust</h1>
      <p class="sp-sub">Not sure what tech you need? Want a second opinion? Clear, unbiased advice with no sales agenda — first chat always free.</p>
      <div class="sp-ctas">
        <a href="tel:07356287590" class="cta-main">📞 07356 287590</a>
        <a href="https://wa.me/447356287590?text=Hi%20Abdul%2C%20I%20need%20some%20IT%20consulting%20advice." class="cta-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </div>
  </div>
  <section class="sd">
    <div class="sd-inner">
      <div class="sec-label">What I offer</div><h2 class="sec-title">Consulting Services</h2>
      <div class="sd-grid">
        <div class="sd-card"><span class="sd-card-icon">🛒</span><div class="sd-card-title">Tech Buying Advice</div><p class="sd-card-desc">Thinking of buying a laptop, phone or software? I'll tell you exactly what to get — and what to avoid.</p><ul class="sd-card-list"><li>Laptops, PCs &amp; tablets</li><li>Phones &amp; accessories</li><li>Software recommendations</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🗺️</span><div class="sd-card-title">IT Strategy for Small Business</div><p class="sd-card-desc">Build a simple, affordable IT setup that scales with your business — without overcomplicating things.</p><ul class="sd-card-list"><li>Cloud vs on-site advice</li><li>Software stack guidance</li><li>Cost-saving opportunities</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🔍</span><div class="sd-card-title">Security Audits</div><p class="sd-card-desc">Is your home or business actually secure? Honest report on gaps — with practical steps to fix them.</p><ul class="sd-card-list"><li>Password &amp; account review</li><li>Network security check</li><li>Backup verification</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🚀</span><div class="sd-card-title">New Tech Project Planning</div><p class="sd-card-desc">Setting up an office or moving to cloud? Plan it properly from the start to avoid costly mistakes.</p><ul class="sd-card-list"><li>Office setup planning</li><li>Cloud migration advice</li><li>Tech onboarding</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">🧾</span><div class="sd-card-title">Second Opinion on IT Quotes</div><p class="sd-card-desc">Been quoted by another IT company? I'll review it honestly — no charge for a quick chat.</p><ul class="sd-card-list"><li>Quote reviews</li><li>Scope of work checks</li><li>Value for money check</li></ul></div>
        <div class="sd-card"><span class="sd-card-icon">📋</span><div class="sd-card-title">IT Health Check</div><p class="sd-card-desc">Full review of your IT — hardware, software, security, backups. Written report with recommendations.</p><ul class="sd-card-list"><li>Full system review</li><li>Written findings</li><li>Prioritised action plan</li></ul></div>
      </div>
      <div class="pnote" style="background:#fdf4ff;border-color:#e9d5ff"><div class="pnote-icon">💡</div><div class="pnote-text"><h4 style="color:#7c3aed">Free initial chat — always</h4><p>Quick call or WhatsApp at no charge to understand your needs. Consulting sessions charged fairly by the hour. Call <strong><a href="tel:07356287590" style="color:#7c3aed">07356 287590</a></strong>.</p></div></div>
    </div>
  </section>
  <div class="sp-cta-bar" style="background:#7c3aed">
    <h2>Not sure where to start?</h2>
    <p>The first chat is always free. Call or WhatsApp me now.</p>
    <div class="sp-cta-bar-btns">
      <a href="tel:07356287590" style="background:#fff;color:#7c3aed">📞 07356 287590</a>
      <a href="https://wa.me/447356287590" target="_blank" rel="noopener" style="background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.4);color:#fff">💬 WhatsApp Me</a>
    </div>
  </div>
</div>

<!-- FOOTER -->
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
// HERO SLIDESHOW
let hIdx=0;
const hTotal=4;
function heroSlide(dir){
  hIdx=(hIdx+dir+hTotal)%hTotal;
  const track=document.getElementById('hero-slides');
  track.style.transform=\`translateX(-\${hIdx*100}%)\`;
  document.querySelectorAll('#hero-dots div').forEach((d,i)=>{
    d.style.background=i===hIdx?'var(--accent)':'var(--border2)';
  });
}
setInterval(()=>heroSlide(1),4500);

// PAGE SWITCHING
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

// MOBILE MENU
function toggleMenu(){document.getElementById('mob-menu').classList.toggle('open')}
function closeMenu(){document.getElementById('mob-menu').classList.remove('open')}

// FAQ
function toggleFaq(btn){
  const ans=btn.nextElementSibling;
  const open=ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a=>a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q=>q.classList.remove('open'));
  if(!open){ans.classList.add('open');btn.classList.add('open')}
}

// SERVICE SLIDER
let slideIndex=0;
const VISIBLE=3;
function slideNav(dir){
  const track=document.getElementById('slider-track');
  const slides=track.querySelectorAll('.slide');
  const max=slides.length-VISIBLE;
  slideIndex=Math.max(0,Math.min(slideIndex+dir,max));
  const w=slides[0].offsetWidth+16;
  track.scrollLeft=slideIndex*w;
  document.querySelectorAll('.sdot').forEach((d,i)=>d.classList.toggle('active',i===slideIndex));
}
// Auto-slide every 4s
setInterval(()=>{
  const track=document.getElementById('slider-track');
  if(!track)return;
  const slides=track.querySelectorAll('.slide');
  const max=slides.length-VISIBLE;
  slideIndex=(slideIndex>=max)?0:slideIndex+1;
  const w=slides[0].offsetWidth+16;
  track.scrollLeft=slideIndex*w;
  document.querySelectorAll('.sdot').forEach((d,i)=>d.classList.toggle('active',i===slideIndex));
},4000);

// CONTACT FORM — uses Formspree
function handleForm(e){
  e.preventDefault();
  const form=e.target;
  const data=new FormData(form);
  fetch('https://formspree.io/f/mwvjbzrg',{
    method:'POST',
    body:data,
    headers:{'Accept':'application/json'}
  }).then(r=>{
    if(r.ok){
      document.getElementById('contact-form').style.display='none';
      document.getElementById('form-success').style.display='block';
    } else {
      alert('Something went wrong — please call or WhatsApp me on 07356 287590');
    }
  }).catch(()=>{
    alert('Something went wrong — please call or WhatsApp me on 07356 287590');
  });
}
</script>
</body>
</html>
`;
  return <div dangerouslySetInnerHTML={{ __html: html }} style={{ margin: 0, padding: 0 }} />;
}
