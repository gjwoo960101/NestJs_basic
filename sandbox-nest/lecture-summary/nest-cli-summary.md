### nest cli 명령어 정리

## 프로젝트 생성
```
nest new [프로젝트명] --skip-git
프로젝트를 생성하고 git을 초기화하는 작업은 skip한다
git 초기화 작업은 필수 아님

nest new ./ 
현재 디렉토리에 프로젝트 생성 위 명령어와 달리 새로 폴더가 생기지 않음
```

## module,controller,service 생성 명령어
```
- module
nest g module [모듈명]
모듈명에 따른 새로운 폴더 생성 및 모듈 생성
app.module에 자동으로 import된다.

- controller
nest g controller [모듈명] --no-spec
- 생성한 모듈이 있는 디렉토리에 controller를 생성
- module파일 안에 생성한 controller를 등록
- --no-spce은 테스트코드를 위한 파일생성을 하지 않고 만든다.(필수X)

- service
nest g service [모듈명] --no-spce
- 생성한 모듈이 있는 디렉토리에 service 생성
- module파일 안에 생성한 service를 등록
- --no-spce은 테스트코드를 위한 파일생성을 하지 않고 만든다.(필수X)


```