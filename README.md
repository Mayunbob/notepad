// Emotion表
sequelize model:generate --name Emotion --attributes id:integer,name:string,explain:text

// Service表
sequelize model:generate --name Service --attributes id:integer,appId:integer,code:string,stype:string,name:string,logoImage:text,iconImage:text,tags:string,intro:text,info:text,content:text,weigh:integer,useSwitch:integer,adminId:integer,stypeText:text,logoImageUrl:text,iconImageUrl:text 

// Event表
sequelize model:generate --name Event --attributes datetime:string,nowLocation:string,explain:text,emotionName:string,event:text,influence:text,improvement:text,tag:text,reason:text
