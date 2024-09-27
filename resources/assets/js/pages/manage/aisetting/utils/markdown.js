import { encode as HTMLEncode } from "he";
import markdownIt from "markdown-it";
import markdownItKatex from "markdown-it-katex";
import hljs from "highlight.js";
import "../assets/github-dark-dimmed.min.css";
import { v4 } from "uuid";

const markdown = markdownIt({
  html: false,
  typographer: true,
  highlight: function (code, lang) {
    const uuid = v4();
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<div class="whitespace-pre-line w-full rounded-lg bg-black-900 px-4 pb-4 relative font-mono font-normal text-sm text-slate-200">
            <div class="whitespace-pre-text flex items-end absolute top-0 left-0 text-slate-200 bg-stone-100 p-10 text-xs font-sans justify-end rounded-t-md">
              <div class="text-dxs flex gap-2">
                <code class="text-xs">${lang || ""}</code>
              </div>
            </div>
          <pre class="whitespace-pre-wrap bg-slate-200  mb-6 p-4">` +
          hljs.highlight(code, { language: lang, ignoreIllegals: true }).value +
          "</pre></div>"
        );
      }catch (__) {
        // continue regardless of error
      }
    }
    
    return (
      `<div class="whitespace-pre-line w-full rounded-lg bg-black-900 px-4 pb-4 relative font-mono font-normal text-sm text-slate-200">
        <div class="w-full flex items-center absolute top-0 left-0 text-slate-200 bg-stone-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
          <div class="flex gap-2"><code class="text-xs"></code></div>
        </div>
      <pre class="whitespace-pre-wrap bg-slate-200  m-6 p-4">` +
      HTMLEncode(code) +
      "</pre></div>"
    );
  },
});

// Custom renderer for responsive images rendered in markdown
markdown.renderer.rules.image = function (tokens, idx) {
  const token = tokens[idx];
  const srcIndex = token.attrIndex("src");
  const src = token.attrs[srcIndex][1];
  const alt = token.content || "";

  return `<div class="w-full max-w-[800px]"><img src="${src}" alt="${alt}" class="w-full h-auto" /></div>`;
};

markdown.use(markdownItKatex);
function copyToClipboard(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert("代码已复制到剪贴板！");
  }).catch(err => {
    console.error("复制失败: ", err);
  });
}

export default function renderMarkdown(text = "") {
  return markdown.render(text);
}
