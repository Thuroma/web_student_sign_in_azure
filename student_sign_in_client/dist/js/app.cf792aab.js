(function(){"use strict";var t={6224:function(t,e,n){var d=n(9963),r=n(6252);const s={id:"app"};function u(t,e,n,d,u,a){const l=(0,r.up)("new-student-form"),o=(0,r.up)("student-table"),i=(0,r.up)("student-message");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(l,{onStudentAdded:a.newStudentAdded},null,8,["onStudentAdded"]),(0,r.Wm)(o,{students:u.students,onStudentArrivedOrLeft:a.studentArrivedOrLeft,onDeleteStudent:a.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),(0,r.Wm)(i,{student:u.mostRecentStudent},null,8,["student"])])}var a=n(3577);const l={key:0,class:"alert alert-danger"},o={class:"card add-student m-2 p-2"},i=(0,r._)("h4",{class:"card-title"},"Add new student",-1),c={class:"form-group"},f=(0,r._)("label",{for:"name"},"Name",-1),h={class:"form-group"},A=(0,r._)("label",{for:"starID"},"Star ID",-1);function S(t,e,n,s,u,S){return(0,r.wg)(),(0,r.iD)("div",null,[u.errors.length>0?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.errors,(t=>((0,r.wg)(),(0,r.iD)("li",null,(0,a.zw)(t),1)))),256))])])):(0,r.kq)("",!0),(0,r._)("div",o,[i,(0,r._)("div",c,[f,(0,r.wy)((0,r._)("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>u.newStudentName=t)},null,512),[[d.nr,u.newStudentName,void 0,{trim:!0}]])]),(0,r._)("div",h,[A,(0,r.wy)((0,r._)("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>u.newStarID=t)},null,512),[[d.nr,u.newStarID,void 0,{trim:!0}]])]),(0,r._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>S.addStudent&&S.addStudent(...t))},"Add")])])}n(7658);var w={name:"NewStudentForm",emits:["student-added"],data(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent(){if(this.errors=[],this.newStudentName||this.errors.push("Student name must be entered."),this.newStarID||this.errors.push("StarID must be entered."),0==this.errors.length){let t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},m=n(3744);const p=(0,m.Z)(w,[["render",S]]);var v=p;const k={key:0},g={key:0,class:"alert alert-success"},D={key:1,class:"alert alert-info"};function b(t,e,n,d,s,u){return(0,r.wg)(),(0,r.iD)("div",null,[n.student.name?((0,r.wg)(),(0,r.iD)("div",k,[n.student.present?((0,r.wg)(),(0,r.iD)("div",g," Welcome, "+(0,a.zw)(n.student.name),1)):((0,r.wg)(),(0,r.iD)("div",D," Goodbye, "+(0,a.zw)(n.student.name)+". See you later! ",1))])):(0,r.kq)("",!0)])}var Z={name:"StudentMessage",props:{student:Object}};const I=(0,m.Z)(Z,[["render",b]]);var O=I;const y={class:"card student-list m-2 p-2"},J=(0,r._)("h4",{class:"card-title"},"Student List",-1),T={class:"edit-table-toggle form-check"},U=(0,r._)("label",{for:"edit-table",class:"form-check-label"},"Edit Table",-1),M={id:"student-table"},C={class:"table"},B=(0,r._)("th",null,"Name",-1),W=(0,r._)("th",null,"StarID",-1),Y=(0,r._)("th",null,"Present?",-1);function j(t,e,n,s,u,a){const l=(0,r.up)("student-row");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",y,[J,(0,r._)("div",T,[(0,r.wy)((0,r._)("input",{type:"checkbox",id:"edit-table",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=t=>u.editTable=t)},null,512),[[d.e8,u.editTable]]),U]),(0,r._)("div",M,[(0,r._)("table",C,[(0,r._)("tr",null,[B,W,Y,(0,r.wy)((0,r._)("th",null,"Delete",512),[[d.F8,u.editTable]])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(t=>((0,r.wg)(),(0,r.j4)(l,{student:t,key:t.starID,edit:u.editTable,onStudentArrivedOrLeft:a.arrivedOrLeft,onDeleteStudent:a.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])))),128))])])])])}var F="data:image/png;base64,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";const E=["checked"];function Q(t,e,n,s,u,l){return(0,r.wg)(),(0,r.iD)("tr",{class:(0,a.C_)({present:n.student.present,absent:!n.student.present})},[(0,r._)("td",null,(0,a.zw)(n.student.name),1),(0,r._)("td",null,(0,a.zw)(n.student.starID),1),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=t=>l.arrivedOrLeft(n.student,t.target.checked))},null,40,E)]),(0,r.wy)((0,r._)("td",null,[(0,r._)("img",{onClick:e[1]||(e[1]=(...t)=>l.deleteStudent&&l.deleteStudent(...t)),src:F})],512),[[d.F8,n.edit]])],2)}var R={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(){confirm(`Delete ${this.student.name}?`)&&this.$emit("delete-student",this.student)}}};const V=(0,m.Z)(R,[["render",Q],["__scopeId","data-v-4c8479f5"]]);var N=V,q={name:"StudentTable",components:{StudentRow:N},emits:["student-arrived-or-left"],props:{students:Array},data(){return{editTable:!1}},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(t){this.$emit("delete-student",t)}}};const z=(0,m.Z)(q,[["render",j]]);var X=z,G={name:"App",components:{NewStudentForm:v,StudentMessage:O,StudentTable:X},data(){return{students:[],mostRecentStudent:{}}},mounted(){this.updateStudents()},methods:{updateStudents(){this.$student_api.getAllStudents().then((t=>{this.students=t})).catch((()=>alert("Unable to fetch student list")))},newStudentAdded(t){this.$student_api.addStudent(t).then((()=>{this.updateStudents()})).catch((t=>{let e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft(t,e){t.present=e,this.$student_api.updateStudent(t).then((()=>{this.mostRecentStudent=t,this.updateStudents()})).catch((()=>alert("Unable to update student")))},studentDeleted(t){this.$student_api.deleteStudent(t.id).then((()=>{this.updateStudents(),this.mostRecentStudent={}})).catch((()=>alert("Unable to delete student")))}}};const L=(0,m.Z)(G,[["render",u]]);var H=L,K=n(6154);let P="/api/students";var x={getAllStudents(){return K.Z.get(P).then((t=>t.data))},addStudent(t){return K.Z.post(P,t).then((t=>t.data))},updateStudent(t){return K.Z.patch(`${P}/${t.id}`,t).then((t=>t.data))},deleteStudent(t){return K.Z["delete"](`${P}/${t}`).then((t=>t.data))}};let _=(0,d.ri)(H);_.config.globalProperties.$student_api=x,_.mount("#app")}},e={};function n(d){var r=e[d];if(void 0!==r)return r.exports;var s=e[d]={exports:{}};return t[d].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,d,r,s){if(!d){var u=1/0;for(i=0;i<t.length;i++){d=t[i][0],r=t[i][1],s=t[i][2];for(var a=!0,l=0;l<d.length;l++)(!1&s||u>=s)&&Object.keys(n.O).every((function(t){return n.O[t](d[l])}))?d.splice(l--,1):(a=!1,s<u&&(u=s));if(a){t.splice(i--,1);var o=r();void 0!==o&&(e=o)}}return e}s=s||0;for(var i=t.length;i>0&&t[i-1][2]>s;i--)t[i]=t[i-1];t[i]=[d,r,s]}}(),function(){n.d=function(t,e){for(var d in e)n.o(e,d)&&!n.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,d){var r,s,u=d[0],a=d[1],l=d[2],o=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var i=l(n)}for(e&&e(d);o<u.length;o++)s=u[o],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(i)},d=self["webpackChunkstudent_sign_in"]=self["webpackChunkstudent_sign_in"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=n.O(void 0,[998],(function(){return n(6224)}));d=n.O(d)})();
//# sourceMappingURL=app.cf792aab.js.map