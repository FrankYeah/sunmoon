(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{576:function(t,e,r){var o=r(577),n=r(578),l=r(244),c=r(579);t.exports=function(t){return o(t)||n(t)||l(t)||c()},t.exports.default=t.exports,t.exports.__esModule=!0},577:function(t,e,r){var o=r(245);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.default=t.exports,t.exports.__esModule=!0},578:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},579:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},581:function(t,e,r){},587:function(t,e,r){"use strict";r(581)},598:function(t,e,r){"use strict";r.r(e);var o=r(576),n=r.n(o),l=r(141),c=r(147),d={head:{title:"Company"},layout:"default",components:{Swiper:c.Swiper,SwiperSlide:c.SwiperSlide},props:{},data:function(){return{screenWidth:null,swiperOption:{mousewheel:!0,grabCursor:!0,mousewheelControl:!0,spaceBetween:-14,breakpoints:{1e3:{slidesPerView:3,centeredSlides:!1},500:{slidesPerView:1,centeredSlides:!0}}},swiperIndex:0,isload:!1,currentMonth:0,relateData:[{title:"Jan, 2021",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]},{title:"Feb, 2021",subtitle:"Adobe",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Mar, 2021",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]}],chartData:[{title:"Jan, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]},{title:"Feb, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Mar, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Apr, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]},{title:"May, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]},{title:"Jun, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Jul, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Aug, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]},{title:"Sep, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]},{title:"Oct, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Nov, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.88,.82],dataY2:[.96,.94,.92,.9,.88,.86]},{title:"Dec, 2020",subtitle:"Airbnb",dataX:[0,10,20,30,40,50],dataY1:[.94,.96,.98,.95,.93,.9],dataY2:[.92,.9,.87,.86,.85,.84]}]}},mounted:function(){var t=this;(this.screenWidth=window.screen.width,this.swiper.on("slideChange",(function(){t.swiperIndex=t.swiper.activeIndex})),this.screenWidth>500)&&(this.swiperOption.spaceBetween=0,this.$echarts.init(document.getElementById("myChart")).setOption(this.completeChart(this.chartData[0].dataX,this.chartData[0].dataY1,this.chartData[0].dataY2)));for(var i=0;i<this.chartData.length;i++)this.screenWidth>500?this.$echarts.init(document.getElementById(this.chartData[i].title)).setOption(this.lessChart(this.chartData[i].dataX,this.chartData[i].dataY1,this.chartData[i].dataY2)):this.$echarts.init(document.getElementById(this.chartData[i].title)).setOption(this.completeChart(this.chartData[i].dataX,this.chartData[i].dataY1,this.chartData[i].dataY2));for(var e=0;e<this.relateData.length;e++)this.$echarts.init(document.getElementById(this.relateData[e].title)).setOption(this.lessChart(this.relateData[e].dataX,this.relateData[e].dataY1,this.relateData[e].dataY2))},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{goToCompany:function(t){this.$router.push({path:"/company",query:{step:t}})},nextPrev:function(){this.swiper.slidePrev()},nextSlide:function(){this.swiper.slideNext()},changeMonthDisplay:function(t){this.currentMonth=t,this.$echarts.init(document.getElementById("myChart")).setOption(this.completeChart(this.chartData[t].dataX,this.chartData[t].dataY1,this.chartData[t].dataY2),!0)},lessChart:function(t,e,r){return{title:{text:""},tooltip:{show:!1},grid:{top:"20px",left:"10px",right:"10px",bottom:"20px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},data:t}],yAxis:[{type:"value",max:Math.max.apply(Math,n()(e.concat(r))),min:Math.min.apply(Math,n()(e.concat(r))),splitNumber:3,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}}],series:[{type:"line",showSymbol:!1,areaStyle:{normal:{color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[0]>r[0]?"rgba(80,227,193,0.3)":"rgba(255,119,141,0.3)"},{offset:.43,color:e[0]>r[0]?"rgba(80,227,193,0.3)":"rgba(255,119,141,0.3)"},{offset:1,color:"rgba(253,196,63,0.3)"}])}},itemStyle:{normal:{color:e[0]>r[0]?"rgba(80,227,193,0.3)":"rgba(255,119,141,0.3)"}},lineStyle:{color:e[0]>r[0]?"rgba(80,227,193)":"rgba(255,119,141)"},data:e},{type:"line",showSymbol:!1,areaStyle:{},itemStyle:{normal:{color:"rgba(253,196,63,0.3)"}},lineStyle:{color:"rgb(253,196,63)"},data:r}]}},completeChart:function(t,e,r){return{title:{text:""},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"30px",left:"30px",right:"30px",bottom:"30px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisTick:{show:!0},axisLine:{lineStyle:{color:"#9C9C9C"}},axisLabel:{textStyle:{color:"#9C9C9C",fontSize:"14"}},data:t}],yAxis:[{type:"value",max:Math.max.apply(Math,n()(e.concat(r))),min:Math.min.apply(Math,n()(e.concat(r))),splitNumber:3,axisTick:{show:!1},axisLine:{lineStyle:{show:!1}},axisLabel:{textStyle:{color:"#9C9C9C",fontSize:"14"}}}],series:[{type:"line",areaStyle:{normal:{color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[0]>r[0]?"rgba(80,227,193,0.3)":"rgba(255,119,141,0.3)"},{offset:.43,color:e[0]>r[0]?"rgba(80,227,193,0.3)":"rgba(255,119,141,0.3)"},{offset:1,color:"rgba(253,196,63,0.3)"}])}},itemStyle:{normal:{color:e[0]>r[0]?"rgba(80,227,193,0.3)":"rgba(255,119,141,0.3)"}},lineStyle:{color:e[0]>r[0]?"rgba(80,227,193)":"rgba(255,119,141)"},data:e},{type:"line",areaStyle:{},itemStyle:{normal:{color:"rgba(253,196,63,0.3)"}},lineStyle:{color:"rgb(253,196,63)"},data:r}]}}},watch:{}},h=(r(587),r(26)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"company"},[o("div",{staticClass:"company-title"},[t._v("Valaris plc")]),t._v(" "),o("div",{staticClass:"company-chart"},[o("div",{staticClass:"company-chart-box"},[t._m(0),t._v(" "),o("div",{staticClass:"company-chart-right"},[o("div",{staticClass:"company-chart-industry"},[t._v("Industry: Petroleum")]),t._v(" "),o("div",{staticClass:"company-chart-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis id enim pharetra aliquam. Maecenas aliquet facilisis massa eu fringilla.")]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"company-chart-desc"},[o("div",{class:["company-chart-desc-text",{"company-chart-desc-text-3":t.chartData[t.currentMonth].dataY1[0]>t.chartData[t.currentMonth].dataY2[0]}]},[t._v("Default boundary")]),t._v(" "),o("div",{staticClass:"company-chart-desc-text-2"},[t._v("Lower boundary")])])])])]),t._v(" "),o("div",{staticClass:"company-rotate"},[o("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.chartData,(function(e,r){return o("swiper-slide",{key:r},[o("div",{staticClass:"company-rotate-box",on:{click:function(e){return t.changeMonthDisplay(r)}}},[o("div",{staticClass:"company-rotate-title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"company-rotate-chart",attrs:{id:e.title}}),t._v(" "),o("div",{staticClass:"company-rotate-desc"},[o("div",{class:["company-rotate-desc-text",{"company-rotate-desc-text-3":e.dataY1[0]>e.dataY2[0]}]},[t._v("Default boundary")]),t._v(" "),o("div",{staticClass:"company-rotate-desc-text-2"},[t._v("Lower boundary")])]),t._v(" "),o("div",{staticClass:"company-rotate-hint"},[t._v("Industry: Petroleum")])])])})),1),t._v(" "),0!=t.swiperIndex?o("img",{staticClass:"company-rotate-arrow-left",attrs:{src:r(246),alt:"arrow"},on:{click:t.nextPrev}}):t._e(),t._v(" "),9!=t.swiperIndex?o("img",{staticClass:"company-rotate-arrow-right",attrs:{src:r(246),alt:"arrow"},on:{click:t.nextSlide}}):t._e(),t._v(" "),t._m(2)],1),t._v(" "),o("div",{staticClass:"company-relate"},[t._m(3),t._v(" "),t._l(t.relateData,(function(e,r){return o("div",{directives:[{name:"show",rawName:"v-show",value:r<2||t.isload,expression:"index < 2 || isload"}],key:r,staticClass:"company-relate-box",on:{click:function(e){return t.goToCompany()}}},[o("div",{staticClass:"company-relate-chart-box"},[o("div",{staticClass:"company-relate-chart-subtitle"},[t._v(t._s(e.subtitle))]),t._v(" "),o("div",{staticClass:"company-relate-chart-title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"company-relate-chart",attrs:{id:e.title}})]),t._v(" "),o("div",{staticClass:"company-relate-desc"},[o("div",{staticClass:"company-relate-desc-title"},[t._v("Agilent Technologies")]),t._v(" "),o("div",{staticClass:"company-relate-desc-text"},[t._v("\n            Status:\n            "),e.dataY1[0]>e.dataY2[0]?o("span",{staticStyle:{color:"#50E3C1"}},[t._v("Safe")]):o("span",{staticStyle:{color:"#FF4866"}},[t._v("Danger")])]),t._v(" "),o("div",{staticClass:"company-relate-desc-text"},[t._v("Industry: Biotechnology")])])])})),t._v(" "),t.isload?t._e():o("div",{staticClass:"company-relate-load",on:{click:function(e){t.isload=!0}}},[t._v("Load more")])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"company-chart-left"},[e("div",{staticClass:"company-chart-chart"},[e("div",{staticClass:"company-chart-level"},[this._v("Level")]),this._v(" "),e("div",{staticClass:"company-chart-period"},[this._v("Period of time")]),this._v(" "),e("div",{attrs:{id:"myChart"}}),this._v(" "),e("div",{staticClass:"company-chart-horizon"},[this._v("Horizon")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"./about"}},[e("div",{staticClass:"company-chart-btn"},[this._v("Contact us for more info")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"./about"}},[e("div",{staticClass:"company-rotate-contact"},[this._v("Contact us for more info")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"company-relate-title-box"},[e("div",{staticClass:"company-relate-line"}),this._v(" "),e("div",{staticClass:"company-relate-title"},[this._v("Related Companies")]),this._v(" "),e("div",{staticClass:"company-relate-line"})])}],!1,null,"5466a281",null);e.default=component.exports}}]);