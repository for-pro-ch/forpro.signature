import{d,_ as g,v as u,x as t,L as a,M as r,B as l,y as s,t as c,C as m,D as f}from"./v84BigaP.js";const h=d({data(){return{firstname:"",name:"",activity:"",tel:""}},methods:{copySignatureInClipBoard(){const e=this.$refs.htmlContent;if(!(e instanceof HTMLElement))return;const o=window.getSelection(),p=document.createRange();p.selectNodeContents(e),o&&(o.removeAllRanges(),o.addRange(p))},getCleanedEmptyString(e,o){return e.length>0?e:o+" doit être rempli"}}}),i=e=>(m("data-v-a2260027"),e=e(),f(),e),y={class:"v-mail-signature-generator fp-page"},x={class:"fp-grid-coll-container fp-grid-coll-container--center"},v={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},E=i(()=>t("h1",null,"Générateur de signature mail ForPro",-1)),C={class:"v-mail-signature-generator__content fp-ui-form"},_={dir:"ltr",ref:"htmlContent",style:{width:"100%"}},b={style:{width:"100%","font-family":"Helvetica, Arial, sans-serif","font-size":"12px","line-height":"15px",color:"black"}},S={height:"auto",style:{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px","line-height":"15px",color:"black"}},A=i(()=>t("br",null,null,-1)),k=i(()=>t("tr",null,[t("td",{height:"auto",style:{"font-family":"Helvetica, Arial, sans-serif","font-size":"12px","line-height":"15px","font-weight":"normal","padding-top":"15px",color:"black"}},[l("Fondation "),t("strong",null,"ForPro"),t("br"),l("Fondation pour la promotion et la valorisation de la Formation Professionnelle ")])],-1)),w=i(()=>t("tr",{style:{"padding-top":"15px"}},[t("td",{height:"auto",style:{"font-family":"Helvetica, Arial, sans-serif","padding-top":"15px","line-height":"15px","font-size":"12px",color:"black"}},[l(" Route de la Galaise 15B - 6ème étage "),t("br"),l("1228 Plan-les-Ouates ")])],-1)),B={height:"auto",style:{"font-family":"Helvetica, Arial, sans-serif","padding-top":"15px","line-height":"15px","font-size":"12px",color:"black"}},I=["href"],z=i(()=>t("tr",null,[t("td",{border:"0",cellpadding:"0",cellspacing:"0",height:"auto"},[t("img",{alt:"logo forpro",height:"30",style:{height:"30px","margin-top":"15px"},src:"https://for-pro.ch/signature__logo.png"})])],-1)),H=i(()=>t("tr",null,[t("td",{border:"0",cellpadding:"0",cellspacing:"0",height:"auto"},[t("a",{style:{"margin-top":"7px"},target:"_blank",href:"https://for-pro.ch/"},[t("img",{alt:"image recrutement",width:"150",style:{width:"150px","margin-top":"15px"},src:"https://for-pro-ch.github.io/forpro.signature/url.jpg"})])])],-1)),V=i(()=>t("p",{style:{"padding-top":"1rem"},class:"fp-text-small"}," Une fois le texte sélectionné (le texte devient vert quand il est sélectionné), copiez-le et collez-le dans votre outil de messagerie mail, dans les paramètres de signatures automatiques. ",-1));function F(e,o,p,U,$,P){return c(),u("main",y,[t("div",x,[t("div",v,[E,t("form",C,[a(t("input",{type:"text",placeholder:"prénom","onUpdate:modelValue":o[0]||(o[0]=n=>e.firstname=n)},null,512),[[r,e.firstname]]),a(t("input",{type:"text",placeholder:"nom","onUpdate:modelValue":o[1]||(o[1]=n=>e.name=n)},null,512),[[r,e.name]]),a(t("input",{type:"text",placeholder:"fonction","onUpdate:modelValue":o[2]||(o[2]=n=>e.activity=n)},null,512),[[r,e.activity]]),a(t("input",{type:"text",placeholder:"numéro","onUpdate:modelValue":o[3]||(o[3]=n=>e.tel=n)},null,512),[[r,e.tel]])]),t("div",{onClick:o[4]||(o[4]=(...n)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...n)),class:"v-mail-signature-generator__container"},[t("div",_,[t("table",b,[t("tbody",null,[t("tr",null,[t("td",S,[l(s(e.getCleanedEmptyString(e.firstname,"prénom"))+" "+s(e.getCleanedEmptyString(e.name,"/ nom"))+" ",1),A,l(" "+s(e.getCleanedEmptyString(e.activity,"fonction")),1)])]),k,w,t("tr",null,[t("td",B,[t("a",{href:"tel:"+e.tel,style:{"text-decoration":"none"}},s(e.getCleanedEmptyString(e.tel,"numéro")),9,I)])]),z,H])])],512)]),t("button",{onClick:o[5]||(o[5]=(...n)=>e.copySignatureInClipBoard&&e.copySignatureInClipBoard(...n)),class:"fp-ui-button"},"Selectionner le texte de signature"),V])])])}const T=g(h,[["render",F],["__scopeId","data-v-a2260027"]]);export{T as default};
