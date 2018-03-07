# api
node provide api

# 安装
npm install

# 开发环境
node ./db/dbInit.js --dev (连接数据库，创建数据表)
npm run dev (开发环境，启动应用)

# 生产环境
node ./db/dbInit.js --pro (连接数据库，创建数据表)
nohup npm start --production &   (生产环境，启动应用)