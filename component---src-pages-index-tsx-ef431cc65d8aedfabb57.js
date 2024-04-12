"use strict";(self.webpackChunkdope_inc=self.webpackChunkdope_inc||[]).push([[245],{4399:function(e,t,n){var a=n(6540),r=n(4794);t.A=e=>{let{children:t}=e;return a.createElement("body",{className:"flex flex-col min-h-screen"},a.createElement(r.Ji,{alias:"Header"}),a.createElement("main",{className:"flex-grow"},t),a.createElement(r.Ji,{alias:"Footer"}))}},271:function(e,t,n){var a=n(6540);t.A=e=>{let{title:t,description:n,image:r,url:l,companyName:c="株式会社 Dope"}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{property:"og:locale",content:"ja_JP"}),a.createElement("meta",{property:"og:site_name",content:c}),a.createElement("meta",{property:"og:url",content:l}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:title",content:t}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n&&a.createElement("meta",{name:"description",property:"og:description",content:n}),r&&a.createElement("meta",{property:"og:image",content:r}),a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:wght@400;700&display=swap"}))}},2783:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o},default:function(){return E}});var a=n(6540),r=n(4399),l=n(271),c=n(443),i=n(4171);const o=e=>{const{siteMetadata:t}=e.data.site;return a.createElement(l.A,{title:t.title,description:"株式会社Dopeは、先進のデータ駆動技術を活用し、お客様のビジネスを効果的に支援します。革新的なアプローチにより、パフォーマンス最適化や事業成長を促進し、ニーズに合わせたカスタムソリューションを提供します。データサイエンスとテクノロジーを融合し、お客様の可能性を最大限に引き出します。",image:t.image,url:t.siteUrl})},m="mb-4 "+(0,c.Y)("large")+" "+(0,i.o)("primary"),s="mb-4 "+(0,c.Y)("medium")+" "+(0,i.o)("primary"),p="mb-8 "+(0,c.Y)("small")+" "+(0,i.o)("primary"),u=()=>a.createElement("div",{className:"container mx-auto my-8 px-10"},a.createElement("h1",{className:m},"Mission"),a.createElement("p",{className:p,style:{whiteSpace:"pre-line"}},"　私たちの会社は、最新のデータ駆動型技術を活用し、お客様のビジネスを効果的にサポートします。データから導き出される革新的なアプローチにより、パフォーマンスの最適化や事業の成長を促進し、エクセレンスを切り拓きます。人工知能を中心に据え、お客様のニーズに合わせたカスタムソリューションの提供やビジネスのデータ駆動型意思決定の支援を行います。\n　私たちは、データサイエンスとテクノロジーの力で、お客様が持つ可能性を最大限に引き出すお手伝いをいたします。")),d=()=>a.createElement("div",{className:"container mx-auto my-8 px-10"},a.createElement("h1",{className:m},"Values"),a.createElement("p",{className:p},"　我々はDopeという社名の４つの頭文字を使った企業バリューを掲げています。",a.createElement("br",null),"　",a.createElement("span",{className:"font-semibold"},"Discover（発見する）"),"、",a.createElement("span",{className:"font-semibold"},"Optimize（最適化する）"),"、",a.createElement("span",{className:"font-semibold"},"Pioneer（先駆ける）"),"、",a.createElement("span",{className:"font-semibold"},"Empower（力を与える）"),"の4つの価値を象徴しています。これらの価値を大切にし、世の中に最高のサービスを提供することをお約束します。"),a.createElement("ul",{className:"mb-8"},[{title:"Discover Innovation",description:"データを使ったイノベーションの発見、新しい可能性を提供"},{title:"Optimize Performance",description:"最適化されたパフォーマンスにより、効率的で高い業績を達成"},{title:"Pioneer Excellence",description:"卓越性を追求し、ビジネスにおいて先駆的な存在となる"},{title:"Empower Growth",description:"成長を促進し、お客様の事業を力強くサポート"}].map(((e,t)=>a.createElement("li",{key:t},a.createElement("p",{className:"mb-2 italic "+s},"・",a.createElement("span",{className:"font-bold"},e.title[0]),e.title.substring(1)),a.createElement("p",{className:"mb-6 "+p},e.description))))));function E(e){const{siteMetadata:t}=e.data.site;return a.createElement(r.A,null,a.createElement("div",{className:" mx-auto max-w-screen-md"},a.createElement(u,null),a.createElement(d,null)))}},4171:function(e,t,n){n.d(t,{o:function(){return l}});var a=n(4506);const r=[{key:"default",value:["text-gray-700"],hover:["hover:text-gray-700"],active:["active:text-gray-900"]},{key:"primary",value:["text-gray-700"],hover:["hover:text-indigo-500"],active:["active:text-indigo-700"]},{key:"secondary",value:["text-white"],hover:["hover:text-green-600"],active:["active:text-green-700"]}];function l(e,t,n){const l=r.find((t=>t.key===e));if(!l)return console.error('Size "'+e+'" not found in ColorSetting'),"";const c=(0,a.A)(l.value);return t&&c.push.apply(c,(0,a.A)(l.hover)),n&&c.push.apply(c,(0,a.A)(l.active)),c.join(" ")}},443:function(e,t,n){n.d(t,{Y:function(){return r}});const a=[{key:"small",value:["text-base","md:text-lg","lg:text-xl"]},{key:"medium",value:["text-lg","md:text-xl","lg:text-2xl"]},{key:"large",value:["text-2xl","md:text-3xl","lg:text-4xl"]},{key:"extra-large",value:["text-3xl","md:text-4xl","lg:text-5xl"]}];function r(e){const t=a.find((t=>t.key===e));if(!t)return console.error('Size "'+e+'" not found in SizeSetting'),"";return t.value.join(" ")}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ef431cc65d8aedfabb57.js.map