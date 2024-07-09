/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.consumer

import UserDAO
import com.web.tipsonfire.model.CommonResponse
import com.web.tipsonfire.model.LoginForm
import com.web.tipsonfire.operations.AuthenticationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class LoginController(
    @Autowired
    var repo: UserDAO
){

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/login")
    fun  login(@RequestParam body:Map<String,String>):ResponseEntity<CommonResponse>{
        println("Login Request $body")
        val loginForm = LoginForm(body.getOrDefault("userName",""),body.getOrDefault("password",""))
        val authResponse = AuthenticationService(repo).authenticate(loginForm);
        return ResponseEntity.status(HttpStatus.OK).body(authResponse);
    }

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/signUp")
    fun  signUp(@RequestParam body:Map<String,String>):ResponseEntity<CommonResponse>{
        println("SignUp Request $body")
        val loginForm = LoginForm(body.getOrDefault("userName",""),body.getOrDefault("password",""))
        val authResponse = AuthenticationService(repo).signUp(loginForm);
        return ResponseEntity.status(HttpStatus.OK).body(authResponse);
    }

}