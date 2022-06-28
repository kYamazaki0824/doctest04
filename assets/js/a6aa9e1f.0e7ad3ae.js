"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{9058:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7294),r=a(6010),n=a(5257),i=a(7524),s=a(9960),o=a(5999);const m="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var E=a(3102);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return l.createElement(E.Zo,{component:b,props:e})}function f(e){let{sidebar:t}=e;const a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(n.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(f,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(6010),n=a(2263),i=a(1944),s=a(5281),o=a(9058),m=a(1860),c=a(9703),u=a(197);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:r,blogTitle:s,permalink:o}=t,m="/"===o?a:s;return l.createElement(l.Fragment,null,l.createElement(i.d,{title:m,description:r}),l.createElement(u.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(o.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(c.Z,{metadata:t}))}function p(e){return l.createElement(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(5999),n=a(2244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&l.createElement(n.Z,{permalink:i,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1860:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),r=a(6010),n=a(5999),i=a(9960),s=a(4996),o=a(8824),m=a(8780),c=a(1315),u=a(6114),d=a(1526);function g(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:i,email:s}=t,o=n||s&&"mailto:"+s||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(g,{href:o,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(g,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const h="authorCol_sTYa",E="imageOnlyAuthorRow_vA2J",b="imageOnlyAuthorCol_kG3X";function v(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?E:"row")},t.map(((e,t)=>{var i;return l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?b:h),key:t},l.createElement(p,{author:{...e,imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL}}))})))}const f="blogPostTitle_Ikge",_="blogPostData_SAv4",Z="blogPostDetailsFull_u0Nl";function N(e){var t;const a=function(){const{selectMessage:e}=(0,o.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:g}=(0,s.C)(),{children:p,frontMatter:h,assets:E,metadata:b,truncated:N,isBlogPostPage:k=!1}=e,{date:P,formattedDate:T,permalink:w,tags:I,readingTime:y,title:L,editUrl:x,authors:F}=b,A=null!=(t=E.image)?t:h.image,C=!k&&N,M=I.length>0,R=k?"h1":"h2";return l.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:f,itemProp:"headline"},k?L:l.createElement(i.Z,{itemProp:"url",to:w},L)),l.createElement("div",{className:(0,r.Z)(_,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},T),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",a(y))),l.createElement(v,{authors:F,assets:E})),A&&l.createElement("meta",{itemProp:"image",content:g(A,{absolute:!0})}),l.createElement("div",{id:k?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,p)),(M||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",k&&Z)},M&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":C})},l.createElement(d.Z,{tags:I})),k&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:x})),C&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":M})},l.createElement(i.Z,{to:b.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6114:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(5999),n=a(5281),i=a(7462),s=a(6010);const o="iconEdit_eYIM";function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:n.k.common.editThisPage},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(6010),n=a(9960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return l.createElement(n.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&l.createElement("div",{className:"pagination-nav__sublabel"},i),l.createElement("div",{className:"pagination-nav__label"},a))}},3008:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),r=a(6010),n=a(9960);const i="tag_zVej",s="tagRegular_sFm0",o="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(i,m?o:s)},a,m&&l.createElement("span",null,m))}},1526:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),r=a(6010),n=a(5999),i=a(3008);const s="tags_jXut",o="tag_QGVx";function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o},l.createElement(i.Z,{label:t,permalink:a}))}))))}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function i(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),s}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);