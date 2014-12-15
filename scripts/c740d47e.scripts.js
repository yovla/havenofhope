"use strict";angular.module("hoh",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap","ui.bootstrap.transition"]).config(["$routeProvider",function(a){a.when("/:lang/:page/:subPage",{templateUrl:"views/pixel.html",controller:"PixelCtrl"}),a.otherwise({redirectTo:"/en/home/h"})}]);var hoh=angular.module("hoh.controllers",[]);hoh.controller("Main",["$scope","$location","$routeParams","langService",function(a,b,c,d){d.setDict(c.lang),d.setPage(b.path().split("/")[2]),a.page=c.page,a.lang=d.getDict(),a.langDict=d.getLangDict(),a.tab=c.tab,a.href=function(a,c){console.log("HREF:",a,c);var d="/"+a+c;b.path(d),b.hash("top"),$anchorScroll()},a.activeIf=function(b){var c="";return b===a.path()&&(c="active"),c}}]),angular.module("hoh.directives",[]).directive("appVersion",["version",function(a){return function(b,c){c.text(a)}}]),angular.module("hoh.filters",[]).filter("interpolate",["version",function(a){return function(b){return String(b).replace(/\%VERSION\%/gm,a)}}]),angular.module("hoh").service("langService",function(){console.log("Service is ok");var a={en:{},fr:{}};a.en.next="fr",a.fr.next="en",a.en.nextLabel="Français",a.fr.nextLabel="English",a.en.lang="en",a.fr.lang="fr",a.en.french="French",a.fr.french="Français",a.en.english="English",a.fr.english="Anglais",a.en.more="more",a.fr.more="plus",a.en.name="Haven Of Hope",a.fr.name="Havre d'Espérance",a.en.subtitle="Counselling And Rehabilitation Of Teenage Mothers",a.fr.subtitle="Relation d'Aide et Réintégration de Jeunes-filles-mères",a.en.welcome="Welcome",a.fr.welcome="Bienvenue",a.en.introduction="We are an independent, nonprofit, nonpartisan and nonsectarian charity foundation in Cameroon, created by a group of benevolent friends whose aim is to contribute in a tangible manner, to improve the living conditions of teenage mothers, who may have lost interest in active life due to unexpected motherhood.",a.fr.introduction="Havre d'Espérance est une fondation caritative, indépendente, à but non lucratif, non partisan et non confessionnel avec le siège administratif au Cameroun, crée par un groupe d'amis bienveillants dont le but est de contribuer de manière tangible, à améliorer les conditions de vie des jeunes-filles-méres adolescentes, qui peuvent avoir perdu tout intérêt dans la vie active en raison d'une maternité précoce ou inattendue.  ",a.en.viewdetails="Learn More",a.fr.viewdetails="En détail",a.en.callus="Please call or email us at:",a.fr.callus="S'il vous plaît appelez ou écrivez-nous à:",a.en.bulletinlabel="Monthly Newsletters",a.fr.bulletinlabel="Bulletins d'Information",a.en.meettheteam="Meet The Team",a.fr.meettheteam=a.en.meettheteam,a.en.teenmothers="Teen Mothers",a.fr.teenmothers=a.en.teenmothers,a.en.moneytransfer="Money Transfer",a.fr.moneytransfer="Transfert d'argent",a.en.bank="Bank",a.fr.bank="Banque",a.en.headquarter="Headquarter",a.fr.headquarter="Siège sociale",a.en.office="Branch Office",a.fr.office="Agence de",a.en.bankcode="Bank Code",a.fr.bankcode="Code Banque",a.en.bankbranchcode="Branch Code",a.fr.bankbranchcode="Code Guichet",a.en.bankaccountnumber="Account Number",a.fr.bankaccountnumber="Numéro de Compte",a.en.bankkey="Key",a.fr.bankkey="Clé",a.en.bankswiftcode="Swift Code",a.fr.bankswiftcode="Code Swift",a.en.beneficiary="Beneficiary",a.fr.beneficiary="Bénéficiaire",a.en.july2013={label:"Bulletin July 2013",url:"media/PDF%20English/BULLETIN%2007-2013.pdf"},a.fr.july2013={label:"Bulletin Julliet 2013",url:"media/PDF%20French/BULLETIN%2007-2013.pdf"},a.en.nov2013={label:"Presentation To Charismagex Nov 2013",url:"media/PDF English/REPORT 12-2013 EN.pdf"},a.fr.nov2013={label:"Présentation À Charismagex Nov 2013",url:"media/PDF French/REPORT 12-2013 FR.pdf"},a.en.dec2013={label:"Bulletin December 2013",url:"media/PDF English/BULLETIN 12-2013 EN.pdf"},a.fr.dec2013={label:"Bulletin Decembre 2013",url:"media/PDF French/BULLETIN 12-2013 FR.pdf"},a.en.donatemessage="Your donation directly helps teen mothers in need and it keeps our charity alive. Donate now to help teen mothers gain the tools to become financially secure.",a.fr.donatemessage="Votre don est destiné à aider les mères adolescentes qui sont dans le besoin, et assure la pérennité de notre  œuvre caritative. Faites un don maintenant et aider une mère adolescente à obtenir les outils nécessaires pour assurer son autonomie financière.",a.en.joinusmessage="If you are a teen mother and you're ready to build your future, come join us! We will help you gain the skills, tools, and confidence you need to succeed.",a.fr.joinusmessage="Etes-vous une mère adolescente ? Désirez vous construire votre avenir ? Rejoignez nous donc ! Nous vous aiderons à acquérir les connaissances techniques et la confiance nécessaire pour réussir.",a.en.joinus="Join Us",a.fr.joinus="Rejoignez-nous",a.en.volunteermessage="We are always looking for volunteers to help teach classes and grow our charity. If you want to make a real difference in young womens lives, volunteer today!",a.fr.volunteermessage="Nous recherchons des volontaires pour donner des cours, et aider à développer nos  actions caritatives. Désirez-vous faire la différence dans la vie d'une jeune-fille-mère? Prenez contacte avec nous dès suite.  Appelez ou écrivez nous à: admin@havenofhopetm.org",a.en.volunteer="Volunteer",a.fr.volunteer="Volontaire",a.en.donate="Donate",a.fr.donate="Faites un Don",a.en.donatemessagelong="Your donation directly helps teen mothers in need. We thank you for making a difference in young womens lives. If you have any questions, please email us at:",a.fr.donatemessagelong="Votre don sert uniquement à aider les jeunes-filles-mères dans le besoin. Nous vous remercions de faire la différence dans la vie des mères adolescentes. Si vous avez des questions écrivez-nous à notre mél: admin@havenofhopetm.org",a.en.annual2014={label:"Annual Report 2014",url:"media/PDF English/annualreport-2014.pdf"},a.en.annual2013={label:"Annual Report 2013",url:"media/PDF English/ANNUAL 2013 v2 EN.pdf"},a.fr.annual2013={label:"Rapport Annuel 2013",url:"media/PDF French/ANNUAL 2013 v2 FR.pdf"},a.en.march2013={label:"Bulletin March 2013",url:"media/PDF%20English/BULLETIN%2003-2013.pdf"},a.fr.march2013={label:"Bulletin Mars 2013",url:"media/PDF%20French/BULLETIN%2003-2013.pdf"},a.en.objectivelabel="Objectives",a.fr.objectivelabel="LES OBJECTIFS",a.en.objectivesummary="In order to achieve our goals, the following objectives have been set",a.fr.objectivesummary="Les objectifs de HAVEN OF HOPE (HOH) (Havre d'Espérance) sont les suivants:",a.en.objective1={label:"Self Confidence",text:"To help single teenage mothers who are finding it difficult to cope with life as a result of unprepared motherhood to regain self confidence and self esteem through counselling sessions"},a.fr.objective1={label:"Estime de Soi",text:"Aider les jeunes-filles-mères célibataires qui ont du mal à faire face à la vie en raison d'une maternité précoce et non préparée à reprendre confiance en elles et de l'estime de soi grâce à des séances d'écoutes et de conseils."},a.en.objective2={label:"Financial Security",text:"To motivate young teenage mothers who are facing financial difficulties as a result of unprepared motherhood to learn a trade which will enable them to become self-sufficient"},a.fr.objective2={label:"Autonomie Financière",text:"Motiver les mères adolescentes qui sont confrontées à des difficultés financières en raison de leur maternité précoce à apprendre un métier qui leur permettra de devenir autonomes."},a.en.objective3={label:"Vocational Training",text:"To assess their potential skills and assist them to gain vocational training in view of becoming self reliant"},a.fr.objective3={label:"Formation Professionnelle",text:"Évaluer leurs compétences potentielles et les aider à acquérir une formation professionnelle en vue de devenir autonomes."},a.en.objective4={label:"Entrepreneurship",text:"To help those who have received training set up their own businesses in view of their reintegration into community life"},a.fr.objective4={label:"Esprit D'Entreprise",text:"Aider celles qui ont reçu une formation à démarrer leurs propres affaires en vue de leur réinsertion dans la vie de la communauté."},a.en.objective5={label:"Hope",text:"To counsel teenage pregnant girls who are in a state of dispair due to unexpected or unwanted pregnancy to enable them come to terms with their condition"},a.fr.objective5={label:"S'Accepter",text:"Conseiller les adolescentes enceintes qui sont dans un état de désespoir en raison de la grossesse inattendue et non-désirée pour leur permettre à se réconcilier avec leur état."};var b={dict:a.en},c="home";return{getLangDict:function(){return a},getDict:function(){return b},setDict:function(c){b.dict=a[c]},getPage:function(){return c},setPage:function(a){c=a}}}),angular.module("hoh").controller("MainCtrl",["$scope","$location","$routeParams","langService","Pixel",function(a,b,c,d,e){console.log("RouteParams",c),a.data=e.data,d.setDict(a.language),a.lang=d.getDict(),a.langDict=d.getLangDict()}]),angular.module("hoh").controller("PixelCtrl",["$scope","$location","$anchorScroll","$routeParams","Pixel","langService",function(a,b,c,d,e,f){console.log("PIXEL: routeParams",d),e.data.page=d.page,e.data.subPage=d.subPage,e.data.lang=d.lang,f.setDict(d.lang),c()}]),angular.module("hoh").service("Pixel",function(){var a={data:{}};return a.data.date=new Date,a.data.page="",a.data.subPage="",a.data.lang="",a});