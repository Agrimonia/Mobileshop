# Mobileshop

一个手机网页端商城Demo (Vue + Django)


## 开始

### 1. 克隆项目到本地

```
git clone https://github.com/Agrimonia/Mobileshop.git
cd Mobileshop
```
### 2. 安装依赖

```
cd frontend
npm install
```

### 3. 测试

```
npm run dev
cd ..
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
### 4. 编译

```
npm run build
```

## 目录结构

.
├── LICENSE
├── README.md
├── backend
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── frontend
│   ├── README.md
│   ├── build
│   ├── config
│   ├── dist
│   ├── index.html
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   ├── static
│   └── test
├── manage.py
├── mobileshop
│   ├── __init__.py
│   ├── __pycache__
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── venv
    ├── bin
    ├── include
    ├── lib
    ├── pip-selfcheck.json
    └── pyvenv.cfg
