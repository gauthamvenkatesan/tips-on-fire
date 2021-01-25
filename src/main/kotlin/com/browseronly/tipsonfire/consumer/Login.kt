/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.browseronly.tipsonfire.consumer

import com.browseronly.tipsonfire.model.CommonResponse
import com.browseronly.tipsonfire.model.LoginForm
import com.browseronly.tipsonfire.operations.authenticate
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class Login {
    @PostMapping("/login")
    fun  login(@RequestParam body:Map<String,String>):ResponseEntity<CommonResponse>{
        println("Login Request $body")
        val loginForm = LoginForm(body.getOrDefault("password",""),body.getOrDefault("userId",""))
        val authResponse = authenticate(loginForm);
        return ResponseEntity.status(HttpStatus.OK).body(authResponse);
    }

}