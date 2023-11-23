const express = require('express')
const app = express()
const {MongoClient, ObjectId} = requre('mongodb');

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// <form>에서 PUT, DELETE 요청할 때 (npm i method-override 설치 필요함)
// ex. <form action="/edit?_method=PUT" method="POST"> </form> 
const methodOverride = require('method-override')
app.use(methodOverride('_method')) 

//mongodb 라이브러리 세팅 코드
const { MongoClient } = require('mongodb')

let db
const url = 'mongodb사이트에 있던 DB 접속 URL'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum') // forum db 연결
}).catch((err)=>{
  console.log(err)
})


//글 작성 페이지 이동
app.get('/write', (req,res) => {
	res.render('write.ejs')
})

//서버에서 유저의 POST 기능 처리
app.use(express.json())
app.use(express.urlencoded({extended:true})) //- req.body 쓰는데 필수

app.post('/요청보낸URL', async (req,res) => {
	req.body// - 유저가 보낸 데이터 출력
	try {
        if(req.body.title == '') {
            res.send('제목이 없습니다.')
        } else {
            awiat db.collection('post').insertOne({~~}) // 데이터~~ 는 object 형식으로 넣어야함 { ~~ }
            res.redirect('/처리후 이동할 URL')
        }
    } catch (e) {
        res.status(500).send('Server ERR')
    }
})

//상세페이지 : /aaa 에 접속하면 DB에서 찾아서 ejs파일에 박아서 보내줌
app.get('/write/ : id', async(req,res) => {
    try {
        let result = awiat db.collection('post').findOne({ _id :  new ObjecteID('id')}) // new ObjecteID('') - db 에 존재하는 식별 번호
        if(result == null) {
            res.status(400).send('이상한 URL 입력함')
        }
        res.render('write.ejs', {result = result}) // write.ejs 파일에 박아서 보내줌
        
    } catch (e) {
        console.log(e)
        res.status(400).send('이상한 URL 입력함')
    }
})

//글 수정
app.get('/edit/ : id', async(req,res) => {
    try {
        let result = awiat db.collection('post').findOne({ _id :  new ObjecteID(req.params.id)}) // new ObjecteID('') - db 에 존재하는 식별 번호
        if(result == null) {
            res.status(400).send('이상한 URL 입력함')
        }
        res.render('edit.ejs', {result = result}) // edit.ejs 파일에 박아서 보내줌, result.title & result.content 등
        
    } catch (e) {
        console.log(e)
        res.status(400).send('이상한 URL 입력함')
    }
})

app.post('/edit/', async(req,res) => {
    try {
        let result = awiat db.collection('post').updateOne({ _id :  new ObjecteID(req.params.id)} , // new ObjecteID('') - db 에 존재하는 식별 번호
        {$set : { title : req.body.title, content : req.body.content }}) //$set : 덮어쓰기
            res.status(400).send('이상한 URL 입력함') // 400 - 원하는 에러 메세지
        }
        응답.redirect('/list')
        
    } catch (e) {
        console.log(e)
        res.status(400).send('이상한 URL 입력함')
    }
})

//글 삭제 - ejs 파일 내 <body> 하단 부
<script>
for (let i = 0; i < '<%= 글목록.length %>'; i++) {
    document.querySelectorAll('.delete')[0].addEventListener('click', function(){ //querySelector-원하는 html 요소를 찾기, addEventListener-클릭시 실행할 코드를 입력
      fetch('/delete?docid=삭제할 게시물id', { // fetch() - AJAX 요청, 새로고침 없이 GET 요청 날림
          method : 'DELETE'
      }).then((r)=>{
        if(r.status == 200) {
          return r.json()
        } else {
          //서버가 에러코드전송시 실행할코드
        }
      })
      .then((result)=>{ 
        //성공시 실행할코드
      }).catch((error)=>{
        //인터넷문제 등으로 실패시 실행할코드
      })
    })
}
</script>

// server
app.delete('/delete', async(req,res) => {
    await db.collection('post').deleteOne({ _id : new ObjectId(req.query.docid)})
})

//
//회원가입 - 이름, 아이디, 비밀번호, 비밀번호 확인, 전화번호 - mysql
//

// 필요한 모듈 import
const express = require('express');
const mysql = require('mysql');

// Express 애플리케이션 생성
const app = express();

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: '사용자명',
  password: '비밀번호',
  database: '데이터베이스명'
});

// MySQL 연결
connection.connect(err => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL 연결 성공');
  }
});

