import{g as l}from"./index-u0exIiAn.js";function c(r,a){for(var e=0;e<a.length;e++){const t=a[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var o,u;function f(){if(u)return o;u=1,o=r,r.displayName="sml",r.aliases=["smlnj"];function r(a){(function(e){var t=/\b(?:abstype|and|andalso|as|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|of|op|open|orelse|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/i;e.languages.sml={comment:/\(\*(?:[^*(]|\*(?!\))|\((?!\*)|\(\*(?:[^*(]|\*(?!\))|\((?!\*))*\*\))*\*\)/,string:{pattern:/#?"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":[{pattern:RegExp(/((?:^|[^:]):\s*)<TERMINAL>(?:\s*(?:(?:\*|->)\s*<TERMINAL>|,\s*<TERMINAL>(?:(?=<NOT-LAST>)|(?!<NOT-LAST>)\s+<LONG-ID>)))*/.source.replace(/<NOT-LAST>/g,function(){return/\s*(?:[*,]|->)/.source}).replace(/<TERMINAL>/g,function(){return/(?:'[\w']*|<LONG-ID>|\((?:[^()]|\([^()]*\))*\)|\{(?:[^{}]|\{[^{}]*\})*\})(?:\s+<LONG-ID>)*/.source}).replace(/<LONG-ID>/g,function(){return/(?!<KEYWORD>)[a-z\d_][\w'.]*/.source}).replace(/<KEYWORD>/g,function(){return t.source}),"i"),lookbehind:!0,greedy:!0,inside:null},{pattern:/((?:^|[^\w'])(?:datatype|exception|functor|signature|structure|type)\s+)[a-z_][\w'.]*/i,lookbehind:!0}],function:{pattern:/((?:^|[^\w'])fun\s+)[a-z_][\w'.]*/i,lookbehind:!0},keyword:t,variable:{pattern:/(^|[^\w'])'[\w']*/,lookbehind:!0},number:/~?\b(?:\d+(?:\.\d+)?(?:e~?\d+)?|0x[\da-f]+)\b/i,word:{pattern:/\b0w(?:\d+|x[\da-f]+)\b/i,alias:"constant"},boolean:/\b(?:false|true)\b/i,operator:/\.\.\.|:[>=:]|=>?|->|[<>]=?|[!+\-*/^#|@~]/,punctuation:/[(){}\[\].:,;]/},e.languages.sml["class-name"][0].inside=e.languages.sml,e.languages.smlnj=e.languages.sml})(a)}return o}var i=f();const p=l(i),g=c({__proto__:null,default:p},[i]);export{g as s};
