;!function(require, directRequire){;'use strict';const locales=require('./common/locales/index.js'),zh={1001:'\u53D1\u73B0\u680F\u5C0F\u7A0B\u5E8F\u4E3B\u5165\u53E3',1005:'\u9876\u90E8\u641C\u7D22\u6846\u7684\u641C\u7D22\u7ED3\u679C\u9875',1006:'\u53D1\u73B0\u680F\u5C0F\u7A0B\u5E8F\u4E3B\u5165\u53E3\u641C\u7D22\u6846\u7684\u641C\u7D22\u7ED3\u679C\u9875',1007:'\u5355\u4EBA\u804A\u5929\u4F1A\u8BDD\u4E2D\u7684\u5C0F\u7A0B\u5E8F\u6D88\u606F\u5361\u7247',1008:'\u7FA4\u804A\u4F1A\u8BDD\u4E2D\u7684\u5C0F\u7A0B\u5E8F\u6D88\u606F\u5361\u7247',1011:'\u626B\u63CF\u4E8C\u7EF4\u7801',1012:'\u957F\u6309\u56FE\u7247\u8BC6\u522B\u4E8C\u7EF4\u7801',1013:'\u624B\u673A\u76F8\u518C\u9009\u53D6\u4E8C\u7EF4\u7801',1014:'\u5C0F\u7A0B\u5E8F\u6A21\u7248\u6D88\u606F',1017:'\u524D\u5F80\u4F53\u9A8C\u7248\u7684\u5165\u53E3\u9875',1019:'\u5FAE\u4FE1\u94B1\u5305',1020:'\u516C\u4F17\u53F7 profile \u9875\u76F8\u5173\u5C0F\u7A0B\u5E8F\u5217\u8868',1022:'\u804A\u5929\u9876\u90E8\u7F6E\u9876\u5C0F\u7A0B\u5E8F\u5165\u53E3',1023:'\u5B89\u5353\u7CFB\u7EDF\u684C\u9762\u56FE\u6807',1024:'\u5C0F\u7A0B\u5E8F profile \u9875',1025:'\u626B\u63CF\u4E00\u7EF4\u7801',1026:'\u9644\u8FD1\u5C0F\u7A0B\u5E8F\u5217\u8868',1027:'\u9876\u90E8\u641C\u7D22\u6846\u641C\u7D22\u7ED3\u679C\u9875\u201C\u4F7F\u7528\u8FC7\u7684\u5C0F\u7A0B\u5E8F\u201D\u5217\u8868',1028:'\u6211\u7684\u5361\u5305',1029:'\u5361\u5238\u8BE6\u60C5\u9875',1030:'\u81EA\u52A8\u5316\u6D4B\u8BD5\u4E0B\u6253\u5F00\u5C0F\u7A0B\u5E8F',1031:'\u957F\u6309\u56FE\u7247\u8BC6\u522B\u4E00\u7EF4\u7801',1032:'\u624B\u673A\u76F8\u518C\u9009\u53D6\u4E00\u7EF4\u7801',1034:'\u5FAE\u4FE1\u652F\u4ED8\u5B8C\u6210\u9875',1035:'\u516C\u4F17\u53F7\u81EA\u5B9A\u4E49\u83DC\u5355',1036:'App \u5206\u4EAB\u6D88\u606F\u5361\u7247',1037:'\u4ECE\u5C0F\u7A0B\u5E8F\u8FDB\u5165',1038:'\u4ECE\u5C0F\u7A0B\u5E8F\u8FD4\u56DE',1039:'\u6447\u7535\u89C6',1042:'\u6DFB\u52A0\u597D\u53CB\u641C\u7D22\u6846\u7684\u641C\u7D22\u7ED3\u679C\u9875',1043:'\u516C\u4F17\u53F7\u6A21\u677F\u6D88\u606F',1044:'\u5E26 shareTicket \u7684\u5C0F\u7A0B\u5E8F\u6D88\u606F\u5361\u7247',1045:'\u670B\u53CB\u5708\u5E7F\u544A',1047:'\u626B\u63CF\u5C0F\u7A0B\u5E8F\u7801',1048:'\u957F\u6309\u56FE\u7247\u8BC6\u522B\u5C0F\u7A0B\u5E8F\u7801',1049:'\u624B\u673A\u76F8\u518C\u9009\u53D6\u5C0F\u7A0B\u5E8F\u7801',1052:'\u5361\u5238\u7684\u9002\u7528\u95E8\u5E97\u5217\u8868',1053:'\u641C\u4E00\u641C\u7684\u7ED3\u679C\u9875',1054:'\u9876\u90E8\u641C\u7D22\u6846\u5C0F\u7A0B\u5E8F\u5FEB\u6377\u5165\u53E3',1056:'\u97F3\u4E50\u64AD\u653E\u5668\u83DC\u5355',1057:'\u94B1\u5305\u4E2D\u7684\u94F6\u884C\u5361\u8BE6\u60C5\u9875',1058:'\u516C\u4F17\u53F7\u6587\u7AE0',1059:'\u4F53\u9A8C\u7248\u5C0F\u7A0B\u5E8F\u7ED1\u5B9A\u9080\u8BF7\u9875',1064:'\u5FAE\u4FE1\u8FDEWifi\u72B6\u6001\u680F',1067:'\u516C\u4F17\u53F7\u6587\u7AE0\u5E7F\u544A',1068:'\u9644\u8FD1\u5C0F\u7A0B\u5E8F\u5217\u8868\u5E7F\u544A',1069:'\u79FB\u52A8\u5E94\u7528',1071:'\u94B1\u5305\u4E2D\u7684\u94F6\u884C\u5361\u5217\u8868\u9875',1072:'\u4E8C\u7EF4\u7801\u6536\u6B3E\u9875\u9762',1073:'\u5BA2\u670D\u6D88\u606F\u5217\u8868\u4E0B\u53D1\u7684\u5C0F\u7A0B\u5E8F\u6D88\u606F\u5361\u7247',1074:'\u516C\u4F17\u53F7\u4F1A\u8BDD\u4E0B\u53D1\u7684\u5C0F\u7A0B\u5E8F\u6D88\u606F\u5361\u7247',1077:'\u6447\u5468\u8FB9',1078:'\u8FDEwifi\u6210\u529F\u9875',1079:'\u5FAE\u4FE1\u6E38\u620F\u4E2D\u5FC3',1081:'\u5BA2\u670D\u6D88\u606F\u4E0B\u53D1\u7684\u6587\u5B57\u94FE',1082:'\u516C\u4F17\u53F7\u4F1A\u8BDD\u4E0B\u53D1\u7684\u6587\u5B57\u94FE',1089:'\u5FAE\u4FE1\u804A\u5929\u4E3B\u754C\u9762\u4E0B\u62C9',1090:'\u957F\u6309\u5C0F\u7A0B\u5E8F\u53F3\u4E0A\u89D2\u83DC\u5355\u5524\u51FA\u6700\u8FD1\u4F7F\u7528\u5386\u53F2',1091:'\u516C\u4F17\u53F7\u6587\u7AE0\u5546\u54C1\u5361\u7247',1092:'\u57CE\u5E02\u670D\u52A1\u5165\u53E3',1095:'\u5C0F\u7A0B\u5E8F\u5E7F\u544A\u7EC4\u4EF6',1096:'\u804A\u5929\u8BB0\u5F55',1097:'\u5FAE\u4FE1\u652F\u4ED8\u7B7E\u7EA6\u9875',1102:'\u670D\u52A1\u53F7 profile \u9875\u670D\u52A1\u9884\u89C8',version:20180703},en={1001:'The main entry to the Mini Program in Discover',1005:'Search result page of the Search box on the top',1006:'Search result page for the Search box of the main entry to the Mini Program in the Discover',1007:'Mini Program message card in a single chat session',1008:'Mini Program message card in a group chat session',1011:'Scan QR code',1012:'Press and hold on the picture to identify QR code',1013:'Select QR code from the photo album',1014:'Mini Program template message',1017:'Go to the entry page of the trial version',1019:'WeChat Wallet',1020:'Related Mini Program list for the profile page of the Official Account',1022:'Set the entry to Mini Program sticky on the top of the chat page',1023:'Desktop icon for Android system',1024:'Profile page of the Mini Program',1025:'Scan one-dimensional code',1026:'List of nearby Mini Programs',1027:'"Mini Programs Recently Used " list on the search result page of Search box on the top',1028:'My Cards',1029:'Card and Coupon Details Page',1030:'Open the Mini Program under automated test',1031:'Press and hold on the picture to identify one-dimensional code',1032:'Select one-dimensional code from the photo album',1034:'WeChat Pay completion page',1035:'Custom menu for the Official Account',1036:'App sharing message card',1037:'Enter from Mini Program',1038:'Return from Mini Program',1039:'Shake TV',1042:'Search result page of the search box for adding contacts',1043:'Official Account template message',1044:'Mini Program message card with shareTicket',1045:'Advertisement in the Moments',1047:'Scan Mini Program code',1048:'Press and hold on the picture to identify Mini Program code',1049:'Select Mini Program code from the photo album',1052:'List of applicable stores for card and coupons',1053:'Search result page',1054:'Shortcut entry to Mini Program in Search box on the top',1056:'Music Player Menu',1057:'Bank Card details page in the Wallet',1058:'Article of the Official Account',1059:'Trial version of the Mini Program binding invitation page',1064:'Status bar of WeChat Wifi connection',1067:'Official Account article advertisement',1068:'Advertisement for nearby Mini Program list',1069:'Mobile Application',1071:'Page of Bank cards list in the Wallet',1072:'QR code collection page',1073:'Mini Program message card sent by the Customer Service message list',1074:'Mini Program message card sent by the Official Account session',1077:'Shake around',1078:'Wifi connection success page',1079:'WeChat Game Center',1081:'The text chain sent by the Customer Service message',1082:'The text chain sent by the Official Account session',1089:'WeChat chat main interface drop-down',1090:'Press and hold the Menu on the upper right corner of the Mini Program to evoke the most recent use history',1091:'Commodity card for the Official Account article',1092:'Entry to City Service',1095:'Advertisement component for the Mini Program',1096:'Chat History',1097:'WeChat Pay contract page',1102:'Service preview for service number profile page',version:20180703};module.exports={get sceneMap(){return'zh'===locales.getLocale()?zh:en}};
;}(require("lazyload"), require);