// POST 요청 처리를 위한 미들웨어 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 회원가입 요청 처리 - mysql
app.post('/signup', (req, res) => {
    const { name, id, password, confirmPassword, phoneNumber } = req.body;
// 다른 회원의 아이디와 중복 여부 확인
const checkDuplicateQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(checkDuplicateQuery, [username], (err, rows) => {
    if (err) {
        console.error('회원 중복 확인 오류:', err);
        return res.status(500).json({ error: '회원 중복 확인에 실패했습니다.' });
    }
    // 중복된 아이디가 이미 존재하는 경우
    if (rows.length > 0) { 
        return res.status(409).json({ error: '이미 사용 중인 아이디입니다.' });
    }

  // 비밀번호 확인
    if (password !== confirmPassword) {
    return res.status(400).json({ error: '비밀번호가 일치하지 않습니다.' });
    }
  
  // 비밀번호 해싱
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('비밀번호 해싱 오류:', err);
        return res.status(500).json({ error: '비밀번호 해싱에 실패했습니다.' });
      }

  // 회원가입 정보를 데이터베이스에 저장
    const query = 'INSERT INTO users (name, id, password, phoneNumber) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, id, hashedPassword, phoneNumber], (err, result) => {
    if (err) {
    console.error('회원가입 오류:', err);
    return res.status(500).json({ error: '회원가입에 실패했습니다.' });
    }
    res.status(200).json({ message: '회원가입이 완료되었습니다.' });
    });
});

// 회원가입 처리 - passport 라이브러리 사용
//npm install express-session passport passport-local 
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(passport.initialize())
app.use(session({
  secret: '암호화에 쓸 비번', // session 암호화, 이거 털리면 개인정보 다털림
  resave : false, // 유저가 서버로 요청할 때마다 세션 갱신 여부
  saveUninitialized : false // 유저가 로그인 안해도 세션 만들것인지 여부
}))

app.use(passport.session()) 
//로그인 페이지 띄워주기
app.get('/login', async (req, res)=>{
  res.render('login.ejs')
}) 

// 비밀번호 DB 저장시 Hashing 하기
// npm install bcrypt - 해싱 라이브러리
const bcrypt = require('bcrypt') 

//passport 라이브러리 - DB 내 존재하는 아이디 비밀번호 검증(Hashing)
passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  let result = await db.collection('user').findOne({ username : 입력한아이디})
  if (!result) {
    return cb(null, false, { message: '아이디 DB에 없음' })
  }

  if (await bcrypt.compare(입력한비번, result.password)) { // Hashing 한 상태로 비교
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비번불일치' });
  }
})) 

//세션 만들기
passport.serializeUser((user, done) => { // 로그인 성공시 세션 자동 생성
  process.nextTick(() => {
    done(null, { id: user._id, username: user.username })
  })
})

passport.deserializeUser( async (user, done) => { // 유저가 보낸 쿠키 분석
  let result = await db.collection('user').findOne({_id : new ObjectId(user.id) }) // DB조회 후 최신 유저 정보 반영
  delete result.password // 보안 위해서 비밀번호 정보는 삭제
  process.nextTick(() => {
    return done(null, result)
  })
})

// 로그인시 예외처리
app.post('/login', async (req, res, next) => {
  passport.authenticate('local', (error, user, info) => { // error - 에러 발생 여부, user - 성공시 해당 유저의 정보, info - 에러의 정보
      if (error) return res.status(500).json(error)
      if (!user) return res.status(401).json(info.message) // info.message - 위에 적은 잘못된 아이디, 잘못된 비밀번호 등
      req.logIn(user, (err) => { // session 만들기 시작
        if (err) return next(err)
        res.redirect('/') // 로그인 완료시 실행할 코드
      })
  })(req, res, next)
}) 


// 서버 시작
app.listen(3000, () => { // 포트번호 수정필요
  console.log('서버가 3000 포트에서 실행 중입니다.');
});




//
// 누적 회원수, 방문자수 (접속자 수??) - mysql
//

// 필요한 모듈 import
const express = require('express');
const mysql = require('mysql');
const path = require('path'); // 메인화면 위젯으로 사용할때 필요

// Express 애플리케이션 생성
const app = express();

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: '사용자명',
  password: '비밀번호',
  database: '데이터베이스명'
});

// MySQL 연결
connection.connect(err => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL 연결 성공');
  }
});

// 회원 수
app.get('/memberCount', (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM users';
  connection.query(query, (err, result) => {
    if (err) {
      console.error('회원 수 조회 오류:', err);
      return res.status(500).json({ error: '회원 수 조회에 실패했습니다.' });
    }
    const count = result[0].count;
    res.status(200).json({ count });
  });
});

// 누적 방문자
let visitorCount = 0; // 누적 방문자 수 변수 초기화
app.get('/visitorCount', (req, res) => {
  visitorCount++; // 방문자 수 증가
  res.status(200).json({ count: visitorCount });
});

// 메인 홈 페이지 렌더링 - 위젯으로 사용할때
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.js'));
  });

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000 포트에서 실행 중입니다.');
});


//위젯으로 사용할 때
//에러 메세지 안띄울거면 .catch 부분 빼도됨
<script>
fetch('/memberCount')
  .then(response => response.json())
  .then(data => {
    document.getElementById('memberCount').textContent = data.count;
  })
  .catch(error => {
    console.error('회원 수 조회 오류:', error);
    document.getElementById('memberCount').textContent = '오류 발생';
  });

fetch('/visitorCount')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitorCount').textContent = data.count;
  })
  .catch(error => {
    console.error('방문자 수 조회 오류:', error);
    document.getElementById('visitorCount').textContent = '오류 발생';
  });
</script>

// 환경변수 
//npm install dotenv -> .env 파일 생성
require('dotenv').config()
