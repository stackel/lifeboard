(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),i=(a(87),a(2)),c=a.n(i),o="d6570a6b091038395145cafcf7d50ae3bef07e5a",m="https://www.giantbomb.com/api/",u=a(39),d=a(81),f=a(80),p=a.n(f);function b(e){var t=e.title,a=e.loading,n=e.link,l=e.large;if(a)return r.a.createElement("div",{className:"bg-dark-gray h1 w5 mv2"});var s="".concat(l?"f6 b":"f6 fw5"," db sans-serif mv2 near-white");return n?r.a.createElement("a",{href:n,className:"".concat(s," link truncate-two-lines"),target:"_blank",rel:"noopener noreferrer"},t):r.a.createElement("span",{className:s},t)}function h(e){var t=e.subtitle;return e.loading?r.a.createElement("div",{className:"bg-dark-gray h1 w4 mv2"}):r.a.createElement("span",{className:"db sans-serif f7 light-silver truncate"},t)}function v(e){var t=e.url,a=e.alt,n=e.loading,l=e.show,s=e.textOverlay;if(!l)return null;if(n)return r.a.createElement("div",{className:"h-12-rem bg-dark-gray br2"});var i=r.a.createElement("img",{className:"h-12-rem contain of-c w-100 br2",src:t,alt:a});return s?r.a.createElement("div",{className:"relative"},i,r.a.createElement("span",{className:"darken-bottom db w-100 absolute bottom-0 right-0 tr pv2 ph3 sans-serif white f3 b"},s)):i}function g(e){var t=e.item,a=e.showImage,n=e.loading,l=e.subtitleOverImage,s=e.largeTitle;return r.a.createElement("div",null,r.a.createElement(v,{textOverlay:l?t.subtitle:null,url:t.imageUrl,alt:t.title,show:a,loading:n}),r.a.createElement(b,{link:t.url,title:t.title,loading:n,large:s}),!l&&r.a.createElement(h,{subtitle:t.subtitle,loading:n}))}b.defaultProps={title:"",loading:!1,link:null,large:!1},h.defaultProps={loading:!1,subtitle:""},v.defaultProps={url:null,loading:!1,show:!0,textOverlay:null},g.defaultProps={loading:!1,item:{},subtitleOverImage:!1,largeTitle:!1};var E=a(78),w=a.n(E);function I(e){var t=e.list,a=e.open,n=e.onClose,l=e.noImages,s=e.limitTo;return r.a.createElement(w.a,{"aria-labelledby":"show-all-list-items",open:a,onClose:n},r.a.createElement("div",{className:"ph4 pv2 bg-near-black min-w6"},r.a.createElement(y,Object.assign({limitTo:s,noImages:l},t))))}function y(e){var t=e.items,a=e.loading,l=e.limitTo,s=e.label,i=e.noImages,o=e.firstItemSubtitleOnImage,m=Object(n.useState)(!1),f=Object(d.a)(m,2),b=f[0],h=f[1];return a?r.a.createElement("div",null,r.a.createElement("h2",{className:"near-white sans-serif f5 mb2"},s),Object(u.a)(Array(l).keys()).map(function(e){return r.a.createElement("div",{className:"mb4",key:e},r.a.createElement(g,{loading:a,showImage:e<1&&!i}))})):r.a.createElement("div",null,r.a.createElement("h2",{className:"near-white sans-serif f5 mb2"},s),r.a.createElement("h2",{className:"sans-serif f7 light-silver fw5 mb3"},"Updated ".concat(c()().format("HH:mm"))),t.slice(0,l).map(function(e,t){return r.a.createElement("div",{className:"mb3",key:e.title},r.a.createElement(g,{key:e.title,item:e,showImage:t<1&&!i,subtitleOverImage:t<1&&o,largeTitle:t<1}))}),t.length>l&&r.a.createElement("div",{className:"tc"},r.a.createElement(p.a,{size:"small",color:"primary",onClick:function(){h(!0)}},"Show more...")),r.a.createElement(I,{list:{items:t,loading:a,label:s},noImages:i,open:b,onClose:function(){h(!1)}}))}I.defaultProps={noImages:!1,limitTo:20},y.defaultProps={loading:!1,items:[],limitTo:3,label:"",noImages:!1,firstItemSubtitleOnImage:!1};var k=a(18),N=a(19),O=a(22),D=a(20),S=a(23),T=a(24),_=a.n(T),j=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(D.a)(t).call(this,e))).fetch=function(){var e=a.props,t=e.url,n=e.params,r=e.headers;_.a.get(t,{params:n,headers:r||{}}).then(function(e){a.setState({response:e,loading:!1,error:!1})},function(e){a.setState({loading:!1,error:e})})},a.state={loading:!0,response:[],intervalId:null,error:!1},a}return Object(S.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.fetchInterval;if(!t.mocked){var n=setInterval(function(){e.fetch()},a);this.setState({intervalId:n}),this.fetch()}}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;clearInterval(e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.response,n=e.error,r=this.props,l=r.children,s=r.mocked;return s?l(s,!1,null):l(a,t,n)}}]),t}(n.Component);function M(e){var t=e.url,a=e.label,n=e.params,l=e.fetchInterval,s=e.nItemsDisplay,i=e.noImages,c=e.nItemsTotal,o=e.transformResponse,m=e.transformItem,u=e.mocked,d=e.firstItemSubtitleOnImage;return u?r.a.createElement(y,{label:a,noImages:i,limitTo:s,firstItemSubtitleOnImage:d,items:o(u).map(function(e){return m(e)}).slice(0,c)}):r.a.createElement(j,{url:t,params:n,fetchInterval:l},function(e,t,n){if(t)return r.a.createElement(y,{label:a,noImages:i,loading:!0});if(n)return null;if(e){if("string"===typeof e.data&&e.data.includes("<!DOCTYPE HTML"))return null;var l=o(e);return l&&l.length?r.a.createElement(y,{label:a,noImages:i,limitTo:s,firstItemSubtitleOnImage:d,items:l.map(function(e){return m(e)}).slice(0,c)}):null}return null})}j.defaultProps={fetchInterval:6e4,params:null,headers:null},M.defaultProps={label:void 0,params:{},fetchInterval:6e5,nItemsDisplay:3,nItemsTotal:20,noImages:!1,transformResponse:function(e){return e},transformItem:function(e){return e},firstItemSubtitleOnImage:!1};var x=["18"];var C=a(38),P=[157,154];var U=a(21),Y=a.n(U),R=function(e){var t=document.createElement("div");return t.innerHTML=e,t.querySelector("img").getAttribute("src")};function W(e){var t=e.time;return r.a.createElement("span",{className:"near-white sans-serif f1 b"},t.format("HH:mm"),r.a.createElement("span",{className:"near-white f3 fw4 db"},t.format("MMMM Do")))}var A=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(D.a)(t).call(this,e))).updateTime=function(){a.setState({time:c()()})},a.state={time:null,intervalId:null},a}return Object(S.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.updateTime()},1e3);this.setState({intervalId:t}),this.updateTime()}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;e&&clearInterval(e)}},{key:"render",value:function(){var e=this.state.time;return e?r.a.createElement(W,{time:e}):null}}]),t}(n.Component),L="https://api.openweathermap.org/data/2.5/",H="c51868a10416e26716b878ad7ccacce6";function B(e){var t=e.weather;return r.a.createElement("div",{className:"tc"},r.a.createElement("span",{className:"near-white sans-serif f1 b db"},Math.round(t.temperature),"\xb0"),r.a.createElement("span",{className:"near-white sans-serif f3 db"},t.description))}var G=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(D.a)(t).call(this,e))).fetchWeather=function(){_.a.get("".concat(L,"weather"),{params:{appid:H,q:"Nacka Kommun,se",units:"metric"}}).then(function(e){var t=e.data;a.setState({loading:!1,weather:{temperature:t.main.temp,description:t.weather[0].description}})})},a.state={loading:!0,weather:null,intervalId:null},a}return Object(S.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.fetchWeather()},12e4);this.setState({intervalId:t}),this.fetchWeather()}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;e&&clearInterval(e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.weather;return t?r.a.createElement("div",{className:"bg-near-white w5 h1"}):a?r.a.createElement(B,{weather:a}):null}}]),t}(n.Component),J="http://192.168.86.27/api/lmgn3wPSGyP4ucjGgpoqZMpxVMWCaI0jGkJ1g7ta/";function K(e){var t=e.light,a=e.onClick,n=t.state.on,l=n?"yellow":"moon-gray";return r.a.createElement("div",{className:"w-100"},r.a.createElement("div",null,r.a.createElement("div",{className:"tc"},r.a.createElement("button",{type:"button",onClick:function(){return a(t.id,n)},className:"bg-".concat(l," b--").concat(l," h2 w2 br-100 pointer link grow dim")})),r.a.createElement("div",{className:"tc"},r.a.createElement("span",{className:"near-white sans-serif f6 fw5 mb1 mt0 truncate"},t.name))))}function q(e){var t=e.lights,a=e.onLightClicked,n=e.onAllLightsClicked,l=t.filter(function(e){return e.state.on}).length===t.length,s=l?"bg-yellow b--yellow":"bg-light-gray b--light-gray";return r.a.createElement("div",null,r.a.createElement("div",{className:"cf"},r.a.createElement("h2",{className:"near-white sans-serif f4 mt2 mb2"}," Light Control "),r.a.createElement("div",{className:""}),r.a.createElement("div",{className:"tc pt3 pb3"},r.a.createElement("button",{type:"button",onClick:function(){return n(l)},className:"".concat(s," h2 w2 v-mid br-100 pointer link grow dim")}),r.a.createElement("div",null,r.a.createElement("span",{className:"db near-white sans-serif f6 fw5 pt2 truncate"},"All lights"))),t.map(function(e){return r.a.createElement("div",{key:e.id,className:"dib w-100 fl mb3"},r.a.createElement(K,{light:e,onClick:a}))})))}q.defaultProps={lights:[]};n.Component;var V=a(30);function z(e){var t,a=e.filter,n=e.label,l=e.mocked;return r.a.createElement(M,{mocked:l,label:n,url:"https://newsapi.org/v2/top-headlines",fetchInterval:6e4,params:(t={},Object(V.a)(t,a.type,a.value),Object(V.a)(t,"apiKey","8fcc0e50139642efab56a0fcd657cb23"),t),transformResponse:function(e){return e.data.articles},transformItem:function(e){return{imageUrl:e.urlToImage,title:e.title,subtitle:c()(e.publishedAt).fromNow(),url:e.url}}})}z.defaultProps={label:"",filter:{type:"country",value:"se"}};var F="Nya \xd6ler";var Q="Stocks",Z="5hXVnlMTbELftNldno6Qwkf7azoZckh4mQ3sunljDC4vR16hIjAGjN0Ks5LJ",X="https://api.worldtradingdata.com/api/v1/stock";function $(e){var t=e.stocks,a=e.mocked;return r.a.createElement(j,{mocked:a,url:X,params:{api_token:Z,symbol:t},fetchInterval:3e5},function(e,t,a){if(a||t)return null;if(!e||!e.data||!e.data.data)return null;var n=e.data.data;return n.forEach(function(e,t){"IMMU.ST"===e.symbol&&(n.splice(t,1),n.unshift(e))}),n.map(function(e,t){var a=e.price,n=e.currency,l=e.day_change,s=e.change_pct;return 0===t?r.a.createElement("div",null,r.a.createElement("h2",{className:"near-white sans-serif f5 mb2"},Q),r.a.createElement("h2",{className:"sans-serif f7 light-silver fw5 mb3"},"Updated ".concat(c()().format("HH:mm"))),r.a.createElement("div",{className:"tc mb4"},r.a.createElement("div",{className:"sans-serif light-silver tc f4 mt4 pt3 pb2"},e.name),r.a.createElement("div",{className:"f2 near-white sans-serif mv2 b"},"".concat(a," ").concat(n)),r.a.createElement("div",{className:"sans-serif f4 dib ".concat(l>0?"green":"red")},"".concat(s,"%")),")")):r.a.createElement("div",{className:"f mv2"},r.a.createElement("div",{className:"f5 mt2 mb1"},r.a.createElement("span",{className:"sans-serif light-silver"},e.name),r.a.createElement("span",{className:"near-white sans-serif b fr"},"".concat(a," ").concat(n))),r.a.createElement("div",{className:"tr f6"},r.a.createElement("span",{className:"mr2 sans-serif ".concat(l>0?"green":"red")},"".concat(s,"%"))),")")})})}$.defaultProps={stocks:[]};var ee=a(47);var te=[r.a.createElement("div",{className:"tc pa4 mt4"},r.a.createElement(A,null),r.a.createElement("div",{className:"mv4"},r.a.createElement(function(e){var t=e.lat,a=e.lng,n=Object(ee.getSunrise)(t,a),l=Object(ee.getSunset)(t,a);return r.a.createElement("div",{className:"tc"},r.a.createElement("span",{className:"light-silver sans-serif f4 db mt2 mb1"},"Sunrise"),r.a.createElement("span",{className:"white sans-serif f3 db b"},c()(n).format("HH:mm")),r.a.createElement("span",{className:"light-silver sans-serif f4 db mt2 mb1"},"Sunset"),r.a.createElement("span",{className:"white sans-serif f3 db b"},c()(l).format("HH:mm")))},{lat:59.305377,lng:18.145041})),r.a.createElement(G,null)),r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(M,{mocked:t,label:"Giant Bomb Upcoming",url:"https://www.giantbomb.com/upcoming_json",fetchInterval:3e5,firstItemSubtitleOnImage:!0,nItemsDisplay:4,transformResponse:function(e){return e.data.liveNow?[e.data.liveNow].concat(Object(u.a)(e.data.upcoming)):e.data.upcoming},transformItem:function(e){return{title:e.title,subtitle:e.date?c()(e.date).add(9,"hours").calendar():r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"live-pulse"}),r.a.createElement("span",{className:"ml2"},"Live")),imageUrl:"https://".concat(e.image),url:"https://www.giantbomb.com"}}})},null),r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(M,{mocked:t,label:"Game Releases",url:"".concat(m,"games"),params:{api_key:o,format:"json",filter:"original_release_date:\n        ".concat(c()().format("YYYY-MM-DD"),"|\n        ").concat(c()().add(7,"day").format("YYYY-MM-DD"))},firstItemSubtitleOnImage:!0,nItemsTotal:12,fetchInterval:6e5,transformResponse:function(e){return e.data.results.filter(function(e){return e.platforms&&e.platforms.filter(function(e){return P.includes(e.id)})}).filter(function(e){return null!==e.expected_release_month&&null!==e.expected_release_day&&null!==e.expected_release_year}).map(function(e){return Object(C.a)({},e,{date:c()([e.expected_release_year,e.expected_release_month-1,e.expected_release_day])})}).filter(function(e){return e.date>c()().subtract(1,"days")}).sort(function(e,t){return e.date-t.date})},transformItem:function(e){return{title:e.name,imageUrl:e.image.medium_url,url:e.site_detail_url,subtitle:e.date.calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"})}}})},null),r.a.createElement(function(){return r.a.createElement(M,{label:"New Music",url:"https://rss.itunes.apple.com/api/v1/us/itunes-music/new-music/all/100/explicit.json",fetchInterval:18e5,transformResponse:function(e){return e.data.feed.results.filter(function(e){return e.genres.filter(function(e){return x.includes(e.genreId)}).length&&c()(e.releaseDate)>c()().subtract(3,"days")})},transformItem:function(e){return{title:"".concat(e.artistName," - ").concat(e.name),subtitle:c()(e.releaseDate).calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"d MMMM"}),imageUrl:e.artworkUrl100,url:e.url}}})},null),r.a.createElement(z,{label:"News",filter:{type:"sources",value:"reuters"}}),r.a.createElement(function(){return r.a.createElement(M,{label:"New on Game Pass",url:"https://news.xbox.com/en-us/feed/",fetchInterval:9e5,transformResponse:function(e){return Y.a.parse(e.data,{ignoreAttributes:!1}).rss.channel.item.filter(function(e){return e.title.includes("Game Pass")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:e["media:thumbnail"]["@_url"]}}})},null),r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(M,{mocked:t,label:"Latest Giant Bomb Videos",url:"".concat(m,"videos"),params:{field_list:"name,id,image,publish_date,site_detail_url",api_key:o,format:"json"},nItemsTotal:10,fetchInterval:6e5,transformResponse:function(e){return e.data.results},transformItem:function(e){return{title:e.name,subtitle:c()(e.publish_date).add(9,"hours").fromNow(),url:e.site_detail_url,imageUrl:e.image.medium_url}}})},null),r.a.createElement($,{stocks:"IMMU.ST,CLAS-B.ST,RATO-B.ST,TEL2-B.ST"}),r.a.createElement(function(){return r.a.createElement(M,{label:"New Recipes",url:"https://www.budgetbytes.com/feed/",fetchInterval:9e5,transformResponse:function(e){return Y.a.parse(e.data).rss.channel.item.filter(function(e){return c()(e.pubDate)>c()().subtract(24,"hour")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:R(e["content:encoded"])}}})},null),r.a.createElement(function(){return r.a.createElement(M,{label:"New Recipes",url:"https://www.bonappetit.com/feed/latest-recipes/rss",fetchInterval:9e5,transformResponse:function(e){return Y.a.parse(e.data,{ignoreAttributes:!1}).rss.channel.item.filter(function(e){return c()(e.pubDate)>c()().subtract(24,"hour")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:e["media:thumbnail"]["@_url"]}}})},null),r.a.createElement(function(e){var t=e.mocked,a=c()().month();return a>=2&&a<=10?r.a.createElement(M,{mocked:t,label:"Allsvenskans tabell",url:"https://secret-thicket-04067.herokuapp.com/as",fetchInterval:6e5,nItemsDisplay:7,noImages:!0,transformResponse:function(e){return e.data.result.item},transformItem:function(e){return{title:"".concat(e.position,". ").concat(e.team),subtitle:"".concat(e.points," po\xe4ng - ").concat(e.round," spelade")}}}):null},null),r.a.createElement(function(){var e=c()().month();return e>=9||e<=4?r.a.createElement(M,{label:"Bandy Elitserien",url:"https://secret-thicket-04067.herokuapp.com/es",fetchInterval:6e5,nItemsDisplay:7,noImages:!0,transformResponse:function(e){return e.data.result.item},transformItem:function(e){return{title:"".concat(e.position,". ").concat(e.team),subtitle:"".concat(e.points," po\xe4ng - ").concat(e.round," spelade")}}}):null},null),r.a.createElement(function(){return r.a.createElement(j,{headers:{"Ocp-Apim-Subscription-Key":"ed6bfcdbf6074559bd67365384159e63"},url:"https://api-extern.systembolaget.se/product/v1/product/search",params:{SubCategory:"\xd6l",SellStartDateFrom:c()().subtract(2,"day").format("YYYY-MM-DD"),SellStartDateTo:c()().add(14,"day").format("YYYY-MM-DD")}},function(e,t,a){if(t)return r.a.createElement(y,{label:F,limitTo:1,loading:!0,fetchInterval:3e5});if(a)return null;if(e){var n=e.data.Hits.filter(function(e){return e.IsInStoreSearchAssortment.includes("0237")});return n&&n.length?r.a.createElement("div",null,r.a.createElement(y,{label:F,noImages:!0,limitTo:6,items:n.map(function(e){return{title:"".concat(e.ProductNameBold," ").concat(e.ProductNameThin||""),subtitle:c()(e.SellStartDate).calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"}),url:"https://www.systembolaget.se/dryck/ol/".concat(e.ProductNameBold.trim().replace(/\s+/g,"-").replace(/\./g,"").replace(/\u00e4/g,"a").replace(/\u00f6/g,"o").replace(/\\|\//g,"").toLowerCase(),"-").concat(e.ProductNumber),imageUrl:"https://www.systembolaget.se/content/assets/images/products/product-placeholder.png"}})})):null}return null})},null),r.a.createElement(function(){return r.a.createElement(M,{label:"New Podcasts",url:"https://feed.rssunify.com/5da1b118c13c4/rss.xml",fetchInterval:9e5,transformResponse:function(e){return Y.a.parse(e.data,{ignoreAttributes:!1}).rss.channel.item.filter(function(e){return c()(e.pubDate)>c()().subtract(12,"hours")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:e["itunes:image"]["@_href"]}}})},null)],ae="w-20",ne="ph3";var re=function(){return r.a.createElement("div",{className:"bg-near-black pv2 ph4"},r.a.createElement("div",{className:"fl w-100 cf"},te.map(function(e){return r.a.createElement("div",{className:"".concat(ae," ").concat(ne," fl min-h6 ")},e)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(214)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.cbd07fe3.chunk.js.map