import { useLang } from "../context/LanguageContext";

export default function Seo() {
  const { t } = useLang();

  document.title = t.seo.title;

  const description =
    document.querySelector("meta[name='description']") || document.createElement("meta");

  description.setAttribute("name", "description");
  description.setAttribute("content", t.seo.description);
  document.head.appendChild(description);

  return null;
}
