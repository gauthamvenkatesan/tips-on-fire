/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.web.tipsonfire.exceptions

import com.web.tipsonfire.model.CommonResponse
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler


@ControllerAdvice
class ProductExceptionController {

    @ExceptionHandler(value = [TipsOnFireException::class])
    fun tipsOnFireExceptionHandler(exception: TipsOnFireException?): ResponseEntity<Any> {
        if (exception != null) {
            return ResponseEntity(CommonResponse("",exception.message, responseBody = "" ), HttpStatus.BAD_REQUEST)
        }
        return ResponseEntity("Tips On Fire Exception Handler", HttpStatus.INTERNAL_SERVER_ERROR)
    }
}