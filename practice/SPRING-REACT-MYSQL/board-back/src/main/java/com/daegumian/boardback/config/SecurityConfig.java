package com.daegumian.boardback.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;

import lombok.RequiredArgsConstructor;

//SpringSecurity 5.4 이상

@Configuration //내부에서 빈으로 등록할 설정 클래스로 지정할 수 있다
@EnableWebSecurity //시큐리티에 대한 설정도 가능
public class SecurityConfig {
  
  //SpringSecurity 5.4 이상
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    // 폼 기반 로그인
    http.formLogin((login) -> login.disable());

    // HTTP 기본 인증 비활성화
    http.httpBasic((basic) -> basic.disable());

    // CSRF 공격 방어 비활성화
    http.csrf((csrf) -> csrf.disable());

    // 세션 관리 정책 설정
    // 세션 인증을 사용하지 않고, JWT 를 사용하여 인증하기 때문에, 세션 불필요
    http.sessionManagement((management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS)));




    return http.build();

  }
  



  }



  
