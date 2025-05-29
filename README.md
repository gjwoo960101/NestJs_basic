# nestJs_basic

- generator

```
// 자동 import가되어서 편리
nest g module/controller/service (directory name)
```

# Providers

```
provider는 services,repositories,factories,hlpers 등이 있다.
provider는 종속성에 의해 inject(주입)할 수 있다.
즉, provider 객체의 생성 및 연결은 nest runtime 시스템에 위임될수있다.
컨트롤러는 HTTP요청을 처리하고 복잡한 작업은 provider에게 위임을 한다.
provider는 module에서 선언하는 일반 javascript class다.
```
