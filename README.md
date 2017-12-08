# Mobileshop

一个手机网页端商城 Demo (Vue + Django)

运行环境：
- Python 3.6.3
- Django 1.11.7

建议开 Virtualenv 跑

## 开始

### 1. 克隆到本地

```
git clone https://github.com/Agrimonia/Mobileshop.git
cd Mobileshop
```

### 2. 测试

> 需要在本地建一个数据库，然后配置 mysql.cnf
```
pip install -r requirements.txt
cd frontend
npm install
npm run build
cd ..
python manage.py migrate
python manage.py runserver
```

### 3. 开发进度

- [x] Hello World
- [x] 数据库换成 MySQL，用 Postman 测试接口可用
- [ ] 根据需求设计数据库
- [ ] 完成前端部分页面设计
- [ ] 重写 models 和 views
- [ ] 完成前端开发（想用 `Vant` ）
