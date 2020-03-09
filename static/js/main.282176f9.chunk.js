(this["webpackJsonpinterview-task"]=this["webpackJsonpinterview-task"]||[]).push([[0],{16:function(n,e,t){n.exports=t(25)},21:function(n,e,t){},24:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(9),c=t.n(r),l=(t(21),t(1)),i=t(2),s=t(4),u=t(3),d=t(5),p=t(10);function h(){var n=Object(p.a)(['\n  .container {\n    width: 700px;\n    background: #f1f1f1;\n    border-radius: 16px;\n    padding: 80px 0 120px 100px;\n    box-sizing: border-box;\n    margin: 50px auto;\n  }\n  .innerContainer {\n    width: 300px;\n    h1 {\n      font-size: 28px;\n    }\n    h2 {\n      font-size: 18px;\n      margin: 40px 0 20px;\n    }\n    .dropDown,\n    .searchBox,\n    .contentTop,\n    .customCheckboxHolder {\n      border: 1px solid #ccc;\n      height: 40px;\n      width: 100%;\n      border-radius: 4px;\n      font-size: 16px;\n      background: #fff;\n      font-weight: 500;\n      padding: 10px;\n      box-sizing: border-box;\n      color: #696969;\n    }\n  }\n  .dropDown {\n    position: relative;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    &:after {\n      content: "\u25bc";\n      display: flex;\n      position: absolute;\n      right: 8px;\n      font-size: 12px;\n    }\n    span {\n      width: 265px;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n  }\n\n  .dropDownContentWrapper {\n    box-shadow: 0px 0px 8px 0px #ccc;\n    margin-top: 3px;\n    .contentTop {\n      border: 0;\n      border-radius: 0;\n      border-bottom: 1px solid #ccc;\n      .selectAll {\n        height: 18px;\n        width: 18px;\n        color: #fff;\n        background: black;\n        display: flex;\n        justify-content: center;\n        font-size: 25px;\n        align-items: center;\n        padding-bottom: 5px;\n        box-sizing: border-box;\n        border-radius: 3px;\n        cursor: pointer;\n      }\n    }\n    .contentMiddle {\n      height: 160px;\n      overflow: hidden;\n      overflow-y: scroll;\n      .customCheckboxHolder {\n        position: relative;\n        border: 0;\n        border-bottom: 1px solid #ccc;\n        list-style: none;\n        border-radius: 0;\n        input {\n          height: 100%;\n          width: 100%;\n          position: absolute;\n          top: 0;\n          opacity: 0;\n          left: 0;\n          z-index: 1;\n          cursor: pointer;\n          &:checked {\n            & + .customCheckbox {\n              &:before {\n                background-color: black;\n              }\n              span {\n                color: cornflowerblue;\n                font-weight: bold;\n              }\n            }\n          }\n        }\n        .customCheckbox {\n          display: inline-block;\n          position: relative;\n          width: 100%;\n          transition: all 0.35s linear;\n          &:before {\n            content: "\u2713";\n            color: #fff;\n            font-size: 12px;\n            position: absolute;\n            width: 18px;\n            height: 18px;\n            line-height: 17px;\n            background-color: #fff;\n            text-align: center;\n            transition: all 0.35s linear;\n            border: 1px solid #000;\n            border-radius: 3px;\n            box-sizing: border-box;\n          }\n          span {\n            color: #000;\n            font-size: 14px;\n            margin-left: 30px;\n          }\n        }\n      }\n    }\n    .contentBottom {\n      height: 60px;\n      background: #fff;\n      display: flex;\n      justify-content: flex-end;\n      padding: 0 10px;\n      align-items: center;\n      button {\n        text-decoration: none;\n        font-weight: bold;\n        font-size: 16px;\n        cursor: pointer;\n        &.clearBtn {\n          color: darkslategrey;\n          margin-right: 30px;\n        }\n        &.submitBtn {\n          color: lightseagreen;\n          font-size: 18px;\n        }\n      }\n    }\n  }\n']);return h=function(){return n},n}var b=t(11).a.div(h()),f=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this,n))).toggleDropDown=function(){t.setState({searchable:!t.state.searchable})},t.allChecked=function(){var n=t.state.colors;n.map((function(n){return n.checked=!0})),t.setState({colors:n})},t.allUnChecked=function(){},t.handleChange=function(n){t.setState({filter:n.target.value})},t.inputChange=function(n){var e=t.state.colors,o=n.target,a=o.value,r=o.checked;console.log("Input",a,r),e.map((function(n){return[a].includes(n.value)&&(n.checked=!n.checked),n})),t.setState({colors:e})},t.printValue=function(){return t.state.colors.map((function(n){var e=n.value;console.log(e)}))},t.state={searchable:!1,filter:"",colors:[]},t}return Object(d.a)(e,n),Object(i.a)(e,[{key:"componentDidMount",value:function(){var n=this.props.colors;this.setState({colors:n})}},{key:"render",value:function(){var n=this,e=this.props,t=e.mainTitle,r=e.subTitleOne,c=e.subTitleTwo,l=this.state,i=l.filter,s=l.colors,u=i.toLowerCase(),d=s.filter((function(n){return Object.keys(n).some((function(e){return n[e].toLowerCase().includes(u)}))}));return a.a.createElement(b,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"innerContainer"},a.a.createElement("h1",null,t),a.a.createElement("h2",null,"Default"),a.a.createElement("div",{className:"dropDown",onClick:this.toggleDropDown},a.a.createElement("span",null,r)),this.state.searchable?a.a.createElement(o.Fragment,null,a.a.createElement("h2",null,c),a.a.createElement("input",{type:"text",placeholder:"Search",className:"searchBox",value:i,onChange:this.handleChange}),a.a.createElement("div",{className:"dropDownContentWrapper"},a.a.createElement("div",{className:"contentTop"},a.a.createElement("span",{className:"selectAll",onClick:this.allChecked},"-")),a.a.createElement("ul",{className:"contentMiddle"},d.map((function(e,t){return a.a.createElement("li",{className:"customCheckboxHolder",key:t},a.a.createElement("input",{type:"checkbox",id:e.id,value:e.color,className:"chkBox",checked:e.checked,onChange:function(e){return n.inputChange(e)}}),a.a.createElement("label",{className:"customCheckbox",htmlFor:e.id},a.a.createElement("span",{className:"labelValue",value:e.color},e.color)))}))),a.a.createElement("div",{className:"contentBottom"},a.a.createElement("button",{className:"clearBtn",href:"#",onClick:this.allUnChecked},"Clear"),a.a.createElement("button",{className:"submitBtn",href:"#",onClick:this.printValue},"Submit")))):null)))}}]),e}(o.Component),m=(t(24),function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this,n))).state={colors:[{color:"Red",id:"chk1",value:"red"},{color:"Blue",id:"chk2",value:"blue"},{color:"Green",id:"chk3",value:"green"},{color:"Black",id:"chk4",value:"black"},{color:"White",id:"chk5",value:"white"},{color:"Gray",id:"chk6",value:"gray"},{color:"Orange",id:"chk7",value:"orange"}]},t}return Object(d.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f,{colors:this.state.colors,mainTitle:"Dropdown with search",subTitleOne:"Colours",subTitleTwo:"Dropdown"}))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.282176f9.chunk.js.map