(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/QsU":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return p})),a.d(e,"default",(function(){return d}));var n=a("Fcif"),l=a("+I+c"),r=(a("mXGw"),a("/FXl")),b=a("TjRS"),i=a("v2ue"),o=(a("aD51"),["components"]),p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/hooks/useLottie/README.mdx"}});var m={_frontmatter:p},c=b.a;function d(t){var e=t.components,a=Object(l.a)(t,o);return Object(r.b)(c,Object(n.a)({},m,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"uselottie"},"useLottie"),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)(i.a,{mdxType:"UseLottieExamples"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import { useLottie } from "lottie-react";\nimport groovyWalkAnimation from "./groovyWalk.json";\n\nconst style = {\n  height: 300,\n};\n\nconst Example = () => {\n  const options = {\n    animationData: groovyWalkAnimation,\n    loop: true,\n    autoplay: true,\n  };\n\n  const { View } = useLottie(options, style);\n\n  return View;\n};\n\nexport default Example;\n')),Object(r.b)("h2",{id:"params"},"Params"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Param"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Default"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"options"),Object(r.b)("td",{parentName:"tr",align:null},"Object"),Object(r.b)("td",{parentName:"tr",align:null},"required"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Subset of the lottie-web options")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"options.animationData"),Object(r.b)("td",{parentName:"tr",align:null},"Object"),Object(r.b)("td",{parentName:"tr",align:null},"required"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"A JSON Object with the exported animation data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"options.loop"),Object(r.b)("td",{parentName:"tr",align:null},"boolean","|","number"),Object(r.b)("td",{parentName:"tr",align:null},"optional"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Set it to true for infinite amount of loops, or pass a number for a specific amount of loops")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"options.autoplay"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"optional"),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"If set to true, animation will play as soon as it's loaded")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"options.initialSegment"),Object(r.b)("td",{parentName:"tr",align:null},"array"),Object(r.b)("td",{parentName:"tr",align:null},"optional"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Expects an array of length 2. First value is the initial frame, second value is the final frame. If this is set, the animation will start at this position in time instead of the exported value from AE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"style"),Object(r.b)("td",{parentName:"tr",align:null},"Object"),Object(r.b)("td",{parentName:"tr",align:null},"optional"),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"Style object that applies to the animation wrapper (which is a ",Object(r.b)("inlineCode",{parentName:"td"},"div"),")")))),Object(r.b)("h2",{id:"returns"},"Returns"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Property"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie"),Object(r.b)("td",{parentName:"tr",align:null},"Object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.View"),Object(r.b)("td",{parentName:"tr",align:null},"React.Element")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.play"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.stop"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.pause"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.setSpeed"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.goToAndStop"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.goToAndPlay"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.setDirection"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.playSegments"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.setSubframe"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.getDuration"),Object(r.b)("td",{parentName:"tr",align:null},"method")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lottie.destroy"),Object(r.b)("td",{parentName:"tr",align:null},"method")))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/hooks/useLottie/README.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-hooks-use-lottie-readme-mdx-e3e6adb9afed89a1c97d.js.map