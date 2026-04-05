import{m as b,j as g}from"./index-BLroNdtL.js";function c({children:o,variant:r="primary",onClick:a,href:t,className:s="",type:n="button"}){const e=`
    inline-flex items-center gap-2
    px-7 py-3 text-xs font-semibold
    tracking-[0.18em] uppercase
    transition-all duration-300
    font-raleway
  `,l={primary:`
      ${e}
      bg-violet text-white
      shadow-glow
      hover:bg-violet-bright hover:shadow-glow-lg hover:-translate-y-0.5
    `,ghost:`
      ${e}
      border border-violet/50 text-lilac
      hover:border-violet-bright hover:text-ghost hover:-translate-y-0.5
    `},i=b[t?"a":"button"],p=t?{href:t,target:"_blank",rel:"noopener noreferrer"}:{type:n,onClick:a};return g.jsx(i,{...p,whileTap:{scale:.97},className:`${l[r]} ${s}`,children:o})}export{c as B};
