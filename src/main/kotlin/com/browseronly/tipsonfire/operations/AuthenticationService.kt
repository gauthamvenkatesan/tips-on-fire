/*
 * Copyright (c) 2021 tipsonfire.com | Terms of Service | Privacy Policy
 */

package com.browseronly.tipsonfire.operations

import com.browseronly.tipsonfire.model.CommonResponse
import com.browseronly.tipsonfire.model.LoginForm

fun authenticate(loginForm: LoginForm): CommonResponse {
    return CommonResponse(serverResponse = "Login Successful", errorResponse = "")
}
