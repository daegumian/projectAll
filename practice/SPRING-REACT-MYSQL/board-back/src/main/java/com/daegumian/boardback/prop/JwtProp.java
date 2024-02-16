package com.daegumian.boardback.prop;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
//중요한 정보는(시크릿키) 프로퍼티스에 저장 해놓고 불러와서 사용한다.
@ConfigurationProperties("com.daegumian.boardback") //com.daegumian.boardback 경로 하위 속성들을 지정
public class JwtProp {
  
  //com.daegumian.boardback.secret-key -> secretKey : {인코딩된 시크릿 키}
  private String secretKey;

}
