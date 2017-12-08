# Mobileshop

一个手机网页端商城Demo (Vue + Django)
运行环境：
Python 3.6.3
Django 1.11.7

## 开始

### 1. 克隆到本地

```
git clone https://github.com/Agrimonia/Mobileshop.git
cd Mobileshop
```

### 2. 测试

```
pip install -r requirements.txt
cd frontend
npm install
npm run build
cd ..
python manage.py migrate
python manage.py runserver
```

## 目录结构

.
├── LICENSE
├── README.md
├── backend
│   ├── __init__.py
│   ├── __pycache__
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── favicon.ico
├── frontend
│   ├── README.md
│   ├── build
│   ├── config
│   ├── dist
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   ├── static
│   └── test
├── manage.py
├── mobileshop
│   ├── __init__.py
│   ├── __pycache__
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── mysql.cnf
├── mysql.cnf.default
└── venv
    ├── bin
    ├── include
    ├── lib
    ├── pip-selfcheck.json
    └── pyvenv.cfg
