(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UHMn:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return u})),n.d(e,"default",(function(){return h}));var o=n("Fcif"),i=n("+I+c"),a=(n("mXGw"),n("/FXl")),r=n("TjRS"),s=(n("ZFoC"),n("Oixk")),c=n("7kLV"),l=n("f3zu"),b=n("dDQ+"),m=n("jCiu"),p=n("/DZq"),u=(n("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/hooks/useLottieInteractivity/README.mdx"}});var d=r.a;function h(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(a.b)(d,Object(o.a)({},n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"uselottieinteractivity"},"useLottieInteractivity"),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"Use this hook along with the ",Object(a.b)("strong",{parentName:"p"},"useLottie")," hook to add animations synced with\nscroll and cursor"),Object(a.b)("p",null,"Also read ",Object(a.b)("a",{href:"https://lottiefiles.com/interactivity",parentName:"p"},"official lottie\nreference")," for general, non-react\nsolution."),Object(a.b)(s.a,{mdxType:"UseInteractivityBasic"}),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-jsx",parentName:"pre"},'import { useLottie, useLottieInteractivity } from "lottie-react";\nimport likeButton from "./likeButton.json";\n\nconst style = {\n  height: 300,\n  border: 3,\n  borderStyle: "solid",\n  borderRadius: 7,\n};\n\nconst options = {\n  animationData: likeButton,\n};\n\nconst Example = () => {\n  const lottieObj = useLottie(options, style);\n  const Animation = useLottieInteractivity({\n    lottieObj,\n    mode: "scroll",\n    actions: [\n      {\n        visibility: [0.4, 0.9],\n        type: "seek",\n        frames: [0, 38],\n      },\n    ],\n  });\n\n  return Animation;\n};\n\nexport default Example;\n')),Object(a.b)("h2",{id:"params"},"Params"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr"},"Param"),Object(a.b)("th",{parentName:"tr"},"Type"),Object(a.b)("th",{parentName:"tr"},"Required"),Object(a.b)("th",{parentName:"tr"},"Default"),Object(a.b)("th",{parentName:"tr"},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr"},"lottieObj"),Object(a.b)("td",{parentName:"tr"},"object"),Object(a.b)("td",{parentName:"tr"},"required"),Object(a.b)("td",{parentName:"tr"}),Object(a.b)("td",{parentName:"tr"},"Result returned from the useLottie() hook")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr"},"mode"),Object(a.b)("td",{parentName:"tr"},"string"),Object(a.b)("td",{parentName:"tr"},"required"),Object(a.b)("td",{parentName:"tr"}),Object(a.b)("td",{parentName:"tr"},'Either "scroll" or "cursor". Event that will be synced with animation')),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr"},"actions"),Object(a.b)("td",{parentName:"tr"},"array"),Object(a.b)("td",{parentName:"tr"},"required"),Object(a.b)("td",{parentName:"tr"}),Object(a.b)("td",{parentName:"tr"},"Array of actions that will run in sequence (SEE BELOW)")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"actions")," is an array of objects that define how animation will\nbe run based on the chosen mode. One action chains the next one."),Object(a.b)("p",null,"An action object is defined as:"),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-js",parentName:"pre"},'{\n  frames: [number] | [number, number];\n  type: "seek" | "play" | "stop" | "loop";\n  visibility?: [number, number];\n  position?: { [axis in "x" | "y"]: number | [number, number] };\n} \n')),Object(a.b)("h3",{id:"frames"},"frames"),Object(a.b)("p",null,"Animation frame range to play for the action."),Object(a.b)("p",null,"Let's say full animation has 150 frames.\nTo sync all 150 frames with one action, you would pass ","[0, 150]",".\nTo start animation from 50 frame and end at 120, you would pass ","[50, 120]",".\nTo freeze animation at 80 frame, you would pass ","[80]","."),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"Action type."),Object(a.b)("p",null,"'play', 'stop', 'loop' are pretty self-explanatory. With 'seek' passed, lottie\nwill play animation frame by frame as you scroll down the page (mode: \"scroll\")\nor move cursor around (mode: \"cursor\")."),Object(a.b)("h3",{id:"visibility"},"visibility"),Object(a.b)("p",null,'Viewport of the action (mode "scroll" only)'),Object(a.b)("p",null,"Each action has a start and end which is essentially a percentage for the height\nof the lottie container and is a value between 0 and 1.\nTo start the action when animation is visible on the page, you would pass ","[0, 1]",".\nTo start lottie after 40% scrolled and end at 85% scrolled, you would pass ","[0.4, 0.85]","."),Object(a.b)("h3",{id:"position"},"position"),Object(a.b)("p",null,'Cursor viewport (mode "cursor" only)'),Object(a.b)("p",null,"You can define how much of the viewport cursor movement will cover inside the\nanimation element. To set cursor cover the entire animation element, you would\npass ",Object(a.b)("inlineCode",{parentName:"p"},"{ x: [0, 1], y: [0, 1]}"),". To set cursor outside of the element, you would\npass ",Object(a.b)("inlineCode",{parentName:"p"},"{ x: -1, y: -1 }"),"."),Object(a.b)("h2",{id:"returns"},"Returns"),Object(a.b)("h3",{id:"reactelement"},"React.Element"),Object(a.b)("p",null,"You only need to render the returned value."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"lottie-scroll-with-offset"},"Lottie scroll with offset"),Object(a.b)("p",null,"From 0 to 45% of the container the Lottie will be stopped, and from 45% to 100%\nof the container the Lottie will be synced with the scroll."),Object(a.b)(c.a,{mdxType:"ScrollWithOffset"}),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-jsx",parentName:"pre"},'import { useLottie, useLottieInteractivity } from "lottie-react";\nimport likeButton from "./likeButton.json";\n\nconst options = {\n  animationData: likeButton,\n};\n\nconst Example = () => {\n  const lottieObj = useLottie(options);\n  const Animation = useLottieInteractivity({\n    lottieObj,\n    mode: "scroll",\n    actions: [\n      {\n        visibility: [0, 0.45],\n        type: "stop",\n        frames: [0],\n      },\n      {\n        visibility: [0.45, 1],\n        type: "seek",\n        frames: [0, 38],\n      },\n    ],\n  });\n\n  return Animation;\n};\n\nexport default Example;\n')),Object(a.b)("h3",{id:"scroll-effect-with-offset-and-segment-looping"},"Scroll effect with offset and segment looping"),Object(a.b)("p",null,"In cases where you would like the animation to loop from a specific frame to a\nspecific frame, you can add an additional object to actions in which you can\nspecify the frames. In the example below, the Lottie loops frame 45 to 60 once\n45% of the container is reached."),Object(a.b)(l.a,{mdxType:"ScrollWithOffsetAndLoop"}),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-jsx",parentName:"pre"},'import { useLottie, useLottieInteractivity } from "lottie-react";\nimport robotAnimation from "./robotAnimation.json";\n\nconst options = {\n  animationData: robotAnimation,\n};\n\nconst Example = () => {\n  const lottieObj = useLottie(options);\n  const Animation = useLottieInteractivity({\n    lottieObj,\n    mode: "scroll",\n    actions: [\n      {\n        visibility: [0, 0.2],\n        type: "stop",\n        frames: [0],\n      },\n      {\n        visibility: [0.2, 0.45],\n        type: "seek",\n        frames: [0, 45],\n      },\n      {\n        visibility: [0.45, 1.0],\n        type: "loop",\n        frames: [45, 60],\n      },\n    ],\n  });\n\n  return Animation;\n};\n\nexport default Example;\n')),Object(a.b)("h3",{id:"play-segments-on-hover"},"Play segments on hover"),Object(a.b)("p",null,"When the cursor moves in to the container, the Lottie loops from frame 45 to 60\nas long as cursor is inside the container. The stop action as shown below is so\nthat the animation is stopped at the 45th frame when cursor is outside."),Object(a.b)(b.a,{mdxType:"PlaySegmentsOnHover"}),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-jsx",parentName:"pre"},'import { useLottie, useLottieInteractivity } from "lottie-react";\nimport robotAnimation from "./robotAnimation.json";\n\nconst style = {\n  height: 300,\n  border: 3,\n  borderStyle: "solid",\n  borderRadius: 7,\n};\n\nconst options = {\n  animationData: robotAnimation,\n};\n\nconst PlaySegmentsOnHover = () => {\n  const lottieObj = useLottie(options, style);\n  const Animation = useLottieInteractivity({\n    lottieObj,\n    mode: "cursor",\n    actions: [\n      {\n        position: { x: [0, 1], y: [0, 1] },\n        type: "loop",\n        frames: [45, 60],\n      },\n      {\n        position: { x: -1, y: -1 },\n        type: "stop",\n        frames: [45],\n      },\n    ],\n  });\n\n  return Animation;\n};\n\nexport default PlaySegmentsOnHover;\n')),Object(a.b)("h3",{id:"sync-cursor-position-with-animation"},"Sync cursor position with animation"),Object(a.b)("p",null,"Moving the cursor from top left of the container to the bottom right of the\ncontainer completes the animation. The seeking of the animation is synced to the\ndiagonal movement of the cursor."),Object(a.b)(m.a,{mdxType:"CursorDiagonalSync"}),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-jsx",parentName:"pre"},'import { useLottie, useLottieInteractivity } from "lottie-react";\nimport robotAnimation from "./robotAnimation.json";\n\nconst style = {\n  height: 300,\n  border: 3,\n  borderStyle: "solid",\n  borderRadius: 7,\n};\n\nconst options = {\n  animationData: robotAnimation,\n};\n\nconst CursorDiagonalSync = () => {\n  const lottieObj = useLottie(options, style);\n  const Animation = useLottieInteractivity({\n    lottieObj,\n    mode: "cursor",\n    actions: [\n      {\n        position: { x: [0, 1], y: [0, 1] },\n        type: "seek",\n        frames: [0, 180],\n      },\n    ],\n  });\n\n  return Animation;\n};\n\nexport default CursorDiagonalSync;\n')),Object(a.b)("h3",{id:"sync-animation-with-cursor-horizontal-movement"},"Sync animation with cursor horizontal movement"),Object(a.b)("p",null,"Move your cursor on the animation below. You may interchange the x and y arrays\nto get the vertical movement of the cursor synced with the animation."),Object(a.b)(p.a,{mdxType:"CursorHorizontalSync"}),Object(a.b)("pre",null,Object(a.b)("code",{className:"language-jsx",parentName:"pre"},'import { useLottie, useLottieInteractivity } from "lottie-react";\nimport hamsterAnimation from "./hamsterAnimation.json";\n\nconst style = {\n  height: 300,\n  border: 3,\n  borderStyle: "solid",\n  borderRadius: 7,\n};\n\nconst options = {\n  animationData: hamsterAnimation,\n};\n\nconst CursorHorizontalSync = () => {\n  const lottieObj = useLottie(options, style);\n  const Animation = useLottieInteractivity({\n    lottieObj,\n    mode: "cursor",\n    actions: [\n      {\n        position: { x: [0, 1], y: [-1, 2] },\n        type: "seek",\n        frames: [0, 179],\n      },\n      {\n        position: { x: -1, y: -1 },\n        type: "stop",\n        frames: [0],\n      },\n    ],\n  });\n\n  return Animation;\n};\n\nexport default CursorHorizontalSync;\n')))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/hooks/useLottieInteractivity/README.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-hooks-use-lottie-interactivity-readme-mdx-b7e01ced9e7c6448a69f.js.map