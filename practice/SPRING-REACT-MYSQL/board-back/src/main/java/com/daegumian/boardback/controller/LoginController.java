package com.daegumian.boardback.controller;

import org.springframework.web.bind.annotation.RestController;

import com.daegumian.boardback.constants.SecurityConstants;
import com.daegumian.boardback.domain.AuthenticationRequest;
import com.daegumian.boardback.prop.JwtProp;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Slf4j
@RestController
public class LoginController {

  @Autowired
  private JwtProp jwtProp;

  //login
  //username
  //password
  @PostMapping("login")
  public ResponseEntity<?> login(@RequestBody AuthenticationRequest authReq) {

    String username = authReq.getUsername();
    String password = authReq.getPassword();

    log.info("username: " + username);
    log.info("password: " + password);

    //사용자 권한
    List<String> roles = new ArrayList<>();
    roles.add("ROLE_USER");
    roles.add("ROLE_ADMIN");

    byte[] signingKey = jwtProp.getSecretKey().getBytes();

    //토큰 생성
    String jwt = Jwts.builder()
                    //  .signWith(시크릿키, 알고리즘)
        .signWith(Keys.hmacShaKeyFor(signingKey), Jwts.SIG.HS512)
        .header()
          .add("typ", SecurityConstants.TOKEN_TYPE)
        .and()
        .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 5))
        .claim(username, signingKey)
        .claim("rol", roles)
        .compact();
        
    log.info("jwt :" + jwt);

    return new ResponseEntity<String>(jwt, HttpStatus.OK);
  }
  


}
