/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.operations

import com.arangodb.ArangoCursor
import com.web.tipsonfire.dto.Users
import com.web.tipsonfire.exceptions.TipsOnFireException
import com.web.tipsonfire.exceptions.UnAuthenticatedException
import com.web.tipsonfire.model.CommonResponse
import com.web.tipsonfire.model.LoginForm
import com.web.tipsonfire.repository.UserRepository
import org.springframework.data.domain.Example
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.*

@Service
class AuthenticationService (val usersRepo: UserRepository){

    fun authenticate(loginForm: LoginForm): CommonResponse {
       var authenticated:Boolean = false
        //val foundUser = usersRepo.findAll(Example.of(user))
        val foundUser:Iterable<Users?>? = usersRepo.findByName(loginForm.userName, null)
        if (foundUser != null) {
            for( user1 in foundUser){
                if (user1 != null) {
                    println("Users retrieved ${user1.toString()}")
                    if(Arrays.equals(loginForm.password.toByteArray(),user1.password.toByteArray()))
                        authenticated = true;
                }
            }
        } else {
            println("${loginForm.toString()} User not found")
            throw UnAuthenticatedException("User authentication failed")
        }
        //var users:Users  = repo.findOne("users/942").
        if(authenticated)
            return CommonResponse(serverResponse = "Login Successful", errorResponse = "", "")//Gson().toJson(foundUser))
        else {
            println("${loginForm.toString()} Incorrect password")
            throw UnAuthenticatedException("User authentication failed")
        }
    }

    fun signUp(loginForm: LoginForm): CommonResponse? {
        val foundUser:Iterable<Users?>? = usersRepo.findByName(loginForm.userName, null)
        if (foundUser != null) {
            for( user1 in foundUser){
                println("Users retrieved ${user1.toString()}")
                throw TipsOnFireException("User name already exists")
            }
        }
        println("User not found ${loginForm.userName}, proceed to on board")
        val user = Users( null, loginForm.userName, "67",loginForm.password , LocalDateTime.now())
        usersRepo.save(user)
        println("User Saved  ${user.toString()}");
        if(user.id != null) {
            return CommonResponse("SignUp Successful", "", "")
        }else
            throw TipsOnFireException("SignUp Unsuccessful")
    }
}