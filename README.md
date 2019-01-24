# The intership's homework

นาย วชิรวิทย์ เวชรักษ์ <br/>
อีเมล tauhoo_ice@hotmail.com <br/>
เบอร์โทรศัพท์ 0643233512

## วิธีติดตั้ง

1. ต้องติดตั้ง node.js ก่อน ( https://nodejs.org/en/ )
2. clone project

```bash
git clone https://github.com/Tauhoo/the-internship.git
```

3. ติดตั้ง dependencies

```bash
yarn #สำหรับ yarn

npm install #สำหรับ npm
```

4. ติดตั้ง CLI

```bash
yarn link #สำหรับ yarn

npm link #สำหรับ npm
```

## วิธีใช้

### Hangman

ให้เข้าไปที่โปรเจ็ค ( โฟลเดอร์ the-intership ) แล้วพิม command ด้านล้างเพื่อเริ่มเกม

```bash
yarn run hangman #สำหรับ yarn
npm run hangman #สำหรับ npm
```

### Weather

ให้เข้าไปที่โปรเจ็คแล้วพิม command ด้านล้างเพื่อ แปลง xml

```bash
weather <filename> <file output name>
#ตัวอย่าง
weather test.xml ./Document/test.json
```

### แหล่งข้อมูล

- https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly
- https://flaviocopes.com/node-input-from-cli/
- https://stackoverflow.com/questions/43638105/how-to-get-synchronous-readline-or-simulate-it-using-async-in-nodejs
- https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program
- https://www.npmjs.com/package/xml2js

### Library

- xml2js
- fs
- readline
- util
