"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { COMPANY } from "@/lib/dictionary";
import { Icon } from "@/components/Icon";
import Coverage from "@/components/Coverage";

export default function ContactContent() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    const lines = [
      t.contactPage.quoteIntro,
      `${t.contactPage.fields.name}: ${form.name || "-"}`,
      `${t.contactPage.fields.phone}: ${form.phone || "-"}`,
      `${t.contactPage.fields.service}: ${form.service || "-"}`,
      `${t.contactPage.fields.message}: ${form.message || "-"}`,
    ];
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <>
      <section className="page-head page-head--contact">
        <span className="ph-icon" aria-hidden="true"><Icon name="mail" size={64} /></span>
        <div className="container">
          <h1>{t.contactPage.title}</h1>
          <p>{t.contactPage.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* FORM */}
          <div className="form-card">
            <h2>{t.contactPage.formTitle}</h2>
            <div className="field">
              <label htmlFor="name">{t.contactPage.fields.name}</label>
              <input id="name" type="text" value={form.name} onChange={update("name")} autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="phone">{t.contactPage.fields.phone}</label>
              <input id="phone" type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="service">{t.contactPage.fields.service}</label>
              <select id="service" value={form.service} onChange={update("service")}>
                <option value="">{t.contactPage.fields.selectService}</option>
                {t.services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">{t.contactPage.fields.message}</label>
              <textarea id="message" value={form.message} onChange={update("message")} />
            </div>
            <button className="btn btn-whats" onClick={submit}>
              <Icon name="whatsapp" size={18} /> {t.contactPage.fields.send}
            </button>
          </div>

          {/* SIDE */}
          <div className="contact-side">
            <div className="contact-block">
              <h3><span className="cb-ic"><Icon name="phone" size={18} /></span>{t.contactPage.callTitle}</h3>
              <div className="phone-list">
                {COMPANY.phones.map((p) => (
                  <a key={p} className="phone-link" href={`tel:+212${p.slice(1)}`}>
                    <span className="pl-ic"><Icon name="phone" size={16} /></span>
                    {p.replace(/(\d{2})(?=\d)/g, "$1 ").trim()}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-block">
              <h3><span className="cb-ic"><Icon name="mail" size={18} /></span>{t.contactPage.writeTitle}</h3>
              <div className="contact-meta">
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <span className="cm-ic"><Icon name="whatsapp" size={18} /></span> WhatsApp
                </a>
                <a href={`mailto:${COMPANY.email}`}>
                  <span className="cm-ic"><Icon name="mail" size={18} /></span> {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="contact-block">
              <h3><span className="cb-ic"><Icon name="pin" size={18} /></span>{t.contactPage.addressTitle}</h3>
              <p className="contact-address">{t.contactPage.addressText}</p>
            </div>

            <p className="contact-note">{t.contactPage.note}</p>
          </div>
        </div>
      </section>

      <Coverage tone="sand" />
    </>
  );
}
