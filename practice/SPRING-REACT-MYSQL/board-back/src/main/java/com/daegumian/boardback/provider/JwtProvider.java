package com.daegumian.boardback.provider;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.daegumian.boardback.prop.JwtProp;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.InvalidClaimException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Jwts.SIG;
import io.jsonwebtoken.security.Keys;


@Component //재화역전을 통한 의존성 주입이 가능함
public class JwtProvider {

  @Autowired
  private JwtProp jwtProp;

  @Value("${secret-key}")
  private String secretKey;

  public String create(String email) {

    //시크릿키 사용 방법 0 (공식문서)
    // SecretKey key = getMySecretKey()
    // byte[] signature = hmacSha256( concatenated, key )

    //시크릿키 사용 방법 1
    // String SecretKey = jwtProp.getSecretKey(); //굳이 왜 변경할까? 바로 형변환해서 쓰면되는데? (맞음, 굳이 사용할 필요는 없음)
    byte[] signingKey = secretKey.getBytes(StandardCharsets.UTF_8); // 이 작업만 있으면 됨. jwtProp에서 시크릿 키를 가져오니깐.

    System.out.println("시크릿 키 : " + secretKey); //properties에서 바로 가져온 sercretKey
    System.out.println("시키릿 키(바이트 변환) : " + signingKey);

    //시크릿키 사용 방법 2 (jjwt-api:0.10.5' 방법) (굳이 사용할 필요 없음) (바로 형변환 가능)
    // Key Key = Keys.hmacShaKeyFor(SecretKey.getBytes(StandardCharsets.UTF_8));

    Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));

    String jwt = Jwts.builder()
        .signWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8)), Jwts.SIG.HS512)
        .subject(email)
        .issuedAt(new Date())
        .expiration(expiredDate)
        .compact();

    return jwt;
  }
  
  public String validate(String jwt) {

    //안되면 주석 해제
    // SecretKey keys = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));

    try {

    Jwts.parser().verifyWith(Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8))).build().parseSignedClaims(jwt);


  } catch (JwtException e) {
    e.printStackTrace();
    return null;
  }

  return jwt;

  }
  



}
