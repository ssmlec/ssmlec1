import { useEffect } from "react";

type MetaEntry = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
  charSet?: string;
};

type LinkEntry = {
  rel: string;
  href: string;
  crossOrigin?: string;
};

type ScriptEntry = {
  type: string;
  children: string;
};

interface SeoProps {
  meta?: MetaEntry[];
  links?: LinkEntry[];
  scripts?: ScriptEntry[];
}

/**
 * Lightweight client-side replacement for TanStack Start's `head()` route option.
 * Applies <title>, <meta>, <link> and <script type="application/ld+json"> tags
 * to the document head on mount, and cleans up on unmount.
 */
export function Seo({ meta = [], links = [], scripts = [] }: SeoProps) {
  useEffect(() => {
    const created: Element[] = [];

    for (const m of meta) {
      if (m.title) {
        document.title = m.title;
        continue;
      }
      if (m.charSet) continue; // handled by index.html
      if (!m.content) continue;

      const selector = m.name ? `meta[name="${m.name}"]` : `meta[property="${m.property}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      const isNew = !el;
      if (!el) {
        el = document.createElement("meta");
        if (m.name) el.setAttribute("name", m.name);
        if (m.property) el.setAttribute("property", m.property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", m.content);
      if (isNew) created.push(el);
    }

    for (const l of links) {
      let el = document.head.querySelector(`link[rel="${l.rel}"]`) as HTMLLinkElement | null;
      const isNew = !el;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", l.rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", l.href);
      if (l.crossOrigin) el.setAttribute("crossorigin", l.crossOrigin);
      if (isNew) created.push(el);
    }

    for (const s of scripts) {
      const el = document.createElement("script");
      el.type = s.type;
      el.text = s.children;
      document.head.appendChild(el);
      created.push(el);
    }

    return () => {
      created.forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(meta), JSON.stringify(links), JSON.stringify(scripts)]);

  return null;
}
