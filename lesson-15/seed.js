// seed.js
"use strict";

const subscriber = require("./models/subscriber");

/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기
const mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");


// 데이터베이스 연결 설정
mongoose.connect(
  "mongodb+srv://ut-node:LHqb6PmC4FPXwL18@ut-node.kv6iahy.mongodb.net/?retryWrites=true&w=majority&appName=UT-NODE",
  { useNewUrlParser: true}
);

mongoose.connection;

// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "asdas",
    email: "eqw",
    phoneNumber: "asdsa",
  },
  {
    name: "trfh",
    email: "tyryt",
    phoneNumber: "sfdf",
  },
  {
    name: "yiuhj",
    email: "gfjh",
    phoneNumber: "fhjf",
  },
  {
    name: "fjhj",
    email: "reh",
    phoneNumber: "fhdg",
  },
  {
    name: "pill-gyu",
    email: "pi@ssd.com",
    phoneNumber: "1102",
  },
  {
    name: "대재학",
    email: "tiyyg",
    phoneNumber: "cncj",
  },
];

// 기존 데이터 제거
Subscriber.deleteMany()
  .exec()
  .then(()=>{
    console.log("sub is succes!");
  });


var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(s => {
  commands.push(
    Subscriber.create({
      name: s.name,
      email: s.email,
      phoneNumber: s.phoneNumber
    })
  );
});

// 프라미스 생성 후 로깅 작업
Promise.all(commands)
  .then((r) =>{
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(e => {
    console.log(`error: ${e}`);
  });
