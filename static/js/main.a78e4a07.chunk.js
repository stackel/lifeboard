(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),i=(a(87),a(2)),c=a.n(i),o="d6570a6b091038395145cafcf7d50ae3bef07e5a",m="https://www.giantbomb.com/api/",u=a(39),f=a(81),d=a(80),h=a.n(d);function p(e){var t=e.title,a=e.loading,n=e.link,l=e.large;if(a)return r.a.createElement("div",{className:"bg-dark-gray h1 w5 mv2"});var s="".concat(l?"f6 b":"f6 fw5"," db sans-serif mv2 near-white");return n?r.a.createElement("a",{href:n,className:"".concat(s," link truncate-two-lines"),target:"_blank",rel:"noopener noreferrer"},t):r.a.createElement("span",{className:s},t)}function b(e){var t=e.subtitle;return e.loading?r.a.createElement("div",{className:"bg-dark-gray h1 w4 mv2"}):r.a.createElement("span",{className:"db sans-serif f7 light-silver truncate"},t)}function g(e){var t=e.url,a=e.alt,n=e.loading,l=e.show,s=e.textOverlay;if(!l)return null;if(n)return r.a.createElement("div",{className:"h-12-rem bg-dark-gray br2"});var i=r.a.createElement("img",{className:"h-12-rem contain of-c w-100 br2",src:t,alt:a});return s?r.a.createElement("div",{className:"relative"},i,r.a.createElement("span",{className:"darken-bottom db w-100 absolute bottom-0 right-0 tr pv2 ph3 sans-serif white f3 b"},s)):i}function v(e){var t=e.item,a=e.showImage,n=e.loading,l=e.subtitleOverImage,s=e.largeTitle;return r.a.createElement("div",null,r.a.createElement(g,{textOverlay:l?t.subtitle:null,url:t.imageUrl,alt:t.title,show:a,loading:n}),r.a.createElement(p,{link:t.url,title:t.title,loading:n,large:s}),!l&&r.a.createElement(b,{subtitle:t.subtitle,loading:n}))}p.defaultProps={title:"",loading:!1,link:null,large:!1},b.defaultProps={loading:!1,subtitle:""},g.defaultProps={url:null,loading:!1,show:!0,textOverlay:null},v.defaultProps={loading:!1,item:{},subtitleOverImage:!1,largeTitle:!1};var E=a(78),w=a.n(E);function I(e){var t=e.list,a=e.open,n=e.onClose,l=e.noImages,s=e.limitTo;return r.a.createElement(w.a,{"aria-labelledby":"show-all-list-items",open:a,onClose:n},r.a.createElement("div",{className:"ph4 pv2 bg-near-black min-w6"},r.a.createElement(y,Object.assign({limitTo:s,noImages:l},t))))}function y(e){var t=e.items,a=e.loading,l=e.limitTo,s=e.label,i=e.noImages,o=e.firstItemSubtitleOnImage,m=Object(n.useState)(!1),d=Object(f.a)(m,2),p=d[0],b=d[1];return a?r.a.createElement("div",null,r.a.createElement("h2",{className:"near-white sans-serif f5 mb2"},s),Object(u.a)(Array(l).keys()).map(function(e){return r.a.createElement("div",{className:"mb4",key:e},r.a.createElement(v,{loading:a,showImage:e<1&&!i}))})):r.a.createElement("div",null,r.a.createElement("h2",{className:"near-white sans-serif f5 mb2"},s),r.a.createElement("h2",{className:"sans-serif f7 light-silver fw5 mb3"},"Updated ".concat(c()().format("HH:mm"))),t.slice(0,l).map(function(e,t){return r.a.createElement("div",{className:"mb3",key:e.title},r.a.createElement(v,{key:e.title,item:e,showImage:t<1&&!i,subtitleOverImage:t<1&&o,largeTitle:t<1}))}),t.length>l&&r.a.createElement("div",{className:"tc"},r.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){b(!0)}},"Show more...")),r.a.createElement(I,{list:{items:t,loading:a,label:s},noImages:i,open:p,onClose:function(){b(!1)}}))}I.defaultProps={noImages:!1,limitTo:20},y.defaultProps={loading:!1,items:[],limitTo:3,label:"",noImages:!1,firstItemSubtitleOnImage:!1};var k=a(18),N=a(19),O=a(22),S=a(20),D=a(23),j=a(24),T=a.n(j),M=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(S.a)(t).call(this,e))).fetch=function(){var e=a.props,t=e.url,n=e.params,r=e.headers;T.a.get(t,{params:n,headers:r||{}}).then(function(e){a.setState({response:e,loading:!1,error:!1})},function(e){a.setState({loading:!1,error:e})})},a.state={loading:!0,response:[],intervalId:null,error:!1},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.fetchInterval;if(!t.mocked){var n=setInterval(function(){e.fetch()},a);this.setState({intervalId:n}),this.fetch()}}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;clearInterval(e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.response,n=e.error,r=this.props,l=r.children,s=r.mocked;return s?l(s,!1,null):l(a,t,n)}}]),t}(n.Component);function _(e){var t=e.url,a=e.label,n=e.params,l=e.fetchInterval,s=e.nItemsDisplay,i=e.noImages,c=e.nItemsTotal,o=e.transformResponse,m=e.transformItem,u=e.mocked,f=e.firstItemSubtitleOnImage;return u?r.a.createElement(y,{label:a,noImages:i,limitTo:s,firstItemSubtitleOnImage:f,items:o(u).map(function(e){return m(e)}).slice(0,c)}):r.a.createElement(M,{url:t,params:n,fetchInterval:l},function(e,t,n){if(t)return r.a.createElement(y,{label:a,noImages:i,loading:!0});if(n)return null;if(e){var l=o(e);return l&&l.length?r.a.createElement(y,{label:a,noImages:i,limitTo:s,firstItemSubtitleOnImage:f,items:l.map(function(e){return m(e)}).slice(0,c)}):null}return null})}M.defaultProps={fetchInterval:6e4,params:null,headers:null},_.defaultProps={label:void 0,params:{},fetchInterval:6e5,nItemsDisplay:3,nItemsTotal:20,noImages:!1,transformResponse:function(e){return e},transformItem:function(e){return e},firstItemSubtitleOnImage:!1};var x=["18"];var C=["18"];var U=a(29),Y=[157,154];var L=a(21),A=a.n(L),P=function(e){var t=document.createElement("div");return t.innerHTML=e,t.querySelector("img").getAttribute("src")};function W(e){var t=e.time;return r.a.createElement("span",{className:"near-white sans-serif f1 b"},t.format("HH:mm"),r.a.createElement("span",{className:"near-white f3 fw4 db"},t.format("MMMM Do")))}var R=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(S.a)(t).call(this,e))).updateTime=function(){a.setState({time:c()()})},a.state={time:null,intervalId:null},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.updateTime()},1e3);this.setState({intervalId:t}),this.updateTime()}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;e&&clearInterval(e)}},{key:"render",value:function(){var e=this.state.time;return e?r.a.createElement(W,{time:e}):null}}]),t}(n.Component),H="https://api.openweathermap.org/data/2.5/",q="c51868a10416e26716b878ad7ccacce6";function B(e){var t=e.weather;return r.a.createElement("div",{className:"tc"},r.a.createElement("span",{className:"near-white sans-serif f1 b db"},Math.round(t.temperature),"\xb0"),r.a.createElement("span",{className:"near-white sans-serif f3 db"},t.description))}var G=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(S.a)(t).call(this,e))).fetchWeather=function(){T.a.get("".concat(H,"weather"),{params:{appid:q,q:"Nacka,se",units:"metric"}}).then(function(e){var t=e.data;a.setState({loading:!1,weather:{temperature:t.main.temp,description:t.weather[0].description}})})},a.state={loading:!0,weather:null,intervalId:null},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.fetchWeather()},12e4);this.setState({intervalId:t}),this.fetchWeather()}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;e&&clearInterval(e)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.weather;return t?r.a.createElement("div",{className:"bg-near-white w5 h1"}):a?r.a.createElement(B,{weather:a}):null}}]),t}(n.Component),F="http://192.168.86.27/api/lmgn3wPSGyP4ucjGgpoqZMpxVMWCaI0jGkJ1g7ta/";function J(e){var t=e.light,a=e.onClick,n=t.state.on,l=n?"yellow":"moon-gray";return r.a.createElement("div",{className:"w-100"},r.a.createElement("div",null,r.a.createElement("div",{className:"tc"},r.a.createElement("button",{type:"button",onClick:function(){return a(t.id,n)},className:"bg-".concat(l," b--").concat(l," h2 w2 br-100 pointer link grow dim")})),r.a.createElement("div",{className:"tc"},r.a.createElement("span",{className:"near-white sans-serif f6 fw5 mb1 mt0 truncate"},t.name))))}function K(e){var t=e.lights,a=e.onLightClicked,n=e.onAllLightsClicked,l=t.filter(function(e){return e.state.on}).length===t.length,s=l?"bg-yellow b--yellow":"bg-light-gray b--light-gray";return r.a.createElement("div",null,r.a.createElement("div",{className:"cf"},r.a.createElement("h2",{className:"near-white sans-serif f4 mt2 mb2"}," Light Control "),r.a.createElement("div",{className:""}),r.a.createElement("div",{className:"tc pt3 pb3"},r.a.createElement("button",{type:"button",onClick:function(){return n(l)},className:"".concat(s," h2 w2 v-mid br-100 pointer link grow dim")}),r.a.createElement("div",null,r.a.createElement("span",{className:"db near-white sans-serif f6 fw5 pt2 truncate"},"All lights"))),t.map(function(e){return r.a.createElement("div",{key:e.id,className:"dib w-100 fl mb3"},r.a.createElement(J,{light:e,onClick:a}))})))}K.defaultProps={lights:[]};var V=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(O.a)(this,Object(S.a)(t).call(this,e))).fetchLights=function(){T.a.get("".concat(F,"lights")).then(function(e){if(null!==e){var t=e.data,n=[];Object.keys(t).forEach(function(e){return n.push(Object(U.a)({},t[e],{id:e}))}),a.setState({lights:n})}})},a.onLightClicked=function(e,t){T.a.put("".concat(F,"lights/").concat(e,"/state"),{on:!t}).then(function(){a.fetchLights()})},a.onAllLightsClicked=function(e){a.state.lights.forEach(function(t){T.a.put("".concat(F,"lights/").concat(t.id,"/state"),{on:!e}).then(function(){})})},a.state={lights:[],intervalId:null},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.fetchLights()},1e4);this.setState({intervalId:t}),this.fetchLights()}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;clearInterval(e)}},{key:"render",value:function(){var e=this.state.lights;return e&&e.length?r.a.createElement("div",null,r.a.createElement(K,{lights:e,onLightClicked:this.onLightClicked,onAllLightsClicked:this.onAllLightsClicked})):null}}]),t}(n.Component),z=a(31);function Z(e){var t,a=e.filter,n=e.label,l=e.mocked;return r.a.createElement(_,{mocked:l,label:n,url:"https://newsapi.org/v2/top-headlines",fetchInterval:6e4,params:(t={},Object(z.a)(t,a.type,a.value),Object(z.a)(t,"apiKey","8fcc0e50139642efab56a0fcd657cb23"),t),transformResponse:function(e){return e.data.articles},transformItem:function(e){return{imageUrl:e.urlToImage,title:e.title,subtitle:c()(e.publishedAt).fromNow(),url:e.url}}})}Z.defaultProps={label:"",filter:{type:"country",value:"se"}};var Q="Nya \xd6ler";var X="Stocks",$="GIUYQBXKZDY2VNT7";function ee(e){var t=e.stocks,a=e.mocked;return t.map(function(e,t){return r.a.createElement(M,{mocked:a?a[t]:null,url:"https://www.alphavantage.co/query",params:{outputsize:"compact",apikey:$,symbol:e.symbol,function:"TIME_SERIES_DAILY"},fetchInterval:3e5},function(a,n,l){if(l||n)return null;var s=a.data["Time Series (Daily)"];if(!s)return null;var i=[];Object.keys(s).forEach(function(e){i.push(Object(U.a)({},s[e],{date:c()(e)}))});var o=i.sort(function(e,t){return e.date+t.date}),m=o[0],u=o[1];if(!m||!u)return null;var f=Math.round(100*m["4. close"])/100,d=Math.round(100*u["4. close"])/100,h=f.toFixed(2),p=f>d,b=(100*(f/d-1)).toFixed(1),g=(100*(f/e.acquiredAt-1)).toFixed(1);return 0===t?r.a.createElement("div",null,r.a.createElement("h2",{className:"near-white sans-serif f5 mb2"},X),r.a.createElement("h2",{className:"sans-serif f7 light-silver fw5 mb3"},"Updated ".concat(c()().format("HH:mm"))),r.a.createElement("div",{className:"tc mb4"},r.a.createElement("div",{className:"sans-serif light-silver tc f4 mt4"},e.symbol),r.a.createElement("div",{className:"f2 near-white sans-serif mv2 b"},"".concat(h," kr")),r.a.createElement("div",{className:"sans-serif f4 dib ".concat(p?"green":"red")},"".concat(b,"%")),r.a.createElement("span",{className:"white sans-serif f7 lh-copy pl2 mt2"},"(".concat(g,"%)")),")")):r.a.createElement("div",{className:"f mv2"},r.a.createElement("div",{className:"f5 mt2 mb1"},r.a.createElement("span",{className:"sans-serif light-silver"},e.symbol),r.a.createElement("span",{className:"near-white sans-serif b fr"},"".concat(h," kr"))),r.a.createElement("div",{className:"tr f6"},r.a.createElement("span",{className:"mr2 sans-serif ".concat(p?"green":"red")},"".concat(b,"%")),r.a.createElement("span",{className:"white sans-serif f7"},"(".concat(g,"%)"))),")")})})}ee.defaultProps={stocks:[]};var te=a(47);function ae(e){var t=e.lat,a=e.lng,n=Object(te.getSunrise)(t,a),l=Object(te.getSunset)(t,a);return r.a.createElement("div",{className:"tc"},r.a.createElement("span",{className:"light-silver sans-serif f4 db mt2 mb1"},"Sunrise"),r.a.createElement("span",{className:"white sans-serif f3 db b"},c()(n).format("HH:mm")),r.a.createElement("span",{className:"light-silver sans-serif f4 db mt2 mb1"},"Sunset"),r.a.createElement("span",{className:"white sans-serif f3 db b"},c()(l).format("HH:mm")))}var ne=[r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(_,{mocked:t,label:"Giant Bomb Upcoming",url:"https://www.giantbomb.com/upcoming_json",fetchInterval:3e5,firstItemSubtitleOnImage:!0,transformResponse:function(e){return e.data.liveNow?[e.data.liveNow].concat(Object(u.a)(e.data.upcoming)):e.data.upcoming},transformItem:function(e){return{title:e.title,subtitle:e.date?c()(e.date).add(9,"hours").calendar():r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"live-pulse"}),r.a.createElement("span",{className:"ml2"},"Live")),imageUrl:"https://".concat(e.image),url:"https://www.giantbomb.com"}}})},null),r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(_,{mocked:t,label:"This Week in Games",url:"".concat(m,"games"),params:{api_key:o,format:"json",filter:"original_release_date:\n        ".concat(c()().format("YYYY-MM-DD"),"|\n        ").concat(c()().add(7,"day").format("YYYY-MM-DD"))},firstItemSubtitleOnImage:!0,fetchInterval:6e5,transformResponse:function(e){return e.data.results.filter(function(e){return e.platforms&&e.platforms.filter(function(e){return Y.includes(e.id)})}).filter(function(e){return null!==e.expected_release_month&&null!==e.expected_release_day&&null!==e.expected_release_year}).map(function(e){return Object(U.a)({},e,{date:c()([e.expected_release_year,e.expected_release_month-1,e.expected_release_day])})}).filter(function(e){return e.date>c()().subtract(1,"days")}).sort(function(e,t){return e.date-t.date})},transformItem:function(e){return{title:e.name,imageUrl:e.image.medium_url,url:e.site_detail_url,subtitle:e.date.calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"})}}})},null),r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(_,{mocked:t,label:"Album Releases",url:"https://rss.itunes.apple.com/api/v1/us/apple-music/coming-soon/all/100/explicit.json",fetchInterval:18e5,transformResponse:function(e){return e.data.feed.results.filter(function(e){return e.genres.filter(function(e){return x.includes(e.genreId)}).length})},firstItemSubtitleOnImage:!0,transformItem:function(e){return{title:"".concat(e.artistName," - ").concat(e.name),subtitle:c()(e.releaseDate).calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"d MMMM"}),imageUrl:e.artworkUrl100,url:"https://www.google.com/search?q=".concat(e.artistName," ").concat(e.name)}}})},null),r.a.createElement(function(){return r.a.createElement(_,{label:"New Music",url:"https://rss.itunes.apple.com/api/v1/us/itunes-music/new-music/all/100/explicit.json",fetchInterval:18e5,transformResponse:function(e){return e.data.feed.results.filter(function(e){return e.genres.filter(function(e){return C.includes(e.genreId)}).length})},firstItemSubtitleOnImage:!0,transformItem:function(e){return{title:"".concat(e.artistName," - ").concat(e.name),subtitle:c()(e.releaseDate).calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"d MMMM"}),imageUrl:e.artworkUrl100,url:"https://www.google.com/search?q=".concat(e.artistName," ").concat(e.name)}}})},null),r.a.createElement(Z,{label:"News",filter:{type:"sources",value:"reuters"}}),r.a.createElement(function(){return r.a.createElement(_,{label:"New on Game Pass",url:"https://news.xbox.com/en-us/feed/",fetchInterval:9e5,transformResponse:function(e){return A.a.parse(e.data,{ignoreAttributes:!1}).rss.channel.item.filter(function(e){return e.title.includes("Game Pass")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:e["media:thumbnail"]["@_url"]}}})},null),r.a.createElement(function(e){var t=e.mocked;return r.a.createElement(_,{mocked:t,label:"Latest Giant Bomb Videos",url:"".concat(m,"videos"),params:{field_list:"name,id,image,publish_date,site_detail_url",api_key:o,format:"json"},fetchInterval:6e5,transformResponse:function(e){return e.data.results},transformItem:function(e){return{title:e.name,subtitle:c()(e.publish_date).add(9,"hours").fromNow(),url:e.site_detail_url,imageUrl:e.image.medium_url}}})},null),r.a.createElement(ee,{stocks:[{symbol:"STO:IMMU",acquiredAt:12.87},{symbol:"STO:SOLT",acquiredAt:20.5},{symbol:"STO:EOLU-B",acquiredAt:123}]}),r.a.createElement(function(){return r.a.createElement(_,{label:"New Recipes",url:"https://www.budgetbytes.com/feed/",fetchInterval:9e5,transformResponse:function(e){return A.a.parse(e.data).rss.channel.item.filter(function(e){return c()(e.pubDate)>c()().subtract(36,"hour")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:P(e["content:encoded"])}}})},null),r.a.createElement(function(){return r.a.createElement(_,{label:"New Recipes",url:"https://www.bonappetit.com/feed/latest-recipes/rss",fetchInterval:9e5,transformResponse:function(e){return A.a.parse(e.data,{ignoreAttributes:!1}).rss.channel.item.filter(function(e){return c()(e.pubDate)>c()().subtract(36,"hour")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:e["media:thumbnail"]["@_url"]}}})},null),r.a.createElement(function(e){var t=e.mocked,a=c()().month();return a>=2&&a<=10?r.a.createElement(_,{mocked:t,label:"Allsvenskans tabell",url:"https://secret-thicket-04067.herokuapp.com/as",fetchInterval:6e5,nItemsDisplay:7,noImages:!0,transformResponse:function(e){return e.data.result.item},transformItem:function(e){return{title:"".concat(e.position,". ").concat(e.team),subtitle:"".concat(e.points," po\xe4ng - ").concat(e.round," spelade")}}}):null},null),r.a.createElement(function(){var e=c()().month();return e>=9||e<=4?r.a.createElement(_,{label:"Bandy Elitserien",url:"https://secret-thicket-04067.herokuapp.com/es",fetchInterval:6e5,nItemsDisplay:7,noImages:!0,transformResponse:function(e){return e.data.result.item},transformItem:function(e){return{title:"".concat(e.position,". ").concat(e.team),subtitle:"".concat(e.points," po\xe4ng - ").concat(e.round," spelade")}}}):null},null),r.a.createElement(function(){return r.a.createElement(M,{headers:{"Ocp-Apim-Subscription-Key":"ed6bfcdbf6074559bd67365384159e63"},url:"https://api-extern.systembolaget.se/product/v1/product/search",params:{SortBy:"SellStartDate",SubCategory:"\xd6l",SellStartDateFrom:c()().subtract(5,"day").format("YYYY-MM-DD"),SellStartDateTo:c()().add(14,"day").format("YYYY-MM-DD")}},function(e,t,a){if(t)return r.a.createElement(y,{label:Q,limitTo:1,loading:!0,fetchInterval:3e5});if(a)return null;if(e){var n=e.data.Hits.filter(function(e){return e.IsInStoreSearchAssortment.includes("0237")});return n&&n.length?r.a.createElement("div",null,r.a.createElement(y,{label:Q,noImages:!0,limitTo:6,items:n.map(function(e){return{title:"".concat(e.ProductNameBold," ").concat(e.ProductNameThin||""),subtitle:c()(e.SellStartDate).calendar(null,{lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"}),url:"https://www.systembolaget.se/dryck/ol/".concat(e.ProductNameBold.trim().replace(/\s+/g,"-").replace(/\./g,"").replace(/\u00e4/g,"a").replace(/\u00f6/g,"o").replace(/\\|\//g,"").toLowerCase(),"-").concat(e.ProductNumber),imageUrl:"https://www.systembolaget.se/content/assets/images/products/product-placeholder.png"}})})):null}return null})},null),r.a.createElement(function(){return r.a.createElement(_,{label:"New Podcasts",url:"https://feed.rssunify.com/5da1b118c13c4/rss.xml",fetchInterval:9e5,transformResponse:function(e){return A.a.parse(e.data,{ignoreAttributes:!1}).rss.channel.item.filter(function(e){return c()(e.pubDate)>c()().subtract(24,"hours")})},transformItem:function(e){return{title:e.title,subtitle:c()(e.pubDate).calendar(),url:e.link,imageUrl:e["itunes:image"]["@_href"]}}})},null)],re="w-20",le="ph2";var se=function(){return r.a.createElement("div",{className:"bg-near-black mh3"},r.a.createElement("div",{className:"cf fl w-15 pt5"},r.a.createElement("div",{className:"tc"},r.a.createElement(R,null),r.a.createElement("div",{className:"mv4"},r.a.createElement(ae,{lat:59.305377,lng:18.145041})),r.a.createElement(G,null)),r.a.createElement("div",{className:"pt4 tc"},r.a.createElement(V,null))),r.a.createElement("div",{className:"fl w-85 cf"},ne.map(function(e){return r.a.createElement("div",{className:"".concat(re," ").concat(le," fl min-h6 ")},e)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(214)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.a78e4a07.chunk.js.map